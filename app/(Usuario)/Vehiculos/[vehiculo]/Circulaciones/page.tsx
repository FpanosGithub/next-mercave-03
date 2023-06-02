import { urls_mercave } from '@/lib/mercave';
import CirculacionesVehiculo from '../../_componentes/CirculacionesVehiculo';
import Tabs from '@/components/Tabs';

export default async function Page({params}:{params:any}) {
  const id_vehiculo = parseInt(params.vehiculo)

  const tabs = [
    {name:'Datos',href:`/Vehiculos/${id_vehiculo}/Datos`,current:false},
    {name:'Circulaciones',href:`/Vehiculos/${id_vehiculo}/Circulaciones`,current:true},
    {name:'Mantenimiento',href:`/Vehiculos/${id_vehiculo}/Mantenimiento`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <CirculacionesVehiculo id_vehiculo = {id_vehiculo} />
    </>
  )
}