<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Funcionamiento de testigos de los equipos
    
    p.mb-5 Los testigos en las unidades de transporte son pictogramas codificados que están ubicados en el tablero de instrumentos, tienen como objetivo principal dar aviso sobre el funcionamiento de los sistemas y los dispositivos del vehículo y, alertar sobre una falla o avería en los mismos.
    

</template>

<script>
export default {
  name: 'Tema2',
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
