<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia

    p.mb-5 En Colombia desde hace unos pocos años se ha comenzado a legislar sobre aspectos tan importantes y que afectan tanto la salud como lo es el transporte, el almacenamiento y la manipulación de las sustancias peligrosas, por esto nace el #[b “Decreto 1609 del 31 de Julio de 2002 Manejo y transporte terrestre automotor de mercancías peligrosas por carretera”], cuyo objetivo es establecer los requisitos técnicos y de seguridad para el manejo y el transporte de mercancías peligrosas por carretera en vehículos automotores en todo el territorio nacional, con el fin de minimizar los riesgos, garantizar la seguridad, proteger la vida y el medioambiente.
    
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
    .d-flex.flex-wrap.align-items-start.mb-5
      TabsA.color-acento-contenido.col-xl-8.order-2.order-xl-1
        .d-flex.flex-wrap(titulo="División 1.1")
          .pe-md-4
            .tarjeta.p-4.p-md-5.w-100(style="background-color: #DEE4F0")
              h4 División 1.1
              p Sustancias y artículos que presentan un riesgo de explosión de toda la masa.
        
        .d-flex.flex-wrap(titulo="División 1.2")
          .pe-md-4
            .tarjeta.p-4.p-md-5.w-100(style="background-color: #DEE4F0")
              h4 División 1.2
              p Sustancias y artículos que presentan un riesgo de explosión de proyección; pero no un riesgo de explosión de toda la masa.
        
        .d-flex.flex-wrap(titulo="División 1.3")
          .pe-md-4
            .tarjeta.p-4.p-md-5.w-100(style="background-color: #DEE4F0")
              h4 División 1.3
              p Sustancias y artículos que presentan un riesgo de incendio y que se produzcan pequeños efectos de onda de choque o proyección, o ambos efectos; pero no un riesgo de explosión de toda la masa.
        
        .d-flex.flex-wrap(titulo="División 1.4")
          .pe-md-4
            .tarjeta.p-4.p-md-5.w-100(style="background-color: #DEE4F0")
              h4 División 1.4
              p Sustancias y artículos que no presentan ningún riesgo considerable.
        
        .d-flex.flex-wrap(titulo="División 1.5")
          .pe-md-4
            .tarjeta.p-4.p-md-5.w-100(style="background-color: #DEE4F0")
              h4 División 1.5
              p Sustancias muy sensibles; agentes explosivos.

        .d-flex.flex-wrap(titulo="División 1.6")
          .pe-md-4
            .tarjeta.p-4.p-md-5(style="background-color: #DEE4F0")
              h4 División 1.6
              p Sustancias muy sensibles; agentes explosivos.
      img.col-xl-4.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema8/img-2.png")
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
        img.order-1.order-lg-2.mb-4.my-lg-auto.mx-auto(src="@/assets/curso/temas/tema8/img-3.png" style="max-width: 545px;")
    
    p.mb-5 #[b Etiquetado:] el etiquetado y rotulado de las mercancías peligrosas en Colombia se realiza de acuerdo con las recomendaciones relativas al transporte de mercancías peligrosas formuladas en el Libro Naranja de la Organización de las Naciones Unidas y como se mencionó anteriormente en la Norma Técnica Colombiana NTC 1692 bajo los siguientes parámetros:

    .position-relative.col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema8/img-4.png")
      .container-card-hover.container-card-hover-1(@mouseover="indicadorTarjeta = false")
        .indicador--hover(v-if="indicadorTarjeta")
        .card-left-edit.p-4
          p.mb-0 Las etiquetas para los bultos no deben tener un tamaño menor de 100 mm x 100 mm.
      .container-card-hover.container-card-hover-2
        .card-left-edit.p-4
          p.mb-0 Las etiquetas deben tener una línea del mismo color que el símbolo, a 5 mm del borde de las mismas en todo el perímetro.
      .container-card-hover.container-card-hover-3
        .card-left-edit.p-4
          p.mb-0 Los rótulos para los vehículos y los contenedores no deberán ser menores de 250 mm x 250 mm.
      .container-card-hover.container-card-hover-4
        .card-left-edit.p-4
          p.mb-0 Se colocarán rótulos en las paredes externas de las unidades de transporte para advertir que las mercancías transportadas son peligrosas y presentan riesgo. Los rótulos corresponderán al riesgo principal de las mercancías peligrosas contenidas en la unidad de transporte.
      .container-card-hover.container-card-hover-5
        .card-left-edit.p-4
          p.mb-0 Se deben ubicar rótulos en todas las caras visibles de la unidad de transporte, a una altura que permita su remoción y lectura, uno por cada clase de producto transportado.
      .container-card-hover.container-card-hover-6
        .card-right-edit.p-4
          p.mb-0 El método de marcado de la etiqueta, el rótulo y el nombre técnico correcto tienen que aparecer en los bultos de mercancías peligrosas y deberán garantizar que la información sea identificable en los bultos que hayan permanecido tres meses sumergidos en agua.
      .container-card-hover.container-card-hover-7
        .card-right-edit.p-4
          p.mb-0 La parte superior de la etiqueta y el rótulo se reservará para el símbolo y en la parte inferior se ubicará el texto, el número de la clase o de la división, y si es el caso, la letra del grupo de compatibilidad de la mercancía peligrosa.
      .container-card-hover.container-card-hover-8
        .card-left-edit.p-4
          p.mb-0 Los símbolos, los textos y los números deberán imprimirse en negro en todas las etiquetas y rótulos, excepto en: 
            br
            |a) Las etiquetas y rótulos de la clase 8, en las que el texto y el número de la clase deben figurar en blanco. 
            br
            |b) Las etiquetas y rótulos con fondo rojo, verde o azul, en las que pueden figurar en blanco.
      .container-card-hover.container-card-hover-9
        .card-left-edit.p-4
          p.mb-0 Todas las etiquetas y los rótulos deben poderse exponer a la intemperie, sin degradación notable.
      .container-card-hover.container-card-hover-10
        .card-left-edit.p-4
          p.mb-0 Las etiquetas y los rótulos deben colocarse sobre un fondo de color que contraste con ellos.
      .container-card-hover.container-card-hover-11
        .card-left-edit.p-4
          p.mb-0 En lo posible el rótulo como la etiqueta deben contener el texto indicativo de la clase a la cual pertenecen, por ejemplo, líquido inflamable.
      .container-card-hover.container-card-hover-12
        .card-left-edit.p-4
          p.mb-0 Cuando dentro de una misma carga o cargas adicionales van incluidos dos o más materiales de diferente clase, se deberá colocar un número igual de etiquetas o rótulos de acuerdo con las clases de peligros.
      .container-card-hover.container-card-hover-13
        .card-right-edit.p-4
          p.mb-0 Si la mercancía embalada puede clasificarse en más de una clase la carga deberá portar una etiqueta o rótulo por cada una de las clases en que se pueda agrupar el material, por ejemplo, el ácido acético, su riesgo primario es corrosivo y el riesgo secundario es inflamable.
      .container-card-hover.container-card-hover-14
        .card-right-edit.p-4
          p.mb-0 Las etiquetas y los rótulos de las divisiones 1.4, 1.5 y 1.6 llevarán en la mitad superior el número de la división; en la mitad inferior la letra del grupo de compatibilidad y en el ángulo inferior el número de la clase. Los números deben tener aproximadamente 30 mm de altura x 5 mm de ancho (en las etiquetas de 100 mm x 100 mm).

    p.mb-5.pb-5 #[b Grupos de compatibilidad:] las letras identifican los explosivos que están considerados compatibles, es decir, si pueden ser transportados juntos sin aumentar significativamente, ya sea la probabilidad de un incidente o por una cantidad determinada, la magnitud de los efectos de tal incidente.

    .d-flex.flex-wrap.align-items-stretch
      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.mx-auto.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-5.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que se espera que exploten en masa, que detonen muy pronto después de que el fuego las alcancen.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-6.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que se encienden inmediatamente y se queman violentamente sin explotar necesariamente. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-7.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que pueden explotar en masa acompañadas por un estallido y con peligro de fragmentos; pero que pueden estar expuestas al fuego por algún tiempo antes de explotar.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-8.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que arden sin peligro de explosión masiva y que despiden humo muy denso con efectos tóxicos en ciertos casos. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.mx-auto.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-9.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que contienen materiales tóxicos.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-10.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias que presentan un riesgo especial y que pueden activarse ya sea por el aire (pirofórico) o por el agua.

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-11.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Artículos que contienen solamente sustancias detonantes extremadamente insensibles y que demuestran una insignificante probabilidad de iniciación o propagación. 

      .col-md-6.col-lg-4.col-xl-3.px-2.mb-5.pb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema8/img-12.svg' style="max-width: 96px; margin-top: -70px")
            p.w-100.mb-0 Sustancias empacadas que, si se inician accidentalmente, producen efectos que usualmente están confinados a los alrededores donde se encuentran.
    .tarjeta.p-4.py-lg-5.mb-5(style="background-color: #F3F9FF")
      ul.lista-ul.col-xl-11.mx-auto.mb-0
        li.mb-0
          <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
            <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
          </svg>
          p.mb-0 En todas las demás etiquetas y rótulos el número de la clase de mercancía debe figurar en su ángulo inferior.
        li.mb-0
          <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
            <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
          </svg>
          p.mb-0 Para los rótulos (250 mm x 250 mm) dicho número debe tener una dimensión como mínimo de 25 mm de altura.
        li.mb-0
          <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
            <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
          </svg>
          p.mb-0 Además de la anterior clasificación, existen otras marcas: marca de contaminante acuático, rótulo de temperatura elevada, rótulo de advertencia de fumigación, etiquetas de riesgos secundarios, etiquetas de manipulación, por ejemplo, la etiqueta de manipulación para “líquidos criogénicos” debe ser utilizada además de la etiqueta de riesgo de gas no inflamable de la división 2.2 en todos los embalajes que contengan líquidos criogénicos.
    p.mb-5 #[b Número de Naciones Unidas:] son cuatro dígitos precedidos de la sigla UN usados para identificar a los materiales durante su transporte. Un número puede identificar a un producto o grupo de ellos que compartan las mismas características, por ejemplo, pesticidas organofosforados.

    .d-flex.flex-wrap.mb-5
      p.mb-0.d-flex.align-items-center.order-2.order-lg-1.col-lg-6.p-4.p-md-5(style="background-color: #DEE4F0") Normalmente para el transporte de materiales peligrosos el número UN se coloca debajo del rombo o pictograma dentro de un recuadro naranja con números escritos en negro. Este rótulo se ubicará en las caras visibles de la unidad de transporte y la parte delantera de la cabina del vehículo de transporte de carga, por ejemplo, ácido acético según el código UN en unidades de transporte.
      img.col-lg-6.order-1.order-lg-2(src='@/assets/curso/temas/tema8/img-13.svg')
    
    p.mb-5.col-lg-8 Documentos: en términos generales, los documentos marítimos, aéreos, terrestres, fluviales o ferroviarios, que el transportador respectivo, el agente de carga internacional o el operador de transporte multimodal entrega como certificación del contrato de transporte y recibo de la mercancía al consignatario, a continuación se relacionan algunos de ellos: 

    .d-flex.flex-wrap.align-items-center.mb-5
      AcordionA.col-xl-7.order-2.order-xl-1.pe-xl-4(tipo="a" clase-tarjeta="tarjeta")
        .row(titulo="Manifiesto de carga")
          .col-12.mb-4.mb-md-0
            p En este documento se ampara ante las autoridades de tránsito el transporte de mercancías y, por ello, debe ser portado por el conductor durante todo el recorrido. Es importante tener en cuenta que la vigencia de este es solo por cada recorrido que haga, es decir, cada nuevo trayecto requiere su propio manifiesto de carga expedido por la empresa transportadora, especificando los pormenores de la carga transportada, el vehículo y el valor del flete. En caso de que no lo lleve consigo recibirá un comparendo establecido por la Superintendencia de Puertos y Transporte.
        
        .row(titulo="Hoja de seguridad")
          .col-12.mb-4.mb-md-0
            p Es el documento que describe los riesgos de un material peligroso y suministra información sobre cómo se puede manipular, usar y almacenar el material con seguridad. Debe presentar un resumen de la información de seguridad sobre el material, debe contener información sobre el producto químico e información sobre el proveedor, los componentes químicos o peligrosos, identificación de los peligros, primeros auxilios, medidas para apagar incendios, medidas cuando hay un escape accidental, manipulación y almacenamiento, controles de exposición, protección personal, propiedades físicas, químicas y reactividad. También incluye información toxicológica sobre disposición, transporte y reglamentación. Para su elaboración se deben tener en cuenta los parámetros establecidos en la Norma Técnica Colombiana NTC 4435, este documento no es de porte obligatorio por parte del conductor durante la movilización de la mercancía peligrosa. Como regla general, el lenguaje usado en las hojas de seguridad para los materiales peligrosos debe ser comprensible para la audiencia más amplia.
        
        .row(titulo="Planilla para el transporte de sustancias de uso restringido")
          .col-12.mb-4.mb-md-0
            p Creada mediante la Resolución 4093 de diciembre de 1991 y la Resolución 3700 de 2001, este documento expedido por el Ministerio de Transporte autoriza a un vehículo automotor de carga para que realice el transporte de sustancias catalogadas de uso restringido por la Dirección Nacional de Estupefacientes, ya que se utilizan como precursores químicos para la producción de narcóticos. Esta planilla la solicitará el representante legal del propietario de la sustancia, cumpliendo los requisitos establecidos en la normatividad anteriormente mencionada (#[a(href="" target="_blank") ver marco legal]).
        
        .row(titulo="Remesa terrestre de carga")
          .col-12.mb-4.mb-md-0
            p En este documento el cliente o destinatario deja constancia del recibido de la mercancía, con la opción de anotar observaciones sobre el estado en el que llega la carga, ya sean daños o faltantes y debe contar con la firma y sello del cliente.
        
        .row(titulo="Registro nacional de transporte de carga")
          .col-12.mb-4.mb-md-0
            p Este documento reemplaza a la tarjeta de operación y es el Ministerio de Transporte el ente encargado de registrar a todo propietario o conductor de un vehículo que preste el servicio de carga.
        
        .row(titulo="Tarjeta de emergencia")
          .col-12.mb-4.mb-md-0
            p Es el documento que contiene información básica sobre la identificación del material peligroso y datos del fabricante, identificación de peligros, protección personal y control de exposición, medidas de primeros auxilios, medidas para la extinción de incendios, medidas para el vertimiento accidental, estabilidad y reactividad e información sobre el transporte. Este documento es de porte obligatorio para el conductor que transporta mercancías peligrosas; para su elaboración se debe tener en cuenta los parámetros establecidos en la Norma Técnica Colombiana NTC 4532. Se consideran dos usos principales de las tarjetas de emergencia para el transporte de materiales.
        
      img.col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src='@/assets/curso/temas/tema8/img-14.png' style="max-width: 505px")

    p.col-xl-10.mx-auto.p-4.p-lg-5.mb-5(style="background-color: #F3F9FF") Una herramienta de entrenamiento y referencia para los transportadores.  Un recurso para los procedimientos de emergencia. #[b Los títulos y el orden específico de una tarjeta de emergencia para el transporte de mercancías peligrosas son:]

    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-1.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 1:] identificación del producto químico y de la compañía.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-2.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 2:] identificación de peligros.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-3.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 3:] controles de exposición y protección personal.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-4.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 4:] estabilidad y reactividad.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-5.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 5:] medidas de primeros auxilios.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-6.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 6:] medidas para extinción de incendios.
      
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-3
        .tarjeta.p-3.d-flex.flex-wrap.h-100(style="background-color: #FFF5C5")
          .d-flex.flex-wrap.mb-auto.justify-content-center.w-100
            img.me-auto.mb-3(src='@/assets/curso/temas/tema8/t-7.svg' style="max-width: 85px;")
            p.w-100.mb-0 #[b Sección 7:] medidas en caso de vertidos accidental.

    AcordionA(tipo="a" clase-tarjeta="tarjeta")
      .row(titulo="Plan nacional de contingencias")
        .col-12.mb-4.mb-md-0
          p Las exigencias del Decreto 1609 son precisas y demandantes, este se debe acoplar con el PNC (Plan Nacional de Contingencias), de acuerdo con el Artículo 8 del Decreto 321 de 1999: los lineamientos, principios, facultades y organizaciones establecidos en el PNC deberán ser incorporados en los planes de contingencias de todas las personas naturales y jurídicas, públicas o privadas, que exploren, investiguen, exploten, produzcan, almacenen, transporten, comercialicen o efectúen cualquier manejo de hidrocarburos, derivados o sustancias nocivas, o que tengan bajo su responsabilidad el control y prevención de los derrames en aguas marinas, fluviales o lacustres. Dentro de las premisas básicas del PNC está la acción participativa, en la que se establecen las responsabilidades y los compromisos de orden sectorial, local, regional y nacional para las autoridades e industria, que debe manejarse con los criterios de participación y concertación. Se debe contar con planes de contingencia locales o de ayuda para enfrentar el máximo nivel de riesgo probable. Los comités locales y regionales para la prevención y la atención de desastres apoyarán complementariamente las actividades de respuesta, previstas en ellos.
      
      .row(titulo="Requisitos generales para el transporte por carretera de mercancías peligrosas")
        .col-12.mb-4.mb-md-0
          ul.lista-ul.col-xl-11.mx-auto.mb-0
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 Ningún vehículo automotor que transporte mercancías peligrosas podrá transitar por las vías públicas con carga que sobresalga por su extremo delantero.
            
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 Todos los vehículos que transporten materiales peligrosos (materiales perjudiciales que durante la fabricación, manejo, transporte, almacenamiento o uso puedan generar o desprender polvos, humos, gases, líquidos, vapores o fibras infecciosas, irritantes, inflamables, explosivos, corrosivos, asfixiantes, tóxicos o de otra naturaleza peligrosa, o radiaciones ionizantes en cantidades que puedan afectar la salud de las personas que entran en contacto con estas, o que causen daño material) en contenedores por las vías públicas del territorio nacional deben fijarlos al vehículo mediante el uso de dispositivos de sujeción utilizados especialmente para dicho fin, de tal manera que garanticen la seguridad y la estabilidad de la carga durante su transporte.
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 Cada contenedor debe estar asegurado al vehículo por los dispositivos necesarios, los cuales estarán dispuestos, como mínimo, en cada una de las cuatro esquinas del contenedor.
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 Cuando un cargamento incluya mercancías no peligrosas y mercancías peligrosas que sean compatibles, estas deben ser estibadas separadamente.
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 Para el transporte de MP se debe cumplir con los requisitos mínimos tales como: la carga en el vehículo debe estar debidamente acomodada, estibada, apilada, sujeta y cubierta, de tal forma que no represente peligro para la vida de las personas y el medioambiente; que se arrastre en la vía, no caiga sobre esta, no interfiera la visibilidad del conductor, no comprometa la estabilidad o conducción del vehículo, no oculte las luces, incluidas las de frenado, direccionales y las de posición, así como tampoco los dispositivos y rótulos de identificación reflectivos y las placas de identificación del número de las Naciones Unidas UN de la mercancía peligrosa transportada.
            li.mb-0
              <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
              </svg>
              p.mb-0 La clasificación y designación, las condiciones generales para el transporte, así como las condiciones específicas para el transporte de mercancías peligrosas establecidas en cada Norma Técnica NTC son de obligatorio cumplimiento.
      
      .row(titulo="<em>Kit</em> de emergencia")
        .col-12.mb-4.mb-md-0
          p Como se anotó anteriormente, la legislación exige que todos los vehículos que transporten materiales peligrosos deben dotarse de los elementos necesarios que permitan atender un derrame. Este #[em kit] puede constar de material absorbente, pala no metálica, diques de contención (los cuales pueden construirse con los absorbentes), un recipiente para recolectar el desecho y cinta demarcadora para aislar la zona del derrame. Algunas empresas transportadoras utilizan tela asfáltica para evitar que el material derramado sobre la grama se absorba.
    
    .d-flex.flex-wrap.align-items-center
      img.mb-4.mb-xl-0.col-xl-5.mx-auto(src='@/assets/curso/temas/tema8/img-15.png' style="max-width: 505px;")
      p.col-xl-7.mb-0.ps-xl-4 Los elementos de protección personal no hacen parte del kit, pero deben incluirse en el equipo del vehículo. 
        br
        br
        |La empresa transportadora puede armar su kit dentro de una caneca plástica o metálica, de acuerdo con el material transportado, con tapa hermética, dentro de esta se pueden guardar los implementos y posteriormente almacenar el desecho; el absorbente puede ser vermiculita, chemizorb, sílica u otro. La arena es un absorbente muy común pero su capacidad de absorción es menor que la de los productos comerciales, por lo que debe usarse más arena que absorbente comercial para retener la misma cantidad de material. 
        br
        br
        |#[b En Colombia se pueden adquirir los kit para los derrames en carretera y contienen los implementos básicos necesarios hasta para retener 90 galones.]
    .d-flex
      p.mb-5.px-4.py-2.w-100(style="background-color: #E8E8E8;") Nota. Tomado de ARL SURA en #[a(href="https://www.arlsura.com/pag_serlinea/distribuidores/doc/documentacion/transporte_quimico.pdf" target="_blank") https://www.arlsura.com/pag_serlinea/distribuidores/doc/documentacion/transporte_quimico.pdf]
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjeta: true,
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
.container-card-hover
  position: absolute
  width: 100%
  &-1
    width: 12%
    height: 37%
    top: 6.5%
    left: 2%
  &-2
    width: 12%
    height: 37%
    top: 6.5%
    left: 16%
  &-3
    width: 12%
    height: 37%
    top: 6.5%
    left: 30%
  &-4
    width: 12%
    height: 37%
    top: 6.5%
    left: 44%
  &-5
    width: 12%
    height: 37%
    top: 6.5%
    left: 58%
  &-6
    width: 12%
    height: 37%
    top: 6.5%
    left: 72%
  &-7
    width: 12%
    height: 37%
    top: 6.5%
    left: 86%
  &-8
    width: 12%
    height: 37%
    top: 51%
    left: 2%
  &-9
    width: 12%
    height: 37%
    top: 51%
    left: 16%
  &-10
    width: 12%
    height: 37%
    top: 51%
    left: 30%
  &-11
    width: 12%
    height: 37%
    top: 51%
    left: 44%
  &-12
    width: 12%
    height: 37%
    top: 51%
    left: 58%
  &-13
    width: 12%
    height: 37%
    top: 51%
    left: 72%
  &-14
    width: 12%
    height: 37%
    top: 51%
    left: 86%
  .card-left-edit, .card-right-edit
    display: none
    z-index: 3
  &:hover
    .card-left-edit
      display: flex
      position: absolute
      top: calc(100% + 16px)
      left: 0
      width: 100%
      min-width: 357px
      height: auto
      background-color: #DEE4F0
      border-radius: 12px
      border: 1px solid #919191
      &::after
        content: url('../assets/curso/temas/tema8/row.svg')
        position: absolute
        width: 33px
        height: 33px
        left: 13%
        top: -19px
        @media (max-width: 1400px)
          left: 10%
        @media (max-width: 991px)
          left: 7%
    .card-right-edit
      display: flex
      position: absolute
      top: calc(100% + 16px)
      left: -200%
      width: 100%
      min-width: 357px
      height: auto
      background-color: #DEE4F0
      border-radius: 12px
      border: 1px solid #919191
      &::after
        content: url('../assets/curso/temas/tema8/row.svg')
        position: absolute
        width: 33px
        height: 33px
        left: 82%
        top: -19px
        @media (max-width: 1400px)
          left: 70%
        @media (max-width: 991px)
          left: 75%
