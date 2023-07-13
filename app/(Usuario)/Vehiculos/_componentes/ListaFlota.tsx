import clsx from 'clsx';
import { PauseIcon, PlayIcon, WifiIcon, WrenchIcon, SignalIcon, XMarkIcon, EyeIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';

export default function ListaFlota ({vehiculos, hover, onHover}:{vehiculos:any[], hover:Number, onHover:Function}) {

  return(
  <div className='w-full px-4 pb-8'>
    <div className='w-full rounded-lg bg-white border shadow-md h-[340px] overflow-y-auto'>
    <table className="min-w-full">
      <thead className='bg-slate-100 border-b'>
        <tr className=''>
          <th scope="col" className="sticky top-0 z-10  py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
          VEHÍCULO</th>
          <th scope="col" className="sticky top-0 z-10 hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
          DESCRIPCIÓN</th>
          <th scope="col" className="sticky top-0 z-10 hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-500 sm:table-cell">
          SERVICIO</th>
          <th scope="col" className="sticky top-0 z-10 px-3 py-3.5 text-center text-sm font-semibold text-gray-500">
          ACCIÓN</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {vehiculos.map((vehiculo:any)=>{return (
        <tr key = {vehiculo.id}
            className={clsx('',{'bg-green-100': (hover === vehiculo.id)} )}
            onMouseOver={()=>onHover(vehiculo.id)}>
          <td className="w-full max-w-0 py-4 pl-4 pr-3 text-gray-900 truncate sm:w-auto sm:max-w-none">
            {vehiculo.num_uic}
            <dl className="font-normal lg:hidden">
              <dt className="sr-only">DESCRIPCIÓN</dt>
                <dd className="mt-1 truncate text-gray-900">{vehiculo.tipo.descripcion}</dd>
            </dl>
          </td>
          <td className="hidden px-3 py-4 text-gray-900 lg:table-cell">{vehiculo.tipo.descripcion}</td>
          <td className="hidden w-28 mx-auto sm:flex justify-center gap-2 mt-4">
            <div className='group'>
              {(vehiculo.transmitiendo)?
                (<WifiIcon className="w-6 h-6 ml-2 my-1 text-green-400"/>)
              : (<WifiIcon className="w-6 h-6 ml-2 my-1 text-red-400"/>)}
              <Tooltip title="Transmisión" />
            </div>
            <div className='group'>
              {!vehiculo.en_servicio?
                (<>
                  <XMarkIcon className="w-6 h-6 ml-1 my-1 text-red-400"/>
                  <Tooltip title="Servicio" />
                </>)
              : 
              (vehiculo.en_mantenimiento?
              (<>
                <WrenchIcon className="w-6 h-6 ml-1 my-1 text-green-600" />
                <Tooltip title="Mantenimiento" />
              </>)
              :
              (vehiculo.en_circulacion?
              (<>
                <PauseIcon className="w-6 h-6 ml-1 my-1 text-red-400"/>
                <Tooltip title="Circulación" />
              </>)
              :
              (<>
                <PlayIcon className="w-6 h-6 ml-1 my-1 text-green-400"/>
                <Tooltip title="Circulación" />
              </>)
              ))}
            </div>
            <div className="group">
              {(vehiculo.alarma)?
                (<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-red-400"/>)
              : (<SignalIcon className="w-6 h-6 ml-1 mr-2 my-1 text-slate-400"/>)}
              <Tooltip title="Señal" />
            </div>
            
          </td>
          <td className="py-4 pl-3 pr-4 text-sm sm:pr-0">
            <Link href = {`/Vehiculos/${vehiculo.id}/Datos`} className = 'mx-auto flex justify-center gap-2'>
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
