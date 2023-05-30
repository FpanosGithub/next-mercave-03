'use client'
import clsx from 'clsx';
import { BellAlertIcon } from "@heroicons/react/24/solid"

export default function ListaCambios ({cambios, hover, onHover}) {

  function handleHover (id_cambio) {onHover(id_cambio)}
  return(
    <div className='rounded-lg border border-slate-500 p-2'>
    <div className="table w-full 2xl:h-fit 2xl:max-h-full">
      <div className="table-header-group bg-slate-900">
          <div className="table-cell text-left pl-4">Id</div>
          <div className="table-cell text-left">Cambiador.</div>
          <div className="table-cell text-left">Fecha</div>
          <div className="table-cell text-left">Hora</div>
          <div className="table-cell text-center">Alarma</div>
      </div>
      <div className="table-row-group">
      {cambios.map((cambio)=>{
        return (
          <div key = {cambio.id} 
                className={clsx('table-row hover:cursor-pointer hover:bg-slate-900 hover:text-slate-400', {'bg-slate-900 text-slate-400': (hover === cambio.id)})}
                onMouseOver={()=>handleHover(cambio.id)}
                >
            <div className="table-cell pl-4 py-1">{cambio.id}</div>
            <div className="table-cell px-1 py-1">{cambio.operacion.cambiador.codigo}</div>
            <div className="table-cell px-1 py-1">{cambio.inicio.slice(0,10)}</div>
            <div className="table-cell px-1 py-1">{cambio.inicio.slice(11,19)}</div>
            <div className = 'table-cell pt-1 mt-1'>
              {(cambio.alarma)?
                  (<BellAlertIcon className="w-6 h-6 mx-auto my-1 text-red-400"/>)
                : (<BellAlertIcon className="w-6 h-6 mx-auto my-1 text-slate-400"/>)}
            </div>
          </div>
          )})}
      </div>
    </div>            
    </div>
  )
}