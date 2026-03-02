<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Montaje audiovisual
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p El concepto de composición gráfica se refiere a la organización de elementos dentro del espacio visual con el propósito de construir una imagen que transmita una idea de manera sencilla y directa a un público objetivo. Esta premisa mantiene su validez en la creación y edición de imágenes fijas; sin embargo, adquiere un sentido distinto cuando se trata de imágenes en movimiento, donde intervienen factores narrativos y temporales.
            .bg-color-1.px-5.py-4
              p.mb-0 En el ámbito audiovisual, suele emplearse indistintamente los términos edición y montaje. No obstante, desde la teoría del lenguaje audiovisual se establece una diferencia conceptual relevante. La palabra montage, de origen francés, alude a montar o superponer elementos; sin embargo, el montaje se vincula con el proceso narrativo de articulación de significados, mientras que la edición corresponde principalmente a un procedimiento técnico.

        p.mb-5 El montaje audiovisual constituye, por tanto, la fase técnica y narrativa final del producto audiovisual. Aunque se concreta en la etapa de posproducción, su sentido queda previamente definido desde la elaboración del guion, ya que responde a las intenciones del emisor y a las capacidades interpretativas del receptor.

        .row.justify-content-center
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/2.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") En el tratamiento de imágenes fijas, lo habitual es hablar de edición de imágenes; en cambio, el montaje fotográfico o fotomontaje se entiende como un resultado derivado del proceso de edición. Por ello, resulta pertinente considerar ambas definiciones para comprender sus alcances y diferencias.
        
        p.mb-5 A continuación, se presentan las definiciones fundamentales que orientan este apartado:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/3.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Montaje
              p.mb-0 Conjunto de relaciones espacio-temporales creadas mediante la combinación y duración de fragmentos, que permiten articular un mensaje audiovisual con fluidez, ritmo, coherencia y expresión propia, en función de las intenciones del emisor y las expectativas del receptor.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/4.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Edición
              p.mb-0 Proceso técnico que permite manipular la imagen capturada o creada para mejorarla, adaptarla o ajustarla según necesidades específicas de producción.
    
    p.mb-5 En síntesis, mientras la edición se centra en la manipulación técnica del material audiovisual, el montaje implica una construcción narrativa que organiza los fragmentos en una estructura significativa. Ambos procesos son complementarios y esenciales en la producción audiovisual.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Edición de imagen
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-4.px-5.py-4.mb-3
              p.mb-0 Cuando se aborda la edición digital de imágenes, intervienen tres componentes fundamentales: una imagen, un terminal computarizado (equipo de escritorio, portátil, tablet, celular u otro dispositivo móvil) y un software especializado. Este proceso permite transformar, optimizar o adaptar la imagen según las necesidades comunicativas, técnicas o estéticas del proyecto.
            p Antes de profundizar en el proceso de edición, es necesario comprender qué es una imagen digital, cuáles son sus características y qué tipos existen, pues de esta clasificación dependerá su tratamiento técnico. Entre los elementos vinculados al proceso de captura y digitalización de la imagen se encuentran:

            .row.justify-content-center.mb-3
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Imagen
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Objetivo
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Filtro infrarrojo
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Filtro RGB
            
            .row.justify-content-center
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Matriz CCD
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Conversor ADC
              .col-lg-3.text-center.mb-3.mb-lg-0
                .bg-color-5.p-4.h-100
                  h5.mb-0 Dígitos del sistema binario

        p.mb-5 Estos componentes participan en la conversión de la información lumínica en datos numéricos que posteriormente pueden ser procesados digitalmente.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto La imagen digital
        
        p Según la <b>Real Academia Española</b> (s. f.), una imagen es toda forma o figura percibida por el sentido de la vista.
        p.mb-5 Desde el ámbito tecnológico, una <b>imagen digital o gráfico digital</b> se define como una representación bidimensional construida a partir de una matriz numérica, generalmente expresada en sistema binario (unos y ceros). Esta información se almacena en la memoria de un sistema informático y posteriormente es interpretada por el dispositivo para su representación en pantalla o su impresión mediante periféricos de salida.

        div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
          h4.mb-0 Tipos de imágenes digitales
        
        p.mb-5 Por su estructura, las imágenes digitales se clasifican principalmente en dos tipos: 
    
    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.bg-color-7.p-5.text-white
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Imagen en mapa de bits (<em>raster</em>)
        p Representa una rejilla rectangular de píxeles o puntos de color. Se obtiene mediante dispositivos como cámaras digitales o escáneres. Cada píxel (<em>picture element</em>) constituye la unidad mínima de la imagen digital. Su calidad depende de la resolución.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-8.p-5
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen')
          
        h2.mb-5 Imagen vectorial
        p Está compuesta por fórmulas matemáticas que definen líneas, curvas y formas geométricas. Puede ampliarse sin pérdida de calidad. Es frecuente en logotipos, tipografías y gráficos técnicos.

    p.mb-5 De acuerdo con Ordóñez (2005), una imagen en mapa de bits es una estructura de datos que representa una rejilla rectangular de píxeles. Cada píxel es una unidad mínima sin dimensión física concreta y constituye la base de fotografías, fotogramas de video y gráficos digitales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Elementos de la imagen digital
    
    p.mb-5 Una vez comprendidos los tipos de imagen, es pertinente abordar los elementos que determinan su construcción y posterior edición.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Formatos
    
    p Los formatos corresponden a la forma codificada que adquiere la imagen al almacenarse digitalmente. Definen la manera en que se guardan los píxeles y determinan aspectos como calidad, peso del archivo y compatibilidad.

    p.mb-5 Antes de la tabla, se sintetizan algunos formatos frecuentes para imágenes en mapa de bits:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/8.svg', alt='Texto que describa la imagen')

          h3.mb-4.text-center BMP
          p.text-center Desarrollado para sistemas operativos Microsoft. Soporta hasta 24 <em>bits</em> por píxel. Genera archivos de gran tamaño, por lo que no es adecuado para páginas web.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-9.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/9.svg', alt='Texto que describa la imagen')

          h3.mb-4.text-center TIFF
          p.text-center Utilizado para impresión y alta resolución. Soporta modelo de color CMYK y hasta 16 bits de profundidad de color. Prioriza calidad sobre tamaño. Es empleado por editoriales y medios impresos.
    
    p.mb-5 En consecuencia, la elección del formato depende del uso final del archivo, la calidad requerida y el medio de distribución.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Resolución de la imagen
    
    p.mb-5 La resolución se relaciona con el tamaño y la densidad de píxeles que conforman la imagen. Este concepto involucra tres dimensiones:
        
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Tamaño en píxeles
          p.text-center Número de filas y columnas que conforman la imagen. Determina el total de píxeles.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Tamaño informático
          p.text-center Expresado en <em>bytes, kilobytes</em> o <em>megabytes</em>. Depende del número de píxeles y de la cantidad de información asignada a cada uno.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Tamaño de salida
          p.text-center Dimensión física que ocupará la imagen al imprimirse. El editor define cuántos píxeles se reproducen por centímetro o pulgada.
          
    p.mb-5 Según Fernández (2005), la resolución de una imagen digital se expresa multiplicando su anchura por su altura en píxeles. Por ejemplo, una imagen de 1200 × 1200 píxeles equivale a 1.440.000 píxeles, es decir, aproximadamente 1,4 megapíxeles (Mp). Conviene recordar que 1 megapíxel equivale a 1024 × 1024 píxeles.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Modos de color
    
    p.mb-5 Además del formato y la resolución, el color constituye un elemento esencial en la imagen digital. Técnicamente, se relaciona con la profundidad de color, es decir, la cantidad de bits necesarios para representar el color de cada píxel. En términos generales, se asocia al modelo de color utilizado. A continuación, se sintetizan los principales modos de color empleados en multimedia:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/13.png' alt='AvatarTop')
            h2.text-center RGB (<em>Red, Green, Blue</em>)
            p.text-center Modelo aditivo utilizado en pantallas y dispositivos electrónicos. Combina luz roja, verde y azul.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/14.png' alt='AvatarTop')
            h2.text-center CMYK (<em>Cian, Magenta, Yellow, Black</em>)
            p.text-center Modelo sustractivo empleado en impresión.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/15.png' alt='AvatarTop')
            h2.text-center HSB (<em>Hue, Saturation, Brightness</em>)
            p.text-center Define el color según tono, saturación y brillo.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/16.png' alt='AvatarTop')
            h2.text-center Escala de grises
            p.text-center Imagen monocromática con hasta 256 niveles de negro.

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/17.png' alt='AvatarTop')
            h2.text-center <em>Lab</em>
            p.text-center Compuesto por un canal de luminosidad (L) y dos canales cromáticos: A (verde–rojo) y B (azul–amarillo) (M., 2014).

          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/18.png' alt='AvatarTop')
            h2.text-center Mapa de <em>bits</em> (modo monocromático)
            p.text-center Utiliza únicamente blanco o negro para representar los píxeles.
          
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/19.png' alt='AvatarTop')
            h2.text-center Color indexado
            p.text-center Limita la imagen a un máximo de 256 colores (M., 2014).

        p.mb-5 La edición de imagen implica comprender la naturaleza digital del archivo, su estructura, resolución, formato y modelo de color. Estos elementos determinan tanto la calidad final como las posibilidades de manipulación técnica en entornos digitales e impresos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Edición de la imagen
    
    p.mb-5 La edición de la imagen se define como:

    .row.justify-content-center
      .col-lg-10
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/20.png', alt='')
            .col-lg

                .bloque-texto-c.p-4
                  i.fas.fa-quote-right
                  p.mb-2 Es la manipulación, a través de programas de edición gráfica, de imágenes capturadas o previamente diseñadas, con la intención de reforzar conceptos o mensajes mediante la modificación del color, formas, composición, contrastes, estilo, etcétera. La edición para hacer collages o mejorar la calidad de la imagen es también un recurso de gran valor en publicidad; gracias a ello, se pueden exagerar o disminuir rasgos o elementos de todo tipo
                  span <b>(Viveros, 2005).</b>
    
    p.mb-5 El tratamiento se realiza mediante un editor de imágenes, es decir, un software especializado que proporciona herramientas, efectos, opciones de ajuste y posibilidades de modificación del formato al momento de guardar el archivo.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Aspectos de la edición de imágenes
    
    p.mb-5 La edición digital integra dimensiones creativas y técnicas que se complementan en la construcción del mensaje visual.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.bg-color-7.p-5.text-white
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Aspectos creativos
        p Se relacionan con la intención conceptual y semiótica del producto. Determinan el sentido-significación que se desea transmitir, la función de la imagen (principal o complementaria), su carácter ilustrativo o descriptivo y el estilo (realismo, figuración, entre otros).

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-8.p-5
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/22.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Aspectos técnicos
        p Comprenden el manejo de herramientas del software, ajustes de color, iluminación, contraste, composición, formato y exportación del archivo final.
    
    p.mb-5 Según Viveros (2005), lo conceptual incide directamente en la significación del producto. Estos aspectos fueron desarrollados en el Componente Formativo Diseño para contenidos digitales, en el apartado de Diseño, y se aplican tanto en la creación como en la captura o edición de imágenes digitales. Dentro de este marco se destacan dos procesos fundamentales: la composición digital y el retoque digital.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/23.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Composición digital
              p.mb-0 También denominada composición de efectos visuales, consiste en la creación de imágenes digitales mediante la manipulación y combinación de elementos provenientes de diferentes fuentes o herramientas digitales. Su objetivo es generar piezas homogéneas que conserven unidad formal y conceptual, independientemente de que los elementos integrados sean reales o construidos digitalmente.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/24.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Retoque digital
              p.mb-0 Aunque implica conocimiento técnico de las herramientas del software, el retoque digital posee igualmente una dimensión creativa. Permite modificar escenarios, iluminación, color y percepción para construir una nueva imagen o reforzar significados específicos. De esta manera, el retoque no solo optimiza la calidad técnica, sino que también potencia la intención comunicativa.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Herramientas para la edición
    
    p.mb-5 Las herramientas de edición corresponden a los diferentes programas de tratamiento de imagen disponibles en el mercado. Estas aplicaciones se clasifican según el entorno en el que operan: computador, dispositivos móviles o plataformas en línea.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/25.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Para computador
          p.text-center Mayor cantidad de funcionalidades y control avanzado. Requieren instalación y ocupan más espacio en disco. Exigen conocimientos técnicos y experiencia en diseño.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/26.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Para celulares
          p.text-center Diseñadas para sistemas operativos como Android e iOS. Ocupan menos memoria y permiten edición inmediata, aunque con funciones más limitadas.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-2.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/27.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Editores en línea
          p.text-center Funcionan desde el navegador sin descarga previa. Muchos ofrecen versiones gratuitas con funciones restringidas.
          
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 A continuación, se relacionan algunos ejemplos representativos:

        .bg-color-10.p-4.mb-5
          p.text-center Editores para computador
          .row.justify-content-center.mb-5
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/28.png', alt='Adobe Photoshop')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/29.png', alt='CorelDRAW')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/30.png', alt='GIMP')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/31.png', alt='Paint.NET')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/32.png', alt='Adobe Illustrator')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/33.png', alt='Adobe InDesign')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/34.png', alt='Inkscape')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/35.png', alt='Lightroom')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/36.png', alt='Gravit Designer')
          p.text-center Editores para celulares
          .row.justify-content-center.mb-5
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/37.png', alt='Photoshop Express')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/38.png', alt='VSCO')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/39.png', alt='Canva')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/40.png', alt='Snapseed')
          p.text-center Editores en línea
          .row.justify-content-center.mb-5
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/41.png', alt='Canva')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/42.png', alt='PicMonkey')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/43.png', alt='Pixlr')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/44.png', alt='Fotor')
            .col-auto.mb-3.mb-xl-0
              figure
                img(src='@/assets/curso/tema1/45.png', alt='BeFunky')

        div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
          h4.mb-0 Herramientas gratuitas y de pago
    
    p.mb-5 Finalmente, las aplicaciones pueden clasificarse según su modelo de licencia.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-xl-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/46.png", data-aos="zoom-in")
      .col-lg-7.col-xl-6.order-lg-1
        .row.justify-content-center
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.p-4
              h4 Gratuitos
              ul.lista-ul--color.ms-2.mb-0
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | GIMP
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Krita
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Paint.NET
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Canva
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Pixlr
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Photoscape X
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.p-4
              h4 De pago
              ul.lista-ul--color.ms-2.mb-0
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Adobe Photoshop
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | PaintShop Pro
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Pixelmator Pro
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Lightroom
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | PhotoDirector
                li.mb-1.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | PicMonkey

    p En conclusión, la edición de imágenes articula intención conceptual, creatividad y dominio técnico. La elección del editor y del tipo de licencia dependerá del objetivo comunicativo, la complejidad del proyecto y el contexto de uso, ya sea digital o impreso.

    separador
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Edición de audio
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/tema1/47.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p La edición de audio se refiere a la posibilidad de manipular diferentes elementos sonoros mediante el uso de un terminal computarizado y un software específico. Su propósito es integrar, modificar o generar sonidos que respondan a una necesidad comunicativa concreta, ya sea en producciones audiovisuales, contenidos multimedia o proyectos digitales.
            .bg-color-1.px-5.py-4
              p.mb-0 El sonido digital posee condiciones y parámetros característicos que influyen en su tratamiento técnico. Entre ellos se destacan su dinamismo, su capacidad de interactividad, su condición ubicua, al poder reproducirse en diversos dispositivos y contextos, y su naturaleza versátil, que facilita su adaptación a múltiples entornos tecnológicos.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Formatos para la edición de audio
        
        p.mb-5 Para comprender la edición de recursos sonoros, es necesario identificar los principales formatos de audio digital y su finalidad. Según el uso y la utilidad, estos formatos se clasifican en dos grandes categorías: almacenamiento y reproducción local, y transmisión en línea.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Formatos de almacenamiento y reproducción local
        
        p.mb-5 En esta categoría se agrupan los formatos diseñados para guardar archivos de audio en discos duros, memorias USB o dispositivos portátiles, priorizando compatibilidad y calidad según el propósito de uso.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/48.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="MP3")
            p.ms-5.mb-0 Formato comprimido con pérdida y amplia compatibilidad. Reduce significativamente el tamaño del archivo mediante la eliminación de frecuencias menos perceptibles para el oído humano.
          div(titulo="WAV")
            p.ms-5.mb-0 Formato sin compresión desarrollado por Microsoft e IBM. Ofrece alta calidad de sonido, aunque genera archivos de mayor tamaño.
          div(titulo="AIFF")
            p.ms-5.mb-0 Audio <em>Interchange File Format</em>, desarrollado por Apple. Similar a WAV en calidad y peso. Actualmente ambos formatos son compatibles entre sistemas.
          div(titulo="WMA")
            p.ms-5.mb-0 <em>Windows Media Audio</em>, creado por Microsoft. Formato comprimido con pérdida que ocupa menos espacio que MP3, aunque implica reducción de calidad.
          div(titulo="AAC")
            p.ms-5.mb-0 <em>Advanced Audio Coding</em>. Formato comprimido con pérdida utilizado por Apple en iTunes y dispositivos iPod. Considerado una evolución del MP3 (<em>Truesdell</em>, 2007, p. 516).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Formatos para transmisión en líneal
    
    p.mb-5 Esta categoría incluye los formatos optimizados para servicios de streaming y distribución digital, donde resulta fundamental equilibrar calidad sonora y tamaño del archivo.

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/49.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="OGG")
            p.ms-5.mb-0 Archivo comprimido adecuado para transmisión por redes inalámbricas. Puede contener audio y video. No es compatible con dispositivos Apple o sistema iOS.
          div(titulo="FLAC")
            p.ms-5.mb-0 <em>Free Lossless Audio Codec</em>. Formato libre y abierto que reduce el tamaño del archivo sin pérdida de calidad. Se considera competencia directa de WAV.
          div(titulo="ALAC")
            p.ms-5.mb-0 <em>Apple Lossless Audio Codec</em>. Alternativa de Apple al formato FLAC. Utilizado en transmisiones de Apple Music.
    
    p.mb-5 En conclusión, la selección del formato de audio depende del contexto de uso, el medio de distribución y el equilibrio requerido entre calidad sonora y tamaño del archivo. Los formatos con pérdida permiten mayor compresión y menor peso, mientras que los formatos sin pérdida priorizan fidelidad de sonido a costa de mayor capacidad de almacenamiento.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Programas para edición de audio <em>offline</em>
    
    p.mb-5 La edición de audio <em>offline</em> se realiza mediante programas instalados directamente en el computador o dispositivo, lo que permite trabajar sin conexión a internet y acceder a funciones avanzadas de grabación, mezcla y exportación de archivos sonoros. A continuación, se presentan algunos de los programas más utilizados, organizados según su compatibilidad con sistemas operativos.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Programas para Windows
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p.mb-5 En esta categoría se agrupan aplicaciones diseñadas específicamente para el sistema operativo Windows, con funciones que van desde tareas básicas hasta procesos avanzados de edición.

        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/50.png' alt='AvatarTop')
            h2.text-center Audacity
            p.text-center Programa gratuito y de código abierto que permite grabar y editar sonido. Es ampliamente utilizado en entornos educativos y profesionales.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/51.png' alt='AvatarTop')
            h2.text-center Power Sound Editor
            p.text-center Permite realizar tareas avanzadas de edición, grabación y mezcla de archivos de audio.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/52.png' alt='AvatarTop')
            h2.text-center mp3DirectCut
            p.text-center Facilita la edición rápida de archivos MP3 sin necesidad de descomprimirlos previamente.
          
          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/53.png' alt='AvatarTop')
            h2.text-center Music Editor Free
            p.text-center Software para grabar y editar música. Permite cortar, copiar, pegar y aplicar efectos a pistas de audio.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/54.png' alt='AvatarTop')
            h2.text-center Wavosaur
            p.text-center Compatible con Windows 98, XP y Vista. Permite grabar y editar archivos WAV o MP3, con funciones básicas de edición.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/55.png' alt='AvatarTop')
            h2.text-center Expstudio
            p.text-center Ofrece múltiples funciones de edición. La versión gratuita solo permite guardar archivos finales en formato WAV o MP2.
          
          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/56.png' alt='AvatarTop')
            h2.text-center DJ Audio Editor
            p.text-center Limita la imagen a un máximo de 256 colores (M., 2014).

        div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
          h4.mb-0 Programas para Windows y Mac OS X
        
        p.mb-5 Estos programas amplían su compatibilidad a sistemas operativos de Apple, lo que facilita el trabajo en entornos multiplataforma.

        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/57.png' alt='AvatarTop')
            h2.text-center WavePad
            p.text-center Permite grabar y editar música, voz y otros archivos de audio. Incluye funciones básicas de edición. Disponible también para dispositivos móviles.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/58.png' alt='AvatarTop')
            h2.text-center Let's Make Music
            p.text-center Orientado a la producción musical. Permite crear melodías, sintetizar y mezclar sonidos, y organizar composiciones.

          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/59.png' alt='AvatarTop')
            h2.text-center WaveSurfer
            p.text-center Software de código abierto diseñado tanto para usuarios avanzados como principiantes.
          
          .tarjeta.bg-color-12.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src='@/assets/curso/tema1/60.png' alt='AvatarTop')
            h2.text-center Adobe Audition
            p.text-center Aplicación profesional desarrollada por Adobe Systems Incorporated. Ofrece un entorno multipista para edición, mezcla y producción de audio digital.

    p En síntesis, los programas de edición de audio offline ofrecen distintas funcionalidades según el nivel de complejidad requerido. Algunas herramientas se orientan a tareas básicas como cortar o unir fragmentos, mientras que otras permiten procesos avanzados de mezcla multipista, incorporación de efectos y producción musical completa. La elección del programa dependerá del sistema operativo disponible, el nivel de experiencia del usuario y el objetivo del proyecto sonoro.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Edición de video

    p.mb-5 La edición de video requiere de la manipulación de varios elementos, en donde la unión de varias imágenes y la adición de efectos digitales, como música, efectos y textos, posibilitan tener un resultado de un producto listo, pero que requiere de una serie de conocimientos que se amplían a continuación:

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/61.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La imagen en movimiento comprende aquellas representaciones que se reproducen mediante medios audiovisuales y que desarrollan secuencias narrativas, como el cine, la animación, el video o el formato GIF.

    p.mb-5 El movimiento se produce cuando una sucesión de imágenes estáticas, denominadas fotogramas, se proyecta a gran velocidad. Para que una imagen fija se perciba en movimiento se requiere un mínimo de 16 imágenes por segundo; sin embargo, para generar una sensación de realismo se emplean 24 fotogramas por segundo en el cine y 25 en televisión y video.

    div.bg-color-6.p-3.d-inline-flex.tarjeta.mb-3
      h4.mb-0 Aspectos de la edición de video

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.order-lg-2
        figure
          img(src="@/assets/curso/tema1/62.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-10.px-5.py-4
          p.mb-0 La edición de video integra una dimensión técnica y una dimensión narrativa. En este contexto, la narrativa audiovisual organiza las imágenes en el espacio y el tiempo para construir sentido. Las imágenes en movimiento, al igual que las imágenes fijas, se desarrollan en dos dimensiones espaciales mediante encuadres o planos y puntos de vista o ángulos de visión. No obstante, incorporan además la dimensión temporal, que permite estructurar acciones, ritmos y transiciones. A continuación, se presentan los principales elementos narrativos de un producto audiovisual:

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/63.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="Fotograma")
            p.ms-5.mb-0 Unidad mínima de la imagen en movimiento. Es una imagen fija que, al sucederse con otras, produce la sensación de movimiento. Equivale a una fotografía individual dentro de la secuencia.
          div(titulo="Secuencia")
            p.ms-5.mb-0 Desarrollo completo de una acción con continuidad argumental, aunque pueda ocurrir en distintos lugares y momentos. Su duración depende de su relevancia dentro del guion. Está compuesta por escenas y estas, a su vez, por planos. Incluye el plano secuencia, que se registra sin cortes y dura lo mismo que la acción narrada.
          div(titulo="Escena")
            p.ms-5.mb-0 Representa una acción que ocurre en un mismo tiempo y lugar. El paso entre escenas se realiza mediante cortes, fundidos a negro o fundidos encadenados. Está compuesta por tomas.
          div(titulo="Toma")
            p.ms-5.mb-0 Registro obtenido durante la grabación de una acción o escena. Es habitual realizar varias tomas con distintos ángulos o puntos de vista para seleccionar posteriormente la más adecuada.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Planos en movimiento
    
    p.mb-5 Los <b>planos en movimiento</b> surgen cuando la cámara se desplaza para seguir la acción o explorar el espacio. Estos movimientos aportan dinamismo y enriquecen la narrativa audiovisual.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/64.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Travelling
          p.text-center Movimiento de cámara que acompaña al personaje o elemento durante su desplazamiento de un lugar a otro.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/65.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Panorámica o paneo
          p.text-center Movimiento horizontal de la cámara, generalmente de derecha a izquierda o viceversa, que permite abarcar una visión general del espacio.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/66.png', alt='Texto que describa la imagen')

          h3.mb-4.text-center Plano grúa
          p.text-center Movimiento realizado mediante una grúa que eleva la cámara para captar imágenes desde una perspectiva cenital o elevada, con desplazamiento en distintas direcciones.
    .row.justify-content-center
      .col-lg-10
        .bg-color-10.mb-5
          .row.align-items-center.p-4
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/67.svg").mx-auto
            .col-lg.order-lg-1.px-4
              p.mb-0 En conclusión, la edición de video articula <b>imagen, sonido y tiempo</b> dentro de una estructura narrativa coherente. La comprensión de los elementos como fotograma, secuencia, escena, toma y tipos de plano resulta esencial para construir productos audiovisuales con claridad expresiva y solidez técnica.
    
    p Según Racionero (2008), “los planos cinematográficos se clasifican según su tamaño y dependiendo de este tienen diferentes funciones y reciben distintos nombres”. Esta clasificación permite comprender cómo la distancia entre la cámara y el sujeto incide directamente en la intención narrativa y expresiva del producto audiovisual.
    p.mb-5 A continuación, se presentan los principales tipos de plano según sus características de encuadre e imagen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/68.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Plano general
              p.mb-0 Sitúa al espectador en el espacio donde ocurre la acción. Su objetivo principal es describir el entorno y contextualizar la escena.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/69.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Plano entero
              p.mb-0 Relacionado con el plano general, pero centra la atención en el personaje completo. El protagonismo recae en la figura humana y no en el decorado.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/70.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Plano americano
              p.mb-0 Surge en el western, donde era necesario incluir la pistola del vaquero. Comprende desde debajo de la cintura hasta la cabeza del personaje.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/71.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Plano medio
              p.mb-0 Encuadra al personaje desde la cintura hasta la cabeza. Permite equilibrar expresión facial y lenguaje corporal.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/72.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Primer plano
              p.mb-0 Destaca el rostro del personaje. Es altamente expresivo; se ha señalado que constituye “el reflejo del alma” (Lourdes, 2000, p. 56).
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/73.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Primerísimo primer plano
              p.mb-0 Acercamiento muy marcado al rostro. Abarca desde debajo de los labios hasta las cejas, enfatizando la expresión emocional.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-3.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/74.png', alt='Imagen de acompañamiento')
            .col-lg-7.mb-4.mb-md-0.order-lg-1
              h4 Plano de detalle
              p.mb-0 Resalta elementos específicos considerados fundamentales para la acción narrativa. Dirige la atención hacia objetos o fragmentos concretos.
    
    p.mb-5 Esta clasificación demuestra que la selección del plano no es arbitraria, sino que responde a la intención expresiva, la carga emocional y la información que se desea comunicar.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Proceso de edición del video
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        p El proceso de edición de video consiste en la creación de un producto audiovisual a partir de la selección y unión de fragmentos de video y audio previamente grabados mediante dispositivos digitales, como cámaras.
        p.mb-5 Históricamente se distinguían dos formas de edición: analógica y digital. En la actualidad, la edición analógica se encuentra prácticamente descontinuada, y la producción audiovisual se desarrolla bajo entornos de edición digital, que ofrecen mayor precisión, flexibilidad y control técnico.

        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-color-2.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/75.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") La etapa final del proceso corresponde a la <b>posproducción</b>, donde se integran efectos especiales, sobreimpresiones de texto, animaciones y ajustes de imagen. En el ámbito sonoro se incorporan locuciones, efectos y bandas sonoras que complementan la narrativa.
        
        p.mb-5 Tradicionalmente, la edición requería la intervención de dos profesionales: uno encargado de la conceptualización y otro del manejo técnico del programa. Sin embargo, los cambios tecnológicos y las nuevas competencias profesionales han favorecido la integración de funciones, de modo que un mismo profesional puede desarrollar el producto audiovisual desde la planeación hasta la finalización.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Herramientas técnicas para la edición de video
        
        p.mb-5 Para iniciar el proceso de edición es indispensable contar con dos herramientas básicas que permitan organizar y procesar el material en bruto, es decir, el conjunto total de grabaciones obtenidas.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.bg-color-7.p-5.text-white
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/76.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Guion técnico o guion de montaje
        p Documento clave que organiza el orden de inserción de los elementos narrativos. Define la unión entre escenas, los tipos de plano, las transiciones, las secuencias y los recursos sonoros y gráficos que acompañan cada momento.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-8.p-5
        .row.justify-content-center.mb-5
          .col-10
            figure
              img(src='@/assets/curso/tema1/77.png', alt='Texto que describa la imagen')
          
        h2.mb-5 Programa de edición
        p Software especializado que permite cortar, unir, ajustar, incorporar efectos, sincronizar audio y exportar el producto final en distintos formatos.
    
    p.mb-5 El guion técnico, utilizado inicialmente en la etapa de grabación, adquiere en la edición un valor estructural. En él se consigna la organización narrativa del producto audiovisual: el orden de las escenas, los planos que contiene cada una, las transiciones entre secuencias, los sonidos asociados y los elementos gráficos complementarios, como títulos o imágenes insertadas.

    .row.justify-content-center.mb-3
      .col-lg-10
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/78.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") En conclusión, la edición de video articula planificación narrativa, dominio técnico y criterio estético. La adecuada selección de planos, el uso coherente del guion técnico y el manejo competente del programa de edición garantizan un producto audiovisual estructurado y expresivamente sólido.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Programas de edición de video
    
    p.mb-5 Al igual que en la edición de imágenes estáticas, existe una amplia variedad de software especializados para realizar el montaje y la edición de video. Estas herramientas permiten organizar secuencias, integrar audio, aplicar efectos, generar animaciones y exportar productos audiovisuales en diferentes formatos según los requerimientos del proyecto. A continuación, se presentan algunos de los programas más utilizados en el ámbito profesional y semiprofesional:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Programas de edición de video
        .tabla-a.color-primario.mb-5.tbl
          table
            thead
              tr
                th.bg-color-8 Programa
                th.bg-color-8 Sistema operativo
                th.bg-color-8 Características principales
            tbody.bg-color-sintesis
              tr
                td <em>Final Cut Pro</em>
                td <em>Mac</em>
                td Desarrollado por <em>Apple</em>. Es uno de los referentes en edición profesional de video por su rendimiento, estabilidad y herramientas avanzadas de montaje.
              tr
                td <em>Adobe Premiere Pro</em>
                td <em>Windows</em> y <em>Mac</em>
                td Alternativa profesional perteneciente a la familia <em>Adobe Creative Cloud</em>. Ofrece herramientas avanzadas de edición, corrección de color y sincronización de audio.
              tr
                td <em>Adobe After Effects</em>
                td <em>Windows</em> y <em>Mac</em>
                td Complemento de <em>Premiere Pro</em> orientado a animaciones, gráficos en movimiento (<em>motion graphics</em>) y efectos visuales. Requiere conocimientos avanzados.
              tr
                td <em>Avid Media Composer</em>
                td <em>Windows</em> y <em>Mac</em>
                td Utilizado en entornos profesionales de cine y televisión. Destaca por su flujo de trabajo dinámico y herramientas de edición avanzada.
              tr
                td <em>Pinnacle Studio</em>
                td <em>Windows</em>
                td Programa intuitivo y de fácil manejo, orientado a usuarios intermedios.
              tr
                td <em>Vegas Pro</em>
                td <em>Windows</em>
                td Potente editor con amplia gama de efectos y herramientas profesionales. Incluye una versión simplificada denominada <em>Movie Studio</em> para usuarios principiantes.
              tr
                td <em>Corel VideoStudio</em>
                td <em>Windows</em>
                td Programa avanzado que incorpora funciones como captura de pantalla en video, útil para la creación de tutoriales.
    
    p En conclusión, la elección del programa de edición dependerá del nivel de complejidad del proyecto, el sistema operativo disponible y la experiencia del usuario. Mientras algunas herramientas están orientadas a producciones profesionales de alto nivel, otras ofrecen entornos más intuitivos que facilitan el aprendizaje y la producción de contenidos educativos o institucionales.


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
