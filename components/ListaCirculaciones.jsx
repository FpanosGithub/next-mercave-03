'use client'
import clsx from 'clsx';
import { XMarkIcon, CheckIcon, BellAlertIcon } from "@heroicons/react/24/solid"

export default function ListaCirculaciones ({circulaciones, select, hover, onSelect, onHover}) {
  function handleClick (id_circulacion) {
    if(select === id_circulacion) {onSelect(-1)}
    else {onSelect(id_circulacion)}
  }
  function handleHover (id_circulacion) {
    onHover(id_circulacion)
  }
  return(
    <div className='rounded-lg border border-slate-500 p-2'>
    <div className="table w-full 2xl:h-fit 2xl:max-h-full">
      <div className="table-header-group bg-slate-900">
          <div className="table-cell text-left pl-4">Día Inicio</div>
          <div className="table-cell text-left">Hora Inic.</div>
          <div className="table-cell text-left">Día Fin</div>
          <div className="table-cell text-left">Hora Fin</div>
          <div className="table-cell text-center">X</div>
          <div className="table-cell text-center">Alarma</div>
      </div>
      <div className="table-row-group">
      {circulaciones.map((circulacion)=>{
        return (
          <div key = {circulacion.id} 
                className={clsx('table-row hover:cursor-pointer hover:bg-slate-900 hover:text-slate-400', {'bg-slate-900 text-slate-400': (select === circulacion.id || hover === circulacion.id)})}
                onClick={()=>handleClick(circulacion.id)}
                onMouseOver={()=>handleHover(circulacion.id)}
                >
            <div className="table-cell pl-4 py-1">{circulacion.dt_inicial.slice(0,10)}</div>
            <div className="table-cell px-1 py-1">{circulacion.dt_inicial.slice(11,19)}</div>
            <div className="table-cell px-1 py-1">{circulacion.dt_final.slice(0,10)}</div>
            <div className="table-cell px-1 py-1">{circulacion.dt_final.slice(11,19)}</div>
            <div className = 'table-cell pt-1 mt-1'>
              {(circulacion.abierta)?
                  (<XMarkIcon className="w-6 h-6 mx-auto my-1 text-red-400"/>)
                : (<CheckIcon className="w-6 h-6 mx-auto my-1 text-green-400"/>)}
            </div>
            <div className = 'table-cell pt-1 mt-1'>
              {(circulacion.alarma)?
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