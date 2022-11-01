<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .d-flex.flex-wrap.align-items-start.mb-5
      img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px")
      p.col-md.ps-md-4 ¿Por qué se está trabajando cada vez más en mejorar las condiciones de operación de los vehículos a través de la inspección?, estas medidas se imponen día a día en las operaciones de transporte en general, ya que esta actividad dentro de la economía permite que lleguen a todos los lugares bienes y servicios, razón por la cual es indispensable que las unidades de transporte y la operación se den de la manera más segura posible, evitando y minimizando afectaciones en términos de seguridad vial, además impulsa la implementación de buenas prácticas que generen una cultura en estos aspectos, ya que permite el desarrollo de estrategias y evaluaciones de manera integral de los riesgos en las operaciones de transporte. Por tanto, se invita a observar el video introductorio de este componente formativo.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.p-3.p-md-4(style="background-color: #FFF5C5") De manera que toda la información debe procesarse, por esto se revisarán las Tecnologías de la Información y la Comunicación junto con sus fundamentos, además de los tipos de equipos de comunicación, tipos y bases de datos, en momentos en que la tecnología y la información es totalmente digital, así mismo, se revisarán herramientas para definir características de la geografía de las rutas de transporte y del plan de rutas.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
