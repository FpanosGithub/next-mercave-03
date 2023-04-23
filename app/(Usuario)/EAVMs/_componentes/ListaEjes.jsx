'use client'
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { PauseIcon, PlayIcon, WifiIcon, WrenchIcon, SignalIcon, XMarkIcon, BellAlertIcon } from "@heroicons/react/24/solid"


export default function ListaEjes ({ejes, hover, onHover}) {
  const router = useRouter()
  function handleClick(id) {
    router.push(`/Ejes_EAVM/${id}`)
  }
  const handleHover = (id) => {
    onHover(id)
  };
  return(
    <div className='p-2 overflow-y-scroll border border-slate-500 rounded-lg 2xl:basis-1/3'>
    <div className="table w-full 2xl:h-fit 2xl:max-h-full">
      <div className="table-header-group bg-slate-900">
        <div className="table-row h-7 text-lg text-slate-400">
          <div className="table-cell text-left pl-4 w-35">Eje</div>
          <div className="table-cell text-left">Rueda</div>
          <div className="table-cell text-left">Vehículo</div>
          <div className="table-cell text-left">Alarma</div>
        </div>
      </div>
      <div className="table-row-group">
      {ejes.map((eje)=>{
        return (
          <div key = {eje.id} 
                className={clsx('table-row', {'bg-slate-900 text-slate-400': (hover === eje.id)})}
                onClick={()=>handleClick(eje.id)}
                onMouseOver={()=>handleHover(eje.id)}>
            <div className="table-cell pl-4 py-1">{eje.codigo}</div>
            {eje.tipo_EAVM.codigo.includes('920')?
              <div className="table-cell px-1 py-1">920 mm</div>
            : <div className="table-cell px-1 py-1">760 mm</div>
            }
            
            <div className="table-cell px-1 py-1">{eje.vehiculo.matricula}</div>
            <div className = 'table-cell pt-1'>
              <div className = 'ml-2 w-12 flex justify-center mt-1'>
                {(eje.alarma)?
                  (<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-red-400"/>)
                :(<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-slate-400"/>)
                }
              </div>
            </div>
          </div>
          )})}
      </div>            
    </div>
    </div>
  )
}