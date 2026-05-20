require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-05-19 10:00:00'

const articles = [
  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'Bizum habilita el pago en comercios físicos a través del datáfono',
    summary: 'El servicio de pagos móvil amplía sus funcionalidades y permitirá operar como tarjeta de crédito virtual en terminales físicos, con despliegue progresivo según cada entidad bancaria.',
    content: `<p>Bizum ha dado un paso decisivo en su evolución al habilitar el pago en comercios físicos a través del datáfono, funcionando como una tarjeta de crédito virtual. La función se irá desplegando progresivamente según la disponibilidad de cada entidad bancaria en sus terminales de punto de venta.</p>
<p>La novedad supone que los usuarios podrán utilizar Bizum en cualquier establecimiento equipado con datáfono compatible, sin necesidad de llevar encima tarjeta física o efectivo. El pago se realiza desde el teléfono móvil de forma inmediata.</p>
<p>Además, la compañía prepara el lanzamiento de <strong>Bizum Pay</strong>, su propia aplicación de pagos independiente que operará de forma similar a una cartera digital. Con esta herramienta, Bizum busca competir directamente con Apple Pay y Google Pay en el mercado de los pagos móviles en España.</p>
<p>El servicio, que ya cuenta con más de 28 millones de usuarios en España, se consolida así como uno de los principales instrumentos de pago digital del país.</p>`,
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Un tribunal desestima la demanda de Elon Musk contra Sam Altman por prescripción',
    summary: 'El caso en el que el empresario reclamaba 130.000 millones de dólares al CEO de OpenAI ha sido archivado por estar prescrito, sin entrar en el fondo del asunto.',
    content: `<p>Un tribunal estadounidense ha desestimado la demanda que Elon Musk interpuso contra Sam Altman, CEO de OpenAI, en la que reclamaba 130.000 millones de dólares. La denuncia fue archivada por haber prescrito el plazo legal para presentarla, cerrando el litigio sin que se resolviera el fondo del asunto.</p>
<p>Musk, cofundador original de OpenAI, argumentaba que la organización había traicionado su misión original de desarrollar inteligencia artificial en beneficio de la humanidad al transformarse en una entidad con ánimo de lucro. La demanda incluía acusaciones de incumplimiento de contrato y fraude.</p>
<p>La resolución no supone un pronunciamiento sobre el fondo de las acusaciones, sino únicamente sobre el plazo en que fueron presentadas. El conflicto entre ambos empresarios refleja las profundas tensiones dentro del sector tecnológico sobre el rumbo de la inteligencia artificial.</p>
<p>Musk, que fundó su propia empresa de IA denominada xAI, ha mantenido una posición crítica frente a OpenAI desde que abandonó su consejo de administración en 2018.</p>`,
    image_url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Corea del Sur limita judicialmente la huelga de 50.000 empleados de Samsung',
    summary: 'El tribunal exige mantener los niveles normales de seguridad en las instalaciones y prohíbe cualquier degradación deliberada de materiales o equipos durante el paro previsto para el jueves.',
    content: `<p>Ante la inminente huelga de aproximadamente 50.000 trabajadores de Samsung Electronics prevista para el jueves, el Tribunal de Corea del Sur ha intervenido con una resolución que impone condiciones a su desarrollo.</p>
<p>La resolución judicial no prohíbe la huelga, pero exige que se mantengan los niveles normales de seguridad en todas las instalaciones del gigante tecnológico. Asimismo, prohíbe expresamente cualquier degradación deliberada de materiales, equipos o maquinaria durante el periodo de paro laboral.</p>
<p>Los trabajadores, representados principalmente por el sindicato Nacional de Empleados de Samsung, llevan meses negociando mejoras salariales y condiciones laborales con la dirección. La empresa, el mayor fabricante de semiconductores del mundo, ha visto interrumpida su producción en varias ocasiones por conflictos laborales en los últimos años.</p>
<p>La intervención judicial refleja la sensibilidad del sector ante posibles interrupciones en la cadena de suministro global de chips, en un momento en que la demanda de semiconductores sigue siendo elevada.</p>`,
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'WhatsApp prueba mensajes que desaparecen automáticamente tras ser leídos',
    summary: 'La nueva función "After Reading", en fase beta para iOS, permite que un mensaje se autodestruya 5 minutos, 1 hora o 12 horas después de abrirse, o tras 24 horas sin leer.',
    content: `<p>WhatsApp está probando en la versión beta de iOS una nueva función denominada <em>After Reading</em> que permite que un mensaje desaparezca automáticamente después de haber sido leído, en lugar de hacerlo transcurrido un tiempo fijo desde su envío.</p>
<p>Según la configuración elegida por el remitente, el mensaje desaparecerá 5 minutos, 1 hora o 12 horas después de ser abierto por el destinatario. Si el mensaje no se lee en un plazo de 24 horas, también se eliminará de forma automática.</p>
<p>La función se diferencia del modo de mensajes temporales ya existente en la aplicación, que hace desaparecer los mensajes pasado un tiempo desde su envío independientemente de si han sido leídos. <em>After Reading</em> vincula el borrado al momento de apertura, añadiendo una capa de privacidad adicional.</p>
<p>WhatsApp no ha confirmado una fecha oficial para el lanzamiento de la función en la versión estable de la aplicación, aunque su aparición en la beta sugiere que su llegada es inminente.</p>`,
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Investigadores desarrollan un robot oruga para explorar los terrenos más difíciles de Marte',
    summary: 'El sistema flexible se adapta a terrenos inaccesibles para los rovers convencionales mediante movimientos de contracción y extensión, abriendo nuevas posibilidades para la exploración marciana.',
    content: `<p>Un equipo de investigadores ha presentado un prototipo de robot con forma de oruga flexible diseñado específicamente para explorar terrenos inaccesibles en Marte, aquellos que los rovers de ruedas convencionales como Curiosity o Perseverance no pueden alcanzar.</p>
<p>El sistema se desplaza mediante movimientos peristálticos de contracción y extensión, similares a los de los invertebrados biológicos. Esta característica le permite adaptarse a superficies irregulares, grietas, pendientes pronunciadas y terrenos blandos donde las ruedas pierden tracción.</p>
<p>Los investigadores destacan que el robot podría complementar a los rovers tradicionales en misiones futuras, alcanzando zonas de especial interés científico como cuevas de lava, laderas de cráteres o lechos de antiguos ríos. Estas áreas son especialmente relevantes en la búsqueda de trazas de vida pasada o agua líquida.</p>
<p>El prototipo se encuentra actualmente en fase de pruebas en entornos simulados que reproducen las condiciones del suelo marciano.</p>`,
    image_url: 'https://images.unsplash.com/photo-1614726365952-510103b1bdb8?w=1200&q=80',
    category_id: CAT.cien,
  },
  {
    title: 'Las gafas de realidad aumentada Xreal R1 ya se pueden reservar en España por 849 euros',
    summary: 'Con paneles micro LED Full HD a 240 Hz y 91 gramos de peso, las Xreal R1 simulan una pantalla virtual de 171 pulgadas y se enviarán a partir de mediados de julio.',
    content: `<p>Las gafas de realidad aumentada Xreal R1 ya están disponibles para reserva en España a un precio de 849 euros, con envíos previstos para mediados de julio. El dispositivo destaca por sus especificaciones técnicas de alto nivel dentro del segmento de la realidad aumentada.</p>
<p>Las Xreal R1 incorporan <strong>paneles micro LED Full HD (1920×1080 píxeles por ojo) a 240 Hz</strong>, ofreciendo una imagen fluida y de alta definición. Con un peso de tan solo 91 gramos, resultan significativamente más ligeras que otros dispositivos de realidad mixta del mercado.</p>
<p>La experiencia visual simulada equivale a una pantalla de <strong>171 pulgadas vista desde una distancia de 4 metros</strong>, según el fabricante. Las gafas se conectan a smartphones, ordenadores y consolas compatibles, funcionando como monitor virtual portátil.</p>
<p>Xreal, fabricante chino especializado en realidad aumentada, compite en este segmento con dispositivos como las Meta Ray-Ban y las Apple Vision Pro, aunque a un precio considerablemente menor que estas últimas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Sony sube el precio de PlayStation Plus Essential para nuevos suscriptores esta semana',
    summary: 'La compañía japonesa aplicará el aumento a partir del miércoles sin especificar las regiones afectadas, en un movimiento que sigue la tendencia alcista en los servicios de suscripción de videojuegos.',
    content: `<p>Sony Interactive Entertainment ha anunciado una subida de precio del servicio PlayStation Plus Essential para los nuevos suscriptores a partir de este miércoles. La compañía no ha detallado en qué regiones específicas se aplicará el incremento, aunque se espera que afecte a los principales mercados.</p>
<p>PlayStation Plus Essential es el nivel básico del servicio de suscripción de Sony, que incluye acceso a juegos en línea multijugador, descuentos en la PlayStation Store y dos juegos mensuales descargables de forma gratuita.</p>
<p>La medida sigue la tendencia del sector, donde empresas como Microsoft (Xbox Game Pass) y Nintendo (Nintendo Switch Online) han incrementado sus tarifas en los últimos años. Los suscriptores actuales mantendrán por el momento su tarifa vigente.</p>
<p>Sony no ha comunicado el nuevo precio exacto ni si el cambio se extenderá también a los niveles superiores Extra y Premium del servicio en esta misma actualización.</p>`,
    image_url: 'https://images.unsplash.com/photo-1605901309584-818e25660a0f?w=1200&q=80',
    category_id: CAT.tec,
  },

  // ─── CINE Y TELEVISIÓN ────────────────────────────────────────
  {
    title: 'El director de "Tren a Busan" presenta su nueva película de zombis en Cannes',
    summary: 'Yeon Sang-ho regresa al género que le dio fama mundial con "Colony", un filme cuya trama arranca por un magnate tecnológico con delirios de grandeza que recuerda a figuras reales del sector.',
    content: `<p>El director surcoreano Yeon Sang-ho, conocido internacionalmente por <em>Tren a Busan</em> (2016), ha presentado en el Festival de Cannes su nueva película de género zombi titulada <strong>Colony</strong>. La cinta supone su regreso al subgénero que le catapultó a la fama mundial.</p>
<p>La trama de <em>Colony</em> arranca a causa de un personaje inspirado en un magnate tecnológico movido por delirios de grandeza, en una clara referencia a las figuras más controvertidas del sector tecnológico contemporáneo. El protagonista desencadena inadvertidamente una crisis de proporciones globales.</p>
<p>Yeon Sang-ho ha declarado que la película explora los peligros de concentrar demasiado poder en manos de individuos sin control democrático, usando el género de terror como vehículo para la crítica social, una característica habitual en su filmografía.</p>
<p>La película ha generado gran expectación entre los asistentes al certamen francés, donde competirá por la Palma de Oro. Su distribución internacional está pendiente de cierre definitivo.</p>`,
    image_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Fallece a los 96 años Ann Robinson, actriz de "La guerra de los mundos" de 1953',
    summary: 'La actriz protagonizó la icónica adaptación cinematográfica del clásico de H.G. Wells. Su muerte, ocurrida el pasado 26 de septiembre, acaba de hacerse pública.',
    content: `<p>La actriz estadounidense Ann Robinson ha fallecido a los 96 años de edad. Su muerte tuvo lugar el pasado 26 de septiembre, aunque la noticia acaba de hacerse pública. Robinson era conocida principalmente por protagonizar la clásica adaptación cinematográfica de <em>La guerra de los mundos</em> (1953), basada en la novela de H.G. Wells.</p>
<p>En la película, dirigida por Byron Haskin, Robinson interpretó a Sylvia Van Buren, la científica que se convertía en el interés romántico del protagonista mientras la Tierra era invadida por marcianos. La cinta ganó el Óscar a los mejores efectos visuales y se convirtió en un hito de la ciencia ficción cinematográfica.</p>
<p>Robinson repitió su papel en la serie de televisión del mismo nombre emitida en los años 80, y tuvo un cameo en el remake de Steven Spielberg de 2005 protagonizado por Tom Cruise. Su lealtad al personaje que la hizo famosa la convirtió en un icono para los aficionados al género.</p>
<p>La industria cinematográfica ha rendido homenaje a una de las grandes damas de la ciencia ficción clásica de Hollywood.</p>`,
    image_url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Demon Slayer tendrá espectáculo teatral en Japón con el reparto original de doblaje',
    summary: 'La versión en vivo del anime se centrará en el arco del entrenamiento de los Pilares Hashira. El estreno está previsto para el 27 de mayo, sin fecha internacional confirmada.',
    content: `<p>Se ha anunciado una versión teatral en vivo de <em>Demon Slayer: Kimetsu no Yaiba</em> que se estrenará en Japón el próximo 27 de mayo. El espectáculo se centrará en el arco del entrenamiento de los Pilares Hashira, uno de los más populares entre los seguidores de la franquicia.</p>
<p>Una de las particularidades más llamativas del proyecto es que los propios actores de doblaje de la serie animada interpretarán a sus personajes en directo sobre el escenario, algo inusual en el teatro japonés y que ha generado gran expectación entre los fans.</p>
<p>La producción contará con efectos especiales, coreografías de combate y diseños de vestuario inspirados fielmente en el manga original de Koyoharu Gotouge. El espectáculo se representará en Tokyo durante varias semanas antes de posibles giras por otras ciudades japonesas.</p>
<p>De momento no hay fecha de lanzamiento internacional confirmada, aunque los productores han manifestado interés en llevar el espectáculo a otros países en función de la acogida que tenga en Japón.</p>`,
    image_url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Los creadores de Stranger Things estrenan nueva serie en Netflix el 21 de mayo',
    summary: 'El nuevo proyecto de los hermanos Duffer sigue a una comunidad de ancianos en una residencia de Nuevo México donde el protagonista descubre una criatura extraterrestre en el sótano.',
    content: `<p>Matt y Ross Duffer, los hermanos creadores de <em>Stranger Things</em>, estrenan el próximo 21 de mayo en Netflix su nuevo proyecto televisivo. La serie supone una ruptura temática y tonal respecto a su trabajo más conocido.</p>
<p>La nueva producción sigue a una comunidad de ancianos en una residencia ubicada en el desierto de Nuevo México. La historia da un giro cuando el protagonista descubre que los responsables del centro ocultan en el sótano una criatura de origen extraterrestre, desencadenando una serie de eventos que pondrán en peligro a todos los residentes.</p>
<p>Los hermanos Duffer han descrito la serie como una mezcla de comedia dramática y ciencia ficción, con un tono diferente al terror adolescente de <em>Stranger Things</em>. El reparto incluye actores veteranos de gran trayectoria, aunque Netflix no ha confirmado los nombres de forma oficial.</p>
<p>La producción llega en un momento en que el dúo trabaja simultáneamente en la última temporada de <em>Stranger Things</em>, confirmando la capacidad creativa del equipo para gestionar múltiples proyectos.</p>`,
    image_url: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Localizan en Cartagena el cañón original usado en el rodaje de "El bueno, el feo y el malo"',
    summary: 'El arma de 1873, que participó en la Tercera Guerra Carlista, se encuentra en el Museo Histórico Militar de Cartagena. La asociación Sad Hill gestiona un préstamo para una recreación en Burgos.',
    content: `<p>Un cañón de 1873 utilizado durante el rodaje de la película de Sergio Leone <em>El bueno, el feo y el malo</em> (1966) ha sido localizado en el Museo Histórico Militar de Cartagena. El hallazgo ha sido posible gracias a las investigaciones de la asociación Sad Hill de Burgos, que lleva años documentando los escenarios y la historia de la producción.</p>
<p>El arma tiene una doble historia notable: además de aparecer en la obra maestra del spaghetti western protagonizada por Clint Eastwood, Lee Van Cleef y Eli Wallach, el cañón participó activamente en la Tercera Guerra Carlista española (1872-1876), lo que lo convierte en una pieza de enorme valor histórico.</p>
<p>La asociación Sad Hill, conocida por su labor de recuperación del cementerio burgalés donde se rodó la icónica escena final del triángulo, está gestionando actualmente un préstamo temporal del cañón para incluirlo en una recreación relacionada con los escenarios burgaleses de la película.</p>
<p>El hallazgo reaviva el interés por el legado cinematográfico y patrimonial que Leone dejó en España, donde rodó buena parte de su célebre trilogía del dólar.</p>`,
    image_url: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Tres participantes de "Married at First Sight UK" denuncian violación y agresión sexual a la BBC',
    summary: 'Dos de las denunciantes afirman haber sido violadas por sus parejas asignadas en el programa. Channel 4 ha retirado todos los episodios de sus plataformas mientras se investigan los hechos.',
    content: `<p>Tres mujeres que participaron en el programa de telerrealidad británico <em>Married at First Sight UK</em>, emitido por Channel 4, han presentado denuncias formales ante la BBC relacionadas con su experiencia en el programa. Dos de ellas afirman haber sido violadas por las parejas que les fueron asignadas por los expertos del espacio televisivo, mientras que una tercera denuncia conducta sexual no consentida.</p>
<p>Ante la gravedad de las acusaciones, Channel 4 ha tomado la decisión de retirar preventivamente todos los episodios del programa de sus plataformas de streaming y reproducción a la carta mientras se investigan las denuncias.</p>
<p>Las organizaciones en defensa de las víctimas de violencia sexual han criticado el formato del programa, señalando que la presión mediática y la dinámica televisiva pueden crear situaciones de vulnerabilidad para los participantes. También han pedido que las cadenas de televisión refuercen los protocolos de protección.</p>
<p>Este caso se suma a un debate más amplio en el sector audiovisual británico sobre la responsabilidad de las productoras y cadenas respecto al bienestar de quienes participan en programas de telerrealidad.</p>`,
    image_url: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=80',
    category_id: CAT.int,
  },

  // ─── ECONOMÍA ─────────────────────────────────────────────────
  {
    title: 'Los mercados abren en rojo con el S&P 500 en 7.364 y el bitcoin cediendo hasta los 76.000 dólares',
    summary: 'Las bolsas internacionales registran caídas generalizadas. El petróleo sube hasta los 112 dólares por barril en medio de la tensión geopolítica en Oriente Medio.',
    content: `<p>Los mercados financieros internacionales han abierto la jornada con caídas generalizadas. El índice S&P 500 de la bolsa estadounidense retrocede hasta los <strong>7.364 puntos</strong>, mientras que el bitcoin cede posiciones y cotiza en torno a los <strong>76.000 dólares</strong>, lejos de sus máximos recientes.</p>
<p>El oro y la plata también registran ligeras pérdidas, en una jornada de aversión al riesgo que empuja a los inversores hacia activos más conservadores. En contraposición, el <strong>petróleo sube hasta los 112 dólares por barril</strong>, impulsado por las crecientes tensiones geopolíticas en Oriente Medio y las amenazas sobre el tráfico marítimo en el estrecho de Ormuz.</p>
<p>En el mercado de divisas, el <strong>euro se mantiene en 1,16 frente al dólar</strong>, reflejando cierta estabilidad en la eurozona. Por su parte, el <strong>Ibex 35 español cierra ligeramente en verde</strong>, siendo una de las pocas excepciones positivas en una jornada marcada por las ventas.</p>
<p>Los analistas señalan la incertidumbre geopolítica y los temores a una posible escalada en Oriente Medio como los principales factores que presionan a la baja los activos de riesgo.</p>`,
    image_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    category_id: CAT.eco,
  },

  // ─── VIDEOJUEGOS ──────────────────────────────────────────────
  {
    title: 'GTA 6 confirmado para el 19 de noviembre tras descartar su director cualquier retraso',
    summary: 'El CEO de Take-Two Interactive garantiza el lanzamiento en la fecha prevista y anuncia un modelo de contenido continuo similar a Roblox, incluyendo creaciones de jugadores de pago.',
    content: `<p>El CEO de Take-Two Interactive, Strauss Zelnick, ha confirmado de manera definitiva que <strong>Grand Theft Auto VI saldrá a la venta el 19 de noviembre</strong> de este año, descartando los rumores que apuntaban a un posible retraso hasta 2027 que habían circulado en las últimas semanas.</p>
<p>Además del anuncio de la fecha, la compañía ha revelado detalles sobre el modelo de negocio del juego tras su lanzamiento. GTA 6 ofrecerá <strong>contenido nuevo de forma constante</strong>, incluyendo creaciones generadas por jugadores que estarán disponibles de pago, en un modelo similar al que ha hecho de Roblox uno de los juegos más rentables del mundo.</p>
<p>Rockstar Games, desarrollador del título, lleva años trabajando en la secuela de GTA V, uno de los juegos más vendidos de la historia. La expectación en torno al lanzamiento es máxima, con millones de reservas ya realizadas en todo el mundo.</p>
<p>El juego estará disponible inicialmente para PlayStation 5 y Xbox Series X/S, con una versión para PC prevista para fecha posterior.</p>`,
    image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Terraria alcanza 70 millones de copias vendidas en sus 15 años de vida',
    summary: 'El juego de aventura y construcción 2D, disponible en Steam por 9,75 euros, mantiene una media anual de 461.000 jugadores activos, un logro extraordinario para un título independiente.',
    content: `<p>Terraria, el juego de aventura, exploración y construcción en dos dimensiones desarrollado por Re-Logic, ha alcanzado el hito de <strong>70 millones de copias vendidas</strong> en sus quince años de existencia, consolidando su posición como uno de los títulos independientes más exitosos de la historia de los videojuegos.</p>
<p>A pesar de su precio accesible —<strong>9,75 euros en Steam</strong>— el juego ha generado ingresos extraordinarios gracias a su longevidad y a una base de fans enormemente fiel. Su media de <strong>461.000 jugadores activos al año</strong> es especialmente llamativa para un título lanzado en 2011.</p>
<p>El secreto de su éxito reside en la profundidad de su jugabilidad y en el compromiso del equipo de desarrollo, que ha lanzado actualizaciones gratuitas de forma regular durante más de una década. La última gran actualización, Journey's End (2020), añadió cientos de nuevos contenidos sin coste adicional.</p>
<p>Terraria se ha convertido en un ejemplo de referencia sobre cómo los juegos independientes pueden superar en popularidad y longevidad a grandes producciones de estudio.</p>`,
    image_url: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Nintendo abre reservas del remake de Star Fox en exclusiva para Switch 2 a 50 euros en digital',
    summary: 'El clásico de vuelo espacial llegará el 25 de junio a 50 euros en digital y 60 en físico. Los compradores anticipados recibirán pines y un parche de velcro del juego.',
    content: `<p>Nintendo ha abierto las reservas del esperado remake de <em>Star Fox</em>, que llegará en exclusiva para Nintendo Switch 2 el próximo <strong>25 de junio</strong>. El título estará disponible a <strong>50 euros en su versión digital</strong> y a <strong>60 euros en la edición física</strong>.</p>
<p>Como incentivo para quienes realicen la reserva, Nintendo regalará un set de pines y un parche con velcro con temática del juego. Los regalos estarán disponibles en las tiendas físicas participantes y a través de la Nintendo eShop.</p>
<p>El remake actualiza el clásico juego de vuelo espacial lanzado originalmente para Super Nintendo en 1993 y ampliamente conocido por su versión de Nintendo 64, <em>Star Fox 64</em>. La nueva versión promete gráficos modernizados, banda sonora remasterizada y controles adaptados al hardware de Switch 2.</p>
<p>El anuncio ha sido bien recibido por los aficionados, que llevan años pidiendo el regreso de la franquicia, que no recibía una entrada principal desde <em>Star Fox Zero</em> (2016) para Wii U.</p>`,
    image_url: 'https://images.unsplash.com/photo-1600703765498-a1100a1c5b37?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Rainbow Six Siege lanza "Operation System Override" con nuevo sistema de ranked y mapa Casino Calipso',
    summary: 'La nueva temporada introduce la versión 3.0 del matchmaking competitivo con mayor transparencia, un indicador de habilidad real y el rediseño de la operadora Dokkaebi.',
    content: `<p>Ubisoft ha puesto en marcha la nueva temporada de <em>Rainbow Six Siege</em> denominada <strong>Operation System Override</strong>, que trae consigo importantes mejoras al sistema de juego competitivo y nuevos contenidos para la comunidad.</p>
<p>La actualización más destacada es la llegada del sistema de <strong>ranked versión 3.0</strong>, que promete un matchmaking más transparente, un rango visible basado en un indicador real de habilidad del jugador y un sistema de progreso más claro y comprensible para los usuarios. Ubisoft ha reconocido que el sistema anterior generaba confusión y frustración entre los jugadores.</p>
<p>En cuanto a contenidos, la temporada incluye un <strong>nuevo mapa: Casino Calipso</strong>, un escenario de grandes dimensiones ambientado en un complejo de juego de lujo que promete nuevas dinámicas tácticas. Además, se ha rediseñado en profundidad la operadora <strong>Dokkaebi</strong>, ajustando sus habilidades para equilibrar el juego.</p>
<p>Rainbow Six Siege, lanzado en 2015, sigue siendo uno de los shooters tácticos más jugados del mundo gracias a su modelo de actualización continua con nuevas temporadas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1200&q=80',
    category_id: CAT.tec,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Cinco muertos en un tiroteo en la mezquita más grande del condado de San Diego',
    summary: 'Dos de los fallecidos son los propios atacantes, jóvenes de 17 y 19 años que se suicidaron. En la nota del menor se encontraron referencias al orgullo racial.',
    content: `<p>Cinco personas han muerto en un tiroteo ocurrido en el Centro Islámico de San Diego, considerada la mezquita más grande del condado californiano. El trágico suceso ha conmocionado a la comunidad local y ha generado una oleada de condenas en todo el país.</p>
<p>Según las autoridades, dos de los fallecidos son los propios atacantes, dos jóvenes de 17 y 19 años que se suicidaron tras perpetrar el ataque contra los fieles reunidos en el centro religioso. Las otras tres víctimas son feligreses que se encontraban en el lugar en el momento del ataque.</p>
<p>En la nota de suicidio encontrada junto al atacante de menor edad, los investigadores hallaron referencias explícitas al orgullo racial, lo que lleva a las autoridades a investigar el suceso como un posible crimen de odio motivado por el extremismo de ultraderecha.</p>
<p>El FBI ha abierto una investigación paralela para determinar si existe alguna conexión con organizaciones extremistas o si los atacantes actuaron de forma independiente. La comunidad musulmana estadounidense ha pedido protección y medidas urgentes contra los crímenes de odio.</p>`,
    image_url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'La llegada de Peter Magyar al poder en Hungría desbloquea sanciones a Rusia y fondos para Ucrania',
    summary: 'El cambio de gobierno tras la salida de Viktor Orbán facilita en la UE el avance de medidas contra Rusia, sanciones a colonos israelíes y la reactivación de la ayuda económica a Kiev.',
    content: `<p>La llegada de Peter Magyar a la presidencia del gobierno de Hungría, en sustitución del ultraderechista Viktor Orbán, supone un giro político de gran calado en el seno de la Unión Europea. El cambio tiene consecuencias inmediatas y de gran relevancia para la política exterior comunitaria.</p>
<p>Durante años, Orbán utilizó el veto húngaro para bloquear sistemáticamente una serie de medidas en el Consejo Europeo, entre ellas el avance de nuevas sanciones económicas contra Rusia por la guerra en Ucrania y la reactivación de fondos y ayudas para Kiev que necesitaban unanimidad de los estados miembros.</p>
<p>Con Magyar en el poder, se espera que Hungría abandone esa posición obstruccionista, lo que permitirá aprobar también sanciones contra colonos israelíes en Cisjordania, una medida que llevaba meses paralizada. Los diplomáticos europeos han acogido el cambio con alivio.</p>
<p>Magyar, que emergió como figura política de oposición gracias a sus críticas a la corrupción del régimen de Orbán, ha prometido reintegrar a Hungría en el núcleo de la construcción europea y restablecer el estado de derecho en el país.</p>`,
    image_url: 'https://images.unsplash.com/photo-1565026296-8d01b3d68bca?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Hallados los cuerpos de los cuatro buceadores italianos desaparecidos en Maldivas',
    summary: 'Sus cuerpos fueron localizados en el interior de una cueva a 60 metros de profundidad. El grupo tenía permiso para buceo científico pero no para acceder al interior de esa cavidad.',
    content: `<p>Las autoridades de Maldivas e Italia han confirmado el hallazgo de los cuatro buceadores italianos que permanecían desaparecidos desde hace varios días en aguas del archipiélago del océano Índico. Sus cuerpos fueron localizados en el interior de una cueva a <strong>60 metros de profundidad</strong>.</p>
<p>El grupo contaba con permiso oficial para realizar buceo científico profundo en la zona, pero no estaba autorizado para acceder al interior de la cavidad subacuática en la que finalmente se hallaron sus restos. Las condiciones climáticas en el momento del accidente eran adversas, con corrientes fuertes y bandera amarilla de precaución.</p>
<p>La investigación deberá determinar si los buceadores se adentraron voluntariamente en la cueva desconociendo la prohibición, o si fueron arrastrados por las corrientes hasta su interior. La comunidad de buceo científico ha pedido una revisión de los protocolos de seguridad en zonas de alta profundidad.</p>
<p>El trágico suceso es el segundo accidente grave que afecta a ciudadanos europeos en Maldivas en pocas semanas, generando preocupación por las condiciones de seguridad en las actividades náuticas del archipiélago.</p>`,
    image_url: 'https://images.unsplash.com/photo-1583900985737-9fc16eb2a745?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Un turista español de 53 años muere ahogado practicando surf en Maldivas',
    summary: 'Es el tercer incidente grave en el archipiélago en pocas semanas, tras la amputación de una pierna de otro español por un ataque de tiburón el 11 de abril.',
    content: `<p>Un turista español de 53 años ha muerto ahogado mientras practicaba surf en el atolón de Gaafu Dhaalu, en el sur del archipiélago de Maldivas. La policía maldiva ha abierto una investigación para esclarecer las circunstancias exactas del suceso.</p>
<p>El fallecimiento se produce en el contexto de una serie de incidentes graves que han afectado a ciudadanos en el archipiélago en las últimas semanas. El más reciente anterior fue la amputación de una pierna sufrida por otro turista español a consecuencia de un ataque de tiburón el pasado 11 de abril.</p>
<p>La sucesión de accidentes ha generado preocupación entre los operadores turísticos españoles y las autoridades consulares, que han incrementado las advertencias de seguridad para los viajeros que visitan las islas. Maldivas es uno de los principales destinos de los turistas europeos en el océano Índico.</p>
<p>Las autoridades locales han descartado por el momento imponer restricciones adicionales a las actividades acuáticas, pero estudian reforzar los sistemas de vigilancia en las zonas de mayor afluencia de deportistas náuticos.</p>`,
    image_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Un crucero británico atraca en Bilbao con 17 personas aisladas por un brote de norovirus',
    summary: 'El buque Ambition llega al Puerto de Bilbao tras varios días con el brote activo a bordo. Los pasajeros sin síntomas han podido desembarcar tras pasar la inspección de sanidad exterior.',
    content: `<p>El crucero británico <em>Ambition</em> ha atracado en el Puerto de Bilbao tras varios días navegando con un brote activo de norovirus a bordo. Las autoridades sanitarias españolas activaron el protocolo de inspección en el momento del atraque.</p>
<p><strong>17 personas permanecen aisladas</strong> bajo supervisión sanitaria en el interior del buque, pendientes de evolución médica. El resto de pasajeros que no presentaban síntomas han podido desembarcar con normalidad tras someterse a una inspección por parte de sanidad exterior.</p>
<p>El norovirus es altamente contagioso y provoca gastroenteritis aguda con náuseas, vómitos y diarrea. Los brotes a bordo de cruceros son relativamente frecuentes debido a la alta concentración de personas en espacios cerrados y compartidos, y los protocolos de desinfección y aislamiento son estrictos.</p>
<p>Las autoridades portuarias de Bilbao han coordinado con la naviera los procedimientos de desinfección del buque, que no podrá reanudar su ruta hasta que las condiciones sanitarias sean satisfactorias según los estándares de la Organización Mundial de la Salud.</p>`,
    image_url: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El Papa León XIV publicará el 25 de mayo su primera encíclica, centrada en la inteligencia artificial',
    summary: 'El documento, titulado "Magnifica humanitas", aborda la protección de las personas en la era de la IA y constituye el primer gran texto doctrinal del nuevo pontificado.',
    content: `<p>El Papa León XIV publicará el próximo <strong>25 de mayo</strong> su primera encíclica, el tipo de documento doctrinal de mayor rango en la Iglesia Católica. El texto, titulado <em>Magnifica humanitas</em>, aborda la protección de las personas en la era de la inteligencia artificial.</p>
<p>Con este documento, el pontífice se convierte en el primer papa de la historia en dedicar su primera encíclica al impacto de la tecnología en la dignidad humana. El texto analiza los riesgos que la IA supone para la privacidad, el empleo, la autonomía personal y la cohesión social, al tiempo que reconoce el potencial beneficioso de estas tecnologías cuando se usan al servicio del bien común.</p>
<p>El Vaticano viene prestando creciente atención al fenómeno de la inteligencia artificial desde que el Papa Francisco publicara en 2024 el primer documento pontificio dedicado a la ética de la IA, titulado <em>Antiqua et Nova</em>. León XIV profundiza en esa línea con una reflexión de mayor alcance doctrinal.</p>
<p>La publicación coincide con el Día de la Ascensión y se espera que genere debate tanto dentro de la Iglesia como en los foros internacionales de gobernanza de la IA.</p>`,
    image_url: 'https://images.unsplash.com/photo-1603816245639-36de5f5e3e5c?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Una turista muere aplastada por elefantes en un santuario de Karnataka, India',
    summary: 'La mujer de 33 años quedó atrapada en una pelea entre dos elefantes domesticados. India prohíbe ahora tocar o alimentar a los animales y establece distancia de seguridad obligatoria.',
    content: `<p>Una turista de 33 años ha muerto en un santuario de elefantes ubicado en el estado de Karnataka, en el sur de India, tras quedar atrapada entre dos elefantes domesticados que peleaban entre sí y que cayeron sobre ella en el transcurso del enfrentamiento.</p>
<p>El trágico suceso ha llevado a las autoridades indias a anunciar de inmediato nuevas medidas de seguridad para todos los santuarios de elefantes del país. A partir de ahora, se prohibirá expresamente que los visitantes <strong>toquen, alimenten o se aproximen a los animales</strong>. Asimismo, se establecerá una <strong>distancia de seguridad estricta y obligatoria</strong> entre turistas y elefantes en todo momento.</p>
<p>Los santuarios de elefantes son uno de los atractivos turísticos más populares de India y del sudeste asiático, aunque críticos y organizaciones de bienestar animal llevan años denunciando las condiciones en que viven algunos de estos animales y los riesgos que implica el contacto directo con ellos.</p>
<p>Las autoridades de Karnataka han abierto una investigación para determinar las responsabilidades del centro en el suceso.</p>`,
    image_url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Un terremoto de magnitud 5,2 sacude el sur de China y deja dos muertos',
    summary: 'El seísmo ha afectado a la provincia de Wangchi con cuatro personas heridas adicionales. Las autoridades chinas han desplegado equipos de emergencia en la zona.',
    content: `<p>Un terremoto de magnitud 5,2 en la escala de Richter ha sacudido la provincia de Wangchi, en el sur de China, dejando un balance preliminar de <strong>dos personas fallecidas y cuatro heridas</strong>. Las autoridades han desplegado equipos de rescate y emergencia en la zona afectada.</p>
<p>El seísmo se ha producido a escasa profundidad, lo que ha amplificado su impacto superficial y provocado daños materiales en viviendas e infraestructuras de la región. Los servicios de protección civil han establecido refugios temporales para los residentes desplazados.</p>
<p>China es una de las regiones del mundo con mayor actividad sísmica, especialmente en su parte central y occidental. La provincia de Wangchi, aunque menos expuesta que otras zonas del país, registra ocasionalmente terremotos de intensidad moderada.</p>
<p>Las autoridades locales continúan evaluando los daños y no descartan que el balance de víctimas pueda modificarse en las próximas horas conforme avancen las labores de inspección.</p>`,
    image_url: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El juez admite el cuaderno y el arma de Mangione como prueba pero rechaza otros objetos obtenidos ilegalmente',
    summary: 'El acusado del asesinato del CEO de UnitedHealthcare verá admitidos los elementos hallados en su mochila, pero el pasaporte, teléfono, cartera, revista y un chip son inadmisibles por registro ilegal.',
    content: `<p>Un juez federal de Nueva York ha emitido una resolución parcial sobre las pruebas en el caso de Luigi Mangione, el joven acusado de asesinar a Brian Thompson, consejero delegado de la aseguradora UnitedHealthcare, en un suceso que sacudió a la sociedad estadounidense.</p>
<p>El magistrado ha dictaminado que el <strong>cuaderno y el arma encontrados en la mochila de Mangione</strong> en el momento de su detención podrán ser utilizados como prueba por la fiscalía durante el juicio. Estos elementos son considerados claves en el caso.</p>
<p>Sin embargo, otros objetos hallados en el mismo registro —el <strong>pasaporte, el teléfono móvil, la cartera, una revista y un chip informático</strong>— han sido declarados inadmisibles por haber sido obtenidos en el marco de un registro que el juez considera ilegal al carecer de la oportuna orden judicial.</p>
<p>La defensa de Mangione había solicitado la exclusión de todas las pruebas materiales del caso, por lo que la resolución supone una victoria parcial para ambas partes. El juicio por asesinato en primer grado continuará con las pruebas admitidas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'La OMS alerta de un aumento del 50% en el consumo de bolsitas de nicotina entre jóvenes',
    summary: 'La Organización Mundial de la Salud denuncia campañas de marketing dirigidas a menores en redes sociales. La nicotina daña el desarrollo cerebral en menores de 25 años.',
    content: `<p>La Organización Mundial de la Salud (OMS) ha emitido una alerta sobre el <strong>aumento del 50% en el consumo de bolsitas de nicotina entre jóvenes</strong> respecto al año anterior, una tendencia que la organización califica de preocupante y que exige respuesta regulatoria urgente.</p>
<p>La OMS denuncia que las empresas del sector están utilizando estrategias de marketing específicamente dirigidas a menores, principalmente a través de redes sociales, con contenidos atractivos, sabores llamativos y envases de diseño que minimizan la percepción del riesgo.</p>
<p>Desde el punto de vista sanitario, la organización recuerda que la <strong>nicotina es altamente adictiva</strong> y que su consumo perjudica seriamente el desarrollo cerebral en personas menores de 25 años, afectando negativamente a la atención, la memoria y la capacidad de aprendizaje.</p>
<p>La OMS pide a los gobiernos que extiendan a las bolsitas de nicotina las mismas restricciones publicitarias y de venta que ya se aplican al tabaco convencional, y que prohíban expresamente su venta a menores de edad.</p>`,
    image_url: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El USS Gerald Ford regresa tras 326 días desplegado, el mayor en un portaviones desde Vietnam',
    summary: 'El mayor portaviones del mundo vuelve a Virginia tras misiones antidroga en el Caribe, la detención de Maduro y apoyo en el conflicto entre Irán e Israel. Nacieron 78 bebés durante la misión.',
    content: `<p>El portaviones USS Gerald Ford, el más grande del mundo, ha regresado a su base naval en Norfolk, Virginia, tras completar un despliegue de <strong>326 días</strong>, el periodo más largo para un portaviones estadounidense desde la guerra de Vietnam. La tripulación ha sido recibida con una emotiva ceremonia de bienvenida.</p>
<p>Durante los más de diez meses de misión, el buque participó en operaciones antidroga en el Caribe, apoyó las acciones que condujeron a la <strong>detención de Nicolás Maduro</strong> y estuvo presente en la zona de conflicto durante las operaciones relacionadas con la tensión entre <strong>Irán e Israel</strong>.</p>
<p>El dato más humano de la misión es que, durante el despliegue, <strong>nacieron 78 bebés</strong> de familiares de miembros de la tripulación que se quedaron en tierra, un dato que refleja la magnitud del sacrificio personal que implica un despliegue de esta duración.</p>
<p>El USS Gerald Ford es el buque insignia de su clase, con una eslora de 337 metros y capacidad para transportar más de 75 aeronaves de combate. Su regreso marca el fin de una de las misiones navales más largas y complejas de la historia reciente de la Armada estadounidense.</p>`,
    image_url: 'https://images.unsplash.com/photo-1592332939237-a67b73bb7f36?w=1200&q=80',
    category_id: CAT.int,
  },

  // ─── LATINOAMÉRICA ────────────────────────────────────────────
  {
    title: 'Muere la madre del preso político venezolano Víctor Hugo Quero, quien murió bajo custodia del Estado',
    summary: 'Carmen Teresa Navas, de 83 años, dedicó 16 meses a buscar a su hijo en cárceles venezolanas sin obtener información hasta que le comunicaron su muerte.',
    content: `<p>Ha fallecido Carmen Teresa Navas, de 83 años, madre del preso político venezolano Víctor Hugo Quero, quien murió bajo custodia del Estado venezolano tras meses desaparecido en el sistema penitenciario del país.</p>
<p>Carmen Teresa dedicó <strong>16 meses de búsqueda incansable</strong>, recorriendo cárceles y centros de detención en Venezuela sin obtener información sobre el paradero de su hijo. Las autoridades venezolanas se negaron sistemáticamente a proporcionarle datos sobre su situación hasta que finalmente le comunicaron su fallecimiento.</p>
<p>El caso de Víctor Hugo Quero es uno de los miles documentados por organizaciones de derechos humanos como Provea y Foro Penal, que denuncian la práctica de desapariciones forzadas y muertes bajo custodia en las cárceles del gobierno de Nicolás Maduro.</p>
<p>La muerte de Carmen Teresa Navas se produce en un momento de intensa presión internacional sobre el régimen venezolano por su historial de violaciones de derechos humanos, y ha sido denunciada por organizaciones de presos políticos como símbolo del sufrimiento de las familias afectadas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'México bloquea las cuentas de 10 funcionarios de Sinaloa señalados por EE.UU. por vínculos con el narco',
    summary: 'La Unidad de Inteligencia Financiera actúa preventivamente contra el gobernador del estado y un senador, entre otros, acusados por Washington de colaboración con el narcotráfico.',
    content: `<p>La Unidad de Inteligencia Financiera (UIF) de México ha procedido al bloqueo preventivo de las cuentas bancarias de <strong>10 funcionarios del estado de Sinaloa</strong> que han sido señalados por el gobierno de Estados Unidos por presuntos vínculos con el narcotráfico.</p>
<p>Entre los señalados figuran figuras de alto perfil político, incluidos el <strong>gobernador del estado de Sinaloa y un senador</strong> de la República. La medida es de carácter preventivo y no implica condena, pero supone una presión financiera significativa sobre los afectados.</p>
<p>La decisión llega en el contexto de la intensificación de la cooperación entre México y Estados Unidos en materia de seguridad y lucha antinarco, tras la designación por parte de Washington de varios cárteles mexicanos como organizaciones terroristas. Sinaloa es el feudo histórico del cártel homónimo, uno de los más poderosos del mundo.</p>
<p>Los funcionarios afectados han negado las acusaciones y anunciado que emprenderán acciones legales para impugnar el bloqueo de sus activos.</p>`,
    image_url: 'https://images.unsplash.com/photo-1618143538741-5d7a3f3d6e65?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Los maestros de México anuncian huelga indefinida desde el 1 de junio por un aumento salarial del 100%',
    summary: 'Rechazan el incremento del 9% ofrecido por el gobierno y planean intensificar las protestas durante el Mundial de fútbol 2026 para ganar visibilidad internacional.',
    content: `<p>Los maestros de México han anunciado una <strong>huelga nacional indefinida</strong> que comenzará el próximo 1 de junio, después de rechazar el aumento salarial del 9% ofrecido por el gobierno federal, considerándolo claramente insuficiente para cubrir la pérdida de poder adquisitivo acumulada en los últimos años.</p>
<p>Los sindicatos docentes exigen un <strong>aumento del 100% en los salarios</strong>, además de cambios sustanciales en el sistema de jubilación docente, que consideran injusto e insostenible para los maestros que se acercan al final de su carrera profesional.</p>
<p>Los organizadores del movimiento han anunciado que planean <strong>intensificar sus protestas durante el Mundial de fútbol 2026</strong>, que se celebrará parcialmente en México, para aprovechar la atención mediática internacional que generará el torneo y dar mayor visibilidad a sus demandas ante la opinión pública mundial.</p>
<p>México es el país latinoamericano con mayor número de docentes en huelga activa y los conflictos en el sector educativo han marcado la agenda política del gobierno desde la fallida reforma educativa de años anteriores.</p>`,
    image_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Diez muertos, incluida una menor, en un ataque armado en Tehuitzingo, Puebla',
    summary: 'Los agresores irrumpieron en una vivienda y abrieron fuego. La Guardia Civil mexicana busca a los responsables de uno de los ataques más sangrientos del estado en los últimos meses.',
    content: `<p>Diez personas han perdido la vida, entre ellas una menor de edad, tras un ataque armado perpetrado en la localidad de Tehuitzingo, en el estado mexicano de Puebla. El suceso es uno de los más sangrientos registrados en la región en los últimos meses.</p>
<p>Según las primeras informaciones de las autoridades, un grupo de agresores armados irrumpió en una vivienda particular y abrió fuego contra las personas que se encontraban en su interior. Las víctimas no habían podido ser completamente identificadas en el momento en que se conoció la noticia.</p>
<p>La Guardia Nacional y las fuerzas de seguridad del estado de Puebla han iniciado un operativo para localizar e identificar a los responsables del ataque. La zona de Tehuitzingo ha registrado un incremento de la violencia ligada a disputas entre organizaciones criminales por el control del territorio.</p>
<p>Las organizaciones civiles de Puebla han denunciado la situación de inseguridad que vive el estado y han exigido al gobierno federal mayores recursos para la protección de la población civil en las zonas más afectadas por la violencia.</p>`,
    image_url: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Cuba advierte que una acción militar de EE.UU. provocaría una masacre y desestabilización regional',
    summary: 'El gobierno cubano niega ser una amenaza y acusa a Washington de fabricar pretextos para una intervención, en respuesta a informes sobre un refuerzo con drones rusos e iraníes.',
    content: `<p>El gobierno de Cuba ha emitido una severa advertencia al gobierno de Estados Unidos, señalando que cualquier acción militar estadounidense contra la isla provocaría inevitablemente una masacre y generaría una desestabilización de toda la región caribeña.</p>
<p>La declaración llega en respuesta a informes de inteligencia estadounidenses que señalan un posible <strong>refuerzo del arsenal cubano con drones de origen ruso e iraní</strong>, lo que Washington habría interpretado como una amenaza potencial para la seguridad regional.</p>
<p>Cuba niega rotundamente representar ninguna amenaza para sus vecinos y acusa al gobierno estadounidense de fabricar un pretexto para justificar una intervención militar. La Habana recuerda que Cuba no ha atacado ni amenazado a ningún país desde su revolución.</p>
<p>La tensión entre ambos países se inscribe en un contexto de relaciones históricamente conflictivas que se han visto agravadas por las recientes sanciones económicas adicionales impuestas por la administración Trump.</p>`,
    image_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'La argentina Leila Guerriero gana el Premio Strega Europeo 2026 con "La llamada"',
    summary: 'La reconocida periodista y escritora recibe el galardón por su libro "La llamada: historia de una mujer argentina", consolidándose como una de las voces más importantes de las letras en castellano.',
    content: `<p>La periodista y escritora argentina <strong>Leila Guerriero</strong> ha sido galardonada con el <strong>Premio Strega Europeo 2026</strong> por su obra <em>La llamada: historia de una mujer argentina</em>, uno de los galardones literarios más prestigiosos del continente europeo.</p>
<p>Guerriero, nacida en Junín en 1967, es una de las figuras más destacadas del periodismo narrativo en lengua española. Colaboradora habitual de medios como <em>El País</em> y <em>La Nación</em>, es autora de obras de referencia como <em>Una historia sencilla</em> y <em>Opus Gelber</em>.</p>
<p>El libro premiado, <em>La llamada</em>, está construido en torno a la figura de una mujer argentina cuya historia personal se entrelaza con la historia colectiva del país, en una obra que los jurados han destacado por su precisión narrativa y su profundidad emocional.</p>
<p>El Premio Strega Europeo reconoce obras escritas originalmente en una lengua distinta del italiano y traducidas a este idioma, y supone un importante impulso para la difusión de la literatura latinoamericana en Europa.</p>`,
    image_url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
    category_id: CAT.cul,
  },

  // ─── GUERRAS Y CONFLICTOS ─────────────────────────────────────
  {
    title: 'Trump pospone el ataque a Irán tras las peticiones de aliados árabes de dar más tiempo a las negociaciones',
    summary: 'El presidente estadounidense acusa a Irán de haber pactado acuerdos diplomáticos en cinco ocasiones para retractarse al día siguiente, pero cede a la presión diplomática de sus socios regionales.',
    content: `<p>Donald Trump ha pospuesto un ataque militar contra Irán que estaba previsto para este martes, cediendo a las peticiones urgentes de varios aliados árabes de la región que han pedido dar más tiempo a las negociaciones diplomáticas antes de optar por la acción armada.</p>
<p>Trump, visible mente frustrado con el proceso negociador, acusó a Irán de haber aceptado acuerdos diplomáticos en <strong>cinco ocasiones distintas para retractarse al día siguiente</strong>, comportamiento que calificó de inaceptable y de obstáculo sistemático para cualquier solución pacífica.</p>
<p>La decisión de posponer la acción militar ha sido bien recibida por potencias regionales como Arabia Saudí y los Emiratos Árabes Unidos, que temen que un conflicto abierto con Irán desestabilice gravemente toda la región y dañe sus economías, altamente dependientes del tráfico marítimo por el estrecho de Ormuz.</p>
<p>Irán, por su parte, ha reiterado que no cederá ante amenazas militares, pero ha señalado que sigue abierto a un diálogo basado en el respeto mutuo y el levantamiento de las sanciones económicas que han devastado su economía.</p>`,
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Irán establece peajes y una ruta especial para buques en el estrecho de Ormuz',
    summary: 'Teherán anuncia un mecanismo que cobra por servicios a los barcos de países cooperantes. Un conflicto en la zona podría destruir 52 millones de empleos en dos años, según analistas.',
    content: `<p>Irán ha anunciado un nuevo mecanismo de gestión del tráfico marítimo en el estrecho de Ormuz, una de las vías de navegación más estratégicas del mundo por la que transita aproximadamente el 20% del petróleo mundial. El sistema incluye una ruta específica para buques comerciales de países considerados "cooperantes" y establece el cobro de peajes por los servicios prestados.</p>
<p>La medida es interpretada por los analistas como una forma de ejercer presión económica y geopolítica sobre las potencias occidentales en el contexto de la creciente tensión con Estados Unidos.</p>
<p>Las consecuencias de un posible cierre o interrupción grave del tráfico en el estrecho serían devastadoras: según los análisis de organismos internacionales, un conflicto en la zona podría <strong>destruir hasta 52 millones de empleos</strong> en lo que resta de año y el siguiente, afectando especialmente a los países árabes del Golfo cuyas economías dependen directamente del comercio marítimo.</p>
<p>Estados Unidos y sus aliados han rechazado el anuncio iraní y han advertido que no reconocerán ningún tipo de peaje o restricción al libre tránsito por el estrecho, que consideran aguas internacionales.</p>`,
    image_url: 'https://images.unsplash.com/photo-1519099073-5b9e671d4caf?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Israel intercepta la flotilla de 52 barcos que transportaba activistas hacia Gaza',
    summary: 'La Gaza Freedom Flotilla, con 426 activistas de 39 países procedentes de Turquía, ha sido interceptada por el ejército israelí. Netanyahu afirma que el objetivo es frustrar el plan de romper el bloqueo a Hamás.',
    content: `<p>El ejército israelí ha comenzado a interceptar los barcos de la <strong>Gaza Freedom Flotilla</strong>, un convoy humanitario formado por <strong>52 embarcaciones</strong> procedentes de Turquía que se dirigían a la franja de Gaza con el objetivo de romper el bloqueo naval impuesto por Israel.</p>
<p>La flotilla transportaba a bordo a <strong>426 activistas procedentes de 39 países</strong> diferentes, entre ellos periodistas, médicos, parlamentarios y representantes de organizaciones humanitarias. Su cargamento incluía medicamentos, alimentos y material de primeros auxilios destinados a la población gazatí.</p>
<p>El primer ministro israelí, Benjamin Netanyahu, ha afirmado que la operación de intercepción tiene como objetivo frustrar lo que califica como un plan coordinado para romper el bloqueo a Hamás, al que Israel responsabiliza del conflicto en curso. Netanyahu advirtió que Israel no permitirá que ningún barco llegue a Gaza sin pasar por las inspecciones israelíes.</p>
<p>La flotilla ha generado una crisis diplomática con Turquía, cuyo gobierno había avalado la iniciativa, y ha sido objeto de condena por parte de varios países europeos que exigen el paso seguro de la ayuda humanitaria a Gaza.</p>`,
    image_url: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Rusia ataca con un dron un buque de propiedad china cerca del puerto de Odessa',
    summary: 'El barco, que viajaba sin carga con bandera de las Islas Marshall, sufrió un incendio leve sin heridos. Pekín no ha realizado comentarios sobre el ataque.',
    content: `<p>Ucrania ha denunciado que Rusia atacó con un dron un buque con <strong>bandera de las Islas Marshall pero de propiedad china</strong> cuando navegaba cerca del puerto de Odessa, en el mar Negro. El ataque, que no causó heridos, provocó un incendio de carácter leve que fue controlado por la tripulación.</p>
<p>El barco, que viajaba sin carga en el momento del impacto, pudo continuar navegando tras controlar el incendio. Las autoridades ucranianas han notificado el incidente a las organizaciones marítimas internacionales como parte de la documentación de los ataques rusos a buques civiles en el mar Negro.</p>
<p>El aspecto más llamativo del suceso es que el buque es de <strong>propiedad china</strong>, lo que podría generar tensión entre Rusia y China, dos países que han estrechado sus lazos estratégicos desde el inicio de la guerra en Ucrania. Sin embargo, <strong>Pekín no ha realizado ningún comentario público</strong> sobre el ataque, en una llamativa actitud de silencio diplomático.</p>
<p>Rusia continúa atacando la infraestructura portuaria y de exportación de Ucrania, especialmente en el corredor del mar Negro, con el objetivo de presionar económicamente al gobierno de Kiev y a sus socios occidentales.</p>`,
    image_url: 'https://images.unsplash.com/photo-1626364390924-d0bb1a84af67?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Una investigación de la BBC estima que 2.300 soldados norcoreanos han muerto combatiendo en Kursk',
    summary: 'Los militares de Corea del Norte luchan junto a las fuerzas rusas contra el ejército ucraniano en la región fronteriza, en una alianza que preocupa a Occidente y a Corea del Sur.',
    content: `<p>Una investigación realizada por la BBC ha estimado que aproximadamente <strong>2.300 soldados norcoreanos</strong> han muerto combatiendo en la región rusa de Kursk, donde luchan junto a las fuerzas armadas de Rusia contra el ejército ucraniano. La cifra convierte el contingente norcoreano en uno de los más castigados del conflicto.</p>
<p>La presencia de tropas de Corea del Norte en el teatro de operaciones ucraniano fue confirmada inicialmente por los servicios de inteligencia de Seúl y posteriormente corroborada por Estados Unidos y varios países de la OTAN. Se calcula que el número total de soldados norcoreanos desplegados supera los 10.000 efectivos.</p>
<p>La alianza militar entre Pyongyang y Moscú ha generado alarma en Occidente y especialmente en Corea del Sur, que teme que el conflicto ucraniano sirva como campo de entrenamiento para las tropas norcoreanas y que Rusia pueda en contrapartida proporcionar tecnología militar o nuclear a Corea del Norte.</p>
<p>El gobierno de Kim Jong-un no ha realizado ninguna declaración oficial sobre la participación de sus fuerzas en el conflicto ucraniano.</p>`,
    image_url: 'https://images.unsplash.com/photo-1561484393-f746a4a3cdea?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Putin y Xi Jinping se reúnen en China para reforzar su alianza energética y estratégica',
    summary: 'La cumbre, en el 25 aniversario del Tratado de Buena Vecindad, prevé la firma de unos 40 documentos sobre industria, transporte y energía nuclear entre Rusia y China.',
    content: `<p>El presidente ruso Vladimir Putin se reúne hoy y mañana con el presidente chino Xi Jinping en Pekín con motivo del <strong>25 aniversario del Tratado de Buena Vecindad y Cooperación Amistosa</strong> suscrito entre Rusia y China. La cumbre es una de las más relevantes de los últimos años entre ambas potencias.</p>
<p>La <strong>cooperación energética</strong> será el tema central de los encuentros, con especial atención al aumento de las exportaciones de gas y petróleo ruso hacia China en un contexto en que Moscú ha perdido su principal mercado europeo a causa de las sanciones. Se prevé la firma de unos <strong>40 documentos</strong> sobre industria, transporte, energía nuclear y cooperación tecnológica.</p>
<p>La cumbre se produce en un momento de máxima presión sobre Rusia por parte de Occidente debido a la guerra en Ucrania, y refuerza el perfil de China como el principal apoyo político y económico del Kremlin. Analistas occidentales señalan que la relación, aunque mutuamente beneficiosa, no está exenta de tensiones dada la creciente asimetría de poder entre ambos países.</p>
<p>Estados Unidos y la Unión Europea han advertido a China de las consecuencias de apoyar económicamente el esfuerzo bélico ruso en Ucrania.</p>`,
    image_url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&q=80',
    category_id: CAT.int,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Enrique Riquelme formaliza su candidatura a la presidencia del Real Madrid',
    summary: 'El empresario alicantino propietario de Cox Energy ya cuenta con el aval bancario necesario. Florentino Pérez parte como favorito para revalidar el cargo en las próximas elecciones.',
    content: `<p>El empresario alicantino <strong>Enrique Riquelme</strong>, propietario de Cox Energy y uno de los hombres de negocios más activos del sector de las energías renovables en España, ha confirmado públicamente su candidatura a la presidencia del Real Madrid. Riquelme ya dispone del <strong>aval bancario necesario</strong> para presentar formalmente su candidatura ante los órganos del club.</p>
<p>La candidatura de Riquelme supone el primer desafío formal en años a la hegemonía de Florentino Pérez en la presidencia del club blanco. El actual presidente, que ha dirigido el club durante la mayoría de las últimas dos décadas, parte como claro <strong>favorito para revalidar su cargo</strong> dada su trayectoria y su posición de fuerza dentro de la institución.</p>
<p>Riquelme ha prometido un proyecto alternativo basado en la sostenibilidad económica, la inversión en cantera y una relación más cercana con el madridismo de base. Sin embargo, los analistas deportivos señalan que su posibilidad real de victoria frente a Florentino es reducida.</p>
<p>Las elecciones al club se celebrarán en las próximas semanas, y el plazo de presentación de candidaturas permanece abierto.</p>`,
    image_url: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Fermín López se pierde el Mundial tras sufrir una fractura en el quinto metatarsiano',
    summary: 'El centrocampista del FC Barcelona será operado en los próximos días y estará entre uno y mes y medio de baja, poniendo fin a sus opciones de ir a la cita mundialista.',
    content: `<p>El centrocampista del FC Barcelona <strong>Fermín López</strong> se perderá el Mundial de fútbol 2026 debido a una fractura en el quinto metatarsiano del pie derecho. La lesión, sufrida en el transcurso de la temporada, requiere intervención quirúrgica.</p>
<p>El jugador será operado en los próximos días y los médicos prevén un periodo de recuperación de entre <strong>uno y mes y medio</strong>, un plazo que hace imposible su participación en la primera fase del torneo. La lesión supone un duro golpe para las aspiraciones del seleccionador, que contaba con Fermín como uno de sus activos en el centrocampo.</p>
<p>Fermín López, con apenas 22 años, había consolidado su posición en el equipo azulgrana y en la selección española a lo largo de la temporada con actuaciones notables. Su ausencia en el Mundial priva a España de uno de sus futbolistas más talentosos y verticales en la zona de creación.</p>
<p>El seleccionador deberá anunciar en los próximos días quién ocupa el lugar de Fermín en la lista definitiva convocada para el torneo.</p>`,
    image_url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Dani Carvajal se despide del Real Madrid el sábado ante el Athletic tras no renovar su contrato',
    summary: 'El lateral derecho se marcha con seis Champions League como uno de los jugadores más laureados de la historia del club. Se espera que continúe su carrera en Qatar.',
    content: `<p>Dani Carvajal no continuará en el Real Madrid la próxima temporada tras no llegar a un acuerdo con el club para la renovación de su contrato. El lateral derecho madrileño, que jugó toda su carrera profesional en el club blanco, se despedirá este sábado en el estadio Santiago Bernabéu en el partido frente al Athletic Club de Bilbao.</p>
<p>Carvajal se marcha del club siendo uno de los jugadores más laureados de su historia. Con el Real Madrid conquistó <strong>seis Champions League</strong>, cinco Ligas, dos Copas del Rey y varios títulos nacionales e internacionales más, convirtiéndose en el lateral derecho más laureado de la historia del fútbol europeo.</p>
<p>El jugador, de 34 años, tuvo una temporada complicada a causa de una grave lesión de ligamentos que le mantuvo alejado de los terrenos de juego durante meses. Su nivel de rendimiento al regreso no convenció a la directiva del club para ofrecerle las condiciones que el jugador esperaba para su renovación.</p>
<p>Según informaciones de la prensa española y árabe, Carvajal tiene prácticamente cerrado un contrato con un club de la <strong>liga de Qatar</strong>, donde podría cerrar su carrera profesional.</p>`,
    image_url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Arranca el segundo juicio por la muerte de Diego Armando Maradona en Argentina',
    summary: 'El primero fue anulado tras la participación indebida de la jueza en un documental. Los peritos afirman que el astro no murió de forma súbita sino tras hasta 12 horas de agonía por negligencia médica.',
    content: `<p>Argentina celebra el inicio del segundo juicio por la muerte de <strong>Diego Armando Maradona</strong>, fallecido el 25 de noviembre de 2020 a los 60 años. El primer proceso judicial fue anulado después de que se descubriera la participación indebida de la jueza instructora en un documental sobre el caso, lo que comprometió la imparcialidad del procedimiento.</p>
<p>En este segundo proceso, los peritos forenses han presentado conclusiones impactantes: afirman que Maradona <strong>no murió de forma súbita</strong>, sino que atravesó una <strong>agonía de hasta 12 horas</strong> antes de su fallecimiento, lo que habría dado tiempo suficiente a su equipo médico para intervenir y potencialmente salvar su vida.</p>
<p>Los acusados son el médico personal del astro, un psiquiatra, una psicóloga, dos enfermeros y el médico coordinador de su atención domiciliaria. Todos ellos enfrentan cargos de homicidio culposo por presunta negligencia en la atención sanitaria que Maradona recibía en su casa de Tigre.</p>
<p>El juicio ha generado una enorme expectación mediática tanto en Argentina como en el resto del mundo, donde Maradona sigue siendo considerado uno de los mejores futbolistas de todos los tiempos.</p>`,
    image_url: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'La Agencia Tributaria descarta corrupción en los pagos del Barça a Negreira',
    summary: 'La investigación concluye que los 7,5 millones abonados al exvicepresidente arbitral no estuvieron destinados a comprar árbitros ni a influir en resultados deportivos.',
    content: `<p>La Agencia Tributaria española ha concluido su investigación sobre los pagos realizados por el FC Barcelona a José María Enríquez Negreira, exvicepresidente del Comité Técnico de Árbitros, y ha determinado que los <strong>7,5 millones de euros</strong> abonados a lo largo de varios años <strong>no estuvieron destinados a comprar árbitros</strong> ni a influir en resultados deportivos.</p>
<p>La conclusión de la Agencia Tributaria no elimina la causa penal que sigue abierta contra el club, pero sí debilita significativamente la hipótesis de la fiscalía sobre corrupción deportiva sistemática. El Barça siempre ha afirmado que los pagos correspondían a asesoramiento técnico legítimo.</p>
<p>El club ya ha anunciado que emprenderá <strong>acciones legales</strong> como consecuencia de las declaraciones públicas del presidente del Real Madrid, Florentino Pérez, quien afirmó en su momento que el Barça "le había robado siete ligas" a través de esta supuesta corrupción arbitral.</p>
<p>El caso Negreira ha marcado la agenda futbolística española durante los últimos dos años y ha generado una intensa polémica dentro y fuera de los juzgados.</p>`,
    image_url: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Ancelotti convoca a Neymar para el Mundial de Brasil pese a las bajas de Militão y Rodrygo',
    summary: 'El seleccionador italiano incluye al delantero en la lista para el torneo. Entre las ausencias figuran Militão, Rodrygo, Thiago Silva y João Pedro.',
    content: `<p>Carlo Ancelotti, seleccionador de la <strong>selección brasileña de fútbol</strong>, ha publicado la lista de convocados para el Mundial 2026 e incluye en ella el nombre de <strong>Neymar Jr.</strong>, el atacante que durante años fue el gran referente del fútbol brasileño y que en los últimos meses luchó para recuperarse de graves lesiones.</p>
<p>La convocatoria de Neymar es la gran sorpresa de la lista, dado que el jugador no ha tenido continuidad en su equipo en los meses previos al torneo. Ancelotti ha apostado por su calidad diferencial como argumento para incluirle pese a los recelos de parte de la afición y los analistas.</p>
<p>Entre las <strong>ausencias más destacadas</strong> figuran el central del Real Madrid <strong>Militão</strong> y el extremo <strong>Rodrygo</strong>, ambos descartados por lesión. También estarán fuera del Mundial <strong>Thiago Silva</strong> y el delantero <strong>João Pedro</strong>.</p>
<p>Brasil llega al Mundial como uno de los grandes favoritos, aunque la presión sobre la <em>Canarinha</em> es máxima dado que el país lleva décadas sin conquistar el título del mundo y el torneo se celebra en territorio americano.</p>`,
    image_url: 'https://images.unsplash.com/photo-1516659932-3ac35db1571a?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Los medios ingleses dan por hecho la salida de Guardiola del Manchester City al final de temporada',
    summary: 'Según las informaciones, el club ya habría notificado a patrocinadores el inminente anuncio. Pep y el City desmienten los rumores, aunque el equipo habría cerrado un acuerdo con Enzo Maresca como sustituto.',
    content: `<p>Los principales medios de comunicación ingleses dan prácticamente por hecho que <strong>Pep Guardiola</strong> abandonará el Manchester City al término de la presente temporada, poniendo fin a una etapa de éxito sin precedentes en el fútbol inglés y europeo.</p>
<p>Según estas informaciones, el club ya habría <strong>notificado a sus principales patrocinadores</strong> que el anuncio del final de la etapa Guardiola es inminente, lo que indica que la decisión estaría tomada en los niveles más altos de la dirección del club. El City habría cerrado un acuerdo con el técnico italiano <strong>Enzo Maresca</strong> como sustituto hasta 2028.</p>
<p>Sin embargo, tanto el club como el propio Guardiola han <strong>desmentido públicamente los rumores</strong> en las últimas horas, insistiendo en que el entrenador tiene contrato vigente hasta 2027 y que no hay ninguna decisión tomada al respecto.</p>
<p>Guardiola llegó al City en 2016 y ha ganado con el club seis Premier League, una Champions League y múltiples títulos nacionales, transformando al equipo azul de Mánchester en la potencia dominante del fútbol mundial en la última década.</p>`,
    image_url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1200&q=80',
    category_id: CAT.dep,
  },
]

async function run() {
  console.log(`Insertando ${articles.length} artículos...`)
  let ok = 0
  for (const a of articles) {
    try {
      const base = slugify(a.title, { lower: true, strict: true, locale: 'es' })
      const slug = `${base}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
      const words = a.content.replace(/<[^>]+>/g, '').split(/\s+/).length
      const reading_time = Math.max(1, Math.round(words / 200))
      await pool.query(
        `INSERT INTO articles (title, slug, summary, content, image_url, author, category_id, reading_time, published_at)
         VALUES (?, ?, ?, ?, ?, 'Redacción', ?, ?, ?)`,
        [a.title, slug, a.summary, a.content, a.image_url, a.category_id, reading_time, DATE]
      )
      console.log(`  ✅ ${a.title}`)
      ok++
    } catch (err) {
      console.error(`  ❌ ${a.title}: ${err.message}`)
    }
  }
  console.log(`\nListo: ${ok}/${articles.length} artículos insertados.`)
  await pool.end()
}

run().catch(console.error)
