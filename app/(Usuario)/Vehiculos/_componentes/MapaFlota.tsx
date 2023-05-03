'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Map, ZoomControl, Marker, Overlay, Point } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'
import { maptiler } from 'pigeon-maps/providers'
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';

export default function MapaFlota ({vehiculos, hover, onHover}:{vehiculos:any[], hover:Number, onHover:Function}) {
  
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')
  
  const router = useRouter()
  function handleClick(id: Number) {
    router.push(`/Vehiculos/${id}`)
  }
  let punto_purple:Point = [0, 0]
  let codigo = ''
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
  let width_overlay = 'w-0'
  let width_marker_overlay = 0
  if (hover !== -1)
        {
        vehiculos.forEach((vehiculo: any)=> {
            if (hover === vehiculo.id) {
                punto_purple = [vehiculo.lat, vehiculo.lng]
                codigo = vehiculo.num_uic
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
                width_overlay = 'w-44'
                width_marker_overlay = 40
            }
            })
        }
  return(
    <div className="rounded-lg shadow p-2 h-[20rem] m-4 bg-white">
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
          (hover !== vehiculo.id)?
            (<Marker 
              key = {vehiculo.id}
              width={30} 
              color = '#087314'
              anchor={[vehiculo.lat, vehiculo.lng]} 
              onMouseOver={() => onHover(vehiculo.id)}
              onClick={()=>handleClick(vehiculo.id)}/>)
            :
            ('')
            ))}
        <Marker 
          width={width_marker_overlay} 
          color = 'purple'
          anchor = {punto_purple} 
          onClick={()=>handleClick(id_vehiculo)}/>
        <Overlay anchor ={punto_purple}>
            <div className={`${width_overlay} p-1 pb-2 bg-slate-700/90 shadow-xl rounded-md`} onClick = {() => onHover(-1)}>
              <Image src = {`/imagenes/vehiculos/${imagen}`} alt = '' height = {100} width = {160}/>
              <div className="text-center bg-slate-800/80 mt-1 p-1 rounded-lg text-gray-100">
                {codigo}
              </div>
              <div className="text-center text-gray-100">
                {keeper}
              </div>
              <div className="text-center text-sm text-gray-100">
                {descripcion}
              </div>
              <div className="flex justify-between mt-3 px-2 border border-slate-400 rounded-lg">
                {transmitiendo ? 
                  (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
                : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
                {!en_servicio ? 
                  (<XMarkIcon className="w-6 h-6 mr-1 text-slate-200"/>)
                : (en_mantenimiento ? 
                    (<WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>)
                : (en_circulacion ? 
                    (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
                  : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)
                ))}
                {(alarma)? 
                  (<SignalIcon className = "w-6 h-6 mr-1 text-red-400"/>)
                : (<SignalIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
              </div>
            </div>
        </Overlay>
    </Map>
    </div>
  )
}