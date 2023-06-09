import { urls_mercave } from '@/lib/mercave';
import {Circulacion} from '@/types/circulacion'
import PanelCirculaciones from '../../_componentes/PanelCirculaciones';
import Tabs from '@/components/Tabs';

export const revalidate = 60

async function getCirculaciones(id_eje:number):Promise<Circulacion[]> {
  //`https://drf-server.azurewebsites.net/eventos/circulaciones_vehiculo_ampliadas/${id_vehiculo}`
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.circulaciones_eje}${id_eje}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}


export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  const circulaciones = await getCirculaciones(id_eje);

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:true},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <PanelCirculaciones circulaciones = {circulaciones}/>
    </>
  )
}