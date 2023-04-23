'use client'
import {useState, useEffect} from "react"
import MapaCambios from "@/ui/MapaCambios"
import ListaCambios from "@/ui/ListaCambios"
import GraficasCambios from "./GraficasCambios"

export default function PanelCambios ({cambios}) {
  const [select, setSelect] = useState(-1)
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  
  return(
    <>
    <div className='text-lg text-gray-400 pt-6 pb-3'>Últimos Cambios del Eje</div>
    <div className="space-y-1 xl:space-y-0 md:gap-1 md:grid md:grid-cols-2 2xl:grid-cols-3">
    <MapaCambios
        cambios = {cambios}
        hover = {hover}
        onHover ={setHover}/>
    <ListaCambios
        cambios = {cambios} 
        hover = {hover}
        onHover = {setHover}/>
      <GraficasCambios
        cambios = {cambios}/>
    </div>
    </>
    )
}
