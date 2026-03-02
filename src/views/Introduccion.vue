<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-color-1.mb-5
      .row.align-items-center
        .col-lg-auto.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/intro/1.svg").mx-auto
        .col-lg.order-lg-1.p-4.px-lg-4
          p.mb-0 El programa de formación técnica en Integración de Contenidos Digitales pretende otorgar al aprendiz SENA los conocimientos necesarios para desarrollar estrategias de planeación y producción de contenidos digitales y multimedia que las <em>Mipymes</em> del país requieren en el contexto de la cuarta revolución industrial. A continuación, le invitamos a revisar el video de introducción frente a este tema:

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
