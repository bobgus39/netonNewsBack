require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-05-22 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'El mayor banco ruso usará chips de Huawei para su IA ante el bloqueo de Nvidia',
    summary: 'Sberbank recurrirá al modelo Ascend 910 de Huawei para alimentar GigaChat, su alternativa a ChatGPT, al no poder acceder al hardware avanzado de Nvidia por las sanciones occidentales.',
    content: `<p>El mayor banco de Rusia, <strong>Sberbank</strong>, ha anunciado su intención de utilizar microchips fabricados por <strong>Huawei</strong> —concretamente el modelo <em>Ascend 910</em>— para sustentar GigaChat, su modelo de inteligencia artificial generativa equivalente a ChatGPT. La decisión responde a la imposibilidad de acceder al hardware avanzado de Nvidia como consecuencia de las sanciones económicas impuestas por Occidente tras la invasión rusa de Ucrania.</p>
<p>Los chips Ascend 910 de Huawei ofrecen un rendimiento inferior al de las GPU de Nvidia en tareas de entrenamiento e inferencia de modelos de lenguaje a gran escala, lo que implica mayores costes computacionales y tiempos de proceso más prolongados. No obstante, los ingenieros del banco sostienen que la disponibilidad garantizada del hardware chino compensa la diferencia de prestaciones frente a la incertidumbre del mercado alternativo.</p>
<p>El movimiento ilustra la creciente dependencia tecnológica de Rusia respecto a China en sectores estratégicos como la inteligencia artificial, los semiconductores y las telecomunicaciones. El mercado ruso de chips de alto rendimiento ha quedado prácticamente vedado al hardware occidental, lo que obliga a empresas y organismos públicos a buscar alternativas en el ecosistema tecnológico chino.</p>
<p>Analistas del sector señalan que el rendimiento real del Ascend 910 en producción sigue siendo opaco, ya que Huawei ha limitado las pruebas independientes de sus chips de IA más avanzados.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Samsung evita una huelga histórica de 18 días con un acuerdo provisional de última hora',
    summary: 'La compañía surcoreana y los sindicatos alcanzaron un pacto cuando faltaban apenas 90 minutos para el inicio del paro, el más largo en la historia de la empresa. Los detalles del acuerdo no han sido revelados.',
    content: `<p><strong>Samsung</strong> ha evitado lo que habría sido la huelga más larga de su historia al alcanzar un acuerdo provisional con sus sindicatos cuando faltaban apenas <strong>90 minutos</strong> para el inicio del paro de 18 días. La negociación de última hora puso fin a semanas de tensión laboral que amenazaban con afectar a la producción de semiconductores y dispositivos móviles de la compañía surcoreana.</p>
<p>Ni la empresa ni los representantes sindicales han revelado los detalles concretos del acuerdo, aunque ambas partes han confirmado que las negociaciones continuarán para alcanzar un convenio definitivo. Los sindicatos venían reclamando mejoras salariales, mayores garantías de estabilidad en el empleo y una participación más equitativa en los beneficios extraordinarios generados por la división de semiconductores.</p>
<p>Samsung es el mayor empleador privado de Corea del Sur y su actividad tiene un peso decisivo en la economía nacional. Una huelga de 18 días habría supuesto interrupciones significativas en la cadena de suministro global de chips de memoria DRAM y NAND, en un momento de recuperación de la demanda del sector.</p>
<p>Los analistas destacan que el acuerdo provisional alivia la presión sobre la cotización bursátil de Samsung, que había experimentado una caída moderada durante las semanas de negociación más tensa.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Samsung amplía la familia Galaxy S27 con un nuevo modelo Pro de 6,47 pulgadas',
    summary: 'El Galaxy S27 Pro se situará entre el modelo estándar y el S27 Plus con una pantalla de 6,47 pulgadas. No incluirá el lápiz óptico S Pen, reservado para la gama Ultra.',
    content: `<p><strong>Samsung</strong> ha confirmado la incorporación de un cuarto modelo a su próxima familia de gama alta: el <strong>Galaxy S27 Pro</strong>. El dispositivo contará con una pantalla de <strong>6,47 pulgadas</strong> y se posicionará entre el Galaxy S27 estándar y el Galaxy S27 Plus, completando así una gama con cuatro escalones diferenciados: S27, S27 Pro, S27 Plus y S27 Ultra.</p>
<p>La principal distinción respecto al modelo Ultra es la <strong>ausencia del lápiz óptico S Pen</strong>, función que Samsung mantiene reservada para el escalón más alto de la gama. El S27 Pro estará orientado a usuarios que buscan una pantalla de mayor tamaño que el modelo estándar sin necesidad de las características más avanzadas del Plus o el Ultra.</p>
<p>Samsung no ha proporcionado más detalles técnicos sobre el procesador, el sistema de cámaras o la batería del nuevo modelo. La presentación oficial de la familia Galaxy S27 se espera para principios de 2027, aunque las filtraciones y confirmaciones oficiales de componentes han comenzado a acelerarse en los últimos meses.</p>
<p>La estrategia de ampliar la gama con un modelo intermedio sigue la tendencia iniciada por Apple con su línea iPhone, que también incorporó variantes Pro para cubrir segmentos de precio y tamaño más granulados dentro de su catálogo de gama alta.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Una startup lanza el primer servicio de alquiler de robots humanoides por 150 dólares al día',
    summary: 'Gatsby ofrece robots para tareas domésticas mediante una plataforma tipo Uber. Comprar un humanoide cuesta entre 25.000 y 100.000 dólares; el alquiler busca democratizar el acceso. Ya tiene larga lista de espera.',
    content: `<p>La <em>startup</em> estadounidense <strong>Gatsby</strong> ha lanzado el primer servicio comercial de alquiler de robots humanoides para uso doméstico, con un precio de <strong>150 dólares al día</strong>. Los robots están diseñados para ejecutar tareas del hogar como recoger objetos del suelo, ordenar habitaciones y realizar labores básicas de limpieza, y se gestionan a través de una plataforma digital de reserva similar en concepto a Uber o TaskRabbit.</p>
<p>El modelo de negocio responde a la barrera económica que supone la adquisición de un robot humanoide: los dispositivos más avanzados del mercado tienen un precio de entre <strong>25.000 y 100.000 dólares</strong>, lo que los hace inaccesibles para la inmensa mayoría de los hogares. El alquiler permite a los usuarios acceder a la tecnología para necesidades puntuales sin necesidad de asumir una inversión de este calibre.</p>
<p>Gatsby ha confirmado que la demanda inicial ha superado sus previsiones, con una lista de espera considerable desde el primer día de operaciones. La empresa no ha especificado los modelos concretos de robots que opera ni los fabricantes con los que trabaja.</p>
<p>El lanzamiento del servicio coincide con la maduración del mercado de robots humanoides, donde empresas como Figure, Agility Robotics, Apptronik y Tesla están acelerando el despliegue comercial de sus dispositivos en entornos industriales y, progresivamente, domésticos.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'YouTube lanza "Ask YouTube": IA que responde preguntas y lleva al minuto exacto del vídeo',
    summary: 'La nueva función de Google resume el contenido de vídeos y navega directamente al fragmento relevante. Los creadores advierten que podría reducir el tiempo de visualización y afectar a su monetización.',
    content: `<p>Google ha integrado en <strong>YouTube</strong> una nueva funcionalidad de inteligencia artificial denominada <strong>Ask YouTube</strong>, que permite a los usuarios formular preguntas concretas sobre el contenido de cualquier vídeo y recibir una respuesta resumida acompañada de un enlace directo al <strong>minuto exacto</strong> donde se encuentra la información solicitada.</p>
<p>El sistema funciona mediante el análisis de la transcripción automática del vídeo combinada con los modelos de comprensión de lenguaje de Google. El usuario puede preguntar, por ejemplo, "¿qué ingredientes usa en esta receta?" o "¿cuál es su conclusión sobre este producto?" y recibir una respuesta sintetizada sin necesidad de visionar el vídeo completo.</p>
<p>La función ha generado una reacción crítica inmediata entre los <strong>creadores de contenido</strong>, que advierten que si los usuarios pueden obtener la información que buscan sin reproducir el vídeo completo, el tiempo de visualización efectivo descenderá, lo que impactará negativamente en los ingresos por publicidad y en las métricas de rendimiento de sus canales. YouTube basa gran parte de su sistema de monetización precisamente en el tiempo de visualización acumulado.</p>
<p>Google no ha publicado datos sobre el alcance del despliegue ni los mercados donde está disponible la función en esta fase inicial.</p>`,
    image_url: null, category_id: CAT.tec,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'Científicos identifican una nueva especie de pingüino en la Antártida por primera vez en un siglo',
    summary: 'Investigadores de Chile, Brasil y EE. UU. han diferenciado mediante análisis de ADN la especie Pygoscelis kergulenensis, que convivía mezclada con los pingüinos papúa sin haber sido identificada hasta ahora.',
    content: `<p>Un equipo internacional de investigadores de <strong>Chile, Brasil y Estados Unidos</strong> ha identificado una nueva especie de pingüino en la Antártida, el primer descubrimiento de este tipo en más de <strong>100 años</strong>. La nueva especie, denominada provisionalmente <em>Pygoscelis kergulenensis</em>, había pasado inadvertida durante décadas por convivir en las mismas colonias que los pingüinos papúa (<em>Pygoscelis papua</em>), a los que se asemeja morfológicamente.</p>
<p>La diferenciación fue posible gracias al <strong>análisis de ADN</strong> de individuos procedentes de diversas colonias antárticas. Los datos genéticos revelaron una divergencia evolutiva suficiente para considerar que se trata de una especie independiente, con características moleculares distintas que no se aprecian a simple vista en el campo.</p>
<p>Los investigadores destacan que el hallazgo pone de manifiesto cuántas especies pueden permanecer ocultas a la ciencia cuando sus diferencias no son morfológicamente evidentes. El análisis genómico sistemático de colonias de aves marinas podría revelar más casos similares en los próximos años.</p>
<p>El descubrimiento ha sido publicado en la revista <em>Ornithology</em> y está siendo revisado por la comunidad taxonómica internacional para validar formalmente la nueva denominación de especie. Las colonias antárticas donde se identificó la nueva especie se encuentran en zonas de alta vulnerabilidad climática.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── CINE Y TELEVISIÓN ────────────────────────────────────────
  {
    title: 'El creador de "The Good Doctor" prepara una serie sobre el atracador más educado de Irlanda',
    summary: 'David Shore ha anunciado "I\'m Not Here to Hurt You", inspirada en una historia real irlandesa. Aún no se conoce la plataforma emisora ni la fecha de estreno.',
    content: `<p><strong>David Shore</strong>, creador de las series <em>The Good Doctor</em> y <em>House</em>, ha anunciado su próximo proyecto televisivo: <em>I'm Not Here to Hurt You</em>, una serie de ficción inspirada en una historia real ocurrida en <strong>Irlanda</strong>. El título hace referencia a la frase característica que el protagonista —un ladrón de banco que jamás recurría a la violencia ni a las amenazas— repetía durante sus atracos para tranquilizar a los presentes.</p>
