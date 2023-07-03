import BreadNav from '@/components/BreadNav'
import FTVehiculo from "./_componentes/FTVehiculo";
import FTSistema from "./_componentes/FTSistema";
import FTConjunto from "./_componentes/FTConjunto";
import FTComponente from "./_componentes/FTComponente";
import FTEAVM from "./_componentes/FTEAVM";

export const dynamic = 'force-dynamic'

const construyeSegmentos = ((searchParams)=>{
  let previos = []
  let activo = []
  //Link a Vehiculos o EAVMs y al vehículo o EAVM del que venimos
  previos.push({nombre:searchParams.material, link:`/${searchParams.material}`})
  previos.push({nombre:searchParams.tipo, link:`/${searchParams.material}/${searchParams.id}/Datos`})
  // A partir de aquí vamos viendo la profundidad enla que estamos en el arbol de la Ficha Técnica
  if(!searchParams.id_sistema){activo = {nombre:'Ficha Técnica'}} // si NO HAY SISTEMA
  else { // Si hay sistema
    previos.push({
      nombre:'Ficha' , 
      link: `/Documentacion/Fichas_Tecnicas?material=${searchParams.material}&id=${searchParams.id}&tipo=${searchParams.tipo}&id_tipo=${searchParams.id_tipo}&version=${1000}`})
    if (!searchParams.id_conjunto){activo = {nombre:searchParams.sistema}} // hay sistema pero NO hay Conjunto
    else { // hay sistema y SI Hay conjunto
      previos.push({
        nombre:searchParams.sistema, 
        link: `/Documentacion/Fichas_Tecnicas?material=${searchParams.material}&id=${searchParams.id}&tipo=${searchParams.tipo}&id_tipo=${searchParams.id_tipo}&sistema=${searchParams.sistema}&id_sistema=${searchParams.id_sistema}&version=${1000}`})
      if (!searchParams.id_componente){activo = {nombre:searchParams.conjunto}} // Hay sistema y hay conjunto pero NO HAY Componenete
      else { // Hay sistema, hay conjunto y SI HAY Componente
        previos.push({
          nombre:searchParams.conjunto, 
          link: `/Documentacion/Fichas_Tecnicas?material=${searchParams.material}&id=${searchParams.id}&tipo=${searchParams.tipo}&id_tipo=${searchParams.id_tipo}&sistema=${searchParams.sistema}&id_sistema=${searchParams.id_sistema}&conjunto=${searchParams.conjunto}&id_conjunto=${searchParams.id_conjunto}&version=${1000}`})
        activo = {nombre:searchParams.componente}
      }
    }
  }   

  return {
    previos: previos,
    activo: activo
  }
})


export default async function Page({searchParams}) {
  const segmentos = construyeSegmentos(searchParams)

  // Determinamos si tenemos que mostrar la ficha de un componente, un conjunto, un sistema, un eavm o un vehículo
  // En función de eso llamamos a unos componentes u otros
  return (
  <div className='bg-gray-100'>
    {/* Cabecera */}
    <div className="pb-2 bg-white shadow-sm">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 mt-4 text-2xl font-semibold">Ficha Técnica</p>
    </div>
    <div className="max-w-6xl mx-auto mt-2 text-slate-800">
    {searchParams.id_componente?
    <FTComponente
      material = {searchParams.material}
      id = {searchParams.id}
      tipo = {searchParams.tipo}
      id_tipo = {searchParams.id_tipo}
      sistema = {searchParams.sistema}
      id_sistema = {searchParams.id_sistema}
      conjunto = {searchParams.sistema}
      id_conjunto = {searchParams.id_sistema}
      componente = {searchParams.componente}
      id_componente = {searchParams.id_componente}
      version = {searchParams.version}/>
    :
    searchParams.id_conjunto?
      <FTConjunto 
          material = {searchParams.material}
          id = {searchParams.id}
          tipo = {searchParams.tipo}
          id_tipo = {searchParams.id_tipo}
          sistema = {searchParams.sistema}
          id_sistema = {searchParams.id_sistema}
          conjunto = {searchParams.conjunto}
          id_conjunto = {searchParams.id_conjunto}
          version = {searchParams.version}/>
    :
    searchParams.id_sistema?
        <FTSistema 
          material = {searchParams.material}
          id = {searchParams.id}
          tipo = {searchParams.tipo}
          id_tipo = {searchParams.id_tipo}
          sistema = {searchParams.sistema}
          id_sistema = {searchParams.id_sistema}
          version = {searchParams.version}/>
      :
      (searchParams.material==='Vehiculos')?
          (<FTVehiculo 
            id_vehiculo = {searchParams.id}
            tipo = {searchParams.tipo}
            id_tipo = {searchParams.id_tipo}
            version = {searchParams.version}/>
          )
        :
        (<FTEAVM 
          id_EAVM = {searchParams.id}
          tipo = {searchParams.tipo}
          id_tipo = {searchParams.id_tipo}
          version = {searchParams.version}/>)
    }   
    </div>
  </div>
  )
}