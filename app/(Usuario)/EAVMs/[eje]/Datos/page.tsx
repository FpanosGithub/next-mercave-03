import { urls_mercave } from '@/lib/mercave';
import FichaEje from '../../_componentes/FichaEje';
import Tabs from '@/components/Tabs';

async function getEjes() {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.ejes}`)
  if (!res.ok) {throw new Error('Error en fetch de datos de Ejes EAVM')}
  return await res.json()
}

export default async function Page({params}:{params:any}) {
  const ejes = await getEjes();
  const eje = ejes.find(({id}:{id:Number})=> id === parseInt(params.eje))

  console.log(ejes)

  const tabs = [
    {name:'Datos',href:`/EAVMs/${eje.id}/Datos`,current:true},
    {name:'Circulaciones',href:`/EAVMs/${eje.id}/Circulaciones`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${eje.id}/Mantenimiento`,current:false},
    {name:'Ensayos Banco',href:`/EAVMs/${eje.id}/Banco`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    <FichaEje eje = {eje}/>
    </>
  )
}