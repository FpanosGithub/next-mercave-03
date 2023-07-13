'use client'
import {useEffect, useState} from 'react'
import IconoTiempo from './IconoTiempo'
import humedad from '@/public/imagenes/clima/humedad.png'
import viento from '@/public/imagenes/clima/viento.png'
import Image from 'next/image'

type weatherParams = {
  lat: number,
  long: number,
}
type ValoresWeather = {
  ciudad: string,
  icono: string,
  temperatura: number,
  humedad?: number,
  viento?: number,
}


export default function Weather({lat, long}:weatherParams) {
  const [weather, setWeather] = useState <ValoresWeather> ({ciudad:'',icono:'01d', temperatura:20})
  const [loading, setLoading]= useState <Boolean>(false)
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
 
  return (
    <div className='mx-2 my-4 flex flex-col justify-center'>
      <div className='text-center font-semibold text-sm'>{weather?.ciudad}</div>
      <div className='flex justify-center px-3'>
        <IconoTiempo icono = {weather?.icono}/>
        <span className='text-sm mt-2.5'>{weather?.temperatura}º</span>
      </div> 
      <div className='flex justify-center gap-1 px-4'>
        <Image src={humedad} width = {20} height={20} alt='humedad' className='h-4 w-auto'/>
        <span className='text-sm'>{weather?.humedad?.toFixed(0)}%</span>
        <Image src={viento} width = {20} height={20} alt='viento' className=' ml-5 h-4 w-auto'/>
        <span className='text-sm'>{weather?.viento?.toFixed(1)} m/s</span>
      </div>
    </div>
  )
}
