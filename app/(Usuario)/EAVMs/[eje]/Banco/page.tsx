import { urls_mercave } from '@/lib/mercave';
import { DatosBancoEAVM, TotalesBanco } from '@/types/cambio';
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import PanelBanco from '../../_componentes/PanelBanco';

export const revalidate = 60

async function getDatosBancoEAVM(id_eje:number):Promise<DatosBancoEAVM>  {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.datos_banco_EAVM}${id_eje}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`No se pudieron descargar los datos de los ensayos del eje: ${id_eje}`);
  }
  return res.json();
}
async function getDatosBancoTotales():Promise<TotalesBanco>  {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.datos_banco_totales}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`No se pudieron descargar los datos resumen de los ensayos de ejes`);
  }
  return res.json();
}



export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  const datos_banco = await getDatosBancoEAVM(id_eje)
  const datos_totales = await getDatosBancoTotales()

  const segmentos = {
    previos:[{nombre:'EAVMs', link: 'EAVMs'}], 
    activo:{nombre:String(id_eje)}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:true},
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
        <PanelBanco 
          datos_banco = {datos_banco} 
          totales = {datos_totales}/>
      </div>
    </div>
  )
}