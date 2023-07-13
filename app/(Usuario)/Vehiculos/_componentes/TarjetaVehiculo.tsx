'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Weather from '@/components/Weather';

export default function tarjetaVehiculo ({
  imagen, 
  codigo, 
  lat, 
  lng}:{
  imagen:string, 
  codigo:string, 
  lat:number, 
  lng:number, 
  }) {
  
  const router = useRouter()
  function handleClick() {
    router.push(`/Vehiculos/${codigo}`)
  }
  
  return(
    <div 
      onClick={handleClick}
      className='rounded-md shadow bg-white mx-auto min-w-[12rem] flex flex-col justify-between hover:cursor-pointer'>
      <Image src = {`/imagenes/ejes/${imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg w-full object-fill'/>
      <div className="text-center p-1 text-gray-800 truncate">{codigo}</div>
      <EstadoEje codigo = {codigo}/>
      <Weather lat={lat} long={lng} />
    </div>
  )
}