'use client'
import {useEffect, useState} from 'react'
import IconoTiempo from './IconoTiempo'

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
    <div className='mx-3 py-2 flex justify-between'>
      <div className='px-2 text-base'>{weather?.ciudad}</div>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center px-3 pt-1'>
          <IconoTiempo icono = {weather?.icono}/>
          <span className='text-sm'>{weather?.temperatura}º</span>
        </div>
       {/* 
       <div className='flex px-4'>
          <Image src={humedad} width = {20} height={20} alt='humedad' className='h-4 w-auto'/>
          <span className='ml-4 text-xs'>{weather?.humedad}%</span>
        </div>
  */}
      </div>
    </div>
  )
}
