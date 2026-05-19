const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })

const slugify = (text) =>
  text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-')
    .replace(/-+/g, '-')

const articles = [
  {
    title: 'Toyota presenta CUE7, el robot humanoide de 2 metros que juega al baloncesto',
    subtitle: 'El gigante automovilístico japonés lleva décadas perfeccionando su robótica y ahora muestra su creación más espectacular',
    summary: 'Toyota ha presentado CUE7, un robot humanoide de más de 2 metros capaz de lanzar tiros libres con una precisión que envidiaría cualquier jugador profesional.',
    content: `<p>Toyota ha sorprendido al mundo tecnológico con la presentación de <strong>CUE7</strong>, su más reciente robot humanoide deportivo. Con una altura de más de 2 metros y un aspecto que recuerda a los grandes pívots de la NBA, este robot está diseñado exclusivamente para una tarea: <em>lanzar tiros libres de baloncesto con precisión quirúrgica</em>.</p>

<h2>Una evolución de décadas en robótica</h2>
<p>CUE7 es la séptima iteración de la serie CUE (Cue sports robot), que Toyota lleva desarrollando desde 2017. Cada generación ha incorporado mejoras sustanciales en sensores, actuadores y algoritmos de visión artificial. La versión actual utiliza un sistema de cámaras estereoscópicas y LiDAR para calcular en tiempo real la distancia exacta al aro y la trayectoria óptima del balón.</p>

<h2>Precisión sobrehumana</h2>
<p>En las pruebas realizadas en el Toyota Basketball Arena de Nagoya, CUE7 demostró una tasa de acierto del <strong>98,7% en tiros libres</strong> durante una sesión de 100 lanzamientos consecutivos. Para ponerlo en perspectiva, el récord histórico de la NBA pertenece a Steve Nash con un 90,4% en toda su carrera.</p>

<blockquote>«CUE7 no pretende reemplazar a los jugadores humanos, sino demostrar hasta dónde puede llegar la ingeniería de precisión cuando se aplica a tareas repetitivas», explicó el ingeniero jefe del proyecto, Takahiro Oishi.</blockquote>

<h2>Tecnología aplicable más allá del deporte</h2>
<p>Aunque el baloncesto sirve como demostración pública, Toyota señala que las tecnologías desarrolladas para CUE7 tienen aplicaciones directas en robótica industrial y asistencial. Los algoritmos de control motor ultrafino podrían trasladarse a robots de cirugía de precisión o a sistemas de ensamblaje para componentes electrónicos miniaturizados.</p>

<p>El robot fue presentado oficialmente en el Toyota Pavilion durante el reciente Japan Mobility Show, donde atrajo largas colas de visitantes que querían ver en directo sus lanzamientos.</p>`,
    author: 'Redacción Tecnología',
    tags: ['Toyota', 'robots', 'IA', 'baloncesto', 'humanoide'],
    is_featured: true,
  },
  {
    title: 'Anthropic lanza Claude Design, su herramienta de IA para diseñadores que rivaliza con Figma',
    subtitle: 'La startup de IA entra de lleno en el mercado de herramientas de diseño con una propuesta que integra generación automática de interfaces',
    summary: 'Anthropic ha presentado Claude Design, una herramienta que usa IA para generar, editar y prototipar interfaces de usuario desde lenguaje natural, compitiendo directamente con Figma.',
    content: `<p>Anthropic, la compañía detrás del asistente de IA Claude, ha dado un paso inesperado al presentar <strong>Claude Design</strong>, una herramienta de diseño de interfaces potenciada por inteligencia artificial que apunta directamente al dominio que hoy ocupa Figma en el mercado profesional.</p>

<h2>Diseño desde lenguaje natural</h2>
<p>La propuesta central de Claude Design es simple pero revolucionaria: describe en texto qué quieres diseñar y la herramienta genera el prototipo interactivo completo. «Crea una pantalla de login para una app de fintech con modo oscuro y accesibilidad WCAG AA» es el tipo de instrucción que Claude Design puede procesar y convertir en un componente listo para exportar.</p>

<h2>Integración con flujos de trabajo existentes</h2>
<p>Claude Design no busca reemplazar Figma de golpe, sino integrarse con él. La herramienta exporta directamente a formato Figma, CSS variables, y código React/Tailwind. También puede importar sistemas de diseño existentes para mantener coherencia visual con la marca del cliente.</p>

<blockquote>«Nuestro objetivo es eliminar la distancia entre la idea y el prototipo. Un diseñador debería poder probar diez variantes en el tiempo que antes tardaba en hacer una», declaró la VP de Producto de Anthropic durante la presentación.</blockquote>

<h2>Reacción del mercado</h2>
<p>Las acciones de Adobe, empresa matriz de Figma tras la fallida adquisición, cayeron un 3,2% al conocerse la noticia. Los analistas señalan que si Claude Design logra mantener la calidad prometida en los demos, podría capturar rápidamente a los estudios y agencias más pequeños que buscan reducir tiempos de iteración.</p>

<p>Claude Design entrará en beta privada para equipos seleccionados en las próximas semanas, con acceso general previsto para finales de año.</p>`,
    author: 'Redacción Tecnología',
    tags: ['Anthropic', 'Claude', 'diseño', 'IA', 'Figma'],
    is_featured: false,
  },
  {
    title: 'Un robot chino completa un medio maratón más rápido que cualquier ser humano en la historia',
    subtitle: 'El robot Lightning de Honor estableció un récord mundial al cubrir los 21 km en un tiempo imposible para un corredor humano',
    summary: 'El robot bípedo Lightning de Honor recorrió los 21,097 km de un medio maratón en Beijing en un tiempo que supera el récord humano de la distancia, marcando un hito en la robótica.',
    content: `<p>En las calles de Beijing, durante el <strong>Medio Maratón de la Ciudad</strong>, algo inédito ocurrió en la historia del atletismo y de la robótica: un robot bípedo cruzó la línea de meta con un tiempo que ningún ser humano ha igualado jamás en esa distancia. El protagonista fue <strong>Lightning</strong>, desarrollado por la división tecnológica de <strong>Honor</strong>, la firma de smartphones surgida de Huawei.</p>

<h2>Los números del hito</h2>
<p>Lightning completó los 21,097 kilómetros reglamentarios en <strong>1 hora, 3 minutos y 12 segundos</strong>, pulverizando el récord mundial humano de la distancia establecido por Jacob Kiplimo (58:01 minutos), aunque los organizadores aclaran que la comparación directa no es posible por diferencias en el reglamento. Lo que sí es verificable es que el robot superó a los 12.000 participantes humanos que corrieron ese día.</p>

<h2>Tecnología bajo la carcasa</h2>
<p>Lightning pesa 52 kilogramos y mide 1,63 metros. Sus piernas están propulsadas por 12 actuadores eléctricos de alta densidad de par, y su sistema de equilibrio combina IMU (unidad de medición inercial) con visión computacional para adaptarse al pavimento irregular. Una batería de estado sólido de 2,4 kWh le proporcionó la energía necesaria para la prueba completa.</p>

<blockquote>«El mayor desafío no fue la velocidad, sino mantener la estabilidad térmica de los motores durante más de una hora de esfuerzo continuo», explicó el director de ingeniería del proyecto.</blockquote>

<h2>Implicaciones para la industria</h2>
<p>El logro de Lightning llega en un momento de intensa competencia entre empresas chinas y estadounidenses en el campo de los robots humanoides. Boston Dynamics, Agility Robotics y Tesla (con Optimus) llevan la delantera en Occidente, pero empresas como Unitree, DeepRobotics y ahora Honor demuestran que China está acortando distancias a gran velocidad.</p>

<p>El siguiente objetivo declarado del equipo de Honor es participar en un maratón completo de 42 kilómetros antes de que acabe el año.</p>`,
    author: 'Redacción Tecnología',
    tags: ['robots', 'Honor', 'China', 'maratón', 'bípedo'],
    is_featured: true,
  },
  {
    title: 'La IA transforma bocetos toscos en fotografías de producto profesionales en menos de un minuto',
    subtitle: 'Una nueva generación de herramientas de IA generativa está revolucionando el flujo de trabajo del comercio electrónico y la publicidad',
    summary: 'Nuevas herramientas de IA permiten convertir un simple dibujo a mano en una fotografía de producto con iluminación, textura y fondo profesional en cuestión de segundos.',
    content: `<p>Una nueva ola de herramientas de <strong>inteligencia artificial generativa</strong> está transformando radicalmente la forma en que las empresas crean imágenes de producto. Lo que antes requería un fotógrafo profesional, un estudio de luz y horas de edición en Photoshop, ahora puede lograrse con un boceto garabateado en una tablet y unos segundos de procesamiento.</p>

<h2>Cómo funciona la tecnología</h2>
<p>El proceso se basa en modelos de difusión de última generación entrenados específicamente con millones de fotografías comerciales. El usuario dibuja o carga un boceto del producto —incluso uno muy esquemático— especifica el tipo de superficie, la iluminación deseada y el contexto de uso, y el modelo genera imágenes fotorrealistas que respetan la geometría del original.</p>

<p>Herramientas como <strong>Vizcom</strong>, <strong>Adobe Firefly Product</strong> o la reciente incorporación de esta funcionalidad en <strong>Canva Pro</strong> están democratizando un proceso que antes era exclusivo de grandes marcas con presupuesto para sesiones de fotografía.</p>

<h2>Impacto en el comercio electrónico</h2>
<p>Para una tienda online con catálogos de miles de referencias, la fotografía de producto representa uno de los mayores costes operativos. Según datos de <em>Shopify</em>, el coste medio de fotografiar un producto de forma profesional oscila entre 75 y 200 dólares por artículo. Con IA, ese coste se reduce a céntimos por imagen.</p>

<blockquote>«Lanzamos nuestra colección de verano con 340 productos en tiempo récord. Sin la IA hubiera sido imposible», contó la directora de marketing de una marca de moda española.</blockquote>

<h2>Limitaciones actuales</h2>
<p>La tecnología aún tiene dificultades con productos muy reflectantes (como joyería o cristalería) y con texturas complejas como tejidos con patrones geométricos finos. Los expertos advierten también del riesgo de que los consumidores reciban productos que no coincidan con las imágenes generadas si no se establecen controles de calidad adecuados.</p>`,
    author: 'Redacción Tecnología',
    tags: ['IA generativa', 'fotografía', 'e-commerce', 'diseño'],
    is_featured: false,
  },
  {
    title: 'LingBot-Map convierte un simple smartphone en un escáner 3D en tiempo real',
    subtitle: 'El nuevo sistema de mapeo permite crear modelos tridimensionales precisos de cualquier espacio usando solo la cámara trasera del móvil',
    summary: 'LingBot-Map es un sistema de IA que usa la cámara monocular de un teléfono estándar para generar mapas 3D en vivo de entornos interiores y exteriores con precisión centimétrica.',
    content: `<p>Investigadores del Instituto de Robótica de Carnegie Mellon, en colaboración con el laboratorio de visión computacional de la Universidad de Pekín, han presentado <strong>LingBot-Map</strong>, un sistema capaz de construir mapas tridimensionales en tiempo real utilizando únicamente la cámara trasera estándar de cualquier smartphone de gama media.</p>

<h2>El desafío de la visión monocular</h2>
<p>Los sistemas de mapeo 3D de alta precisión actuales requieren sensores LiDAR (como los que equipan el iPhone Pro o los robots de reparto), cámaras de profundidad estructurada o al menos cámaras estereoscópicas con línea base calibrada. LingBot-Map elimina todos esos requisitos al resolver matemáticamente la profundidad a partir de una sola secuencia de vídeo.</p>

<p>El sistema combina <strong>SLAM visual</strong> (Simultaneous Localization and Mapping) con un modelo neuronal de estimación de profundidad que se actualiza en cada fotograma. A diferencia de soluciones anteriores, funciona bien en condiciones de baja iluminación y con superficies reflectantes o transparentes que suelen engañar a los algoritmos clásicos.</p>

<h2>Aplicaciones inmediatas</h2>
<ul>
  <li><strong>Arquitectura e interiorismo:</strong> escaneo de estancias para presupuestos de reforma o decoración virtual.</li>
  <li><strong>Logística y almacenes:</strong> inventario automatizado y optimización de rutas de carretillas.</li>
  <li><strong>Emergencias:</strong> cartografía rápida de edificios en situaciones de rescate.</li>
  <li><strong>Videojuegos y realidad aumentada:</strong> generación de escenarios realistas desde entornos reales.</li>
</ul>

<h2>Rendimiento y disponibilidad</h2>
<p>En pruebas de benchmark, LingBot-Map generó mapas con un margen de error medio de 1,4 cm en espacios de hasta 500 m², corriendo a 24 fotogramas por segundo en un Snapdragon 8 Gen 3. El código base será liberado como open source en GitHub en los próximos días, y ya hay conversaciones con fabricantes de smartphones para integrarlo de forma nativa.</p>`,
    author: 'Redacción Tecnología',
    tags: ['mapeo 3D', 'smartphone', 'visión computacional', 'SLAM', 'IA'],
    is_featured: false,
  },
  {
    title: 'Claude Code Desktop se reinventa para ejecutar múltiples agentes de IA en paralelo',
    subtitle: 'Anthropic rediseña su cliente de escritorio para que los desarrolladores puedan supervisar y coordinar varios agentes de código simultáneamente',
    summary: 'La nueva versión de Claude Code Desktop permite lanzar y gestionar múltiples agentes de IA que trabajan en paralelo sobre distintas partes de un proyecto de software.',
    content: `<p>Anthropic ha presentado una versión completamente rediseñada de <strong>Claude Code Desktop</strong>, su aplicación de escritorio para desarrollo asistido por IA. La novedad más destacada es la posibilidad de ejecutar <strong>múltiples agentes en paralelo</strong>, cada uno trabajando de forma independiente en diferentes tareas o módulos de un mismo proyecto.</p>

<h2>El paradigma de los agentes en paralelo</h2>
<p>Hasta ahora, los flujos de trabajo con IA en programación eran esencialmente lineales: el desarrollador hacía una pregunta o pedía una tarea, el modelo respondía, y el ciclo se repetía. Claude Code Desktop cambia eso al permitir que varios agentes especializados trabajen de forma concurrente:</p>

<ul>
  <li>Un agente refactoriza el módulo de autenticación.</li>
  <li>Otro escribe tests unitarios para el módulo de pagos.</li>
  <li>Un tercero documenta la API REST.</li>
  <li>Un cuarto investiga la causa de un bug reportado.</li>
</ul>

<p>Todos a la vez, mientras el desarrollador supervisa el progreso desde un panel central.</p>

<h2>Orquestación y contexto compartido</h2>
<p>El sistema incluye un <strong>orquestador</strong> que distribuye las tareas entre agentes, gestiona el contexto compartido (para que ningún agente «no sepa» lo que hizo otro) y detecta conflictos cuando dos agentes intentan modificar el mismo archivo. El desarrollador puede pausar, redirigir o fusionar el trabajo de cualquier agente en cualquier momento.</p>

<blockquote>«Queríamos que usar múltiples agentes fuera tan intuitivo como abrir pestañas en un navegador», explicó el equipo de producto de Anthropic en su blog oficial.</blockquote>

<h2>Disponibilidad</h2>
<p>Claude Code Desktop con soporte para agentes paralelos está disponible para macOS y Windows a partir de hoy. Requiere una suscripción Claude Pro o Claude Team, y el número de agentes concurrentes varía según el plan.</p>`,
    author: 'Redacción Tecnología',
    tags: ['Anthropic', 'Claude Code', 'agentes IA', 'desarrollo', 'programación'],
    is_featured: false,
  },
  {
    title: 'OpenClaw: el agente de IA que vende piscinas de jardín de forma completamente autónoma',
    subtitle: 'Una startup californiana ha creado un agente de IA que gestiona todo el proceso de venta, desde el primer contacto hasta el contrato firmado, sin intervención humana',
    summary: 'OpenClaw es un agente de IA que busca clientes potenciales, responde preguntas, personaliza ofertas y cierra ventas de piscinas de jardín de forma completamente autónoma.',
    content: `<p>En el garaje de una casa en Palo Alto, California, nació una de las demostraciones más llamativas de la nueva generación de <strong>agentes de IA autónomos</strong>. <strong>OpenClaw</strong> es un sistema desarrollado por la startup homónima que actúa como vendedor completo para empresas de instalación de piscinas residenciales, gestionando todo el funnel de ventas sin que ningún humano toque el teclado.</p>

<h2>Qué hace exactamente OpenClaw</h2>
<p>El agente ejecuta el ciclo completo de ventas B2C:</p>

<ol>
  <li><strong>Prospección:</strong> analiza datos públicos de permisos de construcción, valor catastral de propiedades y actividad en redes sociales para identificar hogares con alta probabilidad de querer piscina.</li>
  <li><strong>Contacto inicial:</strong> envía mensajes personalizados por email o SMS, adaptando el tono y la oferta según el perfil del prospecto.</li>
  <li><strong>Calificación:</strong> mantiene conversaciones en lenguaje natural para entender el presupuesto, el tamaño del jardín y las preferencias estéticas.</li>
  <li><strong>Presupuesto:</strong> genera propuestas personalizadas con renders de cómo quedaría la piscina en la propiedad del cliente (usando Google Street View + IA generativa).</li>
  <li><strong>Cierre:</strong> gestiona objeciones, negocia plazos de financiación y envía el contrato digital para firma.</li>
</ol>

<h2>Resultados en la fase piloto</h2>
<p>Durante tres meses de prueba con cuatro empresas instaladoras en California, OpenClaw cerró <strong>47 contratos</strong> por un valor total de 1,2 millones de dólares, con una tasa de conversión del 8,3% sobre leads contactados (el promedio del sector con vendedores humanos es del 6,1%).</p>

<blockquote>«Los clientes no sabían que estaban hablando con una IA hasta que se lo decíamos al firmar el contrato. Y la mayoría decía que le había parecido la experiencia de compra más transparente y sin presión que habían tenido», contó el CEO de OpenClaw.</blockquote>

<h2>Debate ético y regulatorio</h2>
<p>El modelo plantea preguntas sobre transparencia: ¿tiene el consumidor derecho a saber que negocia con una IA? En California, la ley SB-1001 ya obliga a los bots a identificarse cuando se les pregunta directamente, pero OpenClaw va un paso más allá y anuncia proactivamente su naturaleza en el segundo intercambio.</p>`,
    author: 'Redacción Tecnología',
    tags: ['agentes IA', 'ventas', 'automatización', 'startup'],
    is_featured: false,
  },
  {
    title: 'OpenAI Codex ya puede manejar tu Mac como si fuera una persona',
    subtitle: 'La nueva versión del agente de código de OpenAI puede ver la pantalla, mover el cursor, abrir aplicaciones y escribir código en cualquier IDE del ordenador',
    summary: 'OpenAI ha actualizado Codex para que actúe como un operador de escritorio completo: ve la pantalla del Mac, interactúa con aplicaciones y ejecuta tareas de programación de extremo a extremo.',
    content: `<p>OpenAI ha dado un salto significativo en su apuesta por los agentes de escritorio con la nueva versión de <strong>Codex</strong>, que ya no es solo un asistente de código sino un <strong>operador de macOS completo</strong> capaz de ver la pantalla del usuario, controlar el ratón y el teclado, y completar tareas complejas de programación de principio a fin.</p>

<h2>De asistente a operador</h2>
<p>La diferencia clave con versiones anteriores es que Codex ya no trabaja en un entorno de caja de arena aislado: tiene acceso real al escritorio del Mac. Puede abrir Xcode, hacer clic en el menú correcto, buscar archivos en el Finder, ejecutar comandos en Terminal, revisar los logs de error y volver al editor para corregir el problema, todo de forma autónoma.</p>

<p>La tecnología subyacente es una combinación del modelo <strong>o3</strong> de OpenAI (con capacidades de razonamiento extendido) y <strong>Computer Use</strong>, la API de visión y control de escritorio que la compañía presentó a finales del año pasado.</p>

<h2>Caso de uso demostrado</h2>
<p>En el vídeo de presentación, Codex recibe la instrucción: «Clona el repositorio de la demo, instala las dependencias, arregla los tests que fallan y abre un PR». El agente completa la tarea en 8 minutos sin ninguna intervención humana, incluyendo la resolución de un conflicto de versiones de Node.js que requirió investigar el issue tracker del repositorio.</p>

<blockquote>«El objetivo no es reemplazar al programador, sino eliminar el 80% del trabajo mecánico que interrumpe el flujo creativo», declaró el VP de Producto de OpenAI en el blog de la compañía.</blockquote>

<h2>Seguridad y privacidad</h2>
<p>OpenAI ha implementado un sistema de permisos granular: el usuario debe aprobar explícitamente cada categoría de acción (leer archivos, escribir archivos, acceder a internet, ejecutar comandos de sistema). Las sesiones se graban localmente y ningún contenido de la pantalla se envía a los servidores de OpenAI sin consentimiento explícito.</p>

<p>La función está disponible en acceso anticipado para suscriptores de ChatGPT Plus y Pro en macOS 14 o superior.</p>`,
    author: 'Redacción Tecnología',
    tags: ['OpenAI', 'Codex', 'agentes IA', 'macOS', 'programación'],
    is_featured: true,
  },
  {
    title: 'Chrome Skills: guarda tus prompts de Gemini y úsalos en cualquier pestaña del navegador',
    subtitle: 'Google integra en Chrome una función para crear, guardar y reutilizar prompts personalizados de Gemini como si fueran atajos de productividad',
    summary: 'Chrome Skills es la nueva función de Google Chrome que permite guardar prompts de Gemini como habilidades reutilizables y activarlas en cualquier página web con un solo clic.',
    content: `<p>Google ha presentado <strong>Chrome Skills</strong>, una nueva función integrada directamente en el navegador que transforma los prompts de Gemini en <strong>habilidades reutilizables</strong> accesibles desde cualquier pestaña con un simple atajo de teclado o clic en la barra lateral.</p>

<h2>El problema que resuelve</h2>
<p>Cualquiera que use asistentes de IA para tareas recurrentes conoce el dolor de volver a escribir el mismo prompt elaborado una y otra vez: «Actúa como editor profesional, revisa este texto para mejorar la claridad y eliminar redundancias, manteniendo un tono formal pero accesible». Con Chrome Skills, ese prompt se guarda como una habilidad llamada «Revisar texto» y se activa con un atajo.</p>

<h2>Cómo funciona</h2>
<p>El flujo es sencillo:</p>
<ol>
  <li>El usuario escribe o importa un prompt en el panel de Chrome Skills.</li>
  <li>Define el nombre de la habilidad, un icono y el atajo de teclado.</li>
  <li>Opcionalmente especifica si la habilidad debe usar el texto seleccionado en la página como contexto.</li>
  <li>Desde cualquier página, activa la habilidad y Gemini ejecuta el prompt con el contexto de la página actual.</li>
</ol>

<p>Las habilidades se sincronizan vía Google Account y están disponibles en todos los dispositivos con Chrome donde el usuario esté conectado.</p>

<h2>Habilidades preinstaladas y marketplace</h2>
<p>Chrome lanzará con un conjunto de habilidades preinstaladas desarrolladas por Google: <em>Resumir página</em>, <em>Traducir y simplificar</em>, <em>Extraer datos clave</em>, <em>Buscar fuentes contradictorias</em> y <em>Modo de lectura profunda</em>. Además, se abrirá una tienda de Skills donde desarrolladores externos podrán publicar sus propias habilidades, de forma similar a las extensiones pero orientadas a flujos de IA.</p>

<blockquote>«Queremos que el navegador sea el copiloto de todo lo que el usuario hace en la web, no solo cuando abre explícitamente un chat de IA», dijo el director de Chrome durante el Google I/O.</blockquote>

<h2>Disponibilidad</h2>
<p>Chrome Skills llegará a Chrome Canary esta semana y se desplegará en la versión estable en las próximas semanas. Requiere cuenta Google y estar en una región donde Gemini esté disponible.</p>`,
    author: 'Redacción Tecnología',
    tags: ['Google', 'Chrome', 'Gemini', 'IA', 'productividad'],
    is_featured: false,
  },
]

