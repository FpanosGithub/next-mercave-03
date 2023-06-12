import { urls_mercave } from '@/lib/mercave';
import { CambioBanco } from '@/types/cambio';
import Tabs from '@/components/Tabs';
import PanelCambios from '../../_componentes/PanelCambios'

export const revalidate = 60

async function getCambios(id_eje:number):Promise<CambioBanco[]> {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.cambios_eje}${id_eje}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`No se pudieron descargar lso ensayos del eje: ${id_eje}`);
  }
  return res.json();
}



export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  const cambios = await getCambios(id_eje);

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:true},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <PanelCambios cambios = {cambios}/>
    </>
  )
}