<p>El personaje real en el que se basa la serie protagonizó varios robos a entidades bancarias irlandesas durante los años noventa y dos mil, siempre caracterizado por su extrema cortesía, su deseo explícito de no causar daño y su metodología cuidadosa para evitar la confrontación. Los medios de comunicación irlandeses le apodaron en su momento como "el atracador más educado de Irlanda".</p>
<p>Shore, que ha desarrollado la mayor parte de su carrera entre drama médico y procedural, abordará con esta producción un género distinto, más próximo al thriller de personaje con componentes de humor negro. El guionista ha confirmado que lo que le atrajo del caso fue el retrato de las contradicciones humanas del protagonista.</p>
<p>No se ha confirmado aún la plataforma que emitirá la serie ni la fecha de estreno ni el reparto. Se espera más información en los próximos meses.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'Fallece el actor de doblaje japonés Takahiro Fujiwara a los 43 años',
    summary: 'Con casi 30 años de carrera, prestó su voz a personajes de One Piece, My Hero Academia, Ghost in the Shell y Attack on Titan, y participó en videojuegos como Final Fantasy XVI y Kingdom Hearts 3.',
    content: `<p>El actor de doblaje japonés <strong>Takahiro Fujiwara</strong> ha fallecido a los 43 años tras una carrera de casi tres décadas en la industria de la animación japonesa. La noticia ha generado una oleada de homenajes en las redes sociales de fans de anime de todo el mundo, que le recordaron por su participación en algunas de las franquicias más populares del género.</p>
<p>Entre sus trabajos más destacados se encuentran personajes de series como <em>One Piece</em>, <em>My Hero Academia</em>, <em>Ghost in the Shell: Stand Alone Complex</em> y <em>Attack on Titan</em>. Su versatilidad vocal le permitió dar vida tanto a personajes de acción de gran intensidad como a roles secundarios de mayor matiz dramático.</p>
<p>Fujiwara también participó activamente en el mundo del videojuego, prestando su voz a personajes de títulos de gran relevancia como <em>Final Fantasy XVI</em> y <em>Kingdom Hearts 3</em>. Esta doble presencia en anime y videojuegos le convirtió en una figura reconocida y valorada en los dos mercados de entretenimiento interactivo y audiovisual japonés.</p>
<p>Las causas del fallecimiento no han sido reveladas por su representante ni por su familia. La industria del doblaje japonés ha expresado sus condolencias y ha destacado su profesionalidad y su dedicación durante décadas de trabajo ininterrumpido en el sector.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'Guillermo del Toro acumula 26 años intentando llevar "En las montañas de la locura" al cine',
    summary: 'El director mexicano tiene más de 300 piezas de arte conceptual y varios guiones, con James Cameron como posible productor y Tom Cruise como candidato al papel protagonista. El proyecto ha sido cancelado en repetidas ocasiones.',
    content: `<p>El director mexicano <strong>Guillermo del Toro</strong> lleva 26 años intentando llevar a la gran pantalla la novela corta de H.P. Lovecraft <em>En las montañas de la locura</em>, considerada uno de los textos fundacionales de la literatura de terror cósmico y una de sus obras más adaptadas al cómic y al videojuego, aunque nunca al cine en formato de gran producción.</p>
<p>A lo largo de estas dos décadas y media, Del Toro ha acumulado más de <strong>300 piezas de arte conceptual</strong>, varios guiones en distintas versiones, negociaciones con múltiples estudios y una lista de colaboradores de primer nivel. <strong>James Cameron</strong> ha figurado como posible productor ejecutivo en varias de las iteraciones del proyecto, y <strong>Tom Cruise</strong> ha sido mencionado como candidato al papel protagonista en las conversaciones más recientes.</p>
<p>El principal obstáculo ha sido siempre la clasificación por edades y el presupuesto requerido: Del Toro insiste en que la adaptación fiel de Lovecraft exige una calificación para adultos y un presupuesto de gran producción, combinación que los estudios han rechazado sistemáticamente por su escasa rentabilidad esperada en taquilla.</p>
<p>Del Toro ha declarado recientemente que el proyecto "sigue vivo" y que está explorando nuevas vías de financiación independiente. Los fans de la obra lovecraftiana permanecen expectantes ante cada nuevo movimiento del director, aunque el historial de cancelaciones ha moderado el optimismo generalizado.</p>`,
    image_url: null, category_id: CAT.cul,
  },

  // ─── ECONOMÍA ─────────────────────────────────────────────────
  {
    title: 'Las bolsas abren con leves caídas: S&P 500 en 7.400 puntos, petróleo a 102 y euro en 1,161',
    summary: 'El S&P 500 y el Ibex 35 retroceden ligeramente tras la euforia del día anterior. El bitcoin se mantiene en 77.000 dólares, el petróleo baja a 102 dólares y el oro permanece estable.',
    content: `<p>Los mercados financieros globales abren este viernes con <strong>leves caídas</strong> generalizadas, en una sesión de consolidación tras las fuertes subidas del día anterior impulsadas por los resultados de Nvidia. El <strong>S&P 500</strong> cotiza en torno a los <strong>7.400 puntos</strong>, mientras que el <strong>Ibex 35</strong> también retrocede moderadamente.</p>
<p>El <strong>bitcoin</strong> se mantiene estable en el entorno de los <strong>77.000 dólares</strong>, sin variaciones significativas respecto al cierre del jueves. El <strong>oro y la plata</strong> cotizan sin cambios relevantes, reflejando la ausencia de nuevos catalizadores geopolíticos o macroeconómicos que alteren el apetito por los activos refugio.</p>
<p>El <strong>petróleo Brent</strong> continúa su descenso hasta los <strong>102 dólares por barril</strong>, beneficiado por la progresiva normalización del tráfico en el estrecho de Ormuz. El <strong>euro</strong> se aprecia ligeramente hasta los <strong>1,161 dólares</strong>, consolidando la recuperación de la moneda única frente al dólar iniciada la semana pasada.</p>
<p>Los analistas señalan que la jornada del viernes suele estar marcada por el cierre de posiciones antes del fin de semana, lo que puede amplificar movimientos de baja intensidad. El principal dato macroeconómico de la semana que viene será la publicación del índice de confianza del consumidor estadounidense.</p>`,
    image_url: null, category_id: CAT.eco,
  },

  // ─── VIDEOJUEGOS (bajo Tecnología) ────────────────────────────
  {
    title: 'Sony anuncia un State of Play el 2 de junio con el primer gameplay de Marvel\'s Wolverine',
    summary: 'El evento durará más de una hora y se emitirá a las 23:00 horas españolas. Será la primera vez que se muestre gameplay del juego de Insomniac Games sobre el mutante adamantino.',
    content: `<p><strong>Sony Interactive Entertainment</strong> ha confirmado la celebración de un nuevo <strong>State of Play</strong> el próximo <strong>martes 2 de junio</strong> a las <strong>23:00 horas</strong> (hora peninsular española), con una duración prevista de más de una hora. El evento de presentación de videojuegos será retransmitido en directo a través de los canales oficiales de PlayStation en YouTube y Twitch.</p>
<p>El protagonista indiscutible del evento será <strong><em>Marvel's Wolverine</em></strong>, el juego de acción desarrollado por Insomniac Games que protagonizará la primera demostración de <em>gameplay</em> pública. Hasta ahora, el título solo había sido anunciado mediante un breve tráiler cinemático, sin mostrar mecánicas de juego reales. La revelación responde a la estrategia de Sony de presentar sus juegos single player más esperados con antelación suficiente antes de su lanzamiento.</p>
<p>El State of Play coincidirá en el calendario con el periodo previo al <strong>Summer Game Fest 2026</strong>, que se celebrará el 5 de junio, lo que convierte a las primeras semanas de junio en la fecha clave del año para los anuncios de videojuegos.</p>
<p>Sony no ha adelantado otros títulos que aparecerán en el evento, aunque fuentes del sector apuntan a que habrá novedades para PlayStation VR2 y actualizaciones de varios juegos de servicio en activo.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Filtrado gameplay completo de Virtua Fighter 6 antes de su presentación en el Summer Game Fest',
    summary: 'El vídeo muestra combates completos del esperado juego de lucha de Sega. El material parece proceder de la presentación oficial prevista para el 5 de junio, anticipando involuntariamente el anuncio.',
    content: `<p>Un vídeo con <em>gameplay</em> completo de <strong>Virtua Fighter 6</strong> se ha filtrado en internet días antes de su presentación oficial prevista para el <strong>Summer Game Fest 2026</strong>, que se celebrará el próximo 5 de junio. Las imágenes muestran combates con varios personajes, mecánicas de juego renovadas y una calidad visual notablemente superior a la de la entrega anterior.</p>
<p>El material filtrado parece proceder de un vídeo preparado por Sega para la presentación en el evento de Geoff Keighley, lo que sugiere una filtración interna o un error en la gestión de activos digitales previos al embargo de comunicación. La aparición del vídeo ha generado una respuesta masiva en la comunidad de fans del juego de lucha, uno de los géneros con mayor base de seguidores en Japón y el sudeste asiático.</p>
<p>Virtua Fighter, franquicia pionera en los juegos de lucha 3D desde su debut en 1993, lleva más de una década sin una entrega numerada principal. El anuncio del sexto título fue uno de los más esperados por la comunidad competitiva del género, que ve en la saga de Sega un referente técnico y de diseño de personajes.</p>
<p>Sega no ha emitido ningún comentario oficial sobre la filtración, aunque se espera que la presentación formal del juego continúe adelante el día 5 de junio como estaba planificado.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Kick expulsa a 500 streamers por inflar sus audiencias con bots y generar 80 millones de horas falsas al mes',
    summary: 'La plataforma competidora de Twitch confirma el mayor caso de fraude de audiencia conocido en el sector. Los streamers de habla inglesa lideraban el fraude, seguidos de portugueses y árabes.',
    content: `<p>La plataforma de <em>streaming</em> <strong>Kick</strong> ha confirmado la expulsión de <strong>500 creadores de contenido</strong> tras detectar el uso masivo de bots para inflar artificialmente sus cifras de espectadores. La investigación interna de la plataforma reveló que estas cuentas generaban colectivamente casi <strong>80 millones de horas de visualización falsas al mes</strong>, distorsionando los sistemas de recomendación y las métricas de alcance de toda la plataforma.</p>
<p>Según los datos facilitados por Kick, los streamers de habla <strong>inglesa</strong> lideraban el fraude en términos absolutos, seguidos de creadores de habla <strong>portuguesa</strong> y de la <strong>región árabe</strong>. El mecanismo habitual consistía en el alquiler de redes de bots que conectaban simultáneamente al canal del streamer, simulando una audiencia real y elevando artificialmente su posición en los rankings de la plataforma.</p>
<p>El problema de los bots en plataformas de <em>streaming</em> no es exclusivo de Kick, pero la magnitud de lo detectado ha sorprendido al sector. Las cifras infladas de audiencia permiten a los streamers fraudulentos reclamar patrocinios y acuerdos comerciales basados en alcances que en realidad no existen.</p>
<p>Kick ha anunciado la implantación de nuevos mecanismos de detección en tiempo real y ha advertido de que las expulsiones continuarán en las próximas semanas si se identifican más casos similares.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'El Mundial de Clubes de la Kings League 2026 se celebrará en Milán con 16 equipos de 7 países',
    summary: 'La competición descarta Arabia Saudí por la situación geopolítica regional. Participarán equipos de España, Brasil, Francia, Alemania, Italia, México y la región MENA.',
    content: `<p>La <strong>Kings League</strong> ha confirmado que su <strong>Mundial de Clubes 2026</strong> se celebrará en <strong>Milán</strong>, Italia. La organización descartó Arabia Saudí, que había sido candidata a acoger el torneo, citando la inestabilidad geopolítica en la región del Golfo como motivo principal para el cambio de sede.</p>
<p>El torneo reunirá a <strong>16 equipos</strong> procedentes de siete países: España, Brasil, Francia, Alemania, Italia, México y la región MENA (Oriente Medio y Norte de África). La representación internacional refleja la expansión de la competencia de fútbol siete impulsada por el exfutbolista Gerard Piqué, que en pocos años ha pasado de ser un fenómeno español a convertirse en una franquicia global con millones de seguidores en plataformas digitales.</p>
<p>Milán fue elegida por su infraestructura deportiva, su capacidad hotelera y su centralidad en el mapa del fútbol europeo. La ciudad italiana albergará los partidos en un recinto por confirmar, con capacidad para decenas de miles de espectadores. La Kings League prevé también una zona de entretenimiento y activaciones de marca en torno al estadio durante toda la duración del torneo.</p>
<p>Las fechas exactas del evento no han sido anunciadas, aunque la organización ha indicado que se celebrará en el segundo semestre de 2026.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Epic Games regala Tomb Raider I-III Remasterizado para PC de forma gratuita por tiempo limitado',
    summary: 'La colección que incluye las tres primeras entregas de la saga en versión remasterizada está disponible sin coste en la Epic Games Store hasta que finalice la oferta gratuita semanal.',
    content: `<p><strong>Epic Games</strong> está distribuyendo de forma gratuita <strong>Tomb Raider I-III Remasterizado</strong> para PC a través de su tienda digital, en el marco del programa de juegos gratuitos semanales que la plataforma mantiene desde 2018. El juego estará disponible sin coste por tiempo limitado, tras lo cual volverá a su precio habitual.</p>
