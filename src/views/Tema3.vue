<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Imagen digital
    
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Formatos digitales
    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-2.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/1.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 JPG o JPEG
              p.mb-0 Su nombre proviene del comité Joint Photographic Experts Group, responsable del estándar de compresión de imágenes fijas. Es un formato que comprime la información digital tanto en color como en escala de grises, manteniendo alta calidad con un peso de archivo reducido. Es el formato más común en cámaras digitales, ya que equilibra calidad y almacenamiento.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/2.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 GIF
              p.mb-0 Sigla de Graphics Interchange Format. Se utiliza ampliamente en internet por su rápida carga y descarga, tanto para imágenes estáticas como para animaciones. Soporta hasta 256 colores sin pérdida de calidad dentro de esa paleta. Fue desplazado en los años 2000 por el formato SWF de Flash, pero recuperó vigencia tras la obsolescencia de este último en dispositivos móviles. Permite canal alfa con dos estados: totalmente transparente o totalmente opaco. Según Katherine Martin, responsable del Diccionario de Oxford, el GIF se consolidó como medio de expresión de la cultura pop y herramienta de investigación digital vigente.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/3.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 BMP
              p.mb-0 Sigla de Bit Maps Protocol. Formato propio de Microsoft Windows. Admite una amplia gama de paletas de color, desde 24 bits (16,7 millones de colores) hasta 8 bits (menos de 256 colores). Puede conservar calidad sin pérdida, pero genera archivos de gran tamaño, lo que limita su eficiencia en almacenamiento y uso en internet. Se recomienda cuando se requiere alta calidad y resolución antes de convertirlo a formatos más livianos como JPG, GIF o PNG.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PNG
              p.mb-0 Sigla de Portable Network Graphics. Fue desarrollado para superar limitaciones del GIF. Permite mayor profundidad de color, peso moderado y canal alfa con distintos niveles de transparencia, incluyendo semitransparencia. Es adecuado para secuencias de imágenes destinadas a composición en video, especialmente cuando se requiere silueteado con transparencia, como logotipos superpuestos en pantalla.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 TIFF
              p.mb-0 Sigla de Tagged Image File Format. Precursor conceptual del PDF. Conserva alta calidad mediante compresión no destructiva o incluso sin compresión, lo que implica archivos de gran tamaño. Es ampliamente utilizado en periodismo gráfico porque permite almacenar varias imágenes de excelente calidad en un mismo archivo. No pierde detalle al guardarse repetidamente, a diferencia de otros formatos con compresión destructiva.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PSD
              p.mb-0 Sigla de Photoshop Document. Es el formato nativo editable de Adobe Photoshop. Conserva capas, efectos, máquinas y demás características del software. Ofrece alta compatibilidad con otros programas de Adobe como Illustrator, After Effects, InDesign y Premiere. Es un formato rasterizado, compuesto por píxeles, por lo que su calidad depende de la resolución (píxeles por pulgada) y puede perder nitidez si se amplía más allá de sus dimensiones originales.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 RAW
              p.mb-0 Significa “crudo” y almacena la totalidad de los datos captados por el sensor digital de la cámara. Permite edición posterior mediante software de revelado digital como Lightroom, modificando parámetros como lente, obturación y sensibilidad. Por esta razón también se denomina “negativo digital”. Generalmente posee una profundidad de color entre 36 y 48 bits por píxel y un tamaño de archivo considerablemente grande.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/8.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 PDF
              p.mb-0 Sigla de Portable Document Format. Fue creado para facilitar la transición del papel al entorno digital, permitiendo guardar documentos de cualquier aplicación en una versión electrónica universal. Actualmente es uno de los formatos más utilizados por compañías y editoriales. Además de contenido gráfico de alta calidad, puede incluir hipervínculos, botones, formularios, audio y video.    

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Herramientas digitales  
        
       

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
