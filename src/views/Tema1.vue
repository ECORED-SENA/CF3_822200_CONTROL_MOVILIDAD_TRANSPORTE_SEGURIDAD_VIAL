<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Características de las llantas, la carrocería, el sistema eléctrico, los lubricantes y las correas de transmisión
    
    p.mb-5 Es importante que dentro del proceso de aprendizaje el aprendiz conozca los sistemas que componen las unidades de transporte, para definir qué elementos va a inspeccionar de manera visual y garantizar que estén cumpliendo los requisitos para operar. 

    .d-flex.flex-wrap.align-items-end.mb-5
      .col-xl-6.order-2.order-xl-1.pe-xl-4
        p.p-3.p-md-4.mb-4.tarjeta(style="background-color: #535353; color: white;") Se debe tener claro qué es un vehículo automotor, que en su concepción es un elemento con un complejo mecánico que se desplaza por sus propios medios y para lograrlo, requiere sistemas y partes que interactúan de forma coordinada.
        .bloque-texto-b.p-4(style="background-color: #FFFAF3")
          p También dentro del Código Nacional de Tránsito, en la Ley 769 de 2002 en el Artículo 2 se indica que es
          .bloque-texto-b__texto.d-flex.flex-wrap.mb-4.pe-lg-5
            i.fas.fa-quote-left(style="font-size: 27px")
            p.ps-5.text-end.w-100.mb-0 todo aparato montado sobre ruedas que permite el transporte de personas, animales o cosas de un punto a otro por vía terrestre pública o privada abierta al público
            i.ms-auto.fas.fa-quote-right(style="font-size: 27px")
          p.pe-lg-5.mb-0.text-end.fw-bold.w-100 Ley 769 de 2002 en el Artículo 2
      img.mb-4.mb-xl-0.col-xl-6.order-1.order-xl-2.mx-auto(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 610px")
    
    p.fw-bold.mb-0 En este sentido, dentro de los sistemas que componen el vehículo se encuentran:
    p.mb-5 Los siguientes sistemas son los que permiten que un vehículo pueda funcionar y ponerse  en marcha.

    .tarjeta.tarjeta--azul.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
      data-aos="fade-left"
    )
      SlyderA(tipo="b")
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema del motor
            p Está conformado por un dispositivo que es el motor con una serie de accesorios que transforman la energía eléctrica, cinética o química en energía mecánica de movimiento, energía térmica o de rotación a través de la combustión y una serie de mezclas de combustible con agua, lo que permite al final que los vehículos se desplacen.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-3.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de lubricación
            p Es el encargado de distribuir y lubricar con aceite las piezas móviles que conforman el motor, reduciendo la fricción y evitando el desgaste anticipado entre las superficies, lo compone la bomba de aceite, tuberías, válvulas, el cárter, entre otros.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-4.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de transmisión
            p Este transfiere la potencia generada por el motor a través de engranajes de diferentes tamaños desde el cigüeñal hacia las ruedas y permite un balance en la velocidad y el torque.  Está compuesto por la caja de cambios de velocidades, el embrague, el árbol de transmisión, el grupo cónico-diferencial y los semiejes.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-5.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de dirección
            p Se encarga de permitir al conductor controlar la dirección, transmitiendo movimiento del volante a las llantas. Los componentes funcionan en perfecta coordinación, pues el volante acciona la columna de dirección, el cual va unido a la caja de dirección.  Existen cuatro tipos: mecánica, hidráulica, electrohidráulica y eléctrica.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-6.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de combustible
            p Es muy importante en los motores de combustión interna (esta mezcla se compone de aire, combustible y chispa), este sistema es el encargado de almacenar y convertir el combustible en energía de movimiento.
              br
              br
              |Es un mecanismo de alimentación en los motores. En el caso de los motores de explosión o ciclo Otto los inyectores reemplazan al carburador, mientras que en los vehículos con motor diésel el sistema de inyección se usa de forma obligatoria.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-7.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de suspensión
            p Mantiene el contacto neumático-suelo, que permite la adherencia y las mejoras en otros sistemas del equipo como el frenado y la dirección, aumentando el control sobre el equipo de transporte, además genera en los usuarios desplazamientos confortables. El sistema de suspensión está conformado por amortiguadores, resortes y puntales.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-8.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de frenos
            p Permite la reducción de la fuerza de inercia de las ruedas a través de la fricción. Este sistema es muy importante en términos de seguridad, pero este proceso implica una alta transformación de energía mecánica en energía calórica, en donde la mayor parte es producida en las llantas delanteras.  
              br
              br
              |Actualmente, se encuentran frenos de disco y un poco más en desuso los frenos de tambor. Las áreas de contacto son los discos, pastillas o bandas y campanas, además de la fricción generada entre el suelo y el neumático.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-9.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Sistema de seguridad
            p Está diseñado para minimizar los daños en caso de un accidente y en los vehículos se clasifican en dos grupos; la seguridad pasiva y la seguridad activa, estos desarrollos se han trabajado durante años en pro de mejorar la seguridad vial, en donde se impone cada vez más la tecnología y la normatividad al respecto.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-10.png' style="max-width: 537px")
    p.mb-5 Dentro del sistema de componentes del vehículo se destaca en el sistema motor una clasificación de acuerdo con el trabajo que realizan, si es por energía calórica (motor térmico) o por energía eléctrica (motor eléctrico) y una vez definida esta condición se clasifican como se muestra a continuación:

    h4 Clasificación de los motores

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-1.png')
        h4.text-center Motores de gasolina
        p Obtienen su energía a través la reacción termoquímica de la mezcla de oxígeno y combustible.
      
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-2.png')
        h4.text-center Motores de diésel
        p En este tipo de motores la combustión se genera por la atmósfera de aire caliente en la que el diésel es inyectado.
      
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-3.png')
        h4.text-center Motores eléctricos
        p La energía eléctrica es generada por medio de la inducción electromagnética que se transforma en energía mecánica.
      
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-4.png')
        h4.text-center Motores de GLP (gas licuado de petróleo)
        p La combustión se logra por la inflamación de combustibles alternativos.
      
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-5.png')
        h4.text-center GNC (gas natural comprimido)
        p La combustión se logra por la inflamación de combustibles alternativos.
      
      .tarjeta.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/tema1/sl-6.png')
        h4.text-center Motores híbridos
        p Combinan la energía eléctrica y la energía generada por la combustión de la mezcla de combustible y aire.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
