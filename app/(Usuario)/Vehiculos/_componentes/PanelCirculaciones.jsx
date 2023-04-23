'use client'
import {useState, useEffect} from "react"
import MapaCirculaciones from "@/ui/MapaCirculaciones"
import ListaCirculaciones from "@/ui/ListaCirculaciones"
import MapaCirculacion from "@/ui/MapaCirculacion"

export default function PanelCirculaciones ({circulaciones}) {
  const [select, setSelect] = useState(-1)
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (select !== -1) {
    let circulacion = circulaciones[0]
    circulaciones.forEach((obj)=> {if (select === obj.id) {circulacion = obj}})
    return (
    <>
    <div className='text-lg text-gray-400 pt-6 pb-3'>Últimas Circulaciones del Vehículo</div>
    <div className="grid gap-1 grid-cols-1 2xl:grid-cols-2">
      <MapaCirculacion
        circulacion = {circulacion}
        onSelect = {setSelect}/>
        
      <ListaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/>
    </div>
    </>
    )
  }

  return(
    <>
    {/* Título Ficha */}
    <div className='text-lg text-gray-400 pt-6 pb-3'>Últimas Circulaciones del Vehículo</div>
    <div className="grid gap-1 grid-cols-1 2xl:grid-cols-2">
    
      <MapaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/> 

      <ListaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/>

    </div>
    </>
  )  
}