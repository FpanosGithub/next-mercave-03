import { urls_mercave } from "@/lib/mercave";
import PanelCirculaciones from "@/app/(Usuario)/Vehiculos/_componentes/PanelCirculaciones";


async function getCirculaciones(id_vehiculo) {
  //const res = await fetch(`https://trams-server.azurewebsites.net/eventos/circulaciones_vehiculo_ampliadas/${id_vehiculo}`)
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.circulaciones_vehiculo}${id_vehiculo}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}


export default async function CirculacionesVehiculo ({id_vehiculo}){
  const circulaciones = await getCirculaciones(id_vehiculo);
  return(
      <PanelCirculaciones circulaciones = {circulaciones}/>
  )
}