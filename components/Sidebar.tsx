'use client'
import { HomeIcon, TruckIcon, CogIcon, ClipboardDocumentListIcon, DocumentIcon, ComputerDesktopIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import tria from  '@/public/logos/tria.png'

export default function Sidebar({open}:{open:Boolean}) {
  return (
    <div className='hidden md:flex md:flex-col justify-between p-2 bg-gray-700 text-gray-400'>
      <div className="px-4 py-8 space-y-4">
        <Link href={'/'} className="flex gap-4 text-base hover:text-gray-300">
          <HomeIcon className="w-6 h-6"/>
          Home
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">MATERIAL RODANTE</p>
        <Link href={'/Vehiculos'} className="flex gap-4 text-lg hover:text-gray-300">
          <TruckIcon className="w-6 h-6"/>
          Vehículos
        </Link>
        <Link href={'/EAVMs'} className="flex gap-4 text-lg hover:text-gray-300">
          <CogIcon className="w-6 h-6"/>
          Ejes EAVM
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">CAMBIADORES</p>
        <Link href={'/'} className="flex gap-4 text-lg hover:text-gray-300">
          <ClipboardDocumentListIcon className="w-6 h-6"/>
          Operaciones
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">BANCO ENSAYOS</p>
        <Link href={'/'} className="flex gap-4 text-lg hover:text-gray-300">
          <ArrowPathIcon className="w-6 h-6"/>
          Ensayos x Eje
        </Link>
        <Link href={'/'} className="flex gap-4 text-lg hover:text-gray-300">
          <ArrowTrendingUpIcon className="w-6 h-6"/>
          Resumen
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">GESTIÓN ADIF</p>
        <Link href={'/Documentacion'} className="flex gap-4 text-lg hover:text-gray-300">
          <DocumentIcon className="w-6 h-6"/>
          Documentación
        </Link>
        <Link href={'/gestor_documentacion'} className="flex gap-4 text-lg hover:text-gray-300">
          <ComputerDesktopIcon className="w-6 h-6"/>
          Gestor Doc.
        </Link>
      </div>
      <div className="mb-16 py-4  flex space-x-4 text-sm justify-center border-t border-gray-600">
        <p className="">Creado por </p>
        <Image src={tria} width = {100} height={20} alt='logo adif' className='h-6 w-auto' priority/>
      </div>
      
    </div>
  )
}
