import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import PanelEjes from './_componentes/PanelEjes'

async function getEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`,  { next: { revalidate: 3600 } })
  if (!res.ok) {throw new Error('Error en fetch de datos de Ejes EAVM')}
  return await res.json()
}

async function getPosicionesEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.pos_ejes}`,  { next: { revalidate: 10 } })
  if (!res.ok) {throw new Error('Error en fetch de posiciones de Ejes EAVM')}
  return await res.json()
}


export default async function page() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'EAVMs'}
  }
  const ejes_data = getEjes();
  const posiciones_data = getPosicionesEjes();

  const [ejes, posiciones] = await Promise.all([ejes_data, posiciones_data])

  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 shadow-sm bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-3 text-2xl font-semibold">Ejes de Ancho Variable de Mercancías</p>
      </div>
      {/* Panel Ejes */}
      <PanelEjes 
        ejes = {ejes}
        posiciones = {posiciones}/>
    </div>
  )
}
