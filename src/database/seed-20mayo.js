require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-05-20 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'Más de la mitad del tráfico web global proviene ya de bots maliciosos impulsados por IA',
    summary: 'Un nuevo informe revela que el tráfico generado por bots supera al humano en internet, con los ataques de IA multiplicados por 12,5 en el último año, pasando de 2 a 25 millones de incidentes.',
    content: `<p>Más de la mitad del tráfico web mundial tiene su origen en bots, la gran mayoría de carácter malicioso e impulsados por inteligencia artificial, según un informe publicado este miércoles. Los datos constatan una tendencia que preocupa cada vez más a los expertos en ciberseguridad.</p>
<p>El documento señala que los ataques automatizados generados mediante IA han crecido <strong>12,5 veces</strong> en el último periodo analizado, pasando de 2 millones a 25 millones de incidentes registrados. Este aumento exponencial coincide con la masificación de herramientas de inteligencia artificial generativa capaces de automatizar tareas complejas a un coste mínimo.</p>
<p>Los bots maliciosos se emplean principalmente para el raspado masivo de datos, el relleno de credenciales, los ataques de denegación de servicio distribuido (DDoS) y la manipulación de precios en plataformas de comercio electrónico. Las empresas de menor tamaño, sin soluciones avanzadas de detección, son las más vulnerables.</p>
<p>Los analistas advierten que la tendencia se acelerará conforme los modelos de lenguaje se vuelvan más accesibles y baratos, y reclaman una regulación específica sobre el uso de IA en operaciones automatizadas en internet.</p>`,
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Siri se transformará por completo en iOS 27: nueva app independiente con historial y procesamiento por Gemini',
    summary: 'Apple renovará completamente su asistente en iOS 27. La nueva versión funcionará como aplicación independiente similar a ChatGPT, sin publicidad, con historial de conversaciones y motor de Google Gemini.',
    content: `<p>Apple tiene previsto renovar en profundidad su asistente de voz Siri con el lanzamiento de iOS 27, esperado para finales de este año. Según fuentes conocedoras del proyecto, la nueva versión abandonará el modelo clásico de respuestas cortas para convertirse en una aplicación independiente de inteligencia artificial conversacional, funcionando de manera similar a ChatGPT.</p>
<p>Entre las principales novedades destaca la incorporación de un <strong>historial de conversaciones</strong>, que permitirá al usuario retomar interacciones anteriores y gestionar tareas complejas encadenadas. La aplicación no incluirá publicidad en ninguna de sus funciones.</p>
<p>El procesamiento principal de las consultas correrá a cargo de <strong>Google Gemini</strong>, en el marco del acuerdo de colaboración entre Apple y Alphabet anunciado en 2025. Apple mantendrá el procesamiento en dispositivo para las consultas más sensibles, preservando así la privacidad de los usuarios.</p>
<p>Las novedades serán presentadas oficialmente el próximo <strong>8 de junio</strong> durante la conferencia de desarrolladores WWDC. La comunidad tecnológica aguarda con expectación el alcance real de la integración con el ecosistema de aplicaciones de terceros.</p>`,
    image_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Un perro robot sueco con sistema nervioso digital aprende y se adapta como un animal real',
    summary: 'La empresa sueca presentó a Luna, un robot cuadrúpedo con sistema nervioso digital funcional entrenado por un adiestrador profesional de perros en lugar de modelos de simulación generativa.',
    content: `<p>Una empresa tecnológica sueca ha presentado Luna, un perro robot equipado con un <strong>sistema nervioso digital funcional</strong> que le permite aprender, adaptarse y responder al entorno de una manera significativamente más cercana al comportamiento animal real que cualquier robot previo de su categoría.</p>
<p>A diferencia de otros sistemas robóticos que se entrenan mediante simulación por ordenador o grandes bases de datos, los desarrolladores optaron por contratar a un <strong>adiestrador de perros profesional</strong> para guiar el aprendizaje de Luna. El entrenador trabajó directamente con el robot usando técnicas de condicionamiento positivo habituales en la adiestramiento canino real.</p>
<p>El resultado, según la empresa, es un comportamiento más orgánico e impredecible que el de robots entrenados exclusivamente por algoritmos. Luna es capaz de reconocer situaciones nuevas, ajustar su marcha a superficies variables y responder a señales gestuales y vocales con una latencia reducida.</p>
<p>El proyecto ha generado un notable interés en los campos de la robótica blanda, la inteligencia artificial encarnada y las aplicaciones de asistencia y rescate en entornos difíciles.</p>`,
    image_url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Sony convierte los juegos de un solo jugador de PlayStation 5 en exclusivos permanentes de consola',
    summary: 'Los títulos narrativos single player de PS5 como Marvel\'s Wolverine y Ghost of Yōtei no llegarán a PC. Solo los juegos multijugador mantendrán versión para ordenador.',
    content: `<p>Sony Interactive Entertainment ha anunciado un cambio estratégico de calado en su política de lanzamientos: todos los juegos narrativos de un solo jugador desarrollados para PlayStation 5 serán <strong>exclusivos permanentes de la consola</strong> y no tendrán versión para PC.</p>
<p>La decisión afecta a títulos muy esperados como <em>Marvel's Wolverine</em>, de Insomniac Games, y <em>Ghost of Yōtei</em>, la continuación espiritual de Ghost of Tsushima desarrollada por Sucker Punch. Ambos juegos estaban entre los más anticipados por los jugadores de ordenador tras el éxito de las versiones PC de títulos anteriores de PlayStation Studios.</p>
<p>Sin embargo, Sony matiza que los juegos <strong>multijugador sí continuarán llegando a PC</strong>, en línea con su interés por maximizar la base de jugadores en títulos orientados a servicios en vivo. El cambio responde a la voluntad de reforzar el atractivo diferencial de la consola PlayStation 5 frente a la competencia.</p>
<p>La medida ha generado una reacción dividida entre los aficionados: quienes ya poseen una PS5 la celebran como un incentivo, mientras que los jugadores de PC la critican como un paso atrás en la accesibilidad.</p>`,
    image_url: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Un exdirector de IGN alerta de una posible brecha de seguridad en PlayStation Network',
    summary: 'El directivo vio comprometida su cuenta pese a haber cambiado la contraseña y activar la autenticación en dos pasos, y solo pudo recuperarla gracias a contactos internos en PlayStation.',
    content: `<p>Un exdirector ejecutivo de la publicación especializada IGN ha alertado públicamente sobre una posible vulnerabilidad grave en el sistema de seguridad de <strong>PlayStation Network (PSN)</strong> después de que su propia cuenta fuese comprometida en circunstancias que considera inexplicables bajo los protocolos de seguridad normales.</p>
<p>Según relató el afectado, el acceso no autorizado se produjo pese a haber cambiado recientemente su contraseña y a tener activada la <strong>autenticación en dos pasos</strong>, que debería proporcionar una capa adicional de protección. La recuperación de la cuenta solo fue posible gracias a contactos directos dentro de Sony PlayStation, una vía inaccesible para la mayoría de los usuarios.</p>
<p>Sony no ha emitido ningún comunicado oficial al respecto ni ha confirmado la existencia de una vulnerabilidad sistémica. Sin embargo, el incidente ha reavivado el debate sobre la solidez de la seguridad de PSN, plataforma que gestiona las cuentas y datos de pago de decenas de millones de usuarios en todo el mundo.</p>
<p>Expertos en ciberseguridad recomiendan revisar los dispositivos autorizados, activar alertas de inicio de sesión y utilizar contraseñas únicas generadas por gestores de contraseñas hasta que Sony aclare la situación.</p>`,
    image_url: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Summer Game Fest 2026 se celebrará el 5 de junio con dos horas de anuncios de videojuegos',
    summary: 'El evento anual de Geoff Keighley regresa el 5 de junio a las 21:00 horas (hora española) con aproximadamente dos horas de presentaciones y anuncios del sector.',
    content: `<p>El <strong>Summer Game Fest 2026</strong>, el evento anual de presentaciones de videojuegos organizado por el periodista y productor Geoff Keighley, tendrá lugar el próximo <strong>5 de junio</strong> a las 21:00 horas en horario peninsular español, con una duración aproximada de dos horas.</p>
<p>El evento se ha consolidado como uno de los escaparates más importantes del sector del videojuego, especialmente desde el fin del E3 de Los Ángeles. Cada edición reúne anuncios de grandes publishers, tráilers de títulos en desarrollo y revelaciones exclusivas que marcan la agenda de la industria para los meses siguientes.</p>
<p>La retransmisión estará disponible en directo a través de las plataformas habituales de streaming. Keighley no ha desvelado aún qué estudios o títulos participarán, aunque la expectación es especialmente alta dado el calendario de lanzamientos previsto para el segundo semestre de 2026.</p>`,
    image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
    category_id: CAT.tec,
  },
  {
    title: 'Nintendo lanza Pictonico, su nueva app móvil gratuita que convierte las fotos del usuario en minijuegos',
    summary: 'La nueva aplicación para iOS y Android permite integrar fotografías propias en más de 80 minijuegos de distintos géneros. El contenido adicional se ofrece por 6 y 8 euros.',
    content: `<p>Nintendo ha presentado <strong>Pictonico</strong>, una nueva aplicación gratuita para dispositivos iOS y Android que permite a los jugadores integrar sus propias fotografías en más de 80 minijuegos de géneros variados, incluyendo puzles, plataformas, juegos de ritmo y desafíos de habilidad.</p>
<p>La mecánica principal consiste en que el sistema analiza las imágenes del usuario y las adapta como elementos visuales activos dentro de cada minijuego: los rostros, objetos y paisajes de las fotografías se convierten en personajes, obstáculos o fondos interactivos.</p>
<p>La aplicación será <strong>gratuita en su versión base</strong>, que incluye una selección de minijuegos. Los jugadores podrán ampliar el contenido con dos paquetes adicionales disponibles por <strong>6 y 8 euros</strong> respectivamente, que añaden nuevos géneros y modos de juego.</p>
<p>El lanzamiento forma parte de la estrategia de Nintendo de mantener una presencia activa en el mercado móvil como vía de captación de nuevos usuarios para su ecosistema principal, en particular la Nintendo Switch 2.</p>`,
    image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
    category_id: CAT.tec,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'Científicos descubren microalgas vivas y en movimiento bajo el hielo del Ártico a -15 °C',
    summary: 'Las microalgas de paredes de sílice permanecen activas durante el invierno polar, contradiciendo la creencia de que hibernaban. Producen oxígeno y sostienen la base de la cadena alimentaria marina.',
    content: `<p>Un equipo de investigadores internacionales ha confirmado que determinadas microalgas que habitan bajo el hielo ártico permanecen <strong>vivas y en movimiento activo</strong> incluso a temperaturas de -15 °C, contradiciendo la creencia científica predominante que las situaba en estado de latencia durante los meses de invierno polar.</p>
<p>Las microalgas en cuestión poseen <strong>paredes celulares de sílice</strong>, un material con propiedades aislantes que, según los investigadores, podría estar jugando un papel clave en su resistencia a las temperaturas extremas. A pesar del frío, las células continúan realizando fotosíntesis —aunque a ritmos muy reducidos— y produciendo oxígeno.</p>
<p>El hallazgo tiene implicaciones significativas para la comprensión de los ecosistemas polares. Estas microalgas constituyen la base de la cadena alimentaria marina en el Ártico: de ellas dependen el zooplancton, los peces, las focas y, en última instancia, los osos polares.</p>
<p>Los científicos advierten que el cambio climático podría alterar drásticamente los ciclos de estas microalgas al reducir la extensión del hielo marino, con consecuencias en cascada para toda la red trófica del Ártico.</p>`,
    image_url: 'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=1200&q=80',
    category_id: CAT.cien,
  },
  {
    title: 'El traje espacial europeo Eurosuit, diseñado con Decathlon, llega a la Estación Espacial Internacional',
    summary: 'El traje intravehicular codesarrollado por la ESA y Decathlon puede ponerse en menos de dos minutos y está diseñado para las fases críticas de vuelo: lanzamiento, reentrada y emergencias.',
    content: `<p>El <strong>Eurosuit</strong>, el traje espacial intravehicular desarrollado conjuntamente por la Agencia Espacial Europea (ESA) y la empresa de equipamiento deportivo Decathlon, ha llegado a la Estación Espacial Internacional (ISS), donde será evaluado en condiciones reales de microgravedad.</p>
<p>A diferencia de los trajes de actividad extravehicular (EVA), diseñados para salidas al exterior, el Eurosuit está concebido para el <strong>interior de la nave</strong> durante las fases de mayor riesgo: el lanzamiento, la reentrada en la atmósfera y las situaciones de emergencia a bordo, como despresurizaciones o fallos de sistemas.</p>
<p>Una de sus características más destacadas es que puede ser puesto y retirado de forma <strong>autónoma en menos de dos minutos</strong>, sin asistencia de otro tripulante, algo crucial en situaciones de emergencia. Su diseño, influenciado por la experiencia de Decathlon en materiales técnicos para deporte, busca combinar ergonomía, ligereza y resistencia.</p>
<p>El Eurosuit forma parte de los preparativos europeos para misiones tripuladas más ambiciosas, incluyendo los futuros vuelos hacia la Luna en el marco del programa Artemis.</p>`,
    image_url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1200&q=80',
    category_id: CAT.cien,
  },
  {
    title: 'La misión SMILE despega con éxito desde Kourou para estudiar las tormentas solares',
    summary: 'La sonda ESA-Academia China de Ciencias orbitará la Tierra cada dos días durante tres años para analizar el viento solar y su interacción con la magnetosfera y mejorar las predicciones de tormentas solares.',
    content: `<p>La misión <strong>SMILE</strong> (Solar wind Magnetosphere Ionosphere Link Explorer) ha despegado con éxito desde el puerto espacial europeo de Kourou, en la Guayana Francesa, en el marco de una colaboración científica entre la <strong>Agencia Espacial Europea (ESA)</strong> y la <strong>Academia China de Ciencias</strong>.</p>
<p>La sonda tiene como objetivo principal estudiar la interacción entre el viento solar —el flujo continuo de partículas cargadas emitido por el Sol— y la magnetosfera terrestre, la capa de campo magnético que protege la Tierra de la radiación espacial. Comprender esta dinámica es fundamental para mejorar la predicción de las <strong>tormentas solares geomagnéticas</strong>.</p>
<p>Durante sus tres años de vida operativa, SMILE orbitará la Tierra con un periodo de aproximadamente <strong>dos días por vuelta</strong>, tomando imágenes en rayos X suaves de la magnetosfera y midiendo in situ las propiedades del viento solar. Será la primera vez que se observen simultáneamente varias regiones clave de interacción.</p>
<p>Las tormentas solares intensas pueden provocar apagones en redes eléctricas, interferencias en comunicaciones por satélite y fallos en sistemas de navegación GPS, por lo que mejorar su predicción tiene un valor estratégico y económico considerable.</p>`,
    image_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80',
    category_id: CAT.cien,
  },
  {
    title: 'Colossal Biosciences logra que nazcan polluelos desarrollados en huevos artificiales impresos en 3D',
    summary: 'La empresa especializada en conservación de especies ha conseguido criar pollos desde el embrión en dispositivos artificiales de silicona fabricados mediante impresión 3D, abriendo vías para la conservación de aves en peligro.',
    content: `<p>La empresa biotecnológica <strong>Colossal Biosciences</strong>, conocida por sus proyectos de desextinción de especies como el mamut lanudo y el tilacino, ha logrado un nuevo hito: el nacimiento de polluelos cuyo desarrollo embrionario completo tuvo lugar en el interior de un <strong>huevo artificial fabricado mediante impresión 3D</strong> y recubierto de silicona.</p>
<p>El proceso parte de huevos reales fecundados cuyo contenido —la yema, la clara y el embrión— se transfiere al dispositivo artificial en las primeras horas tras la fertilización. El huevo sintético replica las propiedades físicas y gaseosas del huevo natural, permitiendo el intercambio de oxígeno y dióxido de carbono necesario para el desarrollo embrionario.</p>
<p>La aplicación más inmediata de esta tecnología es la <strong>conservación de especies de aves en peligro crítico</strong> cuya reproducción en cautividad resulta extremadamente difícil. El sistema permitiría manipular embriones sin depender de hembras reproductoras, y eventualmente implantar material genético de especies extintas o en peligro en embriones de especies cercanas.</p>
<p>Los investigadores advierten que aún quedan obstáculos técnicos por superar antes de aplicar el método a aves con huevos de geometría y composición muy diferentes a los de las gallinas domésticas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80',
    category_id: CAT.cien,
  },

  // ─── ECONOMÍA ─────────────────────────────────────────────────
  {
    title: 'El Canal de Panamá dispara sus tarifas hasta los 400.000 dólares por el bloqueo del estrecho de Ormuz',
    summary: 'El conflicto con Irán ha convertido el Canal de Panamá en la alternativa principal al estrecho bloqueado. Las tarifas de tránsito se han triplicado y algunos barcos han pagado hasta 3 millones de dólares por cruzarlo.',
    content: `<p>El Canal de Panamá atraviesa un auge económico sin precedentes como consecuencia directa del bloqueo del <strong>estrecho de Ormuz</strong> derivado del conflicto con Irán. La interrupción de una de las rutas marítimas más estratégicas del mundo ha redirigido hacia la vía centroamericana un volumen extraordinario de tráfico de mercancías y energía.</p>
<p>El impacto en los precios ha sido inmediato y drástico. Si antes del conflicto una tarifa estándar de tránsito en subasta rondaba los <strong>140.000 dólares</strong>, en las últimas semanas la cifra se ha disparado hasta los <strong>400.000 dólares</strong> de media, con casos puntuales en los que armadores han llegado a abonar hasta <strong>3 millones de dólares</strong> por garantizar un paso prioritario.</p>
<p>La Autoridad del Canal de Panamá ha aumentado la capacidad operativa al máximo, ampliando los turnos de trabajo y reduciendo los tiempos de espera, aunque la demanda supera con creces la oferta de franjas horarias disponibles.</p>
<p>Los analistas advierten que el encarecimiento del transporte marítimo tiene un efecto inflacionario en cadena sobre los precios de los productos manufacturados y las materias primas en los mercados internacionales, afectando especialmente a las economías más dependientes del comercio exterior.</p>`,
    image_url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    category_id: CAT.eco,
  },
  {
    title: 'Los mercados siguen en rojo: S&P 500 retrocede, el petróleo a 111 dólares y el euro en 1,16',
    summary: 'Las bolsas continúan su tendencia bajista. Bitcoin se mantiene en torno a los 76.000 dólares, el oro y la plata bajan, y el petróleo cotiza a 111 dólares por barril en un contexto de tensión geopolítica.',
    content: `<p>Los mercados financieros internacionales continuaron este miércoles su tendencia bajista, en una jornada marcada por la incertidumbre geopolítica y la aversión al riesgo de los inversores.</p>
<p>El <strong>S&P 500</strong> prolongó sus pérdidas de la sesión anterior, mientras que los principales índices europeos cerraron también en terreno negativo. El <strong>bitcoin</strong> se mantuvo en torno a los <strong>76.000 dólares</strong>, sin movimientos significativos tras las fuertes oscilaciones de días pasados.</p>
<p>En el mercado de materias primas, tanto el <strong>oro</strong> como la <strong>plata</strong> registraron descensos moderados, mientras que el <strong>petróleo Brent</strong> cotizó en torno a los <strong>111 dólares por barril</strong>, sostenido por la tensión en el estrecho de Ormuz. El <strong>euro</strong> se situó en <strong>1,16 dólares</strong>, mostrando estabilidad frente a semanas anteriores.</p>
<p>Los analistas señalan que la persistente tensión en Oriente Medio, la incertidumbre sobre la política monetaria de la Reserva Federal y los datos mixtos de actividad económica en China mantienen a los inversores en una posición defensiva.</p>`,
    image_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    category_id: CAT.eco,
  },

  // ─── CINE Y TELEVISIÓN ────────────────────────────────────────
  {
    title: '"Momias" tendrá dos nuevas entregas confirmadas por Warner Bros.',
    summary: 'La saga de animación española, la producción con mayor distribución internacional de la historia de España y la segunda película de animación española más taquillera del mundo, continuará con dos nuevas películas.',
    content: `<p>Warner Bros. Pictures ha confirmado oficialmente el desarrollo de <strong>dos nuevas películas</strong> pertenecientes a la saga de animación española <em>Momias</em>, consolidando así la franquicia como uno de los proyectos más exitosos de la animación europea en el mercado internacional.</p>
<p>La primera entrega, estrenada en 2023, se convirtió en la <strong>producción española con mayor distribución internacional de la historia</strong>, llegando a más de 150 países. En términos de taquilla, es la <strong>segunda película de animación española más recaudadora del mundo</strong>, solo superada por <em>Planet 51</em>.</p>
<p>Los detalles sobre el argumento de las nuevas entregas, sus directores o las fechas de estreno no han sido revelados todavía por la productora. Warner Bros. únicamente ha confirmado que el equipo creativo original estará involucrado en el desarrollo de ambas secuelas.</p>
<p>El éxito de <em>Momias</em> ha abierto un debate en la industria española sobre el potencial del cine de animación nacional para competir en los mercados globales, históricamente dominados por las producciones estadounidenses y japonesas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'La actriz que interpreta a Ginny Weasley en la serie de Harry Potter de HBO no continuará en las siguientes temporadas',
    summary: 'La familia de la actriz ha comunicado que no seguirá en el papel por circunstancias imprevistas. La primera temporada, donde el personaje tiene aparición reducida, se estrenará en diciembre.',
    content: `<p>La actriz seleccionada para interpretar a <strong>Ginny Weasley</strong> en la primera temporada de la nueva serie de <em>Harry Potter</em> producida por HBO no continuará en las siguientes entregas de la producción, según ha comunicado su familia por circunstancias imprevistas que no han sido detalladas públicamente.</p>
<p>La primera temporada de la serie, cuyo estreno está previsto para <strong>diciembre de 2026</strong>, no se verá afectada por el cambio, ya que el personaje de Ginny tiene una presencia reducida en los primeros episodios, que adaptan el material del primer libro de J.K. Rowling.</p>
<p>El relevo de la actriz se llevará a cabo a partir de la segunda temporada, cuando el papel de Ginny Weasley adquiere mayor protagonismo en la narrativa. HBO y los productores ejecutivos de la serie no han emitido todavía ninguna declaración oficial sobre el proceso de búsqueda de su sustituta.</p>
<p>La serie ha generado una enorme expectación global desde su anuncio, aunque también ha estado rodeada de polémica por las declaraciones públicas de la autora J.K. Rowling sobre cuestiones de género, que han motivado protestas de parte del elenco y del público.</p>`,
    image_url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80',
    category_id: CAT.cul,
  },
  {
    title: 'Los Duffer no revelarán el misterio del final de Stranger Things hasta dentro de 20 años',
    summary: 'Los creadores de la serie declararon en un podcast que mantendrán deliberadamente la ambigüedad sobre el destino de un personaje clave del desenlace durante al menos dos décadas.',
    content: `<p>Matt y Ross Duffer, creadores de <em>Stranger Things</em>, han declarado en un podcast que no tienen intención de revelar el destino de un personaje clave del desenlace de la serie en un plazo aproximado de <strong>20 años</strong>, según sus propias palabras durante la entrevista.</p>
<p>Los hermanos explicaron que la ambigüedad del final fue una decisión consciente y meditada, destinada a dejar espacio a la interpretación del espectador y a mantener el legado emocional de la serie vivo durante el máximo tiempo posible. Afirmaron sentirse orgullosos de haber construido un final que admite lecturas opuestas sin traicionar la coherencia narrativa.</p>
<p>La quinta y última temporada de <em>Stranger Things</em>, estrenada recientemente en Netflix, fue recibida con críticas mayoritariamente positivas, aunque el desenlace generó un intenso debate en las redes sociales sobre el significado de varias de sus escenas finales.</p>
<p>La declaración de los Duffer se produce en un momento en que la cultura popular debate activamente sobre la responsabilidad de los creadores de ficción para con su audiencia respecto al cierre narrativo de sus personajes.</p>`,
    image_url: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=80',
    category_id: CAT.cul,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'El 43% de la población japonesa sufre alergias al polen por una reforestación de los años 50',
    summary: 'Una política de repoblación forestal de la posguerra con cedro japonés y ciprés, especies que superan los 30 años y liberan grandes cantidades de polen, cubre hoy el 20% del territorio nipón y afecta a millones de personas.',
    content: `<p>Japón enfrenta una crisis crónica de salud pública derivada de una decisión de política forestal adoptada hace más de siete décadas. El <strong>43% de la población japonesa</strong> padece alergias moderadas o severas al polen, una cifra que sitúa al país entre los más afectados del mundo por esta patología.</p>
<p>El origen del problema se remonta a los años 50, cuando el gobierno japonés de posguerra impulsó una ambiciosa campaña de <strong>reforestación de las montañas</strong> devastadas durante el conflicto. Las especies elegidas —el <em>sugi</em> (cedro japonés) y el <em>hinoki</em> (ciprés japonés)— fueron seleccionadas por su rápido crecimiento y su valor maderero.</p>
<p>Décadas después, estos árboles han <strong>superado los 30 años de edad</strong>, momento en que alcanzan su máxima producción polínica. Actualmente, el <strong>20% del territorio japonés</strong> está cubierto por estas dos especies, configurando uno de los mayores focos de alérgenos naturales del mundo.</p>
<p>El gobierno japonés ha iniciado programas de sustitución paulatina por variedades de bajo polen, pero el proceso es lento y costoso. Mientras tanto, las máscaras, los purificadores de aire y los antihistamínicos son artículos de primera necesidad para millones de japoneses cada primavera.</p>`,
    image_url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Nuevos detalles del tiroteo en la mezquita de San Diego: dos adolescentes mataron a tres personas y se suicidaron',
    summary: 'Los agresores tenían 17 y 18 años. La madre de uno de ellos había llamado a la policía dos horas antes alertando de que su hijo había huido con armas. Un guardia de seguridad es considerado un héroe por limitar las víctimas.',
    content: `<p>Las autoridades han hecho públicos nuevos detalles sobre el tiroteo ocurrido en el Centro Islámico del condado de San Diego que se saldó con <strong>cinco muertos</strong>, incluyendo a los dos agresores. Los atacantes eran dos jóvenes de <strong>17 y 18 años</strong> que abrieron fuego contra los fieles antes de suicidarse en su vehículo.</p>
<p>Entre las víctimas mortales se encuentran <strong>dos fieles</strong> y un <strong>guardia de seguridad</strong> al que testigos y autoridades han calificado de héroe, al haber actuado con rapidez para reducir el número de víctimas y dirigir la evacuación del recinto antes de ser alcanzado por los disparos.</p>
<p>En un detalle especialmente perturbador, la madre de uno de los agresores <strong>llamó al 911 dos horas antes del ataque</strong> para alertar a la policía de que su hijo había huido del domicilio familiar con armas y mostraba señales de tendencias suicidas. Las circunstancias en que se gestionó esa llamada están siendo investigadas.</p>
<p>Los testigos presentes en el lugar describieron haber escuchado aproximadamente <strong>30 disparos</strong>. La investigación continúa abierta para determinar la motivación exacta de los atacantes y si existían señales previas que debieron haber activado la intervención de las autoridades.</p>`,
    image_url: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Francia amplía la investigación por abusos en centros educativos: 84 jardines de infancia y 20 primarias afectados',
    summary: 'Las autoridades francesas han identificado 84 jardines de infancia y 20 escuelas primarias de París vinculadas a la investigación. Este año han sido suspendidos 78 monitores, 31 bajo sospecha de agresión sexual.',
    content: `<p>Las autoridades francesas han ampliado considerablemente el alcance de la investigación por violencia y abusos sexuales contra menores en centros extraescolares de París. La pesquisa afecta ya a <strong>84 jardines de infancia y 20 escuelas primarias</strong>, lo que la convierte en uno de los casos de abusos institucionales más extensos investigados en Francia en los últimos años.</p>
<p>En lo que va de 2026, un total de <strong>78 monitores y educadores</strong> han sido suspendidos de sus funciones como medida cautelar. De ellos, <strong>31 se encuentran bajo sospecha directa de agresión sexual</strong> a menores bajo su supervisión.</p>
<p>El caso comenzó a tomar dimensión pública a principios de año tras las denuncias de varias familias y ha ido creciendo a medida que las investigaciones revelan un patrón sistemático en distintos centros de la capital francesa. Las autoridades han reforzado los protocolos de supervisión en todos los centros extraescolares de la ciudad.</p>
<p>La ministra de Educación francesa ha anunciado una revisión exhaustiva de los procedimientos de contratación y control de personal en los servicios de atención a la infancia, así como la creación de un registro nacional de inhabilitaciones para el sector.</p>`,
    image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El brote de ébola en el Congo avanza más rápido de lo previsto con 136 muertos y un caso confirmado en Uganda',
    summary: 'La OMS registra ya 543 casos sospechosos y estudia el uso de vacunas y tratamientos experimentales. El organismo advierte que el brote podría prolongarse durante meses, como el último episodio similar que duró dos años.',
    content: `<p>El brote de <strong>ébola</strong> activo en la República Democrática del Congo está avanzando a una velocidad mayor de la estimada inicialmente por las autoridades sanitarias, según ha advertido la Organización Mundial de la Salud (OMS). La cifra de víctimas mortales asciende ya a <strong>136 fallecidos</strong> y el número de casos sospechosos supera los <strong>543</strong>.</p>
<p>La situación se ha complicado con la confirmación de <strong>un caso importado en Uganda</strong>, lo que pone de manifiesto el riesgo de propagación regional. Las autoridades ugandesas han activado sus protocolos de respuesta y están rastreando los contactos de la persona infectada.</p>
<p>La OMS está evaluando el despliegue de <strong>vacunas y tratamientos experimentales</strong> para contener la propagación. La logística de distribución en las zonas afectadas, muchas de ellas de difícil acceso y con presencia de grupos armados, representa uno de los principales obstáculos para la respuesta humanitaria.</p>
<p>El organismo internacional advierte que el brote podría <strong>prolongarse durante meses</strong>. El precedente más reciente en la región —un episodio de similares características— se extendió durante más de dos años antes de ser declarado controlado, dejando miles de víctimas mortales.</p>`,
    image_url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El enviado de Trump para Groenlandia viaja a Nuuk sin invitación y el primer ministro le recuerda que el territorio no está en venta',
    summary: 'Jeff Landry acudió a un foro económico en la capital groenlandesa para establecer relaciones, pero su presencia no fue bienvenida formalmente. Nuuk reiteró que la autonomía del territorio no es negociable.',
    content: `<p><strong>Jeff Landry</strong>, designado por el presidente Donald Trump como enviado especial para Groenlandia, viajó a Nuuk para participar en un foro económico sin haber recibido una invitación formal de las autoridades groenlandesas. El objetivo declarado del viaje era el de establecer contactos directos con el tejido empresarial y político de la isla.</p>
<p>El primer ministro de Groenlandia aprovechó el encuentro para reiterar, una vez más, la posición oficial del gobierno autónomo: el territorio <strong>no está en venta</strong> y cualquier relación con Estados Unidos deberá respetar la soberanía del pueblo groenlandés sobre su propio futuro político.</p>
<p>La administración Trump ha expresado en múltiples ocasiones su interés estratégico por Groenlandia, en el contexto de la creciente competencia geopolítica en el Ártico con Rusia y China. Washington argumenta razones de seguridad nacional y acceso a recursos naturales críticos, mientras que Groenlandia y Dinamarca rechazan cualquier planteamiento que insinúe una transferencia territorial.</p>
<p>El episodio ha generado tensión diplomática y ha sido criticado por varios aliados europeos de EE. UU., que consideran que las acciones de la administración Trump en relación con Groenlandia socavan el principio de integridad territorial dentro de la alianza atlántica.</p>`,
    image_url: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Amnistía Internacional: 2025 registró el mayor número de ejecuciones en 44 años, con Irán responsable del 80%',
    summary: 'Al menos 2.707 personas fueron ejecutadas en el mundo en 2025. Irán llevó a cabo 2.159 ejecuciones, muchas sin juicio justo. China sigue siendo el mayor ejecutor mundial con cifras mantenidas en secreto.',
    content: `<p>Amnistía Internacional ha publicado su informe anual sobre la pena de muerte en el mundo, revelando que 2025 registró el <strong>mayor número de ejecuciones en 44 años</strong>. Al menos <strong>2.707 personas</strong> fueron ejecutadas en todo el mundo, aunque la cifra real podría ser significativamente superior dado que varios países no facilitan datos oficiales.</p>
<p><strong>Irán</strong> es el país responsable del mayor incremento, con <strong>2.159 ejecuciones confirmadas</strong>, lo que representa aproximadamente el <strong>80% del total mundial excluida China</strong>. Amnistía denuncia que un porcentaje elevado de estas ejecuciones se llevó a cabo sin garantías de juicio justo, en algunos casos por delitos de drogas o tras condenas obtenidas mediante confesiones forzadas.</p>
<p><strong>China</strong> continúa siendo el mayor ejecutor del mundo en términos absolutos, aunque su gobierno mantiene las cifras como <strong>secreto de Estado</strong>. Las estimaciones de organizaciones de derechos humanos sitúan el número de ejecuciones anuales en miles, muy por encima del total del resto del mundo combinado.</p>
<p>Amnistía Internacional reclama una moratoria universal sobre la pena de muerte y señala que 56 países la mantienen en sus legislaciones, aunque la tendencia global a largo plazo apunta hacia su abolición progresiva.</p>`,
    image_url: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'EE. UU. clasifica a seis cárteles mexicanos como organizaciones terroristas en su nueva estrategia antidrogas',
    summary: 'La Estrategia Nacional para el Control de Drogas 2026 de Trump declara el fentanilo arma de destrucción masiva y autoriza operaciones antiterroristas extraterritoriales contra redes criminales.',
    content: `<p>El gobierno de Donald Trump ha publicado la <strong>Estrategia Nacional para el Control de Drogas 2026</strong>, un documento que introduce cambios de gran calado en el enfoque estadounidense frente al narcotráfico. La medida más destacada es la clasificación de <strong>seis cárteles mexicanos</strong> y uno colombiano como <strong>organizaciones terroristas extranjeras</strong>.</p>
<p>Esta designación tiene consecuencias jurídicas y operativas inmediatas: habilita la aplicación de legislación antiterrorista, incluyendo la posibilidad de llevar a cabo <strong>operaciones militares y de inteligencia extraterritoriales</strong> contra estas organizaciones sin necesidad de la autorización expresa de los países donde operan.</p>
<p>El documento también declara el <strong>fentanilo</strong> como <strong>arma de destrucción masiva</strong>, una clasificación sin precedentes para una droga sintética, que busca justificar una respuesta de mayor contundencia ante la crisis de sobredosis que ha causado decenas de miles de muertes anuales en Estados Unidos.</p>
<p>México ha reaccionado con cautela pero con firmeza, rechazando cualquier operación unilateral en su territorio y subrayando que la cooperación bilateral debe desarrollarse en el marco del respeto a la soberanía nacional. La medida tensiona las relaciones diplomáticas entre ambos países.</p>`,
    image_url: 'https://images.unsplash.com/photo-1580130601254-05fa235abeab?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Bolivia acumula dos semanas de bloqueos y escasez por las protestas de seguidores de Evo Morales',
    summary: 'Mineros, transportistas y productores agropecuarios se suman a las marchas. Escasean alimentos, combustible y medicinas. Argentina envía un avión con ayuda humanitaria.',
    content: `<p>Bolivia lleva casi dos semanas sumida en una grave crisis de gobernabilidad provocada por bloqueos de carreteras y marchas protagonizadas por seguidores del expresidente <strong>Evo Morales</strong>, a los que se han unido gremios de mineros, transportistas, productores agropecuarios y otros colectivos sociales.</p>
<p>El corte de las principales arterias viarias del país ha generado una <strong>escasez generalizada</strong> de alimentos perecederos, combustible y medicamentos en varias regiones. Los mercados de abasto de las ciudades más afectadas registran desabastecimiento parcial y un aumento significativo de precios.</p>
<p>Las demandas de los manifestantes son diversas pero confluyen en el rechazo a las <strong>medidas de austeridad</strong> implementadas por el gobierno del presidente Rodrigo Paz y en la exigencia de atención urgente al incremento del coste de la vida, que en los últimos meses ha erosionado el poder adquisitivo de los sectores más vulnerables.</p>
<p><strong>Argentina</strong> ha enviado un avión con alimentos y suministros de primera necesidad como gesto de apoyo humanitario. La comunidad internacional sigue con preocupación la evolución de la crisis, que no encuentra todavía una salida negociada.</p>`,
    image_url: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'EE. UU. anuncia nuevas sanciones contra Cuba que afectan a su principal agencia de inteligencia',
    summary: 'El secretario de Estado Marco Rubio ha advertido de que se aplicarán medidas adicionales en los próximos días. Las sanciones apuntan también a varias instituciones estatales cubanas.',
    content: `<p>El gobierno de Estados Unidos ha anunciado un nuevo paquete de sanciones contra Cuba que tiene como objetivo principal la <strong>Dirección General de Inteligencia</strong>, el principal servicio de espionaje de la isla, así como varias instituciones estatales adicionales vinculadas al aparato de seguridad del régimen.</p>
<p>El secretario de Estado <strong>Marco Rubio</strong>, de origen cubanoamericano y conocido por su posición de línea dura frente a La Habana, advirtió en una declaración pública que las medidas anunciadas son solo el comienzo y que se aplicarán <strong>sanciones adicionales en los próximos días y semanas</strong>.</p>
<p>Las nuevas restricciones se suman a las ya existentes y buscan incrementar la presión económica y política sobre el gobierno cubano, al que Washington acusa de violaciones sistemáticas de los derechos humanos y de apoyar a regímenes como el venezolano.</p>
<p>Cuba ha rechazado las sanciones calificándolas de injerencia en sus asuntos internos y ha denunciado el bloqueo económico estadounidense ante los organismos internacionales como la principal causa de las dificultades que atraviesa la población de la isla.</p>`,
    image_url: 'https://images.unsplash.com/photo-1570979606936-09db4f083b6d?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'EE. UU. sanciona a cuatro activistas de la flotilla humanitaria rumbo a Gaza alegando apoyo a Hamás',
    summary: 'Washington congeló los activos estadounidenses de los activistas y dificultó sus operaciones financieras internacionales. La flotilla de 52 barcos fue interceptada previamente por Israel.',
    content: `<p>El gobierno de Estados Unidos ha impuesto sanciones económicas a <strong>cuatro activistas</strong> que participaban en la flotilla humanitaria que fue interceptada por Israel antes de poder llegar a la Franja de Gaza. Washington alega que la iniciativa servía como apoyo logístico y político a <strong>Hamás</strong>.</p>
<p>Las sanciones implican la <strong>congelación de activos</strong> de los afectados en territorio estadounidense y la imposición de restricciones que dificultan sus operaciones financieras internacionales, afectando a su capacidad de recaudar fondos o coordinar actividades a través de instituciones que operan bajo jurisdicción de EE. UU.</p>
<p>Los organizadores de la flotilla, que contaba con más de <strong>52 embarcaciones</strong> y participantes de decenas de países, rechazan las acusaciones y sostienen que la misión era estrictamente humanitaria, destinada a llevar alimentos, medicamentos y material de construcción a la población civil de Gaza.</p>
<p>La medida ha generado críticas de organizaciones de derechos humanos y varios gobiernos europeos, que consideran que las sanciones criminalizan la acción humanitaria y la protesta pacífica en el contexto del conflicto en Gaza.</p>`,
    image_url: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'El ministro de Finanzas de Israel afirma que el TPI ha solicitado una orden de arresto secreta contra él',
    summary: 'Según medios israelíes, otros altos cargos del gobierno también estarían en el punto de mira del Tribunal Penal Internacional, que ya emitió órdenes contra Netanyahu y Gallant el año pasado.',
    content: `<p>El ministro de Finanzas de Israel, <strong>Bezalel Smotrich</strong>, ha afirmado públicamente que la Fiscalía del <strong>Tribunal Penal Internacional (TPI)</strong> ha solicitado al tribunal una orden de arresto secreta contra su persona en relación con el conflicto en Gaza.</p>
<p>Smotrich no ha aportado documentación que respalde su afirmación, pero medios israelíes de referencia señalan que <strong>otros altos cargos del gobierno</strong> también podrían estar en el punto de mira del tribunal con sede en La Haya. El TPI no confirma ni desmiente la existencia de procedimientos judiciales bajo confidencialidad.</p>
<p>El tribunal ya emitió el año pasado órdenes de arresto contra el primer ministro <strong>Benjamin Netanyahu</strong> y el exministro de Defensa <strong>Yoav Gallant</strong> por presuntos crímenes de guerra en Gaza. Varios países europeos, incluidos Alemania y Francia, han indicado que deberían ejecutar dichas órdenes si los implicados pisan su territorio.</p>
<p>Israel no reconoce la jurisdicción del TPI y ha calificado sus actuaciones de políticamente motivadas. EE. UU., principal aliado de Israel, tampoco es miembro del tribunal y ha criticado sus procedimientos en relación con este conflicto.</p>`,
    image_url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Ucrania logra ganancias territoriales netas en 2026 mientras Rusia pierde entre 30.000 y 40.000 soldados al mes',
    summary: 'Un análisis de CNN concluye que Rusia no ha conseguido romper las líneas ucranianas en el este. La economía rusa muestra señales de agotamiento y Ucrania ha establecido una zona de control de drones de 10-15 km.',
    content: `<p>Un análisis publicado por CNN basado en imágenes satelitales, datos de inteligencia de código abierto y fuentes militares concluye que Rusia <strong>no ha logrado en 2026 romper las líneas defensivas ucranianas</strong> en el frente del este, y que Ucrania ha conseguido <strong>ganancias territoriales netas</strong> en varios sectores durante los últimos meses.</p>
<p>Las bajas rusas se estiman actualmente entre <strong>30.000 y 40.000 soldados al mes</strong>, una cifra que los analistas consideran insostenible a largo plazo para el mantenimiento de la capacidad ofensiva del ejército ruso. Las unidades rusas en el frente presentan crecientes problemas de moral, rotación y equipamiento.</p>
<p>Un factor determinante en la ecuación militar ha sido el despliegue ucraniano de una <strong>zona de control de drones</strong> de entre 10 y 15 kilómetros de profundidad a lo largo del frente, que impide cualquier concentración de tropas o vehículos rusos sin quedar expuesto a ataques aéreos inmediatos.</p>
<p>Paralelamente, la economía rusa muestra <strong>señales crecientes de agotamiento</strong>: la inflación supera el 15%, el rublo se deprecia y el presupuesto militar absorbe más del 40% del gasto público total, según estimaciones occidentales. Analistas advierten que esta combinación de factores podría inclinar la balanza del conflicto en los próximos meses.</p>`,
    image_url: 'https://images.unsplash.com/photo-1617634823655-7fd5fd2acb78?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Agencias europeas confirman que China entrenó en secreto a 200 soldados rusos en técnicas de guerra con drones',
    summary: 'El entrenamiento tuvo lugar en 2025. Algunos de esos soldados ya combaten en Ucrania. A cambio, militares chinos han recibido formación en Rusia en otras capacidades militares.',
    content: `<p>Agencias de inteligencia europeas han confirmado que China entrenó en secreto a aproximadamente <strong>200 soldados rusos</strong> durante 2025, con un enfoque específico en técnicas de <strong>guerra contramedios no tripulados</strong>, es decir, el combate, detección y neutralización de drones enemigos.</p>
<p>Según las fuentes consultadas, algunos de los militares rusos que recibieron este adiestramiento <strong>ya se encuentran desplegados en el frente ucraniano</strong>, donde la guerra de drones se ha convertido en uno de los factores más determinantes del conflicto. El entrenamiento habría incluido técnicas de guerra electrónica y el manejo de sistemas de interceptación específicos.</p>
<p>El acuerdo de cooperación no fue unilateral: en contrapartida, <strong>militares chinos han recibido formación en Rusia</strong> en otras áreas de capacidad militar, en el marco de la creciente asociación estratégica entre ambos países, reforzada desde la invasión rusa de Ucrania en 2022.</p>
<p>La revelación añade presión sobre los gobiernos occidentales para responder a lo que consideran una <strong>participación encubierta de China</strong> en el conflicto europeo, sin llegar a la implicación directa que podría justificar sanciones formales. Pekín ha negado cualquier tipo de apoyo militar a Rusia.</p>`,
    image_url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80',
    category_id: CAT.int,
  },
  {
    title: 'Un F-16 rumano de la OTAN derriba un dron ucraniano desviado sobre Estonia',
    summary: 'Ucrania pidió disculpas a los países bálticos y atribuyó la desviación a interferencias electrónicas rusas que habrían hackeado el sistema de navegación del dron. Fue derribado antes de alcanzar zonas habitadas.',
    content: `<p>Un caza <strong>F-16 de la Fuerza Aérea de Rumanía</strong>, en misión de vigilancia bajo el marco de la OTAN, derribó un dron de origen ucraniano que había penetrado en el espacio aéreo de <strong>Estonia</strong> y se dirigía hacia zonas con presencia de población civil, según informó el Mando Aliado de Operaciones Aéreas de la Alianza Atlántica.</p>
<p>El incidente se produjo durante operaciones militares ucranianas en la región fronteriza con Rusia. El dron perdió su trayectoria programada y cruzó la frontera estonia sin responder a los intentos de contacto e identificación de los controladores aéreos aliados.</p>
<p>Ucrania emitió una <strong>disculpa formal</strong> a Estonia y al conjunto de los países bálticos —Estonia, Letonia y Lituania— por la intrusión en su espacio aéreo soberano. Kyiv atribuye el incidente a <strong>interferencias electrónicas rusas</strong> que habrían hackeado o interferido en el sistema de navegación del dron, causando su desvío involuntario.</p>
<p>El episodio pone de manifiesto los riesgos colaterales de la guerra de drones para los países vecinos al conflicto y ha reabierto el debate dentro de la OTAN sobre los protocolos de actuación ante incursiones aéreas involuntarias en el espacio de los aliados.</p>`,
    image_url: 'https://images.unsplash.com/photo-1581474382952-f41e67565e07?w=1200&q=80',
    category_id: CAT.int,
  },

  // ─── ESPAÑA ───────────────────────────────────────────────────
  {
    title: 'Zapatero, imputado en el caso Plus Ultra: primer expresidente de la democracia española investigado por corrupción',
    summary: 'La Policía Nacional registró su despacho. La investigación apunta a una estructura de tráfico de influencias para obtener una comisión del 1% del rescate de 53 millones a Plus Ultra, canalizada a través de una sociedad en Dubái.',
    content: `<p>El expresidente del Gobierno <strong>José Luis Rodríguez Zapatero</strong> ha sido formalmente imputado por la Audiencia Nacional en el marco del <strong>caso Plus Ultra</strong>, convirtiéndose en el primer expresidente de la democracia española investigado en una causa penal por presunta corrupción. La Policía Nacional registró su despacho en el marco de la investigación.</p>
<p>Según los indicios recogidos en la causa, Zapatero habría liderado una <strong>estructura de tráfico de influencias</strong> vinculada al rescate público de <strong>53 millones de euros</strong> concedido a la aerolínea Plus Ultra durante la pandemia. La investigación apunta a que el expresidente habría actuado para facilitar el rescate con el fin de obtener una <strong>comisión del 1%</strong> del importe total, canalizada a través de una <strong>sociedad offshore radicada en Dubái</strong>.</p>
<p>Junto a Zapatero, también están investigadas tres empresas con presuntas vinculaciones al caso. El expresidente ha negado con rotundidad todas las acusaciones, calificándolas de persecución política, y ha anunciado que recurrirá la imputación.</p>
<p>La <strong>Audiencia Nacional retrasó seis días la notificación</strong> de la imputación para no interferir en el desarrollo de las elecciones autonómicas andaluzas. La decisión ha generado controversia jurídica y política sobre los criterios que deben regir los tiempos procesales en casos de alto perfil.</p>`,
    image_url: 'https://images.unsplash.com/photo-1575540219914-5e6c5db3ceab?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'La jueza concluye que la muerte del fundador de Mango no fue accidental y señala a su hijo como autor',
    summary: 'La magistrada detecta lesiones incompatibles con un resbalón y heridas en dirección ascendente. Jonathan Andic visitó el sendero en tres ocasiones previas y los mensajes analizados contradicen su versión sobre la relación con su padre.',
    content: `<p>La magistrada instructora que investiga la muerte de <strong>Isak Andic</strong>, fundador del grupo de moda Mango, ha concluido en un auto que existen indicios suficientes para descartar el accidente y sostener que el fallecimiento contó con la <strong>participación activa y premeditada</strong> de su hijo <strong>Jonathan Andic</strong>.</p>
<p>El informe forense revela <strong>lesiones incompatibles con un resbalón accidental</strong>: heridas en el lado derecho del cuerpo con trayectoria ascendente y ausencia total de <strong>marcas defensivas en las manos</strong>, que deberían haberse producido de forma natural en una caída. La jueza considera que estos hallazgos son difícilmente explicables sin una intervención activa de terceros.</p>
<p>La investigación también ha determinado que Jonathan Andic <strong>visitó el sendero en tres ocasiones</strong> durante los días previos a la excursión en que murió su padre, lo que la instructora interpreta como una posible conducta preparatoria. Los <strong>mensajes analizados</strong> por los peritos contradicen su afirmación de mantener una relación normalizada con Isak Andic.</p>
<p>La jueza destaca además el interés documentado del hijo por la <strong>herencia paterna</strong> y su malestar ante la intención de Isak Andic de crear una fundación y modificar su testamento en los meses previos a su muerte. Jonathan Andic niega cualquier responsabilidad en el fallecimiento de su padre.</p>`,
    image_url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'Elisa Mouliaá no comparece ante el juzgado como investigada; su abogado alega baja médica',
    summary: 'La actriz estaba citada por un presunto delito contra la salud pública relacionado con productos de su tienda de CBD con niveles de THC superiores a los permitidos. La jueza ha aplazado la declaración.',
    content: `<p>La actriz <strong>Elisa Mouliaá</strong> no compareció este miércoles ante el juzgado que la había citado en calidad de <strong>investigada</strong> por un presunto delito contra la salud pública. Su abogado alegó que la actriz se encuentra en situación de <strong>baja médica</strong> y no está en condiciones de prestar declaración en este momento.</p>
<p>La investigación se centra en productos vendidos a través de la tienda de <strong>CBD</strong> vinculada a Mouliaá, que según la acusación habrían superado los <strong>niveles legalmente permitidos de THC</strong>, el compuesto psicoactivo del cannabis. En España, los productos derivados del cáñamo solo son legales cuando el contenido de THC no supera el 0,2%.</p>
<p>La jueza instructora ha aceptado la justificación presentada por la defensa y ha <strong>aplazado la comparecencia</strong> hasta que la actriz se recupere y pueda acudir al juzgado. No se ha fijado todavía una nueva fecha para la citación.</p>
<p>Mouliaá, conocida por su trabajo en teatro y televisión, protagonizó meses atrás otra causa judicial de gran repercusión mediática. La actriz no ha realizado declaraciones públicas sobre esta nueva investigación.</p>`,
    image_url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'El Parlamento Europeo vota por segunda vez en un mes el levantamiento de la inmunidad de Álvise Pérez',
    summary: 'La medida responde a la investigación por financiación ilegal de Se Acabó la Fiesta, partido que habría recibido 100.000 euros de un empresario del sector cripto antes de las europeas de 2024.',
    content: `<p>El Pleno del <strong>Parlamento Europeo</strong> ha aprobado por segunda vez en menos de un mes el levantamiento de la inmunidad parlamentaria del eurodiputado <strong>Álvise Pérez</strong>, líder del partido español Se Acabó la Fiesta. La votación responde a una solicitud de las autoridades judiciales españolas en el marco de una investigación por presunta <strong>financiación ilegal</strong>.</p>
<p>La investigación gira en torno a un ingreso de <strong>100.000 euros</strong> que el partido habría recibido de un empresario del sector de las <strong>criptomonedas</strong> en el período previo a las elecciones europeas de junio de 2024. La fiscalía considera que este dinero podría haber financiado de forma irregular la campaña electoral del partido.</p>
<p>El primer levantamiento de inmunidad fue anulado por motivos procedimentales, lo que obligó a repetir el proceso. Con la segunda votación, queda allanado el camino para que la justicia española pueda continuar con las diligencias contra el eurodiputado sin que la protección que otorga su escaño europeo suponga un obstáculo procesal.</p>
<p>Álvise Pérez ha negado cualquier irregularidad y ha calificado el proceso como una persecución política orquestada por el establishment. Se Acabó la Fiesta obtuvo tres eurodiputados en las elecciones de 2024, convirtiéndose en una de las sorpresas del escrutinio.</p>`,
    image_url: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'La Conselleria valenciana propone 200 euros mensuales para el profesorado para desconvocar la huelga indefinida',
    summary: 'El incremento se distribuiría en tres tramos: 75 euros en 2026, 75 en 2027 y 50 en 2028. Los sindicatos no han aceptado la propuesta y la huelga continúa.',
    content: `<p>La <strong>Conselleria d'Educació de la Comunitat Valenciana</strong> ha presentado a los sindicatos una propuesta de mejora retributiva para el profesorado que incluye un incremento total de <strong>200 euros mensuales</strong>, distribuido en tres tramos a lo largo de los próximos tres años, como oferta para desconvocar la huelga indefinida que mantiene en paro al sector docente.</p>
<p>Según la propuesta, el profesorado recibiría <strong>75 euros adicionales al mes en 2026</strong>, otros <strong>75 euros en 2027</strong> y un último tramo de <strong>50 euros en 2028</strong>. La Conselleria argumenta que la medida supone un esfuerzo presupuestario significativo en el contexto actual de las finanzas autonómicas.</p>
<p>Los sindicatos docentes <strong>no han aceptado la oferta</strong>, considerándola insuficiente ante el deterioro del poder adquisitivo acumulado en los últimos años y en comparación con las retribuciones del profesorado en otras comunidades autónomas. La huelga indefinida continúa activa, con afectación en los centros educativos de toda la comunidad.</p>
<p>Las negociaciones seguirán abiertas en los próximos días. Los sindicatos exigen un incremento mayor y la resolución de otras demandas relacionadas con las condiciones laborales y la ratio de alumnos por aula.</p>`,
    image_url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'España, el único gran país europeo con monarquía donde más de la mitad preferiría una república',
    summary: 'Un estudio comparativo en los siete grandes países europeos con monarquía parlamentaria revela que España es la excepción: es el único donde la mayoría de la población expresa insatisfacción con la institución monárquica.',
    content: `<p>Un estudio comparativo realizado entre los <strong>siete grandes países europeos con monarquía parlamentaria</strong> —España, Reino Unido, Países Bajos, Bélgica, Suecia, Noruega y Dinamarca— revela que España es el <strong>único país de la muestra</strong> donde más de la mitad de la población manifiesta insatisfacción con la institución monárquica y declara preferir un sistema republicano.</p>
<p>En el resto de los países analizados, los índices de apoyo a la monarquía son mayoritarios o han experimentado una recuperación en los últimos años. El caso más llamativo es el del <strong>Reino Unido</strong>, donde los niveles de adhesión a la institución se han estabilizado tras las turbulencias de los últimos años relacionadas con el príncipe Andrés y el príncipe Harry.</p>
<p>En España, la erosión del respaldo a la monarquía se ha acelerado en la última década, especialmente tras los casos judiciales que afectaron al rey emérito <strong>Juan Carlos I</strong> y la percepción de falta de transparencia en las cuentas de la Casa Real. El rey Felipe VI mantiene índices de valoración personal superiores a los de la institución en conjunto.</p>
<p>El estudio, elaborado por un consorcio de institutos demoscópicos europeos, no incluye preguntas sobre la forma concreta que debería adoptar una eventual república, donde la opinión pública española muestra divisiones significativas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=1200&q=80',
    category_id: CAT.esp,
  },
  {
    title: 'Entradas de cine a 2 euros para mayores de 65 años todos los martes desde julio de 2026',
    summary: 'El gobierno destinará 11,5 millones de euros a la medida, que estará vigente hasta junio de 2027. No todos los cines participarán, por lo que se recomienda consultar la disponibilidad en cada sala.',
    content: `<p>El gobierno español ha anunciado una nueva medida de apoyo al cine y a los mayores: a partir de <strong>julio de 2026</strong> y hasta <strong>junio de 2027</strong>, los ciudadanos mayores de <strong>65 años</strong> podrán acceder al cine por solo <strong>2 euros</strong> todos los martes, en los establecimientos adheridos a la iniciativa.</p>
<p>El ejecutivo destinará <strong>11,5 millones de euros</strong> al programa, que será gestionado a través del Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA). Los cines adheridos recibirán una compensación económica por la diferencia entre el precio reducido y su tarifa habitual.</p>
<p>Sin embargo, la participación no es obligatoria para todas las salas, por lo que <strong>no todos los cines del país se sumarán a la iniciativa</strong>. El ministerio ha habilitado un buscador en línea donde los interesados podrán consultar qué establecimientos de su localidad están acogidos al programa antes de desplazarse.</p>
<p>La medida ha sido recibida positivamente por las asociaciones de mayores y por los exhibidores cinematográficos, que ven en ella una oportunidad para recuperar público en un día de la semana históricamente flojo en afluencia. Las críticas apuntan a que la iniciativa debería haberse extendido a otros colectivos con dificultades económicas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Mourinho regresa al Real Madrid: el acuerdo está cerrado y el anuncio es inminente',
    summary: 'José Mourinho vuelve al banquillo del Real Madrid una vez concluido el periodo electoral del club. Los puntos esenciales del contrato —duración y salario— estarían ya acordados.',
    content: `<p><strong>José Mourinho</strong> regresará al banquillo del <strong>Real Madrid</strong> en lo que supone uno de los regresos más esperados y comentados del fútbol europeo de los últimos años. Según fuentes cercanas a las negociaciones, el acuerdo está <strong>cerrado en sus puntos esenciales</strong> —duración del contrato y salario— y el anuncio oficial se producirá en los próximos días, una vez finalizado el período electoral del club blanco.</p>
<p>El técnico portugués, de 63 años, dirigió al Real Madrid entre 2010 y 2013, período en el que conquistó una Liga española —la del récord de 100 puntos, en la temporada 2011-12— y una Copa del Rey. Su segunda etapa en el club arrancará en una coyuntura distinta, con el equipo en plena renovación generacional tras la salida de varias figuras históricas.</p>
<p>El regreso de Mourinho ha generado reacciones encontradas entre la afición madridista: mientras una parte celebra el retorno de un técnico con probada capacidad para ganar en las grandes citas, otra sector recuerda las tensiones que marcaron su primera etapa, especialmente en sus relaciones con algunos jugadores y con el cuerpo técnico del primer equipo.</p>
<p>Los detalles sobre el cuerpo técnico que acompañará a Mourinho y sobre los primeros movimientos en el mercado de fichajes se irán conociendo en las próximas semanas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Carlos Alcaraz se pierde Wimbledon y toda la gira de hierba por lesión de muñeca',
    summary: 'El tenista murciano tampoco disputará el torneo de Queen\'s. La lesión fue sufrida en el Conde de Godó en abril. Se espera su regreso en el Masters 1000 de Montreal.',
    content: `<p>El tenista español <strong>Carlos Alcaraz</strong> no podrá participar en <strong>Wimbledon</strong> ni en ninguno de los torneos de la gira de hierba de esta temporada, según confirmó su equipo en un comunicado. La causa es la <strong>lesión de muñeca</strong> que sufrió durante su participación en el Torneo Conde de Godó de Barcelona, en abril.</p>
