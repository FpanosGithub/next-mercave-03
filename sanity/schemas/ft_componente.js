export default {
  title: "Ficha Técnica Componente",
  name: "FTComponente",
  type: "document",
  fields: [
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image'
    },
    {
      title: 'Número de documento (código unico)',
      name: 'num_doc',
      type: 'number',
    },
    {
      title: "Version de la Ficha Técnica",
      name: "version",
      type: "number",
    },
    {
      title: 'SLUG',
      name: 'slug',
      type: 'slug',
      options: {source: (doc) => `${doc.num_doc}-${doc.version}`}
    },
    {
      title: "Fecha Publicación",
      name: "Fecha",
      type: "date",
      options: {calendarTodayLabel: 'Today'},
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
      title: "Código",
      name: "codigo",
      type: "string",
    },
    {
      title: "Descripción corta",
      name: "descripcion",
      type: "string",
    },
    {
      title: "Componente Critico de Seguridad (CCS)",
      name: "ccs",
      type: "boolean",
    },
    {
      title: "Detalle extendido",
      name: "detalle",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}]
    },
    {
      title: 'Instrucciones Técnicas de Mantenimiento',
      name: 'itms',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'ITComponente'}]}]
    },
  ],
  preview:{
    select: {
      title: 'codigo',
      num_doc: 'num_doc',
      version: 'version',
      imagen:'imagen'
    },
    prepare(selection) {
      const {title, num_doc, version, imagen} = selection
      return {
        title: title,
        subtitle: `doc: ${num_doc} - versión: ${version}`,
        media: imagen,
        }
      }
    }
} 