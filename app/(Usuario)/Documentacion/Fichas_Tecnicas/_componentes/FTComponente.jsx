import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import Image from "next/image";
import Link from "next/link";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "./RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorComponente from "./NavegadorComponente";

export const dynamic = 'force-dynamic'

export default async function FTComponente({material, id, tipo, id_tipo, sistema, id_sistema, conjunto, id_conjunto, componente, id_componente, version}) {
  const query = groq`
  *[_type=='FTComponente' && num_doc==${id_componente}] | order(version) 
  {
    ...,
    realizado ->,
    supervisado ->,
    itms[]->{codigo, operacion, descripcion}
  }
  `
  const fichas = await client.fetch(query);

  const num_versiones = fichas.length
  if (num_versiones===0){
    return 
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500'><h2>¡El Documento no Existe!. Créalo en el Estudio!</h2></div>
  }

  let i = 0
  if(version === 1000){i = num_versiones-1}
  else if (version >= num_versiones){i = num_versiones-1}
  else if (version < 0) {i=0}
  else {i = version}
  const i_mostrar = parseInt(i)+1

  return (  
  <div className="max-w-6xl mx-auto">
      {/* TÍTULO */}
      <div className="flex flex-wrap border  border-slate-600">
        <div className="m-1 p-3 min-w-fit max-w-[440px] bp-3:max-w-[200px] border-r flex-1">
          <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
        </div>
        <div className="m-1 text-blue-800 min-w-[260px] p-4 text-center text-3xl font-light flex-1 border-r">
          <p>Ficha Técnica de Elemento</p>
          <p className="pt-3 text-slate-500 text-2xl">{fichas[i].codigo}</p>
        </div>
        <div className="p-1 bp-5:max-w-[200px] flex-1">
          <div className="m-0.5 p-1 border border-slate-300 flex gap-2">
              <span className="text-slate-500">Documento: </span>
              <span>{fichas[i].num_doc}</span>
          </div>
          <div className="m-0.5 p-1 border  border-slate-300 flex">
              <div className="flex-1 flex justify-between border-r  border-slate-300">
                <span className="text-slate-500">Versión:</span>
                <span className={clsx("w-10 mx-2 px-2 border border-slate-300 rounded-lg text-slate-100",
                { 'bg-green-700': (i_mostrar == num_versiones),
                  'bg-red-700': (i_mostrar < num_versiones),
                })}>
                  {i_mostrar}/{num_versiones}
              </span>
          </div>
            <NavegadorVersiones
              material = {material}
              id = {id}
              tipo = {tipo}
              id_tipo = {id_tipo}
              sistema = {sistema}
              id_sistema = {id_sistema}
              conjunto = {conjunto}
              id_conjunto = {id_conjunto}
              componente = {componente}
              id_componente = {id_componente}
              version = {i}/>
          </div>
          <div className="m-0.5 p-1 border  border-slate-300 flex gap-2">
            <span className="text-slate-500">Fecha: </span>
            <span>{fichas[i].Fecha}</span>
          </div>
        </div>
      </div>
      {/* Autores */}
      <div className="mt-1 flex flex-wrap border border-slate-600">
        <div className="my-1 flex p-3 space-x-6 ml-1 border-r">
          <div className="text-slate-500">Elaborado: </div>
          <div className="">
            <p>{fichas[i].realizado.nombre} {fichas[i].realizado.apellido}</p>
            <p className="text-slate-500">{fichas[i].realizado.cargo}</p>
          </div>
          <Image 
            className="rounded-full shadow-md shadow-slate-600 m-l-8 w-12 h-12 overflow-hidden"
            src = {urlFor(fichas[i].realizado.imagen).url()}
            alt= 'avatar'
            width={10}
            height = {10}/>
        </div>
        <div className="my-1 flex p-3 space-x-6 border-r">
          <div className="text-slate-500">Supervisado: </div>
          <div className="">
            <p>{fichas[i].supervisado.nombre} {fichas[i].supervisado.apellido}</p>
            <p className="text-slate-500">{fichas[i].supervisado.cargo}</p>
          </div>
          <Image 
            className="rounded-full shadow-md shadow-slate-600 m-l-8 w-12 h-12 overflow-hidden"
            src = {urlFor(fichas[i].supervisado.imagen).url()}
            alt= 'avatar'
            width={10}
            height = {10}/>
        </div> 
      </div>
      {/* CABECERA */}
      <div className="my-2 p-4 border  border-slate-600">
        <div className="text-center text-3xl font-extralight p-8">
          {fichas[i].descripcion}
        </div>
        {fichas[i].imagen &&
        <Image 
            className="object-cover object-left h-auto mx-auto rounded-2xl border"
            src = {urlFor(fichas[i].imagen).url()}
            alt= 'imagen'
            width={1000}
            height = {400}/>}
      </div>

      {/* DESCRIPCIÓN TÉCNICA */}
      <div className="mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Descripción Técnica del Conjunto
        </div>
        <div className="p-2">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>

      {/* MANTENIMIENTO 
      <div className="mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Mantenimiento
        </div>
        <div className="p-2">
          <PortableText
              value={fichas[i].mantenimiento}
              components = {RichTextComponents}/>
        </div>
      </div>
      */}
      {/* INSTRUCCIONES TÉCNICAS DEL COMPONENTE */}
      <div className="mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Instrucciones Técnicas de Mantenimiento
        </div>
        <div className="p-8 text-slate-400">
          {fichas[i].itms && fichas[i].itms.map((itm)=>{return(
            (itm?
              <span>{itm.codigo} - {itm.operacion} - {itm.descripcion}</span>
          :
          (''))
          )})}
        </div>
      </div>

  </div>
  )
}
