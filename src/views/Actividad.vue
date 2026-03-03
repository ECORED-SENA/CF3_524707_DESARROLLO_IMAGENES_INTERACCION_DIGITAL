<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos históricos, técnicos y digitales de la animación',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave relacionados con la evolución histórica, técnicas, principios, imagen digital y tendencias actuales en la animación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principio fundamental que consolidaron los antecedentes de la animación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La representación estática sin variaciones temporales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La captura directa de movimiento en celuloide.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La sucesión organizada de imágenes estáticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La proyección simultánea de imágenes superpuestas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿En qué año se presentó el Praxinoscopio de Émile Reynaud?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En el año mil ochocientos setenta y siete.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En el año mil ochocientos veinticuatro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En el año mil novecientos seis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el año mil ochocientos veintinueve.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué innovación técnica introdujo Steamboat Willie en mil novecientos veintiocho?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La animación completamente tridimensional digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La aplicación de color en largometrajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La integración de actores reales y dibujos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La sincronización total entre sonido y acción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál fue la primera película animada totalmente digital producida por Pixar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Blancanieves y los siete enanitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Quién engañó a Roger Rabbit?.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Toy Story producida en mil novecientos noventa y cinco.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Merrie Melodies de Warner Brothers.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza a la animación tradicional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La manipulación digital de modelos tridimensionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El dibujo manual fotograma a fotograma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La captura de movimiento con sensores corporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La simulación automática por inteligencia artificial',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál técnica consiste en manipular objetos físicos y fotografiarlos secuencialmente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La animación tipográfica digital avanzada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La animación tridimensional por computador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La rotoscopia con actores digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El stop motion con objetos reales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué técnica combina grabación real con dibujo sobre fotogramas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La animación tridimensional digital avanzada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La pixilación con actores inmóviles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La rotoscopia aplicada sobre filmación real.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La animación tradicional sobre acetato.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál principio establece que los movimientos deben iniciar y finalizar progresivamente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El principio de exageración expresiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La acción secundaria complementaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El principio de arcos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El principio de entradas y salidas suaves.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué atributo digital determina el nivel de detalle de una imagen?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La extensión del nombre del archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tipo de dispositivo de captura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de píxeles en pantalla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La duración temporal del archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál formato permite hasta doscientos cincuenta y seis colores y es común en internet?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato GIF para gráficos animados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El formato RAW de captura total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El formato TIFF de alta calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El formato PSD editable nativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué formato conserva capas y es propio de Adobe Photoshop?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato JPEG comprimido estándar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El formato PSD editable por capas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El formato BMP sin compresión.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El formato PDF de lectura.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál formato almacena todos los datos captados por el sensor de la cámara?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato PNG con transparencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El formato GIF de baja paleta.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'El formato JPG comprimido.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El formato RAW considerado negativo digital.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué se entiende por pensamiento innovador en animación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir técnicas clásicas sin variaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de tecnologías recientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar la animación al cine tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proponer soluciones creativas con potencial rentable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál aplicación actual fortalece la identidad corporativa en entornos digitales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las imágenes estáticas sin movimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los documentos impresos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los logotipos animados en tres dimensiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los archivos de texto plano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál principio busca otorgar mayor dramatismo mediante distorsión controlada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El principio de solidez estructural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La acción directa secuencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La puesta en escena narrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El principio de exageración expresiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué técnica utiliza personas reales como variante del stop motion?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rotoscopia tradicional dibujada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La pixilación con actores fotografiados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La animación tridimensional digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La animación tipográfica corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué etapa incluye diseño, storyboard y animatic antes de producir?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La etapa de producción técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La etapa de postproducción final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La etapa de preproducción inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La etapa de renderizado digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál principio indica que las partes del cuerpo no se detienen simultáneamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El principio de timing narrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El principio de appeal emocional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El principio de solidez volumétrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El principio de acción continuada superpuesta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué formato fue desarrollado para superar limitaciones del GIF?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato PNG con mayor profundidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El formato BMP de gran tamaño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El formato RAW sin compresión.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El formato PSD por capas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál tendencia actual anima datos para mejorar su comprensión?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El surrealismo digital creativo.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Los fondos animados web.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los textos tipográficos móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La animación de datos en tiempo real.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
