require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-05-21 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'Nvidia obtiene un beneficio histórico de 58.300 millones de dólares impulsado por la IA',
    summary: 'La compañía registra un beneficio neto del primer trimestre con un crecimiento del 211% interanual, gracias a la altísima demanda de sus chips para infraestructuras de inteligencia artificial.',
    content: `<p>Nvidia ha publicado sus resultados del primer trimestre fiscal con un beneficio neto de <strong>58.300 millones de dólares</strong>, la cifra más alta de su historia y un incremento del 211% respecto al mismo periodo del año anterior. Los datos confirman la posición dominante de la compañía en el mercado de semiconductores para inteligencia artificial.</p>
<p>El crecimiento se explica casi en su totalidad por la demanda sin precedentes de sus tarjetas gráficas de la familia <strong>Blackwell</strong>, utilizadas en los centros de datos de las principales empresas tecnológicas mundiales para entrenar y ejecutar modelos de lenguaje a gran escala. Los ingresos por ventas de centros de datos crecieron un 427% en términos interanuales.</p>
<p>El consejero delegado Jensen Huang señaló que la transición global hacia la computación acelerada por IA se encuentra todavía en sus primeras fases, y que la inversión en infraestructura de IA por parte de gobiernos y empresas no hará sino incrementarse en los próximos años. La compañía también anunció un programa de recompra de acciones por valor de 50.000 millones de dólares.</p>
<p>Las acciones de Nvidia subieron más de un 6% en el mercado extrabursátil tras la publicación de los resultados, arrastrando al alza a otros valores del sector tecnológico y contribuyendo a la recuperación de las bolsas norteamericanas.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Meta y Anduril se alían para desarrollar gafas inteligentes militares con IA táctica',
    summary: 'El contrato de 159 millones de dólares contempla gafas capaces de mostrar mapas tácticos, identificar vehículos enemigos, calcular distancias de tiro y ordenar ataques con drones mediante seguimiento ocular.',
    content: `<p>Meta y la empresa de tecnología de defensa Anduril han firmado un contrato de <strong>159 millones de dólares</strong> para el desarrollo conjunto de gafas inteligentes de uso militar dotadas de inteligencia artificial táctica. El acuerdo combina la experiencia de Meta en hardware de realidad aumentada con las capacidades de Anduril en sistemas de defensa autónoma.</p>
<p>Según la documentación del proyecto, el dispositivo tendrá capacidad para mostrar <strong>mapas y datos tácticos en tiempo real</strong> superpuestos en el campo de visión del soldado, identificar vehículos enemigos mediante reconocimiento de imagen, calcular distancias de tiro con precisión centimétrica y procesar el estado de la amenaza en el entorno inmediato.</p>
<p>La característica más controvertida del sistema es la posibilidad de <strong>ordenar ataques con drones mediante seguimiento ocular y comandos de voz</strong>, lo que llevaría la integración hombre-máquina en el campo de batalla a un nivel sin precedentes. Organizaciones de derechos humanos ya han solicitado información sobre los protocolos de supervisión humana obligatoria antes de cualquier uso letal.</p>
<p>Meta ha defendido el contrato argumentando que la tecnología de realidad aumentada tiene aplicaciones duales legítimas y que la empresa cumple con todas las normativas de exportación y control de armamento aplicables. El proyecto se enmarca en la creciente convergencia entre el sector tecnológico civil y la industria de defensa estadounidense.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Samsung y Google presentan sus primeras gafas inteligentes conjuntas impulsadas por Gemini',
    summary: 'Dos modelos: unas gafas de audio sin pantalla para este otoño, centradas en voz y cámara, y unas gafas con realidad aumentada sin fecha confirmada que mostrarán información superpuesta en el campo de visión.',
    content: `<p>Samsung y Google han presentado conjuntamente las primeras gafas inteligentes desarrolladas en colaboración entre ambas compañías, con el motor de inteligencia artificial <strong>Gemini</strong> como eje central. El anuncio se produjo durante el evento Google I/O 2026 y supone la respuesta directa de los dos gigantes tecnológicos a los avances de Meta en el segmento de dispositivos inteligentes portables.</p>
<p>La colaboración dará lugar a <strong>dos modelos diferenciados</strong>. El primero, orientado al gran público y previsto para este otoño, son unas gafas de audio sin pantalla centradas en las interacciones por voz, la cámara integrada y las notificaciones inteligentes del teléfono. Su diseño es discreto y no difiere visualmente de unas gafas convencionales.</p>
<p>El segundo modelo, cuya fecha de lanzamiento no ha sido confirmada, incorpora una pantalla de <strong>realidad aumentada</strong> que superpondrá información contextual sobre el campo de visión del usuario: indicaciones de navegación, traducción simultánea de texto, identificación de objetos y respuestas generadas por Gemini ante preguntas formuladas en voz alta.</p>
<p>Ambos dispositivos se integrarán con el ecosistema Android y funcionarán como extensión del teléfono. Los analistas señalan que el segmento de gafas inteligentes está entrando en una fase de competencia intensa entre todos los grandes actores del sector, con Apple, Meta, Samsung y Google presentando propuestas en un periodo de doce meses.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Google renueva su buscador por primera vez en 25 años con una interfaz conversacional y búsqueda multimodal',
    summary: 'La nueva barra de búsqueda acepta peticiones largas con contexto, permite buscar entre texto, imágenes, vídeo, archivos y pestañas abiertas en Chrome, y sustituye el autocompletado por sugerencias generadas por IA.',
    content: `<p>Google ha anunciado la mayor renovación de su interfaz de búsqueda en 25 años, presentada durante Google I/O 2026. El cambio no es meramente estético: supone una transformación profunda del modelo de interacción entre el usuario y el buscador, que pasa a ser <strong>conversacional y multimodal</strong>.</p>
<p>La nueva barra de búsqueda acepta consultas largas con contexto adicional, de manera similar a como los usuarios interactúan con asistentes de inteligencia artificial como ChatGPT o Gemini. El sistema será capaz de procesar preguntas compuestas del tipo: "Necesito un restaurante italiano cerca de mi trabajo con terraza, abierto el domingo por la noche y con opciones sin gluten", sin necesidad de reformular la consulta en palabras clave.</p>
<p>Además, la búsqueda se extiende a múltiples tipos de contenido desde un único punto de entrada: <strong>texto, imágenes, vídeo, archivos almacenados en Google Drive e incluso pestañas abiertas en Chrome</strong>. El usuario podrá preguntar "¿en qué pestaña tenía abierto ese artículo sobre el clima en Japón?" y el sistema lo localizará.</p>
<p>El tradicional autocompletado de palabras clave será sustituido por sugerencias generadas por IA que anticipan la intención del usuario. Google también ha confirmado que los resultados seguirán incluyendo enlaces a sitios web externos, respondiendo así a las críticas de editores y medios que denunciaban la reducción del tráfico orgánico con los resúmenes de IA actuales.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Standard Chartered despedirá a 7.000 empleados de aquí a 2030 para implantar inteligencia artificial',
    summary: 'El banco británico implantará IA en todas las tareas repetitivas, administrativas y documentales, incluyendo operaciones internas, cumplimiento normativo y gestión de documentos.',
    content: `<p>El banco británico Standard Chartered ha anunciado que reducirá su plantilla en <strong>7.000 empleados</strong> antes de 2030 como consecuencia directa de la implantación de sistemas de inteligencia artificial en sus operaciones. El recorte representa aproximadamente el 12% de la fuerza laboral global de la entidad.</p>
<p>Según la dirección del banco, la IA será desplegada de forma prioritaria en todas las tareas <strong>repetitivas, administrativas y documentales</strong>: procesamiento de operaciones internas, verificación de cumplimiento normativo (compliance), gestión documental, atención a consultas estandarizadas de clientes y generación de informes regulatorios. Estas funciones ocupan actualmente a miles de empleados en distintas geografías.</p>
<p>Standard Chartered se convierte así en uno de los primeros grandes bancos internacionales en cuantificar públicamente el impacto laboral de su estrategia de automatización. La entidad ha prometido ofrecer programas de recolocación interna y formación en nuevas competencias digitales para los trabajadores afectados, aunque no ha precisado cuántos podrán acogerse a estas medidas.</p>
<p>Los sindicatos del sector financiero han calificado el anuncio de "señal de alarma" y han reclamado negociaciones urgentes con la patronía bancaria para establecer salvaguardas laborales ante la automatización masiva. El Banco de Inglaterra ya advirtió en su último informe de estabilidad financiera que la IA podría transformar radicalmente la estructura de empleo del sector en menos de una década.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Dreame presenta el CerX, el primer robot aspirador con patas de oruga capaz de subir escaleras',
    summary: 'El nuevo dispositivo de la empresa china puede subir y bajar todo tipo de escaleras, incluidas las de caracol y las de peldaños abiertos. El precio se anunciará el 27 de mayo.',
    content: `<p>La empresa de robótica doméstica Dreame ha presentado el <strong>CerX</strong>, un robot aspirador que incorpora un sistema de desplazamiento por patas de oruga que le permite subir y bajar escaleras de manera autónoma. La demostración ha generado una considerable expectación en el sector, donde el problema de las escaleras ha sido históricamente un límite infranqueable para este tipo de dispositivos.</p>