<p>Alcaraz, bicampeón del torneo londinense en 2023 y 2024, era uno de los grandes favoritos para defender su título en la catedral del tenis. Su ausencia supone un duro golpe para la competición y para sus aspiraciones de acumular más Grand Slams en hierba, superficie en la que ha demostrado un dominio excepcional.</p>
<p>El murciano tampoco disputará el <strong>torneo de Queen's</strong>, tradicional preparatorio de Wimbledon y uno de sus preferidos en el circuito. Los médicos han recomendado un periodo de reposo y recuperación para evitar que la lesión se cronifique.</p>
<p>Según su equipo, el objetivo es que Alcaraz pueda <strong>reincorporarse a la competición en el Masters 1000 de Montreal</strong>, previsto para agosto. Su posición en el ranking mundial no se verá gravemente afectada gracias al calendario de puntos en juego durante su ausencia.</p>`,
    image_url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'El Arsenal gana su primera Premier League en 22 años tras el empate del Manchester City',
    summary: 'El City igualó 1-1 ante el Bournemouth, lo que entregó matemáticamente el título a los gunners. Pep Guardiola confirmó que no seguirá al frente del City al término de la temporada.',
    content: `<p>El <strong>Arsenal Football Club</strong> ha conquistado la <strong>Premier League 2025-26</strong>, su primer título de liga en <strong>22 años</strong>, gracias al empate del <strong>Manchester City</strong> a 1-1 ante el Bournemouth, resultado que entregó matemáticamente el campeonato a los londinenses sin necesidad de que ellos disputaran su último partido.</p>
