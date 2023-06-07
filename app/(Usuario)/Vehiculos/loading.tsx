import BreadNav from "@/components/BreadNav";
import Spinner from "@/components/Spinner"

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
      <Spinner />
    </div>
  )
}
