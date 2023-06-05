import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import Image from "next/image";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "./RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorConjunto from "./NavegadorConjunto";

export default async function FTSistemaEAVM({material, id, tipo, id_tipo, sistema, id_sistema, version}) {
  const query = groq`
  *[_type=='FTSistemaEAVM' && num_doc==${id_sistema}] | order(version) 
  {
    ...,
    realizado ->,
    supervisado ->,
    conjuntos[]->{
          slug,
          num_doc, 
          codigo, 
          descripcion,
          componentes[]->{num_doc, codigo, ccs, descripcion}
    }
  }
  `
  const fichas = await client.fetch(query);
  const num_versiones = fichas.length
  if (num_versiones===0){
    return 
    <div className="p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500"><h2>¡El Documento no Existe!. Créalo en el Estudio!</h2></div>
  }

  let i = 0
  if(version === 1000){i = num_versiones-1}
  else if (version >= num_versiones){i = num_versiones-1}
  else if (version < 0) {i=0}
  else {i = version}
  const i_mostrar = parseInt(i)+1

  return (  
    <div className="">
    {/* BANNER */} 
    <div className="flex gap-2 mx-2 flex-wrap">
      <div className="bg-gray-700 text-white rounded-md shadow-sm  min-w-fit flex-1 flex justify-between flex-wrap">
        <div className="flex flex-col justify-center">
          <div className="w-[180px] h-[80px] py-2 my-4 mx-4 rounded-lg border-2 bg-white">
            <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
          </div>
        </div>
        <div className="min-w-[260px] flex-1 flex justify-between items-center flex-wrap">
            <div className="text-3xl font-light mx-4 md:mx-8 my-2">
              <p>Sistema</p>
              <p className="text-slate-300 text-xl mr-4 truncate">{sistema}</p>
              <p className="text-slate-300 text-xl mr-4 truncate">{fichas[i].descripcion}</p>
            </div>
            <div className= "flex justify-center border shadow p-2 rounded-md bg-gray-800 hover:cursor-pointer mx-4 md:mx-8 my-4">
              <p className="text-slate-200"> Expediente AESF</p>
            </div>
          </div>
        </div>
        <div className="p-1 sm:max-w-[200px] bg-gray-700 rounded-md text-white flex-1 shadow-sm">
          <div className="m-0.5 p-1 flex justify-between gap-2">
            <span className="text-slate-300">Documento: </span>
            <span>{fichas[i].num_doc}</span>
          </div>
          <div className="m-0.5 p-1 flex">
            <div className="flex-1 flex justify-between border-r border-slate-300">
              <span className="text-slate-300">Versión:</span>
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
              version = {i}/>
          </div>
          <div className="m-0.5 p-1 flex justify-between gap-2">
            <span className="text-slate-300">Fecha: </span>
            <span>{fichas[i].Fecha}</span>
          </div>
        </div>
      </div>
      {/* AUTORES */}
      <div className="mx-2 mt-2 flex flex-wrap border border-slate-600 rounded">
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
      <div className="mx-2 my-2 p-4 border  border-slate-600 rounded">
        {fichas[i].imagen &&
        <Image 
            className="object-cover object-left h-auto mx-auto rounded-md border shadow-md shadow-slate-600"
            src = {urlFor(fichas[i].imagen).url()}
            alt= 'imagen'
            width={1000}
            height = {400}/>}
      </div>
      {/* CONJUNTOS DEL SISTEMA */}
      <div className="m-2 mt-4 border border-slate-600 rounded">
        <div className="p-2 w-full border border-slate-600">
          <div className="text-2xl font-extralight">Composición del Sistema</div>
          <div className="text-lg font-extralight flex px-2 pt-2">
            <div className="border-l border-l-blue-500 px-2">Conjuntos</div>
            <div className="border-l border-l-emerald-500 pl-2">Componentes</div>
          </div>
        </div>
        <div className="p-8 text-slate-400">
          {fichas[i].conjuntos && fichas[i].conjuntos.map((conjunto)=>{return(
            (conjunto?
              <NavegadorConjunto 
                conjunto = {conjunto}
                sistema = {{codigo:sistema, num_doc:id_sistema}}
                material = {material}
                id = {id}
                tipo = {tipo}
                id_tipo = {id_tipo}
                version = {i}/>
          :
          (''))
          )})}
        </div>
      </div>
      {/* DESCRIPCIÓN TÉCNICA */}
      <div className="m-2 mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border border-slate-600">
          Descripción Técnica del sistema
        </div>
        <div className="p-4">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>
      {/* MANTENIMIENTO */}
      <div className="m-2 mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border border-slate-600">
          Mantenimiento
        </div>
        <div className="p-8">
          <PortableText
              value={fichas[i].mantenimiento}
              components = {RichTextComponents}/>
        </div>
      </div> 
    </div>
  )
}
