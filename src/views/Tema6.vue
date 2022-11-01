<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Características, tipos, clase y vigencia de documentos de la operación, del vehículo y del conductor

    p.mb-5 Es muy importante conocer frente a la normatividad vigente en el país qué documentos son exigibles, dependiendo el proceso que se vaya a revisar, por ello se referencian los siguientes:

    p.fw-bold.mb-5 Los cuatro documentos obligatorios al conducir un vehículo son: 
    
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
