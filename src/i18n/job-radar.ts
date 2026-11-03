import type { Locale } from './routes';

const en = {
  backLabel: '← Back to work',
  lead: 'External job offers need a consistent structure before they can be compared, filtered, and ranked.',
  introduction:
    'Job Radar imports offers from Remotive and Python.org, stores normalized records in PostgreSQL, and exposes them through a FastAPI REST API and a simple web interface. Its scoring profile targets junior remote Python/backend roles—the kind of work I’m looking for.',
  engineeringFocus:
    'The engineering work centers on interpreting source data, deciding what counts as a duplicate, and making ranking behavior predictable.',
  liveLabel: 'Open live project →',
  sources: {
    label: 'SOURCES',
    title: 'Two sources, one record shape',
    inputs:
      'Remotive supplies JSON with job descriptions. Python.org provides an HTML listing page. Its importer extracts the available fields and categories without following individual job pages.',
    normalization:
      'Both importers produce the same record shape. Source-specific company and location fields become shared fields. Remotive descriptions are converted from HTML to plain text, removing scripts, styles, and other non-content elements while retaining readable text.',
    seniority: {
      beforeCode:
        'Both sources use title keywords to infer seniority, with explicit precedence when several labels match. An unrecognized title becomes',
      afterCode:
        '. Remotive records are marked remote; Python.org’s remote flag comes from title and location wording, including checks for explicit negations.',
    },
    failures:
      'Malformed records are skipped. A failed request or an unrecognized source response fails the import. These are separate outcomes: incomplete data should not be mistaken for a successful fetch from a broken source.',
  },
  trace: {
    label: 'SYSTEM TRACE',
    title: 'From source data to ranked responses',
    importLabel: 'IMPORT',
    sourceLabel: 'SOURCE',
    source: 'Remotive JSON / Python.org listing HTML',
    normalizeLabel: 'NORMALIZE',
    normalize: 'Source-specific extraction and normalization → shared job record',
    identifyLabel: 'IDENTIFY',
    identify: 'Exact URL checks → per-record inserts',
    storeLabel: 'STORE',
    constraint: 'unique URL constraint',
    readLabel: 'READ',
    requestLabel: 'REQUEST',
    filterLabel: 'FILTER',
    filter: 'Database filters',
    orderLabel: 'ORDER',
    dateLabel: 'Date',
    date: 'SQL ordering → pagination',
    scoreLabel: 'Score',
    score: 'Load filtered candidates → calculate scores → sort in memory → select page',
    returnLabel: 'RETURN',
    response: 'Response with computed',
    consumeLabel: 'CONSUME',
    consume: 'Frontend / API consumer',
    caption:
      'HTTP import endpoints and the CLI share import services. Scores are calculated when returning records; score ordering also calculates them before pagination. Manual job creation writes directly to storage without importer normalization.',
  },
  identity: {
    label: 'IDENTITY',
    title: 'What counts as a duplicate',
    priority:
      'For the MVP, the practical priority was preventing repeated imports from creating duplicate offers.',
    persistence:
      'The shared persistence function checks incoming URLs against stored records and URLs already handled in the batch. A database unique constraint provides a second check. Each insert uses a savepoint, allowing a recognized URL conflict to be skipped while the remaining records are processed.',
    exactUrl:
      'Identity is based on the exact URL. Existing URLs are skipped without updating their records. Tracking parameters and URL aliases are not unified.',
    limits:
      'This prevents repeated insertion of the same URL, but it does not identify every duplicate vacancy. The same role can appear on different websites with different URLs—and possibly different titles—and remain as separate records.',
  },
  api: {
    label: 'API & PERSISTENCE',
    title: 'From stored records to API responses',
    storage:
      'SQLAlchemy maps a single job model to PostgreSQL, with schema changes managed through Alembic. The stored timestamp records when an offer was added locally, not when the source published it.',
    queries:
      'The API supports remote and seniority filters, text search, and limit/offset pagination. Text search checks title, company, location, and description; search wildcard characters are treated literally. Results can be ordered by date added or match score, with explicit tie-breaking rules.',
    interface:
      'OpenAPI and Swagger expose the request and response structure. The frontend reads the same listing endpoint, keeping retrieval and ranking behavior in the backend.',
    imports:
      'Imports run through protected HTTP endpoints or a one-shot CLI. The CLI attempts both sources with separate database sessions, so one source failure does not stop the other attempt.',
  },
  scoring: {
    label: 'SCORING',
    title: 'A score for the roles I’m looking for',
    inputs: 'The score uses four inputs: title, description, remote status, and seniority.',
    rules:
      'A relevance check runs first. A record needs a matching developer-role title or a Python, FastAPI, or SQLAlchemy signal before it receives points. Eligible records gain points for technology matches, a relevant title, remote work, and junior or intern seniority. Senior and leadership levels subtract points.',
    weights:
      'Python contributes 20 points; FastAPI and PostgreSQL contribute 10 each. Each technology counts once, so repeated keywords cannot inflate the score. URLs and source metadata are removed from the scoring text.',
    meaning:
      'The result is calculated when records are returned, rather than stored. The same inputs under the same rules produce the same score, bounded between 0 and 100. It expresses keyword relevance to this profile, not hiring probability or semantic suitability.',
    ordering:
      'Ordering exposes a practical trade-off. Date ordering and pagination run in SQL. Score ordering loads all filtered candidates, calculates their scores in Python, sorts them, and then selects the requested page.',
  },
  verification: {
    label: 'VERIFICATION',
    title: 'What is verified',
    coverage:
      'The pytest suite covers normalization, repeated imports, URL conflicts, scoring rules, filters, pagination, and ordering. It also checks malformed source responses, import authentication, and source-failure isolation in the CLI.',
    limits:
      'External responses are mocked, and database tests use SQLite. PostgreSQL migration SQL is rendered and the driver is checked, but the suite does not exercise a live PostgreSQL server.',
    environment: {
      beforeCode:
        'GitHub Actions is configured to run pytest under Python 3.12 on pushes and pull requests targeting',
      afterCode:
        '. Docker Compose supplies a local application and PostgreSQL environment; database migrations remain an explicit step.',
    },
  },
  limitations: {
    label: 'LIMITS',
    title: 'Where the current approach stops',
    refresh: {
      title: 'Existing offers are not refreshed.',
      description:
        'Reimports leave stored content unchanged, and offers are not removed when they disappear from a source.',
    },
    detail: {
      title: 'Source detail varies.',
      description:
        'Python.org listing summaries provide fewer scoring signals than full descriptions. Keyword-based seniority and remote inference can miss ambiguous wording.',
    },
    sorting: {
      title: 'Score sorting processes every filtered candidate.',
      description: 'Its work grows with that result set, even when the requested page is small.',
    },
    note: 'These are boundaries of the current implementation, not all deliberate strategies established at the beginning.',
  },
  reflection: {
    label: 'REFLECTION',
    title: 'What I learned, and what I would change next',
    learning:
      'Scoring and duplicate handling were the most educational parts of the project. They required working with both the data available and the limits of what it could establish.',
    next: 'I would add more job sources next: more useful offers, but also more varied data to test normalization, deduplication, and scoring assumptions. That variety could expose edge cases that do not appear with only two sources.',
  },
};

