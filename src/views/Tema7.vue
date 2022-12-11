<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tipos de carga, envases y rotulados

    p.mb-5 En el transporte a nivel mundial hay que definir que la carga es un conjunto de bienes o mercancías, que estando embaladas o sin embalar tienen la posibilidad de ser trasladadas de un lugar a otro en el modo de transporte que se defina. Por lo tanto, es importante definir dentro de la carga qué es envase y que es embalaje.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Envase:
    p.mb-5.col-xl-8 Es el material que está en contacto con el producto, su fin es contener dentro de sí el producto en cualquier estado para facilitar el proceso de transporte y que sea fácil y seguro.

    .col-12.col-xl-10.mx-auto.d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-4.px-2.mb-4.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-1.png' style="max-width: 248px")
            p.fw-bold Envase primario:
            p.mb-0 Llamado contenedor interior, tiene el contacto con el producto y/o facilita su consumo.
      .col-lg-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-2.png' style="max-width: 248px")
            p.fw-bold Envase secundario:
            p.mb-0 Es un contenedor unitario y en su interior se encuentran uno o varios envases primarios.
      .col-lg-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-3.png' style="max-width: 248px")
            p.fw-bold Envase terciario:
            p.mb-0 Permite distribuir, unificar y proteger el producto para su posterior distribución.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Embalaje:
    
    p.mb-5.col-xl-8 Es el material que recubre y protege los productos para preservar sus características durante la manipulación, el almacenamiento y el traslado. Ver tabla.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Clasificación de los envases y embalajes
    
    .col-12.col-lg-8.col-xl-6.mx-auto.mb-5
      .table-responsive.mb-4
        table(style="min-width: 522px;")
          tbody
            tr
              td.text-center.fw-bold(rowspan="11" style="width: 20%; background-color: #FFD817; border-color: transparent;") ENVASE Y EMBALAJE
              td.text-center.fw-bold(rowspan="3" style="width: 30%; background-color: #FFF5C5; border-color: transparent; border-bottom: 3px solid white;") ENVASES
              td(style="width: 50%; background-color: #D5D5D5; border-color: transparent;") Primario
            tr
              td(style="background-color: #C7C7C7; border-color: transparent;") Secundario
            tr
              td(style="background-color: #D5D5D5; border-color: transparent; border-bottom: 3px solid white;") Terciario

            tr
              td.text-center.fw-bold(rowspan="3" style="background-color: #FFF5C5; border-color: transparent; border-bottom: 3px solid white;") EMBALAJES
              td(style="background-color: #D5D5D5; border-color: transparent;") Primario
            tr
              td(style="background-color: #C7C7C7; border-color: transparent;") Secundario
            tr
              td(style="background-color: #D5D5D5; border-color: transparent; border-bottom: 3px solid white;") Terciario

            tr
              td.text-center.fw-bold(rowspan="5" style="background-color: #FFF5C5; border-color: transparent;") CRITERIOS CLASIFICACIÓN
              td(style="background-color: #D5D5D5; border-color: transparent;") Según su uso
            tr
              td(style="background-color: #C7C7C7; border-color: transparent;") Según su clasificación
            tr
              td(style="background-color: #D5D5D5; border-color: transparent;") Según su función
            tr
              td(style="background-color: #C7C7C7; border-color: transparent;") Según su destino final
            tr
              td(style="background-color: #D5D5D5; border-color: transparent;") Según su contacto con el producto
      .d-flex
        p.mb-5.px-4.py-2.w-100(style="background-color: #E8E8E8;") Nota. Tomado de la Aplicación del Decreto 19 de 2012. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Clasificación de las cargas:
    p.mb-5 Están clasificadas en 2 grandes tipos, carga general y carga a granel.

    .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.align-items-center.mb-5
      .col-lg-6.px-2.mb-3
        .tarjeta-flip.color-primario.tarjeta-flip-edit(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-4.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color: #FFF5C5")
              h4.text-center.mb-4 Carga general
              p Esta mercancía o productos a pesar de tener diferentes tamaños se pueden contar por unidades y pueden ir sueltos o agrupados de diversas maneras, así:
              p.col-10.mx-auto #[b Carga fraccionada:] cuando la carga se transporta en sacos, cajas o paquetes.
                br
                br
                |#[b Carga unitarizada:] la carga va agrupada en paquetes de mayor volumen, en estibas o contenedores.
        h4.p-4.text-center(style="background-color: #FFD817") Carga general
      .col-lg-6.px-2.mb-3
        .tarjeta-flip.color-primario.tarjeta-flip-edit
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-5.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color: #FFF5C5")
              h4.text-center.mb-4 Carga a granel
              p Esta mercancía o productos se transportan sin envase, sin ser empaquetados, en su forma original, como el carbón, la arena, los cereales, etc.  Esta carga se puede clasificar de la siguiente manera:
              ul.lista-ul.mb-3
                li
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  p #[b Carga a granel sólida:] el producto es sólido, como las harinas o los cereales.
                li
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  p #[b Carga a granel líquida:] el producto es líquido, como el agua o el petróleo.
                li
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  p #[b Carga a granel gaseosa:] el producto se encuentra en estado gaseoso, como el gas.
        h4.p-4.text-center(style="background-color: #FFD817") Carga a granel 
      .col-12.px-2
        .p-4(style="background-color: #FFF5C5")
          p.fw-bold.mb-3 Otras clasificaciones de las cargas
          p.mb-4 De acuerdo con otros parámetros se pueden clasificar así:
          ul.lista-ul.mb-3
            li
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p #[b Según su volumen en:] pequeñas y medianas (son manipulables manualmente), grandes (requieren manejo de estibas y con montacargas) y cargas extradimensionadas.
            
            li
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p #[b Según su peso en:] ligeras (menor a 5 kilogramos), medianas (entre 5 y 25 kilogramos por carga), pesadas (entre 25 kg a 1000 kg) y muy pesadas (superior a 1000 kg).
            
            li
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p #[b Según su vida útil:] perecedera (vida útil limitada o con caducidad) y carga imperecedera.
            
            li
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p #[b Según su resistencia:] resistentes (permiten el apilamiento y otras cargas encima), cargas ligeras (permiten el apilamiento limitado) y frágiles (manipulación cuidadosa, almacenamiento individual).
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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

<style lang="sass">
.tarjeta-flip-edit
  aspect-ratio: 50/46
  max-width: 494px
  @media (max-width: 1400px)
    aspect-ratio: auto
</style>
