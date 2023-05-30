'use client'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { XMarkIcon, CheckIcon, BellAlertIcon } from "@heroicons/react/24/solid"
import {objeto_cambio} from '@/lib/mercave';

export default function MapaCambios ({cambios, hover, onHover}) {
  
  let overlay = objeto_cambio
  if (hover !== -1) {
    cambios.forEach((cambio)=> {
      if (hover === cambio.id) {overlay = cambio}})}

  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem]">
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[36, -2]}
      defaultZoom={5} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        {cambios.map((cambio)=>
        (
          <Marker 
          key = {cambio.id}
          width={20} 
          color = 'darkgreen' 
          anchor={[cambio.operacion.cambiador.lat, cambio.operacion.cambiador.lng]}
          onMouseOver={() => onHover(cambio.id)}/>
        )
        )}
        {(hover !== -1)?
          (<Overlay 
            anchor={[overlay.operacion.cambiador.lat, overlay.operacion.cambiador.lng]}>
              <div  className='w-40 h-80 p-2 text-xs border rounded-md bg-slate-600/90 border-slate-900 hover:cursor-zoom-out'
                    onClick = {() => onHover(-1)}>
                {overlay.alarma? 
                  (<BellAlertIcon className="border rounded-full p-1 w-8 h-8 mx-auto my-1 text-red-600"/>) 
                : (<BellAlertIcon className="w-6 h-6 mx-auto my-1 text-gray-300"/>)}
                <div className='my-1 text-base flex justify-between items-center'>
                  <span>{overlay.eje}</span>
                  <span>{overlay.num_cambio_eje}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span >Fecha:</span>
                  <span>{overlay.inicio.slice(0,10)}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span >Hora:</span>
                  <span>{overlay.inicio.slice(11,19)}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span >Cambiador:</span>
                  <span>{overlay.operacion.cambiador.codigo}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span >Velocidad:</span>
                  <span>{overlay.V.toFixed(2)} m/s</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span >Carga:</span>
                  <span>{overlay.FV.toFixed(2)} KN</span>
                </div>
                <div className='mt-1'>Descerr. A/B (Maximos):</div>
                <div className='flex justify-between items-center'>
                  <span>{overlay.fdaM.toFixed(2)} KN</span>
                  <span>/</span>
                  <span>{overlay.fdbM.toFixed(2)} KN</span>
                </div>
                <div className='mt-1'>Cambio A/B (Maximos):</div>
                <div className='flex justify-between items-center'>
                  <span>{overlay.fcaM.toFixed(2)} KN</span>
                  <span>/</span>
                  <span>{overlay.fcbM.toFixed(2)} KN</span>
                </div>
                <div className='mt-1'>Encerr. A/B (mínimos):</div>
                <div className='flex justify-between items-center'>
                  <span>{overlay.feam.toFixed(2)} KN</span>
                  <span>/</span>
                  <span>{overlay.febm.toFixed(2)} KN</span>
                </div>
              </div>
          </Overlay>)
          :
          ('')
        }  
    </Map>
    </div>
  )
}