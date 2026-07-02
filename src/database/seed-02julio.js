require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-07-02 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'Suiza pone en marcha con éxito la primera planta solar ferroviaria del mundo entre las vías del tren',
    summary: 'Tras un año de funcionamiento, el proyecto suizo que instala paneles solares directamente entre las vías ha demostrado ser seguro y eficiente, y ya despierta el interés de Francia, Italia y varios países asiáticos.',
    content: `<p>Suiza ha completado con éxito la primera planta solar ferroviaria del mundo, un sistema que instala paneles fotovoltaicos directamente en el espacio entre las vías del tren para aprovechar terrenos ya ocupados por infraestructura ferroviaria sin necesidad de suelo adicional.</p>
<p>Tras un año en funcionamiento, el proyecto ha demostrado ser seguro para la circulación de los trenes y eficiente en la generación de energía. Los paneles están diseñados para poder retirarse con facilidad cuando es necesario realizar labores de mantenimiento en las vías, lo que evita interferencias con las operaciones ferroviarias habituales.</p>
<p>El resultado ha despertado el interés de otros países europeos y asiáticos, entre ellos Francia e Italia, que estudian replicar el modelo en sus propias redes ferroviarias como una vía para aumentar la producción de energía renovable sin competir por el uso del suelo con otras actividades.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Se filtran casi por completo las especificaciones de las Samsung Galaxy Glasses',
    summary: 'Las nuevas gafas inteligentes de Samsung incorporarán un panel táctil en la patilla derecha, un botón físico dedicado a la cámara y luces LED tanto interiores como exteriores, según las últimas filtraciones.',
    content: `<p>Una filtración prácticamente completa ha revelado el diseño y las principales características de las Samsung Galaxy Glasses, las gafas inteligentes que prepara el fabricante surcoreano. El dispositivo incorporará un panel táctil ubicado en la patilla derecha para controlar sus funciones, además de un botón físico dedicado en exclusiva a la cámara integrada.</p>
<p>Las gafas también contarán con indicadores LED tanto en el exterior como en el interior de la montura, un elemento habitual en este tipo de dispositivos para señalar a las personas alrededor cuándo se está grabando o realizando una fotografía.</p>
<p>Samsung no ha confirmado todavía una fecha de lanzamiento ni un precio oficial, por lo que las especificaciones filtradas podrían sufrir cambios antes de la presentación definitiva del producto.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Microsoft prueba en Windows 11 una barra de tareas más compacta y personalizable',
    summary: 'El canal experimental de Windows Insider incorpora la posibilidad de reducir el tamaño de la barra de tareas sin recurrir a programas externos, y se suma a otra novedad reciente que permite anclarla a cualquier borde de la pantalla.',
    content: `<p>Microsoft está probando en el canal experimental de Windows Insider una barra de tareas más pequeña y compacta para Windows 11, junto con la posibilidad de modificar su tamaño sin necesidad de trucos ni herramientas externas, algo que hasta ahora requería el uso de aplicaciones de terceros.</p>
<p>La novedad se suma a otra función reciente en pruebas: la posibilidad de mover la barra de tareas a cualquier borde de la pantalla, ya sea izquierda, derecha, arriba o abajo, una opción que existía en Windows 10 y que había desaparecido con la llegada de Windows 11.</p>
<p>Con estos cambios, Microsoft busca recuperar parte de la flexibilidad de personalización que los usuarios reclamaban desde el lanzamiento de Windows 11, aunque no se ha confirmado todavía cuándo llegarán estas funciones a la versión estable del sistema operativo.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Anthropic restringe el acceso a las capacidades ampliadas de Claude a usuarios con identidad verificada',
    summary: 'Fable 5 y las nuevas funciones de Claude, antes limitadas, ya están disponibles, pero solo para usuarios que verifiquen su identidad y a través de un sistema de créditos de consumo.',
    content: `<p>Anthropic ha ampliado el acceso a Fable 5 y a otras capacidades de Claude que hasta ahora se encontraban restringidas, aunque con una condición: solo estarán disponibles para los usuarios que verifiquen su identidad de forma oficial.</p>
<p>El acceso, además, funcionará mediante un sistema de créditos de consumo, lo que limita el uso intensivo de estas funciones frente al resto del catálogo de la compañía. La medida se enmarca en las políticas de seguridad que las grandes empresas de inteligencia artificial han ido reforzando en los últimos meses ante el uso de estas herramientas para fines potencialmente sensibles.</p>
<p>Anthropic no ha detallado el procedimiento completo de verificación ni el volumen de créditos disponible para cada usuario verificado.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Cinder City se convierte en el primer videojuego que recomienda 64 GB de RAM',
    summary: 'El nuevo título eleva de forma notable el listón de los requisitos recomendados, en un momento en el que los precios de la memoria RAM están al alza.',
    content: `<p>El videojuego Cinder City ha marcado un hito técnico al convertirse en el primer título que exige 64 GB de memoria RAM como requisito recomendado, muy por encima de los 16 o 32 GB habituales en los grandes lanzamientos actuales.</p>
<p>La exigencia llega en un momento especialmente delicado para los precios de la memoria RAM, que han experimentado subidas notables en los últimos meses debido a la demanda global de componentes para infraestructuras de inteligencia artificial, lo que encarece de forma considerable el coste de actualizar un equipo para jugar en condiciones óptimas.</p>
<p>Los desarrolladores no han explicado en detalle qué elementos técnicos del juego justifican un requisito tan elevado, aunque se espera que motores gráficos cada vez más exigentes sigan empujando al alza los requisitos mínimos y recomendados de los próximos lanzamientos.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Sony anuncia el fin de los videojuegos en formato físico para PlayStation a partir de 2027',
    summary: 'La compañía japonesa dejará de lanzar juegos físicos para su consola desde enero de 2027, una decisión que justifica por el creciente predominio del formato digital entre los consumidores.',
    content: `<p>Sony ha anunciado que dejará de lanzar videojuegos en formato físico para PlayStation a partir de enero de 2027, poniendo fin a más de dos décadas de distribución en soporte tradicional para su plataforma.</p>
<p>La compañía japonesa explica que la decisión responde a la evolución de las preferencias de los consumidores, que cada vez optan en mayor proporción por el formato digital frente a la compra de copias físicas, una tendencia que se ha acelerado en los últimos años en toda la industria del videojuego.</p>
<p>La medida ha reabierto el debate sobre el precio de los juegos digitales, ya que parte de los usuarios reclama que la desaparición de los costes de fabricación y distribución física se traduzca en una reducción del precio final de los títulos.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Sony trabaja ya en la PlayStation 6 de sobremesa y en una versión portátil',
    summary: 'La sobremesa llegaría entre 2027 y 2028, mientras que la compañía japonesa mantiene en desarrollo, con pocos detalles conocidos por ahora, una PlayStation 6 portátil.',
    content: `<p>Sony estaría trabajando de forma simultánea en dos versiones de su próxima videoconsola: una PlayStation 6 de sobremesa, cuyo lanzamiento se situaría entre 2027 y 2028, y una PlayStation 6 portátil de la que todavía se conocen muy pocos detalles técnicos.</p>
<p>La compañía no ha confirmado oficialmente ninguna de las dos fechas ni especificaciones, por lo que la información disponible procede por ahora de fuentes del sector y de filtraciones no verificadas de manera oficial por el fabricante japonés.</p>
<p>De confirmarse, la apuesta por una versión portátil supondría un movimiento relevante para Sony en un segmento dominado en los últimos años por la Nintendo Switch y por dispositivos híbridos de terceros fabricantes.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Sony confirma el calendario de cierre de las tiendas digitales de PS3 y PS Vita',
    summary: 'El cierre se producirá de forma escalonada según la región: en agosto de 2026 en México, Honduras y Nicaragua, a finales de año en el resto de Latinoamérica y Oriente Próximo, y en julio de 2027 para el resto del mundo.',
    content: `<p>Sony ha confirmado el cierre definitivo de las tiendas digitales de PlayStation 3 y PlayStation Vita, que se producirá de forma escalonada según la región. En México, Honduras y Nicaragua el cierre llegará en agosto de 2026, mientras que en el resto de Latinoamérica y Oriente Próximo se producirá a finales de ese mismo año.</p>
