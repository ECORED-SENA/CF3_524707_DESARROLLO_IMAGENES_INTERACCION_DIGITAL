<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis fundamentos de la animación con seis categorías principales: historia, técnicas, principios, imagen digital, formatos y tendencias. Incluye subtemas como antecedentes prehistóricos, dispositivos ópticos, cine animado, animación digital e IA; técnicas tradicional, 2D, stop motion, motion graphics y 3D; 12 principios clásicos; representación en píxeles y atributos técnicos; formatos JPG, GIF, PNG, BMP, TIFF, PSD, RAW y PDF; y tendencias como fondos animados, logos animados, infografías, Live Data y texto en movimiento")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