<p>La última vez que el Arsenal había levantado el título de la liga inglesa fue en la temporada 2003-04, la del histórico equipo de Arsène Wenger que completó la campaña sin perder un solo partido. Dos décadas después, el equipo dirigido por Mikel Arteta consuma un proyecto construido con paciencia y criterio sobre una plantilla joven pero ya con experiencia en competir al máximo nivel.</p>
<p>Las escenas de celebración en el Emirates Stadium y en las calles del norte de Londres fueron de euforia desbordante. Los jugadores y el cuerpo técnico recibieron la noticia durante el descanso de su propio partido, desencadenando una fiesta en el vestuario que se trasladó después al terreno de juego.</p>
<p>Por su parte, <strong>Pep Guardiola</strong> confirmó en la rueda de prensa posterior al partido que <strong>no continuará como entrenador del Manchester City</strong> al término de esta temporada, poniendo fin a un ciclo de nueve años en el que el técnico catalán ganó seis ligas, dos Champions y numerosos títulos nacionales.</p>`,
    image_url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'El Barça de baloncesto incorpora a Mike James, máximo anotador histórico de la Euroliga',
    summary: 'El base estadounidense de 35 años llega al FC Barcelona procedente de su última etapa europea. Es el jugador que más puntos ha anotado en la historia de la máxima competición europea de clubes.',
    content: `<p>El <strong>FC Barcelona de baloncesto</strong> ha cerrado el fichaje de <strong>Mike James</strong>, base estadounidense de 35 años y <strong>máximo anotador histórico de la Euroliga</strong>. El jugador, uno de los más talentosos y mediáticos del baloncesto europeo de la última década, llega al Palau Blaugrana en busca de los títulos que no ha podido conquistar en sus etapas anteriores.</p>
