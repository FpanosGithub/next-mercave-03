import { urls_mercave } from '@/lib/mercave';
import FichaVehiculo from '../../_componentes/FichaVehiculo';
import Tabs from '@/components/Tabs';

export const dynamic = 'force-static' 


async function getVehiculos() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}`,{
    next: { revalidate: 360 }})
  if (!res.ok) {throw new Error('Failed to fetch data')}
  return await res.json()
}

export default async function Page({params}:{params:any}) {
  const vehiculos = await getVehiculos();
  const id_vehiculo = parseInt(params.vehiculo)
  const vehiculo = vehiculos.find(({id}:{id:Number})=> id === id_vehiculo)

  console.log('!!!!!!!!!!!!!!! /Vehiculos/[vehiculo]/Datos/page.tsx !!!!!!!!!!!!!!')
  console.log(vehiculos)

  const tabs = [
    {name:'Datos',href:`/Vehiculos/${id_vehiculo}/Datos`,current:true, disabled: false},
    {name:'Circulaciones',href:`/Vehiculos/${id_vehiculo}/Circulaciones`,current:false, disabled: false},
    {name:'Mantenimiento',href:`/Vehiculos/${id_vehiculo}/Mantenimiento`,current:false, disabled: true},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <FichaVehiculo vehiculo = {vehiculo}/>
    </>
  )
}