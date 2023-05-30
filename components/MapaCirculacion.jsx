'use client'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { useState } from "react";

export default function MapaCirculacion ({circulacion, onSelect}) {
  const [posicion, setPosicion] = useState(1)
  let anchor_overlay = [circulacion.lat_final, circulacion.lng_final]
  let texto_overlay = 'Final'
  if (posicion === 0){
    anchor_overlay = [circulacion.lat_inicial, circulacion.lng_inicial]
    texto_overlay = 'Inicial'
  }
  function handleHover (valor_posicion){
    setPosicion(valor_posicion)
  }
  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem]">
    <Map 
      provider={stamenToner}
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
            anchor={anchor_overlay}>
              <div  className='flex flex-col w-10 h-6 text-xs text-center border rounded-md bg-slate-600/80 border-slate-500'>
                <div className='my-1'>{texto_overlay}</div>
              </div>
          </Overlay>
    </Map>
    </div>
  )
}