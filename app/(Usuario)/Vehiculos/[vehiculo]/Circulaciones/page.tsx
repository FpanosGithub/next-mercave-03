import { urls_mercave } from '@/lib/mercave';
import PanelCirculaciones from '../../_componentes/PanelCirculaciones';
import Tabs from '@/components/Tabs';

export const revalidate = 0

async function getCirculaciones(id_vehiculo:number):Promise<JSX.Element> {
  //`https://drf-server.azurewebsites.net/eventos/circulaciones_vehiculo_ampliadas/${id_vehiculo}`
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.circulaciones_vehiculo}${id_vehiculo}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}


export default async function Page({params}:{params:any}) {
  const id_vehiculo = parseInt(params.vehiculo)
  const circulaciones = await getCirculaciones(id_vehiculo);

  const tabs = [
    {name:'Datos',href:`/Vehiculos/${id_vehiculo}/Datos`,current:false},
    {name:'Circulaciones',href:`/Vehiculos/${id_vehiculo}/Circulaciones`,current:true},
    {name:'Mantenimiento',href:`/Vehiculos/${id_vehiculo}/Mantenimiento`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <PanelCirculaciones circulaciones = {circulaciones}/>
    </>
  )
}