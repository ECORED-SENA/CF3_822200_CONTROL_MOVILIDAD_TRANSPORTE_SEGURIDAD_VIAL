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
            h4 Transporte marítimo 
            p Su superficie deslizante es el mar y se realiza mediante barcos de carga y otras naves de características similares. Existe una división y es el transporte fluvial y el cabotaje. Es el transporte más económico por su beneficio costo / volumen.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema9/img-1.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Transporte por carretera
            p Su superficie son las vías y la infraestructura de carreteras, empleando camiones y otras unidades de transporte sobre ruedas, capaces de movilizarse de diversos orígenes y destinos.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema9/img-2.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Transporte por ferrocarril
            p Se moviliza a través de redes férreas, puede alcanzar velocidades importantes y transportar a largas distancias, siempre que la infraestructura lo permita.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema9/img-3.png' style="max-width: 537px")
        
        .row.flex-wrap.col-xl-11.mx-auto
          .col-lg-6.mb-4.mb-md-0.pt-3.order-2.order-lg-1
            h4 Transporte aéreo
            p Se basa en infraestructura como aeropuertos, aeródromos, con vehículos tipo avión con todas sus modalidades en funcionamiento. Su capa de carga siempre será menor a un mayor costo.
          .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/temas/tema9/img-4.png' style="max-width: 537px")
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.col-xl-6.pe-lg-4.order-2.order-lg-1
        p Una vez definido lo anterior surge el transporte multimodal, articulando diferentes modos de transporte, generalmente con unidades estándar para la carga, los más utilizados en la actualidad son los contenedores de 20” y de 40”.
          br
          br
          |Los medios de transporte se refieren a los vehículos que se requieren por sus características, una vez definido el modo de transporte.
        p.fw-bold A continuación se muestra un comparativo de las ventajas y las desventajas de los diferentes modos de transporte:

        p Ventajas y desventajas en los aviones de carga para el transporte de mercancías: la principal ventaja del transporte aéreo es su velocidad; un avión puede recorrer en un día la misma distancia que recorre un barco en 24 días, revise otras de estas:
      img.mx-auto.ms-xl-0.mb-4.mb-lg-0.col-lg-5.col-xl-5.order-1.order-lg-2(src='@/assets/curso/temas/tema9/img-5.png' style="max-width: 537px")

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr(style="background-color: #FFF3BD;")
            th(style="width: 20%;") TRANSPORTE AÉREO
            th(style="width: 20%;") TRANSPORTE MARÍTIMO
        tbody
          tr
            td.px-5 #[b Rapidez]
              br
              |El transporte aéreo constituye la modalidad de transporte más rápida en términos de velocidad.

            td.px-5 #[b Tipos de carga]
              br
              |El transporte aéreo solo se maneja la mensajería y mercancías de alto valor o de envío urgente.
          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Documentación]
              br
              |Es muy sencilla y se encuentra en la actualidad totalmente normalizada.

            td.px-5 #[b Factores externos]
              br
              |Se generan retrasos en el tiempo de entrega de la mercancía por las condiciones del clima, por ejemplo,  el mal tiempo retrasa el vuelo a tiempo
          tr
            td.px-5 #[b Competitividad]
              br
              |Brinda reducción en los gastos generales, adecuado para transportar mercancías perecederas o de alto valor a través de largas distancias.

            td.px-5 #[b Limitaciones]
              br
              |La IATA posee en la actualidad un pliego de materiales considerados como peligrosos, que no pueden ser transportados por ningún motivo a través de esta modalidad.  
          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Cobertura]
              br
              |Presenta una gran cantidad de conexiones y rutas a nivel mundial para el transporte de carga. Ruta corta y directa.

            td.px-5 #[b Capacidad y costo]
              br
              |Es la modalidad que presenta una taza decorada, por lo tanto, no es competitiva. No posee una gran capacidad debido al volumen y cantidad de mercancía y de productos peligrosos.
          tr
            td.px-5 #[b Seguridad]
              br
              |Los índices de seguridad en el transporte aéreo son mejores que los otros modos.

            td.px-5



    p.mb-5 Ventajas y desventajas en los buques de carga internacional: una ventaja es que tienen diferentes rutas por todo el mundo, una desventaja es que la meteorología puede afectar este tipo de transporte; explore otras de ellas a continuación:

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr(style="background-color: #FFF3BD;")
            th(style="width: 20%;") TRANSPORTE MARÍTIMO
            th(style="width: 20%;") TRANSPORTE AÉREO
        tbody
          tr
            td.px-5 #[b Capacidad]
              br
              |Los barcos son transportes que permiten la  carga del mayor volumen y tonelaje de mercancías.

            td.px-5 #[b Falta de accesibilidad]
              br
              |Esta característica se presenta generalmente en aquellos países en donde la infraestructura construida y disponible para el tránsito de mercancía es muy limitada.
          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Estabilidad]
              br
              |Genera una mayor estabilidad, ya que es poco afectado por las condiciones climáticas que muchas veces pueden retrasar la entrada y salida de medios (aéreo).

            td.px-5 #[b Frecuencia]
              br
              |Los buques de carga presentan un ritmo limitado, dado los tiempos de preparación de la carga a su interior y el peso que llevan en su interior.

          tr
            td.px-5 #[b Costo]
              br
              |Hay que destacar eI bajo costo que poseen los fletes marítimos (aunque pueden generarse recargos por combustible o de otro tipo), en comparación con los otros medios.

            td.px-5 #[b Velocidad]
              br
              |Posee las velocidades más lentas, de incluso 25 km/h para los buques portacontenedores de categoría triple E.

          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Flexibilidad]
              br
              |Permite el transporte de cualquier elemento como incluso líquidos, petróleo y artículos peligrosos.

            td.px-5


    p.mb-5 Los tipos de transporte de camiones de carga terrestre se clasifican de acuerdo con la mercancía que pueden trasladar, las dimensiones o la estructura, entre otras cosas. Ahora, se identifican las ventajas y desventajas del transporte de mercancía en los camiones de carga (mulas y dobletroques):

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Transporte terrestre internacional
    
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr(style="background-color: #FFF3BD;")
            th(style="width: 20%;") TRANSPORTE MARÍTIMO
            th(style="width: 20%;") TRANSPORTE AÉREO
        tbody
          tr
            td.px-5 #[b Versatilidad]
              br
              |El transporte por carretera permite un acceso más rápido a las instalaciones de los despachadores, embarcadores o   destinatarios,   agilizando   y facilitando el cargue y el descargue, por ende,  la  entrega segura de lamercancía.

            td.px-5 #[b Capacidad]
              br
              |En este aspecto es la modalidad que menor capacidad ofrece para el traslado de mercancía.

          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Prontitud]
              br
              |Derivado de los dos aspectos anteriores, los tiempos de espera (salvo graves inconvenientes de orden natural o social). Las partidas y llegadas de los camiones de un determinado origen y destino pueden fijarse con una relativa exactitud.

            td.px-5 #[b Distancias]
              br
              |Como ya se mencionó en lo relativo a grandes distancias y limitaciones internacionales el transporte terrestre pierde toda ventaja respecto a cualquiera de las otras modalidades
          
          tr
            td.px-5 #[b Accesibilidad]
              br
              |La facilidad de ingreso de esta modalidad a cualquier destino tiene un mayor porcentaje de efectividad, dada la agilidad y maniobrabilidad de los vehículos.

            td.px-5 #[b Congestión]
              br
              |En puntos urbanos o de gran afluencia vehicular el transporte terrestre pierde su ventaja de agilidad y maniobrabilidad respecto de las otras formas de transporte, puesto que no cuenta con vías adecuadas para este transporte.
          
          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Seguridad]
              br
              |Es mayor el control y la verificación del estado de la carga, si se requiere, garantizando su óptima entrega.

            td.px-5 #[b Regulación]
              br
              |Este aspecto afecta en mayor porcentaje a los países en vías de desarrollo en donde la normatividad de circulación, el uso de fuentes y el desarrollo de malla vial aún no se encuentran estandarizados.

          tr
            td.px-5 #[b Costo]
              br
              |Suele estar al alcance de quien usa este medio de transporte.

            td.px-5 #[b Contaminación]
              br
              |Este tipo de transporte emite residuos y contaminación, tanto atmosférica como acústica; sin embargo, es un problema que se está tratando de mejorar, incorporando nuevas tecnologías en estos transportes.
    
    p.mb-5 Transportar mercancía en tren o ferrocarril es más barato, más seguro, más eficiente y más amigable con el medioambiente. Una sola locomotora reemplazaría a 30 camiones; sin embargo, es importante reconocer sus ventajas y desventajas:

    .tabla-a.color-acento-botones.mb-3
      table
        thead
          tr(style="background-color: #FFF3BD;")
            th(style="width: 20%;") TRANSPORTE MARÍTIMO
            th(style="width: 20%;") TRANSPORTE AÉREO
        tbody
          tr
            td.px-5 #[b Capacidad]
              br
              |En relación con el transporte terrestre por carretera y el aéreo este presenta una elevada capacidad, tanto en peso como en volumen.

            td.px-5 #[b Flexibilidad]
              br
              |Este medio de transporte se encuentra limitado por la forma y el trayecto de las vías existentes, lo cual se agrava en el entorno internacional en donde estas no se encuentran estandarizadas.  

          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Articulación]
              br
              |Ya que el sistema es fácilmente modificable y se articula con otras modalidades como la marítima.  

            td.px-5 #[b Transbordos]
              br
              |En la mayoría de los casos la mercancía pasa previamente por otro medio de transporte antes de llegar al sistema férreo, lo cual acarrea un incremento en la probabilidad de daño de la mercancía por manipulación.
          
          tr
            td.px-5 #[b Velocidad]
              br
              |El transporte férreo permite el transporte de mercancías a altas velocidades, complementando su gran capacidad.  

            td.px-5 #[b Robos]
              br
              |Dadas las grandes dimensiones y el número de transbordos es muy común que se presenten robos.

          tr(style="background-color: #E8E8E8")
            td.px-5 #[b Documentación]
              |No difiere tanto de la empleada para el transporte de carretera.

            td.px-5

    .d-flex
      p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de studocu (2021).

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
table
  td, th
    border-color: #FFFFFF !important
</style>
