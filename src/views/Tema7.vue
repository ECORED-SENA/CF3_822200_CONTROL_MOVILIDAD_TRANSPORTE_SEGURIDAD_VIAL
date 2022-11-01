<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tipos de carga, envases y rotulados

    p.mb-5 En el transporte a nivel mundial hay que definir que la carga es un conjunto de bienes o mercancías, que estando embaladas o sin embalar tienen la posibilidad de ser trasladadas de un lugar a otro en el modo de transporte que se defina. Por lo tanto, es importante definir dentro de la carga qué es envase y que es embalaje.
    
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
