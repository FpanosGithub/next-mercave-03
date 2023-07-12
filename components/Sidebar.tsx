'use client'
import { HomeIcon, TruckIcon, CogIcon, ClipboardDocumentListIcon, DocumentIcon, ComputerDesktopIcon, ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import triaWhite from  '@/public/logos/triaWhite.png'
import { useState } from "react"

export default function Sidebar({open}:{open:Boolean}) {
  const [selectedLink, setSelectedLink] = useState('link1')
  const active = "flex gap-4 text-lg text-white"
  const nonactive = "flex gap-4 text-lg hover:text-gray-300"
  return (
    <div className='fixed left-0 z-40 h-screen hidden md:flex md:flex-col justify-between p-2 bg-gray-800 text-gray-400'>
      <div className="px-4 py-8 space-y-4">
        <Link href={'/'} className={selectedLink === 'link1' ? active : nonactive} onClick={() => setSelectedLink('link1')}>
          <HomeIcon className="w-6 h-6"/>
          Home
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">MATERIAL RODANTE</p>
        <Link href={'/Vehiculos'} className={selectedLink === 'link2' ? active : nonactive} onClick={() => setSelectedLink('link2')}>
          <TruckIcon className="w-6 h-6"/>
          Vehículos
        </Link>
        <Link href={'/EAVMs'} className={selectedLink === 'link3' ? active : nonactive} onClick={() => setSelectedLink('link3')}>
          <CogIcon className="w-6 h-6"/>
          Ejes EAVM
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">CAMBIADORES</p>
        <Link href={'/'} className={selectedLink === 'link4' ? active : nonactive} onClick={() => setSelectedLink('link4')}>
          <ClipboardDocumentListIcon className="w-6 h-6"/>
          Operaciones
        </Link>
        <p className="font-light tracking-wider text-sm pt-4">GESTIÓN ADIF</p>
        <Link href={'/Documentacion/General'} className={selectedLink === 'link5' ? active : nonactive} onClick={() => setSelectedLink('link5')}>
          <DocumentIcon className="w-6 h-6"/>
          Documentación
        </Link>
        <Link href={'/gestor_documentacion'} className={selectedLink === 'link6' ? active : nonactive} onClick={() => setSelectedLink('link6')}>
          <ComputerDesktopIcon className="w-6 h-6"/>
          Gestor Doc.
        </Link>
      </div>
      <div className="mb-16 py-4  flex space-x-4 text-sm justify-center border-t border-gray-600">
        <p className="">Creado por </p>
        <Image src={triaWhite} width = {66} height={21} alt='logo adif' priority/>
      </div>
      
    </div>
  )
}
