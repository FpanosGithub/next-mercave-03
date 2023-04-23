'use client'
import Image from "next/image"
import tria from  '@/public/logos/tria.png'
import power from '@/public/imagenes/varios/power.png'
import { signIn} from 'next-auth/react';

export default function Login() {
  return (
    <div className="fixed w-full h-screen left-0 top-0 bg-black/25">
      <div className="my-20 mx-auto w-[720px] rounded-xl bg-white grid grid-cols-2 ">
        <Image src={power} alt = 'Imagen Entrada' width = {100} height={200} className="h-auto w-80 rounded-l-xl"/>
        <div className="w-96">
          <p className="my-10 mx-auto text-2xl font-bold">Entrar en la plataforma</p>
          <button  className = 'my-10 mx-auto rounded bg-emerald-700 text-white shadow px-16 py-4' onClick={()=>signIn()} >Entrar</button>
        </div>
      </div> 
      <Image src={tria} alt = 'Logo Tria' width = {100} height={20} className="h-10 w-auto mx-auto"/>  
    </div>
  )
}
