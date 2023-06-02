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
    <div className='w-full px-1 mb-2 sm:px-4'>
      <div className="w-full px-1 py-2 sm:px-2 rounded-xl bg-white border shadow-md">
      <table className="min-w-full">
        <thead className='bg-gray-100'>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
            INICIO</th>
            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
            HORA INIC.</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
            FIN</th>
            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
            HORA FIN</th>
            <th scope="col" className="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-500 sm:table-cell">
            X</th>
            <th scope="col" className="px-2 py-3.5 text-center text-sm font-semibold text-gray-500">
            ALARMA</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
        {circulaciones.map((circulacion)=>{return (
        <tr key = {circulacion.id}
            className={clsx('',{'bg-green-100': (hover === circulacion.id)} )}
            onClick={()=>handleClick(circulacion.id)}
            onMouseOver={()=>handleHover(circulacion.id)}> 

          <td className="py-4 pl-4 pr-1 sm:pr-3 text-gray-700 truncate lg:w-auto lg:max-w-none">
            {circulacion.dt_inicial.slice(0,10)}
            <dl className="font-normal lg:hidden">
              <dt className="sr-only">HORA INICIAL</dt>
                <dd className="mt-1 truncate text-gray-400">{circulacion.dt_inicial.slice(11,19)}</dd>
            </dl>
          </td>
          <td className="hidden px-3 py-4 text-gray-700 lg:table-cell">{circulacion.dt_inicial.slice(11,19)}</td>
          
          <td className="py-4 pl-4 pr-3 text-gray-700 truncate lg:w-auto lg:max-w-none">
            {circulacion.dt_final.slice(0,10)}
            <dl className="font-normal lg:hidden">
              <dt className="sr-only">HORA FINAL</dt>
                <dd className="mt-1 truncate text-gray-400">{circulacion.dt_final.slice(11,19)}</dd>
            </dl>
          </td>
          <td className="hidden px-3 py-4 text-gray-700 lg:table-cell">{circulacion.dt_final.slice(11,19)}</td>
          
          <td className="hidden py-4 pl-1 sm:pl-3 text-sm sm:table-cell">
            {(circulacion.abierta)
              ? (<XMarkIcon className="w-6 h-6 mx-auto my-1 text-red-400"/>)
              : (<CheckIcon className="w-6 h-6 mx-auto my-1 text-green-400"/>)
            }
          </td>
          <td className="py-4 pl-2 pr-2 text-sm sm:pr-0">
            {(circulacion.alarma)
              ? (<BellAlertIcon className="w-6 h-6 mx-auto my-1 text-red-400"/>)
              : (<BellAlertIcon className="w-6 h-6 mx-auto my-1 text-slate-400"/>)
            }
          </td>
        </tr>
        )})}
      </tbody>
    </table>
    </div>            
  </div>
  )
}