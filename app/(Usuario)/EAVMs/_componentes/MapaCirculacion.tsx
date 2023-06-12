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
  let texto_overlay = 'Final'
  if (posicion === 0){
    lat_overlay = circulacion.lat_inicial
    lng_overlay = circulacion.lng_inicial
    texto_overlay = 'Inicial'
  }
  function handleHover (valor_posicion:number){
    setPosicion(valor_posicion)
  }
  return(
  <div className="rounded-lg shadow m-4 p-2 bg-white grid gap-2 grid-rows-2 sm:flex sm:h-[21rem]">
    <Map 
      provider={maptilerProvider}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[circulacion.lat_final, circulacion.lng_final]}
      defaultZoom={6} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        <Marker 
          width={30} 
          color = {'green'} 
          anchor={[circulacion.lat_final, circulacion.lng_final]}
          onMouseOver = {() => handleHover(1)}
          onClick = {() => onSelect(-1)}/>
        <Marker 
          width={30} 
          color = {'black'} 
          anchor={[circulacion.lat_inicial, circulacion.lng_inicial]}
          onMouseOver = {() => handleHover(0)}
          onClick = {() => onSelect(-1)}/>

        {circulacion.eventos.map((evento)=>
        (
          <Marker 
          key = {evento.id}
          width={10} 
          color = {'orange'} 
          anchor={[evento.lat, evento.lng]}/>
        ))}
        <Overlay 
            anchor={[lat_overlay, lng_overlay]}>
            <div  className='flex flex-col w-16 h-8  text-center border rounded-md bg-slate-100/80 border-slate-500'>
              <div className='my-1'>
                {texto_overlay}
              </div>
            </div>
          </Overlay>
    </Map>
    <div className='rounded-lg shadow h-[20rem] w-full mx-auto overflow-y-auto'>
      <GraficasCirculacion
        circulacion = {circulacion}/>

    </div>
  </div>
  )
}