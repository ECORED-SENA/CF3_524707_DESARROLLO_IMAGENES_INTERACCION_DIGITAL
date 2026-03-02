export default {
  global: {
    Name: 'Fundamentos de la animación',
    Description:
      'Elementos estáticos, inanimados, que se presentan en secuencias rápidas que cobran “vida”, cuentan historias y transmiten sentimientos, eso es la animación. En la actualidad la animación es un negocio que mueve millones de dólares al año, a nivel mundial se destacan la industria americana, japonesa y europea. Por lo anterior, en el presente componente se abordan los elementos centrales para la comprensión del tema.',
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
        titulo: 'Montaje audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Edición de imagen',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Edición de audio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Edición de video',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Creación <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño <em>web</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arquitectura y diagramación <em>web</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Software</em> para hacer diagramas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Maquetación <em>web</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Lenguajes de programación para <em>frontend</em>',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estructuración técnica de un sitio <em>web</em>',
            hash: 't_2_6',
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
      termino: 'Buscador',
      significado: 'herramienta web que permite ubicar contenidos en la red.',
    },
    {
      termino: 'Declaración CSS',
      significado:
        'es la suma de la propiedad más el valor y se encuentra siempre entre dos corchetes. si el selector es la parte del código que indica en qué parte se ha de aplicar la regla CSS, la declaración explica en qué consisten las instrucciones.',
    },
    {
      termino: 'Etiqueta',
      significado: 'cada uno de los elementos del lenguaje HTML.',
    },
    {
      termino: 'Formatos',
      significado:
        'se les llama formatos generalmente a cada tipo de archivo, por ejemplo: JPG, GIF.',
    },
    {
      termino: 'Hosting',
      significado:
        'sinónimo de servidor; también se denomina así a los servidores que alojan sitios web y se les conoce como HOST.',
    },
    {
      termino: 'HTML',
      significado:
        '<em>hypertext markup language</em> o lenguaje de marcado de hipertextos. destinado a simplificar la escritura de documentos estándar. es la base estructural en la que están diseñadas las páginas de la World Wide Web.',
    },
    {
      termino: 'HTTP',
      significado:
        '<em>hypertext transfer protocol</em> o protocolo de transferencia de hipertexto. es el mecanismo de intercambio de información que constituye la base funcional de la World Wide Web.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'puede utilizarse para definir una secuencia de instrucciones para su procesamiento por un computador.',
    },
    {
      termino: 'Multimedia',
      significado:
        'combinación de varias tecnologías de presentación de información como imágenes, sonido, animación, video y texto, con la intención de captar tantos sentidos humanos como sea posible.',
    },
    {
      termino: 'Navegador',
      significado:
        'programa que permite leer documentos en la web y seguir enlaces o <em>links</em> de un documento de hipertexto a otro.',
    },
    {
      termino: 'WWW',
      significado:
        'también conocido simplemente como web, es uno de los servicios más populares de internet. combina texto con gráficos, imágenes, animaciones e incluso música, enlazados entre sí de tal manera que facilita la navegación por la información dispersa en todo internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blázquez Nieto, A. (2019). Nuevas tecnologías aplicadas a la vida: smartphone, tablet e internet.',
      link:
        'https://docplayer.es/78951030-Nuevas-tecnologias-aplicadas-a-la-vida-smartphone-tablet-e-internet.html',
    },
    {
      referencia: 'Equipo 09, EvntosSv.com. (2019). Maquetación web.',
      link: 'https://evntossv.neocities.org/maquetacion.html',
    },
    {
      referencia:
        'Faulker, A., y Gyncild, B. (2015). Adobe Photoshop CC 2014. Anaya Multimedia.',
      link: '',
    },
    {
      referencia: 'Fernández, A. (2005). Imagen digital.',
      link: '',
    },
    {
      referencia: 'Garrett, J. J. (2002). IA/recon (versión en español).',
      link: 'http://www.jjg.net/ia/recon/spanish.html',
    },
    {
      referencia:
        'Leyva, Alarcón, Barrera, y Ortegón. (2016). Exploración del diseño y arquitectura web: aplicación a páginas electrónicas del sector bancario desde la perspectiva del usuario. Revista Escuela de Administración de Negocios, (80), 41-57.',
      link: '',
    },
    {
      referencia:
        'Cortés, M. L. (Ed.). (2000). Luces, cámara, acción: textos de cine y televisión. Editorial de la Universidad de Costa Rica.',
      link: '',
    },
    {
      referencia:
        'Lozano Botache, J. P. (2013). Narraciones cinematográficas: potencialidades pedagógicas y de investigación cualitativa, desde el cine colombiano [Tesis doctoral, Universidad del Cauca]. Repositorio Unicauca.',
      link: '',
    },
    {
      referencia:
        'Montero Miguel, R. (2014). Administración de servicios de transferencia de archivos y contenidos multimedia. Ra-Ma.',
      link: '',
    },
    {
      referencia:
        'Morville, P., y Rosenfeld, L. (1998). Information architecture for the World Wide Web. O’Reilly.',
      link: '',
    },
    {
      referencia:
        'Ordóñez, C. A. (2005). Formatos de imagen digital. Revista Digital Universitaria, 5(7), 1-10.',
      link: 'http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf',
    },
    {
      referencia:
        'R. M. (2014, julio 2). Los modos de color en diseño gráfico.',
      link:
        'https://blog.agencialanave.com/los-modos-de-color-en-diseno-grafico/',
    },
    {
      referencia:
        'Racionero, A. (2008). El lenguaje cinematográfico. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (s. f.). Diccionario de la lengua española (23.ª ed.).',
      link: 'https://dle.rae.es',
    },
    {
      referencia:
        'Shum, Y. M. (2021). Situación global mobile 2020: 5.190 millones de usuarios únicos.',
      link: 'https://yiminshum.com/mobile-movil-app-2020/',
    },
    {
      referencia:
        'Viveros, M. A. T. (2005). Introducción a la creación de imágenes digitales para multimedia interactivo.',
      link:
        'https://programas.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1161/mod_resource/content/1/contenido/index.html',
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