<p>James, conocido por su explosividad, su capacidad anotadora y su enorme confianza en sí mismo, ostenta el récord de puntos anotados en la historia de la Euroliga, superando a leyendas del baloncesto continental. Su llegada al Barcelona refuerza significativamente la dirección del juego y el potencial ofensivo del equipo.</p>
<p>El base ha militado en varios equipos de la élite europea a lo largo de su carrera, incluyendo etapas en el CSKA de Moscú, el Mónaco y el Panathinaikos. En todas ellas dejó estadísticas y actuaciones memorables, aunque sin llegar a conquistar la Euroliga.</p>
<p>Su incorporación al Barcelona se produce en un momento en que el club catalán busca reforzar su proyecto para competir por el máximo título continental. La presentación oficial está prevista para los próximos días.</p>`,
    image_url: 'https://images.unsplash.com/photo-1546519638405-a3f29e30a5de?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Portugal convoca cuatro porteros para el Mundial 2026 y Cristiano Ronaldo disputará su sexto torneo',
    summary: 'El seleccionador justifica la inusual decisión por las altas temperaturas y los cambios de huso horario previstos durante la competición que se disputará en Estados Unidos, Canadá y México.',
    content: `<p>La selección portuguesa ha publicado su convocatoria para el <strong>Mundial 2026</strong>, que se disputará entre Estados Unidos, Canadá y México, con una decisión que ha llamado la atención de los aficionados y analistas: la inclusión de <strong>cuatro porteros</strong> en la lista, un número inusualmente alto para una convocatoria mundialista.</p>
