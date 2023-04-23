import PanelCambios from "./PanelCambios";
import { urls_mercave } from '@/lib/mercave';

export const revalidate = 0

async function getCambios(id_eje) {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.cambios_eje}${id_eje}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('No pudimos recoger datos de Cambios del Eje');
  }
  return res.json();
}


export default async function CambiosEje ({id_eje}){
  const cambios = await getCambios(id_eje);

  return(
    <PanelCambios cambios = {cambios}/>
  )
}
