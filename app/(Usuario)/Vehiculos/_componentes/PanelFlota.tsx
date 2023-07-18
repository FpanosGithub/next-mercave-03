'use client'
import {useState} from "react"
import MapaFlota from "./MapaFlota"
import ListaFlota from "./ListaFlota"

export default function PanelFlota ({vehiculos}:{vehiculos:any}) {
  const [hover_vehiculo, setHoverVehiculo] = useState(vehiculos[0].id)
  return(
    <div className="h-screen bg-gray-100">
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