<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Imagen digital

    .row.align-items-center.mb-5
      .col-lg
        .caja-tema-3(data-aos="fade-right")
          p.mb-0 Una imagen digital es una representación bidimensional generada por un computador mediante una matriz numérica binaria compuesta por ceros y unos. Puede ser estática o en movimiento. Se entiende como una imagen procesada y generada por medios digitales, ya sea obtenida mediante dispositivos de entrada como escáneres y cámaras digitales (proceso conocido como digitalización) o creada directamente a través de software especializado utilizando el ratón o tablas digitalizadoras.
      .col-lg-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema3/10.jpg', alt='').m-auto 
      .col-lg
        figure.d-none.d-xl-block.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/tema3/9.svg', alt='' style="width: 76px;")
        p.mb-5.movil_1 Las imágenes digitales poseen atributos específicos que determinan sus posibilidades de edición y uso: tamaño, ancho, alto, tipo de codificación, profundidad de paleta de colores y cantidad de detalle expresada en píxeles. Estos factores inciden en la compatibilidad con programas informáticos, la calidad visual y el peso del archivo.
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Formatos digitales

    p.mb-5 La información digital se almacena en archivos compuestos por un nombre, un punto y una extensión. Esta extensión indica el programa con el cual puede reproducirse y editarse el archivo. De este modo se clasifican archivos de texto, audio, video, ejecución, sistema, compresión, lectura o imagen, categoría en la que se centran los siguientes formatos. A continuación, se describen los principales formatos digitales de imagen y sus características técnicas.

    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-2.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/2.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 JPG o JPEG
              p.mb-0 Su nombre proviene del comité <em>Joint Photographic Experts Group</em>, responsable del estándar de compresión de imágenes fijas. Es un formato que comprime la información digital tanto en color como en escala de grises, manteniendo alta calidad con un peso de archivo reducido. Es el formato más común en cámaras digitales, ya que equilibra calidad y almacenamiento.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/3.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 <em>GIF</em>
              p.mb-0 Sigla de <em>Graphics Interchange Format</em>. Se utiliza ampliamente en internet por su rápida carga y descarga, tanto para imágenes estáticas como para animaciones. Soporta hasta 256 colores sin pérdida de calidad dentro de esa paleta. Fue desplazado en los años 2000 por el formato <em>SWF</em> de <em>Flash</em>, pero recuperó vigencia tras la obsolescencia de este último en dispositivos móviles. Permite canal alfa con dos estados: totalmente transparente o totalmente opaco. Según Katherine Martin, responsable del diccionario de <em>Oxford</em>, el <em>GIF</em> se consolidó como medio de expresión de la cultura pop y herramienta de investigación digital vigente.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/1.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 BMP
              p.mb-0 Sigla de <em>Bit Maps Protocol</em>. Formato propio de <em>Microsoft Windows</em>. Admite una amplia gama de paletas de color, desde 24 <em>bits</em> (16,7 millones de colores) hasta 8 <em>bits</em> (menos de 256 colores). Puede conservar calidad sin pérdida, pero genera archivos de gran tamaño, lo que limita su eficiencia en almacenamiento y uso en internet. Se recomienda cuando se requiere alta calidad y resolución antes de convertirlo a formatos más livianos como JPG, GIF o PNG.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/4.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PNG
              p.mb-0 Sigla de <em>Portable Network Graphics</em>. Fue desarrollado para superar limitaciones del <em>GIF</em>. Permite mayor profundidad de color, peso moderado y canal alfa con distintos niveles de transparencia, incluyendo semitransparencia. Es adecuado para secuencias de imágenes destinadas a composición en video, especialmente cuando se requiere silueteado con transparencia, como logotipos superpuestos en pantalla.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/5.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 <em>TIFF</em>
              p.mb-0 Sigla de <em>Tagged Image File Format</em>. Precursor conceptual del PDF. Conserva alta calidad mediante compresión no destructiva o incluso sin compresión, lo que implica archivos de gran tamaño. Es ampliamente utilizado en periodismo gráfico porque permite almacenar varias imágenes de excelente calidad en un mismo archivo. No pierde detalle al guardarse repetidamente, a diferencia de otros formatos con compresión destructiva.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/6.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PSD
              p.mb-0 Sigla de <em>Photoshop Document</em>. Es el formato nativo editable de <em>Adobe Photoshop</em>. Conserva capas, efectos, máquinas y demás características del <em>software</em>. Ofrece alta compatibilidad con otros programas de <em>Adobe</em> como <em>Illustrator</em>, <em>After Effects</em>, <em>InDesign</em> y <em>Premiere</em>. Es un formato rasterizado, compuesto por píxeles, por lo que su calidad depende de la resolución (píxeles por pulgada) y puede perder nitidez si se amplía más allá de sus dimensiones originales.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/7.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 RAW
              p.mb-0 Significa “crudo” y almacena la totalidad de los datos captados por el sensor digital de la cámara. Permite edición posterior mediante <em>software</em> de revelado digital como <em>Lightroom</em>, modificando parámetros como lente, obturación y sensibilidad. Por esta razón también se denomina “negativo digital”. Generalmente, posee una profundidad de color entre 36 y 48 bits por píxel y un tamaño de archivo considerablemente grande.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/8.svg', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PDF
              p.mb-0 Sigla de <em>Portable Document Format</em>. Fue creado para facilitar la transición del papel al entorno digital, permitiendo guardar documentos de cualquier aplicación en una versión electrónica universal. Actualmente, es uno de los formatos más utilizados por compañías y editoriales. Además de contenido gráfico de alta calidad, puede incluir hipervínculos, botones, formularios, audio y video.    
          
    p.mb-0 Los formatos digitales determinan no solo la calidad y el peso de la imagen, sino también sus posibilidades de edición, distribución e integración en distintos entornos digitales. La elección adecuada depende del propósito técnico, la plataforma de publicación y el equilibrio requerido entre calidad visual y eficiencia de almacenamiento.
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Herramientas digitales  
        
    p.mb-3 En la actualidad, la tecnología permea la vida cotidiana en el trabajo, el hogar, la comunidad y la familia, estableciendo un vínculo permanente con el entorno. Por ello, resulta indispensable comprender y utilizar adecuadamente herramientas tecnológicas y digitales. En el campo de la animación, los programas de diseño audiovisual permiten desarrollar habilidades creativas e innovadoras, fortaleciendo procesos de producción gráfica y narrativa.
    p.mb-5 Entre los programas más representativos para la animación digital se encuentran aplicaciones de escritorio de <em>Adobe Creative Cloud</em> y <em>Autodesk</em>, así como otros entornos especializados en modelado y gráficos en movimiento. A continuación, se describen sus principales características y aplicaciones.   
        
    .row.justify-content-center.mb-5
      .col-lg-10  
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="<em>Adobe After Effects</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 <em>Software</em> orientado a la elaboración, diseño audiovisual y composición digital. Permite aplicar movimiento a recursos gráficos y se utiliza principalmente en posproducción de imágenes en movimiento. Facilita la animación, alteración y composición en formatos 2D y 3D. Entre sus funciones se encuentran: animación de figuras y objetos 2D; animación de trazos vectoriales; creación y animación de textos como créditos e introducciones con transiciones dinámicas; integración de efectos especiales en video; y procesos de posproducción como ajustes de color, efectos visuales, inclusión de gráficas animadas y efectos de audio. Es especialmente recomendable para quienes ya están familiarizados con el entorno Adobe.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/11.png', alt='Logo o interfaz de Adobe After Effects')

          .row(titulo="<em>Adobe Animate</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Conocido anteriormente como <em>Adobe Flash Professional</em>, es una aplicación para la creación y manipulación de gráficos vectoriales (2D), gráficos rasterizados, sonido, flujo de video y animaciones en formato <em>HTML5</em>. Funciona bajo una estructura basada en fotogramas y está orientado a la producción de contenido interactivo para videojuegos, aplicaciones y entornos <em>web</em>.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/12.png', alt='Logo o interfaz de Adobe Animate')

          .row(titulo="<em>Character Animator</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Aplicación de <em>Adobe Creative Cloud</em> que integra captura de movimiento en vivo (<em>MoCap</em>) mediante cámara <em>web</em> y micrófono. Combina esta tecnología con un sistema de grabación multipista que permite animar personajes en tiempo real. No requiere experiencia avanzada en animación, por lo que es una alternativa adecuada para usuarios principiantes.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/13.png', alt='')

          .row(titulo="<em>3ds Max</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 <em>Software</em> de diseño y animación 3D dirigido a industrias como manufactura, construcción, medios y entretenimiento. Dispone de herramientas para procesar escenas y personajes complejos, realizar modelado, animación y renderizado 3D, especialmente en visualización para videojuegos, arquitectura y diseño industrial.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/14.png', alt='')

          .row(titulo="<em>Autodesk Maya</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Plataforma profesional que integra herramientas para animación 3D, modelado, simulación, creación de ambientes, gráficos en movimiento, realidad virtual y diseño de personajes para cine, televisión y videojuegos. Es ampliamente utilizado en producciones cinematográficas y de alto nivel técnico.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/15.png', alt='')

          .row(titulo="Cinema 4D")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Permite trabajar bajo un enfoque no destructivo. Es empleado en gráficos en movimiento, diseño arquitectónico, visualización de productos y modelado paramétrico. Incluye sombreadores de procedimiento, texturización, animación y múltiples herramientas para lograr resultados de alta calidad visual. Su interfaz organizada facilita un uso intuitivo.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/16.png', alt='')

          .row(titulo="<em>Blender</em>")
            .col-md-8.mb-4.mb-md-0
              p.mb-0 Programa 3D gratuito y de código abierto. Ofrece modelado, texturizado, iluminación, animación, renderizado, simulación, composición, edición de video y seguimiento de movimiento. Permite realizar procesos completos de posproducción dentro del mismo entorno, integrando efectos visuales y edición audiovisual.
            .col-md-4
              figure.d-none.d-xl-block
                img.img-fluid(src='@/assets/curso/tema3/17.png', alt='')

    p.mb-0 La selección de una herramienta digital depende del propósito del proyecto, el nivel de complejidad requerido y el contexto profesional en el que se desarrolle la animación. Cada <em>software</em> aporta soluciones específicas que amplían las posibilidades técnicas y expresivas en la producción audiovisual digital.   

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