<p>La colección incluye las tres primeras entregas de la saga protagonizada por <strong>Lara Croft</strong> —<em>Tomb Raider</em> (1996), <em>Tomb Raider II</em> (1997) y <em>Tomb Raider III</em> (1998)—, completamente remasterizadas con gráficos mejorados, compatibilidad con resoluciones modernas y controles actualizados, manteniendo al mismo tiempo la opción de cambiar a los gráficos originales en cualquier momento.</p>
<p>Las versiones originales de estos tres títulos son consideradas obras fundacionales del género de acción-aventura en tercera persona y siguen siendo referentes de diseño de niveles para muchos desarrolladores contemporáneos. El remasterizado, publicado por Aspyr en 2024, recibió valoraciones positivas por su fidelidad al material original y la calidad de la actualización visual.</p>
<p>Para reclamar el juego gratuitamente basta con acceder a la Epic Games Store con una cuenta registrada antes de que expire la oferta.</p>`,
    image_url: null, category_id: CAT.tec,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Trump planea llamar al presidente de Taiwán y evalúa una venta de armas a la isla',
    summary: 'Sería la primera comunicación directa entre líderes en ejercicio de ambos gobiernos desde 1979. Taiwán pedirá a Trump que continúe las transferencias de armamento y reconozca su soberanía.',
    content: `<p>El presidente de Estados Unidos, <strong>Donald Trump</strong>, ha confirmado que planea mantener una conversación telefónica con el presidente de <strong>Taiwán</strong>, <strong>Lai Ching-te</strong>, y que su administración está evaluando una posible nueva venta de armamento a la isla. De producirse, sería la <strong>primera comunicación directa entre líderes en ejercicio</strong> de ambos gobiernos desde 1979, año en que Estados Unidos estableció relaciones diplomáticas formales con la República Popular China y dejó de reconocer oficialmente a Taiwán.</p>
<p>La iniciativa supone una ruptura con décadas de política estadounidense de "ambigüedad estratégica" respecto a Taiwán y podría generar una respuesta diplomática intensa por parte de <strong>Pekín</strong>, que considera a Taiwán una provincia rebelde cuya reunificación con el continente es innegociable.</p>
<p>Fuentes del gobierno taiwanés han indicado que Lai Ching-te aprovecharía la conversación para solicitar a Trump la <strong>continuación de las transferencias de sistemas de armas</strong> avanzados y un reconocimiento más explícito de la soberanía de facto de la isla. Taiwán lleva años invirtiendo en la modernización de sus fuerzas armadas ante la creciente presencia militar china en el estrecho.</p>
<p>La Casa Blanca no ha proporcionado una fecha concreta para la llamada, aunque fuentes próximas al Consejo de Seguridad Nacional señalan que podría producirse antes de que finalice el mes.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Trump envía 5.000 soldados adicionales a Polonia, contradiciendo su plan de reducción militar en Europa',
    summary: 'El presidente estadounidense justifica la decisión por la "buena relación" con el presidente polaco y su apoyo durante las elecciones. El despliegue contradice meses de retórica sobre retirar tropas de Europa.',
    content: `<p>El presidente de Estados Unidos, <strong>Donald Trump</strong>, ha anunciado el envío de <strong>5.000 soldados adicionales</strong> a <strong>Polonia</strong>, contradiciendo directamente sus declaraciones previas sobre la intención de reducir la presencia militar estadounidense en Europa. El anuncio llega tras meses de retórica que había generado inquietud entre los aliados europeos de la OTAN sobre el compromiso de Washington con la defensa colectiva.</p>
<p>Trump justificó la decisión apelando a la "excelente relación personal" con el presidente polaco y al apoyo que Polonia prestó a su campaña electoral. El presidente estadounidense no mencionó factores estratégicos relacionados con la guerra en Ucrania o la posición de Rusia como detonantes del refuerzo.</p>
<p>Polonia es ya uno de los países con mayor presencia de tropas estadounidenses en Europa continental, con más de 10.000 efectivos desplegados de forma permanente, y viene incrementando su gasto en defensa por encima del 4% del PIB, el porcentaje más alto de todos los miembros de la Alianza Atlántica.</p>
<p>Los aliados europeos han recibido el anuncio con alivio moderado, aunque los analistas señalan que la justificación de Trump basada en relaciones personales en lugar de compromisos estratégicos formales introduce un elemento de imprevisibilidad en la política de seguridad trasatlántica que genera preocupación a largo plazo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'EE. UU. retira las sanciones contra la relatora de la ONU para Palestina tras fallo judicial',
    summary: 'Un juez federal había suspendido previamente las sanciones por considerarlas posiblemente inconstitucionales y vulneradoras de la libertad de expresión. Francesca Albanese había sido señalada por sus informes críticos con Israel.',
    content: `<p>La administración de <strong>Estados Unidos</strong> ha anulado oficialmente las sanciones impuestas contra <strong>Francesca Albanese</strong>, relatora especial de Naciones Unidas para los derechos humanos en los territorios palestinos ocupados. La retirada se produce después de que un juez federal suspendiera provisionalmente las sanciones al considerar que podrían ser <strong>inconstitucionales</strong> y vulneradoras de la libertad de expresión garantizada por la Primera Enmienda.</p>
<p>Albanese había sido sancionada por la administración Trump en respuesta a sus informes ante el Consejo de Derechos Humanos de la ONU, en los que calificó de "genocidio" las operaciones militares israelíes en Gaza y reclamó responsabilidades internacionales. Las sanciones incluían la congelación de activos y la prohibición de transacciones con ciudadanos estadounidenses.</p>
<p>La relatora, de nacionalidad italiana, rechazó las sanciones desde el primer momento, alegando que constituían un ataque a la independencia de los mecanismos de derechos humanos de la ONU y una represalia por el ejercicio legítimo de su mandato. La decisión de retirarlas ha sido celebrada por varias organizaciones de derechos humanos como un reconocimiento de la primacía del derecho internacional sobre las presiones políticas.</p>
<p>Albanese continúa en su cargo como relatora especial y ha anunciado que presentará un nuevo informe ante el Consejo de Derechos Humanos en la próxima sesión ordinaria.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Condenadas Airbus y Air France por el accidente del vuelo AF447, 17 años después de la tragedia',
    summary: 'El Tribunal de Apelación de París revierte la absolución de 2023 y condena a las compañías a pagar 225.000 euros a cada familia de las 228 víctimas del accidente de 2009 sobre el Atlántico.',
    content: `<p>El <strong>Tribunal de Apelación de París</strong> ha condenado a <strong>Airbus</strong> y <strong>Air France</strong> por su responsabilidad en el accidente del vuelo <strong>AF447</strong>, que el 1 de junio de 2009 se precipitó al océano Atlántico entre Río de Janeiro y París causando la muerte de las <strong>228 personas</strong> que viajaban a bordo. Las compañías deberán abonar <strong>225.000 euros</strong> a cada familia de las víctimas.</p>
<p>La sentencia revierte el resultado del primer juicio, celebrado en 2023, en el que ambas empresas fueron <strong>absueltas</strong>. El tribunal de apelación ha determinado que existió negligencia tanto en el diseño y la gestión de las sondas Pitot del avión —cuyo fallo de funcionamiento en condiciones de hielo desencadenó la pérdida de control de la aeronave— como en la formación de la tripulación para responder a situaciones de pérdida de velocidad a gran altitud.</p>
<p>Las familias de las víctimas, que llevaban 17 años reclamando responsabilidades, recibieron la sentencia con alivio y satisfacción. Sus abogados destacaron que la condena sienta un precedente importante sobre la responsabilidad de fabricantes y aerolíneas en accidentes aéreos derivados de fallos técnicos conocidos.</p>
<p>Airbus y Air France han anunciado que estudiarán la sentencia para determinar si presentan recurso ante el Tribunal de Casación, la máxima instancia del sistema judicial francés.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Empeora el estado de la princesa heredera de Tailandia tras una infección abdominal',
    summary: 'La princesa Bajrakitiyabha, en coma desde diciembre de 2022 tras un paro cardíaco y fallo multiorgánico, sufre una nueva complicación derivada de una inflamación de colon. Era considerada posible heredera al trono.',
    content: `<p>El estado de salud de la princesa tailandesa <strong>Bajrakitiyabha</strong>, hija mayor del rey Vajiralongkorn, ha experimentado un deterioro según la información difundida por el palacio real de Tailandia. La princesa, que permanece en coma desde <strong>diciembre de 2022</strong> cuando sufrió un paro cardíaco seguido de fallo multiorgánico, ha desarrollado ahora una <strong>infección abdominal</strong> derivada de una inflamación de colon que ha complicado su ya delicado estado clínico.</p>
<p>La princesa Bajrakitiyabha, de 45 años, era considerada la candidata más probable para suceder a su padre en el trono de Tailandia dada la ausencia de un heredero varón designado formalmente. Su estado de incapacidad prolongada ha abierto un debate velado sobre la sucesión en el seno de la familia real tailandesa, un tema de extrema sensibilidad en el país dada la legislación de lesa majestad que penaliza severamente cualquier crítica a la monarquía.</p>
<p>El palacio real no ha facilitado información sobre el pronóstico ni sobre el tratamiento en curso. Las autoridades médicas tailandesas responsables de su atención tampoco se han pronunciado públicamente sobre su evolución.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Una emisora británica anuncia por error el fallecimiento del rey Carlos III',
    summary: 'Un fallo informático activó una grabación preconfigurada para ese supuesto en una cadena local del sureste de Inglaterra. La emisora interrumpió su programación antes de retractarse y disculparse.',
    content: `<p>Una emisora de radio local del sureste de <strong>Inglaterra</strong> interrumpió su programación habitual para anunciar el <strong>fallecimiento del rey Carlos III</strong>, en lo que resultó ser un grave error provocado por un fallo en sus sistemas informáticos. La cadena atribuyó el incidente a un fallo técnico que activó automáticamente una <strong>grabación preconfigurada</strong> preparada para ese supuesto, un protocolo habitual en los medios de comunicación británicos ante la posibilidad del fallecimiento de miembros de la familia real.</p>
<p>El anuncio, que se emitió durante varios minutos antes de ser interrumpido, generó alarma entre los oyentes que lo escucharon antes de que la emisora pudiera rectificar. La cadena emitió posteriormente una disculpa pública y aclaró que el rey se encontraba en buen estado de salud.</p>
<p>El Palacio de Buckingham no emitió ningún comunicado específico sobre el incidente. El rey Carlos III, que fue diagnosticado de cáncer en 2024 y continúa en tratamiento, ha mantenido en los últimos meses una agenda pública reducida pero activa.</p>
<p>El incidente ha reabierto el debate en el Reino Unido sobre los protocolos de gestión de contenidos de emergencia en medios de comunicación y la necesidad de establecer salvaguardas técnicas más robustas para evitar la activación accidental de materiales sensibles.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Dinamarca realizará la autopsia de la ballena Timy, fallecida pese al costoso rescate privado',
    summary: 'El cadáver flota en aguas poco profundas de una playa frecuentada. Las autoridades piden a la población que no se acerque por riesgo de infección y estudian cómo retirar los restos.',
    content: `<p>Las autoridades danesas han anunciado la realización de una <strong>autopsia</strong> al cadáver de la ballena jorobada conocida como <strong>Timy</strong>, que falleció recientemente pese al extenso y costoso operativo de rescate financiado por empresarios privados daneses. La muerte del cetáceo, que había generado un amplio seguimiento mediático e internacional durante las semanas del rescate, ha decepcionado a quienes invirtieron recursos y esfuerzo en intentar salvarla.</p>
