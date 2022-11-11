<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Señales luminosas y auditivas de los equipos
    
    p.mb-5 Los dispositivos dentro del campo de seguridad vial son fundamentales, ya que los actores viales a través de sus sentidos pueden percibir la presencia de vehículos o equipos en las vías o en sus inmediaciones y generan seguridad en sus desplazamientos.  Estos son:

    .d-flex.flex-wrap.align-items-end.mb-5
      .col-lg-7.order-2.order-lg-1.pe-lg-4
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
            img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
            h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Sistemas de iluminación de los vehículos:
        p Estos elementos son indispensables, pues en las vías y sobre todo cuando las condiciones de luz y de visibilidad no son favorables, se requiere que los equipos de transporte tengan dispositivos que permitan una conducción segura y ser vistos por otros actores viales, estas condiciones de iluminación son fundamentales en la seguridad activa de los vehículos. Además, un buen sistema de iluminación en los vehículos va a permitir iluminar la calzada, observar la señalización, actuar de forma adecuada frente a obstáculos y anticipar frente a otros conductores cambios de dirección de los vehículos. Para activarlos se hace a través del interruptor de control de luces del vehículo.
      img.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/img-1.png")
    
    p.mb-5.fw-bold La iluminación con la que cuentan los vehículos se puede clasificar de la siguiente manera:

    .tarjeta.tarjeta--azul.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
      data-aos="fade-left"
    )
      SlyderA(tipo="b")
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces conducción diurna
            p No deben confundirse con las luces cortas, las luces de conducción diurna están diseñadas para hacer el vehículo más visible a otros conductores. Suelen ser luces en la parte delantera y trasera de tu auto que pueden encenderse de forma automática cuando enciendes el motor.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-2.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces cortas
            p A diferencia de las luces altas, las luces cortas (o luces de cruce) dan suficiente luz para mostrarte a dónde vas sin deslumbramiento excesivo que podría deslumbrar a los conductores que se aproximan. Las luces cortas son esenciales cuando se conduce por la noche. También mejoran la visibilidad y la seguridad cuando se utilizan durante el día, por ejemplo, durante condiciones meteorológicas adversas (lluvia, nieve, granizo o niebla) o al amanecer y antes del atardecer. 
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-3.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces altas
            p Al igual que las luces cortas, las luces altas ayudan al conductor a ver la carretera en la oscuridad. También, indican a otros conductores dónde te encuentras. Las luces altas proporcionan una distribución de luz intensa y ponderada en el centro con mucho deslumbramiento. Solo deben usarse cuando haya dificultad para ver y no haya otros autos visibles en ninguna dirección, o si el vehículo se encuentra al menos a 150 metros del tráfico que se aproxima y se necesitan las luces completas para ver la carretera.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-4.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces antiniebla
            p Las luces antiniebla, con su forma única de haz plano y ancho, suelen colocarse en la parte baja de la parte delantera del auto, cerca del parachoques delantero. La forma del haz atraviesa la niebla para iluminar la superficie de la carretera, mientras que la posición evita que la luz se refleje de nuevo y deslumbre al conductor. Como las luces antiniebla son tan fuertes que pueden distraer a otros conductores, solo deben utilizarse durante la niebla (pero no en la lluvia) cuando los faros normales son ineficaces.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-5.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces traseras
            p Las luces traseras son las luces rojas en la parte trasera del vehículo que se encienden de manera sistemática cuando las luces delanteras están encendidas. Les permite saber a los conductores que vienen detrás que el vehículo está allí y qué tan lejos está.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-6.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces de señalización/intermitentes
            p Las luces de señalización, conocidas como intermitentes, se encuentran en la parte delantera y trasera del auto. Las luces de señalización también se pueden encontrar en los espejos laterales. Se utilizan para que otros conductores sepan que está planeando girar y probablemente tendrán que desacelerar para girar.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-7.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Luces de emergencia
            p Las luces de señalización también se usan como luces de peligro, luces intermitentes o luces de emergencia. Cuando se encienden las luces de emergencia, parpadean para advertir a otros conductores de problemas de tránsito o situación de emergencia. Por ejemplo, advertir a otros conductores de un peligro en la carretera, cuando el vehículo se ha detenido y está causando una obstrucción temporal. No deben utilizarse cuando estacionas temporalmente.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema3/img-8.png' style="max-width: 537px")
    
    .d-flex.flex-wrap.align-items-center
      .col-lg-7.order-2.order-lg-1.pe-lg-4
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
            img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
            h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Sistemas auditivos / sonoros de los vehículos:
        p Estos elementos electromagnéticos permiten que los operadores de vehículos alerten a los actores viales sobre su proximidad o acercamiento a un obstáculo; funcionan a 12 o a 24 voltios y de acuerdo con la normatividad deben estar sobre los 80 decibeles.
      img.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/img-9.png")
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
