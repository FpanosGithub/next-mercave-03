'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Map, ZoomControl, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'
import { maptiler } from 'pigeon-maps/providers'
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';
import Weather from '@/components/Weather';
import Tooltip from '@/components/Tooltip';

export default function MapaFlota ({vehiculos, hover, onHover}:{vehiculos:any[], hover:Number, onHover:Function}) {
  
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')
  
  const router = useRouter()
  function handleClick(id: Number) {
    router.push(`/Vehiculos/${id}/Datos`)
  }
  let codigo = ''
  let lat = 0 as number
  let long = 0 as number
  let imagen = ''
  let keeper = ''
  let descripcion = ''
  let en_servicio = true
  let en_mantenimiento = false
  let en_circulacion = false
  let transmitiendo = false
  let alarma = false
  let lw = 0
  let id_vehiculo = -1
  vehiculos.forEach((vehiculo: any)=> {
    if (hover === vehiculo.id) {
      codigo = vehiculo.num_uic
      lat = vehiculo.lat
      long = vehiculo.lng
      imagen = vehiculo.tipo.imagen
      keeper = vehiculo.keeper
      descripcion = vehiculo.tipo.descripcion
      if (vehiculo.en_servicio){en_servicio = true}
      if (vehiculo.en_mantenimiento){en_mantenimiento = true}
      if (vehiculo.en_circulacion){en_circulacion = true}
      if (vehiculo.transmitiendo){transmitiendo = true}
      if (vehiculo.alarma){alarma = true}
      lw = vehiculo.km_totales/1000
      id_vehiculo = vehiculo.id
    }
  })
  return(
    <div className=" m-4 grid gap-2 grid-rows-2 sm:flex sm:h-[21rem]">
      <div className='bg-white p-2 rounded-lg shadow h-[20rem] sm:flex-auto'>
        <Map 
        provider={maptilerProvider}
        dprs={[1, 2]} 
        defaultHeight={160} 
        defaultCenter={[40, -2]}
        defaultZoom={5} 
        attribution = {false}
        metaWheelZoom = {true}>
          <ZoomControl />
          {vehiculos.map((vehiculo)=>(
            hover !== vehiculo.id
            ?(<Marker 
                key = {vehiculo.id}
                width={30} 
                color = '#11a021'
                anchor={[vehiculo.lat, vehiculo.lng]} 
                onMouseOver={() => onHover(vehiculo.id)}
                onClick={()=>handleClick(vehiculo.id)}/>)
            : ('')
            ))}
          <Marker 
            width={40} 
            color = '#03680f'
            anchor = {[lat,long]} 
            onClick={()=>handleClick(id_vehiculo)}/>
        </Map>
      </div>
      <div className=' bg-white rounded-lg shadow h-[20rem] w-56 mx-auto'>
        <div className=''>
          <Image src = {`/imagenes/vehiculos/${imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg object-fill w-56'/>
          <div className='flex flex-col justify-between mb-1'>
            <div className="text-center p-1 text-gray-800 truncate">{codigo}</div>
            <div className="text-center text-base text-gray-500">{descripcion}</div>
          </div>
        </div>
          <div className="flex justify-between my-1 w-40 mx-auto px-2 py-1 rounded-full bg-gray-100">
            <div className='group'>
              {transmitiendo ? 
                (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
              : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
              <Tooltip title="Transmisión" />
            </div>
            <div className='group'>
              {!en_servicio ? 
                (<>
                  <XMarkIcon className="w-6 h-6 mr-1 text-slate-200"/>
                  <Tooltip title="Servicio" />
                </>
                )
              : (en_mantenimiento ? 
                (
                  <>
                    <WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>
                    <Tooltip title="Mantenimiento" />
                  </>
                )
                : (en_circulacion ? 
                    (
                      <>
                        <PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>
                        <Tooltip title="Circulación" />
                      </>
                    )
                    : (
                        <>
                          <PauseIcon className="w-6 h-6 mr-1 text-red-400"/>
                          <Tooltip title="Circulación" />
                        </>
                      )
                  ))}
            </div>
            <div className='group'>
              {(alarma)? 
                (<SignalIcon className = "w-6 h-6 mr-1 text-red-400"/>)
              : (<SignalIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
              <Tooltip title="Señal" />
            </div>
          </div>
          <div className=''>
            <Weather lat={lat} long={long} />
          </div>
        </div>
      </div>
  )
}