export type JobRadarContent = typeof en;

export const jobRadar = {
  en,
  es: {
    backLabel: '← Volver a proyectos',
    lead: 'Las ofertas de empleo de distintas fuentes necesitan una estructura común para poder compararlas, filtrarlas y ordenarlas.',
    introduction:
      'Job Radar importa ofertas de Remotive y Python.org, almacena registros normalizados en PostgreSQL y los expone mediante una REST API con FastAPI y una interfaz web sencilla. Su perfil de scoring está orientado a puestos junior remotos de Python/backend, el tipo de trabajo que busco.',
    engineeringFocus:
      'El trabajo de ingeniería se centra en interpretar los datos de origen, decidir qué se considera un duplicado y conseguir que el orden de los resultados sea predecible.',
    liveLabel: 'Abrir proyecto en línea →',
    sources: {
      label: 'FUENTES',
      title: 'Dos fuentes, una estructura de registro',
      inputs:
        'Remotive proporciona JSON con descripciones de las ofertas. Python.org ofrece una página HTML con un listado. Su importador extrae los campos y las categorías disponibles sin acceder a las páginas individuales de cada oferta.',
      normalization:
        'Ambos importadores producen registros con la misma estructura. Los campos de empresa y ubicación propios de cada fuente se convierten en campos comunes. Las descripciones de Remotive se convierten de HTML a texto plano: se eliminan scripts, estilos y otros elementos ajenos al contenido, conservando el texto legible.',
      seniority: {
        beforeCode:
          'Ambas fuentes usan palabras clave del título para inferir el nivel de experiencia, con una precedencia explícita cuando coinciden varias categorías. Un título no reconocido se clasifica como',
        afterCode:
          '. Los registros de Remotive se marcan como remotos; en Python.org, la condición de trabajo remoto se infiere del texto del título y la ubicación, comprobando también las negaciones explícitas.',
      },
      failures:
        'Los registros mal formados se omiten. Una solicitud fallida o una respuesta de origen no reconocida hace fallar la importación. Son resultados distintos: los datos incompletos no deben confundirse con una obtención exitosa desde una fuente que está fallando.',
    },
    trace: {
      label: 'RECORRIDO DEL SISTEMA',
      title: 'De los datos de origen a las respuestas ordenadas',
      importLabel: 'IMPORTACIÓN',
      sourceLabel: 'FUENTE',
      source: 'JSON de Remotive / HTML del listado de Python.org',
      normalizeLabel: 'NORMALIZAR',
      normalize: 'Extracción y normalización por fuente → registro de oferta común',
      identifyLabel: 'IDENTIFICAR',
      identify: 'Comprobaciones de URL exacta → inserciones por registro',
      storeLabel: 'ALMACENAR',
      constraint: 'restricción de unicidad de URL',
      readLabel: 'LECTURA',
      requestLabel: 'SOLICITAR',
      filterLabel: 'FILTRAR',
      filter: 'Filtros en la base de datos',
      orderLabel: 'ORDENAR',
      dateLabel: 'Fecha',
      date: 'Orden en SQL → paginación',
      scoreLabel: 'Score',
      score:
        'Cargar candidatos filtrados → calcular scores → ordenar en memoria → seleccionar página',
      returnLabel: 'DEVOLVER',
      response: 'Respuesta con el valor calculado de',
      consumeLabel: 'CONSUMIR',
      consume: 'Frontend / consumidor de la API',
      caption:
        'Los endpoints HTTP de importación y la CLI comparten los servicios de importación. Los scores se calculan al devolver los registros; al ordenar por score, también se calculan antes de paginar. La creación manual de ofertas escribe directamente en el almacenamiento sin pasar por la normalización de los importadores.',
    },
    identity: {
      label: 'IDENTIDAD',
      title: 'Qué se considera un duplicado',
      priority:
        'Para el MVP, la prioridad práctica era evitar que las importaciones repetidas generaran ofertas duplicadas.',
      persistence:
        'La función compartida de persistencia comprueba las URLs entrantes frente a los registros almacenados y las URLs ya procesadas en el lote. Una restricción de unicidad en la base de datos añade una segunda comprobación. Cada inserción usa un savepoint, lo que permite omitir un conflicto de URL reconocido y continuar procesando los demás registros.',
      exactUrl:
        'La identidad se basa en la URL exacta. Las URLs existentes se omiten sin actualizar sus registros. No se unifican los parámetros de seguimiento ni los alias de URL.',
      limits:
        'Esto evita insertar repetidamente una misma URL, pero no identifica todas las vacantes duplicadas. Un mismo puesto puede aparecer en distintos sitios con URLs diferentes —y posiblemente títulos distintos— y conservarse como registros separados.',
    },
    api: {
      label: 'API Y PERSISTENCIA',
      title: 'De los registros almacenados a las respuestas de la API',
      storage:
        'SQLAlchemy mapea un único modelo de oferta a PostgreSQL, y Alembic gestiona los cambios del esquema. La marca de tiempo almacenada indica cuándo se añadió la oferta localmente, no cuándo la publicó la fuente.',
      queries:
        'La API permite filtrar por trabajo remoto y nivel de experiencia, buscar por texto y paginar con limit/offset. La búsqueda de texto consulta título, empresa, ubicación y descripción; los caracteres comodín de búsqueda se tratan literalmente. Los resultados se pueden ordenar por fecha de incorporación o match score, con reglas explícitas de desempate.',
      interface:
        'OpenAPI y Swagger exponen la estructura de las solicitudes y respuestas. El frontend consulta el mismo endpoint de listado, por lo que la recuperación de datos y la lógica de ordenación permanecen en el backend.',
      imports:
        'Las importaciones se ejecutan mediante endpoints HTTP protegidos o una CLI de ejecución única. La CLI intenta importar ambas fuentes con sesiones de base de datos separadas, de modo que el fallo de una fuente no impide intentar la otra.',
    },
    scoring: {
      label: 'SCORING',
      title: 'Un score para los puestos que busco',
      inputs:
        'El score utiliza cuatro datos: título, descripción, condición de trabajo remoto y nivel de experiencia.',
      rules:
        'Primero se comprueba la relevancia. Para recibir puntos, un registro debe tener un título que coincida con un puesto de desarrollo o una señal de Python, FastAPI o SQLAlchemy. Los registros elegibles suman puntos por coincidencias de tecnologías, un título relevante, trabajo remoto y nivel junior o de práctica. Los niveles senior y de liderazgo restan puntos.',
      weights:
        'Python aporta 20 puntos; FastAPI y PostgreSQL aportan 10 cada uno. Cada tecnología cuenta una sola vez, por lo que repetir palabras clave no aumenta el score. Las URLs y los metadatos de origen se eliminan del texto que se evalúa.',
      meaning:
        'El resultado se calcula al devolver los registros, en lugar de almacenarse. Los mismos datos, bajo las mismas reglas, producen el mismo score, limitado al rango de 0 a 100. Expresa relevancia por palabras clave para este perfil, no probabilidad de contratación ni idoneidad semántica.',
      ordering:
        'La ordenación implica un compromiso práctico. El orden por fecha y la paginación se resuelven en SQL. El orden por score carga todos los candidatos filtrados, calcula sus scores en Python, los ordena y después selecciona la página solicitada.',
    },
    verification: {
      label: 'VERIFICACIÓN',
      title: 'Qué se verifica',
      coverage:
        'La suite de pytest cubre normalización, importaciones repetidas, conflictos de URL, reglas de scoring, filtros, paginación y ordenación. También comprueba respuestas de origen mal formadas, autenticación de importaciones y aislamiento de fallos entre fuentes en la CLI.',
      limits:
        'Las respuestas externas se simulan con mocks y las pruebas de base de datos usan SQLite. Se genera el SQL de las migraciones de PostgreSQL y se comprueba el driver, pero la suite no prueba contra un servidor PostgreSQL en ejecución.',
      environment: {
        beforeCode:
          'GitHub Actions está configurado para ejecutar pytest con Python 3.12 en pushes y pull requests dirigidos a',
        afterCode:
          '. Docker Compose proporciona un entorno local con la aplicación y PostgreSQL; las migraciones de la base de datos siguen siendo un paso explícito.',
      },
    },
    limitations: {
      label: 'LÍMITES',
      title: 'Hasta dónde llega el enfoque actual',
      refresh: {
        title: 'Las ofertas existentes no se actualizan.',
        description:
          'Las reimportaciones dejan intacto el contenido almacenado y las ofertas no se eliminan cuando desaparecen de una fuente.',
      },
      detail: {
        title: 'El nivel de detalle varía según la fuente.',
        description:
          'Los resúmenes del listado de Python.org aportan menos señales para el scoring que las descripciones completas. La inferencia del nivel de experiencia y del trabajo remoto por palabras clave puede pasar por alto textos ambiguos.',
      },
      sorting: {
        title: 'El orden por score procesa todos los candidatos filtrados.',
        description:
          'El trabajo aumenta con el tamaño de ese conjunto de resultados, aunque la página solicitada sea pequeña.',
      },
      note: 'Estos son límites de la implementación actual; no todos responden a estrategias deliberadas desde el inicio.',
    },
    reflection: {
      label: 'REFLEXIÓN',
      title: 'Qué aprendí y qué cambiaría después',
      learning:
        'El scoring y la gestión de duplicados fueron las partes del proyecto de las que más aprendí. Exigieron trabajar tanto con los datos disponibles como con los límites de lo que permitían determinar.',
      next: 'El siguiente paso sería añadir más fuentes de empleo: más ofertas útiles, pero también datos más variados para poner a prueba los supuestos de normalización, deduplicación y scoring. Esa variedad podría revelar casos límite que no aparecen con solo dos fuentes.',
    },
  },
} satisfies Record<Locale, JobRadarContent>;
