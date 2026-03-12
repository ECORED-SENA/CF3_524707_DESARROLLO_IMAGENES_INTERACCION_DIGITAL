export default {
  global: {
    Name: 'Desarrollo de imágenes para la interacción digital',
    Description:
      'Elementos estáticos, inanimados, que se presentan en secuencias rápidas que cobran “vida”, cuentan historias y transmiten sentimientos, eso es la animación. En la actualidad, la animación es un negocio que mueve millones de dólares al año; a nivel mundial, se destacan la industria americana, japonesa y europea. Por lo anterior, en el presente componente se abordan los elementos centrales para la comprensión del tema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia de la animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antecedentes y dispositivos precursores de la animación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Consolidación cinematográfica y evolución tecnológica de la animación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de animación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de la animación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Formatos digitales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas digitales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pensamiento innovador y tendencias en la animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aplicaciones más recientes de la animación',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Animatic</em>',
      significado:
        'es la versión animada del <em>storyboard</em>. No debe ser tan minuciosa, solo para detallar lo que no se pudo ver en el paso anterior.',
    },
    {
      termino: '<em>Animation</em>',
      significado:
        'proceso utilizado por uno o más animadores para dar la sensación de movimiento a imágenes o dibujos u otro tipo de objetos inanimados.',
    },
    {
      termino: '<em>Compositing</em>',
      significado:
        'dentro de una animación existen diversas capas; el objetivo del <em>compositing</em> es agruparlas todas para convertirlas en una pieza individual donde todas las escenas trabajen en conjunto.',
    },
    {
      termino: '<em>Concept art</em>',
      significado: 'establece el estilo visual dentro de la animación.',
    },
    {
      termino: '<em>Frame</em>',
      significado: 'imagen en una sucesión de imágenes.',
    },
    {
      termino: '<em>Keyframes/Keys</em>',
      significado:
        'son las posiciones más importantes dentro de una escena. Dentro de un <em>software</em> son los puntos que se establecen en el <em>timeline</em> para posicionar cambios de posición, escala, entre otros.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'etapa en la cual se determina la posición de los personajes, se planifica la puesta en escena y los tiempos, así como el ángulo y la posición de la cámara, el origen de la luz y la proyección de las sombras.',
    },
    {
      termino: 'Pixilación',
      significado:
        'es una variante del <em>stop motion</em>, con la particularidad de que se utilizan personas.',
    },
    {
      termino: 'Postproducción',
      significado:
        'etapa posterior a la producción que incluye edición, ajuste de color, luminosidad, contraste de los diferentes planos y efectos especiales.',
    },
    {
      termino: 'Preproducción',
      significado:
        'etapa anterior a la producción en la cual se prepara el material, como diseño, color <em>script</em>, <em>animatic</em> y <em>storyboard</em>.',
    },
    {
      termino: 'Producción',
      significado:
        'etapa en la cual se realiza el proyecto, incluyendo animación, iluminación y render.',
    },
    {
      termino: 'Rotoscopia',
      significado:
        'técnica que consiste en reemplazar los fotogramas de una filmación real por dibujos calcados sobre cada fotograma.',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'es la transcripción, en palabras, de la historia y sirve como base antes de comenzar la producción.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en un sistema informático.',
    },
    {
      termino: '<em>Stop motion</em>',
      significado:
        'técnica de animación que consiste en simular el movimiento de objetos estáticos mediante imágenes fijas sucesivas. Generalmente también se denomina animación fotograma a fotograma y se utiliza para animar distintos objetos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Information & Communication Technology. (s. f.). Animation Adobe Animate CC 2020 level 1 (English version): Animation. Google Books.',
      link: 'https://books.google.com.co/books?id=GFzdDwAAQBAJ',
    },
    {
      referencia: 'Adobe. (s. f.). Adobe After Effects.',
      link: 'https://adobe.ly/3tNC45I',
    },
    {
      referencia: 'Adobe. (s. f.). Guía del usuario de After Effects.',
      link: 'https://adobe.ly/2Qsctkm',
    },
    {
      referencia: 'Autodesk. (s. f.). Autodesk Latinoamérica.',
      link: 'https://latinoamerica.autodesk.com/',
    },
    {
      referencia:
        'Cortés, J. (2020, 14 de octubre). ¿Qué es la animación? Tipos y técnicas. Notodoanimacion.',
      link:
        'https://www.notodoanimacion.es/que-es-la-animacion-tipos-y-tecnicas/',
    },
    {
      referencia:
        'Díaz Aguilar, A. M. (2014). Lenguajes audiovisual y escrito: Una propuesta educativa para su manejo integral. En UNID (Ed.), Experiencias que transforman: XV años conectando vidas (pp. 5–15). UNID.',
      link: '',
    },
    {
      referencia:
        'Fernández Díez, F., & Barco, C. (2009). Producción cinematográfica: Del proyecto al producto. Funiber.',
      link: '',
    },
    {
      referencia:
        'Kerlow, I. (2009). The art of 3D computer animation and effects (4th ed.). Wiley.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (2020). Componer. En Diccionario de la lengua española.',
      link: '',
    },
    {
      referencia:
        'Sánchez Navarro, J. (2006). Narrativa audiovisual. Editorial UOC.',
      link: '',
    },
    {
      referencia: 'Universidad Siglo 21. (2019). Interfaz de After Effects.',
      link:
        'https://pensamientodigital.files.wordpress.com/2019/03/interfaz.pdf',
    },
    {
      referencia:
        'Velázquez Perea, L. E. (2018). Animación de gráficos con Adobe Animate CC: Ejercicios prácticos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico- Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paulo César Hernández G.',
          cargo: 'Experto temático',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
