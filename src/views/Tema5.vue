<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Características y componentes del equipo de prevención y seguridad (Artículo 30 Ley 769 de 2002)

    p.mb-5 El equipo de prevención y seguridad es el conjunto de elementos necesarios para la atención inicial de emergencias que debe poseer un vehículo, de acuerdo con las disposiciones del Ministerio de Transporte ningún automotor podrá transitar sin estos elementos, si se presenta el caso se puede ordenar comparendo según las infracciones del Código Nacional de Tránsito. 
    

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
