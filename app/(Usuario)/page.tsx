import Card from '@/components/Card'

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center xl:items-start p-5">
      <h1 className='text-2xl font-semibold text-gray-900'>Herramienta de seguimiento del proyecto Mercave</h1>
      <div className="flex flex-col">
        <div className='flex flex-col lg:flex-row lg:flex-wrap gap-4'>
          <div>
            <h2 className='text-xs font-semibold text-gray-500 pt-10 pb-4'>MATERIAL RODANTE</h2>
            <div className='flex flex-col lg:flex-row gap-4'>
              <Card enlace="Vehiculos" titulo="Vehículos" descripcion="Geolocalización. Información y parámetros de servicio de la flota de vehículos (Locomotoras, Vehículos Auxiliares y Vagones). Mantenimientos realizados" imagen="/imagenes/home/vehiculos.png"/>
              <Card enlace="EAVMs" titulo="Ejes EAVM" descripcion="Geolocalización, Alarmas, Telemetría de parámetros de circulación y cambios de los ejes. Mantenimientos realizados" imagen="/imagenes/home/ejes.png"/>
            </div>
          </div>
          <div>
            <h2 className='text-xs font-semibold text-gray-500 pt-10 pb-4'>CAMBIADORES</h2>
            <div>
              <Card enlace="#" titulo="Operaciones de cambio" descripcion="Información de operaciones de cambio realizados. Valores de los cambios. Alarmas. Mantenimientos realizados" imagen="/imagenes/home/operaciones.png"/>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-xs font-semibold text-gray-500 pt-10 pb-4'>GESTIÓN ADIF</h2>
          <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col gap-4'>
            <Card enlace="Documentacion/General" titulo="Documentación Técnica" descripcion="Memorias técnicas y planos de las distintas versiones de ejes y de los vehículos" imagen="/imagenes/home/documentacion.png"/>
            <Card enlace="gestor_documentacion" titulo="Estudio" descripcion="Herramienta de Gestión Documental" imagen="/imagenes/home/estudio.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}
