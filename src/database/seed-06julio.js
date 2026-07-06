require('dotenv').config()
const { pool } = require('../config/database')
const slugify = require('slugify')

const CAT = { tec: 5, int: 2, eco: 3, dep: 4, cul: 6, cien: 7, esp: 1 }
const DATE = '2026-07-06 10:00:00'

const articles = [

  // ─── TECNOLOGÍA ───────────────────────────────────────────────
  {
    title: 'Una startup crea el primer módulo de reactor nuclear impreso en 3D para alimentar centros de datos de IA',
    summary: 'El módulo, impreso a escala real en carburo de silicio, promete una durabilidad de 30 años sin recarga; el proyecto sigue en fase de pruebas, sin fecha de lanzamiento ni precio.',
    content: `<p>Una startup de tecnología nuclear ha creado el primer módulo de reactor nuclear impreso en 3D a escala real, destinado a alimentar centros de datos de inteligencia artificial, uno de los sectores con mayor demanda energética del momento.</p>
<p>El módulo está impreso en 3D con carburo de silicio, un material de altísima resistencia, y promete una durabilidad de 30 años sin necesidad de recarga de combustible.</p>
<p>El proyecto se encuentra todavía en fase de pruebas, sin fecha de lanzamiento comercial ni precio anunciado, pero apunta a una de las grandes tendencias de la industria: buscar fuentes de energía dedicadas para el voraz consumo eléctrico de la inteligencia artificial.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Apple habría cancelado los AirPods Pro con cámara y Siri potenciada por IA previstos para 2027',
    summary: 'Según las filtraciones, el producto que se esperaba para el próximo año habría sido descartado, aunque de momento no hay confirmación oficial de la compañía.',
    content: `<p>Apple habría cancelado los AirPods Pro con cámara integrada y Siri potenciada por inteligencia artificial, un producto que se esperaba para 2027, según apuntan las últimas filtraciones del entorno de la compañía.</p>
<p>De momento no existe confirmación oficial por parte de Apple, por lo que habrá que esperar unos meses para saber si el proyecto ha sido descartado definitivamente o simplemente retrasado.</p>
<p>Los auriculares con cámara formaban parte de la estrategia de Apple para llevar la inteligencia artificial a sus dispositivos vestibles, un terreno en el que la competencia se ha intensificado con las gafas inteligentes de Meta y Samsung.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Apple, Nvidia y Anthropic, demandadas por entrenar sus IA con vídeos de YouTube protegidos por derechos de autor',
    summary: 'Las compañías defienden que no infringieron ninguna ley porque los vídeos eran públicos, de libre acceso y subidos por los propios creadores sin restricciones ni advertencias DMCA.',
    content: `<p>Apple ha sido demandada junto a Nvidia y Anthropic por supuestamente entrenar sus modelos de inteligencia artificial utilizando vídeos de YouTube protegidos por derechos de autor, en un nuevo episodio de la batalla legal entre creadores de contenido y empresas de IA.</p>
<p>Las compañías defienden que no infringieron ninguna ley porque los vídeos utilizados eran públicos, de acceso libre y subidos por los propios creadores sin restricciones, bloqueos ni advertencias DMCA.</p>
<p>El caso se suma a la creciente lista de litigios sobre el uso de contenido protegido para entrenar sistemas de inteligencia artificial, un terreno legal todavía difuso que los tribunales de todo el mundo están empezando a delimitar.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Qualcomm presentará el Snapdragon 8 Elite Gen 6 en septiembre y estrenará en la serie Xiaomi 18',
    summary: 'El nuevo procesador insignia se dará a conocer del 22 al 24 de septiembre de 2026, y los primeros móviles en montarlo serán los de la serie Xiaomi 18.',
    content: `<p>Qualcomm presentará sus nuevos procesadores Snapdragon 8 Elite de sexta generación en un evento que se celebrará del 22 al 24 de septiembre de 2026, donde se conocerán todos los detalles del que será el chip insignia de la próxima hornada de móviles Android de gama alta.</p>
<p>El primer fabricante en montar el nuevo procesador será Xiaomi, con su serie 18, que contará con varios modelos equipados con el Snapdragon 8 Elite Gen 6.</p>
<p>Como es habitual, el resto de grandes fabricantes de Android irán incorporando el chip a sus buques insignia a lo largo de los meses siguientes a la presentación.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Nokia presenta cuatro teléfonos con teclado físico e inteligencia artificial integrada',
    summary: 'Los nuevos dispositivos incorporan un asistente de IA que será gratuito durante los primeros 180 días y después requerirá una suscripción de pago.',
    content: `<p>Nokia ha presentado cuatro nuevos teléfonos que combinan un elemento clásico —el teclado físico— con la última tendencia del mercado: la inteligencia artificial integrada de serie.</p>
<p>El asistente de inteligencia artificial de los dispositivos será gratuito durante los primeros 180 días de uso, tras los cuales el usuario deberá contratar una suscripción de pago para seguir utilizándolo.</p>
<p>La apuesta por el teclado físico busca diferenciarse en un mercado dominado por las pantallas táctiles, apelando tanto a la nostalgia como a los usuarios que priorizan la escritura rápida y los botones físicos.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Meta lanza Pocket, una app para crear minijuegos con inteligencia artificial a partir de texto',
    summary: 'La aplicación permite generar pequeñas piezas jugables llamadas "gizmos" describiendo simplemente con palabras lo que se quiere crear.',
    content: `<p>Meta ha lanzado Pocket, una aplicación para crear minijuegos y experiencias interactivas con inteligencia artificial a partir de simples descripciones de texto.</p>
<p>La app permite generar pequeñas piezas jugables llamadas "gizmos", que la inteligencia artificial construye automáticamente a partir de lo que el usuario le pide: basta con describir la idea para que el sistema genere el juego.</p>
<p>El lanzamiento se enmarca en la estrategia de Meta de integrar la IA generativa en todas sus plataformas, en este caso apuntando al terreno del entretenimiento casual y la creación de contenido por parte de los propios usuarios.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Amazon supera los 390 satélites en órbita y ya ofrece internet continuo en sus primeras zonas de cobertura',
    summary: 'Su constelación ofrece tres planes: Nano (hasta 100 Mbps), Pro (hasta 400 Mbps) y Ultra, orientado a empresas, con hasta 1 Gbps de bajada y 400 Mbps de subida.',
    content: `<p>Amazon ha superado ya los 390 satélites en órbita baja, lo que le permite ofrecer servicio continuo de internet en las primeras latitudes objetivo de su constelación. La cobertura global llegará a medida que se completen los lanzamientos pendientes.</p>
<p>El servicio se estructura en tres tipos de conexión: el plan Nano, con velocidades de hasta 100 Mbps; el Pro, que alcanza los 400 Mbps; y el Ultra, más enfocado a empresas, con hasta 1 Gbps de bajada y 400 Mbps de subida.</p>
<p>Amazon compite así directamente con Starlink, de SpaceX, en el creciente mercado del internet por satélite, especialmente atractivo para zonas rurales y regiones sin infraestructura terrestre de calidad.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Crean una máquina doméstica del tamaño de un frigorífico que produce gasolina sintética con aire, agua y electricidad',
    summary: 'El dispositivo genera unos 3,6 litros de combustible cada 24 horas, compatible con los motores actuales sin modificaciones, aunque cada galón requiere unos 75 kWh de electricidad.',
    content: `<p>Una empresa ha creado una máquina doméstica del tamaño de un frigorífico capaz de producir gasolina sintética usando únicamente aire, agua y electricidad renovable. El dispositivo genera alrededor de 3,6 litros de gasolina cada 24 horas.</p>
<p>El proceso captura CO2 directamente del aire y obtiene hidrógeno mediante electrólisis del agua; ambos se combinan para crear metanol, que después se convierte en gasolina mediante un proceso catalítico. El combustible resultante funciona en los motores de gasolina actuales sin necesidad de modificaciones.</p>
<p>El principal inconveniente es el consumo energético: producir un galón (unos 3,6 litros) requiere alrededor de 75 kWh de electricidad, por lo que el sistema solo resulta rentable con acceso a energía solar u otra fuente renovable abundante y barata.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Ayaneo Next 2: la consola portátil con Windows que cuesta hasta 5.300 dólares',
    summary: 'El modelo base de la nueva portátil de gama alta parte de 2.999 dólares, mientras que la versión más equipada alcanza un precio que supera al de muchos ordenadores completos.',
    content: `<p>Ayaneo ha confirmado los precios de su nueva consola portátil de gama alta con Windows, la Ayaneo Next 2, y las cifras no dejan indiferente a nadie: el modelo base cuesta 2.999 dólares y la versión de gama más alta alcanza los 5.300 dólares.</p>
<p>Se trata de precios muy por encima de los habituales en el mercado de las consolas portátiles tipo PC, dominado por dispositivos como la Steam Deck o la ROG Ally, que se mueven en rangos muy inferiores.</p>
<p>La apuesta de Ayaneo se dirige a un nicho de entusiastas dispuestos a pagar por el máximo rendimiento en formato portátil, aunque el precio del modelo superior rivaliza ya con el de equipos de sobremesa de gama alta.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Los fans lanzan remasterizaciones gratuitas de Medieval II y Rome: Total War',
    summary: 'Los proyectos comunitarios mejoran los gráficos y el rendimiento de los clásicos de estrategia y amplían su experiencia de juego.',
    content: `<p>La comunidad de jugadores ha creado remasterizaciones gratuitas de dos clásicos de la estrategia: Medieval II: Total War y Rome: Total War, que mejoran los gráficos y el rendimiento de ambos títulos.</p>
<p>Los proyectos, desarrollados por fans, también amplían la experiencia de juego original, y pueden descargarse sin coste por cualquier propietario de los juegos originales.</p>
<p>Este tipo de iniciativas comunitarias se han convertido en una vía habitual para mantener vivos los grandes clásicos del PC, especialmente en sagas con comunidades tan activas como Total War.</p>`,
    image_url: null, category_id: CAT.tec,
  },
  {
    title: 'Attack on Titan 3 llegará este invierno a todas las consolas, incluida Switch 2',
    summary: 'El nuevo videojuego basado en el popular anime confirma su lanzamiento multiplataforma para finales de año.',
    content: `<p>El videojuego Attack on Titan 3 llegará este invierno a todas las consolas, incluida la Nintendo Switch 2, según ha confirmado la editora del título basado en el popular anime y manga.</p>
<p>La saga de videojuegos de Attack on Titan ha permitido a los jugadores encarnar a los personajes de la serie y utilizar el característico equipo de maniobras tridimensionales para enfrentarse a los titanes.</p>
<p>El lanzamiento multiplataforma busca aprovechar la enorme base de seguidores mundial de la franquicia, una de las más exitosas de la animación japonesa de la última década.</p>`,
    image_url: null, category_id: CAT.tec,
  },

  // ─── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'El Gran Colisionador de Hadrones se apaga hasta 2030 para convertirse en el LHC de alta luminosidad',
    summary: 'El CERN inicia la tercera gran parada técnica del acelerador: cuatro años de obras para desmontar equipos, sustituir componentes y actualizar los detectores.',
    content: `<p>El Gran Colisionador de Hadrones (LHC) ha detenido sus colisiones desde hace unos días y no volverá a funcionar hasta al menos junio de 2030. El acelerador de partículas más grande del mundo entra así en su tercera gran parada técnica.</p>
<p>El objetivo de esta pausa de cuatro años es transformar la instalación en el LHC de alta luminosidad: durante este tiempo se desmontarán equipos, se sustituirán componentes y se actualizarán los detectores del acelerador.</p>
<p>La mejora multiplicará el número de colisiones que la máquina puede producir, lo que permitirá a los físicos estudiar fenómenos extremadamente raros y buscar nueva física más allá del modelo estándar.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'Proponen un escudo de satélites para proteger la Tierra de las supertormentas solares',
    summary: 'El sistema constaría de seis satélites del tamaño de un autobús en órbita geoestacionaria que liberarían gas para generar una pared de plasma capaz de reducir a la mitad la energía solar entrante.',
    content: `<p>Un grupo de científicos ha propuesto un sistema de defensa planetaria formado por seis satélites del tamaño de un autobús situados en órbita geoestacionaria, a unos 36.000 kilómetros de la Tierra, para proteger el planeta de las supertormentas solares.</p>
<p>Estas tormentas podrían causar daños masivos en las redes eléctricas, el GPS, las comunicaciones y los satélites. El sistema propuesto detectaría la llegada de una gran tormenta y liberaría grandes depósitos de gas que, al ionizarse con la propia tormenta, generarían una pared de plasma artificial.</p>
<p>Según los cálculos de los investigadores, ese escudo reduciría aproximadamente a la mitad la energía solar que llegaría a la Tierra durante el evento, mitigando de forma significativa sus efectos más destructivos.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'China populariza la climatización evaporativa: agua nebulizada desde los tejados para enfriar edificios',
    summary: 'El sistema reduce la temperatura superficial entre 5 y 10 grados en minutos y puede recortar el consumo del aire acondicionado entre un 30 y un 40%, a costa de aumentar el consumo de agua.',
    content: `<p>China está popularizando un sistema de climatización evaporativa a gran escala que consiste en rociar agua nebulizada desde los tejados para enfriar los edificios y los espacios exteriores sin aumentar el consumo eléctrico, aunque sí el de agua.</p>
<p>El agua se pulveriza en microgotas sobre los tejados, y su evaporación reduce la temperatura superficial del edificio entre 5 y 10 grados en cuestión de minutos, disminuyendo la carga térmica antes de que el aire acondicionado tenga que actuar.</p>
<p>Gracias a este preenfriamiento, el consumo energético de la climatización puede reducirse entre un 30 y un 40%, según las estimaciones, en un contexto de olas de calor cada vez más frecuentes e intensas en las grandes ciudades.</p>`,
    image_url: null, category_id: CAT.cien,
  },
  {
    title: 'El horno solar de Odeillo: el laboratorio francés que concentra el sol hasta los 3.500 grados',
    summary: 'En funcionamiento desde 1969 en los Pirineos franceses, no produce electricidad: es una instalación científica que concentra la luz en un punto de 40 centímetros para estudiar materiales sometidos a calor extremo.',
    content: `<p>En los Pirineos franceses funciona desde 1969 el horno solar de Odeillo, una espectacular instalación formada por multitud de espejos que concentran la luz del sol en un único punto. En contra de lo que pueda parecer, no produce electricidad.</p>
<p>Se trata de un laboratorio científico dedicado a estudiar materiales y procesos que requieren calor extremo: toda la luz captada se concentra en un punto de apenas 40 centímetros, donde se alcanzan temperaturas de entre 3.300 y 3.500 grados centígrados.</p>
<p>Estas condiciones permiten investigar el comportamiento de materiales destinados a aplicaciones extremas, como la industria aeroespacial o los futuros reactores de fusión, sin necesidad de hornos convencionales de altísimo consumo.</p>`,
    image_url: null, category_id: CAT.cien,
  },

  // ─── CINE Y TELEVISIÓN ────────────────────────────────────────
  {
    title: 'Amazon lanza el primer tráiler de "The Greatest", la serie biográfica sobre Muhammad Ali',
    summary: 'La producción sobre la vida del legendario boxeador se estrenará en Prime Video el 4 de noviembre de este año.',
    content: `<p>Amazon ha lanzado el primer tráiler de "The Greatest", una serie biográfica sobre Muhammad Ali que se estrenará en Prime Video el próximo 4 de noviembre.</p>
<p>La producción repasará la vida del legendario boxeador, considerado por muchos el mejor deportista del siglo XX, desde sus inicios como Cassius Clay hasta su transformación en icono deportivo, político y social.</p>
<p>La figura de Ali, fallecido en 2016, sigue generando un enorme interés, y la serie de Amazon llega para disputar al cine el retrato definitivo de una vida marcada por los títulos mundiales, el activismo y su conversión al islam.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: '"La Pasión de Cristo" vuelve a los cines españoles en 4K como antesala de su secuela',
    summary: 'La película de 2004 se reestrenará del 10 al 17 de septiembre en versión remasterizada, preparando el terreno para "La Resurrección de Cristo".',
    content: `<p>"La Pasión de Cristo", la película dirigida por Mel Gibson que se estrenó en 2004, volverá a los cines de España del 10 al 17 de septiembre en una versión remasterizada en 4K.</p>
<p>El reestreno servirá como preparación para la llegada de su secuela, "La Resurrección de Cristo", confirmando uno de los proyectos más esperados y comentados del cine religioso de las últimas décadas.</p>
<p>La película original, recordada tanto por su crudeza como por su enorme éxito de taquilla, tuvo además un rodaje especialmente duro para su protagonista, Jim Caviezel, que sufrió lesiones reales durante la filmación de las escenas de la flagelación.</p>`,
    image_url: null, category_id: CAT.cul,
  },
  {
    title: 'The Office lanza una edición con 194 episodios extendidos y 25 horas de material inédito',
    summary: 'La "Complete Series Super Fan Extended Episodes" llegará el 14 de julio en digital y Blu-ray por 62 dólares, de momento solo en Estados Unidos.',
    content: `<p>Universal lanzará el 14 de julio una nueva edición especial de The Office llamada "The Complete Series Super Fan Extended Episodes", que reúne los 194 episodios de la serie en versión extendida.</p>
<p>La edición incluye 25 horas de material inédito, con escenas adicionales y chistes eliminados, y estará disponible tanto en formato digital como en Blu-ray.</p>
<p>De momento, el lanzamiento se limita a Estados Unidos, con un precio de 62 dólares, aunque los fans del resto del mundo confían en que la edición acabe llegando a otros mercados.</p>`,
    image_url: null, category_id: CAT.cul,
  },

  // ─── ECONOMÍA ─────────────────────────────────────────────────
  {
    title: 'Tesla se desploma un 7,5% mientras la bolsa española cotiza en verde y el bitcoin ronda los 62.700 dólares',
    summary: 'El S&P 500 se sitúa en 7.483 puntos, el oro y la plata suben, el petróleo cotiza a 72 dólares y el euro se mantiene en 1,14 frente al dólar.',
    content: `<p>Jornada mixta en los mercados: Tesla se desploma un 7,49% en una de las caídas más pronunciadas del día, mientras el S&P 500 se sitúa en los 7.483 puntos.</p>
<p>La bolsa española cotiza prácticamente toda en verde, con la excepción de Amadeus, que registra descensos. En el mercado de criptomonedas, el bitcoin se mueve en torno a los 62.742 dólares, con ligeras caídas.</p>
<p>El oro y la plata registran subidas, el petróleo cotiza en torno a los 72 dólares por barril y el euro se mantiene estable en los 1,14 dólares.</p>`,
    image_url: null, category_id: CAT.eco,
  },

  // ─── INTERNACIONAL ────────────────────────────────────────────
  {
    title: 'Un tiroteo en una celebración del 4 de Julio en Brooklyn deja ocho heridos, cuatro de ellos menores',
    summary: 'El atacante, vestido de negro y con pasamontañas, disparó contra una familia que celebraba una barbacoa en el patio de una casa y huyó a pie; la policía recuperó una pistola Tec-9 con cargador extendido.',
    content: `<p>Un hombre abrió fuego durante una celebración del 4 de Julio en el patio de una casa en Brooklyn, Nueva York, dejando ocho personas heridas, entre ellas cuatro menores.</p>
<p>El tirador, que iba vestido completamente de negro y con pasamontañas, se acercó al patio donde una familia celebraba una barbacoa, disparó contra el interior y huyó a pie tras el ataque.</p>
<p>La policía ha recuperado una pistola Tec-9 con cargador extendido y diez casquillos en el lugar de los hechos, y mantiene abierta la investigación para identificar y localizar al autor del tiroteo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'La policía australiana investiga un caso de canibalismo tras la muerte de un niño de cuatro años',
    summary: 'La madre, de 32 años, fue detenida y acusada de asesinato después de acudir voluntariamente a comisaría; el cuerpo del menor presentaba graves lesiones y la mujer reconoció los hechos.',
    content: `<p>La policía de Australia está investigando un presunto caso de canibalismo tras la muerte de un niño de cuatro años. La madre del menor, de 32 años, fue detenida y acusada de asesinato.</p>
<p>La mujer acudió voluntariamente a la comisaría para alertar a los agentes de que debían acudir a su casa. Cuando llegaron, encontraron el cuerpo del menor con graves lesiones en los brazos.</p>
<p>Durante la investigación, la mujer reconoció haber cometido actos de canibalismo, en un caso que ha conmocionado al país y cuyas circunstancias psiquiátricas están siendo evaluadas por las autoridades.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Berlín construirá viviendas y oficinas sobre el último búnker de la cancillería de Hitler',
    summary: 'Para aliviar su grave crisis de vivienda, la ciudad levantará un edificio de siete plantas con 66 apartamentos y otro de seis plantas de oficinas sobre el vestigio de la Segunda Guerra Mundial, pese a las voces que pedían un museo.',
    content: `<p>Berlín, que atraviesa una grave crisis de vivienda, ha aprobado un proyecto polémico para aumentar la oferta: construir viviendas y oficinas sobre el último búnker que quedaba de la cancillería de Adolf Hitler, un vestigio histórico de la Segunda Guerra Mundial.</p>
<p>En el emplazamiento se levantarán un edificio de siete plantas con 66 apartamentos y otro de seis plantas destinado a oficinas, según los planes aprobados por las autoridades de la capital alemana.</p>
<p>La decisión ha generado controversia, ya que numerosas voces reclamaban convertir el búnker en un museo o espacio de memoria histórica en lugar de edificarlo.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Playmobil desmonta su última fábrica en Alemania y traslada la producción a Chequia y Malta',
    summary: 'La juguetera alega los altos costes energéticos, los elevados salarios y el exceso de burocracia del país para cerrar su planta de Dietenhofen.',
    content: `<p>Playmobil ha comenzado a desmontar su última fábrica en Alemania, situada en Dietenhofen, y trasladará la producción a sus plantas de la República Checa y Malta, donde ya fabricaba parte de su catálogo.</p>
<p>La compañía juguetera alega los altos costes de la energía en Alemania, los elevados salarios y el exceso de burocracia como motivos para abandonar la producción en su país de origen.</p>
<p>La marcha de Playmobil se suma a la creciente lista de empresas industriales que han deslocalizado su producción fuera de Alemania en los últimos años, alimentando el debate sobre la pérdida de competitividad industrial del país.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Un menor declarado muerto en Arizona es hallado con vida en la morgue cinco horas después',
    summary: 'El niño, rescatado de una piscina, fue certificado como fallecido en el hospital; un forense detectó un latido débil y, tras ser reanimado, evoluciona favorablemente y ya respira sin asistencia.',
    content: `<p>Un menor fue encontrado con vida en la morgue de un hospital de Arizona cinco horas después de que un médico certificara su muerte, en un caso ocurrido el pasado 8 de febrero del que ahora se conocen más detalles.</p>
<p>El niño había sido hallado flotando boca abajo en la piscina de su casa. Sus padres iniciaron la reanimación cardiopulmonar guiados por teléfono por los servicios de emergencia, pero en el hospital un médico lo declaró muerto y el cuerpo fue trasladado a la morgue, donde un forense detectó un latido débil.</p>
<p>Tras ser trasladado en helicóptero a otro hospital y reanimado por completo, el menor sufría daños cerebrales por la falta de oxígeno, pero ha evolucionado favorablemente, ya no necesita respiración asistida y afronta una larga rehabilitación. Las autoridades investigan cómo pudo certificarse erróneamente su muerte.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Venezuela negocia con el FMI un plan de reconstrucción nacional: ya son 2.954 los muertos por los terremotos',
    summary: 'Con 16.592 heridos y más de 16.300 personas sin hogar, la presidenta Rodríguez ha despedido y condecorado a los rescatistas de más de 20 países que trabajaron en la emergencia.',
    content: `<p>El balance de los terremotos de Venezuela asciende ya a 2.954 fallecidos y 16.592 heridos, con más de 16.300 personas que han perdido su hogar y todas sus pertenencias, en una de las mayores catástrofes de la historia reciente del país.</p>
<p>La presidenta Delcy Rodríguez ha iniciado conversaciones con el Fondo Monetario Internacional con el objetivo de poner en marcha un plan de reconstrucción nacional que permita levantar las decenas de edificios destruidos.</p>
<p>Rodríguez ha despedido y condecorado además a los equipos de rescatistas de más de 20 países que han trabajado en las labores de búsqueda de los últimos días, que ahora dan paso a la fase de retirada de escombros con maquinaria pesada.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Cuba sube el salario mínimo un 53%, hasta unos 8 dólares al mes, con la inflación desbocada',
    summary: 'El sueldo mínimo pasa de 2.100 a 3.210 pesos, pero cubrir las necesidades básicas exige unos 96.000 pesos mensuales, casi 30 veces más, con una inflación interanual cercana al 16%.',
    content: `<p>El Gobierno cubano ha aumentado el salario mínimo de 2.100 a 3.210 pesos, una subida del 53% que, sin embargo, apenas equivale a unos 8 dólares al cambio real, en un país con la inflación desbocada.</p>
<p>La inflación interanual de Cuba alcanzó casi el 16% en mayo, y se estima que cubrir las necesidades básicas requiere unos 96.000 pesos al mes, es decir, casi 30 veces el nuevo salario mínimo.</p>
<p>Las cifras ilustran la profunda crisis económica que atraviesa la isla, marcada por la escasez de combustible y alimentos, los cortes eléctricos y una emigración récord en los últimos años.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Hallan el cuerpo de la periodista mexicana Roxana Guzmán, secuestrada en junio en Veracruz',
    summary: 'Ocho personas han sido detenidas, entre ellas cuatro policías municipales que habrían colaborado con el grupo criminal; 34 periodistas han sido asesinados en el estado desde el año 2000.',
    content: `<p>Las autoridades de Veracruz han confirmado el hallazgo del cuerpo de la periodista mexicana Roxana Guzmán, secuestrada el pasado 2 de junio en su propia casa, en un crimen que ha vuelto a sacudir al gremio periodístico del país.</p>
<p>Ocho personas han sido detenidas por el caso, entre ellas cuatro policías municipales que presuntamente colaboraron con el grupo criminal proporcionando recursos y apoyo logístico para el secuestro.</p>
<p>Veracruz es uno de los estados más peligrosos del mundo para ejercer el periodismo: 34 periodistas han sido asesinados allí desde el año 2000, en un contexto de impunidad y connivencia entre autoridades locales y crimen organizado.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Muere en Bolivia una bebé de seis meses comprada por 19 euros para ejercer la mendicidad',
    summary: 'La niña, adquirida a su madre indígena por 150 bolivianos con promesas de pagos mensuales, falleció de neumonía en Cochabamba; la operación posterior rescató a otras cuatro menores explotadas.',
    content: `<p>Una bebé de seis meses ha muerto en Cochabamba, Bolivia, tras haber sido comprada por 150 bolivianos —unos 19 euros— a su madre indígena, con la promesa de pagos mensuales adicionales, para ser utilizada en la mendicidad.</p>
<p>La niña falleció de neumonía, y la investigación posterior destapó una red de explotación infantil dedicada a utilizar menores para pedir limosna en las calles de la ciudad.</p>
<p>En la operación, las autoridades rescataron a otras cuatro menores —dos de 13 años y dos de 9— que también estaban siendo obligadas a mendigar, en un caso que ha causado una enorme conmoción en el país.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Irán espera hasta 20 millones de asistentes en los seis días de funeral por Jamenei',
    summary: 'Con consignas de venganza contra Estados Unidos e Israel, más de 400 carpas y camiones cisterna atienden a los fieles bajo temperaturas superiores a 35 grados; la presencia del hijo y sucesor no está confirmada.',
    content: `<p>El funeral de Estado por el ayatolá Ali Jamenei se prolongará durante seis días, y las autoridades iraníes esperan entre 15 y 20 millones de asistentes solo en Irán, en una de las mayores concentraciones de la historia del país.</p>
<p>Durante las ceremonias se han escuchado consignas como "venganza" y "muerte a Estados Unidos, muerte a Israel", habituales en los actos oficiales de la República Islámica. Se han instalado más de 400 carpas y camiones cisterna para atender a los fieles ante temperaturas superiores a los 35 grados.</p>
<p>La presencia del hijo de Jamenei, señalado como sucesor y nuevo líder supremo, no está confirmada debido a las heridas que arrastra, y su ausencia pública alimenta las especulaciones sobre la transición de poder en Irán.</p>`,
    image_url: null, category_id: CAT.int,
  },
  {
    title: 'Dieciséis soldados del gobierno yemení mueren en ataques de los rebeldes hutíes',
    summary: 'Los insurgentes llegaron a tomar temporalmente posiciones progubernamentales usando francotiradores, drones y morteros, aunque las fuerzas del gobierno las recuperaron al amanecer.',
    content: `<p>Dieciséis soldados del gobierno yemení han muerto tras una serie de ataques de los rebeldes hutíes, en un nuevo episodio de la guerra que mantiene dividido al país entre la insurgencia y las fuerzas gubernamentales.</p>
<p>Los hutíes llegaron a tomar temporalmente posiciones progubernamentales durante la ofensiva, en la que emplearon francotiradores, drones y morteros, aunque las fuerzas del gobierno lograron recuperar el terreno al amanecer tras un contraataque.</p>
<p>El conflicto yemení, uno de los más prolongados y olvidados de la región, sigue causando bajas constantes mientras los esfuerzos internacionales de mediación permanecen estancados.</p>`,
    image_url: null, category_id: CAT.int,
  },

  // ─── ESPAÑA ────────────────────────────────────────────────────
  {
    title: 'El incendio de Girona, ya estabilizado, arrasa 2.300 hectáreas y es el mayor del año en Cataluña',
    summary: 'España encara varios frentes activos, con fuegos también en Castellón y Huesca en plena ola de calor.',
    content: `<p>El incendio forestal declarado en Girona ha arrasado 2.300 hectáreas y se ha convertido en el más grande de lo que va de año en Cataluña, aunque los equipos de extinción han logrado estabilizarlo.</p>
<p>No es el único frente activo: también se registran incendios en Castellón y en Huesca, en un arranque de julio marcado por las altas temperaturas y el elevado riesgo de fuego en buena parte del país.</p>
<p>Las autoridades piden extremar las precauciones en el medio natural durante la ola de calor, que multiplica la velocidad de propagación de cualquier conato.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'El terremoto de Venezuela deja 35 españoles fallecidos y varios más siguen sepultados',
    summary: 'El último balance oficial eleva la cifra de víctimas españolas de la catástrofe, con cerca de una decena de compatriotas aún bajo los escombros.',
    content: `<p>El último balance oficial de los terremotos de Venezuela eleva a 35 los españoles fallecidos en la catástrofe, según los datos facilitados por las autoridades.</p>
<p>Además, cerca de una decena de compatriotas permanecen todavía sepultados bajo los escombros, mientras las labores de rescate dan paso progresivamente a la fase de recuperación con maquinaria pesada.</p>
<p>La numerosa colonia española en Venezuela, una de las mayores de Latinoamérica, ha convertido la tragedia en un asunto de primer orden también para la diplomacia española, que mantiene un dispositivo de atención a las familias afectadas.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Arrancan los Sanfermines 2026: chupinazo a mediodía y primer encierro mañana',
    summary: 'Pamplona da comienzo hoy a sus fiestas más universales, que llenarán la ciudad de fiesta, música y encierros hasta el 14 de julio.',
    content: `<p>Los Sanfermines 2026 arrancan hoy oficialmente en Pamplona con el tradicional chupinazo, que se lanzará a las 12 del mediodía desde el balcón del Ayuntamiento ante miles de personas vestidas de blanco y rojo.</p>
<p>Mañana se celebrará el primer encierro de las fiestas, la carrera de los toros por las calles del casco viejo que constituye el acto más famoso y multitudinario de los Sanfermines.</p>
<p>Las fiestas, que se prolongarán hasta el 14 de julio, atraen cada año a cientos de miles de visitantes de todo el mundo y sitúan a Pamplona en el centro de la atención mediática internacional.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Roban el expediente de Vito Quiles en un asalto a la sede de su despacho de abogados',
    summary: 'Los asaltantes desactivaron la alarma de Ospina Abogados el sábado por la noche y sustrajeron la documentación del comunicador; la policía investiga la autoría.',
    content: `<p>Un grupo de individuos entró el sábado por la noche en la sede de Ospina Abogados, el despacho que representa al comunicador Vito Quiles, y robó el expediente del activista.</p>
<p>Los asaltantes desactivaron la alarma, accedieron a las instalaciones y sustrajeron la documentación relativa a Quiles, según las primeras informaciones de la investigación.</p>
<p>La policía trata ahora de identificar a los autores del robo, que añade un nuevo episodio al convulso momento judicial y mediático que rodea al comunicador, sobre el que pesa una orden de detención por un presunto delito contra el honor.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Cuatro miembros de una familia de Valladolid mueren en un accidente de tráfico en Palencia',
    summary: 'Los padres y dos hijos de 14 y 17 años fallecieron al salirse su coche de la calzada en Herrera de Pisuerga cuando volvían de Cantabria; la hija de 9 años sobrevive en estado muy grave.',
    content: `<p>Una familia de Valladolid —los dos padres y dos hijos de 14 y 17 años— ha fallecido este domingo en un accidente de tráfico en Herrera de Pisuerga, Palencia, cuando regresaban de pasar unos días en Cantabria.</p>
<p>La hija menor, de 9 años, ha sobrevivido al siniestro, aunque se encuentra en estado muy grave. El vehículo se salió de la calzada y dio varias vueltas de campana, sin que haya otros coches implicados; la investigación apunta a un posible episodio de somnolencia al volante.</p>
<p>El padre, Iván Sanz, era un bodeguero conocido en la Ribera del Duero, y la tragedia ha causado una profunda conmoción tanto en Valladolid como en el sector vitivinícola de la zona.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Muere una joven de 26 años en Algeciras al enredarse en la moto la bandera con la que celebraba la victoria de Marruecos',
    summary: 'La bandera que llevaba atada al cuello se enrolló en la rueda trasera de la motocicleta en la que viajaba con su pareja, provocando el vuelco del vehículo.',
    content: `<p>Una joven de 26 años falleció en Algeciras la noche del sábado tras sufrir un accidente de moto mientras celebraba la victoria de Marruecos en el Mundial 2026.</p>
<p>La joven viajaba como pasajera detrás de su pareja con una bandera de Marruecos atada al cuello. La bandera se enrolló en la rueda trasera de la motocicleta, provocando el vuelco del vehículo y la muerte de la chica.</p>
<p>El suceso empaña las celebraciones por el histórico pase de Marruecos a los cuartos de final del Mundial, que llenaron de festejos las calles de numerosas ciudades españolas con comunidad marroquí.</p>`,
    image_url: null, category_id: CAT.esp,
  },
  {
    title: 'Deniegan la nacionalidad española "por falta de arraigo" a un concejal del PP nacido en Málaga',
    summary: 'Scott Marshall, nacido en 1975, ha vivido siempre en España, está casado con una española, tiene dos hijos españoles y dirige una empresa en su municipio, pero la administración rechaza su solicitud.',
    content: `<p>La administración ha denegado la nacionalidad española "por falta de arraigo" a Scott Marshall, un concejal del Partido Popular nacido en Málaga en 1975 que ha vivido toda su vida en España.</p>
<p>Marshall, de padre escocés y madre estadounidense, tiene familia española, cursó sus estudios en España, mantiene un trabajo estable y carece de antecedentes penales. Está casado con una española, tiene dos hijos españoles y dirige una empresa en su municipio.</p>
<p>El caso ha generado indignación y ha reabierto el debate sobre los criterios con los que se evalúa el "arraigo" en los expedientes de nacionalidad, que en ocasiones producen resoluciones difíciles de comprender.</p>`,
    image_url: null, category_id: CAT.esp,
  },

  // ─── DEPORTES ─────────────────────────────────────────────────
  {
    title: 'El mexicano Isaac del Toro gana la primera etapa del Tour de Francia en Barcelona',
    summary: 'El joven ciclista de 22 años del UAE Emirates se impone en el estreno de la ronda gala, que este año arranca con tres etapas en España.',
    content: `<p>El ciclista mexicano Isaac del Toro, de 22 años, ha ganado la primera etapa del Tour de Francia 2026, que este año ha arrancado en Barcelona con las tres primeras jornadas disputándose en territorio español.</p>
<p>El corredor del UAE Team Emirates confirma con este triunfo su condición de una de las grandes promesas del ciclismo mundial, sumando la victoria más importante de su joven carrera.</p>
<p>El estreno español del Tour ha congregado a multitudes en las carreteras catalanas, en una salida internacional que busca ampliar el alcance global de la carrera más importante del mundo.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Noruega elimina a Brasil del Mundial y México cae ante Inglaterra en el Azteca',
    summary: 'Los noruegos, con Haaland decisivo, aprovecharon un penalti fallado por Brasil para dar la sorpresa, mientras Inglaterra acabó con el sueño mexicano de volver a unos cuartos 40 años después.',
    content: `<p>Noruega ha dado la gran sorpresa de los octavos de final del Mundial 2026 al eliminar a Brasil, en un partido en el que Erling Haaland volvió a ser decisivo y en el que la canarinha falló un penalti que pudo cambiar el rumbo de la eliminatoria.</p>
<p>La eliminación confirma la crisis de la selección brasileña, que llegaba al cruce con su peor racha mundialista desde 2002 y abandona el torneo en octavos ante una Noruega que sigue haciendo historia.</p>
<p>En el otro partido de la madrugada, México cayó ante Inglaterra en el Estadio Azteca, con lo que se esfuma el sueño azteca de alcanzar unos cuartos de final por primera vez desde 1986. Los ingleses se medirán a Noruega en cuartos.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Portugal-España: el duelo ibérico de octavos se juega esta noche a las 21:00',
    summary: 'Las dos selecciones de la península se enfrentan en el partido estrella de los octavos; mañana cierran la ronda el Estados Unidos-Bélgica, el Argentina-Egipto y el Suiza-Colombia.',
    content: `<p>El Mundial 2026 vive hoy su partido más esperado para el aficionado español: el Portugal-España de octavos de final, que se disputa a las 21:00, hora peninsular, en un duelo ibérico que muchos consideran una final anticipada.</p>
<p>Ambas selecciones llegan en buen momento: España, con Unai Simón batiendo récords de imbatibilidad y tras golear en la fase de grupos; Portugal, tras superar a Croacia en un cruce marcado por la polémica del gol anulado por los sensores del balón.</p>
<p>Mañana se completará la ronda de octavos con el Estados Unidos-Bélgica, el Argentina-Egipto y el Suiza-Colombia, que definirán el cuadro completo de cuartos de final.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'La FIFA aplaza la sanción de Balogun y podrá jugar ante Bélgica; el jugador da las gracias a Trump',
    summary: 'El máximo goleador de EE. UU. en el Mundial tenía una tarjeta roja pendiente, pero el organismo ha retrasado la suspensión aplicando una norma antigua y poco habitual, alimentando las sospechas de presiones políticas.',
    content: `<p>Folarin Balogun, máximo goleador de la selección de Estados Unidos en el Mundial 2026, podrá disputar el decisivo partido de octavos de final contra Bélgica pese a la tarjeta roja que arrastraba, después de que la FIFA decidiera retrasar su suspensión aplicando una regla antigua y poco habitual.</p>
<p>La decisión ha levantado sospechas de presiones políticas, ya que se atribuye a Donald Trump una llamada a la FIFA interesándose por la sanción del delantero, y el propio jugador ha agradecido públicamente al presidente su intervención.</p>
<p>El episodio añade polémica a un torneo en el que las decisiones arbitrales y disciplinarias están siendo especialmente cuestionadas.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'El Real Madrid ficha a Denzel Dumfries por 20 millones: cuarto refuerzo del proyecto de Mourinho',
    summary: 'El club blanco paga la cláusula de rescisión del lateral derecho neerlandés al Inter de Milán, que firma hasta 2030 y se une a Cucurella, Bernardo Silva y Konaté.',
    content: `<p>El Real Madrid ha hecho oficial la incorporación de Denzel Dumfries, lateral derecho de la selección de Países Bajos, procedente del Inter de Milán, tras abonar su cláusula de rescisión de 20 millones de euros.</p>
<p>El jugador firma hasta 2030 y se convierte en el cuarto fichaje del proyecto de José Mourinho al frente del banquillo blanco, tras las llegadas de Cucurella, Bernardo Silva y Konaté.</p>
<p>Con Dumfries, el técnico portugués refuerza el carril derecho con un jugador de gran despliegue físico y llegada, una de las prioridades que había marcado para la nueva temporada.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Muere a los 82 años José Manuel Díaz Novoa, histórico entrenador del Sporting de Gijón',
    summary: 'El técnico, una de las figuras más recordadas del banquillo sportinguista, también dirigió al Celta, al Real Burgos, al Espanyol y al Málaga.',
    content: `<p>José Manuel Díaz Novoa, histórico entrenador del Sporting de Gijón, ha fallecido a los 82 años, dejando huérfana a una de las aficiones que más le quiso y que le convirtió en figura emblemática del club asturiano.</p>
<p>Además de su etapa en El Molinón, Díaz Novoa dirigió al Celta de Vigo, al Real Burgos, al Espanyol y al Málaga, en una extensa trayectoria por los banquillos del fútbol español.</p>
<p>El mundo del fútbol ha despedido al técnico con numerosas muestras de cariño y reconocimiento a una carrera ligada para siempre a la historia del Sporting.</p>`,
    image_url: null, category_id: CAT.dep,
  },
  {
    title: 'Treinta y tres detenidos en Países Bajos tras los disturbios por la victoria de Marruecos ante Canadá',
    summary: 'Las celebraciones del pase a cuartos derivaron en altercados en varias ciudades neerlandesas.',
    content: `<p>Al menos 33 personas han sido detenidas en varias ciudades de Países Bajos tras los disturbios que siguieron a la victoria de Marruecos frente a Canadá en los octavos de final del Mundial 2026.</p>
<p>Las celebraciones del histórico pase marroquí a cuartos derivaron en altercados en distintos puntos del país, que cuenta con una numerosa comunidad de origen marroquí.</p>
<p>Las autoridades neerlandesas han reforzado los dispositivos policiales de cara al partido de cuartos entre Marruecos y Francia del próximo jueves, ante el riesgo de que se repitan los incidentes.</p>`,
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
