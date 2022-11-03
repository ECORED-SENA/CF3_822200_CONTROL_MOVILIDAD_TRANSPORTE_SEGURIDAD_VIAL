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
    p.mb-5.col-xl-8 es el material que está en contacto con el producto, su fin es contener dentro de sí el producto en cualquier estado para facilitar el proceso de transporte y que sea fácil y seguro.

    .col-12.col-xl-10.mx-auto.d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-4.px-2.mb-4.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-1.png' style="max-width: 248px")
            p.fw-bold Envase primario:
            p.mb-0 llamado contenedor interior, tiene el contacto con el producto y/o facilita su consumo.
      .col-lg-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-2.png' style="max-width: 248px")
            p.fw-bold Envase secundario:
            p.mb-0 es un contenedor unitario y en su interior se encuentran uno o varios envases primarios.
      .col-lg-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #F3F9FF")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema7/img-3.png' style="max-width: 248px")
            p.fw-bold Envase terciario:
            p.mb-0 permite distribuir, unificar y proteger el producto para su posterior distribución.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Embalaje
    
    p.mb-5.col-xl-8 es el material que recubre y protege los productos para preservar sus características durante la manipulación, el almacenamiento y el traslado. Ver tabla.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Clasificación de los envases y embalajes
    
    .col-12.col-lg-8.col-xl-6.mx-auto.mb-5
      table.mb-4
        tbody
          tr
            td.text-center.fw-bold(rowspan="11" style="width: 20%; background-color: #FFD817; border-color: black;") ENVASE Y EMBALAJE
            td.text-center.fw-bold(rowspan="3" style="width: 30%; background-color: #FFF5C5; border-color: black;") ENVASES
            td(style="width: 50%; background-color: #D5D5D5; border-color: black;") Primario
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Secundario
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Terciario

          tr
            td.text-center.fw-bold(rowspan="3" style="background-color: #FFF5C5; border-color: black;") EMBALAJES
            td(style="background-color: #D5D5D5; border-color: black;") Primario
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Secundario
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Terciario

          tr
            td.text-center.fw-bold(rowspan="5" style="background-color: #FFF5C5; border-color: black;") CRITERIOS CLASIFICACIÓN
            td(style="background-color: #D5D5D5; border-color: black;") Según su uso
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Según su clasificación
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Según su función
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Según su destino final
          tr
            td(style="background-color: #D5D5D5; border-color: black;") Según su contacto con el producto
      .d-flex
        p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de la Aplicación del Decreto 19 de 2012. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Clasificación de las cargas:
    p.mb-5 están clasificadas en 2 grandes tipos, carga general y carga a granel.

    
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
