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

async function getEje(id_eje:number) {
  console.log(`${urls_mercave.servidor_backend}${urls_mercave.eje}${id_eje}`)
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.eje}${id_eje}`,{
    next: { revalidate: 360 }})
  if (!res.ok) {throw new Error('Fallo en EAVMs/[eje]/Datos')}
  return await res.json()
}

export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  //const ejes = await getEjes();
  //const eje = ejes.find(({id}:{id:Number})=> id === id_eje)
  const eje = await getEje(id_eje)

  console.log(eje)

  const segmentos = {
    previos:[{nombre:'EAVMs', link: 'EAVMs'}], 
    activo:{nombre:eje.codigo}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:true, disabled: false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false, disabled: false},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:false, disabled: false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:false, disabled: true},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false, disabled: false},
  ]
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">Eje de Ancho Variable de Mercancías - {eje.codigo[2]==='R' ? 'Remolcado' : 'Tractor'}</p>
      </div>
      <div>
        <Tabs tabs = {tabs}/>
        <FichaEje eje = {eje}/>
      </div>
    </div>
  )
}