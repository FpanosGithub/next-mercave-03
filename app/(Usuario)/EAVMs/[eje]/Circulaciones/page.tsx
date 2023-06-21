import { urls_mercave } from '@/lib/mercave';
import {Circulacion} from '@/types/circulacion'
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import PanelCirculaciones from '../../_componentes/PanelCirculaciones';

export const revalidate = 60

async function getCirculaciones(codigo:string):Promise<Circulacion[]> {
  //`https://drf-server.azurewebsites.net/eventos/circulaciones_EAVM_ampliadas/${codigo}`
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.circulaciones_eje}${codigo}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Fallo en EAVMs/[eje]/Circulaciones');
  }
  return res.json();
}

export default async function Page({params}:{params:any}) {
  const codigo = params.eje
  const circulaciones = await getCirculaciones(codigo);

  const segmentos = {
    previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
    activo:{nombre: codigo}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${codigo}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${codigo}/Circulaciones`,current:true},
    {name:'Cambios',href:`/EAVMs/${codigo}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${codigo}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${codigo}/Banco`,current:false},
  ]
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">Eje de Ancho Variable - {codigo[2]==='R' ? 'Remolcado' : 'Tractor'}</p>
      </div>
      <div>
        <Tabs tabs = {tabs}/>
        <PanelCirculaciones circulaciones = {circulaciones}/>
      </div>
    </div>
  )
}