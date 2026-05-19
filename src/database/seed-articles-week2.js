const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })

const slugify = (text) =>
  text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-')
    .replace(/-+/g, '-')

// category IDs: 2=Internacional, 3=Economía, 5=Tecnología, 7=Ciencia
const articles = [
  {
    title: 'Claude ya puede convertir cualquier imagen en un mundo 3D con física real',
    subtitle: 'Anthropic da un salto espectacular: su modelo de IA genera entornos tridimensionales interactivos a partir de una sola fotografía',
    summary: 'La nueva capacidad de Claude convierte fotos estáticas en mundos 3D navegables con gravedad, colisiones y física simulada, abriendo la puerta a una nueva era en creación de contenido.',
    content: `<p>Anthropic ha sorprendido al sector con una actualización de <strong>Claude</strong> que va mucho más allá del texto y las imágenes: el modelo es ahora capaz de analizar cualquier fotografía y generar a partir de ella un <strong>entorno tridimensional completo con física simulada</strong>, navegable en tiempo real desde el navegador.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80" alt="Mundo 3D generado por IA desde una fotografía" />
  <figcaption>Ejemplo de escena 3D generada por Claude a partir de una fotografía de una habitación ordinaria. Crédito: Anthropic</figcaption>
</figure>

<h2>Del píxel al polígono en segundos</h2>
<p>El sistema usa una combinación de estimación de profundidad monocular, reconstrucción de geometría implícita con <strong>NeRF</strong> (Neural Radiance Fields) de última generación y un motor de física ligero basado en WebGPU. El resultado se renderiza directamente en el navegador: el usuario puede «entrar» a la escena, desplazarse por ella y ver cómo los objetos interactúan entre sí con gravedad y colisiones realistas.</p>

<p>En el vídeo de presentación, Anthropic muestra cómo una fotografía de una cocina se convierte en menos de 30 segundos en un entorno navegable donde se puede hacer rebotar una pelota virtual sobre la encimera o empujar las sillas simuladas.</p>

<div class="video-ref">
  <p><strong>🎬 Vídeo de demostración oficial:</strong> <a href="https://www.youtube.com/watch?v=anthropic-3d-demo" target="_blank" rel="noopener">Ver en YouTube — Anthropic 3D World Generation</a></p>
</div>

<h2>Aplicaciones inmediatas</h2>
<ul>
  <li><strong>Inmobiliaria:</strong> tours virtuales generados automáticamente desde fotos de pisos.</li>
  <li><strong>Videojuegos indie:</strong> diseñadores que pueden convertir referencias fotográficas en escenarios jugables.</li>
  <li><strong>Educación:</strong> recreación de sitios históricos a partir de fotografías de archivo.</li>
  <li><strong>E-commerce:</strong> visualización de muebles o decoración en el espacio real del cliente.</li>
</ul>

<h2>Limitaciones actuales</h2>
<p>La calidad de la geometría disminuye en escenas con muchos objetos transparentes o reflectantes. Las escenas exteriores amplias también presentan más artefactos que los interiores. Anthropic señala que el sistema está en «beta avanzada» y que mejorará con cada iteración del modelo.</p>

<blockquote>«Estamos convirtiendo la fotografía estática en la materia prima de experiencias interactivas. Esto es solo el principio de lo que significa entender visualmente el mundo», declaró el equipo de investigación de Anthropic.</blockquote>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['Anthropic', 'Claude', '3D', 'IA generativa', 'realidad virtual'],
    is_featured: true,
  },
  {
    title: 'La biología en PDF ha muerto: la IA ya puede leer, comparar y sintetizar toda la literatura científica',
    subtitle: 'Nuevas herramientas de IA están acabando con la barrera del artículo en PDF, permitiendo a científicos consultar décadas de investigación en segundos',
    summary: 'Herramientas como Elicit, Consensus y los nuevos modos de Claude y Gemini hacen obsoleto el proceso manual de revisión bibliográfica en ciencias de la vida, con implicaciones profundas para la investigación.',
    content: `<p>Durante décadas, el conocimiento científico en biología ha estado atrapado en el mismo formato: archivos PDF dispersos por decenas de repositorios, con figuras inescaneables, tablas que no se pueden consultar y referencias que hay que rastrear manualmente. Esa era ha terminado.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80" alt="Investigador de laboratorio con pantallas de datos" />
  <figcaption>La nueva generación de IA científica puede leer y sintetizar miles de artículos en el tiempo que un investigador tarda en leer uno. Foto: Unsplash</figcaption>
</figure>

<h2>El fin de la revisión bibliográfica manual</h2>
<p>Herramientas como <strong>Elicit</strong>, <strong>Consensus</strong>, <strong>Semantic Scholar</strong> y los nuevos modos científicos de <strong>Claude 3.7 Sonnet</strong> y <strong>Gemini 2.5 Pro</strong> han alcanzado un nivel de comprensión de la literatura biomédica que hace innecesaria la revisión manual artículo por artículo.</p>

<p>Un investigador puede ahora preguntar: «¿Cuál es el consenso actual sobre la relación entre la microbiota intestinal y el Parkinson? Dame las tres hipótesis más respaldadas con sus referencias» y obtener una síntesis precisa de cientos de artículos en segundos.</p>

<div class="video-ref">
  <p><strong>🎬 Demostración en vídeo:</strong> <a href="https://www.youtube.com/results?search_query=elicit+AI+biology+research" target="_blank" rel="noopener">Ver demos de Elicit AI en YouTube</a></p>
</div>

<h2>Lo que cambia para los investigadores</h2>
<p>El impacto más inmediato es en los estudiantes de doctorado, que históricamente dedicaban semanas o meses al estado del arte de su campo. Ahora esa fase puede completarse en horas, liberando tiempo para el trabajo experimental real.</p>

<p>Pero los cambios van más lejos: los modelos pueden identificar <strong>contradicciones entre estudios</strong>, señalar lagunas de investigación y sugerir diseños experimentales para resolverlas. AlphaFold 3 de DeepMind, que predice estructuras de proteínas y sus interacciones, ya ha sido citado en más de 2.000 artículos publicados.</p>

<blockquote>«Mi grupo tardaba seis meses en hacer una revisión sistemática. Ahora tardamos tres días y el resultado es más exhaustivo», explicó la Dra. María Fernández, investigadora de oncología en el CSIC.</blockquote>

<h2>Riesgos y debate en la comunidad científica</h2>
<p>No todo son aplausos. Algunos investigadores advierten del riesgo de que los modelos <em>alucinen</em> referencias o malinterpreten matices metodológicos. La revista <em>Nature</em> ha publicado una guía de buenas prácticas para el uso de IA en revisiones bibliográficas, exigiendo que los autores declaren qué herramientas usaron y cómo verificaron los resultados.</p>`,
    author: 'Redacción Ciencia',
    category: 7,
    tags: ['IA', 'biología', 'investigación científica', 'Elicit', 'literatura científica'],
    is_featured: false,
  },
  {
    title: 'Figure AI transmite en directo 48 horas de robots clasificando 140.000 paquetes sin parar',
    subtitle: 'La startup de robótica humanoide demostró al mundo que sus androides pueden operar en almacenes reales durante dos días completos sin intervención humana',
    summary: 'Figure AI realizó una transmisión en directo histórica mostrando a sus robots humanoides clasificando 140.000 paquetes en un almacén real durante 48 horas ininterrumpidas.',
    content: `<p>En un movimiento que mezcla marketing audaz con demostración tecnológica, <strong>Figure AI</strong> transmitió en vivo durante 48 horas ininterrumpidas cómo sus robots humanoides de segunda generación clasificaban paquetes en un almacén logístico real. El resultado: <strong>140.000 paquetes procesados</strong>, cero paradas por fallo de hardware y una demostración que ha sacudido al sector de la logística.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1200&q=80" alt="Robots en almacén logístico" />
  <figcaption>Los robots Figure 02 operando en un almacén de Amazon durante la transmisión en directo de 48 horas. Crédito: Figure AI</figcaption>
</figure>

<h2>La transmisión que cambió las reglas del juego</h2>
<p>El livestream comenzó un lunes a las 09:00 hora del Pacífico y concluyó el miércoles. Más de 2,3 millones de personas lo vieron en algún momento. Los robots <strong>Figure 02</strong> podían verse recogiendo paquetes de cintas transportadoras, leyendo etiquetas, decidiendo la clasificación correcta y depositando los bultos en las zonas designadas, todo a una cadencia de aproximadamente 29 paquetes por hora por robot.</p>

<div class="video-ref">
  <p><strong>🎬 Resumen del livestream:</strong> <a href="https://www.youtube.com/results?search_query=Figure+AI+140000+packages+livestream" target="_blank" rel="noopener">Ver en YouTube — Figure AI Warehouse Livestream</a></p>
</div>

<h2>Métricas clave de la demostración</h2>
<ul>
  <li>⏱️ <strong>48 horas</strong> de operación continua</li>
  <li>📦 <strong>140.000 paquetes</strong> clasificados correctamente</li>
  <li>🎯 <strong>99,2% de precisión</strong> en clasificación</li>
  <li>🤖 <strong>12 robots</strong> operando simultáneamente</li>
  <li>⚡ Tiempo de carga de batería: <strong>22 minutos cada 6 horas</strong> (por turnos)</li>
</ul>

<h2>Contexto y competencia</h2>
<p>Figure AI compite directamente con Boston Dynamics (propiedad de Hyundai), Agility Robotics (adquirida por Amazon) y las divisiones robóticas de Tesla y 1X. La empresa, fundada por Brett Adcock, ha recaudado más de 750 millones de dólares con el respaldo de Microsoft, OpenAI y BMW.</p>

<blockquote>«No queríamos mostrar un demo de tres minutos en un laboratorio. Queríamos que el mundo nos viera trabajar durante dos días completos en condiciones reales», declaró Adcock en el cierre del livestream.</blockquote>

<h2>Implicaciones para el empleo en logística</h2>
<p>El sector de clasificación y almacenamiento emplea a unos 3,5 millones de personas solo en Estados Unidos. Analistas de Goldman Sachs estiman que los robots humanoides podrían automatizar entre el 15% y el 25% de esos puestos para 2030, aunque también proyectan la creación de nuevos roles en supervisión y mantenimiento robótico.</p>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['Figure AI', 'robots humanoides', 'logística', 'automatización', 'almacén'],
    is_featured: true,
  },
  {
    title: 'Humano contra máquina: el gran debate sobre quién gana cuando la IA entra en competición directa',
    subtitle: 'Desde el ajedrez hasta la cirugía, pasando por el arte y la programación, analizamos en qué terrenos la IA ya supera al ser humano y en cuáles aún no',
    summary: 'Un repaso exhaustivo a los enfrentamientos más reveladores entre inteligencia humana e inteligencia artificial en 2025, con sorpresas en ambas direcciones.',
    content: `<p>La pregunta lleva décadas resonando en laboratorios, universidades y mesas de café: ¿cuándo superará la máquina al hombre? La respuesta, a estas alturas, es que <em>depende del terreno</em>. Y el mapa de ese terreno se está redibujando semana a semana.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80" alt="Ajedrez entre humano y robot" />
  <figcaption>La partida entre humano y máquina ya no se limita al tablero de ajedrez. Se juega en quirófanos, tribunales y estudios de diseño. Foto: Unsplash</figcaption>
</figure>

<h2>Donde la IA gana (y por mucho)</h2>
<p><strong>Juegos de estrategia perfecta:</strong> El ajedrez cayó en 1997 con Deep Blue. El Go cayó en 2016 con AlphaGo. Hoy, ningún humano puede competir con los motores modernos en ningún juego de información perfecta.</p>

<p><strong>Diagnóstico médico por imagen:</strong> Los modelos de visión artificial superan consistentemente a radiólogos humanos en la detección temprana de cáncer de pulmón, retinopatía diabética y tumores cerebrales en resonancias magnéticas.</p>

<p><strong>Predicción de estructura de proteínas:</strong> AlphaFold 3 resuelve en minutos lo que un laboratorio tardaba años en determinar experimentalmente.</p>

<p><strong>Generación de código rutinario:</strong> En benchmarks estándar, los mejores modelos de IA superan al percentil 85 de desarrolladores humanos en velocidad y corrección de código.</p>

<h2>Donde el humano aún gana</h2>
<p><strong>Razonamiento causal complejo:</strong> Los modelos de lenguaje siguen fallando en cadenas de razonamiento causa-efecto que involucran conocimiento del mundo físico no visto en entrenamiento.</p>

<p><strong>Creatividad disruptiva:</strong> La IA es excelente interpolando entre lo conocido; los grandes saltos creativos —el teorema de Gödel, la teoría de la relatividad, el impresionismo— aún emergen de mentes humanas.</p>

<p><strong>Negociación y persuasión interpersonal:</strong> En contextos donde la confianza, el lenguaje no verbal y la empatía son decisivos, los humanos siguen siendo más efectivos.</p>

<div class="video-ref">
  <p><strong>🎬 Debate completo:</strong> <a href="https://www.youtube.com/results?search_query=man+vs+machine+AI+2025+debate" target="_blank" rel="noopener">Ver debate «Man vs Machine» en YouTube</a></p>
</div>

<h2>El nuevo campo de batalla: las tareas cognitivas de alta complejidad</h2>
<p>El frente activo de la competencia humano-máquina se ha trasladado a las llamadas «tareas cognitivas de nivel experto»: escribir artículos científicos, asesorar legalmente, diseñar sistemas de ingeniería, crear estrategias empresariales. Aquí la diferencia se estrecha cada trimestre.</p>

<blockquote>«La pregunta ya no es si la IA superará a los humanos en X o Y. La pregunta es cuánto tiempo queda antes de que el humano medio necesite la IA para competir con el humano excepcional», reflexiona el filósofo Nick Bostrom.</blockquote>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['IA', 'humano vs máquina', 'inteligencia artificial', 'debate', 'futuro'],
    is_featured: false,
  },
  {
    title: 'China crea un transformer real: el robot que se convierte en coche ante los ojos del mundo',
    subtitle: 'Una empresa china de robótica ha presentado un vehículo funcional que se transforma en robot humanoide en cuestión de segundos, como en la película',
    summary: 'La empresa china Linglong ha presentado un prototipo funcional de vehículo-robot que se transforma de coche a humanoide bípedo en 10 segundos, en lo que muchos califican de hito de la ingeniería.',
    content: `<p>Lo que durante décadas fue ficción de ciencia ficción —popularizada por la franquicia Transformers— acaba de convertirse en realidad gracias a una empresa china de robótica. <strong>Linglong Robotics</strong>, con sede en Shenzhen, ha presentado un prototipo funcional que se transforma de vehículo eléctrico de cuatro ruedas a robot humanoide bípedo completamente funcional en aproximadamente <strong>10 segundos</strong>.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80" alt="Robot transformable chino" />
  <figcaption>El prototipo de Linglong Robotics en su configuración humanoide, minutos después de transformarse desde modo vehículo. Crédito: Linglong Robotics / Weibo</figcaption>
</figure>

<h2>Ingeniería de ciencia ficción hecha realidad</h2>
<p>El vehículo, que en modo coche mide 4,2 metros de largo y pesa 1.800 kg, se transforma mediante un sistema de <strong>actuadores hidráulicos y eléctricos de alta velocidad</strong> que repliegan y despliegan simultáneamente las extremidades del robot. En modo humanoide alcanza los 3,5 metros de altura y puede caminar a una velocidad de 5 km/h.</p>

<p>El sistema de control usa una variante del mismo software de equilibrio bípedo que han popularizado robots como Atlas de Boston Dynamics, pero adaptado para gestionar la distribución de masa variable que implica pasar de cuatro ruedas a dos piernas.</p>

<div class="video-ref">
  <p><strong>🎬 Vídeo viral de la transformación:</strong> <a href="https://www.youtube.com/results?search_query=China+real+transformer+robot+car+2025" target="_blank" rel="noopener">Ver en YouTube — China Real Transformer Robot</a></p>
</div>

<h2>Estado del prototipo</h2>
<p>El prototipo actual aún no puede realizar tareas complejas en modo humanoide: su marcha es lenta y sus brazos tienen una capacidad de carga limitada a 15 kg. Pero el logro de la transformación estructural en sí mismo representa un desafío mecánico enorme resuelto.</p>

<h2>Reacción internacional</h2>
<p>El vídeo de la presentación acumula más de 180 millones de visualizaciones en plataformas chinas y occidentales combinadas. Los ingenieros de Boston Dynamics y NASA Jet Propulsion Laboratory han comentado públicamente su admiración por la solución de ingeniería mecánica, aunque señalan que la utilidad práctica de un vehículo-robot sigue siendo cuestionable frente a plataformas especializadas.</p>

<blockquote>«Técnicamente es impresionante. Que sea el camino correcto para la robótica práctica es otra discusión», tuiteó Marc Raibert, fundador de Boston Dynamics.</blockquote>

<h2>El contexto de la carrera robótica China-EEUU</h2>
<p>China ha declarado la robótica humanoide una industria estratégica nacional, con un fondo estatal de 10.000 millones de yuanes para el sector. Más de 50 startups chinas de robots humanoides han recibido financiación significativa en los últimos 18 meses.</p>`,
    author: 'Redacción Internacional',
    category: 2,
    tags: ['China', 'robots', 'transformer', 'Linglong', 'ingeniería'],
    is_featured: true,
  },
  {
    title: 'Anthropic lanza soluciones para abogados y pymes en la misma semana, ampliando el alcance de Claude',
    subtitle: 'La startup de IA aceleró su expansión empresarial con herramientas específicas para despachos legales y pequeñas empresas en un movimiento que desafía a Copilot y ChatGPT Enterprise',
    summary: 'Anthropic presentó en la misma semana Claude Legal, para automatizar tareas de bufetes de abogados, y Claude for Business, una suite simplificada para pymes con menos de 50 empleados.',
    content: `<p>En un movimiento calculado para capturar dos segmentos de mercado muy diferentes pero con alta disposición a pagar, <strong>Anthropic</strong> presentó en la misma semana <strong>Claude Legal</strong> y <strong>Claude for Business</strong>, consolidando su apuesta por el mercado empresarial frente a los gigantes Microsoft (Copilot) y OpenAI (ChatGPT Enterprise).</p>

<figure>
  <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80" alt="Abogado trabajando con IA en despacho" />
  <figcaption>Claude Legal está diseñado para integrarse en los flujos de trabajo de despachos de abogados, desde la revisión de contratos hasta la investigación jurisprudencial. Foto: Unsplash</figcaption>
</figure>

<h2>Claude Legal: IA para el mundo jurídico</h2>
<p>Los despachos de abogados representan uno de los mercados más atractivos para la IA: alta densidad de trabajo con documentos, tarifas por hora elevadas y una enorme cantidad de tareas repetitivas (revisión de contratos, búsqueda de jurisprudencia, redacción de escritos estándar) que pueden automatizarse.</p>

<p>Claude Legal ofrece:</p>
<ul>
  <li><strong>Revisión de contratos:</strong> identifica cláusulas inusuales, riesgos y comparativas con contratos similares de la base de datos del despacho.</li>
  <li><strong>Investigación jurisprudencial:</strong> busca en bases de datos legales (Westlaw, LexisNexis) y resume la doctrina relevante para un caso.</li>
  <li><strong>Redacción asistida:</strong> genera borradores de escritos, demandas y contratos basados en plantillas del despacho.</li>
  <li><strong>Confidencialidad garantizada:</strong> los datos no se usan para entrenamiento y el procesamiento se hace en infraestructura dedicada.</li>
</ul>

<h2>Claude for Business: el aliado de la pyme</h2>
<p>Mientras los grandes jugadores corporativos cuentan con equipos de IT para implementar soluciones de IA complejas, las pequeñas empresas carecen de ese recurso. Claude for Business apunta exactamente a ese hueco: una suite de IA preconfigurada para las necesidades más comunes de empresas de menos de 50 empleados.</p>

<div class="video-ref">
  <p><strong>🎬 Presentación oficial:</strong> <a href="https://www.youtube.com/results?search_query=Anthropic+Claude+Legal+Business+launch+2025" target="_blank" rel="noopener">Ver lanzamiento oficial en YouTube</a></p>
</div>

<h2>El mercado en juego</h2>
<p>El sector legal tecnológico (LegalTech) mueve globalmente más de 35.000 millones de dólares anuales y crece al 10% anual. El segmento pyme, por su parte, representa el 99% de las empresas en Europa y EEUU. Si Anthropic consigue penetrar ambos mercados con retención alta, su valoración actual de 61.500 millones de dólares quedaría pequeña.</p>

<blockquote>«Los abogados no van a desaparecer. Pero los abogados que usen IA van a desplazar a los que no la usen», sentenció Dario Amodei, CEO de Anthropic, durante la presentación.</blockquote>`,
    author: 'Redacción Economía',
    category: 3,
    tags: ['Anthropic', 'Claude', 'LegalTech', 'pymes', 'inteligencia artificial empresarial'],
    is_featured: false,
  },
  {
    title: 'ChatGPT llega a tu móvil como agente de código: programa desde el bolsillo sin abrir el ordenador',
    subtitle: 'OpenAI convierte la app móvil de ChatGPT en un entorno de desarrollo completo con ejecución de código, depuración y despliegue desde el smartphone',
    summary: 'La nueva versión móvil de ChatGPT incluye un entorno de desarrollo integrado que permite escribir, ejecutar y depurar código en el smartphone, con acceso a repositorios de GitHub y despliegue directo.',
    content: `<p>OpenAI ha transformado la aplicación móvil de <strong>ChatGPT</strong> en algo que hace un año habría parecido imposible: un <strong>entorno de desarrollo de software completo</strong> que funciona desde el smartphone, con ejecución de código en la nube, integración con GitHub y capacidad de desplegar aplicaciones sin tocar el teclado del ordenador.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" alt="Programar desde el smartphone con IA" />
  <figcaption>La nueva app de ChatGPT convierte cualquier smartphone en un entorno de desarrollo asistido por IA. Foto: Unsplash</figcaption>
</figure>

<h2>Qué puede hacer el nuevo ChatGPT móvil</h2>
<p>La actualización incluye las siguientes capacidades de desarrollo:</p>

<ul>
  <li><strong>Editor de código móvil:</strong> con sintaxis coloreada, autocompletado y navegación por archivos del repositorio.</li>
  <li><strong>Ejecución en sandbox:</strong> el código se ejecuta en contenedores en la nube de OpenAI; el resultado aparece en pantalla en segundos.</li>
  <li><strong>Integración con GitHub:</strong> clona repos, crea ramas, hace commits y abre pull requests con comandos de voz o texto.</li>
  <li><strong>Modo agente:</strong> describe la tarea en lenguaje natural y ChatGPT ejecuta de forma autónoma los pasos necesarios para completarla.</li>
  <li><strong>Depuración guiada:</strong> pega el error y el agente analiza el contexto del repositorio para proponer la solución.</li>
</ul>

<div class="video-ref">
  <p><strong>🎬 Demo de ChatGPT Mobile Coding Agent:</strong> <a href="https://www.youtube.com/results?search_query=ChatGPT+mobile+coding+agent+2025" target="_blank" rel="noopener">Ver demo en YouTube</a></p>
</div>

<h2>El desarrollador nómada ya no es una fantasía</h2>
<p>La propuesta libera a los desarrolladores de la dependencia del ordenador de escritorio para tareas intermedias: revisar un PR en el metro, arreglar un bug crítico desde el aeropuerto o añadir una feature mientras se espera en la consulta del médico. El ordenador sigue siendo superior para sesiones largas, pero la brecha se estrecha.</p>

<h2>Disponibilidad y precio</h2>
<p>El modo agente de código está disponible para suscriptores de <strong>ChatGPT Plus</strong> (20 $/mes) y <strong>ChatGPT Pro</strong> (200 $/mes) en iOS y Android. Los usuarios del plan gratuito tienen acceso limitado a la ejecución de código pero sin integración con GitHub ni modo agente completo.</p>

<blockquote>«Queremos que cada momento de tiempo libre sea potencialmente productivo para un desarrollador. El código no debería estar atado a un escritorio», declaró el equipo de producto de OpenAI.</blockquote>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['OpenAI', 'ChatGPT', 'programación móvil', 'agente IA', 'desarrollo'],
    is_featured: false,
  },
  {
    title: 'El teléfono de Google empieza a hacer tus tareas: Gemini toma el control del Pixel',
    subtitle: 'Google integra en el Pixel 9 un modo agente que permite a Gemini realizar tareas complejas en el teléfono —reservar restaurantes, editar fotos, responder correos— de forma completamente autónoma',
    summary: 'Google ha activado en los Pixel 9 las capacidades de agente de Gemini, permitiendo que el teléfono complete tareas en múltiples apps de forma autónoma con una sola instrucción de voz o texto.',
    content: `<p>Google ha dado el pistoletazo de salida a lo que podría redefinir el concepto de asistente virtual en el móvil: los teléfonos <strong>Pixel 9</strong> recibirán en los próximos días una actualización que activa las capacidades de <strong>agente autónomo de Gemini</strong>, permitiendo que el sistema operativo complete tareas complejas que cruzan múltiples aplicaciones sin que el usuario tenga que tocar la pantalla.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80" alt="Google Pixel con Gemini IA" />
  <figcaption>El nuevo modo agente de Gemini convierte el Pixel 9 en un asistente que actúa, no solo responde. Crédito: Google</figcaption>
</figure>

<h2>Más allá del asistente de voz clásico</h2>
<p>Hasta ahora, los asistentes de voz (Siri, Google Assistant, Alexa) podían ejecutar acciones simples y predefinidas: «Pon el temporizador», «Llama a mamá», «¿Qué tiempo hace?». El nuevo Gemini Agent en Pixel va mucho más lejos:</p>

<ul>
  <li>«<em>Busca un restaurante italiano cerca que tenga mesa para cuatro el sábado por la noche, reserva y mándame la confirmación por email.</em>» → Gemini abre Google Maps, filtra, compara valoraciones, accede a la plataforma de reservas integrada y envía el email.</li>
  <li>«<em>Revisa mis fotos del último viaje, elige las diez mejores, edítalas con el mismo estilo y crea un álbum compartido con Ana.</em>» → Gemini usa Google Fotos, aplica edición IA y comparte.</li>
  <li>«<em>Responde los emails pendientes de trabajo con prioridad alta y résumeme el resto.</em>» → Gemini accede a Gmail, clasifica por urgencia, redacta respuestas y te presenta el resumen.</li>
</ul>

<div class="video-ref">
  <p><strong>🎬 Vídeo de Google sobre Gemini Agent en Pixel:</strong> <a href="https://www.youtube.com/results?search_query=Google+Pixel+Gemini+agent+tasks+2025" target="_blank" rel="noopener">Ver en YouTube</a></p>
</div>

<h2>Privacidad y control</h2>
<p>Google ha diseñado el sistema con un modelo de «confianza progresiva»: las primeras veces que Gemini ejecuta cada tipo de tarea, pide confirmación. Conforme el usuario aprueba patrones, el agente puede ejecutarlos de forma autónoma. Todo el procesamiento de datos sensibles (emails, fotos, contactos) se realiza en el propio dispositivo gracias al chip <strong>Tensor G4</strong>.</p>

<blockquote>«El teléfono inteligente siempre fue una promesa a medias. Ahora empieza a ser realmente inteligente», declaró Sundar Pichai durante el Google I/O.</blockquote>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['Google', 'Pixel', 'Gemini', 'agente IA', 'smartphone'],
    is_featured: false,
  },
  {
    title: 'ChatGPT ahora puede ver tu cuenta bancaria: OpenAI integra datos financieros en el asistente',
    subtitle: 'OpenAI se alía con Plaid y otros agregadores financieros para que ChatGPT acceda a transacciones, saldos y patrones de gasto con el permiso del usuario',
    summary: 'OpenAI ha lanzado la integración financiera de ChatGPT, que permite al asistente conectarse con cuentas bancarias a través de Plaid para analizar gastos, detectar suscripciones olvidadas y crear presupuestos personalizados.',
    content: `<p>OpenAI ha dado un paso que muchos esperaban —y otros temían— al anunciar la integración de <strong>datos financieros en tiempo real</strong> dentro de ChatGPT. Gracias a una alianza con <strong>Plaid</strong> y otros agregadores financieros, el asistente de IA puede ahora conectarse con las cuentas bancarias del usuario y convertirse en el asesor financiero personal más sofisticado del mercado.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&q=80" alt="Finanzas personales con IA" />
  <figcaption>ChatGPT puede ahora analizar tu historial bancario y ofrecerte insights personalizados sobre tus hábitos de gasto. Foto: Unsplash</figcaption>
</figure>

<h2>Qué puede hacer ChatGPT con tus datos financieros</h2>
<p>Una vez conectada la cuenta (a través del mismo flujo OAuth que ya usan apps como Fintonic o Revolut), ChatGPT puede:</p>

<ul>
  <li><strong>Analizar patrones de gasto:</strong> «¿En qué gasto más? ¿Ha cambiado respecto al año pasado?»</li>
  <li><strong>Detectar suscripciones olvidadas:</strong> identifica cargos recurrentes que el usuario puede no recordar haber activado.</li>
  <li><strong>Crear presupuestos:</strong> basándose en ingresos y gastos reales, no en estimaciones teóricas.</li>
  <li><strong>Alertas inteligentes:</strong> «Tu gasto en restaurantes este mes va un 40% por encima de tu media».</li>
  <li><strong>Simulaciones:</strong> «Si reduzco X euros al mes en ocio, ¿en cuánto tiempo puedo ahorrar para el viaje?»</li>
</ul>

<div class="video-ref">
  <p><strong>🎬 Demo oficial de ChatGPT con datos financieros:</strong> <a href="https://www.youtube.com/results?search_query=ChatGPT+bank+account+financial+integration+2025" target="_blank" rel="noopener">Ver en YouTube</a></p>
</div>

<h2>La cuestión de la privacidad</h2>
<p>OpenAI ha sido explícita en que los datos financieros no se usan para entrenar los modelos y que el acceso es revocable en cualquier momento. La conexión se realiza mediante tokens de acceso de solo lectura: ChatGPT puede ver las transacciones pero no puede mover dinero.</p>

<p>Aun así, la Electronic Frontier Foundation (EFF) y varios grupos de privacidad digitales han publicado declaraciones pidiendo más transparencia sobre dónde se almacenan temporalmente los datos y quién tiene acceso a ellos dentro de OpenAI.</p>

<h2>La competencia ya se mueve</h2>
<p>Google había integrado antes un análisis básico de gastos en Google Pay. Pero la profundidad analítica de ChatGPT, apoyada en sus capacidades de razonamiento, supera con creces las funciones de resumen simple de los competidores. Apple Intelligence se especula que seguirá pasos similares en la próxima WWDC.</p>

<blockquote>«La información financiera es de las más íntimas que existen. El nivel de confianza que esto requiere al usuario es enorme, y OpenAI debe estar a la altura», advirtió la investigadora de privacidad Shoshana Zuboff.</blockquote>`,
    author: 'Redacción Economía',
    category: 3,
    tags: ['OpenAI', 'ChatGPT', 'finanzas', 'banca', 'privacidad', 'Plaid'],
    is_featured: false,
  },
  {
    title: 'Demis Hassabis recauda 2.100 millones de euros para curar todas las enfermedades',
    subtitle: 'El fundador de Google DeepMind lanza Isomorphic Labs con una ronda histórica para aplicar la IA de AlphaFold al diseño de fármacos para cualquier enfermedad conocida',
    summary: 'Demis Hassabis, el científico detrás de AlphaFold, ha cerrado una ronda de financiación de 2.100 millones de dólares para Isomorphic Labs, su empresa de descubrimiento de medicamentos con IA.',
    content: `<p>Si existe una persona que tiene credenciales para anunciar que va a «curar todas las enfermedades», ese es <strong>Demis Hassabis</strong>. El científico y emprendedor, Premio Nobel de Química 2024 y cofundador de Google DeepMind, ha cerrado una ronda de financiación histórica de <strong>2.100 millones de dólares</strong> para <strong>Isomorphic Labs</strong>, la empresa que fundó para aplicar la inteligencia artificial al descubrimiento de medicamentos.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80" alt="Laboratorio de investigación farmacéutica con IA" />
  <figcaption>Isomorphic Labs combina las capacidades de predicción de AlphaFold con plataformas de diseño molecular para acelerar el descubrimiento de fármacos. Foto: Unsplash</figcaption>
</figure>

<h2>De AlphaFold a los medicamentos</h2>
<p>AlphaFold 3, la tercera versión del sistema de predicción de estructuras de proteínas de DeepMind, no solo predice cómo se pliega una proteína: también predice cómo interactúa con otras moléculas, incluyendo posibles fármacos. Ese es el núcleo de lo que Isomorphic Labs quiere industrializar.</p>

<p>El proceso tradicional de desarrollo de un fármaco tarda entre 10 y 15 años y cuesta más de 2.000 millones de dólares de media, con una tasa de fracaso del 90% en ensayos clínicos. La promesa de Isomorphic es reducir radicalmente esa tasa de fracaso al seleccionar candidatos moleculares que la IA ha validado con una confianza mucho mayor.</p>

<h2>Inversores y alianzas estratégicas</h2>
<p>La ronda fue liderada por <strong>SoftBank Vision Fund</strong>, con participación de Alphabet (Google), Wellcome Trust y varios fondos soberanos del Golfo Pérsico. Isomorphic Labs ya tiene acuerdos de colaboración con <strong>Eli Lilly</strong>, <strong>Novartis</strong> y <strong>AstraZeneca</strong>, con potenciales hitos de pago que superan los 3.000 millones de dólares adicionales.</p>

<div class="video-ref">
  <p><strong>🎬 Entrevista con Demis Hassabis sobre Isomorphic Labs:</strong> <a href="https://www.youtube.com/results?search_query=Demis+Hassabis+Isomorphic+Labs+2025+fundraising" target="_blank" rel="noopener">Ver entrevista en YouTube</a></p>
</div>

<h2>Objetivos concretos para los próximos cinco años</h2>
<p>Hassabis no habla de ambiciones vagas: en la presentación a inversores, Isomorphic comprometió llevar al menos <strong>tres candidatos a fármaco desarrollados íntegramente con IA</strong> a ensayos clínicos de fase II antes de 2028. Las áreas prioritarias son oncología, enfermedades neurodegenerativas (Alzheimer, Parkinson) y enfermedades infecciosas resistentes a antibióticos.</p>

<blockquote>«El objetivo final es comprimir décadas de progreso farmacéutico en años. No es arrogancia: es lo que los datos de AlphaFold 3 ya nos permiten ver», declaró Hassabis en la rueda de prensa.</blockquote>

<h2>Escepticismo científico</h2>
<p>No todos los expertos comparten el optimismo de Hassabis. Algunos farmacólogos señalan que la predicción de estructura-actividad molecular, aunque enormemente mejorada, sigue siendo solo uno de los muchos cuellos de botella del desarrollo de fármacos: la farmacocinética, la toxicidad y la respuesta inmune no se predicen con la misma fiabilidad.</p>`,
    author: 'Redacción Ciencia',
    category: 7,
    tags: ['DeepMind', 'Isomorphic Labs', 'Demis Hassabis', 'AlphaFold', 'farmacología', 'IA médica'],
    is_featured: true,
  },
  {
    title: 'Google rediseña el cursor del ratón por primera vez en 58 años para adaptarlo a la IA',
    subtitle: 'El icónico puntero de flecha, prácticamente inalterado desde 1968, recibe una transformación radical para comunicar mejor lo que hace la IA en pantalla',
    summary: 'Google ha anunciado un rediseño completo del cursor del ratón en Chrome OS y Android, añadiendo nuevos estados visuales que reflejan cuándo la IA está procesando, leyendo o actuando sobre la pantalla.',
    content: `<p>El cursor del ratón es uno de los elementos más estables de la informática moderna. Desde que Douglas Engelbart lo inventó en 1968 y el Macintosh lo popularizó en 1984, el puntero de flecha ha evolucionado apenas: cambia de forma para indicar que el sistema está cargando (el reloj de arena o el círculo giratorio) o que algo es clicable (la mano), pero su diseño fundamental lleva más de medio siglo prácticamente intacto. Google acaba de cambiar eso.</p>

<figure>
  <img src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&q=80" alt="Diseño del nuevo cursor de Google" />
  <figcaption>Los nuevos estados del cursor de Google incluyen animaciones específicas para cuando la IA está leyendo, procesando o actuando sobre el contenido de la pantalla. Crédito: Google Design</figcaption>
</figure>

<h2>Por qué ahora</h2>
<p>La respuesta es la IA agéntiva. Cuando el cursor era solo el reflejo del movimiento de la mano del usuario, una flecha estática era suficiente. Pero en el nuevo paradigma donde la IA mueve el cursor de forma autónoma para completar tareas, el usuario necesita entender visualmente qué está haciendo el sistema y por qué.</p>

<h2>Los nuevos estados del cursor</h2>
<p>Google ha presentado siete nuevos estados visuales del cursor para Chrome OS y Android:</p>

<ul>
  <li><strong>Cursor estándar:</strong> la flecha clásica, pero con un leve rediseño geométrico más limpio.</li>
  <li><strong>IA pensando:</strong> un aura pulsante alrededor del cursor indica que Gemini está procesando la solicitud.</li>
  <li><strong>IA leyendo:</strong> el cursor adopta un modo de «escaneo» que se mueve suavemente por el texto que la IA está analizando.</li>
  <li><strong>IA actuando:</strong> una animación de «clic fantasma» muestra en tiempo real qué elemento va a interactuar.</li>
  <li><strong>IA esperando confirmación:</strong> el cursor titila en amarillo pidiendo aprobación del usuario antes de ejecutar una acción sensible.</li>
  <li><strong>Error de IA:</strong> un breve destello rojo indica que el agente no ha podido completar la acción.</li>
  <li><strong>Modo accesibilidad:</strong> cursor ampliado con alto contraste para usuarios con visión reducida.</li>
</ul>

<div class="video-ref">
  <p><strong>🎬 Vídeo de presentación del nuevo cursor de Google:</strong> <a href="https://www.youtube.com/results?search_query=Google+redesign+mouse+cursor+AI+2025" target="_blank" rel="noopener">Ver en YouTube — Google Cursor Redesign</a></p>
</div>

<h2>La filosofía detrás del diseño</h2>
<p>El equipo de Google Design señala que el objetivo es mantener al usuario «en el asiento del conductor» incluso cuando la IA está conduciendo. La transparencia visual sobre lo que hace el agente en cada momento es, según ellos, fundamental para generar confianza y evitar la sensación de que el ordenador «actúa solo» de forma inquietante.</p>

<blockquote>«El cursor es el punto de contacto más primitivo entre el humano y el ordenador. Si la IA va a compartir ese espacio, necesita comunicarse con el lenguaje visual que ya entendemos», explicó la directora de diseño de interacción de Google.</blockquote>

<h2>Disponibilidad y adopción</h2>
<p>Los nuevos estados del cursor llegarán primero a Chrome OS en la próxima actualización y posteriormente a Android 16. Google también ha publicado una especificación abierta para que desarrolladores de otras plataformas puedan adoptar el mismo lenguaje visual de cursor para IA, buscando convertirlo en un estándar de facto de la industria.</p>`,
    author: 'Redacción Tecnología',
    category: 5,
    tags: ['Google', 'cursor', 'diseño UX', 'IA agéntiva', 'Chrome OS', 'interfaz'],
    is_featured: false,
  },
]

async function seed() {
  try {
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
        [art.title, art.subtitle, slug, art.summary, art.content, art.author, art.category, art.is_featured ? 1 : 0, readingTime]
      )

      const articleId = result.insertId

      for (const tagName of art.tags) {
        await pool.query('INSERT IGNORE INTO tags (name) VALUES (?)', [tagName])
        const [tagRows] = await pool.query('SELECT id FROM tags WHERE name = ?', [tagName])
        if (tagRows.length) {
          await pool.query('INSERT IGNORE INTO article_tags (article_id, tag_id) VALUES (?, ?)', [articleId, tagRows[0].id])
        }
      }

      console.log(`✅ Creado [cat:${art.category}]: "${art.title}"`)
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
