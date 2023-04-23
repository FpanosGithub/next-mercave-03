export default {
  title: "Ficha Técnica Eje A.V.",
  name: "FTEAVM",
  type: "document",
  groups: [
    {name:  'caracteristicas', title: 'Cuadro de Características'},
    { name:  'sistemas', title: 'Sistemas'},
    { name:  'descripciones', title: 'Descripciónes'},
  ],
  fields: [
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image'
    },
    {
      title: "Código del tipo de Eje EAVM",
      name: "codigo",
      type: "string",
    },
    {
      title: "Descripción",
      name: "descripcion",
      type: "string",
    },
    {
      title: 'Número de documento (código unico)',
      name: 'num_doc',
      type: 'number',
    },
    {
      title: "Version del documento",
      name: "version",
      type: "number",
      },
    {
      title: 'Slug (código único)',
      name: 'slug',
      type: 'slug',
      options: {source: (doc) => `${doc.num_doc}-${doc.version}`}
    },
    {
      title: "Fecha Publicación",
      name: "Fecha",
      type: "date",
      options: {calendarTodayLabel: 'Today'}
    },
    {
      title: "Realizado Por:",
      name: "realizado",
      type: "reference",
      to: [{type: 'Persona'}]
    },
    {
      title: "Supervisado Por:",
      name: "supervisado",
      type: "reference",
      to: [{type: 'Persona'}]
    },
    {
      title: "Familia de Aplicaciónes",
      name: "familia",
      type: 'string',
      options:{
        list:['Remolcado', 'Tractor'],
        layout:'radio',
      },
      group:'caracteristicas',
    },
    {
      title: "Anchos de vía",
      name: "anchos",
      type: 'string',
      options:{
        list:['UIC(1435 mm) / IBÉRICO(1668 mm)', 'UIC(1435 mm) / RUSO(1520 mm)', 'UIC(1435 mm) / RUSO(1520 mm) / IBÉRICO(1668 mm)'],
        layout:'radio',
      },
      group:'caracteristicas',
    },
    {
      title: "Tipo de Freno",
      name: "freno",
      type: 'string',
      options:{
        list:['Zapata', 'Discos en rueda', 'Discos centrales'],
        layout:'radio',
        direction: 'horizontal',
      },
      group:'caracteristicas',
    },
    {
      title: "Diámetro de Rueda",
      name: "diam_rueda",
      type: 'string',
      options:{
        list:['920 mm', '760 mm'],
        layout:'radio',
        direction: 'horizontal',
      },
      group:'caracteristicas',
    },
    {
      title: "Fabricante de Rueda",
      name: "fab_rueda",
      type: "string",
      options: {
        list:['CAF', 'LUCHINNI'],
        layout:'radio',
        direction: 'horizontal',
      },
      group:'caracteristicas',
    },
    {
      title: "Fabricante de Cuerpo de Eje",
      name: "fab_eje",
      type: "string",
      options: {
        list:['CAF', 'LUCHINNI'],
        layout:'radio',
        direction: 'horizontal',
      },
      group:'caracteristicas',
    },
    {
      title: "Carga Máxima de diseño",
      name: "carga_max",
      type: "string",
      options: {
        list:['16 ton', '18 ton', '22.5 ton', '25 ton', '30 ton'],
        layout:'radio',
        direction: 'horizontal',
      },
      group:'caracteristicas',
    },
    {
      title: "Velocidad Máxima de diseño (Km/h)",
      name: "vel_max",
      type: "number",
      group:'caracteristicas',
    },
    {
      title: "Detalle",
      name: "detalle",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}],
      group:'descripciones',
    },
    {
      title: "Mantenimiento",
      name: "mantenimiento",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}],
        group:'descripciones',
    },
    {
      title: "Sistemas del EAVM",
      name: "sistemas",
      type: 'array',
      of: [
        { type: 'reference',
          to: [{type: 'FTSistemaEAVM'}]
        },]
    },

  ],
  preview:{
    select: {
      title: 'codigo',
      subtitle:'descripcion',
      media:'imagen'
    }
  }
} 