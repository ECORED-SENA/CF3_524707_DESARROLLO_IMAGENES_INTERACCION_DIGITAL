<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Creación web

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 La creación o desarrollo de sitios web trasciende el concepto tradicional de diseño, ya que integra dimensiones técnicas, estratégicas y funcionales que convergen para producir un entorno digital coherente. Este proceso combina estructura, programación, experiencia de usuario y objetivos corporativos con el fin de construir un producto que cumpla características definidas: calidad estética, adecuada navegabilidad y funcionalidad eficiente

        .row.justify-content-center
          .col-lg-8
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6.mb-3.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
              .col-lg-6.order-lg-1
                .bg-color-1.p-5
                  p.mb-0 Un diseño óptimo no se limita a la integración de contenido visual ni a la aplicación de principios de UX (User Experience).
    
        p.mb-5 También depende de la definición previa de objetivos por parte del cliente y de su alineación con la estrategia global de la empresa. En este contexto, herramientas como Google Analytics orientan la toma de decisiones mediante el análisis de métricas y comportamiento de usuarios.

        .row.justify-content-center
          .col-lg-8
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6.mb-3.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
              .col-lg-6.order-lg-1
                .bg-color-1.p-5
                  p.mb-0 Además, la construcción de páginas web incorpora la producción estratégica de contenido, elemento que adquiere creciente relevancia al constituirse como un recurso clave para la fidelización de usuarios y el posicionamiento digital.

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Diseño web

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el punto de vista técnico, el diseño web se relaciona con el uso de lenguajes de marcado como HTML y XML. Según el World Wide Web Consortium (W3C), el diseñador web estructura las páginas mediante estos lenguajes, mientras que el CSS permite definir la presentación visual y configurar el layout. El desarrollo de un sitio web requiere seguir un proceso estructurado en fases sucesivas. Cuando estas etapas se ejecutan adecuadamente, se favorece la coherencia técnica y estratégica del resultado final.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="Contacto inicial")
            p.ms-5.mb-0 Reunión preliminar, definición de objetivos, elaboración del briefing, delimitación del alcance y análisis de benchmarking.
          div(titulo="Planificación")
            p.ms-5.mb-0 Construcción del mapa de navegación, elaboración del wireframe y definición de la experiencia de usuario (UX).
          div(titulo="Concepto")
            p.ms-5.mb-0 Desarrollo del esquema general de contenidos y organización temática.
          div(titulo="Diseño")
            p.ms-5.mb-0 Incorporación de elementos visuales y creación de mockups.
          div(titulo="Desarrollo")
            p.ms-5.mb-0 Definición del CMS, selección de lenguajes de programación, maquetación, optimización de velocidad, compatibilidad móvil, pruebas técnicas e integración de herramientas como Google Analytics y Search Console.
          div(titulo="Lanzamiento")
            p.ms-5.mb-0 Ajustes finales, publicación e indexación en motores de búsqueda.
    
    p Este proceso garantiza que el producto final no solo cumpla criterios estéticos, sino también técnicos y estratégicos.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Arquitectura y diagramación web
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.order-lg-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-5.py-4.mb-3
          p.mb-0 El diseño y la arquitectura de la información de un sitio web constituyen “el resultado de la actividad de clasificar, describir, estructurar y etiquetar los contenidos del sitio” (Leyva, Alarcón, Barrera & Ortegón, 2017). Esta disciplina permite organizar los contenidos de manera lógica y funcional, asegurando que el sitio responda tanto a las necesidades del negocio como a las expectativas del usuario.
        p La arquitectura web implica coordinar la integración de múltiples sistemas tecnológicos, entre ellos servidores, bases de datos, redes, componentes de seguridad y mecanismos de respaldo. El arquitecto web diseña esta estructura para garantizar estabilidad, escalabilidad y eficiencia.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
            h2.text-center Servidores
            p.text-center Gestionan y distribuyen los recursos del sitio.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
            h2.text-center Bases de datos
            p.text-center Almacenan y organizan la información estructurada.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
            h2.text-center Redes
            p.text-center Permiten la comunicación entre sistemas y usuarios.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
            h2.text-center HTML
            p.text-center Lenguaje de marcado que estructura el contenido.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop')
            h2.text-center Componentes de seguridad y respaldo
            p.text-center Protegen la información y garantizan continuidad operativa.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
            h2.text-center Inteligencia de contenidos
            p.text-center Optimiza la organización y recuperación de información.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')
            h2.text-center Interlinking
            p.text-center Define la organización de enlaces internos entre páginas.

        p Por su parte, la diagramación web consiste en la representación estructural de los contenidos y sus relaciones. Históricamente, esta representación se desarrolló mediante organigramas, diagramas de flujo de datos y árboles de decisión.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con la evolución de las interfaces gráficas de usuario, surgieron herramientas como los guiones de navegación y guiones de interacción, que describen el funcionamiento de los productos digitales. Asimismo, durante el proceso de arquitectura de la información se emplean técnicas como el card sorting, que puede generar dendrogramas y gráficos de escalamiento multidimensional, así como dinámicas de brainstorming para representar estructuras mentales de los usuarios.
    
    p.mb-5 En conclusión, la creación web integra diseño, arquitectura, estrategia y tecnología. La adecuada organización de contenidos y sistemas garantiza que el sitio no solo cumpla una función estética, sino que responda de manera eficiente a objetivos empresariales y necesidades de los usuarios.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-lg-2
              figure
                img(src='@/assets/curso/tema2/14.png', alt='')
            .col-lg.order-lg-1
              .p-4
                p.mb-0(data-aos="fade-up") Los autores angloparlantes pioneros en diseño y representación de software dividen los diagramas de arquitectura de información en dos grandes tipos: Blueprints y Wireframes (Morville & Rosenfeld, 1998). En algunos contextos, el término Blueprint se sustituye por Architecture Map, que significa mapa de arquitectura.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto <em>Blueprints</em>

    p Los Blueprints son diagramas que representan las principales áreas de organización y rotulado del producto digital (Rosenfeld & Morville, 1998). Se enfocan en los aspectos estructurales y de funcionamiento general.
    p.mb-5 Generalmente se elaboran mediante textos, cajas y flechas. Su estructura parte de lo general a lo particular y de lo abstracto a lo concreto. Su función consiste en explicitar de manera iterativa las decisiones de diseño, con el propósito de comunicarlas al equipo de desarrollo o al cliente final. Christina Wodtke (2002) conceptualiza el Blueprint como: “Un plano de diseño es justamente una buena idea llevada a la realidad a través de la escritura”.

    .row.justify-content-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.tarjeta.text-center.p-4.h-100
          h5 Enfoque
          p.mb-0 Estructural y organizativo.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.tarjeta.text-center.p-4.h-100
          h5 Representación
          p.mb-0 Textos, cajas y flechas.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.tarjeta.text-center.p-4.h-100
          h5 Nivel de abstracción
          p.mb-0 De lo general a lo particular.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.tarjeta.text-center.p-4.h-100
          h5 Propósito
          p.mb-0 Comunicar decisiones de diseño y organización.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Maquetas y niveles de prototipado

    p.mb-5 En el proceso de diseño web, las maquetas constituyen representaciones progresivas del producto digital. Estas pueden clasificarse según su nivel de fidelidad.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-lg-2
              figure
                img(src='@/assets/curso/tema2/15.png', alt='')
            .col-lg.order-lg-1
              .p-4
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 <b>Baja fidelidad o estáticos</b>. Representaciones iniciales que esquematizan la estructura básica del sitio.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 <b>Fidelidad intermedia</b>. Incorporan diseño gráfico y elementos visuales más desarrollados. 
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 <b>Alta fidelidad o dinámicos</b>. Corresponden al producto casi final o funcional en entorno HTML.
    
    p.mb-5 Dentro de estos niveles se encuentran las siguientes representaciones:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/16.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Wireframe
              p.mb-0 Boceto preliminar del sitio web que puede elaborarse con lápiz y papel o mediante herramientas digitales. Representa, a través de recuadros, líneas y trazos, la estructura del contenido, la interfaz, el sistema de navegación y el funcionamiento general de la página. Se centra en la organización y jerarquía de los elementos, sin incluir aún detalles gráficos definitivos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/17.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Mockup
              p.mb-0 Fase posterior al wireframe. Presenta una versión más detallada del diseño en la que se definen dimensiones, distribución de elementos, tipografía, imágenes, iconos y logotipos. Incorpora componentes gráficos que permiten aproximarse con mayor precisión al resultado final.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/18.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Prototipo dinámico
              p.mb-0 Representación de alta fidelidad correspondiente a la página web en formato HTML con interacción funcional. Permite evaluar el comportamiento, la navegación y la respuesta del sistema antes de su lanzamiento definitivo.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/19.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Frameworks
              p.mb-0 Estructura base utilizada como punto de partida para desarrollar proyectos con objetivos específicos. Funciona como plantilla o esquema conceptual que simplifica el proceso de desarrollo al ofrecer componentes predefinidos adaptables a las necesidades del proyecto.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/20.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Frontend
              p Parte de la aplicación que interactúa directamente con el usuario. Corresponde al lado del cliente y define la presentación de los elementos y el comportamiento de la interacción. Incluye tipografías, colores, adaptación a distintas pantallas mediante diseño adaptable (Responsive Web Design o RWD), efectos de interacción y desplazamientos.

              h4 Lenguajes del frontend
              p.mb-0 HTML5 (estructura del contenido), CSS3 (estilización y diseño visual), JavaScript (interactividad y comportamiento dinámico), jQuery (biblioteca que facilita el uso de JavaScript) y Ajax (comunicación asíncrona con el servidor sin recargar la página).

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Software para hacer diagramas
    
    p.mb-5 El diseño de diagramas puede realizarse mediante plataformas o herramientas digitales especializadas. Para facilitar su comprensión, estas aplicaciones pueden clasificarse en dos grupos: aquellas creadas específicamente para diagramación y aquellas que, aunque fueron concebidas con otros fines, permiten desarrollar diagramas gracias a sus capacidades gráficas avanzadas. A continuación, se presentan programas diseñados originalmente para la elaboración de diagramas:

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="SmartDraw")
            p.ms-5.mb-0 Herramienta especializada en diagramas, organigramas y mapas conceptuales. Ofrece plantillas prediseñadas y automatización de estructuras.
          div(titulo="Microsoft Visio")
            p.ms-5.mb-0 Aplicación profesional para la creación de diagramas técnicos, flujogramas y modelado de procesos empresariales.
          div(titulo="iGrafx FlowCharter")
            p.ms-5.mb-0 Orientado a la elaboración de diagramas de flujo y modelado de procesos organizacionales.
          div(titulo="MindManager")
            p.ms-5.mb-0 Programa enfocado en mapas mentales y organización visual de información compleja.
          div(titulo="FreeMind")
            p.ms-5.mb-0 Aplicación de código abierto para la creación de mapas mentales y esquemas jerárquicos.
          div(titulo="OmniGraffle")
            p.ms-5.mb-0 Programa para macOS especializado en diagramas, esquemas técnicos y estructuras visuales.
    
    p.mb-5 Estas herramientas permiten representar arquitecturas de información, flujos de navegación, estructuras organizativas y procesos técnicos mediante recursos gráficos estructurados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Aplicaciones no especializadas para diagramación
    
    p.mb-5 Además de los programas diseñados específicamente para crear diagramas, existen herramientas de diseño gráfico que, aunque no fueron concebidas exclusivamente para diagramación, permiten desarrollar esquemas estructurales gracias a sus amplias capacidades vectoriales. A continuación, se presentan algunos ejemplos:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/22.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center CorelDRAW
          p.text-center Programa de diseño vectorial que permite crear diagramas, organigramas y estructuras visuales mediante herramientas de dibujo y alineación.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/23.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Adobe FreeHand
          p.text-center Editor vectorial originalmente desarrollado por Macromedia y posteriormente por Adobe. Permitía la elaboración de esquemas y representaciones gráficas estructuradas.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/24.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Adobe Illustrator
          p.text-center Herramienta profesional de diseño vectorial que facilita la construcción de diagramas complejos mediante formas, capas y guías de alineación.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Maquetación web
    
    p.mb-5 La maquetación web se inicia con la construcción del mapa de navegación, donde se planifica el contenido y la organización de cada página y subpágina del sitio. Consiste en definir, organizar y posicionar los contenidos dentro de una estructura que favorezca la lectura, la claridad informativa y una experiencia de usuario coherente. Este proceso requiere conocimientos técnicos en lenguajes de programación y estándares web. Para desarrollar adecuadamente la maquetación, se deben considerar los siguientes aspectos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/25.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Definición de zonas de trabajo
              p.mb-0 Establecer áreas estructurales que soporten el contenido del sitio y faciliten futuras actualizaciones, atendiendo a las necesidades reales de la arquitectura de información.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/26.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Separación entre contenido y presentación
              p.mb-0 Diferenciar los archivos de contenido de los archivos que definen propiedades gráficas (.css). Esta práctica facilita el mantenimiento, optimiza la velocidad de carga y permite personalización.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/27.png', alt='Imagen de acompañamiento')
            .col-lg-5.mb-4.mb-md-0.order-lg-1
              h4 Uso de estándares web
              p.mb-0 Aplicar recomendaciones lideradas por el World Wide Web Consortium (W3C), garantizando accesibilidad universal, robustez técnica y compatibilidad con distintos dispositivos y tecnologías.
    
    p Asimismo, en la maquetación web es fundamental considerar la interfaz gráfica de usuario o GUI (Graphic User Interface), entendida como el entorno visual mediante el cual el usuario interactúa con el sistema. La GUI integra imágenes, iconos, botones y demás objetos gráficos que permiten acceder a funcionalidades y comprender la información presentada en pantalla.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Lenguajes de programación para frontend

    p.mb-5 Para introducir los lenguajes de programación más utilizados en el diseño web, es necesario definir primero el frontend como parte fundamental del desarrollo web.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Frontend
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El frontend hace referencia a la capa de presentación de las aplicaciones, ya que define cómo se presentan los elementos y cómo se comporta la interacción con el usuario. Corresponde a la parte de una aplicación que interactúa directamente con el usuario; es decir, todo lo que aparece en pantalla al acceder a un sitio web o aplicación: tipografías, colores, botones, menús, adaptación a distintas pantallas mediante RWD (Responsive Web Design), efectos de interacción con ratón y teclado, desplazamientos y demás elementos que configuran la experiencia del usuario.
    
    p.mb-5 El frontend no gestiona directamente bases de datos ni servidores (funciones propias del back-end), pero sí aborda aspectos como la usabilidad, los efectos visuales y la velocidad de carga. Un desarrollador frontend debe dominar, al menos, los siguientes lenguajes y tecnologías:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
          .col-lg-7
            SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg-color-white.p-4
                .row.justify-content-center.mb-5
                  .col-6
                    img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop')
                h2.text-center HTML5
                p.text-center Estructura y organización del contenido.

              .tarjeta.bg-color-white.p-4
                .row.justify-content-center.mb-5
                  .col-6
                    img(src='@/assets/curso/tema2/31.svg' alt='AvatarTop')
                h2.text-center CSS3
                p.text-center Definición de estilos y presentación visual.

              .tarjeta.bg-color-white.p-4
                .row.justify-content-center.mb-5
                  .col-6
                    img(src='@/assets/curso/tema2/32.svg' alt='AvatarTop')
                h2.text-center JavaScript
                p.text-center Interactividad y comportamiento dinámico.
              
              .tarjeta.bg-color-white.p-4
                .row.justify-content-center.mb-5
                  .col-6
                    img(src='@/assets/curso/tema2/33.png' alt='AvatarTop')
                h2.text-center jQuery
                p.text-center Biblioteca que simplifica el uso de JavaScript.

              .tarjeta.bg-color-white.p-4
                .row.justify-content-center.mb-5
                  .col-6
                    img(src='@/assets/curso/tema2/34.png' alt='AvatarTop')
                h2.text-center Ajax
                p.text-center Comunicación asíncrónica con el servidor sin recargar la página.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto HTML

    p.mb-5 HTML corresponde a las siglas de Hyper Text Markup Language (Lenguaje de Marcas de Hipertexto). Es el principal lenguaje de marcación utilizado para el desarrollo de páginas web. Se trata de un lenguaje que utilizan las aplicaciones para representar documentos digitales, como páginas web, que pueden transmitirse a través de internet. Los navegadores procesan e interpretan los documentos descritos en HTML mediante analizadores específicos.

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/35.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    p(data-aos="fade-up") El lenguaje HTML se compone de etiquetas, delimitadas por los símbolos < y >, con la siguiente estructura:
                    .bg-color-black.p-3.tarjeta.mb-2.d-inline-block
                      span.bg-color-13 &lt;etiqueta&gt;
                      span.texto-blanco contenido
                      span.bg-color-13 &lt;/etiqueta&gt;
                    p Estas etiquetas describen los elementos que se desean estructurar dentro de la página. Por ejemplo:
                    .bg-color-black.p-3.tarjeta.mb-2
                      span.bg-color-13 &lt;title&gt;
                      span.texto-blanco Internet básico, email, descargas y compras en línea
                      span.bg-color-13 &lt;/title&gt;
                    p.mb-0 En este caso, la etiqueta &lt;title&gt; indica el título del documento web.

        p.mb-5 HTML5 también se emplea como término que agrupa tecnologías modernas de desarrollo web: HTML5, CSS3 y nuevas capacidades de JavaScript. HTML4 y HTML5 mantienen compatibilidad estructural.
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.col-xl-2.mb-3.mb-xl-0
            .bg-color-12.h-100.text-center
              .bg-color-5.p-3.rounded-top.header-container
                h4.mb-0 Elemento raíz
              p.mb-0.p-4 Contiene todo el documento HTML.

          .col-lg-4.col-xl-2.mb-3.mb-xl-0
            .bg-color-12.h-100.text-center
              .bg-color-5.p-3.rounded-top.header-container
                h4.mb-0 Metadatos del documento
              p.mb-0.p-4 Define información sobre el documento (codificación, título, enlaces).

          .col-lg-4.col-xl-2.mb-3.mb-xl-0
            .bg-color-12.h-100.text-center
              .bg-color-5.p-3.rounded-top.header-container
                h4.mb-0 Secciones
              p.mb-0.p-4 Organiza el contenido en bloques estructurales.
          
          .col-lg-4.col-xl-2.mb-3.mb-xl-0
            .bg-color-12.h-100.text-center
              .bg-color-5.p-3.rounded-top.header-container
                h4.mb-0 Agrupación de contenido
              p.mb-0.p-4 Permite organizar párrafos, listas y contenedores.

          .col-lg-4.col-xl-2.mb-3.mb-xl-0
            .bg-color-12.h-100.text-center
              .bg-color-5.p-3.rounded-top.header-container
                h4.mb-0 Semántica a nivel de texto
              p.mb-0.p-4 Aporta significado estructural al contenido textual.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto CSS
        
    p.mb-5 CSS corresponde a Cascading Style Sheets (Hojas de Estilo en Cascada). Su función es controlar la apariencia visual del sitio web y permitir una presentación coherente y diferenciada. Las hojas de estilo se superponen siguiendo un modelo jerárquico, aplicando reglas en función de factores como el tamaño y la resolución de la pantalla del dispositivo. Desde su aparición en 1993, HTML ha evolucionado hasta consolidarse como estándar en su versión HTML5. Esta evolución ha sido posible gracias a la integración con CSS, que permite incorporar funcionalidades avanzadas como:

    .row.justify-content-center
      .col-lg-8
        .bg-color-2.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.order-lg-2
              figure
                img(src='@/assets/curso/tema2/36.svg', alt='')
            .col-lg.order-lg-1
              .p-4
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 Audio
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 Video
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 Gráficos SVG
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color-11
                    p.mb-0 Gráficos SVG
    
    p El código CSS organiza la presentación y define cómo se visualizan los elementos de un documento HTML, separando estructura y diseño para facilitar mantenimiento, optimización y coherencia visual.

    separador
    
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Estructuración técnica de un sitio web
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema2/37.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5
              p.mb-0 La estructuración técnica de un sitio web constituye un proceso estratégico que integra aspectos conceptuales, temáticos y técnicos. No se trata únicamente de definir una arquitectura organizada, sino de planificar cómo se presentará la temática, cómo se distribuirán los contenidos y de qué manera se garantizará una experiencia de usuario coherente. Sin una adecuada planificación conceptual resulta imposible consolidar posteriormente una estructura técnica eficiente. 
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Definición clara de la temática y organización del contenido
        
        p.mb-5 Antes de diseñar la estructura técnica, es necesario delimitar la temática central del sitio y organizar los contenidos en categorías y subcategorías coherentes. Esta organización permite establecer jerarquías claras y facilita tanto la navegación del usuario como la indexación por parte de los motores de búsqueda. Una estructura conceptual sólida es la base sobre la cual se construye la arquitectura técnica.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Construcción de URL amigables para SEO
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema2/38.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-12.p-5.mb-3
              p.mb-0 La creación de un sitio web implica la generación de diferentes URL o direcciones internas que parten de un dominio común. Estas direcciones deben construirse con palabras clave indicativas que describan el contenido de cada página.
            p Las URL amigables para SEO (Search Engine Optimization) permiten que los motores de búsqueda comprendan mejor la estructura del sitio. Lo primero que analiza Google al rastrear una página es su URL; por ello, esta debe ser clara, descriptiva y coherente con la temática del contenido.
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/39.svg', alt='Texto que describa la imagen')

          h3.mb-4.text-center Claridad semántica
          p.text-center Incluir palabras clave relacionadas con el contenido.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/40.svg', alt='Texto que describa la imagen')

          h3.mb-4.text-center Estructura jerárquica
          p.text-center Reflejar la organización de categorías y subcategorías.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-12.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema2/41.svg', alt='Texto que describa la imagen')

          h3.mb-4.text-center Simplicidad
          p.text-center Evitar caracteres innecesarios o estructuras complejas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Interlinking y mejora de la navegabilidad
    
    p.mb-5 La estructura técnica también exige conectar todas las páginas entre sí para mejorar la navegabilidad y la usabilidad. No se debe depender únicamente del menú principal; es necesario incorporar enlaces internos estratégicos dentro del contenido. Estos enlaces internos cumplen dos funciones principales:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.bg-color-7.p-5.text-white
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema2/42.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Orientación al usuario
        p Facilitan el recorrido dentro del sitio y apoyan la toma de decisiones mediante llamadas a la acción.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-8.p-5
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema2/43.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Rastreo por motores de búsqueda
        p Permiten que Google indexe las páginas de manera más eficiente, mejorando el posicionamiento.

    p Una estructura bien conectada optimiza la experiencia del usuario y facilita el trabajo de indexación de los motores de búsqueda. Por ello, la usabilidad y la estructura técnica se encuentran estrechamente relacionadas dentro del diseño web.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de medios y plataformas digitales
    
    p.mb-5 El desarrollo tecnológico ha ampliado de manera significativa los conceptos, herramientas y medios asociados a internet. Inicialmente, los sitios web eran accesibles únicamente desde computadores de escritorio; posteriormente surgieron los computadores portátiles y, finalmente, los dispositivos móviles como smartphones (teléfonos inteligentes) y tablets.

    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-8
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-lg-2
                  figure
                    img(src='@/assets/curso/tema2/44.svg', alt='')
                .col-lg.order-lg-1
                  .p-3
                    p.mb-0 Este proceso de transformación dio origen al concepto de diseño web responsive o adaptativo, técnica que busca garantizar la correcta adaptación de una misma página en distintos dispositivos, desde ordenadores de escritorio hasta móviles y tablets.
        p.mb-5 El diseño responsive no implica que la página conserve exactamente la misma disposición visual en todos los dispositivos, sino que sus elementos se reorganizan y redimensionan para ajustarse al ancho de pantalla disponible, asegurando coherencia funcional y experiencia de usuario adecuada. Se caracteriza por:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema2/45.png', alt='Texto que describa la imagen')

              h5.text-center Uso de layouts fluidos.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema2/46.png', alt='Texto que describa la imagen')

              h5.text-center Imágenes adaptables.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-12.h-100.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema2/47.png', alt='Texto que describa la imagen')

              h5.text-center Implementación de media queries en CSS3.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto La web responsive
        
        p.mb-5 Además de la correcta adaptación visual y navegacional, los sitios web deben responder a exigencias externas relacionadas con servidores, navegadores y motores de búsqueda.

        .row.justify-content-center
          .col-lg-10.col-xl-8
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema2/48.svg', alt='')
                .col-lg
                  .p-3
                    p.mb-0 En este contexto, Google ha actualizado sus criterios de clasificación para priorizar sitios optimizados para dispositivos móviles. Si una página no es responsive, puede aparecer en posiciones inferiores en las SERP (Search Engine Results Page) o incluso quedar excluida de resultados móviles.
    
    p.mb-5 La expansión del uso de teléfonos inteligentes transformó la manera en que los usuarios acceden a internet. Actualmente, la conexión a la red se produce en cualquier momento y lugar, lo que amplía el alcance potencial de los sitios web optimizados para móviles. Según Shum (2021), “En la actualidad el 70 % del tráfico de internet proviene de teléfonos móviles”.

     .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Ventajas de tener un sitio web responsive
    
    p.mb-5 La incorporación del diseño responsive impacta directamente en las estrategias de marketing digital y en los resultados obtenidos.

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/49.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="Mejor SEO")
            p.ms-5.mb-0 Utiliza la misma URL y estructura HTML para todos los dispositivos, facilitando la indexación por parte de los motores de búsqueda y mejorando el posicionamiento orgánico.
          div(titulo="No requiere doble diseño")
            p.ms-5.mb-0 No es necesario desarrollar versiones independientes para escritorio y móvil, lo que optimiza tiempo y recursos.
          div(titulo="Administración simplificada")
            p.ms-5.mb-0 Las actualizaciones se reflejan en todos los dispositivos, reduciendo costos operativos y mantenimiento.
          div(titulo="Mayor alcance de audiencia")
            p.ms-5.mb-0 Permite llegar a usuarios que acceden desde múltiples dispositivos, ampliando la cobertura digital.
    
    p En conclusión, el diseño web responsive constituye una estrategia técnica y comunicativa indispensable en el entorno digital actual. Garantiza adaptabilidad, mejora el posicionamiento en buscadores y optimiza la experiencia del usuario en un contexto donde el acceso móvil predomina.

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
