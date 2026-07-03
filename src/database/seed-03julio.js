require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-07-03 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'China inaugura la primera fábrica de vacunas personalizadas contra el cáncer con inteligencia artificial',
    summary: 'La planta, que ha costado 16,1 millones de dólares, es capaz de diseñar y producir una vacuna a medida en tan solo 24 horas gracias a un sistema de IA que analiza el ADN del tumor de cada paciente.',
    content: `<p>China ha inaugurado la primera fábrica del mundo de vacunas personalizadas contra el cáncer basadas en inteligencia artificial. La instalación, que ha supuesto una inversión de 16,1 millones de dólares, es capaz de fabricar vacunas hechas a medida para cada paciente en apenas un día.</p>
<p>El proceso se apoya en un sistema de inteligencia artificial que analiza el ADN tumoral del enfermo y diseña una vacuna personalizada en un plazo de aproximadamente 24 horas, un tiempo notablemente inferior al que requieren los enfoques tradicionales de la inmunoterapia oncológica.</p>
<p>Las vacunas personalizadas contra el cáncer buscan enseñar al sistema inmunitario del paciente a reconocer y atacar las células tumorales a partir de las mutaciones específicas de su tumor, un campo en el que se concentran grandes esperanzas de la oncología moderna.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Coca-Cola arrebata a Pepsi el contrato de bebidas de la cadena hotelera Marriott tras más de 30 años',
    summary: 'La compañía se convierte en proveedor oficial de bebidas de Marriott International, una de las mayores cadenas hoteleras del mundo, poniendo fin a un acuerdo con Pepsi que estaba vigente desde 1992.',
    content: `<p>Coca-Cola ha arrebatado a Pepsi el contrato de suministro de bebidas de Marriott International, una de las mayores cadenas hoteleras del mundo, y se convierte en su proveedor oficial. El acuerdo pone fin a una relación comercial entre Marriott y Pepsi que se mantenía vigente desde 1992.</p>
<p>Con el cambio, los establecimientos de la cadena pasarán a ofrecer el catálogo de refrescos de Coca-Cola en lugar del de su histórico competidor, un movimiento de gran valor simbólico y comercial dentro de la larga rivalidad entre ambas compañías de bebidas.</p>
<p>Los contratos de suministro con grandes cadenas hoteleras, de restauración o de ocio son especialmente codiciados por las marcas de refrescos, ya que garantizan un volumen estable de ventas y una fuerte presencia de marca ante millones de consumidores.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'El Tribunal de Justicia de la UE confirma definitivamente la multa de 4.100 millones a Google por abuso de posición dominante en Android',
    summary: 'La justicia europea concluye que en 2018 la compañía imponía a los fabricantes de móviles condiciones que favorecían a Google Search y Chrome, reforzando de forma artificial su dominio en el mercado de las búsquedas.',
    content: `<p>El Tribunal de Justicia de la Unión Europea ha confirmado de forma definitiva la multa de unos 4.100 millones de euros impuesta a Google por abuso de posición dominante con su sistema operativo Android, poniendo fin a un largo proceso judicial.</p>
<p>La sentencia concluye que en 2018 la empresa imponía a los fabricantes de teléfonos móviles condiciones que favorecían a Google Search y al navegador Chrome, reforzando de manera artificial su dominio en el mercado de las búsquedas en internet.</p>
<p>La confirmación de la sanción supone un nuevo revés para Google en su prolongado enfrentamiento con las autoridades de competencia europeas, que en los últimos años han multado en varias ocasiones al gigante tecnológico por prácticas consideradas contrarias a la libre competencia.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'China desarrolla un sistema móvil capaz de lanzar drones militares sin necesidad de pista de aterrizaje',
    summary: 'Se trata de una catapulta electromagnética integrada en varios camiones que se acoplan entre sí, lo que permite desplegar y lanzar aeronaves no tripuladas prácticamente desde cualquier ubicación.',
    content: `<p>China ha desarrollado un sistema móvil capaz de lanzar drones militares sin necesidad de una pista de aterrizaje. La tecnología se basa en una catapulta electromagnética que se integra en varios camiones que se acoplan entre sí para formar la plataforma de lanzamiento.</p>
<p>Gracias a este diseño modular, el sistema puede transportarse y desplegarse prácticamente en cualquier ubicación, lo que otorga una gran flexibilidad operativa al permitir lanzar aeronaves no tripuladas desde lugares que carecen de infraestructura aeroportuaria.</p>
<p>El desarrollo se enmarca en la creciente apuesta militar por los drones y por los sistemas de lanzamiento móviles, que reducen la dependencia de bases fijas y complican la tarea de detección y neutralización por parte de un eventual adversario.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'GLM 5.2, el nuevo modelo de IA de una startup china, planta cara a los estadounidenses en programación',
    summary: 'Lanzado en junio, el modelo ofrece un rendimiento competitivo en tareas de programación y agénticas a un precio inferior al de rivales estadounidenses como ChatGPT o Claude.',
    content: `<p>Una startup china ha lanzado GLM 5.2, un nuevo modelo de inteligencia artificial que está llamando la atención en el sector por su rendimiento competitivo, especialmente en tareas de programación y en las llamadas tareas agénticas.</p>
<p>El principal atractivo del modelo es su precio, inferior al de los grandes modelos estadounidenses como ChatGPT o Claude en este tipo de tareas, lo que lo convierte en una alternativa atractiva para desarrolladores y empresas sensibles al coste.</p>
<p>El modelo, presentado en junio de este año, se suma a la creciente ofensiva de las empresas chinas de inteligencia artificial, que buscan competir de tú a tú con las estadounidenses combinando prestaciones cada vez más altas con precios más agresivos.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Hasbro pide a los actores infantiles de Peppa Pig ceder sus voces para replicarlas con inteligencia artificial',
    summary: 'La petición, que afectaría a futuros productos de la franquicia, ha desatado una fuerte polémica sobre el uso de las voces de menores para ser clonadas mediante IA.',
    content: `<p>La popular franquicia infantil Peppa Pig se ha visto envuelta en una controversia después de que Hasbro pidiera a los actores infantiles que ponen voz a los personajes ceder sus voces para que puedan ser replicadas mediante inteligencia artificial en futuros productos de la marca.</p>
