import type { Locale } from './routes';

const en = {
  hero: {
    eyebrow: 'SYSTEMS · APIs · AUTOMATION',
    heading: 'Python Backend Developer',
    description:
      'I build backend systems, APIs and automation with Python to solve practical problems without unnecessary complexity.',
    exploreLabel: 'Explore Job Radar',
    githubLabel: 'View GitHub',
    focusLabel: 'FOCUS',
    focus: 'FastAPI · REST APIs · Automation',
  },
  featuredJobRadar: {
    label: 'FEATURED SYSTEM',
    problem:
      'External job offers need a consistent structure before they can be compared, filtered and ranked.',
    summary:
      'Job Radar collects external job offers, normalizes their data and removes duplicates by URL. The application exposes structured results through a FastAPI REST API with filtering and pagination, while deterministic scoring rules keep ranking behavior predictable.',
    overviewLabel: 'SYSTEM OVERVIEW',
    overviewCaption: 'Logical responsibilities, not execution order.',
    input: 'External offers',
    prepare: 'Prepare',
    ingestion: 'ingestion',
    normalization: 'normalization',
    deduplication: 'URL deduplication',
    persist: 'Persist',
    serve: 'Serve',
    filtering: 'filtering',
    pagination: 'pagination',
    scoring: 'deterministic scoring',
    identityLabel: 'URL IDENTITY',
    identity: 'Duplicate offers are identified through their source URL.',
    scoringLabel: 'DETERMINISTIC SCORING',
    scoringNote: 'Defined scoring rules keep ranking behavior predictable and repeatable.',
    evidenceLabel: 'ENGINEERING EVIDENCE',
    evidence: 'OpenAPI documentation · pytest · GitHub Actions',
    applicationLabel: 'APPLICATION',
    dataLabel: 'DATA',
    deliveryLabel: 'DELIVERY',
    caseStudyLabel: 'Read the engineering case study →',
    liveLabel: 'Open live project →',
  },
  selectedWork: {
    label: 'SELECTED WORK',
    description: 'Python notification plugin for WeeChat on Linux',
    problem: 'Relevant IRC activity can be easy to miss when attention is elsewhere.',
    summary:
      'Surtr Alert adds local notifications for channel mentions, private messages and IRC notices, with optional alerts when configured friends join or leave.',
    implementation:
      'Python callbacks respond to WeeChat signal hooks, while settings stay in WeeChat’s native plugin configuration. No external web service is required.',
    pathLabel: 'FROM IRC ACTIVITY TO A LOCAL ALERT',
    pathCaption: 'Conceptual inputs and outputs, not execution or fallback order.',
    eventsLabel: 'WeeChat events',
    mentions: 'channel mentions',
    messages: 'private messages',
    notices: 'IRC notices',
    friends: 'configured friend activity',
    hooks: 'Python signal hooks',
    controls: 'Available controls: monitored-channel filters and ignored nicks.',
    notificationLabel: 'Local notification',
    log: 'local log',
    configuration: 'Settings stored in WeeChat.',
    repositoryLabel: 'View repository →',
  },
  services: {
    label: 'SERVICES',
    introduction:
      'I build backend systems and automation for workflows that need reliable logic, data handling or integration between services.',
    backendTitle: 'Backend & APIs',
    needLabel: 'THE NEED',
    backendNeed:
      'An application needs a backend to validate requests, apply business rules and store data.',
    solutionLabel: 'WHAT I CAN BUILD',
    backendSolution: 'Python and FastAPI services with REST endpoints and PostgreSQL persistence.',
    automationTitle: 'Automation',
    automationNeed:
      'Files need processing, data needs cleaning, or the same workflow keeps being repeated manually.',
    automationSolution:
      'Python automation for repeatable workflows, including scripts, browser automation and data processing when appropriate.',
    integrationsTitle: 'API Integrations',
    integrationsNeed:
      'Information needs to move between services with different APIs and data formats.',
    integrationsSolution:
      'Python integrations that fetch, transform and send data, with explicit handling of API failures.',
    toolsTitle: 'Internal Tools',
    toolsNeed: 'A team needs a focused tool for a specific operational process.',
    toolsSolution:
      'Small internal applications built around that workflow, with the necessary data handling and business logic kept in one place.',
  },
  capabilities: {
    label: 'CAPABILITIES',
    introduction:
      'A compact view of the tools and technical areas I use across backend development, automation and integrations.',
    automationLabel: 'Automation',
    automationTools: 'Python scripting · Playwright',
    automationWork: 'Data processing · browser workflows',
    workflowLabel: 'Engineering Workflow',
    integrationsLabel: 'Integrations',
    integrationTools: 'External APIs · JSON · authentication',
    integrationWork: 'Service-to-service data flows',
  },
  about: {
    label: 'ABOUT',
    backgroundLabel: 'Background',
    focusLabel: 'Current focus',
    focus: 'My current focus is Python backend development, REST APIs and automation.',
    approachLabel: 'Engineering approach',
    approach:
      'I start by understanding the problem and its constraints. I favor straightforward implementations and choose technologies for a specific need. I automate repetitive work and test the parts most likely to fail.',
  },
  howIWork: {
    label: 'HOW I WORK',
    understandTitle: 'Understand',
    understand:
      'Clarify the problem, constraints and expected behavior before choosing a solution.',
    scopeTitle: 'Scope',
    scope: 'Define what needs to be built now and what stays outside the current solution.',
    buildTitle: 'Build',
    build:
      'Keep the implementation straightforward and use technology only when it serves a specific need.',
    verifyTitle: 'Verify',
    verify:
      'Check the behavior most likely to fail and review the result against the expected behavior before considering the work complete.',
    deliverTitle: 'Deliver',
    deliver:
      'Leave the solution understandable, document what is useful, and make relevant limitations or next steps explicit.',
  },
  contact: {
    label: 'CONTACT',
    introduction:
      'If you’re hiring for Python backend work or need help with backend systems, automation or integrations, LinkedIn is the best place to reach me.',
    contactLabel: 'Contact on LinkedIn →',
    githubLabel: 'View GitHub →',
  },
};