<p>El cuerpo de Timy flota actualmente en aguas poco profundas próximas a una <strong>playa frecuentada</strong> por la población local, lo que ha llevado a las autoridades a emitir advertencias para que los ciudadanos se mantengan a distancia prudencial. El proceso de descomposición natural de un cetáceo de gran tamaño puede liberar gases y bacterias que representan un riesgo sanitario para las personas y los animales domésticos que se acerquen al cadáver.</p>
<p>La autopsia buscará determinar las causas exactas del fallecimiento, especialmente si la muerte se debió a lesiones previas, a las dificultades de adaptación al entorno costero danés —alejado del hábitat natural de las ballenas jorobadas— o a complicaciones derivadas de las operaciones de rescate. Los resultados también aportarán datos científicos sobre el estado de salud de la especie.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La madre de Matthew Perry acusa a su asistente de facilitar e incentivar su consumo de ketamina',
    summary: 'En una carta presentada ante el tribunal, la familia del actor alega que el asistente personal fomentó activamente el consumo de drogas en lugar de proteger al protagonista de Friends.',
    content: `<p>La madre del actor <strong>Matthew Perry</strong>, fallecido en octubre de 2023 a los 54 años, ha presentado una carta ante el tribunal que juzga a varios acusados en relación con su muerte en la que acusa directamente al <strong>asistente personal</strong> del actor de haber facilitado e incluso incentivado activamente su consumo de drogas, particularmente de <strong>ketamina</strong>, en lugar de ejercer cualquier función protectora o preventiva.</p>
<p>La familia Perry alega que el asistente era consciente del estado de adicción del actor y que, lejos de alertar a médicos o familiares, habría contribuido a mantener el acceso de Perry a las sustancias que acabaron con su vida. Los fiscales habían determinado previamente que Perry murió de "efectos agudos de la ketamina" y que al menos cinco personas, incluyendo dos médicos, un asistente y dos traficantes, tuvieron responsabilidad en suministrarle la droga.</p>
<p>Varios de los acusados en el caso ya han firmado acuerdos con la fiscalía a cambio de cooperación. El juicio contra los restantes implicados continúa en los tribunales federales de Los Ángeles. La carta de la madre del actor tiene un carácter testimonial ante el tribunal más que una nueva acusación formal.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Dos niños franceses de 3 y 5 años son abandonados solos en un bosque de Portugal',
    summary: 'El mayor relató que sus padres les vendaron los ojos y los dejaron en el monte con el pretexto de un juego. Llevaban mochilas con agua, fruta y ropa, lo que apunta a un abandono premeditado.',
    content: `<p>Las autoridades portuguesas han abierto una investigación tras el hallazgo de dos niños franceses de <strong>3 y 5 años</strong> solos y en estado de pánico en una carretera rural del <strong>Alentejo</strong>. Los menores fueron encontrados por un conductor que alertó a la Guardia Nacional Republicana, que acudió al lugar y se hizo cargo de los niños.</p>
