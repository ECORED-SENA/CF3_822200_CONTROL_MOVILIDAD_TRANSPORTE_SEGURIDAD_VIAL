<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Modos y medios de transporte

    p.mb-5 El transporte como servicio dentro de la economía es un elemento importante en cuanto al costo logístico y seguridad vial, es por esto que determinar de acuerdo con las ventajas que se tengan la decisión adecuada del transporte que se va a utilizar generará ventajas importantes, así como la oportunidad de llegar con los productos en el mejor estado posible. Por tanto, los modos de transporte se clasifican de la siguiente manera:
    
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
