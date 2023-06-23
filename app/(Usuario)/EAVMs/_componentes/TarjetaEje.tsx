'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import EstadoEje from './EstadoEje';
import Weather from '@/components/Weather';

export default function tarjetaEje ({
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
    router.push(`/EAVMs/${codigo}/Datos`)
  }
  
  return(
    <div className='rounded-lg shadow h-[20rem] w-56 mx-auto'>
      <div className=''>
        <Image src = {`/imagenes/ejes/${imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg object-fill w-56'/>
        <div className="text-center p-1 text-gray-800 truncate">{codigo}</div>
      </div>
      <EstadoEje codigo = {codigo}/>
      <div className='mt-3 border-t border-gray-200'>
        <Weather lat={lat} long={lng} />
      </div>
    </div>
  )
}