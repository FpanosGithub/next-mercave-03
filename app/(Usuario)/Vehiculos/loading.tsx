import BreadNav from "@/components/BreadNav";

const segmentos = {
  previos:[], 
  activo:{nombre:'Vehículos', link: 'Vehiculos'}
}

export default function loading() {
  return (
    <div className='h-full w-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 mb-3 shadow bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-4 text-2xl font-semibold">Vehículos</p>
      </div>
      <div className="px-8 py-8 text-2xl text-gray-600"> ........ Cargando informacion de vehículos ....</div>
    </div>
  )
}
