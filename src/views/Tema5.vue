<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Características y componentes del equipo de prevención y seguridad (Artículo 30 Ley 769 de 2002)

    p.mb-5 El equipo de prevención y seguridad es el conjunto de elementos necesarios para la atención inicial de emergencias que debe poseer un vehículo, de acuerdo con las disposiciones del Ministerio de Transporte ningún automotor podrá transitar sin estos elementos, si se presenta el caso se puede ordenar comparendo según las infracciones del Código Nacional de Tránsito. 
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-1.png')
        h4.text-center 1. Gato vehicular
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-2.png')
        h4.text-center 2. Cruceta
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-3.png')
        h4.text-center 3. Señal reflectiva
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-4.png')
        h4.text-center 4. botiquín de primeros auxilios
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h4.text-center 5. Extintor
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-6.png')
        h4.text-center 6. Tacos para vehiculos
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-7.png')
        h4.text-center 7. Caja de herramientas
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-8.png')
        h4.text-center 8. Llanta de repuesto.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-9.png')
        h4.text-center 9. Linterna

</template>

<script>
export default {
  name: 'Tema3',
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