<p>El CerX puede superar distintos tipos de escaleras: las convencionales de peldaño recto, las <strong>escaleras de caracol</strong> con curvas y cambios de radio, y las de peldaños abiertos sin contrahuellas, consideradas las más difíciles por la ausencia de superficie de apoyo en la parte posterior del escalón. Para lograr este rendimiento, el sistema de orugas se combina con sensores de profundidad y un algoritmo de planificación de trayectoria específico para superficies discontinuas.</p>
<p>Dreame no ha revelado el precio final del dispositivo ni los mercados de lanzamiento, y ha anunciado que la información comercial completa se publicará el próximo <strong>27 de mayo</strong>. La empresa sí ha confirmado que el CerX mantendrá todas las funciones de aspiración, fregado y vaciado automático presentes en sus modelos de gama alta actuales.</p>
<p>Los expertos en robótica señalan que, de cumplir las prestaciones mostradas en los vídeos de demostración, el CerX supondría un avance significativo en la autonomía de los robots domésticos y podría abrir este mercado a hogares de dos o más plantas que hasta ahora prescindían de estos dispositivos.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },

  // ─── VIDEOJUEGOS (bajo Tecnología) ────────────────────────────
  {
    title: 'Warhorse Studios anuncia dos nuevos juegos: una secuela de Kingdom Come y un RPG en la Tierra Media de Tolkien',
    summary: 'El estudio checo creador de Kingdom Come: Deliverance trabaja en una nueva entrega de la saga medieval y en un RPG de mundo abierto ambientado en el universo de J.R.R. Tolkien.',
    content: `<p>El estudio checo <strong>Warhorse Studios</strong>, conocido internacionalmente por la saga Kingdom Come: Deliverance, ha anunciado que tiene en desarrollo simultáneo dos proyectos de gran envergadura. El primero es una nueva entrega de su franquicia de rol medieval de ambientación histórica en la Bohemia del siglo XV. El segundo, y más sorprendente, es un <strong>RPG de mundo abierto ambientado en la Tierra Media</strong> de J.R.R. Tolkien.</p>
<p>El proyecto tolkieniano ha sorprendido al sector por la envergadura de la licencia involucrada. Warhorse Studios no ha revelado con qué entidad titular de los derechos ha llegado a un acuerdo, aunque los analistas apuntan a la Tolkien Estate y a sus acuerdos de licencia vigentes con diversas productoras. El juego buscaría ocupar el espacio de los RPGs de mundo abierto de gran calidad ambiental, un segmento con escasa oferta en el universo tolkieniano pese al enorme potencial de la franquicia.</p>
<p>La nueva entrega de Kingdom Come se sitúa en una fase más avanzada de desarrollo y podría ser presentada en detalle en los próximos meses. Warhorse ha destacado que incorporará una mayor libertad de exploración y un sistema de consecuencias narrativas más sofisticado que en las entregas anteriores.</p>
<p>El anuncio se produjo en el contexto del ciclo de eventos de presentación previo al Summer Game Fest 2026, que se celebrará el próximo 5 de junio.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Spellcaster Chronicles cerrará sus servidores a los 83 días de su lanzamiento por falta de jugadores',
    summary: 'El juego se convierte en un nuevo ejemplo del problema estructural de los videojuegos como servicio, que requieren una masa crítica de jugadores que muchos títulos no logran alcanzar.',
    content: `<p>El videojuego <strong>Spellcaster Chronicles</strong> cerrará definitivamente sus servidores apenas 83 días después de su lanzamiento comercial, al no haber alcanzado el número mínimo de jugadores activos necesario para mantener la operativa del servicio. El anuncio ha sido comunicado a los usuarios mediante un mensaje oficial en la plataforma del juego.</p>
<p>El caso se suma a una creciente lista de títulos que, bajo el modelo de <em>juego como servicio</em> (Games as a Service), han fracasado en atraer la masa crítica de jugadores necesaria para sostener la inversión en servidores, actualizaciones de contenido y soporte técnico. Los analistas señalan que el mercado de este tipo de juegos está altamente concentrado en un número reducido de títulos consolidados, lo que dificulta la entrada de nuevos competidores.</p>
<p>Los jugadores que realizaron compras en la tienda interna del juego podrán solicitar reembolsos según la política de la plataforma de distribución correspondiente, aunque las condiciones varían según el país y la tienda. Varios foros de usuarios han organizado campañas de reclamación colectiva.</p>
<p>La industria del videojuego lleva varios años debatiendo la sostenibilidad del modelo GaaS tras el cierre prematuro de decenas de títulos que representaron inversiones millonarias. La pregunta recurrente es si los estudios están sobreestimando sistemáticamente la capacidad del mercado para absorber nuevos juegos competitivos.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Rainbow Six Siege se asocia con Denuvo para implantar un sistema anticheat en PC',
    summary: 'Ubisoft incorpora la tecnología anticheat de la empresa conocida por su sistema antipiratería para combatir los trucos y hacks que llevan años afectando a la experiencia de juego en ordenador.',
    content: `<p>Ubisoft ha anunciado que <strong>Rainbow Six Siege</strong> incorporará próximamente un sistema anticheat desarrollado por <strong>Denuvo</strong>, la empresa austriaca conocida principalmente por su tecnología de protección antipiratería para videojuegos. La colaboración supone la entrada de Denuvo en el segmento de la seguridad en partidas en línea, un mercado distinto pero complementario a su área de actividad tradicional.</p>
<p>El problema de los tramposos en Rainbow Six Siege lleva años siendo una de las principales quejas de su comunidad de jugadores, especialmente en PC, donde la arquitectura abierta del sistema operativo facilita la creación y distribución de programas de modificación ilegal del juego (aimbots, wallhacks, speed hacks). Las medidas anticheat previas no han logrado erradicar el problema de forma duradera.</p>
<p>Denuvo aplicará su tecnología de <strong>detección en kernel</strong> para identificar modificaciones del proceso del juego en tiempo de ejecución, un enfoque más agresivo que las soluciones basadas únicamente en análisis de comportamiento de red. La comunidad ha recibido el anuncio con escepticismo moderado: mientras muchos jugadores celebran cualquier medida efectiva, otros critican los posibles impactos en el rendimiento y la privacidad asociados a los sistemas que operan con privilegios elevados.</p>
<p>Ubisoft no ha especificado la fecha exacta de la implantación ni si el sistema afectará a todas las plataformas o únicamente a PC.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Anunciado Project Rabbit, un juego tipo Dark Souls ambientado en una versión oscura del País de las Maravillas',
    summary: 'El título de acción para PC combina la dificultad de los soulslike con mecánicas de extracción tipo Escape from Tarkov, ambientado en una reinterpretación oscura del universo de Alicia. Tendrá textos en español.',
    content: `<p>Un nuevo estudio independiente ha anunciado <strong>Project Rabbit</strong>, un juego de acción y rol que combina los sistemas de combate exigentes propios de los <em>soulslike</em> (inspirados en la saga Dark Souls) con mecánicas de extracción al estilo de Escape from Tarkov, todo ello ambientado en una reinterpretación oscura y perturbadora del universo de <em>Alicia en el País de las Maravillas</em>.</p>
<p>El tono visual del juego reformula los personajes y escenarios del clásico de Lewis Carroll como entidades amenazantes: el País de las Maravillas se convierte en un mundo corrupto lleno de criaturas deformadas y trampas letales. El diseño artístico mostrado en el tráiler de anuncio mezcla elementos góticos con el surrealismo victoriano propio del material original.</p>
<p>Project Rabbit estará disponible exclusivamente en <strong>PC</strong>, contará con <strong>textos en español</strong> desde el lanzamiento, e incluirá modos tanto para juego en solitario como cooperativo. Las misiones de extracción añadirán una capa de tensión estratégica: los jugadores deberán decidir cuándo arriesgarse a explorar más y cuándo retirarse con el botín obtenido, perdiendo el equipo equipado si mueren sin escapar.</p>
<p>El proyecto no tiene aún fecha de lanzamiento confirmada. El equipo ha abierto una lista de acceso anticipado para una beta cerrada prevista para finales de 2026.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },
  {
    title: 'Hasbro cancela sin explicaciones su videojuego de Dungeons & Dragons',
    summary: 'La empresa propietaria de la franquicia Dungeons & Dragons abandona el desarrollo de un videojuego que tenía en marcha, sin ofrecer declaraciones sobre los motivos de la cancelación.',
    content: `<p>Hasbro ha cancelado el videojuego de <strong>Dungeons & Dragons</strong> que tenía en desarrollo, según ha confirmado la compañía sin ofrecer ninguna explicación pública sobre los motivos de la decisión. La noticia ha sorprendido a la comunidad de fans de la franquicia y a los observadores del sector, que habían recibido escasa información sobre el estado del proyecto.</p>
<p>Hasbro lleva varios años intentando expandir la presencia de Dungeons & Dragons en el ámbito digital tras el éxito de <em>Baldur's Gate 3</em> de Larian Studios en 2023, título que renovó masivamente el interés por la franquicia entre el público general. Sin embargo, la relación del conglomerado con los estudios de videojuegos ha sido turbulenta, con varios proyectos cancelados, adquisiciones revertidas y despidos en las divisiones internas de desarrollo.</p>
<p>La cancelación se produce en un contexto de reestructuración en Hasbro, que lleva dos años reduciendo su plantilla y reorientando su estrategia hacia el licenciamiento de la propiedad intelectual en lugar del desarrollo directo de productos. El modelo de ingresos basado en licencias resulta menos arriesgado que la producción propia, aunque también limita el control creativo y los márgenes a largo plazo.</p>
<p>Los fans han expresado su frustración en redes sociales, mientras algunos analistas especulan con la posibilidad de que la licencia de desarrollo sea cedida a un estudio externo en el futuro próximo.</p>`,
    image_url: null,
    category_id: CAT.tec,
  },

  // ─── CINE Y TELEVISIÓN ────────────────────────────────────────
  {
    title: 'South Park confirma su temporada 29 con estreno el 16 de septiembre',
    summary: 'La serie emitirá un episodio cada dos semanas hasta finales de noviembre en Comedy Central y Paramount. La confirmación llega después de meses de incertidumbre sobre el futuro de la franquicia.',
    content: `<p>La serie de animación adulta <strong>South Park</strong> ha confirmado oficialmente su temporada 29, que se estrenará el <strong>16 de septiembre</strong> en Comedy Central y Paramount. Los nuevos episodios seguirán el formato de emisión quincenal ya utilizado en temporadas recientes, con un capítulo cada dos semanas hasta finales de noviembre.</p>
<p>La confirmación pone fin a semanas de incertidumbre sobre el futuro de la franquicia, alimentadas por las declaraciones ambiguas de sus creadores Trey Parker y Matt Stone en entrevistas recientes. Ambos llevan varios años explorando formatos alternativos con sus especiales de larga duración para Paramount+, lo que había generado dudas sobre si la serie convencional continuaría con regularidad.</p>
<p>South Park, que se estrenó en 1997, se mantiene como una de las producciones de animación adulta más longevas de la historia de la televisión estadounidense. La temporada 28, emitida en 2025, fue recibida positivamente por la crítica especializada, que destacó la capacidad de la serie para abordar la actualidad política y cultural con su característico enfoque satírico.</p>
<p>Comedy Central no ha revelado los temas de los nuevos episodios, aunque fuentes cercanas a la producción apuntan a que la inteligencia artificial, las elecciones de medio mandato en Estados Unidos y las tensiones geopolíticas globales tendrán un peso significativo en la temporada.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Rick y Morty dará el salto a la gran pantalla con una película mientras estrena su novena temporada',
    summary: 'La popular serie de animación de Max anuncia una adaptación cinematográfica sin más detalles por el momento, coincidiendo con el estreno de su nueva temporada este mes.',
    content: `<p>La serie de animación <strong>Rick y Morty</strong> dará el salto a la gran pantalla con una película de largometraje, según ha anunciado su cadena emisora Max. El anuncio, sin más detalles por el momento, coincide con el estreno este mes de la <strong>novena temporada</strong> de la serie en la plataforma.</p>
<p>La noticia supone la confirmación de una expansión del universo de la franquicia más allá del formato televisivo convencional. Rick y Morty lleva desde su estreno en 2013 consolidándose como una de las series de animación adulta de mayor influencia cultural, con una base de seguidores muy activa y un merchandising global de gran volumen.</p>
<p>El salto al cine de franquicias de animación adulta tiene precedentes notables: la película de South Park de 1999 o la de Los Simpson de 2007 son ejemplos de cómo el formato cinematográfico puede ampliar el alcance de una franquicia televisiva. En el caso de Rick y Morty, la riqueza del <em>lore</em> interdimensional desarrollado en nueve temporadas ofrece material suficiente para una narrativa de mayor escala.</p>
<p>El equipo creativo, que sufrió una importante renovación tras la salida del co-creador Justin Roiland en 2023, no ha publicado detalles sobre guionistas, director, fecha de estreno ni si la película estará directamente conectada con la continuidad televisiva de la serie.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Carlos Arguiñano inicia su retirada tras 36 años en televisión: los viernes pasarán a su hijo Joseba',
    summary: 'El cocinero vasco comenzará su proceso de jubilación cediendo los viernes del programa Cocina Abierta en Antena 3 a su hijo. Es el primer paso de una transición gradual anunciada por el propio Arguiñano.',
    content: `<p>El cocinero vasco <strong>Carlos Arguiñano</strong> ha anunciado el inicio de su proceso de jubilación tras 36 años de presencia ininterrumpida en la televisión española. Como primer paso de una transición gradual, los viernes de su programa <em>Cocina Abierta</em> en Antena 3 dejarán de estar presentados por él y pasarán a cargo de su hijo <strong>Joseba Arguiñano</strong>.</p>
<p>Arguiñano, que cumplirá 74 años en octubre, debutó en televisión en 1990 y se convirtió rápidamente en uno de los rostros más queridos y reconocibles de la televisión española. Su programa de cocina ha sido un referente de la parrilla matinal durante más de tres décadas, con una audiencia fiel y unos datos de share notablemente estables a lo largo de los años.</p>
<p>El cocinero ha explicado que quiere hacer la transición de forma "honesta y ordenada", sin abrumar al espectador con una retirada repentina. La incorporación progresiva de Joseba Arguiñano, que lleva años apareciendo como colaborador habitual en el programa, busca ofrecer una continuidad natural al espacio.</p>
<p>La noticia ha generado una respuesta emotiva entre los espectadores de distintas generaciones, muchos de los cuales han crecido viendo el programa. Antena 3 no ha concretado si el formato del espacio experimentará cambios más allá del relevo presentacional.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Arnold Schwarzenegger confirma una nueva película de Conan el Bárbaro dirigida por el equipo de Misión Imposible',
    summary: 'El actor austriaco volverá a encarnar al guerrero cimmerio en un proyecto desarrollado por el director y guionista de la saga Misión Imposible. Aún no hay fecha de estreno.',
    content: `<p>Arnold Schwarzenegger ha confirmado públicamente que habrá una nueva película de <strong>Conan el Bárbaro</strong> con su participación. El proyecto está siendo desarrollado por el director y guionista de la saga <em>Misión Imposible</em>, lo que apunta a una producción de acción de gran presupuesto con vocación de alcance internacional.</p>
<p>Schwarzenegger interpretó por primera vez al guerrero cimmerio en la película de <strong>John Milius</strong> de 1982, que se convirtió en un hito del cine de fantasía épica y contribuyó decisivamente a lanzar la carrera cinematográfica del actor. La secuela, <em>Conan el Destructor</em>, se estrenó en 1984 con menor fortuna crítica. Desde entonces, el personaje ha tenido distintos intentos de revitalización con actores alternativos, ninguno de ellos con el éxito esperado.</p>
<p>El retorno de Schwarzenegger al papel, a sus 78 años, plantea interrogantes creativos sobre cómo abordará el guion la edad del protagonista. Fuentes del sector apuntan a que la historia podría situarse en la vejez de Conan, ya convertido en rey de Aquilonia, en consonancia con los arcos narrativos finales de los relatos originales de Robert E. Howard.</p>
<p>No hay fecha de estreno confirmada ni información sobre la distribuidora. El anuncio ha generado una respuesta mayoritariamente positiva entre los fans del personaje y de la filmografía de Schwarzenegger.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Disney+ incorpora Naruto, Dragon Ball, My Hero Academia y otras grandes sagas de anime a su catálogo',
    summary: 'La plataforma añade algunos de los títulos de anime más populares de todos los tiempos: Naruto, Campeones, My Hero Academia, Dragon Ball, Jujutsu Kaisen y Demon Slayer.',
    content: `<p>Disney+ ha anunciado la incorporación a su catálogo de algunas de las sagas de anime más vistas y reconocidas de la historia: <strong>Naruto</strong>, <em>Campeones (Oliver y Benji)</em>, <em>My Hero Academia</em>, <em>Dragon Ball</em>, <em>Jujutsu Kaisen</em> y <em>Demon Slayer (Kimetsu no Yaiba)</em>. La incorporación supone uno de los mayores movimientos estratégicos de la plataforma en el segmento de la animación japonesa.</p>
<p>La decisión responde a la creciente demanda global de contenido anime, que en los últimos años ha dejado de ser un nicho para convertirse en uno de los géneros con mayor crecimiento en plataformas de streaming. Servicios como Crunchyroll, Netflix y Prime Video llevan años compitiendo por las licencias de los títulos más populares, y Disney+ busca ahora posicionarse en este espacio.</p>
<p>La inclusión de <em>Dragon Ball</em>, franquicia propiedad de Toei Animation, y de <em>Naruto</em>, de Pierrot, es especialmente significativa dado el peso nostálgico de ambas series para audiencias de entre 25 y 45 años que las siguieron en su emisión original. <em>Demon Slayer</em> y <em>Jujutsu Kaisen</em>, por su parte, representan el anime más contemporáneo de éxito masivo.</p>
<p>Disney no ha especificado si los títulos estarán disponibles en versión doblada al español o solo en versión original subtitulada, un detalle crucial para la audiencia hispanohablante que suele preferir el doblado para las series de larga duración.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Anunciada una adaptación cinematográfica de Broken Sword con el creador original como productor',
    summary: 'La saga de aventura gráfica, una de las más queridas de los años 90, dará el salto al cine. Charles Cecil, diseñador de la franquicia original, participará en el proyecto como productor.',
    content: `<p>Se ha anunciado una adaptación cinematográfica de <strong>Broken Sword</strong>, la saga de aventura gráfica creada por Revolution Software que en los años noventa se convirtió en una de las franquicias más influyentes del videojuego europeo. <strong>Charles Cecil</strong>, diseñador y director de los títulos originales, participará en el proyecto como productor, lo que garantiza una supervisión creativa directa del material fuente.</p>
<p>Broken Sword debutó en 1996 con <em>La Leyenda de los Templarios</em>, una aventura de conspiración histórica protagonizada por el abogado americano George Stobbart y la periodista francesa Nicole Collard. La combinación de humor inteligente, misterio histórico y ambientación europea distinguió la franquicia de la competencia y le valió una base de fans muy fiel que se ha mantenido activa durante tres décadas.</p>
<p>La adaptación cinematográfica de videojuegos ha experimentado una notable mejora de calidad y recepción crítica en los últimos años, con producciones como <em>The Last of Us</em> (HBO) o <em>Arcane</em> (Netflix) demostrando que el material procedente del medio interactivo puede traducirse con éxito a formatos narrativos convencionales.</p>
<p>No se han revelado detalles sobre el estudio de producción, el reparto ni la fecha de estreno. Cecil ha declarado que el objetivo es "hacer justicia a los personajes y al espíritu de la saga" sin sacrificar la coherencia narrativa en aras del espectáculo visual.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },
  {
    title: 'Hoy llega a los cines The Mandalorian & Grogu, la primera película de Star Wars en años',
    summary: 'La historia de Din Djarin y el pequeño Grogu abandona el formato televisivo de Disney+ para dar el salto a la gran pantalla en lo que supone el mayor estreno de Star Wars desde El Ascenso de Skywalker.',
    content: `<p>Hoy 21 de mayo llega a los cines de todo el mundo <strong><em>Star Wars: The Mandalorian & Grogu</em></strong>, la primera película de la franquicia de George Lucas en estrenar en salas desde <em>El Ascenso de Skywalker</em> en 2019. La cinta traslada a la gran pantalla la historia de Din Djarin y el pequeño Grogu, los protagonistas de la serie de Disney+ que renovó masivamente el interés por el universo de Star Wars a partir de 2019.</p>
<p>La decisión de convertir la historia en una película teatral, tras varios años de producción de series exclusivas para Disney+, responde a la voluntad de Lucasfilm y Disney de recuperar la presencia de Star Wars en las salas de cine, donde la franquicia construyó su legado original. La productora apostó por Jon Favreau y Dave Filoni, creadores de la serie televisiva, para dar el salto al formato cinematográfico.</p>
<p>La película mantiene el tono y el estilo visual de la serie original, con una historia más amplia y de mayor escala que cualquier episodio televisivo, aunque los creadores han confirmado que el núcleo emocional sigue siendo la relación entre el mandaloriano y Grogu. La partitura corre a cargo de Ludwig Göransson, que ganó el Emmy por su trabajo en la serie.</p>
<p>Las primeras proyecciones para prensa han generado reacciones muy positivas, con especial alabanza para la fotografía y el diseño de producción. La distribución en España está a cargo de The Walt Disney Company.</p>`,
    image_url: null,
    category_id: CAT.cul,
  },

  // ─── ECONOMÍA ─────────────────────────────────────────────────
  {
    title: 'Las bolsas recuperan terreno: S&P 500 al alza, bitcoin en 77.000 dólares y petróleo a 104',
    summary: 'Los mercados abren en verde impulsados por los resultados históricos de Nvidia. El Ibex 35 avanza con fuerza, el bitcoin sube hasta los 77.000 dólares y el petróleo baja a 104 dólares por barril.',
    content: `<p>Los mercados financieros globales han abierto este jueves en verde, recuperando terreno tras varias sesiones de incertidumbre. El principal impulso viene de los <strong>resultados históricos de Nvidia</strong>, cuyo beneficio neto de 58.300 millones de dólares en el primer trimestre fiscal ha superado ampliamente las previsiones de los analistas y ha reavivado el apetito por el riesgo en los mercados de renta variable.</p>
<p>El <strong>S&P 500</strong> abre con ganancias superiores al 1,5%, lideradas por el sector tecnológico. El <strong>Ibex 35</strong> también avanza con fuerza, con subidas generalizadas entre los valores de mayor capitalización. Los índices europeos reflejan un optimismo generalizado que contrasta con las turbulencias de las últimas semanas.</p>
<p>En el mercado de criptomonedas, el <strong>bitcoin</strong> ha superado los <strong>77.000 dólares</strong>, beneficiándose del repunte general del apetito inversor. Los analistas señalan que el activo digital mantiene una correlación creciente con los valores tecnológicos en los mercados alcistas.</p>
<p>El <strong>petróleo Brent</strong> retrocede hasta los <strong>104 dólares por barril</strong>, aliviando ligeramente la presión inflacionista derivada del bloqueo del estrecho de Ormuz de las últimas semanas. El <strong>oro y la plata</strong> caen levemente ante la mejora del sentimiento de mercado. El <strong>euro</strong> se sitúa en <strong>1,12 dólares</strong>, mostrando cierta estabilidad frente a la divisa estadounidense.</p>`,
    image_url: null,
    category_id: CAT.eco,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Putin y Xi Jinping critican la política exterior de EE. UU. y firman 42 acuerdos bilaterales',
    summary: 'En una declaración conjunta, ambos líderes califican de irresponsable la política estadounidense y advierten del riesgo de un retorno a la ley del más fuerte. Los acuerdos abarcan comercio, energía, tecnología y cultura.',
    content: `<p>El presidente ruso Vladimir Putin y el presidente chino Xi Jinping han emitido una <strong>declaración conjunta</strong> durante la visita de Estado de Putin a Pekín en la que califican de "irresponsable" la política exterior de Estados Unidos y advierten del riesgo de un regreso a la "ley del más fuerte" en las relaciones internacionales si la comunidad global no establece contrapesos efectivos a la hegemonía unilateral.</p>
<p>El documento, de carácter más explícito que las declaraciones conjuntas anteriores entre ambos mandatarios, critica directamente las sanciones unilaterales, las restricciones tecnológicas y las presiones militares como instrumentos de política exterior, y reivindica el papel del sistema multilateral de Naciones Unidas como único marco legítimo para la resolución de conflictos.</p>
<p>En el plano práctico, la visita se saldó con la firma de <strong>42 acuerdos bilaterales</strong> en materia de comercio, energía, tecnología, cultura e inteligencia artificial. Los acuerdos energéticos amplían el suministro ruso de gas natural y petróleo a China, mientras que los tecnológicos contemplan colaboraciones en semiconductores, sistemas de navegación alternativos al GPS y desarrollo conjunto de modelos de inteligencia artificial.</p>
<p>Occidente ha respondido con cautela, recordando que la retórica de asociación estratégica sino-rusa no ha impedido a China mantener vínculos comerciales con la Unión Europea y Estados Unidos. Los analistas de política exterior señalan que el alcance real de los 42 acuerdos dependerá de su implementación efectiva, históricamente desigual en anteriores rondas de negociación bilateral.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'La vacuna contra el ébola Bundibugyo no estará lista hasta dentro de seis meses mientras el brote avanza',
    summary: 'La OMS informa de que el brote en la República Democrática del Congo acumula 139 muertes y más de 600 casos sospechosos. Se estima que el número real podría superar los 1.000 afectados.',
    content: `<p>La Organización Mundial de la Salud (OMS) ha confirmado que la vacuna más prometedora contra la cepa <strong>Bundibugyo</strong> del ébola, responsable del brote activo en la República Democrática del Congo, no estará disponible para su uso en campo hasta <strong>dentro de seis meses</strong>. El anuncio agrava la situación epidemiológica en una región donde los recursos sanitarios son limitados y la capacidad de rastreo de contactos, insuficiente.</p>
<p>El brote acumula actualmente <strong>139 muertes confirmadas</strong> y más de <strong>600 casos sospechosos</strong>, aunque los propios expertos de la OMS estiman que el número real de afectados podría superar los 1.000 dado el elevado porcentaje de casos que permanecen sin diagnosticar en zonas rurales de difícil acceso. La cepa Bundibugyo tiene una tasa de letalidad inferior a la cepa Zaire, la más mortífera, pero su rápida progresión en comunidades densamente pobladas la convierte en una amenaza de primera magnitud.</p>
<p>Un caso confirmado en <strong>Uganda</strong> ha elevado el nivel de alerta regional y ha llevado a la OMS a reforzar los protocolos de vigilancia en los países limítrofes. Las autoridades ugandesas han activado el protocolo de respuesta rápida en los distritos fronterizos.</p>
<p>Médicos Sin Fronteras y otras organizaciones humanitarias han solicitado a los gobiernos donantes una respuesta financiera urgente para desplegar equipos de respuesta adicionales y garantizar el abastecimiento de equipos de protección individual en los centros de tratamiento.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Kylie Minogue revela que superó un segundo cáncer diagnosticado en 2021',
    summary: 'La cantante australiana, que ya había superado un cáncer de mama en 2005, confirma que se recuperó de un segundo diagnóstico oncológico años después, del que no había informado públicamente.',
    content: `<p>La cantante australiana <strong>Kylie Minogue</strong> ha revelado en una entrevista publicada este miércoles que en 2021 le fue diagnosticado un <strong>segundo cáncer</strong>, del que se ha recuperado satisfactoriamente. La artista no había hecho pública la enfermedad durante el proceso de diagnóstico y tratamiento, manteniendo la información en el ámbito privado hasta ahora.</p>
<p>Minogue ya había superado un <strong>cáncer de mama</strong> en 2005, cuyo diagnóstico y tratamiento comunicó abiertamente en su momento y que generó una oleada de solidaridad internacional. Su caso se convirtió en uno de los más citados en campañas de concienciación sobre la detección precoz del cáncer de mama en mujeres de mediana edad.</p>
<p>La cantante, de 57 años, no ha revelado el tipo específico de cáncer diagnosticado en 2021 ni los detalles del tratamiento recibido, argumentando que deseaba preservar su intimidad y la de su entorno cercano. Sí ha confirmado que se encuentra en buen estado de salud y que la experiencia ha reforzado su perspectiva sobre la importancia de los revisiones médicas periódicas.</p>
<p>Minogue atraviesa uno de los momentos de mayor éxito comercial de su carrera, con el álbum <em>Tension</em> de 2023 convirtiéndose en su disco más vendido en décadas y una gira mundial que agotó entradas en todas las plazas.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Una madre con trastornos psiquiátricos se precipita con tres hijos desde un edificio en Toulouse',
    summary: 'La mujer de 38 años y tres de sus hijos, de entre 3 y 6 años, murieron al caer desde la planta 13 de un edificio. Los cuatro hijos mayores supervivientes han quedado bajo protección de las autoridades.',
    content: `<p>Una tragedia ha conmocionado este miércoles a la ciudad francesa de <strong>Toulouse</strong>: una mujer de 38 años y tres de sus hijos menores, de 3, 4 y 6 años respectivamente, fallecieron al precipitarse desde la planta 13 de un edificio residencial a las seis de la madrugada. Las investigaciones policiales apuntan a que la madre saltó voluntariamente con los niños.</p>
<p>Según las informaciones facilitadas por las autoridades francesas, la mujer había mostrado <strong>signos recientes de trastornos psiquiátricos y depresivos graves</strong>. Criaba sola a siete hijos menores de edad, situación que los servicios sociales del departamento tenían registrada, aunque las diligencias de seguimiento activo no habían identificado un riesgo inminente en las semanas previas al suceso.</p>
<p>Los <strong>cuatro hijos mayores</strong> supervivientes, que se encontraban en el domicilio en el momento de los hechos, han quedado bajo la protección inmediata de las autoridades departamentales de infancia y están recibiendo atención psicológica de emergencia. Sus edades no han sido comunicadas para preservar su intimidad.</p>
<p>El caso ha reabierto el debate en Francia sobre los protocolos de seguimiento de familias monoparentales en situación de fragilidad psicológica y sobre la suficiencia de los recursos de salud mental de acceso inmediato en el sistema sanitario público. El fiscal de Toulouse ha abierto una investigación para determinar si hubo negligencia en los servicios de apoyo.</p>`,
    image_url: null,
    category_id: CAT.int,
  },

  // ─── LATINOAMÉRICA ────────────────────────────────────────────
  {
    title: 'EE. UU. presenta cargos formales contra Raúl Castro por el derribo de avionetas civiles en 1996',
    summary: 'El Departamento de Justicia acusa al expresidente cubano, que era ministro de Defensa en aquel momento, de conspiraciön para matar a ciudadanos estadounidenses en el ataque en el que murieron cuatro personas.',
    content: `<p>El Departamento de Justicia de Estados Unidos ha presentado una acusación formal contra el expresidente cubano <strong>Raúl Castro</strong> por su presunta responsabilidad en el derribo de dos avionetas civiles pertenecientes a la organización <em>Hermanos al Rescate</em> sobre el estrecho de Florida el <strong>24 de febrero de 1996</strong>, en el que murieron cuatro personas, tres de ellas ciudadanas estadounidenses.</p>
<p>Castro, que en el momento de los hechos ostentaba el cargo de <strong>ministro de Defensa</strong> de Cuba, se enfrenta a cargos de conspiración para matar a ciudadanos estadounidenses, destrucción de aeronaves civiles y asesinato. La acusación también incluye a <strong>cinco pilotos cubanos</strong> de la Fuerza Aérea Revolucionaria que participaron en el ataque con cazas MiG-29.</p>
<p>El incidente fue uno de los más graves de la historia de las relaciones entre Cuba y Estados Unidos durante la Guerra Fría tardía. Las avionetas, pilotadas por voluntarios cubanoamericanos que realizaban misiones de rescate de balseros en el estrecho, fueron derribadas en lo que Cuba siempre presentó como una respuesta a violaciones de su espacio aéreo, extremo rechazado por las investigaciones internacionales posteriores.</p>
<p>La presentación de cargos tiene un carácter simbólico más que práctico, dado que Castro, de 94 años, se encuentra en Cuba y es improbable que sea extraditado. Los familiares de las víctimas han valorado positivamente el gesto como un reconocimiento formal de la responsabilidad cubana.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Chile: Kast realiza cambios en el gabinete a solo tres meses del inicio de su gobierno',
    summary: 'La ministra de Seguridad Pública y la ministra portavoz abandonan el ejecutivo. El presidente justifica la remodelación por la necesidad de dar urgencia a la gestión y recuperar la confianza de los inversores.',
    content: `<p>El presidente de Chile, <strong>José Antonio Kast</strong>, ha anunciado una remodelación parcial de su gabinete apenas tres meses después de asumir la presidencia, con la salida de la ministra de Seguridad Pública y de la ministra portavoz del gobierno. El cambio ha sorprendido por su precocidad, aunque fuentes cercanas a La Moneda señalaban desde hace semanas una creciente insatisfacción del presidente con el ritmo de ejecución de su agenda.</p>
<p>Kast ha justificado públicamente la decisión por la necesidad de "dar urgencia a la gestión gubernamental" y de "recuperar la confianza de los inversores", en un contexto de desaceleración de la economía chilena y de retrasos en varios proyectos de reforma estructural prometidos durante la campaña electoral.</p>
<p>La salida de la ministra de Seguridad Pública coincide con un repunte de los indicadores de criminalidad en las regiones metropolitanas y con las críticas de la oposición a la falta de resultados tangibles en la lucha contra el crimen organizado, uno de los ejes centrales del programa de Kast.</p>
<p>Los analistas políticos chilenos señalan que los cambios de gabinete tan tempranos pueden interpretarse como señales de dificultades de gestión interna, aunque también como la capacidad del presidente para tomar decisiones correctivas rápidas. La remodelación deberá ser ratificada por el Congreso en lo referente a los nombramientos que requieren confirmación parlamentaria.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Fallece Totó la Momposina, leyenda de la música caribeña colombiana, a los 85 años',
    summary: 'La cantante colombiana Sonia Bazán Vides murió el pasado 17 de mayo en México. Fue una de las figuras más influyentes en la difusión internacional de la cumbia, el porro, el bullerengue y el mapale.',
    content: `<p>La cantante colombiana <strong>Sonia Bazán Vides</strong>, universalmente conocida como <strong>Totó la Momposina</strong>, falleció el pasado 17 de mayo en la ciudad de México a los 85 años de edad. La noticia, conocida este miércoles, ha generado una oleada de homenajes en Colombia y en todos los países donde la música caribeña colombiana tiene arraigo.</p>
<p>Totó la Momposina es considerada una de las figuras más importantes de la etnomusicología y la interpretación de la música tradicional del <strong>Caribe colombiano</strong>, especialmente de la cumbia, el porro, el bullerengue y el mapalé. Su carrera, que abarcó más de seis décadas, estuvo consagrada a rescatar, documentar y difundir repertorios musicales que corrían riesgo de desaparecer ante el avance de la música comercial.</p>
<p>Nacida en Talaigua Nuevo, en el departamento de Bolívar, creció en una familia con una tradición musical viva que se remontaba varias generaciones. A lo largo de su carrera actuó en los principales escenarios del mundo, desde el WOMAD de Peter Gabriel hasta el Festival de Glastonbury, llevando la música del litoral atlántico colombiano a audiencias que jamás habían tenido contacto con ese acervo cultural.</p>
<p>El presidente Gustavo Petro ha decretado tres días de duelo cultural en Colombia. La Biblioteca Nacional de Colombia anunció que su archivo de grabaciones y materiales documentales será incorporado como colección permanente de referencia.</p>`,
    image_url: null,
    category_id: CAT.int,
  },

  // ─── GUERRAS Y CONFLICTOS ─────────────────────────────────────
  {
    title: 'Israel encarcela a los activistas de la flotilla humanitaria, incluyendo unos 45 españoles',
    summary: 'La flotilla de 57 embarcaciones fue interceptada en aguas internacionales. Italia, Francia y Canadá convocaron a los embajadores israelíes tras publicarse un vídeo de un ministro burlándose de los detenidos esposados.',
    content: `<p>Israel ha detenido y encarcelado a los activistas de la <strong>Gaza Freedom Flotilla</strong> tras interceptar la caravana marítima en aguas internacionales próximas a Chipre. Entre los aproximadamente 430 activistas que viajaban a bordo de las 57 embarcaciones se encuentran <strong>unos 45 ciudadanos españoles</strong> y varios nacionales mexicanos, junto con voluntarios de docenas de países.</p>
<p>La situación se agravó cuando un ministro israelí publicó en redes sociales un <strong>vídeo en tono burlesco</strong> en el que se veía a varios detenidos esposados. La imagen generó una indignación internacional inmediata: <strong>Italia, Francia y Canadá</strong> convocaron a los embajadores israelíes y exigieron explicaciones formales y la liberación inmediata de sus ciudadanos. El propio primer ministro <strong>Benjamin Netanyahu</strong> criticó públicamente el comportamiento de su ministro, señalando que no contribuía a los intereses diplomáticos del país.</p>
<p>El gobierno español ha activado los protocolos consulares de asistencia a sus ciudadanos detenidos y ha solicitado información detallada sobre las condiciones de detención. La ministra de Exteriores ha convocado al embajador israelí en Madrid para transmitirle la protesta formal del ejecutivo.</p>
<p>Israel justifica la interceptación alegando que la flotilla portaba materiales de doble uso y que el bloqueo naval sobre Gaza es legalmente válido en virtud del estado de guerra existente. Las organizaciones humanitarias rechazan esta interpretación y han solicitado la intervención del Tribunal Internacional de Justicia.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Tres superpetroleros con seis millones de barriles cruzan el estrecho de Ormuz rumbo a España',
    summary: 'Las embarcaciones esperaban más de dos meses para cruzar. El tráfico de buques por el estrecho ha caído de 140 a 110 barcos diarios desde el conflicto con Irán.',
    content: `<p>Tres superpetroleros cargados con un total de <strong>seis millones de barriles</strong> de crudo procedente de Oriente Medio han logrado finalmente cruzar el estrecho de Ormuz con destino a puertos españoles, después de más de dos meses de espera acumulada motivada por las restricciones impuestas durante el agravamiento del conflicto con Irán.</p>
<p>El estrecho de Ormuz, por el que transita aproximadamente el 20% del petróleo mundial, había reducido drásticamente su tráfico desde el inicio de las tensiones. Antes del conflicto, unos <strong>140 barcos diarios</strong> cruzaban el estrecho; actualmente la cifra se sitúa en torno a <strong>110 embarcaciones por jornada</strong>, una caída del 21% que ha contribuido significativamente al encarecimiento del crudo en los mercados internacionales.</p>
<p>La llegada de estos cargamentos a España aliviará temporalmente la presión sobre las reservas estratégicas nacionales, aunque los operadores del sector advierten que la normalización completa del suministro requerirá que el tráfico por Ormuz se recupere de forma sostenida durante varias semanas. España importa aproximadamente el 60% de su crudo de países del Golfo Pérsico.</p>
<p>El Ministerio para la Transición Ecológica ha informado de que las reservas estratégicas de petróleo se mantienen por encima del mínimo obligatorio establecido por la Agencia Internacional de la Energía, aunque a niveles inferiores a los habituales del mismo periodo en años anteriores.</p>`,
    image_url: null,
    category_id: CAT.int,
  },
  {
    title: 'Cazas rusos interceptan peligrosamente un avión espía británico sobre el mar Negro',
    summary: 'Uno de los cazas pasó a tan solo 6 metros de la nariz del aparato de la Royal Air Force. El Reino Unido ha protestado formalmente por el incidente ocurrido en espacio aéreo internacional.',
    content: `<p>Dos cazas rusos llevaron a cabo una interceptación "repentina e inaceptablemente peligrosa" de un avión de reconocimiento de la <strong>Royal Air Force</strong> británica que operaba en espacio aéreo internacional sobre el <strong>mar Negro</strong>. El incidente, calificado de muy grave por el Ministerio de Defensa del Reino Unido, tuvo lugar cuando uno de los cazas rusos pasó a tan solo <strong>6 metros de la nariz</strong> del aparato espía.</p>
<p>El Ministerio de Defensa británico ha presentado una protesta formal ante el gobierno ruso, exigiendo explicaciones sobre lo que califica de maniobra deliberada de intimidación en espacio aéreo internacional. El portavoz de Defensa ha recordado que los vuelos de reconocimiento de la RAF en la región son legales y están dentro del marco de las misiones de vigilancia de la OTAN.</p>
<p>Rusia no ha emitido un comunicado oficial, aunque fuentes del Ministerio de Defensa en Moscú han señalado extraoficialmente que los cazas actuaron "de conformidad con los protocolos establecidos" ante lo que describen como movimientos de aeronaves extranjeras cerca de zonas de interés estratégico ruso en el mar Negro.</p>
<p>El incidente se produce en el contexto de una serie de aproximaciones peligrosas entre aeronaves rusas y occidentales registradas en los últimos meses sobre el Báltico, el Ártico y el mar Negro, que los analistas militares interpretan como una política deliberada de presión y prueba de respuesta de los aliados de la OTAN.</p>`,
    image_url: null,
    category_id: CAT.int,
  },

  // ─── ESPAÑA ───────────────────────────────────────────────────
  {
    title: 'Bruselas avala el uso legal de los fondos Next Generation por parte de España',
    summary: 'La Comisión Europea descarta que España haya utilizado los fondos europeos para financiar pensiones u otros fines no autorizados y afirma que cada solicitud de pago fue evaluada exhaustivamente.',
    content: `<p>La Comisión Europea ha respaldado formalmente la gestión española de los fondos europeos del programa <strong>Next Generation EU</strong>, descartando que España haya empleado estos recursos para financiar pensiones, gasto social corriente u otros destinos no autorizados por el reglamento europeo. La aclaración llega después de semanas de polémica política en torno a las condiciones de uso de los fondos.</p>
<p>En un comunicado oficial, Bruselas afirma que "cada solicitud de pago presentada por España fue evaluada de forma exhaustiva, transparente e independiente" y que los fondos desembolsados fueron destinados exclusivamente a proyectos elegibles dentro de los planes nacionales de recuperación previamente aprobados por la propia Comisión.</p>
<p>La controversia se inició cuando varios partidos de la oposición española denunciaron ante instancias europeas que parte de los fondos habría sido redirigida a gasto social estructural, lo que supondría una violación del espíritu del programa de recuperación post-pandemia. El gobierno español negó las acusaciones y solicitó a Bruselas una declaración expresa de cumplimiento.</p>
<p>El aval europeo refuerza la posición del gobierno ante el Congreso, aunque la oposición ha anunciado que continuará reclamando una auditoría independiente del destino detallado de cada euro desembolsado. España es el segundo mayor receptor de fondos Next Generation de la Unión Europea, después de Italia.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'La imputación de Zapatero genera fisuras entre los socios del gobierno y amenaza la estabilidad de la coalición',
    summary: 'Sumar, Compromís y Podemos critican la percepción de cobro por gestiones políticas. PNV y Junts condicionan su apoyo a las declaraciones del expresidente ante el juez, abriendo la posibilidad de una crisis de gobernabilidad.',
    content: `<p>La imputación del expresidente <strong>José Luis Rodríguez Zapatero</strong> en el caso Plus Ultra, relacionado con la concesión de ayudas públicas a una aerolínea con conexiones ideológicas afines al gobierno venezolano de Nicolás Maduro, está generando una creciente tensión entre los socios que sostienen al gobierno de coalición.</p>
<p><strong>Sumar</strong> e <strong>Izquierda Unida</strong> consideran que cualquier forma de cobro por gestiones políticas debería ser constitutiva de delito, estableciendo así una línea roja implícita respecto al socialismo histórico. <strong>Compromís</strong> ha reclamado explicaciones formales a los socialistas sobre el papel de Zapatero. <strong>Podemos</strong> ha señalado que el caso "pinta feo" y ha abierto la puerta a revisar su apoyo según se desarrollen las revelaciones judiciales.</p>
<p>La situación más delicada proviene de <strong>PNV y Junts</strong>, cuyos apoyos son imprescindibles para la mayoría parlamentaria: ambas formaciones han condicionado su respaldo futuro al gobierno a las declaraciones que Zapatero realice ante el juez, lo que introduce un elemento de incertidumbre real sobre la estabilidad del ejecutivo.</p>
<p>Adicionalmente, la Fiscalía estadounidense ha entregado a la justicia española <strong>extracciones telefónicas, transferencias bancarias y otros datos</strong> que vincularían la trama Plus Ultra con el caso de Alex Saab, el empresario colombiano señalado como testaferro del gobierno de Maduro. La incorporación de este material podría ampliar notablemente el alcance de la investigación.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Por tercer año consecutivo, España registra más jubilaciones que nacimientos con una brecha de 54.000 personas',
    summary: 'La diferencia es casi nueve veces mayor que en 2023. La llegada del baby boom a la edad de jubilación acelera el crecimiento del número de pensionistas, con el grueso de las salidas previsto a partir de 2027.',
    content: `<p>España ha registrado por <strong>tercer año consecutivo</strong> más jubilaciones que nacimientos, con una brecha demográfica que en 2025 alcanzó las <strong>54.000 personas</strong>, casi nueve veces superior a la diferencia registrada en 2023. La tendencia, que se percibía como puntual hace apenas tres años, se consolida como un rasgo estructural del panorama demográfico español.</p>
<p>El factor determinante es la llegada de la generación del <strong>baby boom</strong> a la edad de jubilación. Las cohortes nacidas entre 1958 y 1975, las más numerosas de la historia reciente de España, están comenzando a alcanzar los 67 años de edad ordinaria de jubilación, y los expertos advierten que el grueso de estas salidas del mercado laboral se producirá a partir de <strong>2027</strong>, con una curva de aceleración sostenida hasta mediados de la próxima década.</p>
<p>El impacto sobre el sistema de pensiones es el principal foco de preocupación: cada vez más personas abandonan la actividad laboral y se incorporan como beneficiarias del sistema, mientras la tasa de natalidad española, la más baja de la Unión Europea, no genera suficientes cotizantes futuros para sostener el modelo de reparto a largo plazo sin reformas adicionales.</p>
<p>Los economistas señalan que la inmigración ha actuado como válvula de compensación parcial, aportando cotizantes jóvenes, pero advierten que su contribución es insuficiente para cerrar la brecha proyectada si no se acompaña de políticas activas de conciliación y apoyo a la natalidad.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Vendido el ático de la futura TM Tower de Madrid por 3,4 millones de euros a un empresario español',
    summary: 'El piso de 350 m² a 10.000 euros por metro cuadrado incluye cuatro dormitorios y terraza. El 70% de los compradores del edificio, que será el residencial más alto de la UE con 230 metros, son extranjeros.',
    content: `<p>El ático de la futura <strong>TM Tower</strong> de Madrid ha sido adquirido por <strong>3,4 millones de euros</strong> por un empresario español, convirtiéndose en la transacción residencial de mayor notoriedad de las realizadas hasta la fecha en el complejo. El piso cuenta con <strong>350 metros cuadrados</strong>, cuatro dormitorios, cuatro baños, vestidor y una amplia terraza, lo que sitúa el precio unitario en <strong>10.000 euros por metro cuadrado</strong>.</p>
<p>La TM Tower, cuya construcción avanza en el desarrollo del Nuevo Norte de Madrid, será cuando se complete en <strong>2028</strong> el edificio residencial de mayor altura de toda la Unión Europea con sus <strong>230 metros y 63 plantas</strong>. El proyecto, impulsado por la promotora TM Grupo Inmobiliario, ha concitado un notable interés internacional desde el inicio de su comercialización.</p>
<p>El perfil de los compradores es mayoritariamente extranjero: el <strong>70%</strong> de las unidades vendidas hasta la fecha han sido adquiridas por ciudadanos de otros países, con una presencia destacada de compradores de <strong>Polonia y Ucrania</strong>, países cuyas clases altas han mostrado en los últimos años un interés creciente por la inversión inmobiliaria en Madrid ante el contexto de inestabilidad en la Europa del Este.</p>
<p>El proyecto es uno de los más emblemáticos del conjunto de rascacielos residenciales y de oficinas que transformarán el perfil urbanístico del norte de Madrid en los próximos años.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Más Madrid alcanza un acuerdo de unidad para sus primarias con Mónica García a la cabeza',
    summary: 'Tras semanas de tensiones internas, García y Edmundo Bal se presentarán juntos en una lista de unidad. Manuela Bergerot irá segunda y Bal tercero en la candidatura.',
    content: `<p>La formación <strong>Más Madrid</strong> ha cerrado un acuerdo de unidad interna que pone fin a semanas de tensiones entre sus principales figuras para encarar las primarias del partido. Según el pacto alcanzado, <strong>Mónica García</strong> encabezará la lista, seguida por <strong>Manuela Bergerot</strong>, actual portavoz de la Asamblea de Madrid, y por <strong>Edmundo Bal</strong> en tercer lugar.</p>
<p>La negociación había sido especialmente complicada por la incorporación relativamente reciente de Edmundo Bal, que proviene de Ciudadanos y representa un perfil político más centrado que el del núcleo fundador de Más Madrid. Su entrada en la lista de unidad, aunque en tercer lugar, es interpretada por los analistas como un gesto de apertura del partido hacia el electorado de centro-izquierda que quedó huérfano tras el colapso de la formación naranja.</p>
<p>Mónica García, ministra de Sanidad del gobierno de coalición, liderará también la candidatura al Congreso por Madrid en unas eventuales elecciones generales, lo que la sitúa como la figura más prominente del espacio político de izquierda moderada a nivel autonómico y estatal.</p>
<p>El acuerdo deberá ser ratificado formalmente por la militancia en el proceso de primarias, aunque el consenso alcanzado entre las principales figuras hace improbable que surja una candidatura alternativa de peso.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Un trabajador muere al caer 30 metros en el interior del Movistar Arena de Madrid',
    summary: 'El hombre de unos 50 años realizaba labores en el techo del pabellón cuando se precipitó al vacío. La Inspección de Trabajo ha iniciado una investigación sobre las condiciones de seguridad del accidente.',
    content: `<p>Un trabajador de aproximadamente <strong>50 años</strong> ha fallecido este jueves tras precipitarse desde unos <strong>30 metros de altura</strong> mientras realizaba labores de mantenimiento o instalación en el techo del pabellón <strong>Movistar Arena</strong> de Madrid. Los servicios de emergencia acudieron al lugar pero no pudieron hacer nada por la vida del trabajador, que falleció en el acto como consecuencia de las graves lesiones sufridas en la caída.</p>
<p>El accidente se produjo en el interior del recinto, uno de los mayores pabellones polideportivos y de espectáculos de la capital española, con capacidad para más de 15.000 espectadores. La causa exacta de la caída está siendo investigada por los agentes de la Policía Nacional y por la <strong>Inspección de Trabajo</strong>, que ha iniciado de oficio un procedimiento para determinar si se cumplían las condiciones de seguridad exigidas para trabajos en altura.</p>
<p>El Movistar Arena no tenía programado ningún evento para esta semana, y los trabajos en los que participaba la víctima formarían parte de las tareas de mantenimiento habituales del recinto durante los periodos sin actividad. La empresa contratista responsable de los trabajos no ha emitido ningún comunicado hasta el momento.</p>
<p>Los sindicatos CCOO y UGT han exigido una investigación exhaustiva y han recordado que los accidentes laborales mortales en trabajos en altura siguen siendo una de las principales causas de siniestralidad laboral grave en España, pese a la normativa específica existente.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'La Audiencia Nacional obliga a compensar los festivos que coincidan con el día de descanso semanal',
    summary: 'La sentencia, que afecta a las empresas de atención al cliente, podría extenderse a otros sectores. Los sindicatos la consideran un precedente importante aunque puede ser recurrida ante el Tribunal Supremo.',
    content: `<p>La <strong>Audiencia Nacional</strong> ha dictado una sentencia que obliga a las empresas de atención al cliente a <strong>compensar económicamente o mediante descanso alternativo</strong> los festivos nacionales que coincidan con el día de descanso semanal establecido en el contrato del trabajador. La resolución cierra un debate jurídico que llevaba años generando conflictividad laboral en el sector.</p>
<p>Hasta ahora, muchas empresas interpretaban que si un festivo nacional caía en sábado o domingo (los días de descanso habituales de sus trabajadores) no era necesaria ninguna compensación adicional, al considerar que el trabajador ya disfrutaba de ese día libre. Los sindicatos defendían la posición contraria: que el festivo tiene entidad propia y no puede ser "absorbido" por el descanso semanal.</p>
<p>La Audiencia Nacional ha dado la razón a los sindicatos, estableciendo que ambas figuras (festivo y descanso semanal) son derechos independientes que no pueden superponerse sin compensación. La sentencia puede ser <strong>recurrida ante el Tribunal Supremo</strong>, por lo que su aplicación generalizada podría tardar aún varios meses.</p>
<p>Los sindicatos CCOO y UGT han valorado la resolución como un precedente que podría extenderse progresivamente a otros sectores más allá de la atención al cliente, potencialmente afectando a millones de trabajadores cuyo descanso semanal coincide habitualmente con los días festivos del calendario laboral.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Sanidad amplía el cribado de cáncer de mama a mujeres de 45 a 74 años en toda España',
    summary: 'El programa, que hasta ahora cubría a mujeres de entre 50 y 69 años, se amplía para incluir a las franjas más jóvenes y más mayores. Las comunidades tendrán hasta 2029 para implementar la medida.',
    content: `<p>El Ministerio de Sanidad ha anunciado la ampliación del programa nacional de cribado de <strong>cáncer de mama</strong>, que hasta ahora ofrecía mamografías periódicas gratuitas a mujeres de entre 50 y 69 años. El nuevo programa cubrirá a todas las mujeres de entre <strong>45 y 74 años</strong>, incorporando tanto la franja más joven como la más madura, que quedaban excluidas del cribado sistemático.</p>
<p>La decisión se basa en la evidencia científica acumulada en los últimos años, que muestra que <strong>una de cada diez mujeres afectadas por cáncer de mama tiene menos de 50 años</strong>, y que la detección en estadios tempranos mejora significativamente el pronóstico y reduce la necesidad de tratamientos más agresivos. La incorporación de las mujeres de 45 a 49 años es la novedad con mayor impacto potencial en términos de vidas salvadas.</p>
<p>Las <strong>comunidades autónomas</strong>, que gestionan los programas de cribado en sus respectivos territorios, dispondrán de un plazo hasta <strong>2029</strong> para implementar la ampliación. El ministerio destinará fondos adicionales a través del sistema de financiación sanitaria para cubrir los costes del aumento de la cobertura, que se traduce en aproximadamente 1,5 millones de mujeres adicionales susceptibles de recibir mamografías periódicas.</p>
<p>Las asociaciones de pacientes con cáncer de mama han celebrado la medida y han aprovechado para reclamar también la incorporación de pruebas complementarias de ecografía para mujeres con tejido mamario denso, identificado como factor de riesgo adicional.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'El Congreso aprueba eximir de impuestos las ayudas a víctimas de la Dana y los abusos de la Iglesia',
    summary: 'El decreto ley salió adelante sin votos en contra, con la abstención de Vox. También quedan exentas las compensaciones por incendios forestales y las indemnizaciones por inundaciones en Extremadura.',
    content: `<p>El Congreso de los Diputados ha aprobado un decreto ley que declara <strong>exentas de tributación</strong> en el IRPF varias categorías de ayudas y compensaciones económicas concedidas a ciudadanos afectados por desastres y vulneraciones de derechos. La norma salió adelante sin votos en contra, aunque <strong>Vox se abstuvo</strong>.</p>
<p>Las principales exenciones aprobadas afectan a las ayudas concedidas a las víctimas de la <strong>Dana en la Comunitat Valenciana</strong> de octubre de 2024, que en muchos casos habían generado dudas sobre su tratamiento fiscal y que tributaban como renta en ausencia de esta norma. También quedan exentas las compensaciones por <strong>incendios forestales</strong> y las indemnizaciones a afectados por las inundaciones en <strong>Extremadura</strong>.</p>
<p>La medida más simbólicamente relevante es la exención de las <strong>compensaciones económicas que la Iglesia Católica ha entregado o entregue a las víctimas de abusos sexuales</strong> en el seno de la institución, en el marco de los acuerdos de reparación alcanzados tras el informe del Defensor del Pueblo sobre el alcance de los abusos cometidos por miembros del clero.</p>
<p>El gobierno ha explicado que el principio que guía todas las exenciones es el mismo: las ayudas reparadoras por daños sufridos no deben generar una carga fiscal adicional para quienes ya han experimentado un perjuicio grave. La oposición, en general, ha apoyado la medida sin perjuicio de solicitar ampliaciones en futuros proyectos legislativos.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Felipe VI ratifica la reforma constitucional que da a Formentera su propio senador',
    summary: 'La isla podrá elegir un senador propio en lugar de compartir representaciön con Ibiza como venía ocurriendo hasta ahora. Es la primera reforma constitucional aprobada en décadas.',
    content: `<p>El rey <strong>Felipe VI</strong> ha ratificado con su firma la reforma de la Constitución Española que permitirá a la isla de <strong>Formentera</strong> elegir un senador propio en las futuras elecciones generales, en lugar de compartir representación con la isla de Ibiza como venía ocurriendo desde la aprobación de la Constitución de 1978.</p>
<p>La reforma, de alcance limitado pero de notable significado institucional, es la <strong>primera modificación de la Constitución española aprobada en décadas</strong> y fue acordada con un amplísimo consenso parlamentario. El texto modifica el artículo 69 de la Constitución para reconocer a Formentera, la más pequeña de las islas Baleares con representación municipal propia, su derecho a contar con representación directa en la Cámara Alta.</p>
<p>Formentera tiene una población censada de aproximadamente 12.000 habitantes y sus representantes políticos llevaban años reivindicando una presencia propia en el Senado, argumentando que sus intereses específicos como isla pequeña y alejada del continente requerían una voz diferenciada a la de Ibiza, con quien comparte circunscripción desde hace casi medio siglo.</p>
<p>La publicación en el Boletín Oficial del Estado de la reforma y su entrada en vigor antes de las próximas elecciones generales permitirá que los votantes formenterers puedan elegir directamente a su senador por primera vez en la historia democrática de España.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },
  {
    title: 'Un joven tunecino sin hogar se lanza al río Manzanares para rescatar a una mujer que cayó desde 10 metros',
    summary: 'El joven fue el primero en lanzarse al agua a pesar del riesgo de hipotermia. La mujer sufrió graves lesiones en la espalda. El rescate ha generado una oleada de reconocimiento en redes sociales.',
    content: `<p>Un joven tunecino en situación de <strong>sin hogar</strong> se convirtió este miércoles en Madrid en el protagonista de un rescate que ha generado una amplia respuesta de reconocimiento en redes sociales. La actuación se produjo cuando una mujer cayó al <strong>río Manzanares</strong> desde una altura de aproximadamente diez metros, sufriendo graves lesiones en la espalda al impactar con el agua.</p>
<p>Según los testimonios de los presentes, el joven fue la <strong>primera persona en lanzarse al agua</strong> para alcanzar a la mujer, mientras otros viandantes avisaban a los servicios de emergencia. Logró mantenerla a flote y acercarla a la orilla hasta que los equipos de rescate pudieron hacerse cargo. Como consecuencia del tiempo en el agua, el joven sufrió <strong>hipotermia</strong> y fue trasladado al hospital para recibir atención médica.</p>
<p>La víctima, cuya identidad no ha trascendido, fue ingresada en un centro hospitalario madrileño con lesiones graves pero estables. La Policía Municipal investiga las circunstancias de la caída para determinar si fue accidental.</p>
<p>El relato del rescate se viralizó rápidamente en redes sociales, generando una oleada de mensajes de agradecimiento y de debate sobre la situación de las personas sin hogar en las grandes ciudades. Varios vecinos y organizaciones de apoyo social han contactado con los servicios municipales para ofrecer asistencia al joven.</p>`,
    image_url: null,
    category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Jonathan Narváez gana la última etapa del Giro de Italia, su tercera victoria en esta edición',
    summary: 'El ciclista ecuatoriano se impone en la etapa final del Giro de Italia, completando una actuación histórica con tres victorias de etapa en la misma edición de la ronda italiana.',
    content: `<p>El ciclista ecuatoriano <strong>Jonathan Narváez</strong> ha ganado la última etapa del <strong>Giro de Italia 2026</strong>, convirtiéndose en el protagonista más destacado de la edición en cuanto a victorias parciales. Con este triunfo, Narváez suma <strong>tres victorias de etapa</strong> en la misma ronda, una actuación histórica para un corredor del pelotón latinoamericano en la Corsa Rosa.</p>
<p>La etapa final, con salida y llegada en Roma, siguió el protocolo habitual del Giro en sus epílogos: una jornada con marcado carácter festivo para el ganador de la clasificación general, con el pelotón respetando la tradición de no atacar al maillot rosa, aunque con plena competencia en los sprints intermedios y en el embalaje final.</p>
<p>Narváez, corredor del equipo INEOS Grenadiers, ha completado un Giro de altísimo nivel personal que consolida su posición entre los mejores especialistas en etapas del ciclismo mundial. Sus tres victorias llegaron en jornadas de diferente perfil, lo que demuestra una versatilidad poco habitual entre los corredores de su generación.</p>
<p>El ganador de la clasificación general del Giro 2026 recibió el trofeo del maillot rosa en la ceremonia de Roma ante miles de aficionados llegados de toda Europa. La organización de la ronda italiana valoró muy positivamente los niveles de asistencia y de seguimiento televisivo de esta edición.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'Enrique Riquelme busca el aval bancario para presentarse a la presidencia del Real Madrid antes del sábado',
    summary: 'El empresario alicantino, único candidato alternativo a Florentino Pérez, aún no ha reunido el 15% del presupuesto del club que exigen los estatutos. Tiene hasta el sábado para formalizar su candidatura.',
    content: `<p>El empresario alicantino <strong>Enrique Riquelme</strong>, único candidato alternativo a <strong>Florentino Pérez</strong> en las elecciones a la presidencia del Real Madrid, se encuentra en la recta final para reunir el aval económico exigido por los estatutos del club antes de que venza el plazo de presentación de candidaturas el próximo <strong>sábado</strong>.</p>
<p>Los estatutos del Real Madrid establecen que cualquier candidato a la presidencia debe depositar un aval bancario equivalente al <strong>15% del presupuesto anual del club</strong>, una cantidad que en el caso del club blanco supera los 120 millones de euros en el ejercicio actual. El objetivo de esta exigencia es garantizar que los candidatos tienen capacidad económica real para asumir la gestión del club en caso de resultar elegidos.</p>
<p>Riquelme, fundador y dueño de varias empresas en el sector inmobiliario y energético, lleva semanas negociando con entidades bancarias la concesión de este aval. Fuentes cercanas a su candidatura señalan que las conversaciones están avanzadas, aunque el acuerdo definitivo no está cerrado a pocas horas del plazo.</p>
<p>En caso de no lograr el aval a tiempo, Florentino Pérez quedaría como candidato único y sería reelegido automáticamente sin necesidad de elecciones. El magnate madrileño lleva más de veinte años al frente de la presidencia del club blanco, con una sola interrupción de cuatro años entre 2006 y 2009.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'Apple lanzará mañana un documental inmersivo de 20 minutos sobre el Real Madrid exclusivo para Apple Vision Pro',
    summary: 'La producción estará disponible gratuitamente a partir del día 22 de mayo. Es el primer documental deportivo inmersivo de larga duración producido por Apple para su gafas de realidad mixta.',
    content: `<p>Apple ha anunciado que a partir de <strong>mañana, 22 de mayo</strong>, estará disponible gratuitamente para los usuarios de <strong>Apple Vision Pro</strong> un documental inmersivo de <strong>20 minutos de duración</strong> sobre el Real Madrid. La producción, rodada con equipos de cámara volumétrica de última generación, llevará al espectador a los vestuarios, entrenamientos y momentos de alta tensión de la temporada del club blanco.</p>
<p>El documental, cuyo título completo no ha sido revelado en el comunicado de Apple, ha sido producido por el equipo de contenidos originales de la compañía y utiliza plenamente las capacidades de visualización tridimensional y espacial del dispositivo de realidad mixta. Los usuarios podrán experimentar secuencias en las que los jugadores del equipo aparecen a escala real en el espacio físico del espectador.</p>
<p>La elección del Real Madrid como protagonista del primer documental deportivo inmersivo de larga duración de Apple responde a la posición del club como la franquicia deportiva con mayor número de seguidores en el mundo, con más de 600 millones de aficionados declarados en todos los continentes. La colaboración entre Apple y el club blanco se extendería a futuros proyectos de contenido, según fuentes del sector.</p>
<p>Apple Vision Pro, lanzado a principios de 2024, busca ampliar su catálogo de contenido exclusivo para justificar su elevado precio de entrada y acelerar la adopción del dispositivo entre el público general y los aficionados al deporte.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'El Atlético de Madrid construirá una laguna artificial con hasta 1.000 olas por hora junto al Metropolitano',
    summary: 'La laguna climatizada estará operativa en primavera de 2027, funcionará los 365 días del año y tendrá capacidad para hasta medio millón de visitantes anuales.',
    content: `<p>El <strong>Atlético de Madrid</strong> ha anunciado la construcción de una gran instalación de ocio acuático junto a su estadio <strong>Metropolitano</strong>: una laguna artificial climatizada capaz de generar hasta <strong>1.000 olas por hora</strong>, que se convertirá en la mayor instalación de este tipo construida junto a un estadio de fútbol en Europa.</p>
<p>La laguna, cuya apertura está prevista para la <strong>primavera de 2027</strong>, funcionará los <strong>365 días del año</strong> gracias a su sistema de climatización del agua, independizándola de las condiciones meteorológicas exteriores. La instalación tendrá capacidad para recibir hasta <strong>medio millón de visitantes anuales</strong> y ofrecerá experiencias para todos los niveles, desde principiantes que aprenden a hacer surf hasta practicantes avanzados que buscan olas de mayor tamaño y frecuencia.</p>
<p>El proyecto forma parte del plan de diversificación de ingresos del club rojiblanco, que busca convertir el entorno del Metropolitano en un destino de ocio y entretenimiento durante los días sin partido. La laguna se integrará urbanísticamente con los ya existentes museos, restaurantes y tiendas del complejo deportivo del Wanda Metropolitano.</p>
<p>La tecnología de generación de olas artificial ha experimentado importantes avances en los últimos años, con instalaciones similares operando con éxito en Australia, Reino Unido y Estados Unidos. La inversión estimada para el proyecto rojiblanco supera los 80 millones de euros.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'Negreira diagnosticado con Alzheimer podría ser apartado del caso judicial del FC Barcelona',
    summary: 'Un nuevo informe forense concluye que el exvicepresidente del Comité Técnico de Árbitros no tiene capacidad cognitiva suficiente para comprender ni afrontar un proceso judicial.',
    content: `<p>Un nuevo informe forense encargado por la defensa de <strong>José María Enríquez Negreira</strong>, figura central en el caso de los pagos millonarios del <strong>FC Barcelona</strong> al exvicepresidente del Comité Técnico de Árbitros, concluye que el acusado sufre un <strong>trastorno neurocognitivo compatible con un posible Alzheimer</strong> que le impide comprender y afrontar adecuadamente el proceso judicial en marcha.</p>
<p>Según los peritos que elaboraron el informe, el estado cognitivo actual de Negreira no le permite entender la naturaleza de los cargos que se le imputan, participar de manera consciente en su propia defensa ni recordar con coherencia los hechos que son objeto de investigación. Estas circunstancias constituyen, según los mismos peritos, causa suficiente para solicitar su <strong>apartamiento de la causa</strong>.</p>
<p>La fiscalía y las acusaciones particulares deberán pronunciarse sobre el informe antes de que el juez instructor tome una decisión al respecto. Si el magistrado acepta la conclusión pericial, el proceso contra Negreira quedaría suspendido indefinidamente, lo que no afectaría necesariamente a los otros acusados en la causa, entre ellos los expresidentes del Barcelona Sandro Rosell y Josep Maria Bartomeu.</p>
<p>El caso, que investiga si los pagos del Barcelona a la empresa de Negreira constituyeron un intento de influir en las decisiones arbitrales, es uno de los procedimientos judiciales más seguidos del fútbol español en los últimos años.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'La UEFA rediseñará el formato de sus competiciones de selecciones desde 2028 con un modelo tipo Champions',
    summary: 'La Nations League adoptará un formato de liga con seis partidos contra cinco rivales distintos, similar al de la fase de grupos ampliada de la Champions League, a partir de la temporada 2028-2029.',
    content: `<p>La <strong>UEFA</strong> ha anunciado que a partir de la temporada <strong>2028-2029</strong>, tras la celebración de la Eurocopa de 2028, rediseñará el calendario y el formato de sus competiciones de selecciones nacionales. El organismo que rige el fútbol europeo sustituirá el modelo actual por un sistema inspirado en la <strong>fase de liga de la Champions League</strong>.</p>
<p>En el nuevo formato, la <strong>Nations League</strong> adoptará una estructura de liga en la que cada selección disputará <strong>seis partidos contra cinco rivales distintos</strong> durante la temporada, en lugar del sistema de grupos con partidos de ida y vuelta contra los mismos contrincantes que rige actualmente. El cambio busca reducir la repetitividad de los emparejamientos y generar encuentros más variados e imprevisibles para los aficionados.</p>
<p>La reforma también afectará al peso relativo de la Nations League en la clasificación para la Eurocopa, ampliando las posibilidades de acceso al torneo final para selecciones que demuestren un rendimiento consistente a lo largo de la temporada de liga, no solo en los play-offs.</p>
<p>El anuncio ha sido bien recibido por la mayoría de las federaciones europeas, que llevan años reclamando una mayor coherencia y atractivo en el calendario de selecciones. Las pequeñas federaciones han matizado que el nuevo modelo debe preservar sus oportunidades de clasificación frente a las potencias del continente.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'Unai Emery conquista la Europa League con el Aston Villa tras golear al Friburgo 3-0 en la final',
    summary: 'El técnico vasco suma su quinto título en la competición europea de segundo nivel, consolidándose como el entrenador con más títulos en la historia de la UEFA Europa League.',
    content: `<p>El técnico vasco <strong>Unai Emery</strong> ha conquistado la <strong>UEFA Europa League</strong> por quinta vez en su carrera al frente del <strong>Aston Villa</strong>, que venció al <strong>SC Friburgo</strong> por un contundente <strong>3-0</strong> en la final disputada ayer en el estadio olímpico de Budapest. El resultado confirma a Emery como el entrenador con más títulos en la historia de este torneo europeo.</p>
<p>El partido fue dominado de inicio a fin por el conjunto inglés, que aprovechó los errores defensivos del equipo alemán para marcar en tres momentos distintos de la segunda parte. El portero del Aston Villa fue el hombre más destacado en la primera mitad, cuando Friburgo generó varias ocasiones claras, antes de que la superioridad táctica y física del equipo de Emery se impusiera definitivamente.</p>
<p>Para el Aston Villa, el título supone el mayor éxito de su historia reciente y la clasificación directa para la fase de grupos de la UEFA Champions League la próxima temporada. El club de Birmingham, que vivió durante décadas en la segunda línea del fútbol inglés tras su descenso en 2016, ha completado en tres temporadas una de las remontadas deportivas más llamativas del fútbol europeo.</p>
<p>Emery, que ya ganó la Europa League con el Sevilla (tres veces) y con el Villarreal, ha confirmado en rueda de prensa posterior que continuará al frente del Aston Villa la próxima temporada, con el objetivo de debutar en la Champions como protagonista.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
  {
    title: 'Una familia danesa invierte 510 millones para crear un Gran Premio de Fórmula 1 en Dinamarca',
    summary: 'El circuito se construirá en Padborg, una localidad de menos de 5.000 habitantes, con el objetivo de acoger un Gran Premio de Dinamarca en el calendario de la Fórmula 1.',
    content: `<p>Una familia de millonarios daneses ha anunciado una inversión de <strong>510 millones de euros</strong> para la construcción de un nuevo circuito de <strong>Fórmula 1</strong> en <strong>Padborg</strong>, una localidad de menos de 5.000 habitantes en el sur de Dinamarca, próxima a la frontera alemana. El objetivo declarado del proyecto es acoger un <strong>Gran Premio de Dinamarca</strong> en el calendario oficial del campeonato del mundo de la máxima categoría del automovilismo.</p>
<p>El circuito proyectado se diseñará conforme a los estándares de homologación de la FIA para eventos de Fórmula 1, incluyendo zonas de escape, instalaciones para equipos y medios de comunicación, y capacidad para cientos de miles de espectadores a lo largo del fin de semana de carrera. El proyecto contempla además el desarrollo de una zona de ocio y hostelería permanente en los aledaños del trazado.</p>
<p>La elección de Padborg como sede ha sorprendido a los analistas del sector, que señalan que la infraestructura logística de una localidad tan pequeña requerirá inversiones adicionales significativas en accesibilidad y alojamiento. Los promotores argumentan que la proximidad a la ciudad de Flensburg, en Alemania, y al corredor de transporte del sur de Jutlandia compensa estas limitaciones.</p>
<p>Dinamarca no ha albergado nunca un Gran Premio de Fórmula 1 en el calendario moderno del campeonato. La FIA deberá aprobar el circuito y negociar con Liberty Media, promotora del campeonato, la inclusión del evento en el calendario, que actualmente cuenta con 24 Grandes Premios.</p>`,
    image_url: null,
    category_id: CAT.dep,
  },
]

async function main() {
  const conn = await pool.getConnection()
  console.log(`Insertando ${articles.length} artículos...`)
  let ok = 0
  for (const a of articles) {
    const slug = slugify(a.title, { lower: true, strict: true })
      + '-' + Date.now() + '-' + Math.floor(Math.random() * 1000)
    try {
      await conn.execute(
        `INSERT INTO articles
           (title, slug, summary, content, image_url, category_id,
            author, is_featured, published_at, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
        [
          a.title, slug, a.summary || null, a.content,
          a.image_url || null, a.category_id,
          'Redacción NetonNews', 0, DATE,
        ]
      )
      console.log(`  ✅ ${a.title}`)
      ok++
    } catch (e) {
      console.error(`  ❌ ${a.title}: ${e.message}`)
    }
  }
  conn.release()
  console.log(`\nListo: ${ok}/${articles.length} artículos insertados.`)
  process.exit(0)
}

main().catch(e => { console.error(e); process.exit(1) })
