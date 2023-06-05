import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import Image from "next/image";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "@/components/RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorSistema from "./NavegadorSistema";

export default async function FTVehiculo({id_vehiculo, tipo, id_tipo, version}) {
  const query = groq`
  *[_type=='FTVehiculo' && num_doc==${id_tipo}] | order(version) 
  {
    ...,
    realizado ->,
    supervisado ->,
    sistemas[]->{
        num_doc, 
        codigo,
        ccs,
        descripcion,
        conjuntos[]->{
            num_doc,
            codigo,
            ccs,
            descripcion,
            componentes[]->{num_doc, codigo, ccs, descripcion}
            }
        },
  }
  `
  const fichas = await client.fetch(query);

  const num_versiones = fichas.length
  if (num_versiones===0){
    return 
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500'><h2>¡La ficha técnica de este tipo de vehículo no Existe!. Créalo en el Estudio!</h2></div>
  }

  let i = 0
  if(version === 1000){i = num_versiones-1}
  else if (version >= num_versiones){i = num_versiones-1}
  else if (version < 0) {i=0}
  else {i = version}
  const i_mostrar = parseInt(i)+1

  let clase = 'Indefinida'
  if (fichas[i].clase==='MRA') {clase= 'Material Rodante Auxiliar'}
  if (fichas[i].clase==='LOC') {clase= 'Locomotora'}
  if (fichas[i].clase==='VAG') {clase= 'Vagón'}

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
              <p>{fichas[i].descripcion}</p>
              <p className="text-slate-500 text-xl">{clase}</p>
            </div>
            <div className= "flex justify-center border shadow p-2 rounded-md bg-gray-800 hover:cursor-pointer mx-4 md:mx-8 my-2">
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
              material = {'Vehiculos'}
              id = {id_vehiculo}
              tipo = {tipo}
              id_tipo = {id_tipo}
              version = {i}/>
          </div>
          <div className="m-0.5 p-1 flex justify-between gap-2">
            <span className="text-slate-300">Fecha: </span>
            <span>{fichas[i].Fecha}</span>
          </div>
        </div>
      </div>
      {/* AUTORES */}
      <div className=" mx-2 mt-2 flex flex-wrap border border-slate-600 rounded-md">
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
      <div className="mx-2 my-2 p-4 border  border-slate-600 rounded-md">
        {fichas[i].imagen &&
        <Image 
            className="object-cover object-left h-auto mx-auto rounded-md border shadow-md shadow-slate-600"
            src = {urlFor(fichas[i].imagen).url()}
            alt= 'imagen'
            width={1000}
            height = {400}/>}
      </div>
      {/* CARACTERÍSTICAS TÉCNICAS */}
      <div className=" mx-2 mt-4 border border-slate-600 rounded-md">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Carácterísticas ferroviarias
        </div>
        <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Tipo UIC:</div>
            <div className="p-2 flex-1">{fichas[i].tipo_uic}</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Serie UIC:</div>
            <div className="p-2 flex-1">{fichas[i].serie_uic}</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Marca:</div>
            <div className="p-2 flex-1">{fichas[i].marca}</div>
          </div>
          <div className="flex flex-1">
            <div className="text-slate-500 p-2">Modelo:</div>
            <div className="p-2 flex-1">{fichas[i].modelo}</div>
          </div>
        </div>
        <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Vel. Máx. (vía):</div>
            <div className="p-2 flex-1">{fichas[i].velocidad} Km/h</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Número Bogies:</div>
            <div className="p-2 flex-1">{fichas[i].num_bogies}</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Número Ejes:</div>
            <div className="p-2 flex-1">{fichas[i].num_ejes}</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2 text-lg">Longitud:</div>
            <div className="p-2 flex-1">{fichas[i].longitud} mm</div>
          </div>
        </div>
        <div className="flex w-full text-lg font-light flex-wrap">
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Carga Máxima:</div>
            <div className="p-2 flex-1">{fichas[i].carga_maxima.toLocaleString('fr')} Kg</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2 ">Tara:</div>
            <div className="p-2 flex-1">{fichas[i].tara.toLocaleString('es-ES')} Kg</div>
          </div>
          <div className="my-1 border-r border-slate-300 flex flex-1">
            <div className="text-slate-500 p-2">Peso x Eje:</div>
            <div className="p-2 flex-1">{fichas[i].peso_x_eje.toLocaleString('es-ES')} Kg</div>
          </div>
        </div>
      </div>

      {/* SISTEMAS VEHÍCULO */}
      <div className="mx-2 mt-4 border border-slate-600 rounded-md">
        <div className="p-2 w-full border-b border-slate-300">
          <div className="text-2xl font-extralight">Composición del vehículo</div>
          <div className="text-lg font-extralight flex px-2 pt-2">
            <div className="border-l border-l-fuchsia-500 px-2">Sistemas</div>
            <div className="border-l border-l-blue-500 px-2">Conjuntos</div>
            <div className="border-l border-l-emerald-500 pl-2">Componentes</div>
          </div>
        </div>
        <div className="p-8 text-slate-500">
          {fichas[i].sistemas && fichas[i].sistemas.map((sistema)=>{return(
            (sistema?
              <NavegadorSistema 
                sistema = {sistema}
                material = {'Vehiculos'}
                id = {id_vehiculo}
                tipo = {tipo}
                id_tipo = {id_tipo}
                version = {i}/>
            :
            (''))
          )})}
        </div>
      </div>

      {/* DESCRIPCIÓN TÉCNICA */}
      <div className="mx-2 mt-4 border border-slate-600 rounded-md">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Descripción Técnica del vehículo
        </div>
        <div className="p-4">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>
      {/* MANTENIMIENTO */}
      <div className="mx-2 mt-4 border border-slate-600 rounded-md">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Mantenimiento
        </div>
        <div className="p-4">
          <PortableText
              value={fichas[i].mantenimiento}
              components = {RichTextComponents}/>
        </div>
      </div>
      

  </div>
  )
}
