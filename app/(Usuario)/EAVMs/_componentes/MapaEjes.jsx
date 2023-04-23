'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, BellAlertIcon} from '@heroicons/react/24/solid';

export default function MapaEjes ({ejes, hover, onHover}) {
  const router = useRouter()
  function handleClick(id) {
    router.push(`/Ejes_EAVM/${id}`)
  }
  let id_eje = -1
  let punto_purple = [0, 0]
  let codigo = ''
  let imagen = 'eje.png'
  let EEM = ''
  let en_servicio = true
  let en_mantenimiento = false
  let en_circulacion = false
  let alarma = false
  let vehiculo = ''
  if (hover !== -1)
        {
          ejes.forEach((eje)=> {
            if (hover === eje.id) {
                id_eje = eje.id
                punto_purple = [eje.lat, eje.lng]
                codigo = eje.codigo
                EEM = eje.EEM
                if (eje.en_servicio){en_servicio = true}
                if (eje.en_mantenimiento){en_mantenimiento = true}
                if (eje.en_circulacion){en_circulacion = true}
                if (eje.alarma){alarma = true}
                vehiculo = eje.vehiculo
            }
            })
        }
  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem] 2xl:basis-2/3 2xl:h-full">
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[40, -2]}
      defaultZoom={5} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        {ejes.map((eje)=>(
          (hover !== eje.id)?
            (<Marker 
              key = {eje.id}
              width={30} 
              color = '#087314'
              anchor={[eje.lat, eje.lng]} 
              onMouseOver={() => onHover(eje.id)}
              onClick={()=>handleClick(eje.id)}/>)
            :
            ('')
            ))}
        <Marker 
          width={40} 
          color = 'purple'
          anchor={punto_purple} 
          onClick={()=>handleClick(id_eje)}/>
        <Overlay anchor={punto_purple}>
            <div className="w-36 p-1 pb-2 bg-slate-700/90 shadow-xl rounded-md" onClick = {() => onHover(-1)}>
              <Image src = {`/imagenes/ejes/${imagen}`} alt = '' height = {100} width = {160}/>
              <div className="text-center bg-slate-800/80 mt-1 rounded-lg">
                {codigo}
              </div>
              <div className="mt-2 text-center text-slate-400">
                EEM: {EEM}
              </div>
              <div className="flex justify-between mt-3 p-2 border border-slate-400 rounded-lg">
                {en_servicio ? 
                  (<BoltIcon className="w-6 h-6 mr-1 text-green-600"/>)
                : (<BoltSlashIcon className="w-6 h-6 mr-1 text-red-400"/>)}
                {en_mantenimiento ? 
                  (<WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>)
                : (<WrenchIcon className="w-6 h-6 mr-1 text-gray-500"/>)}
                {en_circulacion ? 
                  (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
                : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)}
                {(alarma)? 
                  (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400"/>)
                : (<BellAlertIcon className = "w-6 h-6 mr-1 text-gray-500"/>)}
              </div>
            </div>
        </Overlay>
    </Map>
    </div>
  )
}