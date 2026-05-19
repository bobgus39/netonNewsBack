const { pool } = require('../config/database')
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') })

const slugify = (text) =>
  text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-')

const articles = [
  // ── TECNOLOGÍA ──────────────────────────────────────────────
  {
    title: 'España instala el primer horno europeo que recupera metales valiosos de la basura electrónica',
    subtitle: 'El CENIM de Madrid opera un horno de lanza sumergida a más de 10.000 °C capaz de extraer cobre, oro, plata y platino de residuos electrónicos',
    summary: 'España pone en marcha el primer horno piloto europeo de reciclaje de e-waste, capaz de recuperar metales críticos de dispositivos electrónicos a temperaturas superiores a 10.000 °C.',
    content: `<p>El <strong>Centro Nacional de Investigaciones Metalúrgicas (CENIM)</strong>, dependiente del CSIC y ubicado en Madrid, ha puesto en marcha el primer horno piloto de Europa diseñado específicamente para recuperar metales valiosos directamente de residuos electrónicos mediante una tecnología denominada <em>lanza sumergida</em>.</p>
<h2>Tecnología de lanza sumergida</h2>
<p>El proceso consiste en inyectar oxígeno y combustible a través de una lanza metálica sumergida en el baño fundido, generando temperaturas que superan los <strong>10.000 °C</strong>. A esa temperatura, los componentes electrónicos —placas base, baterías, conectores— se descomponen completamente, separando la fracción metálica de la escoria con una eficiencia muy superior a los métodos convencionales.</p>
<p>Entre los materiales recuperados destacan <strong>cobre, oro, plata, platino y paladio</strong>, todos ellos clasificados como metales críticos por la Unión Europea por su escasez y su papel central en la transición energética. España importa actualmente el 100 % de estos materiales de terceros países.</p>
<h2>Una apuesta estratégica</h2>
<p>El proyecto forma parte del programa europeo <em>CRM Alliance</em> y cuenta con financiación del PERTE de Economía Circular. Los investigadores estiman que si la tecnología escala a nivel industrial, España podría recuperar hasta el 40 % de los metales críticos que hoy acaban en vertederos o se exportan sin tratar.</p>
<blockquote>«Estamos convirtiendo la basura electrónica en una mina urbana. El potencial es enorme y la tecnología ya está probada», declaró la directora del proyecto en el CENIM.</blockquote>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['reciclaje', 'e-waste', 'metales críticos', 'CENIM', 'España', 'medioambiente'],
    featured: false,
  },
  {
    title: 'SpaceX lanza esta madrugada el vuelo 12 de Starship con la versión 3 del cohete y la nave',
    subtitle: 'Es el primer vuelo de prueba de la generación 3 completa de Starship, que estrena mejoras estructurales en ambas etapas del vehículo más grande jamás construido',
    summary: 'SpaceX lanza esta noche a las 00:30 hora española el vuelo 12 de Starship, el primero en emplear la versión 3 completa del cohete Super Heavy y de la nave Starship.',
    content: `<p>SpaceX tiene previsto lanzar esta madrugada, a las <strong>00:30 horas (tiempo peninsular español)</strong>, el decimosegundo vuelo de prueba integrado de <strong>Starship</strong>. La misión IFT-12 es especialmente significativa porque es la primera en emplear simultáneamente la versión 3 tanto del cohete propulsor <em>Super Heavy</em> como de la nave superior <em>Starship</em>, que concentran numerosas mejoras sobre las generaciones anteriores.</p>
<h2>Qué hay de nuevo en la versión 3</h2>
<p>El Super Heavy B14 debuta con un rediseño del sistema de propelente presurizado que permite cargar más metano líquido, aumentando la capacidad de empuje total. La nave S30 incorpora cambios en el escudo térmico, con nuevas losetas cerámicas de mayor resistencia en las zonas de máxima reentrada, y un sistema de aletas hipersónicas mejorado para mayor control durante el descenso.</p>
<p>Los objetivos del vuelo incluyen la <strong>captura del Super Heavy</strong> por los brazos mecánicos («palillos chinos») de la torre de lanzamiento —maniobra que se intentó por primera vez en el vuelo 5 y se repitió con éxito en el 7 y el 9— y la demostración de capacidad de reencendido del motor principal de la nave en el vacío.</p>
<h2>Contexto del programa</h2>
<p>Starship es el vehículo central del programa <em>Artemis</em> de la NASA para aterrizar astronautas en la Luna, y SpaceX trabaja en paralelo en una versión de propelente de depósito (<em>propellant transfer</em>) necesaria para misiones de larga duración. La comunidad espacial sigue cada vuelo con atención, ya que cada iteración acerca el sistema a la operatividad comercial prevista para 2027.</p>`,
    author: 'Redacción Ciencia',
    cat: 7,
    tags: ['SpaceX', 'Starship', 'cohetes', 'espacio', 'NASA', 'Super Heavy'],
    featured: true,
  },
  {
    title: 'La huelga de Samsung dispara el precio de la RAM un 20% y pone en jaque la producción de chips',
    subtitle: 'Más de 45.000 trabajadores pararán 18 días a partir del 21 de mayo; Samsung ha activado el modo emergencia reduciendo producción durante 6 días',
    summary: 'La huelga de 45.000 trabajadores de Samsung durante 18 días ha disparado el precio de la RAM un 20% esta semana. Las pérdidas estimadas ascienden a 2.000 millones de dólares.',
    content: `<p>Samsung Electronics se enfrenta a su mayor convulsión laboral en años: más de <strong>45.000 trabajadores</strong> de la división de semiconductores han anunciado una huelga de <strong>18 días</strong> a partir del próximo miércoles 21 de mayo, motivada por desacuerdos sobre el incremento salarial anual y las profundas desigualdades en el sistema de bonus entre divisiones.</p>
<h2>Impacto inmediato en los mercados</h2>
<p>El mercado no ha esperado al inicio oficial de la huelga. El precio de los módulos de memoria RAM <strong>LPDDR5X</strong> ha subido un <strong>20% en la última semana</strong> en los mercados spot, mientras que los chips NAND Flash han experimentado alzas de entre el 12% y el 18%. Los fabricantes de PC y smartphones ya están activando sus contratos de suministro de emergencia con SK Hynix y Micron.</p>
<p>Samsung, por su parte, ha declarado el estado de <strong>«modo emergencia»</strong> en sus plantas de Hwaseong y Pyeongtaek, reduciendo la producción no crítica durante al menos seis días para redistribuir personal técnico y minimizar el impacto en las líneas de mayor valor añadido, como los chips HBM3E destinados a aceleradores de IA.</p>
<h2>Pérdidas y negociaciones</h2>
<p>Analistas de JPMorgan estiman las pérdidas totales por la paralización en <strong>2.000 millones de dólares</strong> si la huelga se mantiene los 18 días previstos. La dirección de Samsung y el sindicato NSEU mantienen conversaciones, pero las posiciones siguen alejadas: el sindicato exige un aumento del 5,6%, mientras la empresa ofrece el 3%.</p>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['Samsung', 'RAM', 'huelga', 'chips', 'semiconductores', 'mercados'],
    featured: false,
  },
  {
    title: 'OpenAI critica la integración de ChatGPT en iOS por ser limitada y generar ingresos muy inferiores a lo esperado',
    subtitle: 'La compañía consideraba que la alianza con Apple reportaría miles de millones en ingresos, pero el retorno ha defraudado sus expectativas',
    summary: 'OpenAI ha expresado su malestar con Apple por la integración de ChatGPT en iOS, que ofrece una experiencia limitada frente a la app oficial y genera ingresos muy por debajo de lo proyectado.',
    content: `<p>La alianza entre <strong>OpenAI y Apple</strong>, presentada con gran pompa durante la WWDC de 2024 como la integración de ChatGPT en el sistema <em>Apple Intelligence</em>, atraviesa tensiones según fuentes internas consultadas por <em>The Information</em>. OpenAI considera que Apple ha implementado la integración de forma <strong>deliberadamente limitada</strong>, presentando al usuario una experiencia recortada en comparación con la aplicación oficial de ChatGPT.</p>
<h2>Una apuesta que no generó los ingresos prometidos</h2>
<p>El modelo de negocio acordado contemplaba que los usuarios de iOS que interactuaran con ChatGPT a través de Apple Intelligence se convirtieran en suscriptores de pago con una tasa significativa. OpenAI proyectaba ingresos adicionales de <strong>varios miles de millones de dólares</strong> anuales gracias a esta exposición masiva. La realidad ha sido muy diferente: la tasa de conversión a pago desde la integración de Apple ha resultado ser <em>marginalmente superior al canal orgánico</em>, sin el efecto multiplicador esperado.</p>
<h2>El problema de fondo</h2>
<p>Expertos en diseño de producto señalan que Apple tiene incentivos estructurales para que ninguna aplicación de terceros resulte más útil que sus propias herramientas nativas. La integración de ChatGPT en Siri se activa solo en escenarios muy específicos y no ofrece acceso a memoria, proyectos ni el modo de voz avanzado. OpenAI estudia renegociar los términos del acuerdo antes de su próxima renovación.</p>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['OpenAI', 'Apple', 'ChatGPT', 'iOS', 'Apple Intelligence', 'acuerdos tecnológicos'],
    featured: false,
  },
  {
    title: 'Google trabaja para que su traducción en tiempo real funcione completamente sin conexión a internet',
    subtitle: 'El modo offline de Google Lens Live Translate incluirá traducción de audio en directo tras descargar paquetes de idiomas en el dispositivo',
    summary: 'Google avanza en hacer que Live Translate de Lens funcione sin conexión, incluyendo traducción de audio en tiempo real offline mediante paquetes de idiomas descargables.',
    content: `<p><strong>Google</strong> está desarrollando una versión completamente <strong>offline</strong> de su función <em>Live Translate</em>, integrada en Google Lens, según han revelado desarrolladores que han inspeccionado las últimas versiones beta de la app de Google para Android. La actualización permitirá traducir texto en imágenes, subtítulos en pantalla y <strong>audio en directo</strong> sin necesidad de conexión a internet.</p>
<h2>Cómo funcionará el modo offline</h2>
<p>El sistema se basa en descargar <strong>paquetes de idiomas</strong> al dispositivo, similares a los que ya ofrece Google Traductor para traducción básica offline. Sin embargo, la novedad reside en que estos paquetes incluirán modelos de reconocimiento de voz y síntesis que permitirán la <em>traducción simultánea de audio</em> con un retardo inferior a 300 milisegundos, según las especificaciones filtradas.</p>
<p>El tamaño de los paquetes oscilará entre 150 MB y 400 MB por par de idiomas. Los idiomas prioritarios en la primera fase serán inglés, español, francés, alemán, chino mandarín, japonés, portugués y árabe.</p>
<h2>Usos prácticos</h2>
<p>La función tendrá especial utilidad en viajes internacionales con roaming limitado, zonas con cobertura deficiente o entornos corporativos donde las políticas de seguridad prohíben el envío de audio a servidores externos. El lanzamiento está previsto para finales de 2026 con Android 17.</p>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['Google', 'Google Lens', 'traducción', 'offline', 'IA', 'idiomas'],
    featured: false,
  },
  {
    title: 'Un inversor recupera 5 bitcoins atrapados 11 años con ayuda de una IA que descifró su pista mnemotécnica',
    subtitle: 'El monedero, inaccesible desde 2013 y valorado actualmente en 400.000 dólares, fue desbloqueado al combinar una anotación manuscrita antigua con un modelo de lenguaje de IA',
    summary: 'Un inversor recuperó el acceso a un monedero con 5 bitcoins (400.000 $) perdido durante 11 años, gracias a una pista mnemotécnica propia que una IA ayudó a interpretar.',
    content: `<p>Un inversor de criptomonedas que llevaba <strong>once años</strong> sin poder acceder a un monedero de Bitcoin ha recuperado el control de sus fondos gracias a la combinación de una pista que él mismo anotó en papel en 2013 y la capacidad interpretativa de un modelo de inteligencia artificial. El monedero contenía <strong>5 bitcoins</strong>, valorados actualmente en torno a <strong>400.000 dólares</strong>.</p>
<h2>El problema de las contraseñas perdidas</h2>
<p>Se estima que entre el 15% y el 20% de los bitcoins en circulación —aproximadamente 3 millones de monedas— están permanentemente inaccesibles por contraseñas olvidadas o semillas mnemotécnicas perdidas. Este caso se añade a la larga lista de recuperaciones exitosas que han proliferado en los últimos años gracias al avance de los modelos de lenguaje.</p>
<h2>Cómo lo resolvió la IA</h2>
<p>El inversor guardaba una nota manuscrita con una frase que en su momento pensó que le serviría de recordatorio: una combinación de referencias personales, fechas y palabras en clave que con el tiempo perdió sentido. Tras introducir la nota en un modelo de lenguaje avanzado y proporcionar contexto sobre sus hábitos y referencias culturales de la época, el modelo generó <strong>47 variantes probables</strong> de la contraseña. La correcta fue la decimotercera en probarse.</p>
<blockquote>«Fue como tener un detective que conocía mi mente mejor que yo. Le di fragmentos de mi vida de hace once años y él los unió», explicó el inversor, que prefiere el anonimato.</blockquote>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['Bitcoin', 'criptomonedas', 'IA', 'seguridad', 'recuperación de contraseñas'],
    featured: false,
  },
  {
    title: 'Meta amplía las gafas Ray-Ban Display con escritura neural, subtítulos en directo y mejor navegación urbana',
    subtitle: 'La pulsera Neural Band de Meta permitirá ahora escribir en Instagram, WhatsApp y Messenger; también llega la grabación simultánea de pantalla y audio',
    summary: 'Meta amplía las funciones de las Ray-Ban Display: escritura vía pulsera neural en apps principales, subtítulos en tiempo real, grabación combinada y navegación peatonal mejorada en Londres, París y Roma.',
    content: `<p><strong>Meta</strong> ha anunciado una actualización significativa para sus gafas inteligentes <strong>Ray-Ban Display</strong> en Estados Unidos (donde están disponibles; en Europa aún no se han lanzado comercialmente). La actualización llega por vía software y amplía considerablemente las capacidades del dispositivo sin necesidad de nuevo hardware.</p>
<h2>Escritura con la pulsera Neural Band</h2>
<p>La novedad más llamativa es la integración de la <strong>pulsera Neural Band</strong> de Meta —que capta señales electromiográficas de la muñeca para detectar gestos de los dedos— con las aplicaciones de mensajería. Los usuarios podrán ahora redactar mensajes en <strong>Instagram Direct, WhatsApp y Messenger</strong> simplemente «escribiendo en el aire» con movimientos de los dedos, sin necesidad de sacar el teléfono.</p>
<h2>Subtítulos en directo y grabación combinada</h2>
<p>Las gafas incorporarán <strong>subtítulos en tiempo real</strong> de las conversaciones presenciales, procesados localmente con un modelo de transcripción compacto. También se añade la capacidad de grabar simultáneamente la vista de la cámara de las gafas y el audio del micrófono con el audio interno del dispositivo emparejado, facilitando la creación de contenido.</p>
<h2>Navegación peatonal mejorada</h2>
<p>La función de navegación a pie añade soporte para <strong>Londres, París y Roma</strong>, con indicaciones superpuestas en el campo visual y reconocimiento de señales de tráfico y nombres de calles en tiempo real.</p>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['Meta', 'Ray-Ban', 'gafas inteligentes', 'Neural Band', 'realidad aumentada', 'wearables'],
    featured: false,
  },
  {
    title: 'La app de verificación de edad de la UE es hackeada en dos minutos: el PIN se guarda en texto plano',
    subtitle: 'Un investigador de seguridad demostró que el código publicado almacena el PIN de cuatro dígitos en un archivo local editable, permitiendo saltarse la verificación sin ningún conocimiento técnico',
    summary: 'La app de verificación de edad de la UE, publicada con gran fanfarria regulatoria, fue comprometida en minutos: su PIN de seguridad se guarda en un archivo de texto sin cifrar en el propio dispositivo.',
    content: `<p>La <strong>Unión Europea</strong> lanzó esta semana su aplicación oficial de verificación de edad en línea, una herramienta concebida para cumplir con la normativa del <em>Digital Services Act</em> que obliga a las plataformas a impedir el acceso de menores a contenido para adultos. Apenas horas después de que el código fuente quedara accesible en el repositorio público, un investigador de seguridad demostró un fallo de diseño elemental que invalida por completo el propósito de la aplicación.</p>
<h2>El fallo: seguridad de guardería</h2>
<p>El PIN de cuatro dígitos que sirve como credencial de verificación <strong>se almacena en texto plano</strong> —sin ningún tipo de cifrado— en un archivo de configuración local dentro del directorio de datos de la app en el dispositivo. Cualquier usuario con acceso al sistema de archivos del móvil (en Android, mediante ADB o acceso root; en iOS, con una copia de seguridad sin cifrar) puede leer el PIN y modificarlo a voluntad, saltándose la verificación sin conocimientos técnicos específicos.</p>
<p>El investigador publicó un vídeo de demostración en el que, en <strong>menos de dos minutos</strong>, localiza el archivo, edita el valor del PIN con un editor de texto y accede a la app como si fuera un usuario verificado.</p>
<h2>Reacción institucional</h2>
<p>La Comisión Europea no ha emitido comunicado oficial hasta el cierre de esta edición. Expertos en ciberseguridad señalan que el fallo sugiere que la app no fue sometida a una auditoría de seguridad mínima antes de su publicación. La normativa del DSA que obliga a usar la herramienta entra en vigor el próximo 1 de julio.</p>`,
    author: 'Redacción Tecnología',
    cat: 5,
    tags: ['UE', 'ciberseguridad', 'verificación de edad', 'DSA', 'privacidad', 'hacking'],
    featured: false,
  },
  // ── CIENCIA ──────────────────────────────────────────────────
  {
    title: 'Descubren tres huellas gigantes de dinosaurio en el techo de una cueva a 500 metros de profundidad en Francia',
    subtitle: 'La erosión excavó la cavidad desde abajo durante millones de años, dejando las pisadas invertidas en lo que hoy es la bóveda de la caverna',
    summary: 'Exploradores hallaron tres enormes pisadas de dinosaurio en el techo de una cueva del sur de Francia a 500 metros de profundidad, resultado de la erosión geológica que invirtió su posición original.',
    content: `<p>Un grupo de espeleólogos del <strong>Club Martel de Montpellier</strong> encontró durante una exploración rutinaria tres huellas de gran tamaño en la bóveda de una cavidad calcárea del sur de Francia, a aproximadamente <strong>500 metros de profundidad</strong>. El hallazgo ha sido confirmado por paleontólogos de la Universidad de Poitiers, que identificaron las impresiones como pisadas de un <strong>saurópodo</strong> de gran tamaño del período Jurásico.</p>
<h2>Por qué están en el techo</h2>
<p>La explicación no es sobrenatural sino puramente geológica. Las huellas fueron impresas originalmente en el suelo —entonces una llanura costera pantanosa— hace aproximadamente <strong>150 millones de años</strong>. Con el tiempo, el sustrato calcáreo se consolidó preservando las pisadas. La cueva fue excavada mucho después por la acción disolvente del agua subterránea, que trabajó <em>desde abajo hacia arriba</em>, dejando el bloque donde estaban las huellas convertido en techo.</p>
<h2>Dimensiones y especie</h2>
<p>Cada huella mide entre 1,1 y 1,4 metros de diámetro, con una profundidad de impresión de 22 centímetros. La morfología de los dedos y la separación entre huellas sugieren que el animal medía entre 20 y 25 metros de longitud. Los investigadores estudian si podría tratarse de un <em>Brachiosaurus europaeus</em> o una especie emparentada aún sin clasificar.</p>`,
    author: 'Redacción Ciencia',
    cat: 7,
    tags: ['dinosaurios', 'paleontología', 'Francia', 'cueva', 'fósiles', 'geología'],
    featured: false,
  },
  {
    title: 'Identificado el mayor dinosaurio hallado en el sudeste asiático: 27 metros y 27 toneladas',
    subtitle: 'El Nagatitan chayapumensis vivió hace entre 100 y 120 millones de años en lo que hoy es Tailandia y supera en tamaño a todos los sauroópodos conocidos de la región',
    summary: 'Científicos han descrito el Nagatitan chayapumensis, un saurópodo de 27 metros y 27 toneladas del Cretácico inferior, el mayor dinosaurio hallado hasta la fecha en el sudeste asiático.',
    content: `<p>Una expedición conjunta de la <strong>Universidad de Mahasarakham (Tailandia)</strong> y el Museo de Historia Natural de París ha descrito formalmente una nueva especie de dinosaurio saurópodo a partir de restos óseos hallados en la cuenca de Khorat, en el noreste de Tailandia. Bautizado como <strong><em>Nagatitan chayapumensis</em></strong>, el animal es el <strong>mayor dinosaurio conocido en el sudeste asiático</strong> hasta la fecha.</p>
<h2>Dimensiones excepcionales</h2>
<p>A partir del análisis comparativo de los huesos recuperados —vértebras dorsales, fragmentos de costillas y parte de la cadera— los investigadores estiman que el <em>Nagatitan</em> alcanzaba <strong>27 metros de longitud</strong> y pesaba aproximadamente <strong>27 toneladas</strong>, comparable en tamaño a los grandes diplodócidos norteamericanos. Vivió durante el <strong>Cretácico inferior</strong>, hace entre 100 y 120 millones de años.</p>
<h2>Significado para la paleontología asiática</h2>
<p>El sudeste asiático ha estado históricamente infrarrepresentado en el registro fósil de dinosaurios, en parte por la menor tradición de excavaciones sistemáticas y en parte por las condiciones climáticas que dificultan la preservación. El hallazgo del <em>Nagatitan</em> refuerza la hipótesis de que la región albergó una fauna de sauroópodos gigantes comparable a la de América del Sur y África, con la que pudo compartir ancestros comunes a través de corredores terrestres del Mesozoico.</p>`,
    author: 'Redacción Ciencia',
    cat: 7,
    tags: ['dinosaurios', 'paleontología', 'Tailandia', 'saurópodos', 'nueva especie', 'Cretácico'],
    featured: false,
  },
  {
    title: 'Científicos coreanos crean una película inspirada en tardígrados que bloquea el 99,99% de ondas electromagnéticas',
    subtitle: 'El material, tan fino como una cinta adhesiva y flexible como el caucho, funciona entre -200 °C y +250 °C y puede fabricarse en impresora 3D',
    summary: 'Investigadores surcoreanos han desarrollado una película ultrafina inspirada en los tardígrados que bloquea el 99,99% de ondas electromagnéticas y reduce un 72% la radiación de neutrones, fabricable con impresión 3D.',
    content: `<p>Un equipo del <strong>Instituto de Ciencia y Tecnología de Corea (KAIST)</strong> ha presentado en la revista <em>Advanced Materials</em> un nuevo material de protección electromagnética y radiológica inspirado en las extraordinarias capacidades de supervivencia de los <strong>tardígrados</strong>, los microscópicos animales capaces de resistir el vacío del espacio, temperaturas extremas y dosis de radiación letales para cualquier otro ser vivo.</p>
<h2>Propiedades del material</h2>
<p>La película desarrollada —denominada <strong>TardiShield</strong> por el equipo investigador— tiene un grosor de apenas <strong>0,3 milímetros</strong>, la misma flexibilidad que el caucho y puede adherirse a cualquier superficie como si fuera cinta adhesiva. Sus propiedades medidas en laboratorio:</p>
<ul>
  <li>Bloqueo del <strong>99,99 %</strong> de las ondas electromagnéticas en el rango de 1 MHz a 40 GHz.</li>
  <li>Reducción del <strong>72 %</strong> de la radiación de neutrones (relevante en entornos nucleares).</li>
  <li>Rango operativo de temperaturas: de <strong>-200 °C a +250 °C</strong>.</li>
  <li>Fabricable mediante <strong>impresión 3D</strong> estándar con filamento compuesto.</li>
</ul>
<h2>Aplicaciones previstas</h2>
<p>El material tiene aplicaciones directas en la protección de satélites y equipos espaciales, blindaje de instalaciones nucleares y protección de electrónica sensible en entornos de alta radiación. El equipo trabaja con la Agencia Espacial Coreana (KASA) para desarrollar prototipos de paneles de satélite con TardiShield antes de 2028.</p>`,
    author: 'Redacción Ciencia',
    cat: 7,
    tags: ['tardígrados', 'material nuevo', 'radiación', 'KAIST', 'espacio', 'nanotecnología'],
    featured: false,
  },
  {
    title: 'El alcohol causa directamente 62 enfermedades y una sola copa reduce la inmunidad en 20 minutos, según nuevo informe médico',
    subtitle: 'El estudio también vincula el consumo con 30 patologías adicionales como el cáncer de mama o la demencia, aunque señala que parte del daño cerebral es reversible al dejarlo',
    summary: 'Un nuevo informe médico concluye que el alcohol es causa directa de 62 enfermedades y que una sola copa deprime el sistema inmune en 20 minutos, aunque parte del daño cerebral puede revertirse.',
    content: `<p>Un extenso informe elaborado por investigadores del <strong>Institute for Health Metrics and Evaluation (IHME)</strong> de la Universidad de Washington y publicado en <em>The Lancet</em> establece que el consumo de alcohol es la causa directa de <strong>62 enfermedades</strong> que simplemente no existirían sin el alcohol, entre ellas cardiopatías específicas, gastritis crónica, pancreatitis alcohólica y cirrosis hepática.</p>
<h2>El impacto inmunológico</h2>
<p>Una de las conclusiones más llamativas del informe es que <strong>una sola copa de alcohol</strong> es suficiente para deprimir la capacidad del sistema inmunitario en aproximadamente un <strong>20%</strong> durante las horas siguientes al consumo. El mecanismo implica la reducción temporal de la actividad de los neutrófilos y las células NK (natural killer), que son la primera línea de defensa ante infecciones.</p>
<h2>Daño cerebral parcialmente reversible</h2>
<p>El informe aporta, no obstante, un dato esperanzador: parte del daño estructural que el alcohol produce en el cerebro —especialmente en la materia blanca del córtex prefrontal— es <strong>reversible tras seis a doce meses de abstinencia</strong> en bebedores no severos. En consumo crónico severo, la reversibilidad es menor pero documentable.</p>
<p>El alcohol se vincula además a otras 30 patologías donde es un factor contribuyente, entre ellas el cáncer de mama, el colorrectal y la demencia. El informe concluye que no existe ningún nivel de consumo que sea inocuo para la salud.</p>`,
    author: 'Redacción Ciencia',
    cat: 7,
    tags: ['alcohol', 'salud', 'enfermedades', 'inmunidad', 'The Lancet', 'medicina'],
    featured: false,
  },
  // ── ECONOMÍA ──────────────────────────────────────────────────
  {
    title: 'Los mercados abren la semana en rojo: S&P 500 cede hasta 7.400 puntos y el petróleo sube a 110 dólares',
    subtitle: 'Bitcoin cotiza en 78.000 dólares, el euro se sitúa en 1,16 frente al dólar, y el oro y la plata corrigen a la baja en una sesión de aversión al riesgo generalizada',
    summary: 'Los mercados globales abren el lunes en rojo: S&P 500 en 7.400 puntos, Bitcoin en 78.000 $, petróleo en 110 $/barril y euro en 1,16 $. El oro y la plata corrigen.',
    content: `<p>Los mercados financieros globales inician la semana del 18 de mayo de 2026 con <strong>caídas generalizadas</strong>, arrastrados por una combinación de tensiones geopolíticas en Oriente Medio, incertidumbre sobre los aranceles EE.UU.-China y datos de inflación en la zona euro superiores a lo esperado.</p>
<h2>Renta variable</h2>
<p>El <strong>S&P 500</strong> retrocede hasta los <strong>7.400 puntos</strong> en la apertura de Nueva York, borrando las ganancias acumuladas en las dos últimas sesiones. El Nasdaq 100 cede un 1,2%, arrastrado por las caídas de los valores tecnológicos tras la publicación de resultados trimestrales mixtos. En Europa, el Ibex 35 abre con una caída del 0,8% y el DAX alemán del 1,1%.</p>
<h2>Materias primas y divisas</h2>
<p>El <strong>petróleo Brent</strong> avanza hasta los <strong>110 dólares por barril</strong>, impulsado por las tensiones en el Golfo Pérsico tras el incidente del dron en Emiratos Árabes Unidos. El <strong>oro</strong> corrige a la baja desde sus máximos históricos recientes, cotizando en torno a los 3.100 dólares por onza, junto con la <strong>plata</strong>.</p>
<p>En divisas, el <strong>euro</strong> se sitúa en <strong>1,16 dólares</strong>, ligeramente a la baja frente al viernes. El <strong>Bitcoin</strong> cotiza en torno a los <strong>78.000 dólares</strong>, consolidando el rango de las últimas semanas. Los analistas advierten de que la volatilidad podría aumentar a lo largo de la semana según evolucionen las negociaciones arancelarias.</p>`,
    author: 'Redacción Economía',
    cat: 3,
    tags: ['mercados', 'S&P 500', 'Bitcoin', 'petróleo', 'euro', 'bolsa'],
    featured: false,
  },
  // ── CULTURA / VIDEOJUEGOS ──────────────────────────────────────
  {
    title: 'Subnautica 2 supera el millón de copias vendidas en Steam en su primera semana de acceso anticipado',
    subtitle: 'La secuela del aclamado juego de supervivencia submarina se convierte en uno de los mejores estrenos del año en la plataforma de Valve',
    summary: 'Subnautica 2 ha vendido más de un millón de copias en Steam durante su primera semana de acceso anticipado, consolidándose como uno de los mejores lanzamientos del año.',
    content: `<p><strong>Subnautica 2</strong>, la secuela del popular juego de supervivencia y exploración submarina desarrollado por <strong>Unknown Worlds Entertainment</strong>, ha superado el <strong>millón de copias vendidas</strong> en la plataforma Steam durante su primera semana en acceso anticipado, convirtiéndose en uno de los lanzamientos más exitosos del año en la plataforma de Valve.</p>
<h2>Una franquicia que toca fibra</h2>
<p>El <em>Subnautica</em> original, lanzado en 2018, acumuló más de 5 millones de copias vendidas y se convirtió en un referente del género de supervivencia por su atmósfera única y su diseño de mundo abierto submarino. La primera expansión, <em>Below Zero</em>, también fue un éxito comercial. Las expectativas para la secuela eran altas y los primeros datos confirman que la comunidad las ha respondido.</p>
<h2>Qué ofrece la nueva entrega</h2>
<p>Subnautica 2 introduce por primera vez el <strong>modo cooperativo para hasta cuatro jugadores</strong>, un nuevo planeta oceánico con biomas únicos y un sistema de construcción de bases notablemente más profundo. En acceso anticipado se ofrece aproximadamente el 40% del contenido final previsto, con actualizaciones mensuales prometidas por el estudio.</p>
<p>En Steam, el juego mantiene una valoración de <strong>«Muy positiva»</strong> con más de 85.000 reseñas, con los jugadores destacando la atmósfera inmersiva y el progreso visible entre entregas.</p>`,
    author: 'Redacción Cultura',
    cat: 6,
    tags: ['Subnautica 2', 'videojuegos', 'Steam', 'acceso anticipado', 'Unknown Worlds'],
    featured: false,
  },
  {
    title: 'Los Troncos se proclaman campeones del sexto split de la Kings League',
    subtitle: 'El equipo venció en la final al conjunto de Espursito, presidido por un jugador del FC Barcelona, en un partido que siguieron millones de espectadores en streaming',
    summary: 'Los Troncos se coronan campeones del sexto split de la Kings League, derrotando en la final al equipo de Espursito en una gran final seguida por millones de fans.',
    content: `<p>El equipo <strong>Los Troncos</strong> se ha proclamado campeón de la sexta edición del split de la <strong>Kings League</strong>, la competición de fútbol 7 creada por Gerard Piqué que se ha consolidado como uno de los fenómenos de entretenimiento deportivo más seguidos de la actualidad entre el público joven.</p>
<h2>La final</h2>
<p>Los Troncos derrotaron en la gran final al equipo de <strong>Espursito</strong>, presidido por un jugador del FC Barcelona, en un partido disputado y emocionante que no se decidió hasta los últimos minutos. La retransmisión simultánea en <strong>Twitch, YouTube y TikTok</strong> acumuló un pico de más de 3 millones de espectadores concurrentes, cifra que consolida el formato como referencia en el deporte de entretenimiento.</p>
<h2>La Kings League, un modelo de negocio en expansión</h2>
<p>Desde su creación en 2023, la Kings League ha expandido su modelo a más de doce países con ligas propias, incluyendo Francia, Italia, Brasil y México. El formato mezcla el fútbol con elementos del entretenimiento en directo: presidentes que son creadores de contenido, reglas especiales que cambian cada jornada y una producción televisiva de primer nivel pensada para el consumo en vertical y en clips cortos.</p>`,
    author: 'Redacción Deportes',
    cat: 4,
    tags: ['Kings League', 'Los Troncos', 'fútbol 7', 'streaming', 'Gerard Piqué'],
    featured: false,
  },
]

