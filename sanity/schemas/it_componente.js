export default {
  title: "Instrucción Técnica Mant. Componente",
  name: "ITComponente",
  type: "document",
  fields: [
    {
      title: 'componente',
      name: 'componente',
      type: 'reference',
      to: [{type: 'FTComponente'}]
    },
    {
      title: "Código",
      name: "codigo",
      type: "string",
    },
    {
      title: "Operación",
      name: "operacion",
      type: "string",
    },
    {
      title: 'IS1?',
      name: 'is1',
      type: 'boolean'
    },
    {
      title: 'IS2?',
      name: 'is2',
      type: 'boolean'
    },
    {
      title: 'IS3?',
      name: 'is3',
      type: 'boolean'
    },
    {
      title: 'IM?',
      name: 'im',
      type: 'boolean'
    },
    {
      title: "Descripción",
      name: "descripcion",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}]
    },
    {
      title: 'Criterios Aceptación',
      name: "criterios",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}
      ]
    },
    {
      title: 'Referencias',
      name: "referencias",
      type: 'array',
      of: [
        {type: 'string'}
      ]
    },
    {
      title: 'Observaciones',
      name: "observaciones",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}
      ]
    },
    {
      title: 'SLUG',
      name: 'slug',
      type: 'slug',
      options: {
          source: 'codigo',
          maxLength: 200, // will be ignored if slugify is set
        }
    },
  ],
  preview:{
    select: {
      title: 'operacion',
      codigo:'codigo',
      componente: 'componente.componente'
    },
    prepare(selection) {
      const {title, codigo, componente} = selection
      return {
        title: title,
        subtitle: `Código: ${codigo ? codigo : 'sin definir'}-${componente}`
      }
    }}
} 