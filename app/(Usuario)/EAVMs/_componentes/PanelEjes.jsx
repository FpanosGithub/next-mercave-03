'use client'
import {useState, useEffect} from "react"
import MapaEjes from "./MapaEjes"
import ListaEjes from "./ListaEjes"

export default function PanelEjes ({ejes}) {
  const [hover, setHover] = useState(ejes[0].id)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return(
    <div className="">
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