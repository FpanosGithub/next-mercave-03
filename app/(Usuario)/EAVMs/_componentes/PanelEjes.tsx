'use client'
import {useState, useEffect} from "react"
import {EAVMBasico, posicionEAVM} from '@/types/EAVM'
import MapaEjes from "./MapaEjes"
import ListaEjes from "./ListaEjes"
import TarjetaEje from "./TarjetaEje"

export default function PanelEjes ({ejes, posiciones}:{ejes:EAVMBasico[], posiciones:posicionEAVM[]}) {
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
    <div className="bg-gray-100">
      <div className="grid grid-rows-2 gap-2 mx-8 my-2 sm:flex sm:h-[21rem] sm:mx-4">
        <div className="rounded-md shadow p-2 bg-white w-full">
          <MapaEjes
            posiciones = {posiciones} 
            hover = {hover}
            onHover = {setHover}/> 
        </div>
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