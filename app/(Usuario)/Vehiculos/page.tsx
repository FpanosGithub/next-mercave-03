import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import PanelFlota from './_componentes/PanelFlota'

export const revalidate = 3600

async function getVehiculos() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}`)
  if (!res.ok) {throw new Error('Failed to fetch data')}
  return await res.json()
}

export default async function page() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'Vehículos', link: 'Vehiculos'}
  }
  const vehiculos = await getVehiculos();
  return (
    <div>
      <BreadNav segmentos = {segmentos}/>
      <p className="ml-4 my-4 text-2xl font-semibold">Vehículos</p>
      <PanelFlota vehiculos = {vehiculos}/>
    </div>
  )
}
