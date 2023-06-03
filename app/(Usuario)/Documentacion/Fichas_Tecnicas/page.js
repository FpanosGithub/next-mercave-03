import BarraNavegacion from "./_componentes/BarraNavegacion";
import FTVehiculo from "./_componentes/FTVehiculo";
import FTSistema from "./_componentes/FTSistema";
import FTConjunto from "./_componentes/FTConjunto";
import FTComponente from "./_componentes/FTComponente";
import FTEAVM from "./_componentes/FTEAVM";

export const dynamic = 'force-dynamic'

export default async function Page({searchParams}) {
  // Determinamos si tenemos que mostrar la ficha de un componente, un conjunto, un sistema, un eavm o un vehículo
  // En función de eso llamamos a unos componentes u otros
  return (
  <>
  <BarraNavegacion/>
  <div className="bg-white py-4 px-2 max-w-6xl mx-auto text-slate-800 border border-slate-500">
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
  </>
  )
}