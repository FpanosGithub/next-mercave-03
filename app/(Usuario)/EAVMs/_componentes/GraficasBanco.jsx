'use client'
import CurvaFaseCambio from './CurvaFaseCambio'

export default function GraficasBanco ({cambios, select}){
  const cambio_seleccionado = cambios.find(({id})=> id === select)
  if (!cambio_seleccionado) {return <></>}
  return(
  <div className='px-2 py-3 w-[390px] xl:w-[530px] 2xl:w-[900px] mx-auto overflow-y-scroll border border-gray-300 bg-white rounded-lg shadow-lg grid grid-cols-1 3xl:grid-cols-2 3xl:w-[800px] 3xl:h-[61rem] gap-3'>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresDA} 
      fase = 'Descerrojamiento'
      maximo = {2148}
      rueda = "A"
      color = 'orange'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresDB} 
      fase = 'Descerrojamiento'
      maximo = {2148}
      rueda = "B"
      color = 'green'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresCA} 
      fase = 'Cambio'
      maximo = {1990}
      rueda = "A"
      color = 'orange'
      height={190}/>
    <CurvaFaseCambio 
      datos = {cambio_seleccionado.valoresCB} 
      fase = 'Cambio'
      maximo = {1990}
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