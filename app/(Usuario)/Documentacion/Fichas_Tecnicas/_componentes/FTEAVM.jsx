import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "@/components/RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorSistema from "./NavegadorSistema";

export default async function FTEAVM({id_EAVM, tipo, id_tipo, version}) {
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
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500'><h2>¡La ficha técnica de este tipo de Eje no Existe!. Créalo en el Estudio!</h2></div>
  }

  let i = 0
  if(version === 1000){i = num_versiones-1}
  else if (version >= num_versiones){i = num_versiones-1}
  else if (version < 0) {i=0}
  else {i = version}
  const i_mostrar = parseInt(i)+1

  console.log(fichas[0].descripcion)
  console.log(fichas[0].sistemas)

  return (  
  <div className="inline-flex flex-col w-[412px] md:w-[585px] lg:w-full gap-4">
      {/* BANNER */}
      <div className="flex gap-2 mx-2 flex-wrap">
        <div className="bg-gray-700 text-white rounded-md shadow-sm flex-1 flex justify-between flex-wrap">
          <div className="flex flex-col justify-center">
            <div className="w-[180px] h-[80px] py-2 my-4 mx-4 rounded-lg border-2 bg-white">
              <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
            </div>
          </div>
          <div className="min-w-[340px] flex-1 flex justify-between items-center flex-wrap">
            <div className="text-3xl font-light max-w-[500px] mx-4 md:mx-8 my-2">
              <p>{fichas[i].descripcion}</p>
              {/*<p className="text-slate-500 text-xl">{fichas[i].codigo}</p>*/}
              </div>
            <div className= "flex justify-center border shadow p-2 rounded-md bg-gray-800 mx-4 md:mx-8 my-2 opacity-50">
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
              material = {'Ejes_EAVM'}
              id = {id_EAVM}
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
      <div className="flex flex-col lg:flex-row items-start gap-5 self-stretch mx-2 mt-3">
        <div className="flex flex-col items-start gap-4 grow w-[395px] md:w-[565px]">
          <div className="flex flex-col items-start gap-3 self-stretch">
            <p className="text-gray-500">Elaborado</p>
            <div className="flex flex-col bg-white border rounded-lg shadow-sm items-start p-4 lg:p-6 self-stretch">
              <div className="flex justify-center items-start gap-4 self-stretch">
                <div className="flex flex-col justify-center items-center self-stretch">
                  <Image 
                  className="rounded shadow-md shadow-slate-600 w-20 h-20 overflow-hidden"
                  src = {urlFor(fichas[i].realizado.imagen).url()}
                  alt= 'avatar'
                  width={82}
                  height = {88}/>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 grow self-stretch">
                  <div className="flex flex-col md:flex-row md:justify-between items-end lg:items-center gap-2 self-stretch">
                    <div className="flex flex-col items-start lg:gap-2 self-stretch">
                      <p className="text-lg lg:text-xl font-bold">{fichas[i].realizado.nombre} {fichas[i].realizado.apellido}</p>
                      <p className="text-sm lg:text-base text-gray-500">{fichas[i].realizado.cargo}</p>
                    </div>
                    <button className="rounded-lg text-green-500 border p-2 border-green-500">Curriculum vitae</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 self-stretch">
            <p className="text-gray-500">Supervisado</p>
            <div className="flex flex-col bg-white border rounded-lg shadow-sm items-start p-4 lg:p-6 self-stretch">
              <div className="flex justify-center items-start gap-4 self-stretch">
                <div className="flex flex-col justify-center items-center self-stretch">
                  <Image 
                    className="rounded shadow-md shadow-slate-600 w-20 h-20 overflow-hidden"
                    src = {urlFor(fichas[i].supervisado.imagen).url()}
                    alt= 'avatar'
                    width={82}
                    height = {88}/>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 grow self-stretch">
                  <div className="flex flex-col md:flex-row md:justify-between items-end lg:items-center gap-2 self-stretch">
                    <div className="flex flex-col items-start lg:gap-2 self-stretch">
                      <p className="text-lg lg:text-xl font-bold">{fichas[i].supervisado.nombre} {fichas[i].supervisado.apellido}</p>
                      <p className="text-sm lg:text-base text-gray-500">{fichas[i].supervisado.cargo}</p>
                    </div>
                    <button className="rounded-lg text-green-500 border p-2 border-green-500">Curriculum vitae</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CABECERA */}
        <div className="flex flex-col items-start gap-2 lg:gap-3 lg:grow self-stretch">
          <p className="text-gray-500">Eje</p>
          <div className="flex flex-col w-[395px] md:w-[565px] justify-center lg:justify-end items-center lg:gap-[91px] grow">
            {fichas[i].imagen &&
            <Image 
              className="object-cover h-[285px] lg:h-[310px] rounded-md border shadow-sm"
              src = {urlFor(fichas[i].imagen).url()}
              alt= 'imagen'
              width={565}
              height = {400}/>}
          </div>
        </div>
      </div>
      {/* CARACTERÍSTICAS TÉCNICAS */}
      <div className="flex flex-col items-start gap-2 lg:gap-3 self-stretch">
        <p className="text-gray-500">Cuadro de Carácterísticas</p>
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className="flex flex-col p-4 lg:p-6 items-start gap-6 self-stretch bg-white rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8 self-stretch">
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Aplicación:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Remolcado</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].familia==='Remolcado'), "text-slate-300":(fichas[i].familia!=='Remolcado')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Tractor</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].familia==='Tractor'), "text-slate-300":(fichas[i].familia!=='Tractor')})}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Rueda:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">920mm</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].diam_rueda==='920 mm'), "text-slate-300":(fichas[i].diam_rueda!=='920 mm')})}/>
                  </div>
                  <div className="flex justify-between lg:items-start self-stretch">
                    <p className="font-semibold">760mm</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].diam_rueda==='760 mm'), "text-slate-300":(fichas[i].diam_rueda!=='760 mm')})}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Fab. Rueda:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">CAF</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].fab_rueda==='CAF'), "text-slate-300":(fichas[i].fab_rueda!=='CAF')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Luchinni</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].fab_rueda==='LUCHINNI'), "text-slate-300":(fichas[i].fab_rueda!=='LUCHINNI')})}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Fab. Eje:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">CAF</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].fab_eje==='CAF'), "text-slate-300":(fichas[i].fab_eje!=='CAF')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Luchinni</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].fab_eje==='LUCHINNI'), "text-slate-300":(fichas[i].fab_eje!=='LUCHINNI')})}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 lg:p-6 items-start gap-6 self-stretch bg-white rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8 self-stretch">
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Anchos:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">UIC / Ibérico</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / IBÉRICO(1668 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / IBÉRICO(1668 mm)')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">UIC / Ruso</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / RUSO(1520 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / RUSO(1520 mm)')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">UIC / Ruso / Ibérico</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].anchos==='UIC(1435 mm) / RUSO(1520 mm) / IBÉRICO(1668 mm)'), "text-slate-300":(fichas[i].anchos!=='UIC(1435 mm) / RUSO(1520 mm) / IBÉRICO(1668 mm)')})}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Frenos:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Zapata</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].freno==='Zapata'), "text-slate-300":(fichas[i].freno!=='Zapata')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Disco Rueda</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].freno==='Discos en rueda'), "text-slate-300":(fichas[i].freno!=='Discos en rueda')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">Discos Eje</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].freno==='Discos centrales'), "text-slate-300":(fichas[i].freno!=='Discos centrales')})}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 grow">
                <p className="text-sm lg:text-base text-gray-500">Carga Max.:</p>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">16 ton</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].carga_max==='16 ton'), "text-slate-300":(fichas[i].freno!=='16 ton')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">22,5 ton</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].carga_max==='22.5 ton'), "text-slate-300":(fichas[i].freno!=='22.5 ton')})}/>
                  </div>
                  <div className="flex justify-between items-start self-stretch">
                    <p className="font-semibold">25 ton</p>
                    <CheckCircleIcon className={clsx("w-6 h-6", {"text-green-500":(fichas[i].carga_max==='25 ton'), "text-slate-300":(fichas[i].freno!=='25 ton')})}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SISTEMAS EAVM */}
      <div className="flex flex-col items-end gap-4 self-stretch mt-4 mx-2">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col md:flex-row justify-between md:items-center self-stretch">
            <p className="mb-2 lg:mb-0 text-gray-500">Composición del EAVM</p>
            <div className="flex flex-col bg-white rounded-lg shadow-sm py-2 px-4 items-start gap-2.5">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <img src="/imagenes/elipses/EllipseBlue.svg" alt="elipse" />
                  <p className="text-sm text-blue-600">Sistemas</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/imagenes/elipses/EllipseOrange.svg" alt="elipse" />
                  <p className="text-sm text-orange-600">Conjuntos</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/imagenes/elipses/EllipseTeal.svg" alt="elipse" />
                  <p className="text-sm text-teal-600">Componentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {fichas[i].sistemas && fichas[i].sistemas.map((sistema)=>{return(
            (sistema?
              <NavegadorSistema 
                key = {sistema.slug.current}
                sistema = {sistema}
                material = {'EAVMs'}
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
      <div className="flex flex-col lg:w-[1142px] items-start gap-2 lg:gap-3 mt-4 mx-2">
        <div className="text-slate-500">Descripción Técnica del vehículo</div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>
      {/* MANTENIMIENTO */}
      <div className="flex flex-col lg:w-[570px] items-start gap-2 lg:gap-3 mt-4 mx-2">
        <div className="text-slate-500">Mantenimiento</div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <PortableText
              value={fichas[i].mantenimiento}
              components = {RichTextComponents}/>
        </div>
      </div>
  </div>
  )
}
