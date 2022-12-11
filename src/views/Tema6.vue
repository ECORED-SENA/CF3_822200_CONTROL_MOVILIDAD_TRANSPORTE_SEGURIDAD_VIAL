<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Características, tipos, clase y vigencia de documentos de la operación, del vehículo y del conductor

    p.mb-5 Es muy importante conocer frente a la normatividad vigente en el país qué documentos son exigibles, dependiendo el proceso que se vaya a revisar, por ello se referencian los siguientes:

    p.fw-bold.mb-5 Los cuatro documentos obligatorios al conducir un vehículo son: 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Licencia de tránsito:
    
    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.col-xl-8.order-2.order-lg-1.pe-lg-4
        .tarjeta.p-4(style="background-color: #FFF5C5")
          p.mb-4 Identifica el vehículo como legal, acredita la propiedad y lo autoriza para transitar por todo el territorio colombiano. #[b Contiene la siguiente información:]
          .d-flex.flex-wrap
            .col-lg-6
              ul.lista-ul.mb-lg-2
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Marca
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Modelo
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Número de pasajeros
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Número de placa
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Cilindraje
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Número de motor
            .col-lg-6
              ul.lista-ul.mb-lg-2
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Número de chasis
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Clase de vehículo
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Tipo de carrocería
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Tipo de combustible
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Color
                li.mb-0
                  <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                    <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
                  </svg>
                  | Nombre completo del propietario
      img.col-lg-5.col-xl-4.order-1.order-lg-2.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema6/img-1.png' style="max-width: 400px")
    p.mb-5 El Código Nacional de Tránsito tiene establecido que en ningún caso se puede circular sin portar la licencia de tránsito, lo cual acarrea multa e inmovilización del vehículo.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Licencia de conducción:
    
    .tarjeta.mb-5.p-4(style="background-color: #FFF5C5")
      p.mb-0 acredita la conducción de vehículos automotores dependiendo de la categoría que se obtenga, #[b como se muestra a continuación:]

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Categorías de licencias de conducción
    .col-xl-10.mx-auto.mb-5.table-responsive
      table(style="min-width: 864px")
        tbody
          tr
            td.text-center(rowspan="2" style="width: 12%; border-color: #535353;") #[b Vehículos]
              br
              |#[b particulares]
            td.text-center(style="width: 22%; background-color: #D5D5D5; border-color: #535353;") #[b MOTOCICLETAS]
            td.text-center(style="width: 22%; background-color: #DEE4F0; border-color: #535353;") A1: motocicletas con cilindrada hasta 125 c.c.
            td.text-center(style="width: 22%; background-color: #E5E0C9; border-color: #535353;") A2: motocicletas y mototriciclos con cilindrada mayor a 125 c.c.
            td.text-center(style="width: 22%; border: none;")
          tr
            td.text-center(style="width: 22%; background-color: #D5D5D5; border-color: #535353;") #[b VEHÍCULOS]
            td.text-center(style="width: 22%; background-color: #DEE4F0; border-color: #535353;") B1: automóviles, motocarros, cuatrimotos, camperos, camionetas y microbuses de servicio particular.
            td.text-center(style="width: 22%; background-color: #E5E0C9; border-color: #535353;") B2: camiones rígidos, busetas y buses de servicio particular.
            td.text-center(style="width: 22%; background-color: #E5DEBF; border-color: #535353;") B3: vehículos articulados de servicio particular.
          tr
            td.text-center(style="width: 12%; border-color: #535353;") #[b Servicio]
              br
              |#[b público]
            td.text-center(style="width: 22%; background-color: #D5D5D5; border-color: #535353;") #[b VEHÍCULOS]
            td.text-center(style="width: 22%; background-color: #DEE4F0; border-color: #535353;") C1: automóviles, camperos, camionetas y microbuses de servicio público.
            td.text-center(style="width: 22%; background-color: #E5E0C9; border-color: #535353;") C2: camiones rígidos, busetas y buses de servicio público.
            td.text-center(style="width: 22%; background-color: #E5DEBF; border-color: #535353;") C3: vehículos articulados de servicio público.
    p.mb-5 No es restrictivo que en la licencia de conducción de mayor categoría se pueda operar vehículos de categoría inferior.
    .d-flex.flex-wrap.align-items-stretch.mb-5.col-xl-10.mx-auto
      .col-lg-6.px-2.mb-4
        img.mb-1(src="@/assets/curso/temas/tema6/img-2.jpg")
        p.fw-bold.mb-0.text-center.p-4.px-lg-5(style="background-color: #FBAB42;") Seguro Obligatorio de Accidentes de
          br
          |Tránsito (SOAT)
        p.p-4.mb-0(style="background-color: #FFF5C5; min-height: 216px") A través de este seguro se ampara los daños a personas que se causen en accidentes de tránsito, cubriendo servicios médicos hasta un máximo de 500 veces el salario mínimo legal diario vigente (SMLV). Para gastos de transporte y movilización de la víctima cubre hasta un máximo de 10 veces el salario mínimo legal diario vigente.
      .col-lg-6.px-2
        img.mb-1(src="@/assets/curso/temas/tema6/img-3.jpg")
        p.fw-bold.mb-0.text-center.p-4.px-lg-5(style="background-color: #FBAB42;") Certificado de revisión técnico-mecánica
          br
          |y de gases
        p.p-4.mb-0(style="background-color: #FFF5C5; min-height: 216px") Este aplica para todos los vehículos y certifica que se encuentran en buenas condiciones, garantizando la seguridad vial a todos los actores viales.

    p.mb-5.fw-bold Los documentos obligatorios que deben portar los conductores que transporten carga son: 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Tarjeta de registro nacional de transporte de carga:
    
    .tarjeta.mb-5.p-4(style="background-color: #FFF5C5")
      p.mb-0 Este documento reemplaza a la tarjeta de operación y es el Ministerio de Transporte el ente encargado de registrar a todo propietario o conductor de un vehículo que preste el servicio de carga. 
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/tema1/icon-titulo.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Manifiesto de carga:
    
    .d-flex.flex-wrap.mb-5
      .col-xl-6.order-2.order-xl-1.pe-xl-4
        .tarjeta.d-flex.align-items-center.h-100.p-4(style="background-color: #FFF5C5")
          p.mb-0 En este documento se ampara ante las autoridades de tránsito el transporte de mercancías y, por ello, debe ser portado por el conductor durante todo el recorrido. Es importante tener en cuenta que la vigencia de este es solo por cada recorrido que haga, es decir, cada nuevo trayecto requiere su propio manifiesto de carga expedido por la empresa transportadora, especificando los pormenores de la carga transportada, el vehículo y el valor del flete. En caso de que no lo lleve consigo recibirá un comparendo establecido por la Superintendencia de Puertos y Transporte.
      img.col-xl-6.order-1.order-xl-2.mb-4.mb-xl-auto.mx-auto(src='@/assets/curso/temas/tema6/img-4.png' style="max-width: 610px")
    p.fw-bold.mb-5 El formato de manifiesto de carga debe contener como mínimo la siguiente información:

    ul.lista-ul.mb-lg-2.col-xl-11.mx-auto.mb-5
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Nombre de la empresa que lo expide.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Nombre e identificación del propietario, remitente y destinatario de las mercancías.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Descripción del vehículo en que se transporta, así como la identificación y dirección del propietario o poseedor y conductor del mismo.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Precio del flete en letras y números.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Lugar y dirección de origen y destino de las mercancías.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Descripción de la mercancía transportada, indicando su peso y/o volumen.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Fecha y lugar del pago del valor del flete.
      li.mb-0
        <svg style="max-width: 14px; margin-right: .5rem; margin-top: .3rem;" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
          <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#f88f05"/>
        </svg>
        | Seguros.

    p.fw-bold.mb-5 A continuación se presenta otra información útil para diligenciar el formato de manifiesto de carga.

    .d-flex.flex-wrap.align-items-stretch.mb-5
      .col-lg-8.col-xl-4.px-2.mb-4.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-5.png' style="max-width: 297px")
            p.text-center.fw-bold Remesa terrestre de carga
            p.mb-0 En este documento el cliente o destinatario deja constancia del recibido de la mercancía, con la opción de anotar observaciones sobre el estado en el que llega la carga, ya sean daños o faltantes y debe contar con la firma y sello del cliente. 
      .col-lg-6.col-xl-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-6.png' style="max-width: 297px")
            p.text-center.fw-bold Otros documentos
            p.mb-0 Además del manifiesto de carga, debe portar durante la conducción los demás documentos que los reglamentos establezcan para el transporte de mercancías de carácter peligroso, restringido o especial.
      .col-lg-6.col-xl-4.px-2.mb-4
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-7.png' style="max-width: 297px")
            p.text-center.fw-bold Titularidad
            p.mb-0 Cuando se realice el servicio particular o privado de transporte terrestre automotor de carga el conductor del vehículo debe exhibir a la autoridad de tránsito y transporte que se lo solicite la correspondiente factura de compraventa de la mercancía y/o remisión, que demuestre que su titularidad corresponde a quien hace este transporte o la prueba de que la carga se generó dentro del ámbito de las actividades de este particular y, que además se es propietario o poseedor del respectivo vehículo.

    p.fw-bold.mb-0 Según el Decreto 19 de 2012 la vigencia de los documentos es: 
    p.mb-5 Para las licencias de conducción la renovación procederá en los siguientes periodos:

    .d-flex.flex-wrap.align-items-center.mb-4
      .col-lg-7
        p.mb-1.py-3.px-4.tarjeta(style="background-color: #FFF5C5") Los conductores de servicio particular con edad inferior a los 60 años deben realizar la renovación de la licencia en 10 años contados a partir de la expedición del Decreto 19 de 2012.
        p.mb-1.py-3.px-4.tarjeta(style="background-color: #F4DE70") Los conductores de servicio particular con edad entre 60 y 80 años deben realizar la renovación de su licencia en 5 años contados a partir de la expedición del Decreto 19 de 2012.
        p.mb-1.py-3.px-4.tarjeta(style="background-color: #FFF5C5") Los conductores de servicio particular con edad superior a 80 años deben realizar la renovación de su licencia 1 año a partir de la expedición del Decreto 19 de 2012.
        p.mb-1.py-3.px-4.tarjeta(style="background-color: #F4DE70") Los conductores de servicio público de edad inferior a 60 años continúan realizando la renovación de su licencia cada 3 años y los conductores con edad superior a 60 años anualmente.
      img.col-lg-5.ms-lg-auto(src='@/assets/curso/temas/tema6/img-8.png' style="max-width: 469px")
    .d-flex
      p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de la Aplicación del Decreto 19 de 2012. 
    p.fw-bold.mb-5 La obligatoriedad de renovar la licencia de conducción de acuerdo con el rango de edad y la vigencia contemplada en el Decreto 19 de 2012 es:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Rango de edad y vigencia de las licencias de conducción
    
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr(style="background-color: #FFF3BD;")
            th(style="width: 20%;") RANGO DE EDAD
            th(style="width: 20%;") VIGENCIA DE LA LICENCIA
            th(style="width: 30%;") EDAD EN 2012 AL MOMENTO DE LA EXPEDICIÓN DEL DECRETO
            th(style="width: 30%;") OBLIGACIÓN DE RENOVAR
        tbody
          tr
            td.text-center(rowspan="3") Menor de 60 años
            td.text-center(rowspan="3") 10
            td.text-center 20 años
            td.text-center Cuando cumpla 30 años en 2022
          tr
            td.text-center 55 años
            td.text-center Cuando cumpla 65 años en 2022
          tr
            td.text-center 59 años
            td.text-center Cuando cumpla 65 años en 2018

          tr
            td.text-center(rowspan="3") Entre 60 y 80 años
            td.text-center(rowspan="3") 5
            td.text-center 62 años
            td.text-center Cuando cumpla 67 años en 2017
          tr
            td.text-center 65 años
            td.text-center Cuando cumpla 70 años en 2017
          tr
            td.text-center 78 años
            td.text-center Cuando cumpla 81 años en 2015

          tr
            td.text-center(rowspan="3") Mayor de 80 años
            td.text-center(rowspan="3") 1
            td.text-center 80 años
            td.text-center Cuando cumpla 81 años en 2013
          tr
            td.text-center 81 años
            td.text-center Cuando cumpla 82 años en 2013
          tr
            td.text-center 83 años
            td.text-center Cuando cumpla 84 años en el 2013

    .d-flex
      p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de la Aplicación del Decreto 19 de 2012. 

    p.fw-bold.mb-5 De acuerdo con la normativa de las secretarías de movilidad: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uRE3R4bbQFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5.pb-5 Respecto a la vigencia de la revisión técnico mecánica:
    
    .d-flex.flex-wrap.align-items-stretch
      .col-lg-8.col-xl-4.px-2.mb-5.mx-auto
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-card.svg' style="max-width: 117px; margin-top: -57px")
            p.mb-0 No se deberá exigir la revisión técnico mecánica a aquellos vehículos particulares diferentes a las motocicletas o similares que no han cumplido 6 años #[b contados a partir de la fecha de la matrícula.]
      .col-lg-6.col-xl-4.px-2.mb-5
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-card-1.svg' style="max-width: 117px; margin-top: -57px")
            p.mb-0 A los vehículos de servicio público y a las motocicletas y similares se les exigirá su primera revisión técnico mecánica y de emisiones contaminantes a los 2 años #[b contados a partir de la fecha de la matrícula.]
      .col-lg-6.col-xl-4.px-2.mb-5
        .tarjeta.p-4.d-flex.flex-wrap.h-100(style="background-color: #DEE4F0")
          div
            img.mx-auto.mb-3(src='@/assets/curso/temas/tema6/img-card-2.svg' style="max-width: 117px; margin-top: -57px")
            p.mb-0 Para efectos de la revisión técnico mecánica a los vehículos de servicio oficial se les aplica las mismas reglas de los vehículos de servicio particular.

    .d-flex
      p.mb-5.px-4.py-2(style="background-color: #E8E8E8;") Nota. Tomado de la Aplicación del Decreto 19 de 2012.    
      
    p.mb-0 Lo anterior sin perjuicio de la potestad que tienen las autoridades de control para verificar en cualquier tiempo que el vehículo efectivamente reúne las condiciones mecánicas y de seguridad exigidas por la normatividad vigente (Artículos 28 y 50, Parágrafo 1 del Artículo 122, número C37 del Artículo 131 Ley 769 de 2002, Artículo 201 y 202 Decreto 19 de 2012). 

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
    border-color: #000000 !important
</style>
