import Link from 'next/link';
import Image from "next/image"
import {EAVMCompleto} from '@/types/EAVM'
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, BellAlertIcon} from '@heroicons/react/24/solid';
import Weather from '@/components/Weather';
import clsx from 'clsx';

export default function FichaEje ({eje}:{eje:EAVMCompleto}){
  return(
  <div className='w-full flex flex-col p-4 gap-3 sm:flex-row'>
    <div className='w-full flex flex-col gap-2'>
      <div className='rounded-lg shadow bg-white p-1 sm:hidden'>
        <Image src = {'/imagenes/ejes/eje.png'} alt = 'imagen eje' height = {230} width = {400} className="rounded-lg mx-auto h-auto "/>
        <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen EAVM</div>
      </div>
      <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-4 p-5'>
        <div className=''>
          <div className='text-lg font-semibold py-1'>{eje.codigo}</div>
        </div>
        <Link 
          href = {`/Documentacion/Fichas_Tecnicas?material=EAVMs&id=${eje.id}&tipo=${eje.tipo_EAVM.codigo}&id_tipo=${eje.tipo_EAVM.id}&version=${1000}`} 
          className='rounded-md py-2 px-6 bg-gray-800 text-center hover:bg-slate-600'>
          Ficha Técnica
        </Link>
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.tipo_EAVM.codigo}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Versión</div>
        </div>
        <div className='border-l border-r border-gray-200 px-4 flex-1 flex flex-col'>
          <Link href= {`/Vehiculos/${eje.vehiculo?.id}/Datos`} className='text-center text-green-700 font-semibold'>{eje.vehiculo?.num_uic}</Link>
          <div className='text-center text-sm text-gray-400 font-medium truncate'>Vehículo</div>
        </div>
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.owner}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Owner</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.keeper}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Keeper</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.fabricante}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Fabricante</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>  
          <div className='text-center font-semibold truncate'>{eje.EEM}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>EEM</div>
        </div>  
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='mx-auto w-24 rounded-full bg-gray-100'>
            {eje.en_servicio
            ? <BoltIcon className="w-6 h-6 mx-auto text-amber-400"/>
            : <BoltSlashIcon className="w-6 h-6 mx-auto text-orange-500"/>
            }
          </div>
          <div className='text-center text-sm text-gray-400 font-medium'>Servicio</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.fecha_fab}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Fabricado</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate max-w-sm'>{eje.observaciones_servicio}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Observaciones</div>
        </div> 
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='mx-auto w-40 rounded-full bg-gray-100 flex gap-2 justify-center'>
            {eje.en_circulacion
            ? <PlayIcon className="w-6 h-6 mx-auto text-green-400"/>
            : <PauseIcon className="w-6 h-6 mx-auto text-red-500"/>
            }
            {eje.alarma_temp
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
            {eje.alarma_aceleraciones
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          </div>
          <div className='text-center text-sm text-gray-400 font-medium'>Circulación</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{Math.round(eje.km_totales).toLocaleString('es-ES')} Km</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Km realizados</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200 flex flex-col'>
          <div className='mx-auto font-semibold truncate max-w-sm flex gap-4 justify-center'>
            <span className={clsx('text-md font-semibold',
              {
                'text-blue-600': (eje.tempa<=(-20)),
                'text-blue-500': (eje.tempa>(-20)&&eje.tempa<=(-10)),
                'text-blue-400': (eje.tempa>(-10)&&eje.tempa<=(-0)),
                'text-teal-200': (eje.tempa>(0)&&eje.tempa<=(10)),
                'text-emerald-200': (eje.tempa>(10)&&eje.tempa<=(20)),
                'text-lime-300': (eje.tempa>(20)&&eje.tempa<=(30)),
                'text-lime-400': (eje.tempa>(30)&&eje.tempa<=(40)),
                'text-amber-300': (eje.tempa>(40)&&eje.tempa<=(50)),
                'text-orange-300': (eje.tempa>(50)&&eje.tempa<=(60)),
                'text-orange-400': (eje.tempa>(60)&&eje.tempa<=(70)),
                'text-red-500': (eje.tempa>(70)),
              },
              )}>
              A:{eje.tempa.toFixed(1)}º
            </span>
            <span className={clsx('text-md font-semibold',
              {
                'text-blue-600': (eje.tempb<=(-20)),
                'text-blue-500': (eje.tempb>(-20)&&eje.tempb<=(-10)),
                'text-blue-400': (eje.tempb>(-10)&&eje.tempb<=(-0)),
                'text-teal-200': (eje.tempb>(0)&&eje.tempb<=(10)),
                'text-emerald-200': (eje.tempb>(10)&&eje.tempb<=(20)),
                'text-lime-300': (eje.tempb>(20)&&eje.tempb<=(30)),
                'text-lime-400': (eje.tempb>(30)&&eje.tempb<=(40)),
                'text-amber-300': (eje.tempb>(40)&&eje.tempb<=(50)),
                'text-orange-300': (eje.tempb>(50)&&eje.tempb<=(60)),
                'text-orange-400': (eje.tempb>(60)&&eje.tempb<=(70)),
                'text-red-500': (eje.tempb>(70)),
              },
              )}>
              B:{eje.tempb.toFixed(1)}º
            </span>
          </div>
          <div className='mx-auto text-sm text-gray-400 font-medium'>Temp. ruedas</div>
        </div> 
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='mx-auto w-32 rounded-full bg-gray-100 flex gap-2 justify-center'>
            {eje.en_mantenimiento
            ? <WrenchIcon className="w-6 h-6 mx-auto text-green-400"/>
            : <WrenchIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
            {eje.alarma_mantenimiento
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          </div>
          <div className='text-center text-sm text-gray-400 font-medium'>Mantenimiento</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.fecha_ultimo_mantenimiento}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Último Mto.</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center text-amber-500 font-semibold truncate'>{eje.fecha_proximo_mantenimiento}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Próximo Mto.</div>
        </div>
      </div>
      <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='mx-auto w-24 rounded-full bg-gray-100 flex gap-2 justify-center'>
            {eje.alarma_cambio
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          </div>
          <div className='text-center text-sm text-gray-400 font-medium'>Cambios</div>
        </div>
        <div className='px-4 flex-1 border-l border-r border-gray-200'>
          <div className='text-center font-semibold truncate'>{eje.num_cambios}</div>
          <div className='text-center text-sm text-gray-400 font-medium'>Cambios realizados</div>
        </div>
      </div>
    </div>
    {/* Lateral */}
    <div className='flex flex-col gap-2 sm:w-[400px]'>
      <div className='hidden rounded-lg shadow bg-white sm:block'>
        <Image src = {'/imagenes/ejes/eje.png'} alt = 'imagen eje' height = {230} width = {400} className="rounded-t-lg h-auto"/>
        <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen EAVM</div>
      </div>
      <div className='rounded-lg shadow p-4 bg-white sm:flex sm:justify-center sm:flex-wrap sm:gap-4'>
        <div className='shadow rounded p-2 flex flex-col gap-1'>
          {eje.alarma_temp
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          <span className='mx-auto text-sm text-gray-700'>Temperatura</span>
          <Link href='' className='mx-auto text-center w-24 rounded-md border border-green-700 text-sm font-light text-green-700'>Reset</Link>
        </div>
        <div className='shadow rounded p-2 flex flex-col gap-1'>
          {eje.alarma_aceleraciones
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          <span className='mx-auto text-sm text-gray-700'>Aceleraciones</span>
          <Link href='' className='mx-auto text-center w-24 rounded-md border border-green-700 text-sm font-light text-green-700'>Reset</Link>
        </div>
        <div className='shadow rounded p-2 flex flex-col gap-1'>
          {eje.alarma_mantenimiento
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          <span className='mx-auto text-sm text-gray-700'>Mantenimiento</span>
          <Link href='' className='mx-auto text-center w-24 rounded-md border border-green-700 text-sm font-light text-green-700'>Reset</Link>
        </div>
        <div className='shadow rounded p-2 flex flex-col gap-1'>
          {eje.alarma_cambio
            ? <BellAlertIcon className="w-6 h-6 mx-auto text-red-400 animate-pulse"/>
            : <BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>
            }
          <span className='mx-auto text-sm'>Cambio</span>
          <Link href='' className='mx-auto text-center w-24 rounded-md border border-green-700 text-sm font-light text-green-700'>Reset</Link>
        </div>
      </div>
    </div>
  </div>
  )
}