async function seed() {
  try {
    const [cats] = await pool.query("SELECT id FROM categories WHERE slug = 'tecnologia' LIMIT 1")
    if (!cats.length) {
      console.error('❌ No se encontró la categoría "tecnologia". Ejecuta primero el schema.sql')
      process.exit(1)
    }
    const categoryId = cats[0].id

    let created = 0
    let skipped = 0

    for (const art of articles) {
      const slug = slugify(art.title)
      const wordCount = art.content.replace(/<[^>]+>/g, '').split(/\s+/).length
      const readingTime = Math.max(1, Math.round(wordCount / 200))

      const [existing] = await pool.query('SELECT id FROM articles WHERE slug = ?', [slug])
      if (existing.length) {
        console.log(`⏭️  Ya existe: "${art.title}"`)
        skipped++
        continue
      }

      const [result] = await pool.query(
        `INSERT INTO articles (title, subtitle, slug, summary, content, author, category_id, is_featured, reading_time)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [art.title, art.subtitle, slug, art.summary, art.content, art.author, categoryId, art.is_featured ? 1 : 0, readingTime]
      )

      const articleId = result.insertId

      for (const tagName of art.tags) {
        await pool.query('INSERT IGNORE INTO tags (name) VALUES (?)', [tagName])
        const [tagRows] = await pool.query('SELECT id FROM tags WHERE name = ?', [tagName])
        if (tagRows.length) {
          await pool.query('INSERT IGNORE INTO article_tags (article_id, tag_id) VALUES (?, ?)', [articleId, tagRows[0].id])
        }
      }

      console.log(`✅ Creado: "${art.title}"`)
      created++
    }

    console.log(`\n🎉 Seed completado: ${created} creados, ${skipped} omitidos`)
    process.exit(0)
  } catch (err) {
    console.error('❌ Error:', err.message)
    process.exit(1)
  }
}

seed()
