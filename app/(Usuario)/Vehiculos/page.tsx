import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import PanelFlota from './_componentes/PanelFlota'

export const dynamic = 'force-static'
export const revalidate = 360

async function getVehiculos() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}`)
  if (!res.ok) {throw new Error('Failed to fetch data')}
  return await res.json()
}

export default async function page() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'Vehículos'}
  }
  const vehiculos = await getVehiculos();

  console.log('/Vehiculos/page.tsx')
  console.log(vehiculos)

  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 shadow-sm bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-3 text-2xl font-semibold">Vehículos</p>
      </div>
      {/* Panel Flota */}
      <PanelFlota vehiculos = {vehiculos}/>
    </div>
  )
}
