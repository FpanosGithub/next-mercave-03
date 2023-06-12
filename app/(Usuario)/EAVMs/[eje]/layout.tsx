import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";

export const dynamic = 'force-static' 

async function getEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`)
  if (!res.ok) {throw new Error('Error en fetch de datos de Ejes EAVM')}
  return await res.json()
}

export default async function Layout({
  params, 
  children}
:{
  params: {eje: string}, 
  children: React.ReactNode
}) {
  const ejes = await getEjes();
  const eje = ejes.find(({id}:{id:Number})=> id === parseInt(params.eje))
  
  const segmentos = {
    previos:[{nombre:'EAVMs', link: 'EAVMs'}], 
    activo:{nombre:eje.codigo}
  }

  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        {/*<p className="ml-4 mt-4 text-2xl font-semibold">{eje.codigo}</p>*/}
        <p className="ml-4 mt-4 text-2xl font-semibold">Eje de Ancho Variable de Mercancías - {eje.codigo[2]==='R' ? 'Remolcado' : 'Tractor'}</p>
      </div>
      
      <div>{children}</div>
    </div>
  );
}