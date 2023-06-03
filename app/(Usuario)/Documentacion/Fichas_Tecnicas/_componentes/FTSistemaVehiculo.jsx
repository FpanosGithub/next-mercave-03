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

export default async function FTSistema({material, id, tipo, id_tipo, sistema, id_sistema, version}) {

  const query = groq`
  *[_type=='FTSistemaVehiculo' && num_doc==${id_sistema}] | order(version) 
  {
    ...,
    realizado ->,
    supervisado ->,
    conjuntos[]->{
          num_doc, 
          codigo, 
          descripcion,
          componentes[]->{num_doc, codigo, ccs, descripcion}
    }
  }
  `

  console.log('kjdvjnndfvknldszvlkmñls<dñlñl3po349093490')
  console.log(query)
  const fichas = await client.fetch(query);

  console.log(fichas)

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
  <div className="border border-slate-500 max-w-6xl mx-auto">
      {/* TÍTULO */}
      <div className="flex flex-wrap">
        <div className="p-3 min-w-fit max-w-[440px] bp-3:max-w-[200px] border  border-slate-600 flex-1">
          <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
        </div>
        <div className="text-fuchsia-500 min-w-[260px] p-4 border border-slate-600 text-center text-3xl font-light flex-1">
          <p>Ficha Técnica de Sistema</p>
          <p className="pt-3 text-slate-400 text-2xl">{fichas[i].codigo}</p>
        </div>
        <div className="p-2 bp-5:max-w-[200px] border border-slate-600 flex-1">
          <div className="p-1 border  border-slate-700">
            Documento: {fichas[i].num_doc}
          </div>
          <div className="p-1 border  border-slate-700 flex">
            <div className="flex-1 flex justify-between pr-4 border-r  border-slate-700">
              <span>Versión:</span>
              <span className={clsx("w-10 mx-2 px-2 border border-slate-700 rounded-lg text-slate-100",
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
          <div className="p-1 border  border-slate-700">
            Fecha: {fichas[i].Fecha}
          </div>
        </div>
      </div>
      {/* Autores */}
      <div className="flex flex-wrap">
        <div className="flex p-3 space-x-6 border border-slate-600 flex-1">
          <div className="text-slate-400">Elaborado: </div>
          <div className="">
            <p>{fichas[i].realizado.nombre} {fichas[i].realizado.apellido}</p>
            <p className="text-slate-400">{fichas[i].realizado.cargo}</p>
          </div>
          <Image 
            className="rounded-full shadow-lg shadow-slate-700 m-l-8 w-12 h-12 overflow-hidden"
            src = {urlFor(fichas[i].realizado.imagen).url()}
            alt= 'avatar'
            width={10}
            height = {10}/>
        </div>
        <div className="flex p-3 space-x-6 border border-slate-600 flex-1">
          <div className="text-slate-400">Supervisado: </div>
          <div className="">
            <p>{fichas[i].supervisado.nombre} {fichas[i].supervisado.apellido}</p>
            <p className="text-slate-400">{fichas[i].supervisado.cargo}</p>
          </div>
          <Image 
            className="rounded-full shadow-lg shadow-slate-700 m-l-8 w-12 h-12 overflow-hidden"
            src = {urlFor(fichas[i].supervisado.imagen).url()}
            alt= 'avatar'
            width={10}
            height = {10}/>
        </div> 
      </div>
      {/* CABECERA */}
      <div className="p-5">
        <div className="text-center text-3xl font-extralight p-4">
          {fichas[i].descripcion}
        </div>
        {fichas[i].imagen &&
        <Image 
            className="object-cover object-left width-auto mx-auto border rounded-2xl"
            src = {urlFor(fichas[i].imagen).url()}
            alt= 'avatar'
            width={1000}
            height = {400}/>}
      </div>

      {/* CONJUNTOS DEL SISTEMA */}
      <div className="m-2 mt-4 border border-slate-600">
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
