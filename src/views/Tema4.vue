<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad pasiva y activa del vehículo
    
    p.mb-5 El avance tecnológico que se da por los fabricantes de vehículos en materia de seguridad vial está orientado a proteger la vida del conductor, de manera que la seguridad activa y pasiva se clasifica básicamente en dos componentes:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Seguridad Activa" :icono="require('@/assets/curso/temas/tema4/p-1.svg')")
        .row.col-xl-11.mx-auto
          .col-lg-7.order-2.order-lg-1
            h4 Seguridad Activa
            p Son elementos que proporcionan a los equipos de transporte mayor eficacia y mejor comportamiento en estabilidad, todos estos actúan antes de que se produzca un accidente, siempre tratando de evitar que este ocurra. Entre los elementos tenemos:
            ul.lista-ul.mb-3
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El sistema de frenado.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El sistema de dirección.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El sistema de suspensión.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Los neumáticos y su adherencia al suelo.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El sistema de iluminación.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Sistemas de control de estabilidad.
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img-1.png')

      .py-4.py-md-5(titulo="Seguridad Pasiva" :icono="require('@/assets/curso/temas/tema4/p-1.svg')")
        .row.col-xl-11.mx-auto
          .col-lg-7.order-2.order-lg-1
            h4 Seguridad Pasiva
            p Esta tecnología reúne a todos aquellos elementos que reducen los daños al mínimo cuando es inevitable los accidentes ocurra. Entre los elementos tenemos:
            ul.lista-ul.mb-3
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Los cinturones de seguridad.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Los Airbags. Chasis y Carrocería.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Cristales de los parabrisas y laterales.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Reposacabezas.
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img-2.png')
      
      .py-4.py-md-5(titulo="Seguridad activa para motocicletas" :icono="require('@/assets/curso/temas/tema4/p-2.svg')")
        .row.col-xl-11.mx-auto
          .col-lg-7.order-2.order-lg-1
            h4 Seguridad activa para motocicletas
            ul.lista-ul.mb-3
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El ABS.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Control de frenado en curva.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El CBS. Se trata de un sistema combinado de frenos.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Control de presión de neumáticos.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El control de estabilidad.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Control dinámico de tracción.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | El ajuste electrónico de la suspensión.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Iluminación dinámica. 
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img-3.png')
      
      .py-4.py-md-5(titulo="Seguridad pasiva para motocicletas" :icono="require('@/assets/curso/temas/tema4/p-2.svg')")
        .row.col-xl-11.mx-auto
          .col-lg-7.order-2.order-lg-1
            h4 Seguridad pasiva para motocicletas
            ul.lista-ul.mb-3
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Cazadora. Para evitar abrasiones en caso de que el motorista caiga sobre el asfalto.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Guantes.
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | Protecciones de rodilla. 
              li
                <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                  <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                </svg>
                | #[em Neck-brace]. Este collarín ayuda a evitar problemas de cervicales.
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png')
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
