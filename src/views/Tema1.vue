<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Características de las llantas, la carrocería, el sistema eléctrico, los lubricantes y las correas de transmisión
    
    p.mb-5 Es importante que dentro del proceso de aprendizaje el aprendiz conozca los sistemas que componen las unidades de transporte, para definir qué elementos va a inspeccionar de manera visual y garantizar que estén cumpliendo los requisitos para operar. 

    .d-flex.flex-wrap.align-items-end.mb-5
      .col-xl-6.order-2.order-xl-1.pe-xl-4
        p.p-3.p-md-4.mb-4 Se debe tener claro qué es un vehículo automotor, que en su concepción es un elemento con un complejo mecánico que se desplaza por sus propios medios y para lograrlo, requiere sistemas y partes que interactúan de forma coordinada.
        .bloque-texto-b.p-4(style="background-color: #FFFAF3")
          p También dentro del Código Nacional de Tránsito, en la Ley 769 de 2002 en el Artículo 2 se indica que es
          .bloque-texto-b__texto.d-flex.flex-wrap.mb-4.pe-lg-5
            i.fas.fa-quote-left(style="font-size: 27px")
            p.ps-5.text-end.w-100.mb-0 todo aparato montado sobre ruedas que permite el transporte de personas, animales o cosas de un punto a otro por vía terrestre pública o privada abierta al público
            i.ms-auto.fas.fa-quote-right(style="font-size: 27px")
          p.pe-lg-5.mb-0.text-end.fw-bold.w-100 Ley 769 de 2002 en el Artículo 2
      img.mb-4.mb-xl-0.col-xl-6.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 610px")
    
    p.fw-bold.mb-0 En este sentido, dentro de los sistemas que componen el vehículo se encuentran:
    p.mb-5 Los siguientes sistemas son los que permiten que un vehículo pueda funcionar y ponerse  en marcha.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