<p>La propuesta implicaría que las voces de los menores pudieran reproducirse de forma sintética sin necesidad de volver a contar con ellos en el estudio de grabación, algo que ha generado un intenso debate sobre los derechos de imagen y voz de los niños que trabajan en producciones audiovisuales.</p>
<p>El caso se suma a la creciente preocupación en la industria del entretenimiento por el uso de la inteligencia artificial para clonar voces de actores, un asunto que ya ha provocado conflictos laborales y demandas en distintos sectores creativos.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'Apple TV adaptará "Neuromante", la novela fundacional del cyberpunk, en una serie de diez capítulos',
    summary: 'La obra de William Gibson, publicada en 1984 y considerada el texto que dio origen al género, tendrá su primera gran adaptación televisiva, aunque aún se desconoce la fecha de estreno.',
    content: `<p>Apple TV está adaptando "Neuromante", la novela de 1984 considerada la obra fundacional del género cyberpunk, en una serie de televisión de diez capítulos. Se trata de una de las adaptaciones más esperadas por los seguidores de la ciencia ficción.</p>
<p>Escrita por William Gibson, "Neuromante" definió buena parte de la estética y los temas del cyberpunk —las megacorporaciones, el ciberespacio, la inteligencia artificial y la fusión entre humano y máquina— y ha influido durante décadas en el cine, los videojuegos y la cultura popular.</p>
<p>La fecha de estreno de la serie aún no se ha anunciado. La adaptación de una obra tan influyente y compleja despierta grandes expectativas, pero también cierta cautela entre los aficionados por la dificultad de trasladar a la pantalla su denso universo narrativo.</p>`,
    image_url: null, category_id: CAT.cul,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'La segunda etapa de un cohete Falcon 9 de SpaceX impactará contra la Luna el 5 de agosto',
    summary: 'El objeto, lanzado en 2025, lleva casi un año viajando sin control en una órbita elíptica que cruzará la trayectoria de la Luna y se espera que abra un cráter de unos 17 metros de diámetro.',
    content: `<p>La segunda etapa de un cohete Falcon 9 de SpaceX, lanzado en 2025, va a impactar contra la Luna el próximo 5 de agosto de este año. El objeto lleva ya casi un año viajando sin control por el espacio en una órbita elíptica.</p>
<p>Esa órbita va a cruzarse con la trayectoria de la Luna, y se espera que la colisión genere un cráter de unos 17 metros de diámetro en la superficie del satélite. No supone ningún riesgo para la Tierra, pero ilustra el creciente problema de la basura espacial.</p>
<p>Los restos de cohetes y otros objetos que quedan a la deriva tras las misiones espaciales se han convertido en una preocupación creciente para las agencias y empresas del sector, ante el riesgo de colisiones tanto en órbita terrestre como con otros cuerpos celestes.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'Investigadores de Minnesota crean por primera vez una célula sintética ensamblada pieza por pieza',
    summary: 'El equipo asegura haber construido, a partir de componentes químicos no vivos, un organismo simple capaz de alimentarse, crecer y replicarse durante varias generaciones.',
    content: `<p>Un equipo de la Universidad de Minnesota afirma haber construido por primera vez una célula sintética ensamblada pieza por pieza a partir de componentes químicos no vivos, un hito que abre nuevas vías para entender el origen y los requisitos mínimos de la vida.</p>
