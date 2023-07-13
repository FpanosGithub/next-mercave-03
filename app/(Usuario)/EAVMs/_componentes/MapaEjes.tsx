'use client'
import { useRouter } from 'next/navigation';
import {posicionEAVM} from '@/types/EAVM'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'

export default function MapaEjes ({
  posiciones, 
  hover, 
  onHover}:{
  posiciones: posicionEAVM[], 
  hover: number, 
  onHover: Function,
  }) { 
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')
  const router = useRouter()
  function handleClick(codigo:string) {
    router.push(`/EAVMs/${codigo}/Datos`)
  }
  let id_eje = -1
  let codigo = ''
  let lat = 0
  let long = 0
  posiciones.forEach((eje)=> {
    if (hover === eje.id) {
      id_eje = eje.id
      codigo = eje.codigo
      lat = eje.lat
      long = eje.lng
    }
  })
  return(
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
        {posiciones.map((eje)=>(
          (hover !== eje.id)
            ? (<Marker 
                key = {eje.id}
                width={30} 
                color = '#11a021'
                anchor={[eje.lat, eje.lng]} 
                onMouseOver={() => onHover(eje.id)}
                onClick={()=>onHover(eje.id)}/>)
            : ('')))}
            <Marker 
              key = {id_eje}
              width={40} 
              color = '#03680f'
              anchor={[lat, long]} 
              onClick={()=>handleClick(codigo)}/>
      </Map>
    </div>
  )
}