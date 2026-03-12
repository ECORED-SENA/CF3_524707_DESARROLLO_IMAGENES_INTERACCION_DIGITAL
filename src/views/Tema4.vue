<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pensamiento innovador y tendencias en la animación

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un contexto de transformación tecnológica constante, resulta fundamental mantenerse actualizado frente a los desarrollos que impactan los distintos ámbitos de la sociedad. La animación y las tecnologías asociadas no son la excepción. Adoptar una perspectiva innovadora implica identificar oportunidades de mejora y proponer soluciones que respondan a necesidades concretas, tanto en el entorno local como global.

    p.mb-0 Se considera que una propuesta es innovadora cuando posee potencial de usufructo y rentabilidad, al mismo tiempo que da respuesta a una necesidad identificable. En el campo de la animación, la innovación se manifiesta en nuevas aplicaciones, formatos y experiencias interactivas que transforman la manera en que las audiencias interactúan con el contenido digital.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Aplicaciones más recientes de la animación

   
    p Las tendencias actuales evidencian una integración creciente entre animación, comunicación digital, análisis de datos y experiencias inmersivas. Estas aplicaciones no solo cumplen una función estética, sino también estratégica en términos de posicionamiento, narrativa y experiencia de usuario.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/2.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Fondos y gráficos animados
              p.mb-0 Se han convertido en una carta de presentación clave para páginas <em>web</em>, especialmente en sectores como tecnología, ecommerce y educación en línea. Aportan dinamismo, modernidad y refuerzan la identidad visual del sitio, mejorando la experiencia de navegación.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/3.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Logos animados
              p.mb-0 Cada vez más marcas implementan versiones animadas de sus logotipos para fortalecer su identidad y personalidad corporativa. Un logotipo animado en 3D puede transmitir modernidad, dinamismo y cercanía, diferenciando a la marca en entornos digitales competitivos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/4.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Surrealismo digital
              p.mb-0 Tendencia que propone animaciones impactantes e inesperadas, como evaporación de objetos, apariciones mágicas, burbujas que no explotan o transformaciones imposibles. Estas propuestas amplían los límites de la representación realista y potencian la creatividad conceptual.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/5.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 <em>Live Data</em>
              p.mb-0 La animación de datos facilita la comprensión de gráficos e información estadística. Al incorporar movimiento, se incrementa el interés y el tiempo de permanencia del usuario en páginas web o presentaciones digitales, fortaleciendo la comunicación de información compleja.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/6.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Infografías animadas
              p.mb-0 Permiten presentar información de manera dinámica y estructurada, combinando imágenes, texto y datos bajo estrategias de <em>storytelling</em>. Esta integración favorece la comprensión y genera mayor involucramiento del usuario con el contenido.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema4/7.png', alt='' style="max-width: 500px").m-auto
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Texto en movimiento
              p.mb-0 Recurso sencillo y eficaz para captar la atención en entornos digitales. El movimiento tipográfico aporta énfasis, jerarquía y dinamismo en presentaciones, redes sociales y plataformas <em>web</em>.
    p.mb-0 Las tendencias descritas evidencian que la animación ha trascendido el ámbito cinematográfico para integrarse en estrategias de comunicación digital, mercadeo, educación y análisis de datos. El pensamiento innovador en este campo exige comprender las necesidades del contexto, explorar nuevas tecnologías y articular creatividad con funcionalidad.
   
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
