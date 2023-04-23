'use client'
import datosCirculacion from './datosCirculacion'
import CurvaVelocidad from './CurvaVelocidad'
import CurvaTemperaturas from './CurvaTemperaturas'
import CurvaAceleraciones from './CurvaAceleraciones'


export default function GraficasCirculacion ({circulacion}){
  const eventos = datosCirculacion (circulacion.eventos)
  return(
  <div className='p-2 overflow-y-scroll border border-slate-500 rounded-lg grid gap-1 col-span-2 grid-cols-1 past-md:grid-cols-2 2xl:col-span-1 2xl:grid-cols-1 2xl:h-[38rem]'>
    <CurvaVelocidad
      datos = {eventos.velocidades}
      height = {200}/>
    <CurvaTemperaturas
      datos = {eventos.temperaturas} 
      height = {200} />
    <CurvaAceleraciones
      titulo = 'Acel. Máximas en eje Z'
      color_a = 'orange'
      color_b = 'green'
      datos = {eventos.azM} 
      lim_max = {10} 
      height = {200} />
    <CurvaAceleraciones
      titulo = 'Acel. medias en eje Z'
      color_a = 'orange'
      color_b = 'green'
      datos = {eventos.azmed} 
      lim_max = {10} 
      height = {200} />
    <CurvaAceleraciones
      titulo = 'Acel. Máximas en eje Y'
      color_a = 'pink'
      color_b = 'cyan'
      datos = {eventos.ayM} 
      lim_max = {10} 
      height = {200} />
    <CurvaAceleraciones
      titulo = 'Acel. medias en eje Y'
      color_a = 'pink'
      color_b = 'cyan'
      datos = {eventos.aymed} 
      lim_max = {10} 
      height = {200} />
    <CurvaAceleraciones
      titulo = 'Acel. Máximas en eje X'
      color_a = 'blue'
      color_b = 'orange'
      datos = {eventos.axM} 
      lim_max = {10} 
      height = {200} />  
    <CurvaAceleraciones
      titulo = 'Acel. medias en eje X'
      color_a = 'blue'
      color_b = 'orange'
      datos = {eventos.axmed} 
      lim_max = {10} 
      height = {200} />  
  </div>
  )
}