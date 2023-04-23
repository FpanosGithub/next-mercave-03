'use client'
import {useState} from "react"
import MapaFlota from "./MapaFlota"
import ListaFlota from "./ListaFlota"

export default function PanelFlota ({vehiculos}) {
  const [hover_vehiculo, setHoverVehiculo] = useState(-1)
  return(
    <div className="space-y-2 2xl:flex 2xl:space-x-4 2xl:h-[62rem]">
    <MapaFlota
      vehiculos = {vehiculos} 
      hover = {hover_vehiculo}
      onHover = {setHoverVehiculo}/> 
    <ListaFlota
      vehiculos = {vehiculos} 
      hover = {hover_vehiculo}
      onHover = {setHoverVehiculo}/>
    </div>
  )
}