<p>Según los investigadores, la célula creada es capaz de alimentarse, crecer y replicarse durante varias generaciones, aunque sigue siendo un organismo extremadamente simple y frágil, muy alejado de la complejidad de las células naturales.</p>
<p>El avance permitirá estudiar cuáles son los ingredientes mínimos imprescindibles para que exista la vida y abre la puerta, a largo plazo, al diseño de organismos artificiales capaces de realizar funciones específicas, un terreno con enormes implicaciones científicas y éticas.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── ECONOMÍA Y CRIPTOMONEDAS ───────────────────────────────────
  {
    title: 'Las bolsas cierran en verde con Apple subiendo casi un 5% y el bitcoin en 61.563 dólares',
    summary: 'El S&P 500 avanza hasta los 7.443 puntos y el Ibex 35 acompaña las subidas, mientras el oro, la plata y las criptomonedas repuntan y el euro se aprecia hasta los 1,142 dólares.',
    content: `<p>Los mercados financieros cierran la jornada de este viernes en positivo, con un tono generalizado de subidas. El S&P 500 avanza hasta los 7.443 puntos y la bolsa española acompaña la tendencia alcista con el Ibex 35 en verde.</p>
<p>Uno de los grandes protagonistas del día es Apple, cuyas acciones suben casi un 5%. En el mercado de criptomonedas, el bitcoin se sitúa en los 61.563 dólares, alejándose de la barrera de los 60.000, mientras que el oro y la plata registran también ligeras subidas.</p>
<p>El petróleo cotiza en torno a los 71,65 dólares y el euro se aprecia frente al dólar hasta los 1,142 dólares, en una sesión de optimismo bursátil sin grandes sobresaltos para los inversores.</p>`,
    image_url: null, category_id: CAT.eco,
  },
  {
    title: 'Una gran caravana de petroleros iraníes queda varada en alta mar sin encontrar compradores',
    summary: 'Las refinerías asiáticas no necesitan más crudo y China, principal cliente de Irán, ha reducido drásticamente su demanda, mientras la UE y Reino Unido mantienen fuertes restricciones sobre el petróleo iraní.',
    content: `<p>Una gran caravana de buques petroleros iraníes ha quedado detenida en alta mar al no encontrar compradores para su crudo, en un reflejo de las dificultades que atraviesa Irán para colocar su producción en el mercado internacional.</p>
<p>Las refinerías asiáticas no necesitan actualmente más crudo, y China, que es el principal cliente del petróleo iraní, ha reducido de forma drástica su demanda. A ello se suman las fuertes restricciones que la Unión Europea y Reino Unido mantienen sobre las importaciones procedentes de Irán.</p>
<p>Con estos mercados prácticamente cerrados, los petroleros permanecen a la espera en el mar, una situación que evidencia el impacto de las sanciones y de la coyuntura energética sobre la economía iraní, muy dependiente de sus exportaciones de crudo.</p>`,
    image_url: null, category_id: CAT.eco,
  },

  // ─── VIDEOJUEGOS ──────────────────────────────────────────────
  {
    title: 'Xbox estudiaría cerrar el estudio Arkane y "Marvel\'s Blade" podría ser cancelado',
    summary: 'Tras varios años complicados para el estudio, Microsoft valoraría su cierre definitivo, lo que pondría en peligro el desarrollo del videojuego sobre el personaje de Marvel.',
    content: `<p>Xbox estaría valorando cerrar de forma definitiva el estudio Arkane, después de varios años complicados para el desarrollador, según distintas informaciones del sector del videojuego.</p>
<p>Como consecuencia directa de esta posible decisión, el desarrollo del videojuego "Marvel's Blade", sobre el conocido personaje de Marvel, podría quedar cancelado, en lo que supondría un nuevo golpe para los planes de Microsoft en el terreno de los grandes lanzamientos.</p>
<p>El posible cierre se enmarca en un periodo de reestructuraciones y recortes en la industria del videojuego, que en los últimos años ha vivido numerosos despidos y cierres de estudios pese al buen momento comercial del sector.</p>`,
    image_url: null, category_id: CAT.tec,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Irán se prepara para enterrar al líder supremo Ali Jamenei entre una semana de luto masivo',
    summary: 'El país ha decretado siete días de luto y organiza procesiones multitudinarias. Los restos del ayatolá llegarán este sábado a la principal mezquita de Teherán.',
    content: `<p>Irán se prepara para enterrar a su líder supremo, el ayatolá Ali Jamenei, en una ceremonia que marcará un momento histórico para la República Islámica. El país ha declarado una semana de luto masivo y organiza procesiones multitudinarias en su memoria.</p>
<p>Está previsto que los restos del líder supremo lleguen este sábado a la principal mezquita de Teherán, donde se concentrará una gran cantidad de fieles para despedir a quien ha sido la máxima autoridad política y religiosa del país durante décadas.</p>
<p>La muerte de Jamenei abre un periodo de incertidumbre sobre la sucesión al frente del poder en Irán, en un momento de fuerte tensión regional y con las conversaciones con Estados Unidos estancadas, lo que añade una capa adicional de inestabilidad a Oriente Próximo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Las conversaciones entre Estados Unidos e Irán en Doha terminan sin avances hacia la paz',
    summary: 'Las negociaciones técnicas concluyen en punto muerto, hasta el punto de que los principales negociadores iraníes ni siquiera asistieron a los encuentros.',
    content: `<p>Las conversaciones técnicas que Estados Unidos e Irán mantenían en Doha, la capital de Catar, han terminado sin avances hacia una paz duradera entre ambos países, en un nuevo revés para los intentos de rebajar la tensión en la región.</p>
<p>El estancamiento de las negociaciones quedó reflejado en el hecho de que los principales negociadores iraníes ni siquiera asistieron a los encuentros, una señal del escaso margen de acuerdo entre las dos partes en el contexto actual.</p>
<p>El fracaso de estas conversaciones coincide con un momento de gran fragilidad para Irán, marcado por la muerte de su líder supremo y por las crecientes dificultades económicas derivadas de las sanciones internacionales.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un hombre muere tras prenderse fuego frente a la sede de la ONU en Nueva York',
    summary: 'El incidente ocurrió a las 18:30, hora local. La víctima se habría envuelto en la bandera del Tíbet antes de prenderse fuego y retransmitió los hechos en las redes sociales.',
    content: `<p>Un hombre ha muerto tras prenderse fuego frente a la sede de la Organización de las Naciones Unidas en Nueva York. El incidente ocurrió a las 18:30, hora local, y la víctima fue trasladada al hospital, donde se confirmó su fallecimiento.</p>
<p>Según las primeras informaciones, el hombre se habría envuelto en la bandera del Tíbet antes de prenderse fuego, y habría retransmitido todo el suceso en las redes sociales, en lo que apunta a un acto de protesta de fuerte carga simbólica.</p>
<p>Las autoridades investigan las circunstancias exactas del suceso y los motivos que llevaron a la víctima a cometer este acto extremo frente a la sede del organismo internacional.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'El Gobierno alemán anuncia una amplia reforma con alivio fiscal para las rentas bajas y cambios en el mercado laboral',
    summary: 'Las familias con menos ingresos recibirán 600 euros al año desde 2027, la baja médica pasará a ser obligatoria desde el primer día y se retrasará gradualmente la edad de jubilación hasta los 70 años.',
    content: `<p>El Gobierno alemán ha anunciado un amplio paquete de reformas que incluye un alivio fiscal para las rentas bajas: las familias con menos ingresos recibirán una ayuda de 600 euros al año a partir del 1 de enero de 2027.</p>
<p>En el ámbito laboral, la baja médica pasará a ser obligatoria desde el primer día y se pondrá fin a los justificantes médicos por teléfono, con el objetivo de aumentar la productividad, reducir la burocracia y dar más flexibilidad a las empresas. También se retrasará de forma gradual la edad de jubilación, que pasará de los 65 años actuales a los 70 en el horizonte de 2092, y se introducirá una pensión privada obligatoria inspirada en el modelo sueco.</p>
<p>El plan contempla además impulsar la construcción de vivienda asequible y reducir en un 8% la plantilla de los ministerios mediante la digitalización, en una de las reformas más ambiciosas de los últimos años en el país.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Rescatan a 16 menores que vivían en condiciones infrahumanas en una vivienda de Ohio',
    summary: 'Los niños, de entre 18 meses y 18 años, se encontraban hacinados, aislados y rodeados de suciedad extrema. Cuatro familiares han sido detenidos con cargos por abuso y negligencia.',
    content: `<p>Las autoridades de Ohio, en Estados Unidos, han rescatado a 16 menores de entre 18 meses y 18 años que llevaban años viviendo en condiciones infrahumanas dentro de una vivienda. Los niños se encontraban hacinados, aislados y rodeados de una suciedad extrema.</p>
<p>Tras el rescate, cuatro familiares han sido detenidos y se enfrentan a cargos por abuso y negligencia, mientras los servicios sociales se hacen cargo de los menores para garantizar su atención y recuperación.</p>
<p>El caso ha causado una fuerte conmoción en la zona y ha reabierto el debate sobre la detección temprana de situaciones de maltrato y abandono infantil, que en ocasiones se prolongan durante años sin ser advertidas por el entorno.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un brote de salmonela vinculado a fideos instantáneos afecta a más de 100 personas en 14 países europeos',
    summary: 'El origen se atribuye a un producto de un fabricante ucraniano. Hay casos confirmados en catorce países y 49 personas han requerido hospitalización, aunque las autoridades no han detallado la marca ni el lote afectados.',
    content: `<p>Más de 100 personas han enfermado en 14 países europeos a causa de un brote de salmonela relacionado con fideos instantáneos con sabor. El origen se atribuye a un producto elaborado por un fabricante ucraniano.</p>
<p>Se han confirmado casos en Austria, Reino Unido, Chequia, Dinamarca, Estonia, Francia, Alemania, Hungría, Letonia, Lituania, Países Bajos, Noruega, Polonia y Suecia. En total, 49 personas han requerido hospitalización por la infección.</p>
<p>Las autoridades sanitarias han pedido a la población que evite consumir el producto afectado, aunque de momento no han hecho públicos ni la marca ni el lote concretos implicados, lo que dificulta a los consumidores identificar el artículo peligroso.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un piloto de 66 años muere al estrellar su avioneta contra el rascacielos más alto de Pekín',
    summary: 'El impacto contra la torre CITIC, el 26 de junio, dejó 13 heridos y un agujero en la fachada. Las autoridades investigan el suceso como un posible suicidio.',
    content: `<p>Un piloto chino de 66 años murió al estrellar su avioneta contra la torre CITIC, el rascacielos más alto de Pekín, el pasado 26 de junio. El impacto dejó 13 heridos y un agujero visible en la fachada del edificio.</p>
<p>Según las investigaciones, el hombre estaba divorciado, vivía solo y no tenía un empleo fijo. Sufría insomnio y ansiedad desde hacía años y había dejado en su diario personal múltiples referencias a ideas suicidas, por lo que se baraja la hipótesis del suicidio.</p>
<p>Tras el accidente se impuso un fuerte control informativo: se retiraron fotografías y vídeos del suceso de las redes sociales y se impidió a los periodistas registrar imágenes, aunque la situación se ha ido normalizando con el paso de los días.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Ocho monjes mueren arrollados por una camioneta conducida por un niño de 11 años en Tailandia',
    summary: 'El vehículo embistió a un grupo de monjes que realizaba una peregrinación en el noreste del país. El accidente dejó además 14 heridos, cuatro de ellos en estado crítico.',
    content: `<p>Ocho monjes han muerto y catorce han resultado heridos, cuatro de ellos en estado crítico, después de que una camioneta conducida por un niño de 11 años arrollara a un grupo que realizaba una peregrinación en el noreste de Tailandia.</p>
<p>El menor, que se encontraba al volante del vehículo, ha quedado bajo custodia policial mientras las autoridades investigan cómo pudo un niño de esa edad conducir la camioneta y las responsabilidades de los adultos a su cargo.</p>
<p>El suceso ha causado una gran conmoción en el país, de fuerte tradición budista, donde las peregrinaciones y los desplazamientos de monjes forman parte habitual de la vida religiosa.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Una bomba en una cafetería del centro de Damasco deja seis muertos y 22 heridos',
    summary: 'La explosión se produjo en una zona concurrida cercana al Palacio de Justicia, en el centro de la capital siria.',
    content: `<p>Al menos seis personas han muerto y 22 han resultado heridas tras la explosión de una bomba en una cafetería situada en una zona concurrida del centro de Damasco, cerca del Palacio de Justicia, en Siria.</p>
<p>El atentado se produjo en pleno corazón de la capital siria, en una zona de gran afluencia de personas, lo que agravó el número de víctimas del ataque.</p>
<p>El suceso pone de manifiesto la persistente fragilidad de la seguridad en Siria, un país marcado por años de conflicto y por una compleja situación política que dificulta la estabilización de sus principales ciudades.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Alemania acusa a Ucrania de haber ordenado el sabotaje de los gasoductos Nord Stream',
    summary: 'La fiscalía alemana atribuye a Kiev la destrucción con explosivos de los gasoductos Nord Stream 1 y 2 en septiembre de 2022, con el objetivo de cortar el suministro de gas ruso a Europa.',
    content: `<p>Alemania acusa a Ucrania de haber ordenado el sabotaje de los gasoductos Nord Stream 1 y 2, que fueron destruidos con explosivos en septiembre de 2022 en el mar Báltico, en uno de los episodios más enigmáticos de la guerra.</p>
<p>Según la fiscalía alemana, el motivo atribuido a Ucrania sería impedir el suministro de gas ruso a Europa y reducir así la capacidad del Kremlin para financiar la guerra en territorio ucraniano a través de sus exportaciones energéticas.</p>
<p>Ucrania no ha reconocido oficialmente su responsabilidad en el sabotaje, aunque las sospechas sobre la implicación de actores ucranianos venían circulando desde hacía tiempo. El caso añade tensión a las ya complicadas relaciones dentro del bloque de apoyo occidental a Kiev.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un ataque masivo ruso con 74 misiles y casi 500 drones sobre Kiev deja al menos 18 muertos',
    summary: 'La ofensiva causó además 90 heridos. La Unión Europea prepara nuevas sanciones contra los fabricantes rusos de drones en respuesta a la escalada de ataques.',
    content: `<p>Rusia ha lanzado un ataque masivo contra Kiev con 74 misiles y 496 drones, que ha dejado al menos 18 personas muertas y otras 90 heridas, en una de las ofensivas más intensas de las últimas semanas sobre la capital ucraniana.</p>
<p>En respuesta a la escalada de ataques, la Unión Europea prepara un nuevo paquete de sanciones dirigido específicamente contra los fabricantes rusos de drones, que se han convertido en una pieza clave de la maquinaria militar del Kremlin.</p>
<p>Según los medios rusos, el objetivo principal del ataque fue una empresa dedicada a la producción de sistemas de control para misiles ucranianos, aunque el elevado número de víctimas civiles ha vuelto a generar condenas internacionales.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La guerra entre Rusia y Ucrania supera los dos millones de bajas totales',
    summary: 'Rusia habría sufrido 1,4 millones de bajas, cerca del 1% de su población, mientras Ucrania supera el medio millón, con unos 150.000 muertos; el avance de los drones marca la proporción de pérdidas.',
    content: `<p>La guerra entre Rusia y Ucrania ha superado los dos millones de bajas totales, entre muertos, heridos y desaparecidos de ambos bandos, según los últimos balances disponibles sobre el conflicto.</p>
<p>Rusia habría sufrido en torno a 1,4 millones de bajas, una cifra que equivale aproximadamente al 1% de su población, y actualmente no estaría logrando reclutar soldados al mismo ritmo al que los pierde. Ucrania, por su parte, registra más de medio millón de bajas, entre ellas unos 150.000 muertos.</p>
<p>Los análisis apuntan a que, en la primera mitad de este año, por cada baja ucraniana se habrían producido ocho rusas, una proporción que se atribuye en gran parte al avance tecnológico de los drones y a su uso intensivo en el campo de batalla.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── LATINOAMÉRICA (VENEZUELA) ────────────────────────────────
  {
    title: 'El terremoto de Venezuela deja ya casi 3.000 muertos y más de 11.000 heridos',
    summary: 'Miles de supervivientes se hacinan en refugios sin agua potable y en condiciones sanitarias muy precarias, lo que agrava el riesgo de una crisis de salud pública.',
    content: `<p>El balance del terremoto que ha golpeado a Venezuela asciende ya a casi 2.950 muertos y más de 11.000 heridos, en una de las mayores catástrofes naturales de la historia reciente del país.</p>
<p>Miles de supervivientes se encuentran hacinados en refugios que carecen de agua potable y presentan condiciones sanitarias muy precarias, una situación que resulta especialmente peligrosa por el riesgo de brotes de enfermedades y de una crisis de salud pública.</p>
<p>Las labores de rescate y atención a los damnificados continúan en la zona, mientras las autoridades y las organizaciones internacionales tratan de coordinar la ayuda ante la magnitud de la emergencia.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Estados Unidos despliega 1.000 efectivos y promete 300 millones de dólares en ayuda a Venezuela',
    summary: 'Washington envía 900 militares y 100 efectivos del Departamento de Estado para apoyar el rescate y la reconstrucción, aunque los daños se estiman en 6.700 millones de dólares.',
    content: `<p>Estados Unidos ha desplegado 900 militares y otros 100 efectivos del Departamento de Estado para apoyar las labores de rescate y reconstrucción en Venezuela tras el devastador terremoto que ha sacudido el país.</p>
<p>Washington ha prometido además 300 millones de dólares en ayuda, una cifra que resulta modesta si se compara con la magnitud de los daños, estimados en unos 6.700 millones de dólares, lo que anticipa que la recuperación del país será lenta y costosa.</p>
<p>El despliegue estadounidense se enmarca en una operación internacional de asistencia a la que se han sumado numerosos países y organismos, ante la dimensión de una catástrofe que ha superado la capacidad de respuesta de las autoridades venezolanas.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Más de 100 migrantes venezolanos deportados desde EE. UU. mueren en el terremoto de La Guaira',
    summary: 'El grupo había llegado pocas horas antes del doble seísmo y se alojaba en un hotel para tramitar su documentación; el edificio se derrumbó y la mayoría fallecieron.',
    content: `<p>Un grupo de más de 100 migrantes venezolanos que habían sido deportados desde Estados Unidos llegó a La Guaira pocas horas antes del doble terremoto que golpeó la zona, en una trágica coincidencia.</p>
<p>Los migrantes habían sido alojados en un hotel para procesar su documentación tras la deportación. Cuando se produjo el seísmo, el edificio colapsó y la mayoría de ellos perdieron la vida atrapados entre los escombros.</p>
<p>El caso ha añadido un componente especialmente dramático a la catástrofe, al tratarse de personas que acababan de regresar al país tras ser expulsadas de Estados Unidos y que encontraron la muerte apenas unas horas después de su llegada.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Rescatan con vida a un guardia de seguridad venezolano tras ocho días atrapado entre los escombros',
    summary: 'Los equipos tardaron más de 100 horas en llegar hasta él tras escuchar sus gritos de auxilio. Sobrevivió prácticamente ileso protegido por una pequeña cabina de hormigón.',
    content: `<p>Un guardia de seguridad venezolano ha sido rescatado con vida después de pasar ocho días atrapado entre los escombros tras el terremoto, en un rescate que se considera casi milagroso dado el tiempo transcurrido.</p>
<p>Los equipos de rescate tardaron más de 100 horas en llegar hasta él desde que escucharon sus gritos de auxilio. Durante ese tiempo le hicieron llegar agua, mantas, una mascarilla e incluso una vía para administrarle suero mientras trabajaban para liberarlo.</p>
<p>El hombre ha salido prácticamente ileso gracias a que se encontraba protegido por una pequeña cabina de hormigón desde la que trabajaba, una estructura que resistió el derrumbe y le salvó la vida.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'La Audiencia Nacional condena a dos años y medio de prisión a Francisco Granados por el caso Púnica',
    summary: 'El exconsejero madrileño y exalcalde de Valdemoro del PP es condenado por fraude continuado y prevaricación por facilitar la adjudicación de contratos públicos a la empresa Waiter Music entre 2007 y 2014.',
    content: `<p>La Audiencia Nacional ha impuesto una pena de dos años y seis meses de prisión a Francisco Granados, exconsejero madrileño y exalcalde de Valdemoro del PP, por fraude continuado y prevaricación dentro del caso Púnica.</p>
<p>Según la sentencia, Granados facilitó la adjudicación de contratos públicos a la empresa Waiter Music entre 2007 y 2014. A cambio, la compañía ofrecía servicios no facturados como extras en fiestas patronales, actos privados del PP y servicios particulares para cargos políticos.</p>
<p>La trama afectó a numerosos ayuntamientos gobernados por el PP madrileño, entre ellos Valdemoro, Móstoles, San Martín de la Vega, Ajalvir, Chinchón, Ciempozuelos, Torrejón de Velasco y Moraleja del Medio, en uno de los grandes casos de corrupción de la Comunidad de Madrid.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El Tribunal de Apelación de París absuelve al histórico dirigente de ETA Josu Ternera',
    summary: 'La justicia francesa lo absuelve del delito de pertenencia a banda armada entre 2002 y 2005, aunque autoriza su entrega a España, que lo reclama por el atentado de 1987 contra la casa cuartel de Zaragoza.',
    content: `<p>El Tribunal de Apelación de París ha absuelto al histórico dirigente de ETA Josu Ternera en el juicio por pertenencia a banda armada entre 2002 y 2005, dejándolo libre de esa causa concreta ante la justicia francesa.</p>
<p>No obstante, el tribunal ha autorizado su entrega a España, que lo reclama por el atentado de 1987 contra la casa cuartel de Zaragoza, que dejó 11 muertos y 88 heridos, así como por la financiación de ETA a través de las herriko tabernas.</p>
<p>Si finalmente es entregado y condenado en España, Josu Ternera, que tiene 75 años y vive en el País Vasco francés bajo vigilancia desde el año 2000, podría enfrentarse a una pena de hasta 15 años de cárcel.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Juanma Moreno es investido presidente de la Junta de Andalucía con el apoyo de Vox',
    summary: 'El líder del PP logra la investidura gracias a los 15 diputados de Vox, con quien ha firmado un acuerdo de gobierno apenas media hora antes de la votación que da entrada a la formación en el Ejecutivo andaluz.',
    content: `<p>Juanma Moreno, del PP, ha sido investido presidente de la Junta de Andalucía tras obtener el apoyo de los 15 diputados de Vox, con quien su partido ha cerrado un acuerdo de gobierno firmado apenas media hora antes de la votación.</p>
<p>El pacto incluye la entrada de Vox en el gobierno andaluz. Manuel Gavira será el vicepresidente y consejero de un área que agrupa turismo, desregulación, justicia y administración local, en lo que supone un giro respecto a la anterior etapa de gobierno del PP en solitario.</p>
<p>El acuerdo marca un cambio significativo en el escenario político andaluz y consolida la fórmula de gobierno de coalición entre PP y Vox en una de las comunidades autónomas más pobladas de España.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El juez Pedraz imputa a la directora general de la Guardia Civil por el caso Leire Díaz',
    summary: 'Santiago Pedraz investiga a Mercedes González y al DAO Manuel Llamas por presunta prevaricación y obstrucción a la justicia, tras las reuniones mantenidas con Leire Díaz.',
    content: `<p>El juez Santiago Pedraz ha imputado a la directora general de la Guardia Civil, Mercedes González, y al director adjunto operativo (DAO) Manuel Llamas, por presuntos delitos de prevaricación administrativa y obstrucción a la justicia dentro del llamado caso Leire Díaz.</p>
<p>Según la investigación, Mercedes González mantuvo reuniones con Leire Díaz, quien presumía de tener una relación de confianza con ella. Díaz habría intentado utilizar esa relación para activar investigaciones internas contra agentes que trabajaban en causas relacionadas con el PSOE.</p>
<p>El caso apunta a un presunto intento de interferir en el trabajo de agentes de la Guardia Civil que investigaban asuntos que afectaban al partido en el Gobierno, lo que ha elevado la tensión política en torno a la instrucción judicial.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La Agencia Tributaria se persona en la causa contra Zapatero por presunto contrabando y fraude fiscal',
    summary: 'La Abogacía del Estado se suma al proceso abierto por las joyas de alta gama, tasadas en más de 1,3 millones de euros, halladas en una caja fuerte de su despacho en la calle Ferraz.',
    content: `<p>La Agencia Tributaria, a través de la Abogacía del Estado, se ha personado en la causa abierta contra Zapatero por presunto contrabando y fraude fiscal, en relación con unas joyas de alta gama halladas en una caja fuerte de su despacho de la calle Ferraz.</p>
<p>Las joyas están tasadas en más de 1,3 millones de euros. En su declaración del pasado 17 de junio, Zapatero se acogió a su derecho a no declarar y desde entonces no ha aportado documentación que respalde una versión sobre el origen de las piezas.</p>
<p>La ausencia de explicaciones sobre si se trataría de regalos, de una herencia o de otra procedencia mantiene abierto el caso, mientras la personación de la Agencia Tributaria refuerza la vía fiscal de la investigación.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La Seguridad Social alcanza un máximo histórico de 22,4 millones de afiliados en junio',
    summary: 'El récord se apoya en gran parte en la regularización de inmigrantes y el afloramiento de empleo irregular; seis de cada diez nuevos empleos los ocupan trabajadores extranjeros.',
    content: `<p>La Seguridad Social alcanzó en junio de 2026 un máximo histórico de 22,4 millones de afiliados, consolidando la senda de crecimiento del empleo en España.</p>
<p>Según los datos, este récord se apoya en gran parte en la regularización masiva de inmigrantes y en el afloramiento de empleo que antes era irregular. De hecho, seis de cada diez nuevos empleos son ocupados por trabajadores inmigrantes.</p>
<p>La cifra refleja la creciente importancia de la población extranjera en el mercado laboral español, un factor que se ha convertido en clave para sostener el crecimiento del empleo y la afiliación a la Seguridad Social.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La Asamblea de Madrid reconoce al concebido no nacido como miembro de la unidad familiar',
    summary: 'La ley, aprobada con los votos de PP y Vox, permitirá que los embriones cuenten a efectos de ayudas públicas, beneficios fiscales y determinados trámites administrativos.',
    content: `<p>La Asamblea de Madrid ha dado luz verde, con los votos de PP y Vox, a una ley que reconoce al concebido no nacido —es decir, el feto en gestación— como miembro de la unidad familiar, aunque todavía no haya nacido.</p>
<p>La norma implica que los embriones contarán a efectos de acceso a ayudas públicas, beneficios fiscales y determinados trámites administrativos. Por ejemplo, a partir de las 14 semanas de embarazo la gestación computará de forma similar a la de un hijo ya nacido.</p>
<p>En la práctica, esto podría dar acceso a becas, al bono transporte, a ayudas al alquiler joven, a deducciones fiscales y al reconocimiento como familia numerosa, en una medida que ha generado un intenso debate político y social.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Vito Quiles se niega a entregarse a la policía y dice que Milei le ha ofrecido protección',
    summary: 'El activista, buscado por un presunto delito contra el honor tras difundir información falsa sobre una funcionaria de Hacienda, asegura que el presidente argentino le daría refugio en su embajada si la situación se complica.',
    content: `<p>El activista Vito Quiles se está negando a entregarse a la policía tras dictarse una orden de detención en su contra por un presunto delito contra el honor, y afirma que el presidente argentino, Javier Milei, le ha ofrecido protección en la embajada argentina si la situación se complica.</p>
<p>La denuncia contra Quiles se debe a que habría publicado en redes sociales información falsa sobre una funcionaria de Hacienda, al afirmar que la exvicepresidenta María Jesús Montero habría liberado de prisión a un asesor, algo que el demandante considera un bulo que dañó gravemente su reputación.</p>
<p>Según la denuncia, la difusión del nombre del funcionario le habría generado una persecución pública con insultos y amenazas. El caso se suma a la creciente actividad judicial en torno a la figura del activista.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Dos incendios forestales sin control queman unas 3.000 hectáreas en Aragón',
    summary: 'Los fuegos permanecen activos en Leciñena, en Zaragoza, y en La Fueva, en Huesca, en plena ola de calor.',
    content: `<p>Dos incendios forestales continúan activos y sin control en Aragón, afectando a unas 3.000 hectáreas en total. Uno de los fuegos se localiza en Leciñena, en la provincia de Zaragoza, y el otro en La Fueva, en Huesca.</p>
<p>Los equipos de extinción trabajan para tratar de controlar las llamas en una situación complicada por las altas temperaturas, que dificultan las labores y favorecen la rápida propagación del fuego.</p>
<p>Los incendios se producen en plena ola de calor, un contexto que multiplica el riesgo de fuegos forestales en buena parte del territorio español durante los meses de verano.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'La corresponsal Rosa María Calaf recibe el Premio Nacional de Televisión 2026',
    summary: 'El Ministerio de Cultura reconoce a una de las periodistas más veteranas y prestigiosas de RTVE con un galardón dotado con 30.000 euros.',
    content: `<p>Rosa María Calaf, una de las corresponsales más veteranas y reconocidas de Radiotelevisión Española, ha sido galardonada con el Premio Nacional de Televisión 2026, otorgado por el Ministerio de Cultura y dotado con 30.000 euros.</p>
<p>Calaf desarrolló una extensa carrera como corresponsal internacional para RTVE, cubriendo la actualidad desde numerosos países y convirtiéndose en un referente del periodismo televisivo español a lo largo de varias décadas.</p>
<p>El premio reconoce su trayectoria y su aportación al periodismo de calidad, en un momento en el que la figura del corresponsal internacional ha ganado valor como garantía de información rigurosa frente a la inmediatez de las redes sociales.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Ecologistas denuncian que los vasos reutilizables de los festivales solo sirven para cobrar más al público',
    summary: 'Las organizaciones aseguran que el modelo de vasos reutilizables que se usa en conciertos y festivales no está funcionando desde el punto de vista medioambiental.',
    content: `<p>Diversas organizaciones ecologistas están denunciando que el modelo de vasos reutilizables que se utiliza en festivales y conciertos no está funcionando como se esperaba desde el punto de vista medioambiental.</p>
<p>Según estas organizaciones, en la práctica el sistema sirve fundamentalmente para cobrar más dinero al público mediante los depósitos y recargos asociados a los vasos, sin lograr el impacto ambiental positivo que teóricamente justificaba su implantación.</p>
<p>La denuncia reabre el debate sobre la eficacia real de algunas medidas presentadas como sostenibles y sobre la necesidad de que estas iniciativas cumplan de verdad sus objetivos ecológicos y no se conviertan en un mero reclamo comercial.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Dos de cada tres inmigrantes regularizados en España podrían pedir la nacionalidad en solo dos años',
    summary: 'El 67% de los solicitantes son latinoamericanos y muchos se benefician de un procedimiento abreviado que reduce a dos años el plazo de diez exigido con carácter general al resto de extranjeros.',
    content: `<p>Dos de cada tres inmigrantes regularizados en España podrían solicitar la nacionalidad española en tan solo dos años, gracias a los acuerdos que España mantiene con numerosos países que reducen de forma notable los plazos habituales.</p>
<p>Esta situación se debe a que el 67% de los solicitantes son latinoamericanos, y muchos de ellos se benefician de un procedimiento abreviado que rebaja el plazo a dos años, frente a los diez años exigidos con carácter general a la mayoría de los extranjeros.</p>
<p>El dato refleja el peso creciente de la población latinoamericana entre quienes acceden a la nacionalidad española y anticipa un aumento significativo de las solicitudes en los próximos años.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'Unai Simón hace historia como el portero con más minutos consecutivos sin encajar en un Mundial',
    summary: 'El guardameta español alcanza los 519 minutos de imbatibilidad en la Copa del Mundo; el último gol que le marcaron fue en el España-Japón de Catar 2022.',
    content: `<p>El portero de la selección española Unai Simón ha hecho historia en los Mundiales al convertirse en el guardameta con más minutos consecutivos sin encajar un gol en la historia de la Copa del Mundo, alcanzando los 519 minutos de imbatibilidad.</p>
<p>El último tanto que le marcaron en la competición fue en el partido entre España y Japón disputado en el Mundial de Catar 2022, lo que da una idea de la extraordinaria racha defensiva que acumula el portero y la selección.</p>
<p>El récord llega en un momento dulce para España en el Mundial 2026 y refuerza el papel de Unai Simón como una de las piezas clave del equipo en su camino por el torneo.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'España golea 3-0 a Austria y Portugal supera a Croacia entre la polémica en el Mundial 2026',
    summary: 'La selección española se impuso con claridad a Austria, mientras Portugal venció a Croacia en un partido marcado por un gol anulado en el último minuto y Suiza derrotó a Argelia.',
    content: `<p>La jornada del Mundial 2026 dejó una cómoda victoria de España, que goleó por 3-0 a Austria para reforzar su buena marcha en el torneo, en un partido en el que la selección dominó de principio a fin ante su rival.</p>
<p>Portugal, por su parte, se impuso a Croacia en un encuentro marcado por la polémica: en el último minuto se anuló un gol a los croatas después de que la tecnología del balón, dotado de sensores, detectara un posible contacto que invalidaba la jugada.</p>
<p>La jornada se completó con la victoria de Suiza sobre Argelia. El próximo gran duelo llegará el lunes, cuando se enfrenten Portugal y España en uno de los partidos más esperados de esta fase del campeonato.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Santi Cazorla anuncia su retirada del fútbol a los 41 años',
    summary: 'El centrocampista se despide tras disputar su última temporada con el Real Oviedo, cerrando una larga trayectoria en el fútbol de élite.',
    content: `<p>El centrocampista Santi Cazorla ha anunciado su retirada del fútbol a los 41 años, poniendo fin a una dilatada carrera deportiva. El jugador se despide tras haber disputado su última temporada con el Real Oviedo.</p>
<p>Cazorla, uno de los futbolistas más queridos y respetados de su generación, desarrolló una larga trayectoria en el fútbol de élite marcada también por una dura lesión que estuvo a punto de acabar con su carrera y de la que logró recuperarse contra todo pronóstico.</p>
<p>Su retirada cierra la etapa de un jugador que dejó huella por su calidad técnica y por su capacidad de superación, y que regresó a su tierra para poner el broche final a su carrera vistiendo la camiseta del club de su infancia.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'El Tour de Francia arranca mañana en Barcelona con sus tres primeras etapas en España',
    summary: 'La ronda francesa comenzará este año en la capital catalana, de modo que las tres primeras jornadas de la competición se disputarán en territorio español.',
    content: `<p>El Tour de Francia, una de las grandes citas del calendario ciclista mundial, arranca mañana con una particularidad destacada: la salida se dará en Barcelona, de modo que las tres primeras etapas de la carrera se disputarán en España.</p>
<p>El arranque de la ronda francesa desde la capital catalana convierte a España en protagonista de los primeros días de la competición, con el consiguiente atractivo turístico y deportivo para las localidades por las que discurrirá el recorrido.</p>
<p>Es cada vez más habitual que el Tour de Francia inicie su recorrido fuera de las fronteras francesas, una estrategia que busca ampliar el alcance internacional de la prueba y acercarla a nuevos públicos.</p>`,
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
