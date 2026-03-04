<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Técnicas de animación

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Tipos de animación
    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/1.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación tradicional
              p.mb-0 Para comprender el origen del proceso de animación tal como se conoce hoy, es necesario referirse al Flipbook, inventado por John Barnes Linnett en 1868. Consistía en un libro donde se dibujaba página a página una escena que, al pasar rápidamente las hojas, generaba la sensación de movimiento. La animación clásica mantiene este mismo principio: dibujar manualmente cada fotograma en papel o acetato. Los personajes y escenarios se desarrollan en dos dimensiones (X y Y), y la profundidad se logra mediante perspectiva, color, luces y sombras, entre otros recursos gráficos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/2.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación 2D
              p.mb-0 Considerada una evolución directa de la animación tradicional, se basa en la creación de personajes y fondos en dos dimensiones. Inicialmente realizada a mano, con la llegada del computador el proceso migró a programas especializados. En la década de 1990, los estudios comenzaron a escanear dibujos para digitalizar etapas como delineado, colorización, aplicación de efectos y generación de movimiento, transformando sustancialmente esta técnica.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Stop Motion
              p.mb-0 Técnica en la que se manipulan físicamente objetos para simular que se mueven de forma autónoma. El procedimiento consiste en fotografiar el objeto, moverlo levemente y volver a fotografiarlo, repitiendo el proceso hasta completar la secuencia. Se emplean muñecos de trapo, plastilina, recortes de papel, arcilla u otros objetos inanimados. El director Tim Burton utilizó esta técnica en The Nightmare Before Christmas (1993), producción que tardó tres años en realizarse, contó con 227 marionetas y tuvo un costo aproximado de 20 millones de dólares.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/4.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación tipográfica y Motion Graphics
              p.mb-0 Consiste en generar la ilusión de movimiento mediante imágenes, fotografías, títulos, colores y diseños gráficos en un producto audiovisual. Se emplea en videos corporativos, posproducción audiovisual, presentaciones interactivas y logotipos. Aunque actualmente se desarrolla con herramientas digitales, comenzó a utilizarse de forma análoga en la década de 1960. El término fue acuñado por John Whitney, quien trabajó en Vértigo (1958) de Alfred Hitchcock y fundó Motion Graphics Inc. El diseñador Saul Bass también realizó aportes significativos en créditos cinematográficos como Ciudadano Kane y West Side Story, integrando animación de recortes, montaje, acción real y diseño tipográfico.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/5.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Rotoscopia
              p.mb-0 Técnica que combina grabación en vivo con dibujo animado. Consiste en calcar o reinterpretar las acciones de un actor real, ilustrando un personaje sobre cada fotograma de la filmación. También puede implicar la creación completa de un personaje animado que interactúa con el actor real, dejando espacio en el encuadre para su integración posterior. Ejemplos destacados incluyen ¿Quién engañó a Roger Rabbit? (1988) y Moonwalker (1988)), donde actores reales interactúan con dibujos animados.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/6.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Pixilación
              p.mb-0 Variante del Stop Motion en la que personas reales y objetos son fotografiados repetidamente, desplazándolos ligeramente entre cada toma. Al organizar las imágenes en secuencia, se genera una percepción surrealista del entorno real, alterando aparentemente las leyes físicas. El pionero de esta técnica fue Norman McLaren con el cortometraje Neighbours (1952).
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/7.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación 3D
              p.mb-0 Consiste en la manipulación y movimiento digital de objetos tridimensionales definidos por ancho (X), alto (Y) y profundidad (Z) dentro de un espacio virtual. El proceso inicia con el modelado digital de personajes y escenarios. Posteriormente, se integra un sistema de esqueleto mediante Rigging, que permite manipular la malla. El movimiento se estructura a través de fotogramas clave o keyframes, y el sistema genera automáticamente los fotogramas intermedios para lograr fluidez. La calidad final depende de la experticia del modelador y animador, así como del tratamiento de iluminación, texturización y efectos visuales y físicos. La animación 3D busca representar en el entorno digital, con la mayor fidelidad posible, factores físicos y estéticos del mundo real o crear escenarios imposibles. Además, ha impulsado desarrollos como Motion Capture, Realidad Virtual y Realidad Aumentada.
    
   
  
</template>

<script>
export default {
  name: 'Tema2',
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
