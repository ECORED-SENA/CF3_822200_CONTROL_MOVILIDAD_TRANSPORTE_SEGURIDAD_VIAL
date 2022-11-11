<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Técnicas de manejo de los equipos de seguridad

    p.mb-5 Este se plantea en el punto 8 de mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia.  Dentro de la atención de las contingencias es importante el desarrollo de técnicas que permitan ser preventivos o reactivos de acuerdo con el caso, como se muestra a continuación:

    p.mb-5 #[b Técnicas de manejo de equipos de seguridad:] estas se orientan cuando se produce el accidente y se clasifican así: 

    .d-flex.flex-wrap.align-items-stretch.mb-3
      .col-lg-4.px-lg-2.col-md-8.mb-4.mx-auto
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema10/img-1.svg' style="max-width: 141px")
        p.w-100.p-4.mb-0(style="background-color: #FBAB42") Técnicas activas:
        p.d-flex.p-4.mb-0(style="min-height: 224px; background-color: #FFF5C5") Se basan en la planeación y la prevención antes de los accidentes, identificando peligros y evaluando los riesgos, apoyados en inspecciones, en las cuales se analizan los recursos y los procesos para evaluar todos los riesgos.
      
      .col-lg-4.px-lg-2.col-md-6.pe-md-1.mb-4
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema10/img-2.svg' style="max-width: 141px")
        p.w-100.p-4.mb-0(style="background-color: #FBAB42") Técnicas reactivas:
        p.d-flex.p-4.mb-0(style="min-height: 224px; background-color: #FFF5C5") Se producen una vez ocurre el accidente, determina causas para implementar controles, en esto es muy importante la investigación de los accidentes y la estadística.
      
      .col-lg-4.px-lg-2.col-md-6.ps-md-1.mb-4
        img.mb-4.mx-auto(src='@/assets/curso/temas/tema10/img-3.svg' style="max-width: 141px")
        p.w-100.p-4.mb-0(style="background-color: #FBAB42") Técnicas complementarias:
        p.d-flex.p-4.mb-0(style="min-height: 224px; background-color: #FFF5C5") Basados en la normatividad y la señalización, eliminando aspectos que afecten la seguridad y la salud.

    .d-flex
      p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de la Nueva ISO 45001:2018.

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

<style lang="sass">
table
  td, th
    border-color: #FFFFFF !important
</style>
