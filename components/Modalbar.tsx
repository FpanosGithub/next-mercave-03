'use client'
import { XMarkIcon, HomeIcon, TruckIcon, CogIcon, ClipboardDocumentListIcon, DocumentIcon, ComputerDesktopIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import triaWhite from  '@/public/logos/triaWhite.png'

export default function Modalbar({open, setOpen}:{open: Boolean, setOpen:Function}) {
  return (
    <div 
    onClick={()=>{setOpen(!open)}}
    className="fixed z-40 w-full h-screen left-0 top-12 bg-black/25">
      <div 
        onClick={(e)=>e.stopPropagation()}
        className="bg-gray-800 absolute top-0 left-0 w-60 h-screen overflow-y-scroll text-gray-400 flex flex-col justify-between px-2">
        <div className="px-4 py-4 space-y-4">
          <div className="flex justify-end">
            <XMarkIcon className='w-6 h-6' onClick={()=>{setOpen(!open)}}/>
          </div>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <HomeIcon className="w-6 h-6"/>
            Home
          </Link>
          <p className="font-light tracking-wider text-sm pt-4">MATERIAL RODANTE</p>
          <Link href={'/Vehiculos'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <TruckIcon className="w-6 h-6"/>
            Vehículos
          </Link>
          <Link href={'/EAVMs'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <CogIcon className="w-6 h-6"/>
            Ejes EAVM
          </Link>
          <p className="font-light tracking-wider text-sm pt-4">CAMBIADORES</p>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <ClipboardDocumentListIcon className="w-6 h-6"/>
            Operaciones
          </Link>
          <p className="font-light tracking-wider text-sm pt-4">BANCO ENSAYOS</p>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <ArrowPathIcon className="w-6 h-6"/>
            Ensayos x Eje
          </Link>
          <Link href={'/'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <ArrowTrendingUpIcon className="w-6 h-6"/>
            Resumen
          </Link>
            <p className="font-light tracking-wider text-sm pt-4">GESTIÓN ADIF</p>
          <Link href={'/Documentacion/General'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <DocumentIcon className="w-6 h-6"/>
            Documentación
          </Link>
          <Link href={'/gestor_documentacion'} onClick={()=>{setOpen(!open)}} className="flex gap-4 text-lg hover:text-gray-300">
            <ComputerDesktopIcon className="w-6 h-6"/>
            Gestor Doc.
          </Link>
        </div>
        <div className="flex space-x-4 text-sm justify-center py-16 border-t border-gray-600">
          <p className="">Creado por </p>
          <Image src={triaWhite} width = {66} height={21} alt='logo adif' priority/>
        </div>
      </div>
    </div>
  )
}
