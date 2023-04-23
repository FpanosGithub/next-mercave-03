export default {
  title: "Ficha Técnica Vehiculo",
  name: "FTVehiculo",
  type: "document",
  groups: [
    {
      name: 'datos',
      title: 'Cuadro de Características',
    },
  ],
  fields: [
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image'
    },
    {
    title: 'Slug (código unico)',
    name: 'slug',
    type: 'slug',
    options: {source: (doc) => `${doc.num_doc}-${doc.version}`}
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
    title: "Fecha Publicación",
    name: "Fecha",
    type: "date",
    options: {
      calendarTodayLabel: 'Today'
    }
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
    title: "Clase",
    name: "clase",
    type: "string",
    options: {
      list: [
        {title: 'Locomotora', value: 'LOC'},
        {title: 'Material Rodante Auxiliar', value: 'MRA'},
        {title: 'Vagón', value: 'VAG'},
        ]
      }
    },
    {
      title: "Tipo UIC",
      name: "tipo_uic",
      type: "string",
    },
    {
      title: "Serie UIC",
      name: "serie_uic",
      type: "string",
    },
    {
      title: "Marca",
      name: "marca",
      type: "string",
    },
    {
      title: "Modelo",
      name: "modelo",
      type: "string",
    },
    {
      title: "Descripción",
      name: "descripcion",
      type: "string",
    },
    {
      title: "Velocida Máxima admitida EN VÍA (Km/h)",
      name: "velocidad",
      type: "string",
      group:'datos',
    },
    {
      title: "Carga Máxima (kg)",
      name: "carga_maxima",
      type: "string",
      group:'datos',
    },
    {
      title: "Tara (kg)",
      name: "tara",
      type: "string",
      group:'datos',
    },
    {
      title: "Peso x Eje (kg)",
      name: "peso_x_eje",
      type: "string",
      group:'datos',
    },
    {
      title: "longitud del vehículo (de Gancho a Gancho) (mm)",
      name: "longitud",
      type: "string",
      group:'datos',
    },
    {
      title: "Número de Bogies",
      name: "num_bogies",
      type: "string",
      group:'datos',
    },
    {
      title: "Número de Ejes",
      name: "num_ejes",
      type: "string",
      group:'datos',
    },
    {
      title: "Detalle",
      name: "detalle",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}]
    },
    {
      title: "Mantenimiento",
      name: "mantenimiento",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}]
    },
    {
      title: "Sistemas del Vehículo",
      name: "sistemas",
      type: 'array',
      of: [
        { type: 'reference',
          to: [{type: 'FTSistemaVehiculo'}]
        },]
    },
    
  ],
  preview:{
    select: {
      title: 'descripcion',
      clase:'clase',
      num_doc: 'num_doc',
      version: 'version',
      imagen:'imagen'
      },
    prepare(selection) {
      const {title, clase, num_doc, version, imagen} = selection
      return {
        title: title,
        subtitle: `${clase} - doc: ${num_doc} - versión: ${version}`,
        media: imagen,
        }
      }
  }
} 