import { urls_mercave } from '@/lib/mercave';
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import FichaEje from '../../_componentes/FichaEje';

//export async function generateStaticParams() {
//  const ejes = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`).then((res) => res.json())
//  return ejes.map((item:any) => ({
//    eje: String(item.id),
//  }))
//}

async function getEje(codigo:string) {
  console.log(`${urls_mercave.servidor_backend}${urls_mercave.eje}${codigo}`)
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.eje}${codigo}`,{
    next: { revalidate: 360 }})
  if (!res.ok) {throw new Error('Fallo en EAVMs/[eje]/Datos')}
  return await res.json()
}

export default async function Page({params}:{params:any}) {
  const codigo = params.eje
  const eje = await getEje(codigo)

  const segmentos = {
    previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
    activo:{nombre:codigo}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${codigo}/Datos`,current:true},
    {name:'Circulaciones',href:`/EAVMs/${codigo}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${codigo}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${codigo}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${codigo}/Banco`,current:false},
  ]
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">Eje Ancho Variable - {codigo[2]==='R' ? 'Remolcado' : 'Tractor'}</p>
      </div>
      <div>
        <Tabs tabs = {tabs}/>
        <FichaEje eje = {eje}/>
      </div>
    </div>
  )
}