<p>El niño de mayor edad relató a los agentes que sus padres les habían <strong>vendado los ojos</strong> y los habían llevado hasta el lugar con el pretexto de que era un juego, abandonándolos después sin que pudieran ver adónde los llevaban. Ambos niños portaban <strong>mochilas con agua, fruta y ropa de abrigo</strong>, lo que apunta a que el abandono fue <strong>premeditado</strong> y no fruto de un accidente o una negligencia fortuita.</p>
<p>Las autoridades portuguesas han notificado el caso a sus homólogas francesas y están trabajando para localizar a los padres, cuya identidad ha sido establecida a partir de la documentación que los niños llevaban consigo. Los menores han sido puestos a disposición de los servicios de protección a la infancia mientras continúa la investigación.</p>
<p>El caso ha generado consternación en Portugal y Francia y ha suscitado debate sobre los mecanismos de detección temprana de familias en riesgo por parte de los servicios sociales de ambos países.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── CIENCIA / SALUD ──────────────────────────────────────────
  {
    title: 'La gonorrea y la sífilis alcanzan en Europa sus niveles más altos en más de una década',
    summary: 'La gonorrea ha aumentado un 303% en Europa desde 2015 y la sífilis se ha más que duplicado. España registró el mayor número de casos de gonorrea de toda la Unión Europea en 2024.',
    content: `<p>Un informe publicado con datos de 2024 por el Centro Europeo para la Prevención y el Control de las Enfermedades (ECDC) revela que la <strong>gonorrea</strong> y la <strong>sífilis</strong> han alcanzado en Europa sus niveles más elevados en más de una década. La gonorrea ha experimentado un incremento del <strong>303%</strong> en el continente desde 2015, mientras que los casos de sífilis se han más que duplicado en el mismo periodo.</p>
<p><strong>España</strong> ocupa el primer puesto de toda la Unión Europea en número de casos de gonorrea registrados en 2024, un dato que los epidemiólogos atribuyen a una combinación de factores: mayor cobertura diagnóstica, cambios en conductas sexuales de riesgo y resistencia creciente de la bacteria <em>Neisseria gonorrhoeae</em> a los antibióticos convencionales.</p>
<p>El informe advierte que la gonorrea resistente a múltiples antibióticos se ha convertido en un problema de salud pública prioritario, con cepas que no responden a los tratamientos de primera línea. La OMS ha incluido la gonorrea resistente en su lista de patógenos de alta prioridad para el desarrollo de nuevos antibióticos.</p>
<p>Las autoridades sanitarias europeas recomiendan reforzar los programas de cribado, especialmente entre hombres que tienen sexo con hombres y jóvenes de entre 15 y 24 años, grupos en los que se concentra la mayor parte del incremento registrado.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── LATINOAMÉRICA ────────────────────────────────────────────
  {
    title: 'China y Rusia exigen a EE. UU. que detenga su campaña de presión contra Cuba',
    summary: 'Moscú califica de "intolerable" la actitud estadounidense tras la acusación formal contra Raúl Castro. Las dos potencias apoyan al gobierno cubano en el Consejo de Seguridad de la ONU.',
    content: `<p><strong>China</strong> y <strong>Rusia</strong> han exigido formalmente a Estados Unidos que detenga su campaña de presión política y judicial contra <strong>Cuba</strong>, en respuesta directa a la acusación formal presentada por el Departamento de Justicia estadounidense contra el expresidente cubano Raúl Castro por el derribo de avionetas civiles en 1996. Moscú ha calificado la actitud de Washington de "intolerable" y ha advertido de que considera la actuación judicial como una injerencia política encubierta.</p>
<p>La declaración conjunta fue presentada ante el Consejo de Seguridad de la ONU, donde tanto China como Rusia cuentan con poder de veto. Ambas potencias reiteraron su apoyo a la soberanía cubana y rechazaron lo que denominaron "instrumentalización del sistema judicial con fines geopolíticos".</p>
<p>El gobierno cubano ha agradecido el respaldo de sus aliados tradicionales y ha reiterado que las acusaciones contra Raúl Castro carecen de fundamento jurídico y representan un nuevo capítulo en el que califica como "hostilidad histórica e injustificada" de Estados Unidos hacia la isla.</p>
<p>La respuesta de Washington a la declaración sino-rusa fue escueta: el Departamento de Estado señaló que la acusación formal es una cuestión de justicia para las familias de las víctimas y que no responde a ninguna agenda política.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'EE. UU. ofrece 100 millones en ayuda a Cuba condicionada a que llegue directamente a la población',
    summary: 'Marco Rubio anuncia que Cuba ha aceptado alimentos y medicinas por valor de 100 millones de dólares que no podrán pasar por el gobierno ni por el conglomerado militar Gaesa. Rubio plantea una nueva relación condicionada a elecciones libres.',
    content: `<p>El secretario de Estado estadounidense <strong>Marco Rubio</strong> ha anunciado que Cuba ha aceptado una oferta de ayuda humanitaria de <strong>100 millones de dólares</strong> en alimentos y medicinas, con la condición expresa de que la entrega llegue <strong>directamente a la población cubana</strong> sin pasar por los canales del gobierno ni por <strong>Gaesa</strong>, el conglomerado de empresas controlado por las Fuerzas Armadas Revolucionarias que gestiona gran parte de la economía de la isla.</p>
<p>Rubio presentó el acuerdo como el inicio de un nuevo marco de relación entre Washington y La Habana, condicionado a avances concretos hacia la <strong>celebración de elecciones libres y multipartidistas</strong>. El secretario de Estado señaló que la ayuda humanitaria no implica un levantamiento del embargo ni una normalización diplomática, sino un primer paso para establecer canales de comunicación directa con la sociedad civil cubana.</p>
<p>El gobierno cubano no ha emitido un comunicado oficial confirmando los términos exactos del acuerdo, y fuentes diplomáticas advierten de que la condición de distribución directa sin intermediación estatal es extremadamente difícil de verificar y hacer cumplir en la práctica dentro del sistema de distribución controlado por el Estado cubano.</p>
<p>La iniciativa ha sido recibida con escepticismo por organizaciones de la sociedad civil cubana en el exilio, que la consideran insuficiente y advierten del riesgo de que el gobierno de La Habana instrumentalice la ayuda para su propia legitimación.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'EE. UU. despliega el portaviones USS Nimitz en el Caribe como presión sobre el régimen cubano',
    summary: 'El portaviones y el destructor de misiles guiados USS Gridley son desplegados en el Caribe en el marco de la estrategia de presión de la administración Trump sobre el gobierno de La Habana.',
    content: `<p>La administración Trump ha desplegado el portaviones nuclear <strong>USS Nimitz</strong> y el destructor de misiles guiados <strong>USS Gridley</strong> en aguas del <strong>Caribe</strong>, en lo que el Pentágono describe como un "ejercicio de presencia naval" que forma parte de la estrategia de presión diplomática y militar sobre el régimen cubano.</p>
<p>El despliegue es el elemento más visible de una campaña de presión multidimensional sobre La Habana que incluye sanciones adicionales, la acusación formal contra Raúl Castro y la oferta de ayuda humanitaria condicionada anunciada en las últimas 24 horas. La presencia del USS Nimitz en el Caribe tiene una carga simbólica considerable, dado el peso histórico que la potencia naval estadounidense ha tenido en las crisis vinculadas a Cuba desde los años sesenta.</p>
<p>El gobierno cubano ha respondido con dureza, calificando el despliegue de "provocación imperialista" y convocando a su embajador ante la comunidad internacional para denunciar lo que describe como una amenaza directa a la soberanía y la seguridad del país. Las milicias de defensa territorial han sido puestas en estado de alerta.</p>
<p>Analistas de seguridad regional señalan que el despliegue no supone en sí mismo una amenaza de acción militar, pero sí incrementa la presión psicológica sobre el liderazgo cubano en un momento de crisis económica interna severa.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'EE. UU. sanciona a 12 personas del cártel de Sinaloa por lavar dinero con criptomonedas',
    summary: 'El Departamento del Tesoro identifica a los sancionados como parte de las redes de producción y distribución de fentanilo del cártel, que habría usado activos digitales para mover fondos ilícitos.',
    content: `<p>El <strong>Departamento del Tesoro de Estados Unidos</strong> ha impuesto sanciones a <strong>12 personas</strong> y dos empresas presuntamente vinculadas al <strong>cártel de Sinaloa</strong> por el delito de lavado de dinero mediante el uso de <strong>criptomonedas</strong> y por su participación activa en las redes de producción y distribución de <strong>fentanilo</strong> con destino al mercado estadounidense.</p>
<p>La investigación identificó que los individuos sancionados utilizaban exchanges de criptomonedas con escasos controles de verificación de identidad para mover fondos procedentes del narcotráfico, convirtiendo las ganancias ilícitas en activos digitales que después se transferían a través de múltiples carteras antes de ser reconvertidos en moneda fiduciaria en terceros países.</p>
<p>Las sanciones implican la congelación de todos los activos que los designados puedan tener bajo jurisdicción estadounidense y la prohibición de que ciudadanos y empresas de EE. UU. realicen transacciones con ellos. El Tesoro también ha coordinado las sanciones con la <strong>DEA</strong> y el <strong>FBI</strong>, que tienen abiertas investigaciones paralelas contra varios de los designados.</p>
<p>La acción se enmarca en la política de la administración Trump de designar a los principales cárteles mexicanos como organizaciones terroristas y ampliar las herramientas de presión económica contra sus estructuras financieras.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Bolivia expulsa a la embajadora de Colombia tras las declaraciones de Petro sobre la crisis boliviana',
    summary: 'El gobierno boliviano considera que la oferta de mediación del presidente colombiano constituye una injerencia en asuntos internos. Colombia respondió expulsando al encargado de negocios boliviano.',
    content: `<p><strong>Bolivia</strong> ha expulsado a la embajadora de <strong>Colombia</strong> en La Paz tras unas declaraciones del presidente colombiano <strong>Gustavo Petro</strong> en redes sociales en las que ofreció la mediación de su gobierno en la crisis política boliviana, agravada por las protestas de los seguidores del expresidente Evo Morales. El gobierno boliviano calificó las palabras de Petro como una <strong>injerencia inaceptable en asuntos internos</strong>.</p>
<p>Colombia respondió de forma simétrica declarando <em>persona non grata</em> al encargado de negocios boliviano en Bogotá y expulsándolo del país. La crisis diplomática bilateral se ha escalado rápidamente en cuestión de horas, rompiendo unas relaciones que hasta ahora se consideraban sólidas en el marco del eje latinoamericano de izquierdas al que pertenecen los gobiernos de Petro y del presidente boliviano Luis Arce.</p>
<p>Petro defendió sus declaraciones argumentando que la mediación entre facciones del mismo movimiento político no constituye injerencia sino solidaridad entre pueblos hermanos. El gobierno de Arce rechazó esta interpretación y señaló que ningún actor externo fue invitado a participar en la gestión del conflicto interno.</p>
<p>Bolivia atraviesa una grave crisis política derivada de la pugna entre el sector afín a Evo Morales y el gobierno de Arce, dentro del mismo partido Movimiento al Socialismo (MAS), con protestas y bloqueos que se prolongan desde hace semanas.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La UE y México firman un acuerdo global modernizado en la primera cumbre bilateral en más de una década',
    summary: 'Ursula von der Leyen y António Costa viajaron a Ciudad de México para reunirse con Claudia Sheinbaum. El acuerdo moderniza el tratado de 2000 e incluye capítulos de comercio, inversión y derechos humanos.',
    content: `<p>La presidenta de la Comisión Europea, <strong>Ursula von der Leyen</strong>, y el presidente del Consejo Europeo, <strong>António Costa</strong>, han viajado a Ciudad de México para celebrar la <strong>primera cumbre bilateral entre la Unión Europea y México en más de una década</strong>. El encuentro con la presidenta mexicana <strong>Claudia Sheinbaum</strong> culminó con la firma del <strong>acuerdo global modernizado</strong> entre ambas partes, que actualiza el tratado original suscrito en el año 2000.</p>
<p>El nuevo acuerdo incluye capítulos actualizados en materia de <strong>comercio</strong>, inversión, cooperación técnica, derechos humanos, cambio climático y economía digital. La UE y México son socios comerciales de primer nivel: México es el principal destino de las exportaciones de la Unión en América Latina, y la UE es la segunda fuente de inversión extranjera directa en el país.</p>
<p>La modernización del acuerdo llega en un contexto geopolítico relevante: las tensiones comerciales entre México y Estados Unidos, derivadas de las políticas arancelarias de la administración Trump, han impulsado a México a diversificar sus relaciones económicas internacionales, y la UE ha aprovechado esta ventana de oportunidad para reforzar sus lazos con Ciudad de México.</p>
<p>El acuerdo deberá ser ratificado por el Parlamento Europeo y los parlamentos de los estados miembros antes de su entrada en vigor completa, un proceso que habitualmente lleva varios años.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── GUERRAS Y CONFLICTOS ─────────────────────────────────────
  {
    title: 'Tensión entre Trump y Netanyahu por la estrategia frente a Irán: diplomacia versus ataques militares',
    summary: 'Trump apuesta por una vía diplomática mientras Netanyahu defiende mantener la presión militar. Un presentador israelí reveló en antena planes de ataque a Teherán, generando una fuerte reacción política.',
    content: `<p>El presidente de Estados Unidos, <strong>Donald Trump</strong>, y el primer ministro israelí, <strong>Benjamin Netanyahu</strong>, han mantenido una conversación tensa sobre cómo proceder en la estrategia frente a <strong>Irán</strong>. Según fuentes conocedoras del diálogo, Trump apuesta por explorar una vía diplomática que conduzca a un nuevo acuerdo nuclear, mientras que Netanyahu defiende mantener la presión militar sobre infraestructuras iraníes, advirtiendo de que cualquier pausa en los ataques daría tiempo a Teherán para rearmarse y recuperar capacidades.</p>
<p>La divergencia estratégica se vio agravada por un incidente de comunicación sin precedentes en Israel: un <strong>presentador de televisión israelí</strong> reveló en directo durante su programa lo que describió como planes confidenciales de ataque contra <strong>Teherán</strong>, citando supuestas fuentes dentro del aparato de seguridad. La revelación generó una reacción política intensa en Israel, con miembros del gabinete de seguridad pidiendo una investigación inmediata sobre la filtración y su origen.</p>
<p>El incidente reforzó las preocupaciones dentro del gobierno de Netanyahu sobre la cohesión del aparato de inteligencia y la posible existencia de filtraciones deliberadas destinadas a influir en el debate interno sobre la estrategia militar.</p>
<p>Estados Unidos e Israel no han emitido ningún comunicado conjunto sobre la conversación entre Trump y Netanyahu.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Activistas de la flotilla humanitaria denuncian agresiones y abusos durante su detención por Israel',
    summary: 'Los primeros liberados reportan fracturas en brazos, piernas y costillas, humillaciones y posibles abusos sexuales. España pide que sus ciudadanos sean trasladados a Turquía. Israel confirma la deportación de todos los extranjeros.',
    content: `<p>Los primeros activistas liberados de la <strong>Gaza Freedom Flotilla</strong>, interceptada por Israel en aguas internacionales días atrás, han denunciado ante los medios de comunicación haber sufrido durante su detención <strong>agresiones físicas, humillaciones</strong> y, en algunos casos, <strong>posibles abusos sexuales</strong>. Al menos tres personas fueron hospitalizadas a su llegada a sus países de origen, y decenas presentaban <strong>fracturas en brazos, piernas y costillas</strong>.</p>
<p>El ministro de Exteriores de Israel ha confirmado que todos los activistas extranjeros detenidos están siendo <strong>deportados</strong> a sus países de origen. El gobierno español ha solicitado formalmente que sus ciudadanos —unos 45— sean trasladados a <strong>Turquía</strong>, donde organizaciones de apoyo pueden prestarles asistencia inmediata antes de su regreso a España.</p>
<p>Las denuncias de abuso han generado una nueva ronda de reacciones diplomáticas internacionales. Varios países europeos han convocado a sus embajadores israelíes para reclamar explicaciones, y organizaciones de derechos humanos han pedido la apertura de una investigación internacional independiente sobre las condiciones de detención.</p>
<p>Israel niega las acusaciones de abuso sistemático y atribuye las lesiones reportadas a la resistencia opuesta por parte de algunos activistas durante la operación de interceptación. Las imágenes y testimonios de los liberados siguen circulando en medios y redes sociales, manteniendo el caso en primer plano informativo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Rusia y Bielorrusia inician ejercicios militares con misiles de capacidad nuclear durante tres días',
    summary: 'Putin señala que la tríada nuclear ruso-bielorrusa debe garantizar el equilibrio estratégico global. Los ejercicios incluyen el despliegue y posible lanzamiento de misiles balísticos y de crucero.',
    content: `<p><strong>Rusia</strong> y <strong>Bielorrusia</strong> han iniciado maniobras militares conjuntas de tres días que incluyen el despliegue y la realización de lanzamientos de prueba de <strong>misiles balísticos y de crucero con capacidad para portar armamento nuclear</strong>. Los ejercicios, denominados bajo el paraguas del acuerdo de defensa mutua que integra a Bielorrusia en el sistema de seguridad colectiva ruso, suponen la mayor demostración de fuerza nuclear conjunta entre ambos países desde el inicio de la guerra en Ucrania.</p>
<p>El presidente ruso <strong>Vladimir Putin</strong> declaró en el acto de inicio de los ejercicios que la tríada nuclear ruso-bielorrusa —misiles terrestres, submarinos y aéreos— debe garantizar "la soberanía nacional y el equilibrio estratégico global" ante lo que describió como la creciente presión militar de la OTAN sobre las fronteras del espacio postsoviético.</p>
<p>La OTAN ha calificado los ejercicios de "provocación deliberada" y ha activado sus protocolos de vigilancia aérea y marítima en el flanco oriental de la Alianza. Los países bálticos y Polonia han convocado consultas de emergencia con sus aliados.</p>
<p>Los analistas de seguridad señalan que los ejercicios nucleares rusos han aumentado notablemente en frecuencia y visibilidad desde 2022, y los interpretan como un mensaje político dirigido tanto a Occidente como a sus propias poblaciones sobre la capacidad disuasoria rusa.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Ucrania ataca con drones una refinería rusa a 800 kilómetros de la frontera',
    summary: 'Zelenski confirma el ataque a la refinería de Syzran que habría causado dos muertos. Varias refinerías del centro de Rusia han reducido o detenido su producción por los continuos ataques con drones ucranianos.',
    content: `<p>El presidente ucraniano <strong>Volodimir Zelenski</strong> ha confirmado que Ucrania ha llevado a cabo un ataque con drones contra la <strong>refinería de Syzran</strong>, situada en la región rusa del Volga a unos <strong>800 kilómetros</strong> de la frontera entre ambos países. El ataque habría causado <strong>dos muertos</strong> y varios heridos, según las autoridades regionales rusas, y provocado un incendio en las instalaciones que tardó varias horas en ser controlado.</p>
<p>La distancia del objetivo respecto a la frontera ucraniana supone uno de los ataques con drones más profundos en territorio ruso desde el inicio de la guerra. La refinería de Syzran tiene una capacidad de procesamiento de varios millones de toneladas de crudo al año y forma parte de la red de suministro de combustible para las fuerzas armadas rusas en el frente sur.</p>
<p>Los ataques continuos de Ucrania contra infraestructuras energéticas y de refinamiento en el interior de Rusia han obligado a <strong>varias refinerías del centro del país</strong> a reducir significativamente su producción o detenerla temporalmente para realizar reparaciones, lo que está generando tensiones en el abastecimiento interno de combustible y afectando a la logística militar rusa.</p>
<p>Rusia ha respondido con nuevos ataques de misiles y drones contra infraestructuras energéticas en el oeste de Ucrania.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Lituania activa una alerta por posible actividad de drones cerca de la frontera con Bielorrusia',
    summary: 'Se ordenó a la población refugiarse, se cerró el espacio aéreo sobre el aeropuerto de Vilna y el presidente fue trasladado a un refugio. La alerta se levantó sin incidentes confirmados.',
    content: `<p>Las autoridades de <strong>Lituania</strong> activaron una alerta de seguridad de máximo nivel ante una posible actividad de drones detectada en la zona próxima a la <strong>frontera con Bielorrusia</strong>. En cumplimiento de los protocolos de emergencia, se ordenó a la población de las zonas afectadas <strong>refugiarse</strong> en el interior de edificios, se procedió al <strong>cierre del espacio aéreo</strong> sobre el aeropuerto internacional de Vilna y tanto el <strong>presidente</strong> de la república como la <strong>primera ministra</strong> fueron trasladados de forma preventiva a <strong>refugios seguros</strong>.</p>
<p>El incidente mantuvo en vilo a la población y a las autoridades lituanas durante varias horas, en un contexto de máxima sensibilidad ante cualquier posible incursión de drones desde territorio bielorruso, dada la estrecha alianza militar entre Bielorrusia y Rusia y los precedentes de incidentes similares en otros países del flanco oriental de la OTAN.</p>
<p>Finalmente, la alerta fue <strong>levantada sin que se confirmaran incidentes</strong> ni la presencia de drones de origen hostil. Las autoridades lituanas no han precisado si el objeto detectado resultó ser un dron civil extraviado, un fenómeno atmosférico o un falso positivo de los sistemas de detección.</p>
<p>El episodio ha puesto de manifiesto la extrema tensión que viven los países del Báltico ante cualquier señal de actividad aérea no identificada en sus fronteras orientales.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── ESPAÑA ───────────────────────────────────────────────────
  {
    title: 'La Audiencia Nacional bloquea cuentas de Zapatero y sus hijas e interviene criptomonedas del entramado',
    summary: 'La UDEF intentó registrar la sede de Inteligencia Prospectiva SL pero la encontró en obras y sin personal. La empresa habría pagado 561.000 euros a la agencia de marketing de las hijas de Zapatero.',
    content: `<p>La <strong>Audiencia Nacional</strong> ha ordenado el bloqueo parcial de las cuentas bancarias del expresidente del gobierno <strong>José Luis Rodríguez Zapatero</strong> y de sus hijas <strong>Alba</strong> y <strong>Laura</strong>, como parte de la investigación por el caso Plus Ultra. Paralelamente, ha autorizado a la <strong>Unidad de Delincuencia Económica y Fiscal (UDEF)</strong> de la Policía Nacional a intervenir fondos en criptomonedas asociados a los investigados.</p>
<p>La UDEF intentó realizar un registro en la sede de <strong>Inteligencia Prospectiva SL</strong>, una de las empresas identificadas como nudo central del entramado investigado, pero encontró las instalaciones <strong>en obras y sin personal</strong>, lo que impidió la diligencia. Según la investigación judicial, esta empresa habría realizado pagos de <strong>561.000 euros</strong> a la agencia de marketing gestionada por las hijas de Zapatero, y transferencias de importes elevados a otras empresas vinculadas a la trama.</p>
<p>Un elemento adicional que el juez ha valorado en su resolución son las declaraciones del empresario <strong>Víctor de Aldama</strong>, quien ha afirmado que Zapatero utilizaba <strong>teléfonos desechables</strong> para evitar ser rastreado en sus comunicaciones con los investigados.</p>
<p>El exjefe del ejecutivo no ha realizado declaraciones públicas sobre las medidas cautelares adoptadas por el tribunal, aunque su defensa ha calificado las resoluciones de desproporcionadas y anunciado su recurso.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El alquiler consume hasta el 46% de la renta disponible en las grandes ciudades españolas',
    summary: 'Barcelona lidera el esfuerzo con el 46%, seguida de Madrid con el 40%, Palma con el 37% y Valencia con el 36%. La hipoteca resulta entre un 16% y un 45% más barata, pero la falta de ahorros para la entrada impide el acceso a la compra.',
    content: `<p>El acceso a la vivienda en alquiler en España ha alcanzado niveles de esfuerzo económico sin precedentes en las grandes ciudades: en <strong>Barcelona</strong>, el alquiler medio consume el <strong>46%</strong> de la renta disponible del hogar; en <strong>Madrid</strong>, el <strong>40%</strong>; en <strong>Palma de Mallorca</strong>, el <strong>37%</strong>, y en <strong>Valencia</strong>, el <strong>36%</strong>. Los datos proceden de un informe publicado por el Banco de España a partir de los microdatos del registro de contratos de arrendamiento.</p>
<p>El informe señala que la <strong>cuota hipotecaria</strong> resultaría entre un <strong>16% y un 45% más baja</strong> que el alquiler en las mismas ciudades, lo que en teoría haría más ventajosa la compra. Sin embargo, la barrera de acceso real no es la cuota mensual sino la <strong>ausencia de ahorro suficiente</strong> para la entrada inicial, que en España oscila entre el 20% y el 30% del precio del inmueble —cantidad que la mayoría de los hogares de renta media no puede acumular en un plazo razonable dados los salarios actuales.</p>
<p>El problema afecta especialmente a los jóvenes y a los hogares monoparentales, que destinan en algunos casos más del 50% de su salario neto mensual al pago del alquiler. Los economistas advierten de que el umbral del 30% de esfuerzo se considera el límite a partir del cual el alquiler compromete el equilibrio financiero del hogar.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Red Eléctrica solicita 607 millones adicionales para estabilizar la red ante el boom de la energía solar',
    summary: 'La concentración territorial de la fotovoltaica está generando problemas de estabilidad, oscilaciones de tensión y riesgo de apagones en la red peninsular española.',
    content: `<p><strong>Red Eléctrica de España (REE)</strong> ha presentado ante la Comisión Nacional de los Mercados y la Competencia (CNMC) una solicitud de <strong>607 millones de euros adicionales</strong> para reforzar y ampliar la red de transporte eléctrico. La inversión es considerada imprescindible para garantizar la estabilidad del sistema ante el crecimiento acelerado de la <strong>energía solar fotovoltaica</strong> en el mix energético español.</p>
<p>El problema técnico que REE busca resolver es la <strong>concentración territorial</strong> de las instalaciones fotovoltaicas, mayoritariamente ubicadas en Extremadura, Castilla-La Mancha y Andalucía, regiones con alta irradiación solar pero menor demanda local de electricidad. Esta concentración genera <strong>oscilaciones de tensión</strong>, problemas de estabilidad de frecuencia y un riesgo real de saturación en determinadas líneas de transporte en horas de máxima generación solar.</p>
<p>La red de transporte eléctrico español fue diseñada en su mayor parte cuando el mix energético era predominantemente térmico y nuclear, con generación distribuida en puntos próximos a los centros de consumo. La transición hacia energías renovables de generación variable e implantadas en zonas alejadas requiere una actualización profunda de la infraestructura.</p>
<p>La CNMC deberá pronunciarse sobre la solicitud en los próximos meses. REE ha advertido que sin la inversión aprobada, el ritmo de conexión de nuevas instalaciones fotovoltaicas podría verse obligado a reducirse para no comprometer la seguridad del sistema.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El Gobierno Vasco concede el tercer grado a dos exmiembros de ETA condenados por atentados',
    summary: 'Juan Antonio Olarra Guridi, condenado a más de 2.000 años, y Xavier Zeballos, condenado a 200 años por el atentado de Salou en 2001, acceden al régimen abierto. Las víctimas del terrorismo denuncian la concesión como fraudulenta.',
    content: `<p>El <strong>Gobierno Vasco</strong> ha concedido el tercer grado penitenciario —régimen abierto con pernocta en el domicilio— a dos exmiembros de la organización terrorista <strong>ETA</strong>. El primero es <strong>Juan Antonio Olarra Guridi</strong>, exjefe militar de ETA condenado a más de <strong>2.000 años de prisión</strong> por su responsabilidad en múltiples atentados y asesinatos. El segundo es <strong>Xavier Zeballos Beitia</strong>, condenado a <strong>200 años</strong> por colocar un coche bomba en un hotel de <strong>Salou</strong> en 2001.</p>
<p>El <strong>Colectivo de Víctimas del Terrorismo</strong> ha denunciado enérgicamente las concesiones, calificándolas de "fraudulentas" al no ir acompañadas de lo que consideran condiciones indispensables: un arrepentimiento real, público y verificable, la colaboración con la justicia para esclarecer atentados sin resolver y la renuncia expresa a cualquier justificación de la violencia pasada. La asociación ha pedido la dimisión de la consejera vasca de Justicia.</p>
<p>El Gobierno Vasco ha defendido las concesiones dentro del marco legal penitenciario vigente, señalando que los internos cumplen los requisitos objetivos establecidos por la normativa para acceder al tercer grado.</p>
<p>El debate sobre la política penitenciaria aplicada a los presos de ETA sigue siendo uno de los temas de mayor sensibilidad política en el País Vasco y en el conjunto de España.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El juez archiva la denuncia de Begoña Gómez contra el comunicador Vito Quiles por agresión',
    summary: 'El magistrado concluye que las grabaciones aportadas no acreditan ningún zarandeo ni contacto físico no consentido. Es el segundo archivo judicial relacionado con Begoña Gómez en pocas semanas.',
    content: `<p>El juez instructor ha archivado la denuncia presentada por <strong>Begoña Gómez</strong>, esposa del presidente del gobierno Pedro Sánchez, contra el comunicador <strong>Vito Quiles</strong> por un presunto delito de agresión. En su auto, el magistrado concluye que las <strong>grabaciones de vídeo</strong> aportadas como prueba por la denunciante no acreditan la existencia de ningún zarandeo, empujón o contacto físico no consentido entre ambas partes en el momento del supuesto incidente.</p>
<p>Quiles, periodista y creador de contenido crítico con el gobierno, había negado desde el primer momento haber agredido a Gómez, describiendo el encuentro como una aproximación fortuita en un espacio público. Su defensa había solicitado el archivo alegando la ausencia de pruebas suficientes para sostener los cargos.</p>
<p>El archivo de esta denuncia se produce en un contexto judicial complejo para Begoña Gómez, que tiene abierta una causa penal propia por presuntos delitos de tráfico de influencias y corrupción en los negocios, actualmente en fase de instrucción en el Juzgado Central de Instrucción número 1 de la Audiencia Nacional.</p>
<p>La decisión puede ser recurrida en apelación por la acusación, aunque los plazos procesales hacen improbable una reversión rápida del archivo.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: '120 directores de centros públicos valencianos dimiten en apoyo a la huelga docente indefinida',
    summary: 'Al menos 120 directores y 260 miembros de equipos directivos presentan su dimisión en bloque tras diez días de huelga. Exigen que la Generalitat retome las negociaciones con los sindicatos y piden la dimisión de la consejera de Educación.',
    content: `<p>Al menos <strong>120 directores</strong> de centros educativos públicos de la <strong>Comunitat Valenciana</strong> han presentado su dimisión en bloque, junto con unos <strong>260 miembros de equipos directivos</strong>, como muestra de solidaridad con la <strong>huelga indefinida del profesorado</strong> que cumple su décimo día consecutivo. La dimisión masiva constituye un paso sin precedentes en el sistema educativo público valenciano y pone en una situación de excepcional presión a la Conselleria d'Educació.</p>
<p>Los directores dimisionarios exigen que la <strong>Generalitat valenciana</strong> retome las negociaciones con los sindicatos docentes, rotas el miércoles tras el fracaso de la última ronda de diálogo, y reclaman la <strong>dimisión de la consejera de Educación</strong> por lo que consideran una gestión irresponsable del conflicto. Los sindicatos reclaman principalmente mejoras retributivas, la reducción de las ratios alumno-docente y más plazas de orientación educativa.</p>
<p>La dimisión de los directores no tiene efecto inmediato sobre la gestión de los centros: los equipos directivos dimisionarios deben continuar en sus funciones hasta que la administración designe sustitutos o resuelva el conflicto que ha motivado la renuncia.</p>
<p>La consejería no se ha pronunciado sobre las dimisiones y ha reiterado su disposición a "retomar el diálogo en el marco de la legalidad", lo que los sindicatos interpretan como el mantenimiento de condiciones previas que rechazan.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El Tribunal Supremo anula el registro estatal de pisos turísticos',
    summary: 'El alto tribunal considera que el Estado carece de competencias para imponer un registro nacional superpuesto a los registros autonómicos y municipales. Como consecuencia, 84.000 solicitudes rechazadas podrán retomarse.',
    content: `<p>El <strong>Tribunal Supremo</strong> ha anulado el registro estatal de pisos turísticos creado por el gobierno central, al considerar que el <strong>Estado carece de competencias</strong> para imponer un sistema de registro nacional que se superpone a los registros ya establecidos por las comunidades autónomas y los ayuntamientos, que son las administraciones competentes en materia de ordenación del territorio y turismo.</p>
<p>La resolución tiene consecuencias prácticas inmediatas: unas <strong>84.000 solicitudes</strong> de alta en plataformas como Airbnb y Booking que habían sido rechazadas al amparo del registro estatal podrán ser retomadas por sus solicitantes, lo que podría traducirse en un incremento de hasta el <strong>21%</strong> en la oferta de alquiler turístico a corto plazo en el mercado español.</p>
<p>Los ayuntamientos de las ciudades con mayor presión turística —Madrid, Barcelona, Palma, San Sebastián— han mostrado su preocupación ante la sentencia, ya que sus propias ordenanzas restrictivas podrían verse desbordadas por el incremento de la oferta que facilita la nulidad del registro estatal. Los alcaldes afectados han anunciado que estudiarán la sentencia para determinar qué margen de actuación municipal conservan.</p>
<p>El sector hotelero ha criticado el fallo por considerar que profundiza la competencia desleal de los alojamientos turísticos en viviendas, mientras que las plataformas digitales de alquiler vacacional lo han celebrado como una victoria del libre mercado.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El escritor nicaragüense Sergio Ramírez entra en la RAE para ocupar la silla de Vargas Llosa',
    summary: 'El Premio Cervantes 2017 fue elegido por el pleno de la Real Academia Española para ocupar la silla L, vacante desde la muerte de Mario Vargas Llosa en abril de 2025. Deberá leer su discurso de ingreso para tomar posesión.',
    content: `<p>El pleno de la <strong>Real Academia Española (RAE)</strong> ha elegido al escritor nicaragüense <strong>Sergio Ramírez</strong>, Premio Cervantes 2017, para ocupar la silla <strong>L</strong>, vacante desde el fallecimiento en abril de 2025 del novelista peruano <strong>Mario Vargas Llosa</strong>. Ramírez, autor de más de setenta libros entre novelas, cuentos y ensayos, deberá pronunciar su <strong>discurso de ingreso</strong> ante el pleno de la Academia para tomar posesión formal del sillón.</p>
<p>La elección de Ramírez es la primera vez en décadas que un escritor nicaragüense entra a formar parte de la RAE, y llega en un momento de especial significado biográfico: el autor lleva años en el exilio tras ser despojado de su nacionalidad por el régimen de Daniel Ortega en 2021, acusado de conspiración y traición a la patria. Desde España, donde reside, ha continuado su actividad literaria y su activismo en defensa de las libertades civiles en Nicaragua.</p>
<p>Ramírez es conocido internacionalmente por obras como <em>Margarita, está linda la mar</em>, ganadora del Premio Alfaguara, y <em>Castigo Divino</em>, considerada una de las mejores novelas latinoamericanas del siglo XX. Su ingreso en la RAE es recibido como un reconocimiento a la literatura centroamericana y al compromiso cívico del escritor.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Sánchez asistirá a la misa del Papa León XIV en la Sagrada Familia el 10 de junio',
    summary: 'La visita papal a Madrid del 6 al 9 de junio obligará a desplegar el mayor dispositivo de seguridad de la historia de la ciudad. El Ayuntamiento recomienda el teletrabajo entre el 3 y el 9 de junio.',
    content: `<p>El presidente del gobierno <strong>Pedro Sánchez</strong> asistirá a la misa que el <strong>Papa León XIV</strong> celebrará en la <strong>Basílica de la Sagrada Familia</strong> de Barcelona el próximo <strong>10 de junio</strong>, en un gesto inusual para un dirigente que habitualmente no participa en actos de naturaleza religiosa. La confirmación de su asistencia ha sido comunicada por Moncloa a través de los canales habituales de agenda institucional.</p>
<p>La visita del Pontífice a España tendrá su epicentro en <strong>Madrid</strong>, donde permanecerá del <strong>6 al 9 de junio</strong> para presidir varios actos multitudinarios. El despliegue de seguridad previsto para la visita papal ha sido calificado por las fuerzas de seguridad del Estado como el mayor operativo de protección desplegado en Madrid en su historia reciente, superando incluso al de anteriores visitas pontificias y a los grandes eventos deportivos internacionales.</p>
<p>El <strong>Ayuntamiento de Madrid</strong> ha recomendado a las empresas con sede en la capital que fomenten el <strong>teletrabajo</strong> entre el 3 y el 9 de junio para reducir la presión sobre la red de transporte público y las vías de acceso afectadas por los cortes de tráfico previstos. Se esperan restricciones de circulación en el centro de la ciudad y en los accesos a los recintos donde se celebrarán los actos principales.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Mediaset obliga a Antena 3 a suprimir el rosco de Pasapalabra en su formato actual',
    summary: 'Mediaset es propietaria de los derechos del rosco, creado por una productora neerlandesa. Antena 3 deberá rediseñar la prueba final del concurso para poder continuar emitiéndolo.',
    content: `<p><strong>Mediaset España</strong> ha prohibido a <strong>Antena 3</strong> continuar emitiendo el <strong>rosco</strong> de <em>Pasapalabra</em> en su formato actual, al ser propietaria de los derechos de la prueba final del concurso, que fue creada originalmente por una productora neerlandesa. La decisión obliga a la cadena de Atresmedia a rediseñar o sustituir esta prueba icónica del programa si quiere mantener el concurso en antena.</p>
<p>El rosco —la ronda final en la que un concursante debe dar definiciones que empiecen o contengan una letra determinada para completar un círculo de respuestas— es el elemento más reconocible y seguido de <em>Pasapalabra</em>, cuya audiencia se concentra especialmente en los minutos de esta prueba. La batalla legal por los derechos del formato viene de años atrás y fue el motivo por el que el concurso fue retirado de Telecinco (cadena de Mediaset) y relanzado en Antena 3 en 2020.</p>
<p>Antena 3 no se ha pronunciado oficialmente sobre los plazos ni sobre el diseño alternativo que podría sustituir al rosco. Fuentes del sector apuntan a que el programa podría incorporar una prueba de concepto similar pero suficientemente diferenciada para no vulnerar los derechos en disputa.</p>
<p><em>Pasapalabra</em> es actualmente uno de los concursos con mayor audiencia de la televisión española, con cifras que en los días de grand finale superan los cuatro millones de espectadores.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Una niña de dos años muere en A Coruña tras ser olvidada por su padre en el interior del coche',
    summary: 'El padre olvidó a la pequeña al recibir una llamada de trabajo que alteró su rutina habitual. La madre descubrió lo sucedido al ir a recoger a la niña por la tarde. El padre fue detenido.',
    content: `<p>Una niña de <strong>dos años y medio</strong> ha fallecido en el municipio de <strong>Brión</strong>, en la provincia de A Coruña, después de que su padre la olvidara en el interior de su vehículo durante varias horas mientras trabajaba. La tragedia, que ha conmocionado a la localidad y generado una amplia repercusión mediática, se enmarca en los llamados "síndromes del bebé olvidado", que con relativa frecuencia producen muertes por golpe de calor en vehículos cerrados.</p>
<p>Según la reconstrucción de los hechos realizada por la Guardia Civil, el padre había llevado esa mañana al hijo mayor al colegio. Cuando iba a continuar hasta la guardería para dejar a la pequeña, recibió una llamada de trabajo urgente que alteró su rutina habitual y le desvió directamente al taller, sin recordar que la niña seguía en la silla del automóvil. La madre descubrió lo sucedido al acudir por la tarde a recoger a la pequeña y encontrar que nunca había llegado al centro.</p>
<p>El padre fue detenido como presunto responsable de un delito de homicidio imprudente. Los investigadores analizarán los datos del teléfono y la llamada de trabajo para reconstruir con exactitud la cronología del día.</p>
<p>El suceso ha reabierto el debate sobre los sistemas de alerta en vehículos que detecten la presencia de menores cuando el motor se apaga, tecnología que algunos fabricantes ya incorporan de serie pero que no es universal en el parque automovilístico español.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Gibraltar sale de la lista española de paraísos fiscales después de 35 años',
    summary: 'España considera que el territorio cumple los criterios de transparencia y equidad tributaria tras un acuerdo con el Reino Unido. Rusia, en cambio, entra en la lista negra fiscal.',
    content: `<p>España ha retirado a <strong>Gibraltar</strong> de su lista oficial de <strong>paraísos fiscales</strong> después de <strong>35 años</strong> incluido en ella, al considerar que el territorio británico de ultramar cumple actualmente con los criterios internacionales de transparencia fiscal y equidad tributaria. La decisión forma parte de un <strong>acuerdo de armonización tributaria</strong> firmado entre España y el <strong>Reino Unido</strong>, que también contempla medidas de intercambio automático de información sobre residentes fiscales y titulares de cuentas bancarias en Gibraltar.</p>
<p>La retirada de Gibraltar de la lista negra tiene implicaciones prácticas para las empresas y los particulares que operen o tengan activos en el Peñón: las transacciones con entidades gibraltareñas dejarán de estar sometidas a retenciones especiales y a los requerimientos de justificación adicional que el fisco español exige en las operaciones con territorios de la lista.</p>
<p>Junto a Gibraltar, también salen de la lista <strong>Barbados, Dominica, Samoa, Seychelles y Trinidad y Tobago</strong>, que han suscrito acuerdos de intercambio de información con España. En sentido contrario, <strong>Rusia</strong> entra en la lista como nueva incorporación, en el marco de las medidas de presión económica coordinadas por los países occidentales.</p>
<p>La Agencia Tributaria ha señalado que el criterio para incluir o excluir territorios de la lista es exclusivamente técnico y no político.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El 85,5% de los jóvenes españoles de 16 a 29 años no se independiza, mínimo histórico',
    summary: 'El alquiler medio equivaldría al 98,7% del salario de un joven, haciendo inviable la independencia. La edad media de emancipación en España se sitúa en los 30,2 años, la más alta de la UE junto a Italia.',
    content: `<p>España registra el nivel más bajo de emancipación juvenil desde que existen estadísticas comparables: el <strong>85,5%</strong> de los jóvenes de entre <strong>16 y 29 años</strong> sigue viviendo en el hogar familiar, según el informe anual del Observatorio de Emancipación del Consejo de la Juventud de España. El dato supone un nuevo récord negativo en la tendencia de pérdida progresiva de capacidad de independencia económica de las nuevas generaciones españolas.</p>
<p>La causa principal es la insostenible relación entre salarios jóvenes y precios del alquiler: el alquiler medio en España representaría actualmente el <strong>98,7%</strong> del salario bruto mensual de un joven trabajador, dejando prácticamente sin margen para otros gastos básicos. Incluso para los jóvenes con trabajo, la independencia económica resulta financieramente inviable sin ingresos adicionales o compartición del gasto con parejas o compañeros de piso.</p>
<p>La <strong>edad media de emancipación</strong> en España se sitúa en <strong>30,2 años</strong>, la más elevada de la Unión Europea junto a Italia, y muy por encima de la media comunitaria de 26,4 años. En países como Suecia, Finlandia o Dinamarca, la emancipación se produce habitualmente antes de los 22 años.</p>
<p>Los expertos señalan que el retraso en la emancipación tiene efectos en cadena sobre la natalidad, el mercado laboral y el sistema de pensiones, y reclaman políticas de vivienda asequible y de incremento salarial coordinadas a nivel nacional y europeo.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Enrique Riquelme hace oficial su candidatura a la presidencia del Real Madrid',
    summary: 'El empresario alicantino confirma mediante comunicado su intención de presentarse. Si formaliza su candidatura, la junta electoral deberá convocar votaciones ya que con una sola candidatura no hay elecciones.',
    content: `<p>El empresario alicantino <strong>Enrique Riquelme</strong> ha hecho oficial su candidatura a la presidencia del <strong>Real Madrid</strong> mediante un comunicado público, confirmando así su intención de competir contra <strong>Florentino Pérez</strong> en las elecciones presidenciales del club blanco. Si Riquelme logra formalizar su candidatura cumpliendo todos los requisitos estatutarios antes de que venza el plazo, la <strong>junta electoral</strong> del club estará obligada a convocar votaciones entre los socios.</p>
<p>En caso de que sea el único candidato alternativo, la elección dependería del número de socios que participen y de que el umbral mínimo de participación establecido en los estatutos sea superado. Con una única candidatura de Florentino Pérez, la normativa del club permite la reelección sin proceso electoral si ningún candidato más formaliza su postulación.</p>
<p>Riquelme, fundador de empresas en los sectores inmobiliario y energético, aún tiene pendiente la presentación del aval bancario equivalente al 15% del presupuesto anual del club —que supera los 120 millones de euros—, condición indispensable para que su candidatura sea admitida a trámite. Fuentes de su entorno señalan que el proceso está avanzado.</p>
<p>La candidatura de Riquelme ha generado interés en los medios especializados, aunque los analistas consideran que su posibilidad de éxito frente a Florentino Pérez en una votación abierta es reducida dado el historial electoral del actual presidente.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'La Asociación de Árbitros denuncia a Florentino Pérez y al Real Madrid por desacreditar al colectivo',
    summary: 'Los árbitros presentan dos denuncias ante la Comisión contra la Violencia en el Deporte por unas declaraciones del presidente blanco en las que acusó al estamento arbitral de corrupción sistemática.',
    content: `<p>La <strong>Asociación Española de Árbitros de Fútbol</strong> ha presentado <strong>dos denuncias</strong> ante la <strong>Comisión Estatal contra la Violencia, el Racismo, la Xenofobia y la Intolerancia en el Deporte</strong> contra el presidente del <strong>Real Madrid</strong>, <strong>Florentino Pérez</strong>, y contra el propio club, por unas declaraciones públicas del máximo dirigente blanco en las que acusó al estamento arbitral de <strong>corrupción sistemática</strong> y de haber privado al Real Madrid de títulos a través de decisiones arbitrales deliberadamente adversas.</p>
<p>El colectivo arbitral sostiene que este tipo de declaraciones, emitidas desde la posición de máxima influencia que ocupa el presidente del club más poderoso del fútbol mundial, pueden generar <strong>hostilidad, intimidación y violencia</strong> contra los árbitros en partidos de todos los niveles, desde la élite profesional hasta el fútbol base y aficionado.</p>
<p>La Asociación de Árbitros ha señalado que las acusaciones de corrupción sistemática son falsas y lesivas para la imagen profesional del colectivo, y ha reclamado que Florentino Pérez las retire públicamente y ofrezca disculpas.</p>
<p>El Real Madrid no se ha pronunciado oficialmente sobre las denuncias. La Comisión Estatal deberá admitirlas a trámite y estudiar si las declaraciones en cuestión superan el umbral que establece la normativa para considerarlas conductas sancionables.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Dani Carvajal organiza una cena de despedida del Real Madrid sin invitar al entrenador',
    summary: 'El lateral derecho, que no renovará su contrato, reunió a jugadores, cuerpo técnico y trabajadores del club, pero la ausencia del técnico confirma la mala relación entre ambos durante la temporada.',
    content: `<p><strong>Dani Carvajal</strong>, lateral derecho del <strong>Real Madrid</strong> cuyo contrato no ha sido renovado al término de la presente temporada, organizó una cena de despedida con jugadores de la plantilla, miembros del cuerpo técnico y trabajadores del club. Sin embargo, la reunión se celebró sin la presencia del primer entrenador del equipo, cuya ausencia en el acto ha confirmado lo que fuentes del vestuario describían desde hace semanas: una <strong>relación deteriorada</strong> entre el capitán saliente y el técnico durante los últimos meses.</p>
<p>Carvajal, formado en la cantera del Real Madrid y pilar del lateral derecho durante más de una década, ha disputado esta temporada con irregularidades como consecuencia de las lesiones que le apartaron del campo durante una larga temporada. La decisión del club de no renovar su contrato fue comunicada de manera oficial hace varias semanas.</p>
<p>La despedida de Carvajal ha generado una amplia respuesta emocional entre los seguidores del club, que recuerdan su contribución a múltiples títulos de Liga y Champions League. El jugador no ha realizado declaraciones sobre su futuro profesional, aunque fuentes del sector apuntan a posibles ofertas de clubes de la Saudi Pro League y de la MLS.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'La UPN denuncia la nueva camiseta del Athletic Club por incluir Navarra en el mapa de Euskal Herria',
    summary: 'La Unión del Pueblo Navarro ha solicitado formalmente que se impida al Athletic usar la equipación hasta que se resuelva el conflicto judicial sobre la representación cartográfica del territorio navarro.',
    content: `<p>La <strong>Unión del Pueblo Navarro (UPN)</strong> ha presentado una denuncia formal solicitando que se impida al <strong>Athletic Club de Bilbao</strong> utilizar su nueva camiseta, en la que aparece impreso un mapa de <strong>Euskal Herria</strong> que incluye el territorio de la <strong>Comunidad Foral de Navarra</strong>. UPN considera que la inclusión de Navarra en dicho mapa es una representación política inaceptable que vulnera la identidad institucional y la integridad territorial de la Comunidad Foral.</p>
<p>El conflicto sobre la representación cartográfica de Navarra en el contexto del País Vasco tiene una larga historia política y jurídica en España, vinculada al debate sobre la integración o no de Navarra en una eventual entidad vasca más amplia. La denominación "Euskal Herria", que en euskera designa el conjunto de territorios de cultura vasca a ambos lados de los Pirineos, es habitualmente reivindicada por el nacionalismo vasco pero rechazada por las principales fuerzas políticas navarras como representación del territorio foral.</p>
<p>El Athletic Club no se ha pronunciado sobre la denuncia de UPN. El conflicto está pendiente de resolución judicial y podría derivar en una medida cautelar que obligue al club bilbaíno a retirar la equipación si el tribunal estima que la representación del mapa constituye una infracción de la normativa aplicable.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Sorteados los cuadros de Roland Garros 2026, que arranca el domingo con duración hasta el 7 de junio',
    summary: 'El torneo Grand Slam sobre tierra batida de París comenzará el próximo domingo con los cuadros masculino y femenino ya establecidos. La final masculina se disputará el 7 de junio.',
    content: `<p>Los cuadros masculino y femenino de <strong>Roland Garros 2026</strong> han sido sorteados este viernes en las instalaciones de la Federación Francesa de Tenis en París. El torneo, segundo Grand Slam de la temporada y el más prestigioso del circuito de tierra batida, arrancará el <strong>próximo domingo</strong> y se extenderá hasta el <strong>7 de junio</strong>, fecha prevista para la final del cuadro masculino.</p>
<p>El sorteo ha determinado los emparejamientos de primera ronda y los posibles cruces entre las principales cabezas de serie en los cuartos de final y semifinales. Los detalles del cuadro serán analizados en detalle por los equipos técnicos de los favoritos para trazar sus estrategias de juego a lo largo de las dos semanas de competición.</p>
<p>Roland Garros es uno de los torneos que más exige físicamente a los tenistas por las características de la pista de arcilla, que ralentiza la pelota y alarga los puntos, premiando la resistencia física y la capacidad táctica por encima de la potencia pura. La preparación sobre tierra batida en las semanas previas ha sido un factor determinante en el estado de forma de los principales candidatos.</p>
<p>Las entradas para las sesiones de las rondas finales están agotadas desde hace semanas, aunque quedan disponibilidades para las primeras rondas en pistas secundarias.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Récord histórico en el Everest: 274 escaladores alcanzan la cima en un solo día',
    summary: 'China no ha concedido permisos para la cara norte este año, concentrando toda la actividad en la vertiente sur nepalesa. El anterior récord era de 234 cumbristas en un solo día.',
    content: `<p>Un total de <strong>274 escaladores</strong> alcanzaron la cima del <strong>Monte Everest</strong> desde el lado sur en un único día, estableciendo un nuevo <strong>récord histórico</strong> de ascensiones simultáneas. El hito supera el anterior máximo registrado de 234 cumbristas en un solo día y pone de manifiesto la saturación creciente de la montaña más alta del mundo durante las ventanas meteorológicas favorables de la temporada de primavera.</p>
<p>El detonante parcial del récord es la decisión de <strong>China</strong> de <strong>no conceder permisos de escalada por la cara norte</strong> tibetana en la presente temporada, lo que ha concentrado toda la actividad alpina mundial en la vertiente sur, gestionada por <strong>Nepal</strong>. Cientos de alpinistas que en otros años habrían optado por la ruta norte han tenido que recurrir al lado nepalés, multiplicando la presión sobre las vías de ascenso.</p>
<p>El problema de la masificación en el Everest viene siendo señalado por la comunidad alpinista desde hace años: las largas colas en los tramos de alta cota —especialmente en el paso Hillary y cerca de la cima— aumentan el riesgo de hipotermia y agotamiento, y han contribuido a varias muertes en temporadas recientes. Nepal factura varios millones de dólares anuales en permisos de escalada y se resiste a limitar el número de expediciones autorizadas.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Muere atropellada Emily Mae Smith, capitana del equipo de baloncesto universitario, a los 20 años',
    summary: 'La jugadora de la Universidad Estatal de Nueva York fue arrollada por un conductor que se dio a la fuga en Potsdam. El autor del atropello, de 18 años, fue detenido y está en libertad condicional.',
    content: `<p><strong>Emily Mae Smith</strong>, capitana del equipo femenino de baloncesto de la <strong>Universidad Estatal de Nueva York</strong> en Potsdam, ha fallecido a los <strong>20 años</strong> tras ser atropellada por un vehículo cuyos ocupantes se dieron a la fuga tras el impacto. El atropello se produjo en una calle de <strong>Potsdam</strong>, Nueva York, y la joven deportista fue trasladada al hospital donde falleció poco después por la gravedad de las heridas.</p>
<p>El conductor del vehículo, un joven de <strong>18 años</strong>, fue identificado y detenido por la policía local en las horas siguientes al suceso. El detenido ha sido puesto en <strong>libertad condicional</strong> a la espera del inicio del proceso judicial, que se espera incluya cargos de homicidio vehicular y fuga del lugar del accidente.</p>
<p>Emily Mae Smith había sido elegida capitana del equipo universitario al comienzo de la temporada y era descrita por sus entrenadores y compañeras como una jugadora de liderazgo excepcional y una estudiante de sobresaliente rendimiento académico. Su muerte ha generado una respuesta de duelo masiva en la comunidad universitaria de Potsdam y entre los aficionados al baloncesto femenino universitario de Nueva York.</p>
<p>La universidad ha anunciado que retirará el dorsal de Smith en un acto conmemorativo previsto para el próximo mes.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Fallece Kyle Busch, dos veces campeón de la NASCAR Cup, a los 41 años tras perder el conocimiento en un simulador',
    summary: 'El piloto perdió el conocimiento mientras hacía pruebas en un simulador de Chevrolet en Carolina del Norte y murió posteriormente en el hospital. No se ha revelado la causa exacta del fallecimiento.',
    content: `<p>El mundo del automovilismo estadounidense está de luto tras el fallecimiento de <strong>Kyle Busch</strong>, dos veces campeón de la <strong>NASCAR Cup Series</strong> (2015 y 2019) y uno de los pilotos más ganadores de la historia de la principal competición de stock cars de Estados Unidos. Busch tenía <strong>41 años</strong> y se encontraba en plena actividad competitiva cuando perdió el conocimiento mientras realizaba pruebas en un <strong>simulador</strong> de Chevrolet en sus instalaciones en <strong>Carolina del Norte</strong>. Fue trasladado de urgencia a un hospital donde falleció horas después.</p>
<p>Las causas exactas del fallecimiento no han sido reveladas por su familia ni por el equipo para el que competía, aunque fuentes médicas apuntan a un posible episodio cardíaco súbito. Kyle Busch no había manifestado problemas de salud conocidos y se encontraba en plena preparación para la segunda mitad de la temporada NASCAR 2026.</p>
<p>Kyle Busch acumuló a lo largo de su carrera más de 220 victorias en la NASCAR Cup Series, siendo el segundo piloto con más triunfos de la historia de la competición. Era conocido tanto por su agresividad al volante como por su carácter polarizador, que le granjeó tanto admiradores incondicionales como detractores en la afición.</p>
<p>El paddock de la NASCAR ha guardado un minuto de silencio en los entrenamientos celebrados este viernes.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Gran Premio de Canadá de Fórmula 1 este domingo: la carrera comienza a las 22:00 horas españolas',
    summary: 'El Circuito Gilles Villeneuve de Montreal acoge la octava prueba del campeonato del mundo. La carrera se disputará el domingo a las 22:00 horas peninsulares con una duración aproximada de hora y media.',
    content: `<p>Este fin de semana se celebra en el <strong>Circuito Gilles Villeneuve</strong> de Montreal el <strong>Gran Premio de Canadá de Fórmula 1</strong>, octava prueba del campeonato del mundo 2026. La carrera tendrá lugar el <strong>domingo</strong> a las <strong>22:00 horas</strong> (hora peninsular española), con una duración aproximada de hora y media.</p>
<p>El trazado de Montreal, ubicado en la Isla de Notre-Dame en medio del río San Lorenzo, es uno de los más peculiares del calendario por su combinación de largas rectas, chicanes lentas y muros muy próximos a la pista que hacen especialmente peligrosos los errores de pilotaje. El famoso <em>Muro de los Campeones</em>, en la última curva antes de la recta de meta, ha protagonizado incidentes memorables a lo largo de la historia del campeonato.</p>
<p>La carrera canadiense suele departar resultados inesperados por las características del trazado, que favorece a los coches más fuertes en frenada y aceleración y penaliza el sobreviraje en las chicanes. La meteorología en Montreal durante el mes de mayo puede ser variable, con posibilidad de lluvia que añadiría un factor de incertidumbre adicional a la estrategia de los equipos.</p>
<p>Los aficionados españoles podrán seguir la carrera en directo a través de las plataformas de retransmisión habituales.</p>`,
    image_url: null, category_id: CAT.dep,
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
        [a.title, slug, a.summary || null, a.content,
         a.image_url || null, a.category_id,
         'Redacción NetonNews', 0, DATE]
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
