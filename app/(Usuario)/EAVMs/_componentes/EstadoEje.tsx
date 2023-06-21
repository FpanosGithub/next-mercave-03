'use client'
import {useEffect, useState} from 'react'
import clsx from 'clsx';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, BellAlertIcon} from '@heroicons/react/24/solid';

type ValoresEstado = {
  en_servicio: boolean,
  en_circulacion?: boolean,
  en_mantenimiento?: boolean,
  alarma_temp?: boolean,
  alarma_aceleraciones?: boolean,
  alarma_cambio?: boolean,
  alarma_mantenimiento?: boolean,
}

export default function EstadoEje({codigo}:{codigo:string}) {
  const [estado, setEstado] = useState <ValoresEstado> ()
  const [loading, setLoading]= useState <Boolean>(false)

  useEffect(()=>{
    setLoading(true)
    const getEstado = async ()=>{
      const res = await fetch(`/api/estado_EAVM?codigo=${codigo}`)
      const data = await res.json()
      setEstado(data)
      setLoading(false)
    }
    getEstado()
  },[codigo])
 
  console.log('Código: ', codigo)
  console.log('Estado Eje:', estado)

  return (
    <div className="flex justify-between my-2 mx-4 px-2 py-1 rounded-full bg-gray-100">
      {estado?.en_servicio 
      ? (<BoltIcon className="w-6 h-6 mr-1 text-green-600"/>)
      : (<BoltSlashIcon className="w-6 h-6 mr-1 text-red-600"/>)}
      {estado?.en_circulacion 
      ? (<PlayIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(estado?.alarma_aceleraciones || estado?.alarma_temp)})}/>)
      : (<PauseIcon className={clsx("w-6 h-6 mr-1 text-red-600",{"animate-pulse":(estado?.alarma_aceleraciones || estado?.alarma_temp)})}/>)}
      {estado?.en_mantenimiento 
      ? (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-green-600",{"animate-pulse":(estado?.alarma_mantenimiento)})}/>)
      : (<WrenchIcon className={clsx("w-6 h-6 mr-1 text-gray-500",{"animate-pulse":(estado?.alarma_mantenimiento)})}/>)}
      {(estado?.alarma_temp || estado?.alarma_aceleraciones || estado?.alarma_mantenimiento || estado?.alarma_cambio)? 
        (<BellAlertIcon className = "w-6 h-6 mr-1 text-red-400 animate-pulse"/>)
      : (<BellAlertIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
    </div>
  )
}
