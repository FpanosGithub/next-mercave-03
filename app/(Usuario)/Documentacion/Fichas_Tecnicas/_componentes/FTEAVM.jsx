import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import { StopIcon, CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "./RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorSistema from "./NavegadorSistema";

export default async function FTEAVM({id_EAVM, tipo, id_tipo, version}) {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  const query = groq`
  *[_type=='FTEAVM' && num_doc==${id_tipo}] | order(version) 
  {
    ...,
    realizado ->,
    supervisado ->,
    sistemas[]->{
        slug,
        num_doc, 
        codigo,
        ccs,
        descripcion,
        conjuntos[]->{
            slug,
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
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500'><h2>¡El Documento no Existe!. Créalo en el Estudio!</h2></div>
  }

  let i = 0
  if(version === 1000){i = num_versiones-1}
  else if (version >= num_versiones){i = num_versiones-1}
  else if (version < 0) {i=0}
  else {i = version}
  const i_mostrar = parseInt(i)+1

  return (  
  <div className="">
      {/* TÍTULO */}
      <div className="flex flex-wrap border  border-slate-600">
        <div className="m-1 p-3 min-w-fit max-w-[440px] bp-3:max-w-[200px] border-r flex-1">
          <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
        </div>
        <div className="m-1 p-4 border-r min-w-[260px] text-center text-3xl font-light flex-1">
          <p>Ficha Técnica de Eje de Ancho Variable de Mercancías</p>
          <p className="mt-4 text-slate-500 text-2xl">{fichas[i].codigo}</p>
          <div className="text-slate-400 text-lg flex justify-center hover:cursor-pointer">
            <span>( </span><span className="underline underline-offset-4"> Expediente AESF</span><span> )</span>
          </div>
        </div>
        <div className="p-1 bp-5:max-w-[200px] flex-1">
          <div className="m-0.5 p-1 border  border-slate-300 flex gap-2">
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
              material = {'Ejes_EAVM'}
              id = {id_EAVM}
              tipo = {tipo}
              id_tipo = {id_tipo}
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
            className="object-cover object-left h-auto mx-auto rounded-2xl"
            src = {urlFor(fichas[i].imagen).url()}
            alt= 'imagen'
            width={1000}
            height = {400}/>}
      </div>

      {/* CARACTERÍSTICAS TÉCNICAS */}

      <div className="mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Cuadro de Carácterísticas
        </div>
        <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">
          
          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Aplicación:</div>
            <div className="flex px-2 justify-between">
              <div>Remolcado</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].familia==='Remolcado'), "text-slate-300":(fichas[i].familia!=='Remolcado')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>Tractor</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].familia==='Tractor'), "text-slate-300":(fichas[i].familia!=='Tractor')})}/>
            </div>
          </div>

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Rueda:</div>
            <div className="flex px-2 justify-between">
              <div>920mm</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].diam_rueda==='920 mm'), "text-slate-300":(fichas[i].diam_rueda!=='920 mm')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>760mm</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].diam_rueda==='760 mm'), "text-slate-300":(fichas[i].diam_rueda!=='760 mm')})}/>
            </div>
          </div>

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Fab. Rueda:</div>
            <div className="flex px-2 justify-between">
              <div>CAF</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].fab_rueda==='CAF'), "text-slate-300":(fichas[i].fab_rueda!=='CAF')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>Luchinni</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].fab_rueda==='LUCHINNI'), "text-slate-300":(fichas[i].fab_rueda!=='LUCHINNI')})}/>
            </div>
          </div>

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Fab. Eje:</div>
            <div className="flex px-2 justify-between">
              <div>CAF</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].fab_eje==='CAF'), "text-slate-300":(fichas[i].fab_eje!=='CAF')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>Luchinni</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].fab_eje==='LUCHINNI'), "text-slate-300":(fichas[i].fab_eje!=='LUCHINNI')})}/>
            </div>
          </div>
        </div>
        
        <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Anchos:</div>
            <div className="flex px-2 justify-between">
              <div>UIC / Ibérico</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / IBÉRICO(1668 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / IBÉRICO(1668 mm)')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>UIC / Ruso</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / RUSO(1520 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / RUSO(1520 mm)')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>UIC / Ruso / Ibérico</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / RUSO(1520 mm) / IBÉRICO(1668 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / RUSO(1520 mm) / IBÉRICO(1668 mm)')})}/>
            </div>
          </div>

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Frenos:</div>
            <div className="flex px-2 justify-between">
              <div>Zapata</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].freno==='Zapata'), "text-slate-300":(fichas[i].freno!=='Zapata')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>Disco Rueda</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].freno==='Discos en rueda'), "text-slate-300":(fichas[i].freno!=='Discos en rueda')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>Discos Eje</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].freno==='Discos centrales'), "text-slate-300":(fichas[i].freno!=='Discos centrales')})}/>
            </div>
          </div>

          <div className="my-1 border-r border-slate-300 flex-1">
            <div className="text-slate-500 p-2">Carga Max.:</div>
            <div className="flex px-2 justify-between">
              <div>16 ton</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].carga_max==='16 ton'), "text-slate-300":(fichas[i].freno!=='16 ton')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>22,5 ton</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].carga_max==='22.5 ton'), "text-slate-300":(fichas[i].freno!=='22.5 ton')})}/>
            </div>
            <div className="flex px-2 justify-between">
              <div>25 ton</div>
              <CheckCircleIcon className={clsx("w-6 h-6 shadow-md", {"text-green-500":(fichas[i].carga_max==='25 ton'), "text-slate-300":(fichas[i].freno!=='25 ton')})}/>
            </div>
          </div>
        </div>
      </div>

      {/* SISTEMAS EAVM */}
      <div className="mt-4 border border-slate-600">
        <div className="p-2 w-full border-b border-slate-300">
          <div className="text-2xl font-extralight">Composición del EAVM</div>
          <div className="text-lg font-extralight flex px-2 pt-2">
            <div className="border-l border-l-fuchsia-500 px-2">Sistemas</div>
            <div className="border-l border-l-blue-500 px-2">Conjuntos</div>
            <div className="border-l border-l-emerald-500 pl-2">Elementos</div>
          </div>
        </div>
        <div className="p-8 text-slate-500">
          {fichas[i].sistemas && fichas[i].sistemas.map((sistema)=>{return(
            (sistema?
              <NavegadorSistema 
                key = {sistema.slug.current}
                sistema = {sistema}
                material = {'Ejes_EAVM'}
                id = {id_EAVM}
                tipo = {tipo}
                id_tipo = {id_tipo}
                version = {i}/>
            :
            (''))
          )})}
        </div>
      </div>

      {/* DESCRIPCIÓN TÉCNICA */}
      <div className="mt-4 border border-slate-600">
        <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
          Descripción Técnica
        </div>
        <div className="p-2">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>
      {/* MANTENIMIENTO */}
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
      

  </div>
  )
}
