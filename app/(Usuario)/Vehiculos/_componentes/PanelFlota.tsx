'use client'
import {useState} from "react"
import MapaFlota from "./MapaFlota"
import ListaFlota from "./ListaFlota"

export default function PanelFlota ({vehiculos}:{vehiculos:any}) {
  const [hover_vehiculo, setHoverVehiculo] = useState(-1)
  return(
    <div className="">
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