import Card from '../../components/Card'

export default function Home() {
  return (
    <div className="flex flex-col p-5 justify-between overflow-y-auto">
      <h1 className='lg:text-2xl font-semibold'>Herramienta de seguimiento del proyecto Mercave</h1>
      <div className="flex place-items-center">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:p-0'>
          <div>
            <h2 className='text-slate-500 pt-10 pb-4'>MATERIAL RODANTE</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
              <Card enlace="Vehiculos" titulo="Vehículos" descripcion="Geolocalización. Información y parámetros de servicio de la flota de vehículos (Locomotoras, Vehículos Auxiliares y Vagones). Mantenimientos realizados" imagen="/imagenes/vehiculos/unimog.jpg"/>
              <Card enlace="EAVMs" titulo="Ejes EAVM" descripcion="Geolocalización, Alarmas, Telemetría de parámetros de circulación y cambios de los ejes. Mantenimientos realizados" imagen="/imagenes/ejes/eje.png"/>
            </div>
          </div>
          <div>
            <h2 className='text-slate-500 pt-10 pb-4'>CAMBIADORES</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:h-5/6'>
              <Card enlace="#" titulo="Operaciones de cambio" descripcion="Información de operaciones de cambio realizados. Valores de los cambios. Alarmas. Mantenimientos realizados" imagen="/imagenes/vehiculos/portacontenedores1.jpeg"/>
            </div>
          </div>
          <div>
            <h2 className='text-slate-500 pt-10 pb-4'>GESTIÓN ADIF</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
              <Card enlace="Documentacion/General" titulo="Documentación Técnica" descripcion="Memorias técnicas y planos de las distintas versiones de ejes y de los vehículos" imagen="/imagenes/vehiculos/portaautos.jpg"/>
              <Card enlace="gestor_documentacion" titulo="Estudio" descripcion="Herramienta de Gestión Documental" imagen="/imagenes/vehiculos/portacontenedores2.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
