'use client'
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { maptiler } from 'pigeon-maps/providers'
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, BellAlertIcon} from '@heroicons/react/24/solid';
import Weather from '@/components/Weather';

export default function MapaEjes ({ejes, hover, onHover}) {
  
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')

  const router = useRouter()
  function handleClick(id) {
    router.push(`/EAVMs/${id}`)
  }
  let id_eje = -1
  let codigo = ''
  let imagen = 'eje.png'
  let EEM = ''
  let owner = ''
  let fabricante = ''
  let en_servicio = true
  let en_mantenimiento = false
  let en_circulacion = false
  let alarma_temp = false
  let alarma_aceleraciones = false
  let alarma_cambio = false
  let alarma_mantenimiento = false
  let vehiculo = ''
  let lat = 0
  let long = 0
  ejes.forEach((eje)=> {
    if (hover === eje.id) {
      id_eje = eje.id
      codigo = eje.codigo
      lat = eje.lat
      long = eje.lng
      EEM = eje.EEM
      owner = eje.owner
      fabricante = eje.fabricante
      if (eje.en_servicio){en_servicio = true}
      if (eje.en_mantenimiento){en_mantenimiento = true}
      if (eje.en_circulacion){en_circulacion = true}
      if (eje.alarma_temp){alarma_temp = true}
      if (eje.alarma_aceleraciones){alarma_aceleraciones = true}
      if (eje.alarma_cambio){alarma_cambio = true}
      if (eje.alarma_mantenimiento){alarma_mantenimiento = true}
      vehiculo = eje.vehiculo.num_uic
    }
  })
  return(
    <div className="rounded-lg shadow m-4 p-2 bg-white grid gap-2 grid-rows-2 sm:flex sm:h-[21rem]">
      <div className='h-[20rem] sm:flex-auto'>
        <Map 
          provider={maptilerProvider}
          dprs={[1, 2]} 
          defaultHeight={160} 
          defaultCenter={[40, -2]}
          defaultZoom={5} 
          attribution = {false}
          metaWheelZoom = {true}>
          <ZoomControl />
          {ejes.map((eje)=>(
            (hover !== eje.id)
            ? (<Marker 
                key = {eje.id}
                width={30} 
                color = '#087314'
                anchor={[eje.lat, eje.lng]} 
                onMouseOver={() => onHover(eje.id)}
                onClick={()=>handleClick(eje.id)}/>)
            : ('')))}
            <Marker 
              key = {id_eje}
              width={40} 
              color = 'purple'
              anchor={[lat, long]} 
              onClick={()=>handleClick(id_eje)}/>
        </Map>
      </div>
      <div className='rounded-lg shadow h-[20rem] w-56 mx-auto'>
        <div className=''>
          <Image src = {`/imagenes/ejes/${imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg object-fill w-56'/>
          <div className='flex flex-col justify-between mb-2'>
            <div className="text-center p-1 text-gray-800 truncate">{codigo}</div>
            <div className="text-center p-1 text-gray-800 truncate">Fabricante: {fabricante}</div>
          </div>
        </div>
          <div className="flex justify-between my-2 mx-4 px-2 py-1 rounded-full bg-gray-100">
            {en_servicio 
            ? (<BoltIcon className="w-6 h-6 mr-1 text-green-600"/>)
            : (<BoltSlashIcon className="w-6 h-6 mr-1 text-red-600"/>)}
            {en_circulacion 
            ? (<PlayIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(alarma_aceleraciones || alarma_temp)})}/>)
            : (<PauseIcon className={clsx("w-6 h-6 mr-1 text-red-600",{"animate-pulse":(alarma_aceleraciones || alarma_temp)})}/>)}
            {en_mantenimiento 
            ? (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(alarma_mantenimiento)})}/>)
            : (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-gray-500",{"animate-pulse":(alarma_mantenimiento)})}/>)}
            {(alarma_temp || alarma_aceleraciones || alarma_mantenimiento || alarma_cambio)? 
              (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400 animate-pulse"/>)
            : (<BellAlertIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
          </div>
          <div className='mt-3 border-t border-gray-200'>
            <Weather lat={lat} long={long} />
          </div>
        </div>
    </div>
  )
}