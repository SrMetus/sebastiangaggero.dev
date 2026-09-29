// Run `npm run build`, then `node scripts/generate-cvs.mjs`.
// Requires Node.js 24 and Firefox on PATH (or set FIREFOX_BIN).
// Fetches static Manrope TTFs from a pinned upstream revision (SIL OFL 1.1).
// Firefox outlines the site's variable font when printing; static faces retain text.
// Uses Firefox's WebDriver BiDi print command, with no npm dependencies:
// https://developer.mozilla.org/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/print
import { Buffer } from 'node:buffer';
import { spawn } from 'node:child_process';
import console from 'node:console';
import { once } from 'node:events';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { extname, join, resolve, sep } from 'node:path';
import process from 'node:process';
import { clearTimeout, setTimeout } from 'node:timers';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const locales = ['en', 'es'];
for (const locale of locales) {
  await readFile(join(dist, 'cv', locale, 'index.html'));
}

const fontRevision = '6f81ebecdf65e4463b798cc07b16a4f8d5216917';
const printFonts = await Promise.all(
  [
    [400, 'regular'],
    [600, 'semibold'],
    [700, 'bold'],
  ].map(async ([weight, name]) => {
    const url = `https://raw.githubusercontent.com/aaronbell/manrope/${fontRevision}/fonts/ttf/manrope-${name}.ttf`;
    const response = await globalThis.fetch(url, { signal: globalThis.AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Font download failed: ${response.status} ${url}`);
    const data = Buffer.from(await response.arrayBuffer()).toString('base64');
    return `@font-face { font-family: "Manrope PDF"; font-style: normal; font-weight: ${weight}; src: url("data:font/ttf;base64,${data}") format("truetype"); }`;
  }),
);
const printStyle =
  printFonts.join('\n') + '\nbody { font-family: "Manrope PDF", sans-serif !important; }';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = resolve(dist, `.${pathname}`, pathname.endsWith('/') ? 'index.html' : '');
    if (!filename.startsWith(dist + sep) || !types[extname(filename)]) {
      response.writeHead(404).end();
      return;
    }
    const data = await readFile(filename);
    response.writeHead(200, { 'Content-Type': types[extname(filename)] }).end(data);
  } catch {
    response.writeHead(404).end();
  }
});

const profile = await mkdtemp(join(tmpdir(), 'sebastian-cv-firefox-'));
let browser;
let socket;
const pending = new Map();
let nextId = 0;

function command(method, params) {
  const id = ++nextId;
  return new Promise((resolveCommand, reject) => {
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timed out: ${method}`));
    }, 30000);
    pending.set(id, { resolve: resolveCommand, reject, timeout });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

try {
  // A disposable profile keeps personal browser settings and sessions untouched.
  await writeFile(
    join(profile, 'user.js'),
    ['headerleft', 'headercenter', 'headerright', 'footerleft', 'footercenter', 'footerright']
      .map((part) => `user_pref("print.print_${part}", "");`)
      .join('\n'),
  );
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const origin = `http://127.0.0.1:${server.address().port}`;

  browser = spawn(
    process.env.FIREFOX_BIN || 'firefox',
    ['--headless', '--no-remote', '--profile', profile, '--remote-debugging-port', '0'],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  );
  const endpoint = await new Promise((resolveEndpoint, reject) => {
    let log = '';
    const timeout = setTimeout(() => reject(new Error(`Firefox startup timed out: ${log}`)), 30000);
    browser.once('error', (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    browser.once('exit', (code) => {
      clearTimeout(timeout);
      reject(new Error(`Firefox exited (${code}): ${log}`));
    });
    browser.stderr.on('data', (chunk) => {
      log = (log + chunk).slice(-4000);
      const match = log.match(/WebDriver BiDi listening on (ws:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timeout);
        resolveEndpoint(`${match[1].replace(/\/$/, '')}/session`);
      }
    });
  });

  socket = new globalThis.WebSocket(endpoint);
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    const request = pending.get(message.id);
    if (!request) return;
    clearTimeout(request.timeout);
    pending.delete(message.id);
    if (message.type === 'error') request.reject(new Error(message.message));
    else request.resolve(message.result);
  });
  socket.addEventListener('close', () => {
    for (const request of pending.values()) {
      clearTimeout(request.timeout);
      request.reject(new Error('Firefox connection closed'));
    }
    pending.clear();
  });
  await once(socket, 'open');
  await command('session.new', { capabilities: {} });
  const { context } = await command('browsingContext.create', { type: 'tab' });

  for (const locale of locales) {
    await command('browsingContext.navigate', {
      context,
      url: `${origin}/cv/${locale}/`,
      wait: 'complete',
    });
    const font = await command('script.evaluate', {
      target: { context },
      expression: `async function loadPrintFonts() {
        const style = document.createElement('style');
        style.textContent = ${JSON.stringify(printStyle)};
        document.head.append(style);
        await Promise.all([400, 600, 700].map(weight => document.fonts.load(weight + ' 10.5pt "Manrope PDF"')));
        await document.fonts.ready;
        return [400, 600, 700].every(weight => document.fonts.check(weight + ' 10.5pt "Manrope PDF"'));
      }; loadPrintFonts();`,
      awaitPromise: true,
    });
    if (font.type !== 'success' || font.result.value !== true) {
      throw new Error(`Static Manrope print fonts failed to load for ${locale}`);
    }
    const { data } = await command('browsingContext.print', {
      context,
      background: true,
      orientation: 'portrait',
      page: { width: 21, height: 29.7 },
      margin: { top: 1.6, bottom: 1.6, left: 1.6, right: 1.6 },
      scale: 1,
      shrinkToFit: false,
    });
    const filename = `sebastian-gaggero-cv-${locale}.pdf`;
    await writeFile(join(root, 'public', filename), Buffer.from(data, 'base64'));
    console.log(`Created public/${filename}`);
  }
  await command('session.end', {});
} finally {
  for (const request of pending.values()) clearTimeout(request.timeout);
  socket?.close();
  if (browser && browser.exitCode === null && browser.signalCode === null) {
    const exited = once(browser, 'exit');
    browser.kill('SIGTERM');
    const timeout = setTimeout(() => browser.kill('SIGKILL'), 3000);
    await exited;
    clearTimeout(timeout);
  }
  server.closeAllConnections();
  await new Promise((done) => server.close(done));
  await rm(profile, { recursive: true, force: true });
}