async function seed() {
  let created = 0, skipped = 0
  for (const art of articles) {
    const slug = slugify(art.title)
    const wordCount = art.content.replace(/<[^>]+>/g, '').split(/\s+/).length
    const readingTime = Math.max(1, Math.round(wordCount / 200))
    const [existing] = await pool.query('SELECT id FROM articles WHERE slug = ?', [slug])
    if (existing.length) { console.log(`⏭️  ${art.title}`); skipped++; continue }
    const [result] = await pool.query(
      `INSERT INTO articles (title,subtitle,slug,summary,content,author,category_id,is_featured,reading_time,published_at)
       VALUES (?,?,?,?,?,?,?,?,?, '2026-05-18 08:00:00')`,
      [art.title, art.subtitle, slug, art.summary, art.content, art.author, art.cat, art.featured ? 1 : 0, readingTime]
    )
    for (const tagName of art.tags) {
      await pool.query('INSERT IGNORE INTO tags (name) VALUES (?)', [tagName])
      const [t] = await pool.query('SELECT id FROM tags WHERE name = ?', [tagName])
      if (t.length) await pool.query('INSERT IGNORE INTO article_tags VALUES (?,?)', [result.insertId, t[0].id])
    }
    console.log(`✅ [cat:${art.cat}] ${art.title}`)
    created++
  }
  console.log(`\n🎉 ${created} creados, ${skipped} omitidos`)
  process.exit(0)
}
seed().catch(e => { console.error(e.message); process.exit(1) })