<p>El seleccionador justificó la medida apelando a las particulares condiciones del torneo: las <strong>altas temperaturas</strong> previstas en varios de los estadios, especialmente los situados en ciudades del sur de Estados Unidos y México, y los <strong>significativos cambios de huso horario</strong> que deberán gestionar los jugadores durante el torneo podrían generar un desgaste superior al habitual, haciendo aconsejable contar con una mayor cobertura en la posición de portero.</p>
<p><strong>Cristiano Ronaldo</strong>, de 41 años, está incluido en la convocatoria y disputará su <strong>sexto Mundial</strong>, convirtiéndose en uno de los escasos futbolistas en la historia en alcanzar esa cifra. El astro portugués mantiene un rendimiento notable en la liga saudí y sigue siendo considerado una pieza clave del ataque luso.</p>
<p>Portugal llega al torneo con una plantilla equilibrada entre veteranos de referencia y una nueva generación de jugadores que ya han demostrado su valía en las grandes ligas europeas.</p>`,
    image_url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'Un crowdfunding salva a un aficionado del Rayo vallecano de 72 años estafado para ir a la final europea',
    summary: 'El hincha y su hijo pagaron por un viaje organizado a Leipzig que resultó ser una estafa. Conocida su historia, una recaudación popular reunió más de 1.000 euros en pocas horas para que puedan asistir al partido.',
    content: `<p>La historia de solidaridad de la semana en el fútbol español tiene como protagonista a un aficionado del <strong>Rayo Vallecano</strong> de 72 años y a su hijo, víctimas de una estafa al contratar un viaje organizado para asistir a la <strong>final europea</strong> del club madrileño en Leipzig. El intermediario que les vendió el paquete desapareció con el dinero sin entregar los billetes ni el alojamiento.</p>
