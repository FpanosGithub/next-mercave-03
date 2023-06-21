import { urls_mercave } from '@/lib/mercave';
import { DatosBancoEAVM, TotalesBanco } from '@/types/cambio';
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import PanelBanco from '../../_componentes/PanelBanco';

export const revalidate = 60

async function getDatosBancoEAVM(codigo:string):Promise<DatosBancoEAVM>  {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.datos_banco_EAVM}${codigo}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`No se pudieron descargar los datos de los ensayos del eje: ${codigo}`);
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
  const codigo = params.eje
  const datos_banco = await getDatosBancoEAVM(codigo)
  const datos_totales = await getDatosBancoTotales()

  const segmentos = {
    previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
    activo:{nombre:codigo}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${codigo}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${codigo}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${codigo}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${codigo}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${codigo}/Banco`,current:true},
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
        <PanelBanco 
          datos_banco = {datos_banco} 
          totales = {datos_totales}/>
      </div>
    </div>
  )
}