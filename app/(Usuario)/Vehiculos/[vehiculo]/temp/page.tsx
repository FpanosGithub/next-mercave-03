import { urls_mercave } from '@/lib/mercave';
import FichaVehiculo from '../_componentes/FichaVehiculo';
import CirculacionesVehiculo from '../_componentes/CirculacionesVehiculo';

export const dynamic = 'force-static' 

async function getVehiculo(id:string) {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}/${id}/`,{
    next: { revalidate: 300 }})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for vehicle: ${id}`);
  }
  return res.json();
}

// Generación estática de páginas 
async function getVehiculos() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Fallo recuperando datos para Static Params de vehiculos');
  }
  return res.json();
}
export async function generateStaticParams() {
  const vehiculos = await getVehiculos();
  return vehiculos.map((vehiculo:any) => ({
    vehiculo: `${vehiculo.id}`,
  }));
}

export default async function Page({params}:{params:any}) {
  const vehiculo = await getVehiculo(params.vehiculo);
  return (
    <>
    <FichaVehiculo vehiculo = {vehiculo}/>
    {/* <CirculacionesVehiculo id_vehiculo = {vehiculo.id}/> */}
    </>
  )
}