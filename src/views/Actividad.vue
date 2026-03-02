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
      tema: 'Producción e integración de contenidos digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la edición, montaje, formatos digitales, producción audiovisual y desarrollo web.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por montaje audiovisual dentro del proceso de producción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proceso narrativo que articula significados mediante fragmentos audiovisuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Procedimiento técnico exclusivo para corregir errores de grabación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Método de almacenamiento digital en sistemas multimedia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema automático de exportación de archivos finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la diferencia principal entre edición y montaje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La edición organiza la narrativa y el montaje corrige color.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La edición es técnica y el montaje construye sentido narrativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La edición solo aplica a fotografía y el montaje a sonido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La edición elimina escenas y el montaje captura imágenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se define una imagen digital desde el ámbito tecnológico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representación tridimensional almacenada en papel fotográfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Archivo físico compuesto por emulsiones químicas sensibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representación bidimensional construida mediante matriz numérica binaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Secuencia animada proyectada en dispositivos analógicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué caracteriza a una imagen en mapa de bits?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Está compuesta por fórmulas matemáticas escalables infinitamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puede ampliarse sin perder definición en impresión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utiliza únicamente vectores y nodos geométricos editables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se compone de píxeles organizados en rejilla rectangular.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica principal de la imagen vectorial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puede ampliarse sin pérdida de calidad visual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Depende exclusivamente de la resolución en píxeles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se construye mediante puntos físicos impresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere escáner para su digitalización inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué determina principalmente la resolución de una imagen digital?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato de compresión seleccionado al guardar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad total de píxeles en ancho y alto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de dispositivo donde se visualiza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La marca del software utilizado en edición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué modelo de color se utiliza principalmente en pantallas electrónicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CMYK basado en tintas de impresión física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'HSB centrado en brillo y saturación cromática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'RGB basado en combinación de luz aditiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escala monocromática limitada a grises puros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función principal del formato TIFF?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir tamaño sacrificando calidad sonora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar imagen a máximo doscientos colores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Optimizar gráficos exclusivamente para web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar alta calidad para impresión profesional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué implica la edición digital de imágenes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Manipulación mediante software para reforzar mensajes visuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Proceso químico tradicional aplicado en laboratorio físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Captura directa sin posibilidad de modificación posterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impresión automática sin intervención conceptual previa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué distingue a los aspectos creativos en la edición de imagen?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso obligatorio de herramientas técnicas avanzadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definición conceptual y semiótica del mensaje visual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Configuración automática del formato de exportación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión inmediata de archivos a múltiples versiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué caracteriza al formato MP3?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formato sin compresión de alta fidelidad sonora.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistema exclusivo para transmisión audiovisual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formato comprimido con pérdida y amplia compatibilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Archivo profesional solo utilizado en cine.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es una característica del formato WAV?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce tamaño eliminando frecuencias imperceptibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite transmisión inalámbrica optimizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se utiliza únicamente en plataformas móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ofrece alta calidad sin compresión significativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué es un fotograma en edición de video?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imagen fija individual dentro de una secuencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transición aplicada entre dos escenas distintas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Efecto digital añadido en posproducción avanzada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Plano general grabado con cámara en movimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué define una secuencia en narrativa audiovisual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unidad mínima sin continuidad argumental definida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conjunto de escenas con continuidad de acción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fragmento aislado sin relación con el guion.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Toma individual repetida sin variaciones técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué caracteriza al plano general?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Enfatiza exclusivamente detalles mínimos del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuadra rostro resaltando expresión emocional intensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incluye únicamente objetos secundarios sin contexto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Describe el espacio donde ocurre la acción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la función del guion técnico en edición de video?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capturar imágenes durante rodaje inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exportar automáticamente archivos finales digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar filtros visuales sin intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar escenas, planos y recursos narrativos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es un wireframe en diseño web?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Boceto estructural que organiza contenido y navegación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Producto final completamente funcional en línea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de alojamiento web con base de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lenguaje de programación orientado a servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué función cumple el CSS en desarrollo web?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir estructura básica del documento HTML.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar bases de datos del servidor remoto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar la presentación visual del contenido web.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Procesar solicitudes HTTP entre cliente y servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué caracteriza a una URL amigable para SEO?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso extensivo de símbolos y parámetros complejos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incorporación de códigos numéricos aleatorios largos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dependencia exclusiva del dominio principal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Claridad descriptiva basada en palabras clave.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es una ventaja principal del diseño web responsive?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obliga a crear versiones separadas del sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limita el acceso desde dispositivos móviles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce compatibilidad con motores de búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permite adaptación a distintos tamaños de pantalla.',
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
