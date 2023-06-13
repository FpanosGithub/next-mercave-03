'use client'
import CurvaFaseCambio from './CurvaFaseCambio'

export default function GraficasBanco ({cambios, select}){
  const cambio_seleccionado = cambios.find(({id})=> id === select)
  if (!cambio_seleccionado) {return <></>}
  return(
  <div className='px-2 py-3 h-[630px] w-[390px] xl:w-[530px] 2xl:w-[750px] mx-auto overflow-y-scroll border border-gray-300 bg-white rounded-lg shadow-lg grid grid-cols-1 gap-3'>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresDA} 
      fase = 'Descerrojamiento'
      rueda = "A"
      color = 'orange'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresDB} 
      fase = 'Descerrojamiento'
      rueda = "B"
      color = 'green'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresCA} 
      fase = 'Cambio'
      rueda = "A"
      color = 'orange'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresCB} 
      fase = 'Cambio'
      rueda = "B"
      color = 'green'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresEA} 
      fase = 'Encerrojamiento'
      rueda = "A"
      color = 'orange'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresEB} 
      fase = 'Encerrojamiento'
      rueda = "B"
      color = 'green'
      height={190}/>
  </div>
  )
}