import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";

async function getVehiculos() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}`)
  if (!res.ok) {throw new Error('Failed to fetch data')}
  return await res.json()
}


export default async function Layout({
  params, 
  children}
:{
  params: {vehiculo: string}, 
  children: React.ReactNode
}) {
  //const vehiculos = await getVehiculos();
  //const vehiculo = vehiculos.find(({id}:{id:Number})=> id === parseInt(params.vehiculo))
  
  const segmentos = {
    previos:[
      {nombre:'Vehículos', link: 'Vehiculos'}
    ], 
    activo:{nombre:'vehiculo.num_uic', link: 'Vehiculo'}
  }
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 mb-2 shadow bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">{'vehiculo.tipo.descripcion'}</p>
        <p className="ml-4 my-2 text-xl text-gray-700">{'vehiculo.num_uic'}</p>
      </div>
      
      <div>{children}</div>
    </div>
  );
}