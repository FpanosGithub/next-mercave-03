'use client'
import {useState, useEffect} from "react"
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { PauseIcon, PlayIcon, WifiIcon, WrenchIcon, SignalIcon, XMarkIcon, BellAlertIcon } from "@heroicons/react/24/solid"


export default function ListaFlota ({vehiculos, hover, onHover}) {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter()
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  
  function handleClick(id) {
    router.push(`/Vehiculos/${id}`)
  }
  const handleHover = (id) => {
    onHover(id)
  };
  return(
    <div className='p-2 overflow-y-scroll border border-slate-500 rounded-lg 2xl:basis-1/3'>
    <div className="table w-full 2xl:h-fit 2xl:max-h-full">
      <div className="table-header-group bg-slate-900">
        <div className="table-row h-7 text-lg text-slate-400">
          <div className="table-cell text-left pl-4 w-44">Matricula</div>
          <div className="table-cell text-left">Descripción</div>
          <div className="table-cell text-center">Servicio</div>
        </div>
      </div>
      <div className="table-row-group">
      {vehiculos.map((vehiculo)=>{
        return (
          <div key = {vehiculo.id} 
                className={clsx('table-row', {'bg-slate-900 text-slate-400': (hover === vehiculo.id)})}
                onClick={()=>handleClick(vehiculo.id)}
                onMouseOver={()=>handleHover(vehiculo.id)}>
            <div className="table-cell pl-4 py-1">{vehiculo.num_uic}</div>
            <div className="table-cell px-1 py-1">{vehiculo.tipo.descripcion}</div>
            <div className = 'table-cell pt-1'>
              <div className = 'w-28 mx-auto flex justify-center border border-slate-500 rounded-lg  bg-slate-900 mt-1'>
                {(vehiculo.transmitiendo)?
                  (<WifiIcon className="w-6 h-6 ml-2 mr-1 my-1 text-green-400"/>)
                : (<WifiIcon className="w-6 h-6 ml-2 mr-1 my-1 text-red-400"/>)
                }
                {!vehiculo.en_servicio?
                  (<XMarkIcon className="w-6 h-6 ml-1 mr-1 my-1 text-red-400"/>)
                  : 
                  (vehiculo.en_mantenimiento?
                      (<WrenchIcon className="w-6 h-6 ml-1 mr-1 my-1 text-green-600"/>)
                      :
                      (vehiculo.en_circulacion?
                        (<PauseIcon className="w-6 h-6 ml-1 mr-1 my-1 text-red-400"/>)
                        :
                        (<PlayIcon className="w-6 h-6 ml-1 mr-1 my-1 text-green-400"/>)
                      ))}
                {(vehiculo.alarma)?
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