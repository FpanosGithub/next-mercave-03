'use client'
import {useState, useEffect} from "react"
import MapaCirculaciones from "@/components/MapaCirculaciones"
import ListaCirculaciones from "@/components/ListaCirculaciones"
import MapaCirculacion from "@/components/MapaCirculacion"

export default function PanelCirculaciones ({circulaciones}:{circulaciones:any}) {
  const [select, setSelect] = useState(-1)
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  console.log('CIRCULACIÓN: ',circulaciones[0])
  if (select !== -1) {
    let circulacion = circulaciones[0]
    circulaciones.forEach((obj:any)=> {if (select === obj.id) {circulacion = obj}})
  console.log(circulacion)
    return (
    <>
    <div className="grid gap-1 grid-cols-1">
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
    <div className="grid gap-1 grid-cols-1">   
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