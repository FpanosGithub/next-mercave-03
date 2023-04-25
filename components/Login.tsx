'use client'
import Image from "next/image"
import tria from  '@/public/logos/tria.png'
import power from '@/public/imagenes/varios/power.png'
import { signIn} from 'next-auth/react';

export default function Login() {
  return (
    <div className="fixed w-full h-screen left-0 top-0 bg-black/20">
      <div className="my-20 mx-auto rounded-xl shadow w-80 bg-white grid grid-rows-2 md:grid-cols-2 md:w-[600px] md:h-60">
        <Image src={power} alt = 'Imagen Entrada' width = {330} height={300} className="rounded-t-xl w-[360px] h-60 md:w-80 md:rounded-l-xl"/>
        <div className="flex flex-col justify-between align-middle">
          <p className="my-8 text-2xl font-bold mx-auto">Entrar en la plataforma</p>
          <button  className = 'my-8 mx-auto rounded bg-emerald-700 text-white shadow px-16 py-4' onClick={()=>signIn()} >Entrar</button>
        </div>
      </div> 
      <Image src={tria} alt = 'Logo Tria' width = {100} height={20} className="h-10 w-auto mx-auto"/>  
    </div>
  )
}