<p>Cuando la historia trascendió a través de las redes sociales y los medios deportivos, la respuesta de la afición y de personas anónimas fue inmediata. En pocas horas, una <strong>campaña de crowdfunding</strong> recaudó más de <strong>1.000 euros</strong>, suficientes para costear los billetes de avión, el alojamiento y los gastos del viaje a la ciudad alemana.</p>
<p>El Rayo Vallecano, club histórico del popular barrio de Vallecas en Madrid, atraviesa uno de los momentos más gloriosos de su historia reciente al clasificarse para una final continental. Para muchos aficionados históricos del club, la posibilidad de vivir ese momento en directo tiene un valor que va mucho más allá del resultado deportivo.</p>
<p>El aficionado y su hijo confirmaron que viajarán a Leipzig para presenciar el partido. La historia ha emocionado a miles de personas dentro y fuera del mundo del fútbol.</p>`,
    image_url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80',
    category_id: CAT.dep,
  },
  {
    title: 'El árbitro debe intervenir para separar a Pedro Martínez y Rey Sakamoto tras un partido en Roland Garros',
    summary: 'Una discusión entre el tenista español y su rival japonés al término del encuentro obligó al juez de silla a bajar de la silla e interponer para evitar que el altercado fuera a más.',
    content: `<p>El torneo de <strong>Roland Garros 2026</strong> ha vivido un incidente inusual protagonizado por el tenista español <strong>Pedro Martínez</strong> y el japonés <strong>Rey Sakamoto</strong> al término de su encuentro en la pista de tierra batida parisina. Una discusión acalorada entre ambos jugadores obligó al <strong>juez de silla a abandonar su posición</strong> e intervenir físicamente para separarlos.</p>
