<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia

    p.mb-5 En Colombia desde hace unos pocos años se ha comenzado a legislar sobre aspectos tan importantes y que afectan tanto la salud como lo es el transporte, el almacenamiento y la manipulación de las sustancias peligrosas, por esto nace el “Decreto 1609 del 31 de Julio de 2002 Manejo y transporte terrestre automotor de mercancías peligrosas por carretera”, cuyo objetivo es establecer los requisitos técnicos y de seguridad para el manejo y el transporte de mercancías peligrosas por carretera en vehículos automotores en todo el territorio nacional, con el fin de minimizar los riesgos, garantizar la seguridad, proteger la vida y el medioambiente.
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 #[b Clasificación de las mercancías peligrosas:] se realiza de acuerdo con el riesgo que presentan y se toma de la Norma Técnica Colombiana NTC 1692 Transporte de mercancías peligrosas. Clasificación, etiquetado y rotulado, los pictogramas que identifican las anteriores clasificaciones de peligro se ilustran a continuación:
    
    p.mb-5 La correcta identificación de los materiales a transportar permite no solo tomar las precauciones apropiadas en su manipulación y transporte, y ante una emergencia proceder de manera apropiada o sencillamente abstenerse de hacerlo al considerar su vida en riesgo. Las mercancías peligrosas se clasifican en las clases, las divisiones, las subdivisiones y los grupos de compatibilidad que se muestran a continuación. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Clase 1 – Explosivos
    
    TabsA.color-acento-contenido.mb-5
      .d-flex.flex-wrap(titulo="División 1.1")
        .col-md-7.d-flex.pe-md-4
          .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
            h4 División 1.2
            p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa. 
        img.col-md-5(src="@/assets/curso/temas/tema8/img-2.png")
      
      .d-flex.flex-wrap(titulo="División 1.2")
        .col-md-7.d-flex.pe-md-4
          .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
            h4 División 1.2
            p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa. 
        img.col-md-5(src="@/assets/curso/temas/tema8/img-2.png")
      
      .d-flex.flex-wrap(titulo="División 1.3")
        .col-md-7.d-flex.pe-md-4
          .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
            h4 División 1.2
            p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa. 
        img.col-md-5(src="@/assets/curso/temas/tema8/img-2.png")
      
      .d-flex.flex-wrap(titulo="División 1.4")
        .col-md-7.d-flex.pe-md-4
          .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
            h4 División 1.2
            p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa. 
        img.col-md-5(src="@/assets/curso/temas/tema8/img-2.png")
      
      .d-flex.flex-wrap(titulo="División 1.5")
        .col-md-7.d-flex.pe-md-4
          .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
            h4 División 1.2
            p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa. 
        img.col-md-5(src="@/assets/curso/temas/tema8/img-2.png")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Clase 2 - Gases comprimidos, licuados o disueltos a presión 
    
    .d-flex.flex-wrap.justify-content-center.align-items-center.mb-5
      .px-2.mb-3(style="min-width: 210px")
        p.fw-bold.text-center.mb-0.p-4(style="background-color: #F88F05") División 2.1
        p.text-center.mb-0.p-4(style="background-color: #DEE4F0") Gases no inflamables
      
      .px-2.mb-3(style="min-width: 210px")
        p.fw-bold.text-center.mb-0.p-4(style="background-color: #F88F05") División 2.2
        p.text-center.mb-0.p-4(style="background-color: #DEE4F0") Gases inflamables 
      
      .px-2.mb-3(style="min-width: 210px")
        p.fw-bold.text-center.mb-0.p-4(style="background-color: #F88F05") División 2.3
        p.text-center.mb-0.p-4(style="background-color: #DEE4F0") Gases tóxicos
    
    .mb-5.p-4.px-xl-0(style="background-color: #FFF5C5")
      .d-flex.flex-wrap.col-xl-10.mx-auto
        p.fw-bold.col-lg.order-2.order-lg-1 Clase 3 - Líquidos inflamables
          br
          |Clase 4- Sólidos inflamables
          br
          |Clase 5 - Sustancias (agentes) comburentes y peróxidos orgánicos 
          br
          |Clase 6 - Sustancias venenosas (tóxicas) y sustancias infecciosas 
          br
          |Clase 7 - Materiales radioactivos 
          br
          |Clase 8 - Sustancias corrosivas 
          br
          |Clase 9 - Sustancias y artículos peligrosos varios
        img.order-1.order-lg-2.mb-4.mb-lg-0.mx-auto(src="@/assets/curso/temas/tema8/img-3.svg" style="max-width: 325px;")
    
    p.mb-5 #[b Etiquetado:] el etiquetado y rotulado de las mercancías peligrosas en Colombia se realiza de acuerdo con las recomendaciones relativas al transporte de mercancías peligrosas formuladas en el Libro Naranja de la Organización de las Naciones Unidas y como se mencionó anteriormente en la Norma Técnica Colombiana NTC 1692 bajo los siguientes parámetros:

    .flex-wrap.d-none.d-lg-flex.mb-5
      LineaTiempoD.col-lg-6.col-xl-4.pe-lg-3.color-acento-contenido
        p.text-small(numero="1" titulo="Primer paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="2" titulo="Segundo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="3" titulo="Tercer paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="4" titulo="Cuarto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="5" titulo="Quinto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="6" titulo="Sexto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="7" titulo="Séptimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      img.d-none.d-xl-flex.col-xl-4(src="@/assets/curso/temas/tema8/img-4.png")
      LineaTiempoD.col-lg-6.col-xl-4.ps-lg-3.color-acento-contenido
        p.text-small(numero="8" titulo="Octavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="9" titulo="Noveno paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="10" titulo="Décimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="11" titulo="Undécimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="12" titulo="Doceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="13" titulo="Treceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
        p.text-small(numero="14" titulo="Catorceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
    
    LineaTiempoD.d-block.d-lg-none.color-acento-contenido.mb-5
      p.text-small(numero="1" titulo="Primer paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="2" titulo="Segundo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="3" titulo="Tercer paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="4" titulo="Cuarto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="5" titulo="Quinto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="6" titulo="Sexto paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="7" titulo="Séptimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="8" titulo="Octavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="9" titulo="Noveno paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="10" titulo="Décimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="11" titulo="Undécimo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="12" titulo="Doceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="13" titulo="Treceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      p.text-small(numero="14" titulo="Catorceavo paso") Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.

    p.mb-5.pb-5 #[b Grupos de compatibilidad:] las letras identifican los explosivos que están considerados compatibles, es decir, si pueden ser transportados juntos sin aumentar significativamente, ya sea la probabilidad de un incidente o por una cantidad determinada, la magnitud de los efectos de tal incidente.

    .d-flex.flex-wrap.align-items-stretch
      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.mx-auto.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-5.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que se espera que exploten en masa, que detonan muy pronto después de que el fuego las alcanza.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-6.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que se encienden inmediatamente y se queman violentamente sin explotar necesariamente. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-7.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que pueden explotar en masa acompañadas por un estallido y con peligro de fragmentos; pero que pueden estar expuestas al fuego por algún tiempo antes de explotar.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-8.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que arden sin peligro de explosión masiva y que despiden humo muy denso con efectos tóxicos en ciertos casos. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.mx-auto.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-9.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que contienen materiales tóxicos.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-10.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias que presentan un riesgo especial y que pueden activarse ya sea por el aire (pirofórico) o por el agua.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-11.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 artículos que contienen solamente sustancias detonantes extremadamente insensibles y que demuestran una insignificante probabilidad de iniciación o propagación. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-12.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 sustancias empacadas que, si se inician accidentalmente, producen efectos que usualmente están confinados a los alrededores donde se encuentran.
    .tarjeta.p-4.py-lg-5.mb-5(style="background-color: #F3F9FF")
      p.col-xl-10.mx-auto.mb-0 En todas las demás etiquetas y rótulos el número de la clase de mercancía debe figurar en su ángulo inferior. Para los rótulos (250 mm x 250 mm) dicho número debe tener una dimensión como mínimo de 25 mm de altura. Además de la anterior clasificación, existen otras marcas: marca de contaminante acuático, rótulo de temperatura elevada, rótulo de advertencia de fumigación, etiquetas de riesgos secundarios, etiquetas de manipulación, por ejemplo, la etiqueta de manipulación para “líquidos criogénicos” debe ser utilizada además de la etiqueta de riesgo de gas no inflamable de la división 2.2 en todos los embalajes que contengan líquidos criogénicos.
    
    p.mb-5 #[b Número de Naciones Unidas:] son cuatro dígitos precedidos de la sigla UN usados para identificar a los materiales durante su transporte. Un número puede identificar a un producto o grupo de ellos que compartan las mismas características, por ejemplo, pesticidas organofosforados.

    .d-flex.flex-wrap.mb-5
      p.mb-0.d-flex.align-items-center.order-2.order-lg-1.col-lg-6.p-4.p-md-5(style="background-color: #DEE4F0") Normalmente para el transporte de materiales peligrosos el número UN se coloca debajo del rombo o pictograma dentro de un recuadro naranja con números escritos en negro. Este rótulo se ubicará en las caras visibles de la unidad de transporte y la parte delantera de la cabina del vehículo de transporte de carga, por ejemplo, ácido acético según el código UN en unidades de transporte.
      img.col-lg-6.order-1.order-lg-2(src='@/assets/curso/temas/tema8/img-13.svg')
    
    p.mb-5.col-lg-8 Documentos: En términos generales, los documentos marítimos, aéreos, terrestres, fluviales o ferroviarios, que el transportador respectivo, el agente de carga internacional o el operador de transporte multimodal entrega como certificación del contrato de transporte y recibo de la mercancía al consignatario, a continuación se relacionan algunos de ellos: 

    .d-flex.flex-wrap.align-items-center.mb-5
      AcordionA.col-xl-7.order-2.order-xl-1.pe-xl-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Titulo item 1")
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      img.col-xl-5.order-1.order-lg-2(src='@/assets/curso/temas/tema8/img-14.png')

    p.col-xl-10.mx-auto.p-4.p-lg-5(style="background-color: #F3F9FF") Una herramienta de entrenamiento y referencia para los transportadores.  Un recurso para los procedimientos de emergencia. Los títulos y el orden específico de una tarjeta de emergencia para el transporte de mercancías peligrosas son:
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

<style lang="sass">
.bloque-texto-g
  .bloque-texto-g__img
    width: 451px
  .bloque-texto-g__texto
    width: 70%
  @media (max-width: 991px)
    .bloque-texto-g__img
      width: 100%
    .bloque-texto-g__texto
      width: 100%
.tabs-a
  .tabs-a__tab
    background-color: #E8E8E8
</style>
