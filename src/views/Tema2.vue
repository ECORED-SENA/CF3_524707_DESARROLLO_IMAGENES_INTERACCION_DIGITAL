<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Técnicas de animación
    .row.align-items-center 
      .col-lg
        .caja3
          p.mb-0 Una imagen digital es una representación bidimensional generada por un computador mediante una matriz numérica binaria compuesta por ceros y unos. Puede ser estática o en movimiento. Se entiende como una imagen procesada y generada por medios digitales, ya sea obtenida mediante dispositivos de entrada como escáneres y cámaras digitales (proceso conocido como digitalización) o creada directamente a través de software especializado utilizando el ratón o tablas digitalizadoras.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/8.png', alt='').m-auto 
      .col-lg
        figure.mb-3
          img(src='@/assets/curso/tema2/9.png', alt='' style="width: 76px;").m-auto
        p.mb-0 La evolución técnica ha estado ligada tanto a procesos manuales como a desarrollos tecnológicos digitales, ampliando progresivamente las formas de producción y representación.
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Tipos de animación

          p.mb-0 Desde la animación tradicional basada en células transparentes hasta la incorporación del computador en los procesos creativos, la animación ha experimentado transformaciones significativas. La digitalización permitió crear escenarios, personajes y secuencias con mayor agilidad, optimizando etapas como delineado, colorización, efectos y movimiento. A continuación, se describen los principales tipos de animación y sus características técnicas.
    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/1.png', alt='')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación tradicional
              p.mb-0 Para comprender el origen del proceso de animación tal como se conoce hoy, es necesario referirse al Flipbook, inventado por John Barnes Linnett en 1868. Consistía en un libro donde se dibujaba página a página una escena que, al pasar rápidamente las hojas, generaba la sensación de movimiento. La animación clásica mantiene este mismo principio: dibujar manualmente cada fotograma en papel o acetato. Los personajes y escenarios se desarrollan en dos dimensiones (X y Y), y la profundidad se logra mediante perspectiva, color, luces y sombras, entre otros recursos gráficos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/2.png', alt='')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Animación 2D
              p.mb-0 Considerada una evolución directa de la animación tradicional, se basa en la creación de personajes y fondos en dos dimensiones. Inicialmente realizada a mano, con la llegada del computador el proceso migró a programas especializados. En la década de 1990, los estudios comenzaron a escanear dibujos para digitalizar etapas como delineado, colorización, aplicación de efectos y generación de movimiento, transformando sustancialmente esta técnica.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/3.png', alt='')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Stop Motion
              p.mb-0 Técnica en la que se manipulan físicamente objetos para simular que se mueven de forma autónoma. El procedimiento consiste en fotografiar el objeto, moverlo levemente y volver a fotografiarlo, repitiendo el proceso hasta completar la secuencia. Se emplean muñecos de trapo, plastilina, recortes de papel, arcilla u otros objetos inanimados. El director Tim Burton utilizó esta técnica en The Nightmare Before Christmas (1993), producción que tardó tres años en realizarse, contó con 227 marionetas y tuvo un costo aproximado de 20 millones de dólares.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')
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
   
    p.mb-5 La diversidad de técnicas demuestra que la animación no es un procedimiento único, sino un campo interdisciplinar en constante transformación. Cada técnica responde a contextos tecnológicos, estéticos y narrativos específicos, ampliando las posibilidades creativas del lenguaje audiovisual. 
   
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Principios de la animación
    p.mb-5 Los principios de la animación son doce (12). Fueron desarrollados en la década de 1930 por los estudios Disney ante la necesidad de establecer un lenguaje común entre animadores y técnicos. Posteriormente fueron sistematizados por Frank Thomas y Ollie Johnston. Estos principios se fundamentan en las leyes de la física y en el comportamiento orgánico del movimiento, con el objetivo de otorgar a los personajes mayor realismo físico y emocional. A continuación, se presentan los doce principios con su respectiva explicación técnica y conceptual
    .bg--img_03
      .row.justify-content-center
        
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            
            .row(titulo="Estirar y encoger (Deformación)")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Busca alcanzar extremos más expresivos y con mayor fuerza dramática. Refuerza la acción y la hace más creíble y contundente. Es esencial para generar sensación de peso y elasticidad, tanto en cuerpos como en objetos, permitiendo transmitir impacto, flexibilidad o rigidez según el caso.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 1. Estirar y encoger
                  img.img-fluid(src='@/assets/curso/tema2/GIF/1.gif', alt='Cuadro animado que representa deformación de un personaje al estirarse y comprimirse para expresar elasticidad. ')

            .row(titulo="Anticipación")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Dado que la animación es una secuencia de imágenes, resulta fundamental vincular una pose con la siguiente mediante continuidad de acciones. Este principio guía la atención hacia el lugar donde está por ocurrir una nueva acción, hace previsible el movimiento siguiente, añade suspenso y evita que la transición resulte abrupta o confusa.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 2. Anticipación
                  img.img-fluid(src='@/assets/curso/tema2/GIF/2.gif', alt='Cuadro animado  que representa movimiento preparatorio previo a una acción principal. ')

            .row(titulo="Puesta en escena")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Relacionada con la actuación y su presentación en pantalla. Cada plano debe tener un encuadre adecuado y cada fotograma debe contribuir al avance narrativo. Exige claridad en el contexto, así como en las relaciones entre personajes y entorno, asegurando que la intención dramática sea comprensible.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 3. Puesta en escena
                  img.img-fluid(src='@/assets/curso/tema2/GIF/3.gif', alt='Cuadro animado que representa personaje encuadrado dentro de un escenario con composición definida. ')

            .row(titulo="Acción directa y pose a pose")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Son dos técnicas distintas. La acción directa consiste en crear la animación cuadro a cuadro de manera secuencial, favoreciendo espontaneidad y fluidez. La animación por pose a pose implica definir primero los fotogramas clave y luego construir las transiciones intermedias, lo que facilita el control estructural del movimiento.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 4. Acción directa y pose a pose
                  img.img-fluid(src='@/assets/curso/tema2/GIF/4.gif', alt='Cuadro animado comparativo que representa secuencia continua y construcción por fotogramas clave. ')

            .row(titulo="Overlapping (Acción continuada y superpuesta)")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Se basa en que las acciones no se detienen de manera simultánea en todas las partes de un sistema. Cuando el cuerpo concluye un movimiento, sus partes continúan desplazándose debido a la inercia. Los elementos se mueven de forma asincrónica, respetando una jerarquía en la concatenación de acciones.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 5. Overlapping
                  img.img-fluid(src='@/assets/curso/tema2/GIF/5.gif', alt='Figura que representa movimiento  que continúan desplazándose por inercia. ')

            .row(titulo="Easy In & Easy Out (Entradas y salidas suaves)")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Propone que los movimientos inicien y finalicen de manera progresiva. Responde a factores físicos como gravedad, resistencia, tensión y fricción. La aceleración y desaceleración gradual generan naturalidad y coherencia orgánica en la animación.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 6. Entradas y salidas suaves
                  img.img-fluid(src='@/assets/curso/tema2/GIF/6.gif', alt='Cuadro animado que representa aceleración y desaceleración progresiva en un movimiento.  ')

            .row(titulo="Arcos")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Los movimientos orgánicos describen trayectorias curvilíneas. En los seres vivos no predominan desplazamientos rectilíneos absolutos, sino arcos suaves y cerrados. Este principio aporta armonía y naturalidad al movimiento animado.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 7. Arcos
                  img.img-fluid(src='@/assets/curso/tema2/GIF/7.gif', alt='Cuadro animado que representa trayectoria curva en el desplazamiento de un personaje u objeto.')

            .row(titulo="Acción secundaria")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Complementa y potencia la acción principal sin superarla en intensidad. Su función es reforzar la actuación del personaje, dirigir la atención hacia el punto de interés y enriquecer la escena sin distraer del objetivo narrativo central.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 8. Acción secundaria
                  img.img-fluid(src='@/assets/curso/tema2/GIF/8.gif', alt='Cuadro animado  que representa movimiento complementario que refuerza la acción principal. ')

            .row(titulo="Timing (Ritmo)")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 El número de dibujos o fotogramas empleados en un movimiento determina su duración en pantalla. Esto influye directamente en la percepción emocional e intencional del personaje, ya que un movimiento rápido o lento comunica estados distintos.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 9. Timing (Ritmo)
                  img.img-fluid(src='@/assets/curso/tema2/GIF/9.gif', alt='Cuadro animado que representa el timing o ritmo en la animación. ')

            .row(titulo=" Exageración")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Consiste en acentuar expresiones y movimientos para incrementar dramatismo o comicidad. Implica distorsionar forma y movimiento con fines expresivos, manteniendo coherencia interna dentro del estilo propuesto.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 10. Exageración
                  img.img-fluid(src='@/assets/curso/tema2/GIF/10.gif', alt='Cuadro animado  que representa gestos y movimientos acentuados con intención dramática o cómica. ')

            .row(titulo="Solidez")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Se fundamenta en la capacidad de representar correctamente volumen, peso, equilibrio y perspectiva. Cuanto mayor dominio del dibujo y comprensión de principios artísticos básicos, más convincente resultará la animación. La credibilidad depende de la coherencia con la experiencia física del mundo real.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 11. Solidez
                  img.img-fluid(src='@/assets/curso/tema2/GIF/11.gif', alt='Cuadro animado que representa volumen, equilibrio y perspectiva en un personaje.')

            .row(titulo=" Appeal (Atractivo)")
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Hace referencia a la personalidad y carisma del personaje. Deriva del significado etimológico de animación como “dar alma” o “dar vida”. El animador debe dotar al personaje de solidez y atractivo suficientes para generar y sostener conexión emocional con el espectador, definiendo su forma de ser, moverse y expresar emociones.
              .col-md-4
                figure
                  .mb-2.fw-bold Figura 12. Appeal (Atractivo)
                  img.img-fluid(src='@/assets/curso/tema2/GIF/12.gif', alt='Cuadro animado que representa diseño de personaje con rasgos expresivos y carismáticos. ')

      p.mb-5 En conjunto, estos doce principios constituyen la base técnica y expresiva de la animación clásica y continúan vigentes en la animación digital contemporánea. Su aplicación permite construir movimientos coherentes, narrativas claras y personajes con profundidad emocional.
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
