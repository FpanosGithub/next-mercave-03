import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import PanelEjes from './_componentes/PanelEjes'

export const revalidate = 3600

async function getEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`)
  if (!res.ok) {throw new Error('Error en fetch de datos de Ejes EAVM')}
  return await res.json()
}

export default async function page() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'EAVMs', link: 'EAVMs'}
  }
  const ejes = await getEjes();
  return (
    <div>
      <BreadNav segmentos = {segmentos}/>
      <p className="ml-4 my-4 text-2xl font-semibold">Ejes de Ancho Variable de Mercancías</p>
      <PanelEjes ejes = {ejes}/>
    </div>
  )
}
