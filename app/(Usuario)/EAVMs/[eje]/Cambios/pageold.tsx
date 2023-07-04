import { urls_mercave } from '@/lib/mercave';
import { CambioBanco } from '@/types/cambio';
import BreadNav from "@/components/BreadNav";
import Tabs from '@/components/Tabs';
import PanelCambios from '../../_componentes/PanelCambios'

export const revalidate = 60

async function getCambios(codigo:string):Promise<CambioBanco[]> {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.cambios_eje}${codigo}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`No se pudieron descargar los cambios del eje: ${codigo}`);
  }
  return res.json();
}



export default async function Page({params}:{params:any}) {
  const codigo = params.eje
  const cambios = await getCambios(codigo);

  const segmentos = {
    previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
    activo:{nombre: codigo}
  }

  const tabs = [
    {name:'Datos',href:`/EAVMs/${codigo}/Datos`,current:false, disabled: false},
    {name:'Circulaciones',href:`/EAVMs/${codigo}/Circulaciones`,current:false, disabled: false},
    {name:'Cambios',href:`/EAVMs/${codigo}/Cambios`,current:true, disabled: false},
    {name:'Mantenimiento',href:`/EAVMs/${codigo}/Mantenimiento`,current:false, disabled: true},
    {name:'Ensayos Banco',href:`/EAVMs/${codigo}/Banco`,current:false, disabled: false},
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
        <PanelCambios cambios = {cambios}/>
      </div>
    </div>
  )
}