<p>El altercado se produjo después de que el partido concluyera con tensión acumulada entre ambos tenistas. Según relataron los testigos presentes en la pista, los jugadores intercambiaron palabras en el momento de saludarse en la red, y la discusión fue escalando hasta que el árbitro consideró necesario intervenir para evitar que el enfrentamiento verbal derivara en algo de mayor gravedad.</p>
<p>Ninguno de los dos tenistas ha ofrecido declaraciones públicas detalladas sobre el origen o el contenido de la discusión. La organización del torneo ha indicado que analizará las imágenes del incidente antes de pronunciarse sobre posibles sanciones.</p>
<p>El episodio ha generado debate entre los aficionados y los expertos sobre los límites de la conducta deportiva y los mecanismos de control disponibles para los árbitros en el tenis profesional ante situaciones de conflicto entre jugadores.</p>`,
    image_url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1200&q=80',
    category_id: CAT.dep,
  },
]

async function main() {
  console.log(`Insertando ${articles.length} artículos...`)
  let ok = 0
  for (const a of articles) {
    const baseSlug = slugify(a.title, { lower: true, strict: true, locale: 'es' }).slice(0, 80)
    const slug = `${baseSlug}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    try {
      await pool.query(
        `INSERT INTO articles (title, slug, summary, content, image_url, category_id, author, published_at, is_featured)
         VALUES (?, ?, ?, ?, ?, ?, 'Redacción', ?, 0)`,
        [a.title, slug, a.summary, a.content, a.image_url, a.category_id, DATE]
      )
      console.log(`  ✅ ${a.title}`)
      ok++
    } catch (e) {
      console.error(`  ❌ ${a.title}: ${e.message}`)
    }
  }
  console.log(`\nListo: ${ok}/${articles.length} artículos insertados.`)
  await pool.end()
}

main().catch(err => { console.error(err); process.exit(1) })
