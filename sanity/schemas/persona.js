export default {
  title: "Persona en la organización de la EEM",
  name: "Persona",
  type: "document",
  fields: [
    {
      title: 'Imagen',
      name: 'imagen',
      type: 'image'
    },
    {
      title: "Nombre",
      name: "nombre",
      type: "string",
    },
    {
      title: "Apellido",
      name: "apellido",
      type: "string",
    }, 
    {
      title: "Cargo en la organización EEM",
      name: "cargo",
      type: "string",
    },    
    {
      title: "Curricula",
      name: "curricula",
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'}]
    },
  ],
  preview:{
    select: {
      nombre: 'nombre',
      apellido:'apellido',
      cargo:'cargo',
      imagen:'imagen'
    },
    prepare(selection) {
      const {nombre, apellido, cargo, imagen} = selection
      return {
        title: `${nombre} ${apellido}`,
        subtitle: cargo,
        media: imagen,
      }
    }}
} 