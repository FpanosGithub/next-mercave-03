'use client'
import { useState } from "react"
import clsx from "clsx";
import Image from "next/image";
import urlFor from "@/sanity/urlFor";

export default function Tabs(
  { fichas_vehiculos, 
    fichas_EAVMs,
    personas,
  }:
  {
    fichas_vehiculos:any[], 
    fichas_EAVMs:any[],
    personas: any[],
  }
) {
  const [tab, setTab] = useState(1)

  return (
    <div className="h-full bg-gray-100">
      {/* Cabecera del div de Tabs */}
      <div className="pt-2 mb-3 shadow flex justify-between bg-white">
        {/* Grupo de Tabs */}
        <div className="flex gap-4 ml-4 text-sm font-semibold text-gray-500">
          <p 
            className={clsx("pb-2 px-2 hover:cursor-pointer",
              { 'border-b-2 border-emerald-700 text-emerald-700':(tab==1),
                'hover:border-b-2 hover:border-blue-400':(tab!=1)
              })}
            onClick = {()=> setTab(1)}
            >
            Vehículos
            </p>
            <p 
            className={clsx("pb-2 px-2 hover:cursor-pointer",
              { 'border-b-2 border-emerald-700 text-emerald-700':(tab==2),
                'hover:border-b-2 hover:border-blue-400':(tab!=2)
              })}
            onClick = {()=> setTab(2)}
            >
            EAVMs
            </p>
            <p 
            className={clsx("pb-2 px-2 pointer-events-none border-none opacity-50",
              { 'border-b-2 border-emerald-700 text-emerald-700':(tab==3),
                'hover:border-b-2 hover:border-blue-400':(tab!=3)
              })}
            onClick = {()=> setTab(3)}
            >
            Inst. Mant.
            </p>
            <p 
            className={clsx("pb-2 px-2 hover:cursor-pointer",
              { 'border-b-2 border-emerald-700 text-emerald-700':(tab==4),
                'hover:border-b-2 hover:border-blue-400':(tab!=4)
              })}
            onClick = {()=> setTab(4)}
            >
            Personas
            </p>
        </div>
      </div>
      {/* Render del Tab #1 VEHICULOS. Puede sacarse a otro componente ....*/}
      {tab === 1 && (
        <div className="p-8 h-screen flex gap-4 flex-wrap">
        {fichas_vehiculos.map((ficha:any)=>(
          <div key = {ficha.slug.current} className="bg-white border rounded-xl shadow w-72 h-80 flex flex-col justify-between">
            {ficha.imagen &&
              <Image 
                className="object-cover object-left h-auto rounded-t-xl"
                src = {urlFor(ficha.imagen).url()}
                alt= 'imagen'
                width={288}
                height = {150}/>}
            <p className="my-4 mx-4 text-base font-medium text-gray-900">{ficha.clase}</p>
            <p className="my-3 mx-4 text-base text-gray-900">{ficha.descripcion}</p>
            <div className="mt-4 mx-4 text-gray-700">Ficha: {ficha.num_doc}</div>
            <div className="mx-4 mb-1 text-gray-700">Versión del Doc.: {ficha.version}</div>
          </div>
        ))}
      </div>
      )}
      {/* Render del Tab #2 EAVMS . Puede sacarse a otro componente ....*/}
      {tab === 2 && (
        <div className="p-8 h-screen flex gap-4 flex-wrap">
        {fichas_EAVMs.map((ficha:any)=>(
          <div key = {ficha.slug.current} className="bg-white border rounded-xl shadow w-72 h-96 flex flex-col justify-between">
            {ficha.imagen &&
              <Image 
                className="object-cover object-left h-auto rounded-t-xl"
                src = {urlFor(ficha.imagen).url()}
                alt= 'imagen'
                width={288}
                height = {150}/>}
            <div className="my-6 mx-4 text-base font-medium text-gray-900">{ficha.codigo}</div>
            <div className="my-3 mx-4 text-gray-900">{ficha.descripcion}</div>
            <div className="mt-4 mx-4 text-gray-700">Ficha: {ficha.num_doc}</div>
            <div className="mx-4 mb-1 text-gray-700">Versión del Doc.: {ficha.version}</div>
          </div>
        ))}
      </div>
      )}
      {/* Render del Tab #4 PERSONAS. Puede sacarse a otro componente ....*/}
      {tab === 4 && (
        <div className="p-8 h-screen flex gap-4 flex-wrap">
        {personas.map((persona:any)=>(
          <div key = {persona.nombre} className="bg-white border rounded-xl shadow w-72 h-96 pb-2 flex flex-col">
          {persona.imagen &&
              <Image 
              className="rounded-full mx-auto my-8 h-32 w-32 border border-gray-400 shadow-md"
              src = {urlFor(persona.imagen).url()}
              alt= 'imagen'
              width={220}
              height={150} 
              />
            }
          <p className="my-3 mx-4 text-base font-medium text-gray-900">{persona.nombre} {persona.apellido}</p>
          <div className="mx-4 text-gray-700">{persona.cargo}</div>
          <div className="mb-4 mx-4 text-sm text-gray-700">Curriculum:</div>
        </div>
        ))}
      </div>
      )}
    </div>
  )
}
