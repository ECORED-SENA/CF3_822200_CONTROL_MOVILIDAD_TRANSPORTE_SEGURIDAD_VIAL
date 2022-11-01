<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia

    p.mb-5 En Colombia desde hace unos pocos años se ha comenzado a legislar sobre aspectos tan importantes y que afectan tanto la salud como lo es el transporte, el almacenamiento y la manipulación de las sustancias peligrosas, por esto nace el “Decreto 1609 del 31 de Julio de 2002 Manejo y transporte terrestre automotor de mercancías peligrosas por carretera”, cuyo objetivo es establecer los requisitos técnicos y de seguridad para el manejo y el transporte de mercancías peligrosas por carretera en vehículos automotores en todo el territorio nacional, con el fin de minimizar los riesgos, garantizar la seguridad, proteger la vida y el medioambiente.
    
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
