import { urls_mercave } from '@/lib/mercave';
import FichaEje from '../../_componentes/FichaEje';
import Tabs from '@/components/Tabs';

async function getEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`)
  if (!res.ok) {throw new Error('Error en fetch de datos de Ejes EAVM')}
  return await res.json()
}

export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  const ejes = await getEjes();
  const eje = ejes.find(({id}:{id:Number})=> id === id_eje)

  console.log(ejes)

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:true},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <FichaEje eje = {eje}/>
    </>
  )
}