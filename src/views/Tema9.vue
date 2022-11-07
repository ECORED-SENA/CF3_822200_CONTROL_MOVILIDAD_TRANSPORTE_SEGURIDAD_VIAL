<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Modos y medios de transporte

    p.mb-5 El transporte como servicio dentro de la economía es un elemento importante en cuanto al costo logístico y seguridad vial, es por esto que determinar de acuerdo con las ventajas que se tengan la decisión adecuada del transporte que se va a utilizar generará ventajas importantes, así como la oportunidad de llegar con los productos en el mejor estado posible. Por tanto, los modos de transporte se clasifican de la siguiente manera:
    
    .tarjeta.tarjeta--azul.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
      data-aos="fade-left"
    )
      SlyderA(tipo="b")
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces Conducción Diurna
            p No deben confundirse con las luces cortas, las luces de conducción diurna están diseñadas para hacer el vehiculó más visible a otros conductores. Suelen ser luces en la parte delantera y trasera de tu auto que pueden encenderse de forma automática cuando enciendes el motor.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-2.png' style="max-width: 537px")
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
