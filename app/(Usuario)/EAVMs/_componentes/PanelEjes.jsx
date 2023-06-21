'use client'
import {useState, useEffect} from "react"
import MapaEjes from "./MapaEjes"
import ListaEjes from "./ListaEjes"
import TarjetaEje from "./TarjetaEje"

export default function PanelEjes ({ejes, posiciones}) {
  const [hover, setHover] = useState(ejes[0].id)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  
  let imagen = 'eje.png'
  let codigo = 'AVR-XXXXXX-ZZZZ'
  let lat = 0
  let lng = 0
  ejes.forEach((eje)=> {
    if (hover === eje.id) {
      imagen = eje.tipo_EAVM.imagen
      codigo = eje.codigo
      lat = eje.lat
      lng = eje.lng
    }
  })

  return(
    <div className="">
      <div className="rounded-lg shadow m-4 p-2 bg-white grid gap-2 grid-rows-2 sm:flex sm:h-[21rem]">
        <MapaEjes
          posiciones = {posiciones} 
          hover = {hover}
          onHover = {setHover}/> 
        <TarjetaEje
          imagen = {imagen}
          codigo = {codigo} 
          lat = {lat}
          lng = {lng}/>
      </div>
    <ListaEjes
      ejes = {ejes} 
      hover = {hover}
      onHover = {setHover}/> 
    </div>
  )
}