<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Señales luminosas y auditivas de los equipos
    
    p.mb-5 Los dispositivos dentro del campo de seguridad vial son fundamentales, ya que los actores viales a través de sus sentidos pueden percibir la presencia de vehículos o equipos en las vías o en sus inmediaciones y generan seguridad en sus desplazamientos.  Estos son:

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
