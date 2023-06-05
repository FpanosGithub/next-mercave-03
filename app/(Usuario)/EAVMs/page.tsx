import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import PanelEjes from './_componentes/PanelEjes'

//export const dynamic = 'force-static'
export const revalidate = 360

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
  console.log(ejes)
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 shadow-sm bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-3 text-2xl font-semibold">Ejes de Ancho Variable de Mercancías</p>
      </div>
      {/* Panel Ejes */}
      <PanelEjes ejes = {ejes}/>
    </div>
  )
}
