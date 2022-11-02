<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Funcionamiento de testigos de los equipos
    
    p.mb-5 Los testigos en las unidades de transporte son pictogramas codificados que están ubicados en el tablero de instrumentos, tienen como objetivo principal dar aviso sobre el funcionamiento de los sistemas y los dispositivos del vehículo y, alertar sobre una falla o avería en los mismos.
    
    .d-flex.flex-wrap.mb-5
      img.col-xl-6(src='@/assets/curso/temas/tema2/img-1.jpg')
      .col-xl-6.p-4(style="background-color: #FFD817")
        h4 Símbolos testigos de los equipos
        p Los testigos pueden tener 3 colores de acuerdo con la información que transmiten, los de color verde son informativos de los elementos que pueden estar funcionando en el momento de la conducción; los de color naranja indican que cuando se detenga el vehículo se revise adecuadamente y los testigos de color rojo son de atención inmediata, con estos dos últimos es probable que se requiera atención mecánica especializada, en algunas ocasiones una vez reparada la falla genera que el testigo se encienda, por tanto, se debe escanear para que esta se desactive. Los vehículos modernos vienen con testigos digitales y conectados.
    
    p.mb-5 Cuando los testigos se iluminan el operador de la unidad de transporte debe detenerse en un lugar que no genere accidentes en la vía y que permita realizar la inspección. 
      br
      br
      |#[b Es importante examinar el color del testigo encendido a continuación se revisará el funcionamiento de los testigos rojos: ]

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-1.png')
        h4.text-center Batería con signo de más y menos
        p Este dibujo indica una falla en el sistema de carga o en la batería.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-2.png')
        h4.text-center Gotero con una gota
        p Anuncia que se debe revisar la presión del aceite y evaluar la cantidad o cambio.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-3.png')
        h4.text-center Circulo entre paréntesis con un signo de admiración en medio
        p Este testigo es uno de los que más debe tenerse presente, es un aviso sobre la falla en el sistema de frenos o también puede mostrar que está transitando con el freno de mano puesto.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-4.png')
        h4.text-center Timón
        p Indica fallas en la dirección del automóvil.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-5.png')
        h4.text-center Termómetro
        p Este dibujo anuncia la elevación de la temperatura en el vehículo o la falta de líquido refrigerante.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-6.png')
        h4.text-center Individuo con el cinturón de seguridad
        p Este dibujo indica que hay uno de los ocupantes sin el cinturón abrochado.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-7.png')
        h4.text-center Auto con puertas abiertas
        p Este icono informa que alguna puerta de pasajero del auto o el baúl está abierta.


    p.mb-5 Si bien es importante identificar el funcionamiento de los testigos rojos se reconoce que no son los únicos existentes en el tablero de instrumentos, entonces, qué ocurre con los testigos de color amarillo, identifique su función en el siguiente recurso: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-1.png')
        h4.text-center Circulo con líneas a los lados
        p Este dibujo es informa al piloto sobre el desgaste de las pastillas de freno.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-2.png')
        h4.text-center Motor
        p Este testigo encendido muestra que hay una falla en el motor.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-3.png')
        h4.text-center Circulo con las letras ABS en el interior
        p Anuncia un fallo en el sistema de frenos ABS.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-4.png')
        h4.text-center Individuo sentado con un círculo en frente
        p Este testigo informa sobre el fallo en o desconexión de alguna de las bolsas de aire (Air bag) del vehículo.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-5.png')
        h4.text-center Dispensador de gasolina
        p Informa sobre el nivel bajo de la gasolina en el vehículo.
      
      .tarjeta.w-100.p-4(style="background-color: #FFF5C5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/sl1-6.png')
        h4.text-center Vidrio con líneas punteadas
        p Avisa que el nivel del tanque del limpiaparabrisas está bajo y debe llenarse.

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
