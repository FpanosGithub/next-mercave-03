'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import nublado from  '@/public/imagenes/clima/nublado.png'
import humedad from  '@/public/imagenes/clima/humedad.png'
import viento from  '@/public/imagenes/clima/viento.png'
import IconoTiempo from './IconoTiempo'


type weatherParams = {
  lat: number,
  long: number,
}

export default function Weather({lat, long}:weatherParams) {
  const [weather, setWeather] = useState (null)
  const [loading, setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    const getWeather = async ()=>{
      const res = await fetch(`/api/weather?lat=${lat}&lon=${long}`)
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    }
    getWeather()
  },[lat,long])
  console.log(weather?.icono)
  return (
    <div className=''>
      <div className='mx-auto w-36 text-center truncate'>{weather?.ciudad}</div>
      <div className='flex justify-center px-3 pt-1'>
        <IconoTiempo icono = {weather?.icono}/>
        <span className='ml-2 mr-1 text-sm'>{weather?.temperatura}º</span>
      </div>
      <div className='flex justify-center px-1'>
        <Image src={humedad} width = {20} height={20} alt='humedad' className='h-4 w-auto'/>
        <span className='ml-1 mr-1 text-xs'>{weather?.humedad}%</span>
        <Image src={viento} width = {20} height={20} alt='viento' className='h-4 w-auto'/>
        <span className='ml-1 text-xs'>{weather?.viento} m/s</span>
      </div>
    </div>
  )
}
