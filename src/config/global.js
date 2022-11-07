export default {
  global: {
    componenteFormativo:
      'Inspección y programación de operación del transporte',
    descripcionCurso:
      'A través de este componente formativo se lograrán identificar elementos fundamentales de la inspección dentro del transporte, lo que le dará una formación integral que le permitirá tomar decisiones para la programación, para que este transporte se desarrolle de manera segura, ajustado a la normatividad y que cumpla con lo requerido por la ruta definida.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Características de las llantas, la carrocería, el sistema eléctrico, los lubricantes y las correas de transmisión',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Funcionamiento de testigos de los equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Señales luminosas y auditivas de los equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad pasiva y activa del vehículo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Características y componentes del equipo de prevención y seguridad (Artículo 30 Ley 769 de 2002)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Características, tipos, clase y vigencia de documentos de la operación, del vehículo y del conductor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Tipos de carga, envases y rotulados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Modos y medios de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Técnicas de manejo de los equipos de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Características y componentes del equipo de prevención y seguridad (Artículo 30 Ley 769 de 2002)',
      referencia:
        'Ley 769 de 2002. [Poder Público - Rama Legislativa].  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      tipo: 'Ley',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      tema:
        'Características, tipos, clase y vigencia de documentos de la operación, vehículo y conductor',
      referencia:
        'Ley 769 de 2002. [Poder Público - Rama Legislativa].  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      tipo: 'Ley',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      tema:
        'Características, tipos, clase y vigencia de documentos de la operación, vehículo y conductor.',
      referencia:
        'Decreto 19 de 2012. [Ministerio de Transporte]. Por el cual se da la obligatoriedad de renovar la licencia. Febrero 7 de 2012.',
      tipo: 'Decreto',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/Aplicaci%C3%B3n%20Decreto%20019%20de%202012-1.pdf',
    },
    {
      tema:
        'Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia',
      referencia:
        'Decreto 1609 de 2002. [Presidencia de la República de Colombia]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
      tipo: 'Decreto',
      link:
        'https://www.habitatbogota.gov.co/transparencia/normativa/decretos/decreto-1609-2002',
    },
    {
      tema:
        'Mercancías peligrosas, Decreto 1609, hojas de seguridad y tarjeta de emergencia',
      referencia:
        'Resolución 4100 de 2004. [Ministerio de Transporte]. Por la cual se adoptan límites y dimensiones en los vehículos de transporte automotor de carga. Diciembre 28 de 2004.',
      tipo: 'Resolución',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/10387-resolucion-4100-del-28-de-diciembre-de-2004',
    },
    {
      tema: 'Modos y medios de transporte',
      referencia:
        'Resolución 4959 de 2006. [Ministerio de Transporte]. Por la cual se fijan los requisitos y procedimientos para conceder los permisos para el transporte de cargas indivisibles extrapesadas y extradimensionadas, y las especificaciones de los vehículos destinados a esta clase de transporte. Marzo 10 de 2017.',
      tipo: 'Resolución',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/5576-resolucion-4959-de-8-noviembre-de-2006',
    },
  ],
  glosario: [
    {
      termino: 'Autoridad competente',
      significado:
        'Autoridad nacional o internacional designada o reconocida por el Estado para un determinado fin.',
    },
    {
      termino: 'Capacidad de carga',
      significado:
        'Es el máximo tonelaje autorizado en un vehículo, de tal forma que el peso bruto vehicular no exceda los límites establecidos.',
    },
    {
      termino: 'Clase de vehículo',
      significado:
        'Denominación dada a un automotor de conformidad con su destinación, configuración y especificaciones técnicas.',
    },
    {
      termino: 'Conductor',
      significado:
        'Es la persona habilitada y capacitada técnica y teóricamente para operar un vehículo.',
    },
    {
      termino: 'Documentos del transporte',
      significado:
        'Son aquellos de porte obligatorio, requeridos para el transporte de mercancías peligrosas y que pueden ser solicitados en cualquier momento y lugar por la autoridad competente.',
    },
    {
      termino: 'Licencia de conducción',
      significado:
        'Documento público de carácter personal e intransferible expedido por la autoridad competente, el cual autoriza a una persona para la conducción de vehículos, con validez en todo el territorio nacional.',
    },
    {
      termino: 'Licencia de tránsito',
      significado:
        'Es el documento público que identifica un vehículo automotor, acredita su propiedad e identifica a su propietario y autoriza a dicho vehículo para circular por las vías públicas y por las privadas abiertas al público.',
    },
    {
      termino: 'Mercancía peligrosa',
      significado:
        'Materiales perjudiciales que durante la fabricación, manejo, transporte, almacenamiento o uso pueden generar o desprender polvos, humos, gases, líquidos, vapores o ﬁbras infecciosas, irritantes, inﬂamables, explosivos, corrosivos, asﬁxiantes, tóxicos o de otra naturaleza peligrosa, o radiaciones ionizantes en cantidades que puedan afectar la salud de las personas que entran en contacto con estas o que causan daño material.',
    },
    {
      termino: 'Peso bruto vehicular',
      significado:
        'Peso de un vehículo provisto de combustible, equipo auxiliar habitual y el máximo de carga.',
    },
    {
      termino: 'Rótulo',
      significado:
        'Advertencia que se hace sobre el riesgo de una mercancía, por medio de colores y símbolos que se ubican sobre las unidades de transporte (remolque, semirremolque, remolque balanceado) y vehículos de carga.',
    },
    {
      termino: 'Tránsito',
      significado:
        'Es la movilización de personas, animales o vehículos por una vía pública o privada abierta al público.',
    },
    {
      termino: 'Transporte',
      significado:
        'Es el traslado de personas, animales o cosas de un punto a otro a través de un medio físico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 19 de 2012. [Ministerio de Transporte]. Por el cual se da la obligatoriedad de renovar la licencia. Febrero 7 de 2012.',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/Aplicaci%C3%B3n%20Decreto%20019%20de%202012-1.pdf',
    },
    {
      referencia:
        'Decreto 1609 de 2002. [Presidencia de la República de Colombia]. Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Julio 31 de 2002.',
      link:
        'https://www.habitatbogota.gov.co/transparencia/normativa/decretos/decreto-1609-2002',
    },
    {
      referencia:
        'Ley 769 de 2002. [Poder Público - Rama Legislativa].  Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      link:
        'https://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      referencia:
        'Resolución 4100 de 2004. [Ministerio de Transporte]. Por la cual se adoptan límites y dimensiones en los vehículos de transporte automotor de carga. Diciembre 28 de 2004.',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/10387-resolucion-4100-del-28-de-diciembre-de-2004',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Juan Carlos García Vargas',
        cargo: 'Experta temática',
        centro: 'Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