<p>Para el resto del mundo, las tiendas de ambas plataformas cerrarán en julio de 2027. A partir de esas fechas ya no será posible adquirir nuevos juegos digitales para PS3 o PS Vita, aunque los títulos comprados previamente podrán seguir descargándose con normalidad.</p>
<p>La decisión se enmarca en la progresiva retirada de soporte de Sony a sus plataformas más antiguas, en línea con el fin del formato físico anunciado para el resto de la gama PlayStation.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'La Velada del Año 6 reducirá las actuaciones musicales para dar más protagonismo a los combates',
    summary: 'Ibai Llanos ha confirmado que el evento contará con cinco artistas principales, entre ellos Yandel, Juanes, Bad Gyal y Anuel AA, mientras aumenta el peso de los combates de boxeo.',
    content: `<p>La Velada del Año 6, el evento de boxeo entre creadores de contenido organizado por Ibai Llanos, tendrá este año menos actuaciones musicales que en ediciones anteriores para dar mayor protagonismo a los combates, que se convierten en el eje central de la velada.</p>
<p>El cartel musical contará con cinco artistas principales: Yandel, Juanes, Lucho RK, La Pantera, Bad Gyal y Anuel AA, una selección que combina distintos géneros dentro de la música urbana y latina.</p>
<p>El evento, que se ha consolidado como una de las citas más seguidas del entretenimiento digital en español, volverá a reunir a creadores de contenido de distintos países en una nueva edición de sus combates de boxeo amateur.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'PS Plus Essential incorporará Call of Duty: Modern Warfare III, Crow Country y For the King II en agosto',
    summary: 'Sony ha confirmado los tres títulos que estarán disponibles para los suscriptores del nivel Essential de PlayStation Plus a partir del 3 de agosto de 2026.',
    content: `<p>Sony ha anunciado los tres videojuegos que se incorporarán al catálogo de PlayStation Plus Essential a partir del 3 de agosto de 2026: Call of Duty: Modern Warfare III (2023), el juego de terror Crow Country y la secuela de rol táctico For the King II.</p>
<p>La selección combina un gran lanzamiento de acción con dos propuestas de menor escala pero bien valoradas por la crítica, siguiendo la estrategia habitual de Sony de mezclar títulos de distinto perfil en cada tanda mensual de PlayStation Plus.</p>
<p>Los suscriptores del nivel Essential podrán añadir los tres juegos a su biblioteca de forma gratuita mientras mantengan activa su suscripción, en la fecha en que sustituyan a los títulos disponibles durante el mes de julio.</p>`,
    image_url: null, category_id: CAT.tec,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'El avión espacial chino Shenlong libera un nuevo objeto de origen desconocido en órbita',
    summary: 'Desde 2022, esta aeronave reutilizable vinculada a uno de los programas espaciales más secretos de China ha liberado al menos nueve objetos misteriosos; el más reciente no coincide con ningún satélite registrado.',
    content: `<p>El avión espacial reutilizable chino Shenlong, uno de los proyectos más secretos del programa espacial de China, ha vuelto a la órbita terrestre y ha liberado un nuevo objeto de origen desconocido, según el seguimiento realizado por observadores espaciales independientes.</p>
<p>Desde 2022, la aeronave ha liberado al menos nueve objetos misteriosos en el espacio. El nuevo objeto no coincide con ningún satélite o fragmento registrado en los catálogos internacionales, y los expertos consideran que podría tratarse de un pequeño satélite de tipo cubesat, aunque no existe confirmación oficial por parte de las autoridades chinas.</p>
<p>China mantiene un notable hermetismo sobre los detalles técnicos y los objetivos del programa Shenlong, lo que alimenta la especulación internacional sobre la naturaleza militar o experimental de los objetos que libera durante sus misiones orbitales.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'Astrónomos calculan por primera vez cuántos satélites puede albergar la Tierra sin dañar la observación astronómica',
    summary: 'El Observatorio Europeo Austral sitúa el límite en unos 100.000 satélites tenues y no visibles a simple vista, una cifra muy inferior a los 1,7 millones que planean lanzar las megaconstelaciones en construcción.',
    content: `<p>Astrónomos del Observatorio Europeo Austral han calculado por primera vez el límite máximo de satélites que la Tierra puede albergar sin comprometer gravemente la observación astronómica desde tierra, y lo sitúan en unos 100.000 satélites, siempre que sean muy tenues y no visibles a simple vista.</p>
<p>La cifra contrasta con los planes de las grandes megaconstelaciones en marcha, impulsadas por compañías como SpaceX, Amazon y otras empresas del sector, que en conjunto proyectan poner en órbita hasta 1,7 millones de satélites en los próximos años.</p>
<p>Los investigadores advierten de que, de mantenerse ese ritmo de lanzamientos, el riesgo de colisiones aumentará de forma significativa, con el consiguiente peligro de generar una reacción en cadena de fragmentos que dificultaría tanto la observación astronómica como las futuras operaciones espaciales.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'Un estudio cuestiona el origen tradicional del agujero de la capa de ozono',
    summary: 'La nueva investigación sitúa su comienzo en 1957 sobre la estratosfera tropical y no en los años setenta sobre la Antártida, y señala al tetracloruro de carbono como principal responsable en lugar de los CFC.',
    content: `<p>Un nuevo estudio científico cuestiona por completo la historia tradicional del agujero de la capa de ozono. Según la investigación, el fenómeno no nació en los años setenta sobre la Antártida, como se ha enseñado durante décadas, sino que comenzó ya en 1957 en la estratosfera de los trópicos.</p>
<p>El estudio también atribuye la responsabilidad principal a un compuesto distinto de los tradicionalmente señalados: no serían los clorofluorocarbonos (CFC) presentes en aerosoles, sino el tetracloruro de carbono, un disolvente industrial muy utilizado en los años treinta y que en la actualidad apenas se emplea.</p>
<p>De confirmarse, estos hallazgos obligarían a revisar buena parte de la cronología y los modelos científicos sobre la evolución histórica de la capa de ozono, aunque la comunidad científica internacional deberá someter la investigación a un proceso de revisión y contraste antes de aceptar formalmente sus conclusiones.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'Arqueólogos hallan en Francia una vasija con decenas de miles de monedas romanas',
    summary: 'El hallazgo, con cerca de un siglo de antigüedad en el momento en que fue enterrado, constituye uno de los mayores tesoros monetarios de época romana encontrados en el país en los últimos años.',
    content: `<p>Un equipo de arqueólogos ha descubierto en Francia una vasija que contenía decenas de miles de monedas romanas, con una antigüedad estimada de cerca de un siglo respecto al momento en que fue enterrada.</p>
<p>El hallazgo, uno de los mayores tesoros monetarios de época romana localizados en el país en los últimos años, permitirá a los investigadores estudiar con detalle las prácticas de acuñación y circulación de moneda en la Galia romana, así como el contexto histórico en el que el conjunto fue ocultado.</p>
<p>Los especialistas ya trabajan en la catalogación de las piezas, cuyo estado de conservación varía notablemente en función del material y de las condiciones del yacimiento donde permanecieron enterradas durante siglos.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── CINE Y TELEVISIÓN / CULTURA ───────────────────────────────
  {
    title: 'José Mota debutará como director de un largometraje de ficción sobre la Guerra Civil española',
    summary: 'La película, que se estrenará en cines el 16 de octubre, es una comedia con fuerte carga emocional que arranca en 1905 y muestra cómo el conflicto transforma la vida de sus personajes.',
    content: `<p>El humorista José Mota dirigirá por primera vez un largometraje de ficción, que llegará a las salas de cine el próximo 16 de octubre. Se trata de una comedia con una fuerte carga emocional y reflexiva ambientada en el contexto de la Guerra Civil española.</p>
<p>La historia arranca en 1905 y muestra cómo el conflicto transforma la vida de sus protagonistas a lo largo de las décadas, combinando el tono humorístico habitual en la trayectoria de Mota con un tratamiento más dramático propio del cine histórico.</p>
<p>El proyecto supone un giro relevante en la carrera del humorista, conocido sobre todo por su trabajo televisivo, y despierta expectación por ver cómo aborda un tema histórico de tanto peso en la memoria colectiva española desde una óptica de comedia.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: "El diablo viste de Prada 2 llegará a Disney+ el 29 de julio",
    summary: 'Quienes no hayan podido ver en el cine la secuela del clásico de 2006 podrán disfrutarla en la plataforma de streaming a partir de finales de mes.',
    content: `<p>La secuela de "El diablo viste de Prada", uno de los grandes estrenos cinematográficos del año, llegará a Disney+ el próximo 29 de julio, poniendo fin a la espera de quienes no hayan podido verla en las salas de cine.</p>
<p>La película retoma el universo de la revista de moda ficticia Runway casi dos décadas después del estreno original de 2006, con parte del reparto original de vuelta a sus papeles y una trama que actualiza el retrato de la industria de la moda a la era digital.</p>
<p>Su llegada a la plataforma de streaming permitirá ampliar de forma notable la audiencia de la cinta, que había mantenido durante su paso por cines un estreno limitado en formato exclusivo de salas.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'Muere a los 74 años Victor Willis, líder y voz principal de Village People',
    summary: 'El cantante, que interpretaba al policía del grupo, falleció tras una enfermedad breve pero agresiva. Abandonó la banda en 1980 y libró después una larga batalla legal para recuperar los derechos de autor de temas como Y.M.C.A., que finalmente obtuvo en 2015.',
    content: `<p>Victor Willis, líder y voz principal de Village People, ha fallecido a los 74 años tras una enfermedad breve pero agresiva. En la banda, Willis representaba al personaje del policía, uno de los roles más icónicos del grupo disco formado a finales de los años setenta.</p>