export type HomeContent = typeof en;

export const home = {
  en,
  es: {
    hero: {
      eyebrow: 'SISTEMAS · APIs · AUTOMATIZACIÓN',
      heading: 'Desarrollador Backend Python',
      description:
        'Desarrollo sistemas backend, APIs y automatizaciones con Python para resolver problemas concretos sin complejidad innecesaria.',
      exploreLabel: 'Explorar Job Radar',
      githubLabel: 'Ver GitHub',
      focusLabel: 'ENFOQUE',
      focus: 'FastAPI · REST APIs · Automatización',
    },
    featuredJobRadar: {
      label: 'SISTEMA DESTACADO',
      problem:
        'Las ofertas de empleo de distintas fuentes necesitan una estructura común para poder compararlas, filtrarlas y ordenarlas.',
      summary:
        'Job Radar recopila ofertas de empleo de fuentes externas, normaliza sus datos y elimina duplicados por URL. La aplicación expone los resultados estructurados mediante una REST API con FastAPI, con filtros y paginación. Las reglas de scoring deterministas permiten que el orden de los resultados sea predecible.',
      overviewLabel: 'VISIÓN DEL SISTEMA',
      overviewCaption: 'Responsabilidades lógicas, no orden de ejecución.',
      input: 'Ofertas externas',
      prepare: 'Preparar',
      ingestion: 'ingesta',
      normalization: 'normalización',
      deduplication: 'deduplicación por URL',
      persist: 'Persistir',
      serve: 'Servir',
      filtering: 'filtrado',
      pagination: 'paginación',
      scoring: 'scoring determinista',
      identityLabel: 'IDENTIDAD POR URL',
      identity: 'Las ofertas duplicadas se identifican por su URL de origen.',
      scoringLabel: 'SCORING DETERMINISTA',
      scoringNote:
        'Las reglas de scoring definidas permiten que el orden de los resultados sea predecible y repetible.',
      evidenceLabel: 'EVIDENCIA TÉCNICA',
      evidence: 'Documentación OpenAPI · pytest · GitHub Actions',
      applicationLabel: 'APLICACIÓN',
      dataLabel: 'DATOS',
      deliveryLabel: 'ENTREGA',
      caseStudyLabel: 'Leer el caso de estudio técnico →',
      liveLabel: 'Abrir proyecto en línea →',
    },
    selectedWork: {
      label: 'OTROS PROYECTOS',
      description: 'Plugin de notificaciones en Python para WeeChat en Linux',
      problem:
        'Es fácil pasar por alto actividad relevante en IRC cuando la atención está en otra parte.',
      summary:
        'Surtr Alert añade notificaciones locales para menciones en canales, mensajes privados y avisos de IRC, con alertas opcionales cuando los amigos configurados entran o salen.',
      implementation:
        'Los callbacks de Python responden a los hooks de señales de WeeChat, y los ajustes se guardan en la configuración nativa de plugins de WeeChat. No requiere un servicio web externo.',
      pathLabel: 'DE LA ACTIVIDAD EN IRC A UNA ALERTA LOCAL',
      pathCaption:
        'Entradas y salidas conceptuales, no orden de ejecución ni de alternativas ante fallos.',
      eventsLabel: 'Eventos de WeeChat',
      mentions: 'menciones en canales',
      messages: 'mensajes privados',
      notices: 'avisos de IRC',
      friends: 'actividad de amigos configurados',
      hooks: 'Hooks de señales en Python',
      controls: 'Controles disponibles: filtros de canales monitorizados y nicks ignorados.',
      notificationLabel: 'Notificación local',
      log: 'registro local',
      configuration: 'Ajustes guardados en WeeChat.',
      repositoryLabel: 'Ver repositorio →',
    },
    services: {
      label: 'SERVICIOS',
      introduction:
        'Desarrollo sistemas backend y automatizaciones para procesos que necesitan lógica fiable, manejo de datos o integración entre servicios.',
      backendTitle: 'Backend y APIs',
      needLabel: 'LA NECESIDAD',
      backendNeed:
        'Una aplicación necesita un backend que valide solicitudes, aplique reglas de negocio y almacene datos.',
      solutionLabel: 'QUÉ PUEDO DESARROLLAR',
      backendSolution:
        'Servicios con Python y FastAPI, endpoints REST y persistencia en PostgreSQL.',
      automationTitle: 'Automatización',
      automationNeed:
        'Hay archivos que procesar, datos que limpiar o un mismo proceso que se repite manualmente.',
      automationSolution:
        'Automatizaciones con Python para procesos repetibles: scripts, automatización del navegador y procesamiento de datos cuando corresponde.',
      integrationsTitle: 'Integraciones de APIs',
      integrationsNeed:
        'La información debe circular entre servicios con distintas APIs y formatos de datos.',
      integrationsSolution:
        'Integraciones con Python que obtienen, transforman y envían datos, con manejo explícito de fallos de las APIs.',
      toolsTitle: 'Herramientas internas',
      toolsNeed:
        'Un equipo necesita una herramienta concreta para un proceso operativo específico.',
      toolsSolution:
        'Pequeñas aplicaciones internas adaptadas a ese proceso, con el manejo de datos y la lógica de negocio necesarios en un solo lugar.',
    },
    capabilities: {
      label: 'CAPACIDADES',
      introduction:
        'Una síntesis de las herramientas y áreas técnicas que utilizo en desarrollo backend, automatización e integraciones.',
      automationLabel: 'Automatización',
      automationTools: 'Scripting en Python · Playwright',
      automationWork: 'Procesamiento de datos · flujos de trabajo en el navegador',
      workflowLabel: 'Prácticas y herramientas de desarrollo',
      integrationsLabel: 'Integraciones',
      integrationTools: 'APIs externas · JSON · autenticación',
      integrationWork: 'Flujos de datos entre servicios',
    },
    about: {
      label: 'SOBRE MÍ',
      backgroundLabel: 'Formación',
      focusLabel: 'Enfoque actual',
      focus:
        'Actualmente me centro en el desarrollo backend con Python, las REST APIs y la automatización.',
      approachLabel: 'Enfoque de ingeniería',
      approach:
        'Empiezo por entender el problema y sus restricciones. Prefiero implementaciones sencillas y elijo tecnologías para cubrir una necesidad concreta. Automatizo el trabajo repetitivo y pruebo las partes con mayor probabilidad de fallar.',
    },
    howIWork: {
      label: 'CÓMO TRABAJO',
      understandTitle: 'Entender',
      understand:
        'Aclarar el problema, las restricciones y el comportamiento esperado antes de elegir una solución.',
      scopeTitle: 'Delimitar',
      scope: 'Definir qué hay que construir ahora y qué queda fuera de la solución actual.',
      buildTitle: 'Construir',
      build:
        'Mantener una implementación sencilla y usar tecnología solo cuando responde a una necesidad concreta.',
      verifyTitle: 'Verificar',
      verify:
        'Comprobar lo que tiene más probabilidades de fallar y contrastar el resultado con el comportamiento esperado antes de dar el trabajo por terminado.',
      deliverTitle: 'Entregar',
      deliver:
        'Dejar una solución comprensible, documentar lo que sea útil y explicar las limitaciones relevantes o los próximos pasos.',
    },
    contact: {
      label: 'CONTACTO',
      introduction:
        'Si buscas a alguien para trabajar en backend con Python o necesitas ayuda con sistemas backend, automatización o integraciones, LinkedIn es el mejor canal para contactarme.',
      contactLabel: 'Contactar por LinkedIn →',
      githubLabel: 'Ver GitHub →',
    },
  },
} satisfies Record<Locale, HomeContent>;
