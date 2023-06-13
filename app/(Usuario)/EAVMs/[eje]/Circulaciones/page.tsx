import { urls_mercave } from '@/lib/mercave';
import {Circulacion} from '@/types/circulacion'
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import PanelCirculaciones from '../../_componentes/PanelCirculaciones';

export const revalidate = 60

async function getCirculaciones(id_eje:number):Promise<Circulacion[]> {
  //`https://drf-server.azurewebsites.net/eventos/circulaciones_vehiculo_ampliadas/${id_vehiculo}`
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.circulaciones_eje}${id_eje}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Fallo en EAVMs/[eje]/Circulaciones');
  }
  return res.json();
}

export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  const circulaciones = await getCirculaciones(id_eje);

  const segmentos = {
    previos:[{nombre:'EAVMs', link: 'EAVMs'}], 
    activo:{nombre:`Eje (id:${id_eje})`}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:true},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false},
  ]
  return (
    <div className='h-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">Eje de Ancho Variable de Mercancías</p>
      </div>
      <div>
        <Tabs tabs = {tabs}/>
        <PanelCirculaciones circulaciones = {circulaciones}/>
      </div>
    </div>
  )
}