@media (max-width: 991px)
  .container-card-hover
    &-1:hover, &-2:hover, &-3:hover, &-4:hover, &-5:hover, &-6:hover, &-7:hover
      .card-left-edit, .card-right-edit
        top: 260%
        width: 65vw
        min-width: 100%
        &::after
          content: ''
    &-8:hover, &-9:hover, &-10:hover, &-11:hover, &-12:hover, &-13:hover, &-14:hover
      .card-left-edit, .card-right-edit
        top: 140%
        width: 65vw
        min-width: 100%
        &::after
          content: ''
    &-1:hover .card-left-edit , &-8:hover .card-left-edit
      left: -15%
    &-2:hover .card-left-edit, &-9:hover .card-left-edit
      left: -132%
    &-3:hover .card-left-edit, &-10:hover .card-left-edit
      left: -249%
    &-4:hover .card-left-edit, &-11:hover .card-left-edit
      left: -366%
    &-5:hover .card-left-edit, &-12:hover .card-left-edit
      left: -483%
    &-6:hover .card-right-edit, &-13:hover .card-right-edit
      left: -599%
    &-7:hover .card-right-edit, &-14:hover .card-right-edit
      left: -716%
@media (max-width: 991px)
  .container-card-hover
    &-1:hover, &-2:hover, &-3:hover, &-4:hover, &-5:hover, &-6:hover, &-7:hover, &-8:hover, &-9:hover, &-10:hover, &-11:hover, &-12:hover, &-13:hover, &-14:hover
      .card-left-edit, .card-right-edit
        width: 79vw
.acordion
  .tarjeta
    background-color: #F6F6F6
    transition: all .3s linear
  .acordion__activo
    background-color: #E8E8E8
</style>
