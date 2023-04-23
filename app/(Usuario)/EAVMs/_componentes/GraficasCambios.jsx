'use client'
import datosCambios from './datosCambios'
import HistogramaCambios from './HistogramaCambios'

export default function GraficasCambios ({cambios}){
  const datos = datosCambios (cambios)
  return(
  <div className='p-2 overflow-y-scroll border border-slate-500 rounded-lg grid gap-1 col-span-2 grid-cols-1 xl:grid-cols-2 2xl:col-span-1 2xl:grid-cols-1 2xl:h-[38rem]'>
    <HistogramaCambios 
      datos = {datos.descerrojamiento} 
      titulo = 'Distribución F. Máxima de Descerrojamiento'
      color_a = 'orange'
      color_b = 'green'
      height={200}/>
    <HistogramaCambios 
      datos = {datos.cambio} 
      titulo = 'Distribución F. Máxima en Cambio.'
      color_a = 'pink'
      color_b = 'cyan'
      height={200}/>
    <HistogramaCambios 
      datos = {datos.encerrojamiento} 
      titulo = 'Distribución Fuerza mínima de Encerrojamiento'
      color_a = 'orange'
      color_b = 'green'
      height={200}/>
  </div>
  )
}