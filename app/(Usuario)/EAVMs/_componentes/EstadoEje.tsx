'use client'
import {useEffect, useState} from 'react'
import clsx from 'clsx';
import { BoltIcon, BoltSlashIcon, PauseIcon, PlayIcon, WrenchIcon, BellAlertIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/solid';

type ValoresEstado = {
  en_servicio: boolean,
  en_circulacion?: boolean,
  en_mantenimiento?: boolean,
  alarma_temp?: boolean,
  alarma_aceleraciones?: boolean,
  alarma_cambio?: boolean,
  alarma_mantenimiento?: boolean,
  num_cambios: number, 
  km_totales: number
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

  if(loading){
    return(
    <div>
      <div className="flex justify-between my-2 mx-3 px-2 py-1 rounded-full bg-gray-100">
        <EllipsisHorizontalIcon className="w-6 h-6 mr-1 text-gray-600 animate-pulse"/>
        <EllipsisHorizontalIcon className="w-6 h-6 mr-1 text-gray-600 animate-pulse"/>
        <EllipsisHorizontalIcon className="w-6 h-6 mr-1 text-gray-600 animate-pulse"/>
        <EllipsisHorizontalIcon className="w-6 h-6 mr-1 text-gray-600 animate-pulse"/>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='flex gap-2'>
          <p className=' text-gray-900'>----</p>
          <p className='text-xs text-gray-600 mt-1.5'>km</p>
        </div>
        <div className='flex gap-1'>
          <p className=' text-gray-900'>----</p>
          <p className='text-xs text-gray-600 mt-1.5'>camb</p>
        </div>
      </div>
    </div>
    )
  }

  return (
  <div>
    <div className="flex justify-between my-2 mx-3 px-2 py-1 rounded-full bg-gray-100">
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
    <div className='flex flex-wrap justify-center gap-4'>
      <div className='flex gap-2'>
        <p className=' text-gray-900'>{Math.round(estado?.km_totales as number).toLocaleString('es-ES')}</p>
        <p className='text-xs text-gray-600 mt-1.5'>km</p>
      </div>
      <div className='flex gap-1'>
        <p className=' text-gray-900'>{Math.round(estado?.num_cambios as number).toLocaleString('es-ES')}</p>
        <p className='text-xs text-gray-600 mt-1.5'>camb</p>
      </div>
    </div>
  </div>
  )
}
