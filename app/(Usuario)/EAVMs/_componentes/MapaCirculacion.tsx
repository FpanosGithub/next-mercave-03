'use client'
import { Circulacion } from "@/types/circulacion";
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'
import { useState } from "react";
import GraficasCirculacion from './GraficasCirculacion'

export default function MapaCirculacion (
{
circulacion, 
onSelect
}:{
circulacion: Circulacion, 
onSelect: Function
}) 
{
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')
  const [posicion, setPosicion] = useState(1)
  let lat_overlay = circulacion.lat_final
  let lng_overlay = circulacion.lng_final
  let texto_posicion = 'final'
  let dia = circulacion.dt_final.slice(0,10)
  let hora = circulacion.dt_final.slice(11,19)
  if (posicion === 0){
    lat_overlay = circulacion.lat_inicial
    lng_overlay = circulacion.lng_inicial
    texto_posicion = 'inicio'
    dia = circulacion.dt_inicial.slice(0,10)
    hora = circulacion.dt_inicial.slice(11,19)
  }
  function handleHover (valor_posicion:number){
    setPosicion(valor_posicion)
  }
  return(
  <div className="m-4 grid gap-2 grid-rows-2 h-[60rem] sm:flex sm:h-[21rem]">
    <div className="rounded-lg shadow p-2 bg-white w-full">
    <Map 
      provider={maptilerProvider}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[(circulacion.lat_final+circulacion.lat_inicial)/2, (circulacion.lng_final+circulacion.lng_inicial)/2]}
      defaultZoom={6} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        <Marker 
          width={30} 
          color = '#03680f'
          anchor={[circulacion.lat_final, circulacion.lng_final]}
          onMouseOver = {() => handleHover(1)}
          onClick = {() => onSelect(-1)}/>
        <Marker 
          width={30} 
          color = '#11a021' 
          anchor={[circulacion.lat_inicial, circulacion.lng_inicial]}
          onMouseOver = {() => handleHover(0)}
          onClick = {() => onSelect(-1)}/>

        {circulacion.eventos.map((evento)=>
        (
          <Marker 
          key = {evento.id}
          width={10} 
          color = '#03680f' 
          anchor={[evento.lat, evento.lng]}/>
        ))}
        <Overlay 
            anchor={[lat_overlay, lng_overlay]}>
            <div  className='flex w-56 h-12 py-2 justify-center border rounded-md bg-slate-100/80 border-slate-500'>
              <div className="flex flex-col justify-center w-full px-4 border-r border-gray-300">
                <p className="text-sm text-center">{dia}</p>
                <p className="text-gray-500 text-sm text-center">Día {texto_posicion}</p>
              </div>
              <div className="flex flex-col justify-center w-full ">
                <p className="text-sm text-center">{hora}</p>
                <p className="text-gray-500 text-sm text-center">Hora {texto_posicion}</p>
              </div>
            </div>
          </Overlay>
    </Map>
    </div>
    <div className='rounded-lg shadow w-full mx-auto overflow-y-auto p-1 bg-white'>
      <GraficasCirculacion
        circulacion = {circulacion}/>
    </div>
  </div>
  )
}