import clsx from 'clsx';
import { SignalIcon, EyeIcon, BellAlertIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';

export default function ListaCambiosBanco ({cambios, select, onSelect}:{cambios:any, select:number, onSelect:Function}) {
  return(
  <div className='pb-8 flex-1'>
    <div className='w-full rounded-lg bg-white border shadow-md h-[630px] overflow-y-auto'>
      <table className="min-w-full">
        <thead className=''>
          <tr className=''>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
            ID</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
            FECHA</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 xl:table-cell">
            V</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 xl:table-cell">
            FV</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 md:table-cell">
            SENTIDO</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  px-3 py-3.5 text-right text-sm font-semibold text-gray-500">
            ALARMA</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {cambios.map((cambio:any)=>{return (
          <tr key = {cambio.id}
            className={clsx('',{'bg-green-100': (select === cambio.id)} )}
            onMouseDown={()=>onSelect(cambio.id)}>
            <td className="py-4 pl-4 pr-3 text-gray-700">{cambio.id}</td>
            <td className="px-3 py-4 text-gray-700">{cambio.dt.slice(0,10)}</td>
            <td className="hidden px-3 py-4 text-gray-700 xl:table-cell">{Math.round(cambio.V).toLocaleString('es-ES')} Km/h</td>
            <td className="hidden px-3 py-4 text-gray-700 text-right xl:table-cell">{Math.round(cambio.FV).toLocaleString('es-ES')} N</td>
            <td className="hidden px-3 py-4 text-gray-700 text-right md:table-cell">{cambio.sentido}</td>
            <td className="mt-4 mr-8 flex justify-end">
            {(cambio.alarma)
            ? <BellAlertIcon className="w-6 h-6 my-1 text-red-600 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 my-1 text-gray-500"/>
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