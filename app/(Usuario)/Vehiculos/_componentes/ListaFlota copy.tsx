import clsx from 'clsx';
import {useState, useEffect} from "react"
import { PauseIcon, PlayIcon, WifiIcon, WrenchIcon, SignalIcon, XMarkIcon, EyeIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';

export default function ListaFlota ({vehiculos, hover, onHover}:{vehiculos:any[], hover:Number, onHover:Function}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {setHasMounted(true)}, []);
  if (!hasMounted) {return null;}

  return(
  <div className='w-full px-4'>
    <div className="table w-full overflow-y-scroll border border-slate-200 shadow-md rounded-lg bg-white">
      <div className="table-header-group">
        <div className="table-row bg-gray-100 text-gray-500 text-sm font-semibold uppercase">
          <div className="table-cell text-left pl-4 py-4 truncate">MATRÍCULA</div>
          <div className="table-cell text-left truncate">DESCRIPCIÓN</div>
          <div className="table-cell text-center truncate">SERVICIO</div>
          <div className="table-cell text-center truncate">ACCIÓN</div>
        </div>
      </div>
      <div className="table-row-group">
      {vehiculos.map((vehiculo:any)=>{
        return (
          <div  
            className={clsx('table-row text-black',{'bg-green-100': (hover === vehiculo.id)} )} key = {vehiculo.id} 
            onMouseOver={()=>onHover(vehiculo.id)}>
            <div className="table-cell pl-4 py-4">{vehiculo.num_uic}</div>
            <div className="table-cell px-1">{vehiculo.tipo.descripcion}</div>
            <div className = 'table-cell'>
              <div className = 'w-28 mx-auto flex justify-center gap-2 mt-4'>
                {(vehiculo.transmitiendo)?
                  (<WifiIcon className="w-6 h-6 ml-2 my-1 text-green-400"/>)
                : (<WifiIcon className="w-6 h-6 ml-2 my-1 text-red-400"/>)
                }
                {!vehiculo.en_servicio?
                  (<XMarkIcon className="w-6 h-6 ml-1 my-1 text-red-400"/>)
                  : 
                  (vehiculo.en_mantenimiento?
                      (<WrenchIcon className="w-6 h-6 ml-1 my-1 text-green-600"/>)
                      :
                      (vehiculo.en_circulacion?
                        (<PauseIcon className="w-6 h-6 ml-1 my-1 text-red-400"/>)
                        :
                        (<PlayIcon className="w-6 h-6 ml-1 my-1 text-green-400"/>)
                      ))}
                {(vehiculo.alarma)?
                  (<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-red-400"/>)
                :(<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-slate-400"/>)
                }
              </div>
            </div>
            <div className = 'table-cell'>
              <Link href = {`/vehiculo/${vehiculo.id}`} className = 'mx-auto flex justify-center gap-2 mt-4'>
                <EyeIcon className='text-green-600 w-6 h-6 mx-1 my-1'/>
                <span className='text-green-600 font-medium text-base'>Ver Detalles</span>
              </Link>
            </div>
          </div>
          )})}
      </div>            
    </div>
  </div>
  )
}