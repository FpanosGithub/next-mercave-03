import Link from 'next/link';
import Image from "next/image"
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Weather from '@/components/Weather';

export default function FichaVehiculo ({vehiculo}:{vehiculo:any}){
  console.log(vehiculo)
  return(
  <div className='w-full flex flex-col p-4 gap-3 sm:flex-row'>
      <div className='w-full flex flex-col gap-2'>
        <div className='rounded-lg shadow bg-white p-1 sm:hidden'>
          <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = 'imagen vehículo' height = {230} width = {400} className="rounded-lg mx-auto h-auto "/>
          <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen Vehículo</div>
        </div>
        <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-4 p-5'>
          <div className=''>
            <div className='text-lg font-semibold py-1'>{vehiculo?.tipo?.descripcion}</div>
            <div className='text-sm text-gray-400 font-medium'>{vehiculo?.descripcion_particular}</div>
          </div>
          <Link 
            href = {`/Documentacion/Fichas_Tecnicas?material=Vehiculos&id=${vehiculo.id}&tipo=${vehiculo.tipo.descripcion}&id_tipo=${vehiculo.tipo.id}&version=${1000}`} 
            className='rounded-md py-2 px-6 bg-gray-800 text-center hover:bg-slate-600'>
            Ficha Técnica
          </Link>
        </div>
        <div className='rounded-lg shadow bg-white flex flex-col p-1 h-[70px] sm:hidden'>
          <Weather 
            lat={vehiculo.lat}
            long={vehiculo.lng} />
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-5'>
          <div className='px-4 flex-1'>
            <div className='text-center font-semibold truncate'>{vehiculo?.num_uic}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Matrícula</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='align-middle text-center font-semibold'>{vehiculo?.tipo.tipo_uic}</div>
            <div className='text-center text-sm text-gray-400 font-medium truncate'>Tipo UIC</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='text-center font-semibold'>{vehiculo?.tipo.serie_uic}</div>
            <div className='text-center text-sm text-gray-400 font-medium truncate'>Serie UIC</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            <div className='text-center font-semibold'>{vehiculo?.owner}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Owner</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='align-middle text-center font-semibold'>{vehiculo?.keeper}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Keeper</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='text-center font-semibold'>{vehiculo?.EEM}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>E.E.M.</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            {/* Semaforo circulación del vehiculo */}
            <div className="flex justify-between w-40 my-2 mx-auto px-2 py-1 rounded-full bg-gray-100">
            {vehiculo.transmitiendo ? 
              (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
            : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
            {vehiculo.en_circulacion ? 
              (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
            : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)}
            {vehiculo.alarma_circulacion ? 
              (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400"/>)
            : (<BellAlertIcon className="w-6 h-6 mr-1 text-gray-400"/>)}
            </div>
            <div className='text-center text-sm text-gray-400 font-medium'>Circulación</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='align-middle text-center font-semibold'>{vehiculo.km_totales.toLocaleString('es-ES')}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Km Realizados</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='flex justify-center items-baseline'>
              <span className='font-semibold'>{vehiculo.vel.toLocaleString('es-ES')}</span>
              <span className='text-xs ml-2'>Km/h</span> 
            </div>
            <div className='text-center text-sm text-gray-400 font-medium'>Velocidad</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            {/* Semaforo mantenimiento del vehiculo */}
            <div className="flex justify-between my-2 w-40 mx-auto px-2 py-1 rounded-full bg-gray-100">
            {vehiculo.en_servicio ? 
              (<BoltIcon className="w-6 h-6 mr-1 text-green-400"/>)
            : (<BoltSlashIcon className="w-6 h-6 mr-1 text-red-400"/>)}
            {vehiculo.en_mantenimiento ? 
              (<WrenchIcon className = "w-6 h-6 mr-1 text-green-400"/>)
            : (<WrenchIcon className="w-6 h-6 mr-1 text-gray-400"/>)}
            {vehiculo.alarma_mantenimiento ? 
              (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400"/>)
            : (<BellAlertIcon className="w-6 h-6 mr-1 text-gray-400"/>)}
            </div>
            <div className='text-center text-sm text-gray-400 font-medium'>Mantenimiento</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='align-middle text-center font-semibold truncate'>{vehiculo.fecha_ultimo_mantenimiento}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Último Mto</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='text-center font-semibold text-red-500 truncate'>{vehiculo.fecha_proximo_mantenimiento}</div>
            <div className='text-center text-sm text-gray-400 font-medium'>Próximo Mto.</div>
          </div>
        </div>

      </div>
      <div className='flex flex-col gap-2 sm:w-[400px]'>
        <div className='hidden rounded-lg shadow bg-white sm:block'>
          <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = 'imagen vehículo' height = {230} width = {400} className="rounded-t-lg object-fill"/>
          <div className='text-gray-500 text-sm font-medium mx-4 my-1'>Imagen Vehículo</div>
        </div>
        <div className='w-full rounded-lg shadow bg-white p-1 h-[195px]'>
          <div className='h-[155px] flex flex-col p-1 gap-1'>
          {vehiculo.ejes.map((eje:any)=>{return(
            <Link key={eje.id} href={`/EAVMs/${eje.codigo}/Datos`} className='border border-green-500 rounded px-2 py-1 text-green-800 hover:bg-gray-100'>{eje.codigo}</Link>
          )})}
          </div>
          <div className='text-gray-500 text-sm font-medium mx-4 mt-2 mb-1'>Ejes</div>
        </div>
        <div className='hidden rounded-lg shadow bg-white sm:flex sm:flex-col p-1 h-[70px]'>
          <Weather 
            lat={vehiculo.lat}
            long={vehiculo.lng} />
        </div>
      </div>
  </div>
  )
}
