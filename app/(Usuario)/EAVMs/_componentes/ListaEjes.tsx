import clsx from 'clsx';
import { SignalIcon, EyeIcon, BellAlertIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';

export default function ListaEjes ({ejes, hover, onHover}:{ejes:any, hover:number, onHover:Function}) {
  console.log(ejes)
  return(
  <div className='w-full px-4 pb-8'>
    <div className='w-full rounded-xl bg-white border shadow-md h-[390px] overflow-y-auto'>
      <table className="min-w-full">
        <thead className=''>
          <tr className=''>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
            EJE</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 xl:table-cell">
            VERSIÓN</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 xl:table-cell">
            VEHÍCULO</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 lg:table-cell">
            KM TOTAL</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 lg:table-cell">
            CAMBIOS</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 sm:table-cell">
            PROX. MTO.</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 xm:table-cell">
            ALARMA</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  px-3 py-3.5 text-center text-sm font-semibold text-gray-500">
            ACCIÓN</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {ejes.map((eje:any)=>{return (
          <tr key = {eje.id}
            className={clsx('',{'bg-green-100': (hover === eje.id)} )}
            onMouseOver={()=>onHover(eje.id)}>
            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-gray-700 truncate sm:w-auto sm:max-w-none">
              {eje.codigo}
              <dl className="font-normal xl:hidden">
                <dt className="sr-only">Versión</dt>
                <dd className="mt-1 truncate text-gray-400">{eje.tipo_EAVM.codigo}</dd>
              </dl>
            </td>
            <td className="hidden px-3 py-4 text-gray-700 xl:table-cell">{eje.tipo_EAVM.codigo}</td>
            <td className="hidden px-3 py-4 text-gray-700 xl:table-cell">{eje.vehiculo?.num_uic}</td>
            <td className="hidden px-3 py-4 text-gray-700 text-right lg:table-cell">{Math.round(eje.km_totales).toLocaleString('es-ES')}</td>
            <td className="hidden px-3 py-4 text-gray-700 text-right lg:table-cell">{Math.round(eje.num_cambios).toLocaleString('es-ES')}</td>
            <td className="hidden px-3 py-4 text-gray-700 sm:table-cell">{eje.fecha_proximo_mantenimiento}</td>
            <td className="hidden pl-7 mt-4 xm:table-cell">
            {(eje.alarma_temp || eje.alarma_aceleraciones || eje.alarma_cambio || eje.alarma_mantenimiento)
            ? <BellAlertIcon className="w-6 h-6 my-1 text-red-600 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 my-1 text-gray-500"/>
            }
            </td>
            <td className="py-4 pl-3 pr-4 text-sm sm:pr-0">
            <Link href = {`/EAVMs/${eje.id}/Datos`} className = 'mx-auto flex justify-center gap-2'>
              <EyeIcon className='text-green-600 w-4 h-4 mx-1'/>
              <span className='text-green-600 font-medium text-base -mt-1'>Detalle</span>
            </Link>
          </td>
          </tr>
          )})}
        </tbody>
      </table>
    </div>
  </div>  
  )
}