<p>El cantante abandonó la formación en 1980 y se enfrentó posteriormente a problemas de adicción y a una larga batalla legal para recuperar los derechos de autor de las canciones del grupo. En 2015 logró finalmente obtener el 50% de la propiedad de trece temas, entre ellos el icónico "Y.M.C.A.", uno de los himnos más bailados de la historia de la música popular.</p>
<p>Willis regresó al grupo en 2017 y continuó actuando con Village People hasta los últimos años, consolidándose como una de las voces más reconocibles de la música disco de los años setenta y ochenta.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'Fallece Manuel Arjona, integrante original de Locomía, a los 58 años',
    summary: 'El músico, uno de los miembros fundadores del icónico grupo español de los años ochenta y noventa, ha muerto en Viladecans, Barcelona.',
    content: `<p>Manuel Arjona, uno de los integrantes originales del icónico grupo español Locomía, ha fallecido a los 58 años en Viladecans, Barcelona. La noticia ha generado numerosas muestras de cariño de fans y compañeros de profesión que recordaron su legado en la música española de las últimas décadas del siglo XX.</p>
<p>Locomía se convirtió en un fenómeno de masas en España durante finales de los años ochenta y principios de los noventa, con una estética extravagante y un estilo musical que combinaba el pop con la música electrónica de baile, alcanzando gran popularidad también en otros países europeos y en Latinoamérica.</p>
<p>Arjona formó parte de la formación original del grupo desde sus inicios, siendo testigo directo del ascenso meteórico de la banda y de su posterior evolución a lo largo de los años.</p>`,
    image_url: null, category_id: CAT.cul,
  },

  // ─── ECONOMÍA Y CRIPTOMONEDAS ───────────────────────────────────
  {
    title: 'Las bolsas abren con caídas mientras el bitcoin sube hasta los 59.873 dólares',
    summary: 'El S&P 500 retrocede hasta los 7.483 puntos y el Ibex 35 cierra en rojo, mientras las criptomonedas, el oro y la plata suben y el petróleo se mantiene relajado; el euro cotiza en 1,137 dólares.',
    content: `<p>Los mercados financieros abren la jornada de este jueves con tono mixto. El S&P 500 retrocede hasta los 7.483 puntos y el Ibex 35 también cierra en terreno negativo, en una sesión marcada por la cautela entre los inversores.</p>
<p>En el mercado de criptomonedas, el bitcoin sube hasta los 59.873 dólares, mientras que el oro y la plata también avanzan, esta última hasta los 71,53 dólares. El petróleo se mantiene relajado en sus niveles recientes.</p>
<p>El euro cotiza en 1,137 dólares, un nivel más bajo que en sesiones anteriores, en una jornada en la que los movimientos entre los distintos activos no reflejan una tendencia única y clara para los mercados globales.</p>`,
    image_url: null, category_id: CAT.eco,
  },
  {
    title: 'Francia elimina su tasa de 2 euros a los paquetes baratos procedentes de fuera de la UE tras un fracaso recaudatorio',
    summary: 'La medida, pensada para frenar las compras en plataformas como Shein, Temu y AliExpress, solo recaudó 2,3 millones de euros al mes frente a los 33 millones previstos, ya que las plataformas chinas esquivaron la tasa desviando los envíos a través de otros países de la UE.',
    content: `<p>Francia ha eliminado su tasa nacional de 2 euros aplicada a los paquetes de menos de 150 dólares procedentes de fuera de la Unión Europea, después de que la medida resultara ineficaz y perjudicial para su propia economía, pese a que la Unión Europea ha impulsado ya una tasa similar a escala comunitaria.</p>
<p>Con esta tasa, Francia pretendía frenar las compras baratas en plataformas como Shein, Temu y AliExpress, fomentar el comercio local y recaudar unos 400 millones de euros al año. Sin embargo, las plataformas chinas lograron esquivar el gravamen enviando los paquetes primero a otros países de la Unión Europea, como Países Bajos o Bélgica, donde se gestionaban los trámites aduaneros antes de transportarlos por carretera hasta Francia.</p>
<p>El resultado fue una recaudación de apenas 2,3 millones de euros al mes, muy lejos de los 33 millones previstos inicialmente, lo que ha llevado al Gobierno francés a retirar la medida.</p>`,
    image_url: null, category_id: CAT.eco,
  },
  {
    title: 'Trump obtuvo cerca de 1.200 millones de dólares en ingresos relacionados con criptomonedas en 2025',
    summary: 'El patrimonio personal del presidente estadounidense casi se triplicó entre 2024 y 2026 hasta alcanzar unos 6.500 millones de dólares, de los que 665 millones proceden de los derechos de licencia de su propia criptomoneda.',
    content: `<p>Donald Trump obtuvo en 2025 cerca de 1.200 millones de dólares en ingresos relacionados con criptomonedas, según los datos disponibles sobre su patrimonio personal, que casi se triplicó entre 2024 y 2026 hasta alcanzar unos 6.500 millones de dólares.</p>
<p>De esa cifra, 665 millones de dólares proceden de los derechos de licencia de la criptomoneda vinculada a su propio nombre, un activo que llegó a experimentar una fuerte subida de valor tras su lanzamiento antes de sufrir un notable desplome posterior.</p>
<p>El incremento patrimonial del presidente estadounidense ha reavivado el debate sobre los posibles conflictos de interés entre su cargo público y sus negocios personales vinculados al sector de las criptomonedas.</p>`,
    image_url: null, category_id: CAT.eco,
  },
  {
    title: 'La Unión Europea endurece las condiciones para importar acero desde fuera del bloque',
    summary: 'La nueva salvaguardia comercial, en vigor desde este miércoles, reduce casi a la mitad la cuota de acero libre de aranceles y eleva el arancel del 25% al 50% una vez superado el límite, en una medida dirigida sobre todo a frenar la sobrecapacidad china.',
    content: `<p>La Unión Europea ha comenzado a aplicar desde este miércoles una nueva salvaguardia comercial que endurece notablemente las condiciones para importar acero desde países terceros. La medida reduce casi a la mitad la cuota de acero que puede entrar en el bloque libre de aranceles.</p>
<p>Una vez superado ese límite, el arancel aplicable pasa del 25% al 50%, lo que encarece de forma significativa las importaciones adicionales. La medida busca frenar la sobrecapacidad global del sector, especialmente la procedente de China, aunque también afecta a otros países exportadores como Egipto o India.</p>
<p>Con esta decisión, Bruselas pretende proteger a la industria siderúrgica europea, que en los últimos años ha visto reducida su producción interna al depender en gran medida de importaciones más baratas procedentes de fuera del continente.</p>`,
    image_url: null, category_id: CAT.eco,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Los analistas advierten de que los mercados están subestimando el impacto de El Niño este verano',
    summary: 'Se espera que el fenómeno climático regrese con fuerza y provoque sequías e inundaciones que afectarían a cultivos sensibles; el precio del cacao ya ha rebotado un 79% desde mínimos y el del café un 27%.',
    content: `<p>Los analistas advierten de que los mercados están subestimando el impacto que tendrá el regreso del fenómeno de El Niño este verano, que se espera llegue con fuerza y amenaza con provocar sequías e inundaciones que afectarán especialmente a cultivos agrícolas sensibles en distintas regiones del mundo.</p>
<p>Los efectos ya se están notando en los precios de las materias primas: el cacao ha rebotado un 79% desde sus mínimos recientes, mientras que el café ha subido un 27% en el mismo periodo, en anticipación a posibles problemas de producción en las principales zonas productoras.</p>
<p>Los expertos recomiendan seguir de cerca la evolución del fenómeno en las próximas semanas, ya que su intensidad definitiva podría tener un impacto todavía mayor sobre los mercados agrícolas globales.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un incendio en un edificio de apartamentos de Amberes deja cinco muertos',
    summary: 'El fuego, declarado la madrugada del miércoles, tendría su origen en un problema técnico en la planta baja del inmueble, según ha señalado la policía belga.',
    content: `<p>Un incendio declarado este miércoles por la mañana en un edificio de apartamentos de Amberes, Bélgica, ha dejado cinco personas fallecidas. Los servicios de emergencia se desplazaron rápidamente al lugar para intentar controlar las llamas y rescatar a los residentes del inmueble.</p>
<p>La policía apunta a un problema técnico en la planta baja del edificio como posible origen del fuego, aunque las autoridades continúan investigando las causas exactas del siniestro para determinar con precisión cómo se originó y se propagó por el resto del inmueble.</p>
<p>El suceso ha causado una fuerte conmoción en la ciudad belga, donde las autoridades locales han abierto una investigación para esclarecer si existieron fallos en las medidas de seguridad del edificio.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un terremoto de magnitud 6 sacude el noreste de Japón sin causar víctimas',
    summary: 'El seísmo, registrado en la prefectura de Iwate con una intensidad de 4 sobre 7 en la escala japonesa, no activó la alerta de tsunami.',
    content: `<p>Un terremoto de magnitud 6 ha sacudido la prefectura de Iwate, en el noreste de Japón, sin causar víctimas ni daños materiales significativos. El seísmo no activó la alerta de tsunami, según confirmaron las autoridades meteorológicas del país.</p>
<p>En la escala de intensidad sísmica japonesa, que mide el impacto percibido y no solo la magnitud del terremoto, el movimiento alcanzó un nivel de 4 sobre un máximo de 7, una intensidad moderada que no provocó incidentes de consideración en la zona afectada.</p>
<p>Japón es uno de los países con mayor actividad sísmica del mundo y cuenta con protocolos de emergencia y sistemas de alerta temprana muy desarrollados que permiten minimizar el impacto de este tipo de sucesos en la población.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Miles de manifestantes recorren varias ciudades de Sudáfrica para exigir la expulsión de inmigrantes irregulares',
    summary: 'Las protestas, convocadas por grupos antimigración, acusan a los extranjeros en situación irregular de ser responsables del desempleo, la delincuencia y la saturación de los servicios públicos.',
    content: `<p>Miles de manifestantes recorrieron el pasado martes varias ciudades de Sudáfrica en protestas convocadas por grupos antimigración, que exigen al Gobierno la expulsión de todos los inmigrantes en situación irregular en el país.</p>
<p>Los organizadores de las movilizaciones acusan a los extranjeros de ser responsables, entre otros problemas, del desempleo, la delincuencia y la saturación de los servicios públicos sudafricanos, un discurso que ha ganado peso en el país en los últimos años en un contexto de dificultades económicas persistentes.</p>
<p>Las autoridades sudafricanas no han anunciado por el momento ninguna medida en respuesta a las demandas de los manifestantes, en un debate migratorio que continúa generando fuerte tensión social en el país.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un grupo católico ultraconservador ordena cuatro obispos sin permiso del Papa pese a la advertencia de excomunión del Vaticano',
    summary: 'La Fraternidad Sacerdotal San Pío X, que defiende la misa tradicional en latín y rechaza reformas del Concilio Vaticano II, acusa a la Santa Sede de traicionar la tradición.',
    content: `<p>La Fraternidad Sacerdotal San Pío X, un grupo ultraconservador que defiende la celebración de la misa tradicional en latín y rechaza varias reformas del Concilio Vaticano II, ha ordenado cuatro nuevos obispos sin permiso del Papa durante una ceremonia celebrada en Suiza.</p>
<p>El Vaticano había advertido previamente de que la ordenación de nuevos obispos sin autorización pontificia conllevaría la excomunión automática de los implicados, una amenaza que finalmente no ha frenado a la organización, que decidió seguir adelante con la ceremonia.</p>
<p>El grupo acusa a la Santa Sede de haber traicionado la tradición católica al permitir reformas litúrgicas y doctrinales que consideran contrarias a la enseñanza histórica de la Iglesia, una fractura que se remonta a las decisiones del Concilio Vaticano II celebrado en los años sesenta.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Grecia se enfrenta a una grave plaga de peces globo que arrasa la pesca en el Mediterráneo oriental',
    summary: 'Esta especie invasora, llegada a través del canal de Suez y sin apenas depredadores naturales, rompe redes y devora otras especies; su toxina, además, es extremadamente peligrosa para el ser humano.',
    content: `<p>La isla griega de Creta se enfrenta a una grave plaga de peces globo, una especie invasora que llegó al Mediterráneo a través del canal de Suez y que desde 2005 se ha expandido sin control por buena parte de la cuenca oriental.</p>
<p>Los peces globo tienen una boca extremadamente fuerte capaz de romper redes y destruir aparejos de pesca, además de devorar otras especies marinas, lo que está reduciendo de forma drástica las capturas de los pescadores locales. La ausencia de depredadores naturales en la zona permite que la plaga continúe expandiéndose sin obstáculos.</p>
<p>El pez globo, además, contiene una toxina extremadamente peligrosa capaz de provocar parálisis respiratoria o insuficiencia cardíaca, por lo que su manipulación y consumo requiere máxima precaución y conocimientos especializados que no están al alcance de la población general.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Hallan muerto a un bebé recién nacido en un baño portátil de un festival de música en Michigan',
    summary: 'El cuerpo fue encontrado por un empleado de mantenimiento durante el último día del festival Electronic Forest, en una zona rural del oeste del estado; la policía busca testigos que puedan aportar información.',
    content: `<p>Un bebé recién nacido fue hallado muerto dentro de un baño portátil durante el festival de música electrónica Electronic Forest, celebrado en una zona rural del oeste de Michigan, en Estados Unidos.</p>
<p>El cuerpo fue encontrado por un empleado de la empresa encargada del mantenimiento de los baños durante las tareas de limpieza realizadas el domingo por la mañana, coincidiendo con el último día del festival. Se trata de un recién nacido de menos de 28 días de vida.</p>
<p>La policía ha abierto una investigación y busca la colaboración ciudadana para localizar testigos que pudieran haber visto a una mujer o a un hombre con un recién nacido en la zona del recinto durante el fin de semana del festival.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Trump realiza su primer vuelo en el nuevo Air Force One tras invertir 400 millones de dólares en su reforma',
    summary: 'El avión, entregado inicialmente por Catar, ha sido acondicionado con una inversión millonaria antes de entrar en servicio para los desplazamientos del presidente estadounidense.',
    content: `<p>Donald Trump ha realizado su primer vuelo en el nuevo Air Force One que le entregó Catar, después de que Estados Unidos invirtiera unos 400 millones de dólares en reformar el aparato antes de ponerlo en servicio para los desplazamientos oficiales del presidente.</p>
<p>La entrega del avión por parte de Catar generó en su momento controversia por las implicaciones diplomáticas y de seguridad de aceptar un regalo de este tipo por parte de un gobierno extranjero, aunque la Casa Blanca defendió la operación en su momento.</p>
<p>Con la reforma ya completada, el avión pasa a integrarse de forma oficial en la flota presidencial estadounidense para los viajes oficiales de Trump dentro y fuera del país.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'China aprueba una ley de unidad étnica que exige a las minorías asimilarse a la identidad nacional china',
    summary: 'La norma, en vigor desde el 1 de julio, obliga a escuelas y organismos públicos a usar el mandarín como lengua principal y permite perseguir fuera del país a quienes Pekín considere que fomentan la división étnica.',
    content: `<p>China ha puesto en marcha una nueva ley de unidad étnica que exige a todas las minorías del país asimilarse a una identidad nacional china defendida por el Partido Comunista. La norma entró en vigor el pasado 1 de julio.</p>
<p>Bajo esta ley, las escuelas y los organismos públicos deberán usar el mandarín como lengua principal y promover un fuerte sentimiento de comunidad del pueblo chino, mientras que los padres tendrán la obligación de inculcar a sus hijos el amor por el Partido Comunista y por la nación china.</p>
<p>La norma también permite perseguir a personas fuera de China si Pekín considera que fomentan la división étnica, una disposición que ha generado preocupación entre activistas de derechos humanos y comunidades de la diáspora china en el extranjero.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Canadá se unirá a Eurovisión a partir de la próxima edición',
    summary: 'El país norteamericano sigue así los pasos de Australia, que participa en el certamen desde 2015, y ampliará aún más la dimensión internacional del festival.',
    content: `<p>Canadá se unirá a Eurovisión a partir de la próxima edición del festival, ampliando de nuevo la dimensión internacional de un certamen que, pese a su nombre, ya cuenta con la participación de países fuera del continente europeo.</p>
<p>El país norteamericano sigue así los pasos de Australia, que participa en Eurovisión desde 2015 pese a no formar parte de la Unión Europea de Radiodifusión por motivos geográficos, gracias a un acuerdo especial con la organización del festival.</p>
<p>La incorporación de Canadá abre la puerta a que otros países no europeos puedan sumarse en el futuro a un evento que ha ido ampliando progresivamente su alcance en las últimas ediciones.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Arrestan a dos personas en Nueva York tras una pedida de matrimonio en lo alto de la aguja del Empire State Building',
    summary: 'La pareja accedió a una zona no habilitada para el público y desplegó una pancarta con un mensaje sobre el amor y el poder, en un gesto que terminó con su detención.',
    content: `<p>Dos personas fueron arrestadas en Nueva York tras realizar una arriesgada propuesta de matrimonio en lo alto de la aguja del Empire State Building, una zona no accesible para el público general y que requiere de un acceso no autorizado para llegar hasta allí.</p>
<p>La pareja desplegó una gran pancarta negra con un mensaje sobre el amor y el poder, visible únicamente para quienes se encontraran muy cerca del edificio dada la altura a la que se realizó la acción.</p>
<p>Las autoridades neoyorquinas detuvieron a ambas personas por acceder de forma ilegal a una zona restringida del icónico rascacielos, en un episodio que ha circulado ampliamente en redes sociales por lo insólito del escenario elegido para la pedida.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La boda de Taylor Swift y Travis Kelce, envuelta en secretismo, podría celebrarse en el Madison Square Garden',
    summary: 'El enlace, previsto para este fin de semana en Nueva York, mantiene en vilo a los medios pese a las escasas filtraciones sobre su ubicación exacta.',
    content: `<p>La boda entre Taylor Swift y Travis Kelce, prevista para este fin de semana, se ha convertido en uno de los eventos más rodeados de secretismo del panorama mediático estadounidense, con muy pocas filtraciones confirmadas sobre los detalles del enlace.</p>
<p>Entre las informaciones que han trascendido figura la posibilidad de que la ceremonia se celebre en el Madison Square Garden de Nueva York, un recinto de gran capacidad que dificultaría mantener el hermetismo habitual de este tipo de celebraciones privadas.</p>
<p>La expectación mediática en torno al enlace es máxima dado el perfil público de ambos protagonistas, una de las cantantes más influyentes del mundo y uno de los jugadores más populares de la NFL.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: "India confirma la identidad real del alpinista conocido como 'Botas Verdes', cuyo cuerpo lleva 30 años congelado en el Everest",
    summary: 'Un análisis de ADN ha determinado que los restos, situados a unos 8.500 metros de altitud, pertenecen a un escalador fallecido en una ventisca de 1996 junto a otros ocho montañeros.',
    content: `<p>India ha confirmado oficialmente la identidad real del alpinista conocido como "Botas Verdes", cuyo cuerpo lleva congelado unos 30 años en el Everest tras fallecer durante una trágica ventisca en 1996 que costó la vida a varios escaladores.</p>
<p>El cadáver se encuentra a unos 8.500 metros de altitud, una zona de extrema dificultad de acceso conocida como "zona de la muerte" por las condiciones límite para la supervivencia humana. Especialistas realizaron un análisis de ADN que ha permitido determinar que los restos pertenecen a un montañero fallecido junto a otros ocho escaladores en aquella ventisca de 1996.</p>
<p>El caso de "Botas Verdes" se ha convertido a lo largo de los años en uno de los más conocidos entre los numerosos cuerpos que permanecen en las laderas del Everest, muchos de ellos imposibles de recuperar debido a las condiciones extremas de la montaña.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un niño canadiense de 11 años muere de rabia semanas después de despertarse con un murciélago en la boca',
    summary: 'El incidente, ocurrido en 2024 en una cabaña de Ontario, no recibió atención médica inmediata al no apreciarse marcas de mordedura; el menor falleció tras 17 días hospitalizado después de que la enfermedad fuera diagnosticada erróneamente en un primer momento.',
    content: `<p>Un niño canadiense de 11 años falleció de rabia después de despertarse con un murciélago en la boca y otro cerca de la nariz mientras se encontraba en una cabaña en Ontario, en un incidente ocurrido en 2024.</p>
<p>Aunque los animales fueron retirados y liberados sin actuar de forma extraña, los padres del menor no buscaron atención médica inmediata al no apreciarse marcas visibles de mordedura. Tres semanas después, el niño comenzó a mostrar síntomas neurológicos progresivos, como hormigueo y entumecimiento facial, hinchazón, pérdida de apetito y vómitos.</p>
<p>El menor fue diagnosticado erróneamente en un primer momento con herpes, y solo más tarde se relacionó el cuadro clínico con el episodio del murciélago. La rabia, una vez que la enfermedad alcanza una fase avanzada, no cuenta con tratamiento eficaz conocido, y el niño falleció tras 17 días hospitalizado.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Cuatro personas mueren en Ciudad de México durante los festejos por la victoria de la selección en el Mundial',
    summary: 'Tres de las víctimas fallecieron por asfixia debido a la presión de la multitud, mientras que una cuarta persona murió tras sufrir una crisis epiléptica y un paro cardiorrespiratorio.',
    content: `<p>Cuatro personas han muerto en Ciudad de México durante los festejos por la victoria de la selección mexicana en el Mundial de 2026. Tres de las víctimas, dos mujeres de 19 y 48 años y un hombre de 44, murieron por asfixia debido a la presión de la multitud congregada en las celebraciones.</p>
<p>Una cuarta víctima, un hombre de 30 años, falleció tras sufrir una crisis epiléptica seguida de un paro cardiorrespiratorio en medio de las aglomeraciones que se produjeron en distintos puntos de la capital mexicana.</p>
<p>Los sucesos han reabierto el debate sobre las medidas de seguridad necesarias para gestionar grandes concentraciones de aficionados durante celebraciones deportivas de esta magnitud, un problema recurrente en festejos masivos de este tipo en distintos países.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'El senador colombiano Iván Cepeda advierte de que llamará a la desobediencia civil pacífica',
    summary: 'El dirigente de izquierda sostiene que la doble nacionalidad estadounidense del presidente electo, Abelardo de la Espriella, compromete la soberanía del país en caso de conflicto constitucional.',
    content: `<p>El senador colombiano de izquierda Iván Cepeda ha advertido de que llamará a la desobediencia civil pacífica si el presidente electo, Abelardo de la Espriella, no renuncia a la nacionalidad estadounidense que adquirió en 2023.</p>
<p>Cepeda sostiene que esa doble nacionalidad implica una lealtad exclusiva hacia Estados Unidos en caso de un eventual conflicto constitucional, lo que a su juicio pondría en riesgo la soberanía colombiana en un momento crítico para las instituciones del país.</p>
<p>La advertencia del senador abre un nuevo frente político en un contexto ya marcado por la tensión entre distintos sectores del espectro ideológico colombiano en torno a la legitimidad y las condiciones del próximo gobierno.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Rescatan con vida a un niño entre los escombros de La Guaira cinco días después de los terremotos en Venezuela',
    summary: 'El hallazgo se produce en una zona donde 189 edificios han colapsado por completo; más de 2.000 rescatistas de 27 países coordinados por la ONU trabajan en la zona, mientras cuatro policías han sido detenidos por presunto saqueo.',
    content: `<p>Un niño ha sido rescatado con vida entre los escombros de La Guaira, en Venezuela, cinco días después de los terremotos que sacudieron la zona, un hallazgo que ya se considera casi milagroso dado el tiempo transcurrido desde el desastre.</p>
<p>En total, 85 edificios han resultado afectados por los seísmos, de los cuales 189 han colapsado totalmente. Más de 2.000 rescatistas procedentes de 27 países, coordinados por Naciones Unidas, continúan trabajando en la zona en las tareas de búsqueda y rescate de posibles supervivientes.</p>
<p>La emergencia se ha visto empañada además por denuncias de saqueo: cuatro agentes de la policía venezolana han sido detenidos y suspendidos de sus funciones por presunto robo en las zonas afectadas, en un episodio que ha generado indignación entre vecinos y voluntarios que colaboran en las labores de rescate.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Netanyahu visita el sur del Líbano y ordena destruir todas las instalaciones de Hezbolá',
    summary: 'El primer ministro israelí ha afirmado que su país no permitirá que la milicia chií establezca bases junto a la frontera, incluidas las infraestructuras subterráneas.',
    content: `<p>El primer ministro israelí, Benjamín Netanyahu, ha visitado el sur del Líbano y ha ordenado a sus soldados destruir todas las instalaciones de Hezbolá, tanto las visibles en superficie como las subterráneas.</p>
<p>Netanyahu ha afirmado que Israel no permitirá que Hezbolá establezca bases junto a la frontera, en un mensaje que reafirma la postura de mano dura del Gobierno israelí frente a la milicia chií libanesa tras meses de tensión en la zona fronteriza.</p>
<p>La visita se produce en un contexto de fragilidad del alto el fuego en la región, donde los incidentes puntuales entre ambas partes han seguido produciéndose pese a los acuerdos alcanzados en los últimos meses.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Amnistía Internacional acusa a las Fuerzas de Apoyo Rápido de Sudán de crímenes de lesa humanidad y limpieza étnica',
    summary: 'La organización documenta asesinatos, torturas, violaciones y detenciones de civiles durante el asedio del grupo paramilitar a la ciudad de El Fasher entre 2024 y 2025.',
    content: `<p>Amnistía Internacional acusa a las Fuerzas de Apoyo Rápido, el grupo paramilitar sudanés, de cometer crímenes de lesa humanidad y limpieza étnica entre 2024 y 2025, durante el periodo en que asediaban la ciudad de El Fasher, en la región de Darfur.</p>
<p>Según la organización, civiles fueron asesinados, torturados, violados, golpeados y detenidos de forma sistemática durante el asedio, en un patrón de violencia que se enmarca en el conflicto armado que enfrenta desde 2023 al ejército sudanés con las Fuerzas de Apoyo Rápido.</p>
<p>La guerra civil en Sudán ha provocado una de las mayores crisis humanitarias del mundo, con millones de desplazados y un acceso muy limitado de la ayuda internacional a las zonas más afectadas por los combates.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Los ataques ucranianos con drones dañan gravemente varias refinerías rusas y obligan a Moscú a exportar petróleo sin refinar',
    summary: 'La imposibilidad de procesar buena parte de su crudo fuerza a Rusia a venderlo en bruto con importantes descuentos frente al precio del petróleo ya refinado.',
    content: `<p>Las refinerías rusas han sido gravemente dañadas por los ataques ucranianos con drones de las últimas semanas, lo que ha reducido de forma significativa la capacidad de Rusia para procesar buena parte de su petróleo.</p>
<p>Como consecuencia, Rusia se ha visto obligada a exportar gran parte de su crudo sin refinar, lo que reduce considerablemente sus ingresos, ya que el petróleo en bruto se vende a un precio muy inferior al del petróleo ya procesado, cuya refinación genera un valor añadido significativo.</p>
<p>Moscú está aplicando importantes descuentos para colocar en el mercado internacional el petróleo bruto que ya no puede refinar, en un contexto de creciente presión sobre su sector energético, uno de los pilares fundamentales de la economía rusa durante el conflicto con Ucrania.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Ucrania ataca por segunda vez esta semana la mayor refinería de petróleo de Rusia',
    summary: 'Putin ha reconocido públicamente un déficit de combustible en el país, y varias regiones rusas han comenzado a aplicar racionamientos.',
    content: `<p>Ucrania ha vuelto a atacar la principal refinería de petróleo de Rusia por segunda vez esta semana, intensificando su estrategia de golpear las infraestructuras energéticas rusas como forma de presión en el conflicto.</p>
<p>El presidente ruso, Vladímir Putin, ha reconocido públicamente la existencia de un cierto déficit de combustible en el país, una admisión poco habitual que refleja la magnitud del impacto de los ataques ucranianos sobre la capacidad de refino rusa.</p>
<p>Varias regiones de Rusia han comenzado ya a aplicar medidas de racionamiento de combustible ante la escasez, lo que empieza a generar tensiones sociales y logísticas en distintas zonas del país, especialmente en las más alejadas de los grandes centros de producción.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Zelenski pide a Polonia y Hungría que no frenen el proceso de adhesión de Ucrania a la Unión Europea',
    summary: 'La petición llega en un momento de tensión entre Kiev y Varsovia por el nombre elegido para una milicia ucraniana, que recuerda a una organización responsable de una masacre en Polonia durante la Segunda Guerra Mundial.',
    content: `<p>El presidente ucraniano, Volodímir Zelenski, ha pedido a Polonia y Hungría que no frenen el proceso de adhesión de Ucrania a la Unión Europea, en un llamamiento dirigido a dos de los socios comunitarios con posiciones más reticentes hacia la incorporación de Kiev al bloque.</p>
<p>La petición llega en un momento de tensión especialmente marcada entre Ucrania y Polonia por el nombre que Zelenski ha dado a una milicia ucraniana, que recuerda a una organización responsable de una masacre cometida en territorio polaco durante la Segunda Guerra Mundial, un episodio histórico que sigue siendo muy sensible en las relaciones bilaterales.</p>
<p>El proceso de adhesión de Ucrania a la Unión Europea requiere la unanimidad de todos los estados miembros, lo que otorga a países como Polonia y Hungría capacidad de bloqueo sobre los avances del proceso de integración.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Rusia intensifica los ataques contra gasolineras y camiones cisterna en el este y centro de Ucrania',
    summary: 'La estrategia busca interrumpir la cadena de suministro de combustible del país, en un contexto de escalada mutua de ataques a infraestructuras energéticas entre ambos bandos.',
    content: `<p>Rusia ha comenzado a atacar gasolineras y camiones cisterna en el este y el centro de Ucrania, en una estrategia que busca interrumpir la cadena de suministro de combustible del país y dificultar tanto los movimientos militares como la vida cotidiana de la población civil.</p>
<p>La táctica de golpear las infraestructuras de suministro energético del adversario no es nueva en los conflictos armados contemporáneos, y en este caso se enmarca en la escalada mutua de ataques contra objetivos energéticos que ambos bandos han intensificado en las últimas semanas.</p>
<p>Las autoridades ucranianas no han detallado el alcance total de los daños provocados por estos ataques, aunque advierten de que la escasez de combustible podría agravarse en las zonas más próximas al frente si los ataques continúan a este ritmo.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'La directora de la Agencia Tributaria, Soledad Fernández, deja su cargo tras cuatro años al frente de la institución',
    summary: 'Su salida coincide con el escándalo de las joyas incautadas a Zapatero, aunque Hacienda niega cualquier relación entre ambos hechos; la Audiencia Nacional ha preguntado a la Agencia si se personará como perjudicada en la trama.',
    content: `<p>Soledad Fernández, directora general de la Agencia Tributaria, ha dejado su cargo tras cuatro años al frente de la institución. Su salida coincide en el tiempo con el escándalo de las joyas incautadas a Juan Carlos Zapatero, aunque desde Hacienda se ha negado cualquier relación entre ambos hechos.</p>
<p>La Audiencia Nacional ha preguntado formalmente a la Agencia Tributaria si va a personarse como perjudicada en la trama, dado que Zapatero no habría declarado ni tributado por las joyas incautadas, lo que podría suponer una irregularidad fiscal adicional al caso.</p>
<p>El relevo al frente de la Agencia Tributaria se produce en un momento de especial atención mediática sobre el organismo, que deberá gestionar en los próximos meses las derivadas del caso mientras se completa la transición en su dirección.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Sanidad plantea una reforma profunda del modelo laboral de los médicos residentes (MIR)',
    summary: 'La propuesta limita la jornada ordinaria a 35 horas semanales, reduce las guardias a un máximo de 17 horas, exige un descanso de 12 horas entre jornadas y establece un registro horario efectivo, además de una mejora salarial.',
    content: `<p>El Ministerio de Sanidad plantea una reforma profunda en el modelo laboral de los médicos internos residentes (MIR) con el objetivo de mejorar sus condiciones de trabajo, un colectivo que lleva años denunciando jornadas extenuantes durante su periodo de formación.</p>
<p>Entre las medidas propuestas figura un límite de 35 horas semanales de jornada ordinaria, la obligación de que los residentes conozcan su planificación con dos meses de antelación y el refuerzo de los descansos hasta las 12 horas entre jornadas. Además, se plantea el fin de las guardias de 24 horas, que pasarían a tener un máximo de 17 horas, y un tope de 45 horas semanales de promedio entre jornada y guardias.</p>
<p>La propuesta incluye también el establecimiento de un registro efectivo de la jornada laboral para evitar abusos, así como una mejora salarial para los residentes, en una reforma que todavía deberá negociarse con las comunidades autónomas y los colectivos médicos antes de su aprobación definitiva.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Lara Hernández dimite como coordinadora de Sumar tras el archivo de la investigación interna por presunto acoso laboral',
    summary: 'La dirigente sostiene que ha sido víctima de una campaña de desprestigio y defiende su inocencia; su salida se produce diez días antes de la asamblea del partido, en la que solo concurre la candidatura de Rosa Martínez y Verónica Martínez.',
    content: `<p>Lara Hernández ha anunciado su dimisión como coordinadora del movimiento Sumar y su baja como militante, después de que se archivara la investigación interna abierta por un presunto caso de acoso laboral en el que estaba implicada.</p>
<p>La dirigente sostiene que todo el proceso ha formado parte de una campaña de desprestigio interna en su contra, basada en mentiras e injurias, y defiende su inocencia pese a haber decidido apartarse de la organización. La investigación se cerró finalmente por falta de pruebas, ya que las personas que inicialmente habían presentado la denuncia no llegaron a ratificarla.</p>
<p>Su salida se produce diez días antes de la asamblea del partido, en la que se renovará la dirección con una única candidatura presentada por Rosa Martínez, secretaria de Estado de Derechos Sociales, y Verónica Martínez, portavoz del grupo en el Congreso, a quienes algunos defensores de Hernández señalan como impulsoras de la campaña en su contra.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La viuda de Isak Andic declara ante la jueza que el fundador de Mango preparaba un nuevo testamento antes de morir',
    summary: 'El nuevo documento habría reducido la herencia de sus tres hijos para destinar gran parte de la fortuna del empresario a una fundación benéfica.',
    content: `<p>La viuda de Isak Andic, fundador de la marca de moda española Mango, ha declarado ante la jueza que el empresario estaba preparando un nuevo testamento que habría cambiado de forma sustancial el reparto de su herencia antes de su fallecimiento.</p>
<p>Según su testimonio, el nuevo documento reducía la parte correspondiente a sus tres hijos para destinar una gran parte de la fortuna del empresario a una fundación benéfica, un extremo que ya se conocía parcialmente pero que ahora queda confirmado de forma directa por la viuda.</p>
<p>El proceso judicial sobre la herencia de Andic continúa su curso, en un caso que ha generado gran atención mediática dado el peso empresarial y económico de la fortuna en disputa.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La policía busca al activista Vito Quiles por orden judicial tras no recibir una citación',
    summary: 'El agitador mediático asegura que se trata de una persecución del Gobierno tras su reciente encuentro con Begoña Gómez; su abogado ha anunciado que se personará en los próximos días en una comisaría de Madrid.',
    content: `<p>La Policía Nacional busca al activista y agitador mediático Vito Quiles por orden de un juez, debido a una citación judicial que, según su versión, no habría llegado a recibir.</p>
<p>Quiles sostiene que todo el proceso responde a una persecución del Gobierno en su contra tras su reciente encuentro con Begoña Gómez, esposa del presidente del Gobierno, aunque no ha detallado más pruebas sobre esta relación. La policía acudió a la sede de la televisión donde trabaja, sin lograr localizarle.</p>
<p>Su abogado ha asegurado que Quiles se personará en los próximos días en la comisaría más cercana a su domicilio en Madrid, para resolver la situación derivada de la citación judicial pendiente.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El Tribunal Supremo abre una nueva causa contra el eurodiputado Alvise Pérez por presunta incitación a desórdenes públicos',
    summary: 'La investigación se centra en mensajes publicados en su canal de Telegram durante las protestas agrícolas de febrero de 2024 en los que llamaba a bloquear carreteras, puertos y refinerías; es la sexta causa abierta contra él en el alto tribunal.',
    content: `<p>El Tribunal Supremo ha abierto una nueva causa contra el eurodiputado Alvise Pérez por presunta incitación a desórdenes públicos agravados, en relación con mensajes publicados en su canal de Telegram durante las protestas agrícolas de febrero de 2024.</p>
<p>Según la investigación, Pérez realizaba llamamientos reiterados a bloquear y colapsar vías de comunicación, puertos, centros logísticos y refinerías, así como a usar vehículos para cortar el tráfico y aprovechar la falta de efectivos policiales durante las protestas.</p>
<p>Esta es la sexta causa abierta contra el eurodiputado en el Tribunal Supremo, lo que refleja el creciente escrutinio judicial sobre su actividad política y comunicativa desde su irrupción en el panorama institucional español.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: "Mossos d'Esquadra y Guardia Civil registran de nuevo el laboratorio de Cresa por el brote de peste porcina africana en Cataluña",
    summary: 'Los agentes han solicitado nuevas muestras de los virus con los que trabaja el centro mientras el juez investiga si hubo negligencia en su manejo, después de que los primeros jabalíes infectados aparecieran a pocos cientos de metros de las instalaciones.',
    content: `<p>Los Mossos d'Esquadra y la Guardia Civil han vuelto a registrar el laboratorio de Cresa dentro de la investigación sobre el brote de peste porcina africana detectado en jabalíes en Cataluña en 2025. Los agentes han solicitado nuevas muestras de los virus con los que trabaja el centro.</p>
<p>El juez a cargo del caso investiga si hubo negligencia en el manejo de las muestras del laboratorio, ante la posibilidad de que se hubiera producido una fuga de alguna cepa del virus que después habría infectado a la población de jabalíes de la zona.</p>
<p>La sospecha se ve reforzada por el hecho de que los primeros jabalíes infectados aparecieron a pocos cientos de metros de las instalaciones del laboratorio, una coincidencia geográfica que ha puesto el foco de la investigación sobre el centro.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Un turista murciano encuentra en una acera de Sevilla un cuadro de Sorolla y lo devuelve a sus propietarios',
    summary: 'El hombre recogió la obra pensando que solo el marco tenía valor, pero una consulta a una aplicación de inteligencia artificial le hizo sospechar su origen; el cuadro no estaba perdido, sino extraviado durante una mudanza y ya había sido denunciado.',
    content: `<p>Un turista murciano de 57 años encontró en una acera de Sevilla un cuadro que le llamó la atención únicamente por el marco, pensando que se trataba de un objeto sin valor artístico, por lo que lo recogió y se lo llevó a su hotel dentro de una bolsa.</p>
<p>Ya en el hotel, decidió fotografiar la obra y consultarla mediante una aplicación de inteligencia artificial para saber si podía tener algún valor, y la herramienta le indicó que podría tratarse de un cuadro de Joaquín Sorolla, uno de los pintores españoles más cotizados del mercado del arte.</p>
<p>El cuadro no estaba perdido, sino extraviado durante una mudanza apresurada, y sus propietarios ya habían denunciado su desaparición ante la policía. Finalmente, el turista lo devolvió a sus dueños, poniendo fin a una historia que combina buena fe y una curiosa ayuda tecnológica.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El Orgullo de Madrid, en marcha hasta el próximo 5 de julio',
    summary: 'Las celebraciones, que arrancaron el 25 de junio, convierten a la capital en uno de los principales puntos de encuentro del Orgullo LGTBI en Europa durante estas fechas.',
    content: `<p>El Orgullo de Madrid ya está en marcha. Las celebraciones comenzaron el pasado 25 de junio y se extenderán hasta el próximo 5 de julio, con una amplia programación de actos culturales, reivindicativos y festivos repartidos por distintos puntos de la capital.</p>
<p>Durante estos días, Madrid se convierte en uno de los principales puntos de encuentro del Orgullo LGTBI en Europa, atrayendo a visitantes de toda España y de otros países que se suman a las celebraciones en el barrio de Chueca y en el resto de la ciudad.</p>
<p>El programa incluye conciertos, actividades reivindicativas y la tradicional manifestación, que cierra el conjunto de actos con un fuerte componente tanto festivo como de reivindicación de derechos del colectivo LGTBI.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La Guardia Civil investiga la muerte de una gata por disparos de balines en Torrelavega, Cantabria',
    summary: 'El animal, llamado Clemen y de cinco años, falleció el 21 de junio tras recibir dos disparos de una pistola de aire comprimido; una protectora cree que pudieron efectuarse desde una vivienda cercana y pide colaboración ciudadana.',
    content: `<p>La Guardia Civil investiga la muerte de Clemen, una gata de cinco años, en Torrelavega, Cantabria, después de que falleciera el pasado 21 de junio tras recibir dos disparos de balines de una pistola de aire comprimido.</p>
<p>Una protectora de animales de la zona ha alertado de que los disparos podrían haberse realizado desde la ventana de una vivienda situada en una zona urbana, y pide la colaboración ciudadana para identificar al responsable de los hechos.</p>
<p>El Código Penal español contempla penas de entre 12 y 24 meses de prisión por causar la muerte de un animal doméstico, aunque las asociaciones de protección animal llevan años reclamando un endurecimiento de estas penas.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Rescatan en Alemania a una tigresa blanca y sus cinco crías que vivían en remolques de camión',
    summary: 'Los animales, hallados en un polígono industrial de Sajonia, serán trasladados a un centro de recuperación en Villena, Alicante, donde pasarán la cuarentena antes de vivir en un recinto exterior.',
    content: `<p>Una tigresa blanca llamada Zafira y sus cinco crías han sido rescatadas en Alemania tras pasar toda su vida dentro de remolques de camión en un polígono industrial de Sajonia, en unas condiciones muy alejadas de las que necesita la especie para su bienestar.</p>
<p>Los animales se dirigen ahora a un centro de recuperación situado en Villena, Alicante, donde pasarán por un periodo de cuarentena antes de poder acceder a un recinto exterior de unos 3.000 metros cuadrados, un espacio que, aunque limitado, mejorará notablemente sus condiciones de vida.</p>
<p>El caso pone de manifiesto los problemas asociados a la tenencia irregular de grandes felinos en Europa, una práctica que continúa produciéndose pese a la normativa vigente sobre protección de especies y bienestar animal.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La Audiencia de Valencia absuelve a los raperos El Jincho y Osiris de agredir sexualmente a una menor en 2023',
    summary: 'El tribunal aprecia contradicciones en las declaraciones de la víctima y señala que ni el testimonio de una amiga, ni las cámaras de seguridad del hotel, ni la conducta posterior de la denunciante respaldaban la acusación.',
    content: `<p>La Audiencia Provincial de Valencia ha absuelto a los raperos El Jincho y Osiris, que estaban acusados de agresión sexual a una menor tras un concierto celebrado en Mislata en 2023.</p>
<p>El tribunal ha apreciado contradicciones entre las declaraciones de la víctima y otros elementos probatorios: el testimonio de una amiga que aseguró no haber observado nada extraño, la descripción de una interacción normal por parte del recepcionista del hotel donde se produjeron los hechos y la ausencia de signos externos de coacción o violencia en las cámaras de seguridad del establecimiento.</p>
<p>Otro elemento valorado por la sala fue que, tras la supuesta agresión, la denunciante escribió a los acusados mostrando interés en viajar a Madrid para volver a verlos, una circunstancia que el tribunal considera incompatible con el relato de los hechos denunciados.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El censo de españoles residentes en el extranjero sube a 2,7 millones de personas',
    summary: 'El voto exterior, que en 2023 llegó a cambiar el reparto de un escaño, podría ganar aún más peso tras el aumento de solicitudes de nacionalidad derivadas de la ley de nietos.',
    content: `<p>El Gobierno español reconoció tras las elecciones generales de 2023 que el voto CERA, es decir, el voto de los españoles residentes en el extranjero, podía llegar a ser determinante y cambiar el reparto de escaños en hasta nueve provincias debido a la extrema igualdad en los resultados, aunque finalmente solo llegó a cambiar un escaño en Madrid, que pasó del PSOE al PP.</p>
<p>El Ejecutivo intenta ahora restar importancia al impacto real del voto exterior, aunque el censo CERA ha seguido creciendo hasta los 2,7 millones de personas, unas 400.000 más que en 2023.</p>
<p>Los consulados han recibido además 2,5 millones de solicitudes de nacionalidad vinculadas a la conocida como ley de nietos, lo que podría aumentar todavía más el peso de este censo electoral en futuras convocatorias.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: "La Audiencia de Madrid condena a A3Media a indemnizar con 50.000 euros a la socorrista de 'La he liado parda'",
    summary: 'El tribunal ordena retirar el vídeo viral de 2008 de todas las plataformas al considerar que su uso reiterado con fines humorísticos durante años ha lesionado el honor y la propia imagen de la protagonista.',
    content: `<p>La Audiencia Provincial de Madrid ha condenado a A3Media a indemnizar con 50.000 euros más intereses a la socorrista protagonista del vídeo viral "La he liado parda", además de ordenar la retirada de la grabación de todas sus plataformas, incluidas televisión, radio y páginas web.</p>
<p>El tribunal distingue entre el uso informativo del vídeo, que considera perfectamente permitido al amparo de la libertad de información, y el uso humorístico o burlesco reiterado durante años, que a su juicio vulnera los derechos de imagen y honor de la protagonista, especialmente cuando se difunde de forma masiva en televisión y radio.</p>
<p>La socorrista ya había pedido en 2021 que se retiraran todas las imágenes, sin que sus peticiones fueran atendidas. El proceso judicial concluye ahora, casi 18 años después de la grabación original del vídeo, ocurrida en 2008.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'España multiplica la compra de diésel a Marruecos entre sospechas de que en realidad procede de Rusia',
    summary: 'El sector sospecha que el combustible se utiliza para esquivar las sanciones de la Unión Europea, ya que Marruecos carece de refinerías propias y compra a Rusia el 45% del diésel que importa.',
    content: `<p>España ha multiplicado la compra de diésel procedente de Marruecos desde la escalada bélica en Oriente Próximo, aunque el sector sospecha que ese combustible tiene en realidad origen ruso y se estaría utilizando como vía para esquivar las sanciones de la Unión Europea al petróleo ruso.</p>
<p>Marruecos no cuenta con refinerías propias suficientes y compra a Rusia el 45% del diésel que importa, un dato que alimenta las sospechas sobre el origen real del combustible que después se reexporta hacia países como España.</p>
<p>Los analistas del sector señalan que es necesario un seguimiento más estricto de las cadenas de suministro energético para evitar que el petróleo ruso siga entrando en la Unión Europea por vías indirectas pese a las sanciones vigentes.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Joan Laporta toma posesión como presidente del FC Barcelona por tercera vez',
    summary: 'El dirigente catalán ganó las elecciones del 15 de marzo con cerca del 68% de los votos.',
    content: `<p>Joan Laporta ha tomado posesión como presidente del Fútbol Club Barcelona por tercera vez en su carrera, tras ganar las elecciones celebradas el pasado 15 de marzo con casi el 68% de los votos.</p>
<p>El dirigente catalán, que ya presidió el club entre 2003 y 2010 y desde 2021 hasta ahora, encara este nuevo mandato con el reto de consolidar el proyecto deportivo e institucional del club en un momento de recuperación económica tras años de dificultades financieras.</p>
<p>La ceremonia de toma de posesión ha reunido a directivos, exjugadores y aficionados en un acto que marca el inicio formal del nuevo mandato de Laporta al frente de la entidad blaugrana.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Koke renueva su contrato con el Atlético de Madrid hasta 2027 pese al interés de la liga estadounidense',
    summary: 'El capitán colchonero, de 34 años, recibía ofertas del Atlanta United, pero ha decidido continuar una temporada más en el club en el que se ha formado.',
    content: `<p>Koke, capitán del Atlético de Madrid, ha renovado su contrato con el club hasta el 30 de junio de 2027. El centrocampista, de 34 años, estaba recibiendo ofertas procedentes de la liga estadounidense, entre ellas del Atlanta United, un destino habitual en los últimos años para futbolistas europeos en la última etapa de su carrera.</p>
<p>Finalmente, Koke ha decidido continuar al menos una temporada más en el club en el que se formó como futbolista y en el que ha desarrollado prácticamente toda su carrera profesional desde su debut en el primer equipo.</p>
<p>La renovación refuerza la continuidad del proyecto colchonero de cara a las próximas temporadas, manteniendo en la plantilla a uno de sus futbolistas con mayor peso institucional y capacidad de liderazgo en el vestuario.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'El Tribunal Supremo condena a Cuarzo Producciones a indemnizar a Iker Casillas con 30.000 euros por intromisión en su intimidad',
    summary: "La sentencia se refiere a comentarios emitidos en marzo de 2021 en televisión sobre unos audios privados relacionados con la ruptura del exportero con Sara Carbonero.",
    content: `<p>El Tribunal Supremo ha condenado a Cuarzo Producciones y al colaborador José Antonio Avilés a pagar 30.000 euros a Iker Casillas por una intromisión ilegítima en su honor e intimidad, en relación con unos comentarios emitidos en marzo de 2021 en un programa de televisión.</p>
<p>Los comentarios se referían a unos audios privados relacionados con la ruptura sentimental de Casillas con Sara Carbonero. Aunque el contenido de esos audios nunca llegó a difundirse públicamente, el Supremo considera que el simple hecho de comentarlos en un programa de televisión vulneró la intimidad del exportero.</p>
<p>La sentencia refuerza la protección judicial del derecho a la intimidad de las figuras públicas frente a la difusión o el comentario de informaciones de carácter estrictamente privado, incluso cuando no llegan a hacerse públicas de forma directa.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Estados Unidos incauta 400 dominios que retransmitían de forma ilegal partidos del Mundial 2026',
    summary: 'La operación, desarrollada por el Departamento de Justicia estadounidense con el apoyo de la FIFA, busca frenar la piratería de las emisiones del torneo.',
    content: `<p>El Departamento de Justicia de Estados Unidos, con el apoyo de la FIFA, ha incautado unos 400 dominios que retransmitían de forma ilegal partidos del Mundial 2026, en una operación dirigida a frenar la piratería de las emisiones del torneo.</p>
<p>La medida se enmarca en los esfuerzos habituales de los organismos deportivos internacionales para proteger los derechos de retransmisión de sus grandes eventos, cuya venta constituye una de las principales fuentes de ingresos del fútbol a nivel mundial.</p>
<p>La incautación de dominios se produce en pleno desarrollo del torneo, en un momento de máxima audiencia y, por tanto, de mayor incentivo para las plataformas de piratería que ofrecen las retransmisiones sin autorización.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Inglaterra remonta a Congo, Estados Unidos vence a Bosnia-Herzegovina y Bélgica se impone a Senegal en el Mundial 2026',
    summary: 'Inglaterra dio la vuelta al marcador con un doblete de Harry Kane, mientras Bélgica remontó un 0-2 en los últimos minutos para ganar finalmente 3-2 ante Senegal.',
    content: `<p>La jornada de ayer en el Mundial 2026 dejó varios resultados destacados. Inglaterra remontó ante la República Democrática del Congo gracias a un doblete de Harry Kane, después de que los congoleños se hubieran adelantado en el marcador durante la primera parte del encuentro.</p>
<p>Estados Unidos, por su parte, logró la victoria ante Bosnia-Herzegovina, asegurando su presencia en la siguiente fase del torneo y evitando así una eliminación prematura que muchos analistas daban por posible antes del inicio del partido.</p>
<p>El encuentro más espectacular de la jornada correspondió a Bélgica y Senegal: los belgas remontaron un 0-2 en contra en los dos últimos minutos del tiempo reglamentario y en la prórroga terminaron imponiéndose por 3-2, en uno de los partidos más intensos del campeonato hasta la fecha.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'España afronta hoy a Austria en el Mundial 2026, con Portugal-Croacia y Suiza-Argelia también en juego',
    summary: 'La selección española juega a las 21:00 horas con el objetivo de asegurar su pase a la siguiente fase, en una jornada que completan los duelos entre Portugal y Croacia, y Suiza y Argelia.',
    content: `<p>La selección española afronta hoy a Austria a las 21:00 horas en el Mundial 2026, en un partido clave para asegurar su continuidad en el torneo y consolidar su posición en la fase en la que se encuentra actualmente compitiendo.</p>
<p>La misma jornada incluye también los duelos entre Portugal y Croacia, y entre Suiza y Argelia, ambos programados en horarios de madrugada para el público español, a la 1:00 y a las 5:00 horas respectivamente.</p>
<p>El resultado de estos encuentros definirá buena parte del cuadro de cara a la siguiente eliminatoria, en la que España podría enfrentarse a Portugal o Croacia en función de cómo evolucione la fase actual del campeonato.</p>`,
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
