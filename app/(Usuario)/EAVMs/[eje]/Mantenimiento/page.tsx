import Tabs from '@/components/Tabs';


export default async function Page({params}:{params:any}) {
  const id_eje = parseInt(params.eje)
  

  const tabs = [
    {name:'Datos',href:`/EAVMs/${id_eje}/Datos`,current:false},
    {name:'Circulaciones',href:`/EAVMs/${id_eje}/Circulaciones`,current:false},
    {name:'Cambios',href:`/EAVMs/${id_eje}/Cambios`,current:false},
    {name:'Mantenimiento',href:`/EAVMs/${id_eje}/Mantenimiento`,current:true},
    {name:'Ensayos Banco',href:`/EAVMs/${id_eje}/Banco`,current:false},
  ]
  return (
    <>
    <Tabs tabs = {tabs}/>
    </>
  )
}