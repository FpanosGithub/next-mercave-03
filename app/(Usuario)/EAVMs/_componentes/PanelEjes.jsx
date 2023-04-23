'use client'
import {useState, useEffect} from "react"
import MapaEjes from "./MapaEjes"
import ListaEjes from "./ListaEjes"

export default function PanelEjes ({ejes}) {
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return(
    <div className="space-y-2 2xl:flex 2xl:space-x-4 2xl:h-[62rem]">
    <MapaEjes
      ejes = {ejes} 
      hover = {hover}
      onHover = {setHover}/> 
    <ListaEjes
      ejes = {ejes} 
      hover = {hover}
      onHover = {setHover}/> 
    </div>
  )
}