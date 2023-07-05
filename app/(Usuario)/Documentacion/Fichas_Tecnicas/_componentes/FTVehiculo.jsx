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
  <div className="mx-auto max-w-[412px] md:max-w-[810px] lg:max-w-full">
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
      <div className="flex flex-col xl:flex-row items-start gap-5 self-stretch mx-2 mt-3">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-3">
            <p className="text-slate-500">Elaborado </p>
            <div className="flex flex-col bg-white border rounded-lg shadow-sm items-start p-6 self-stretch">
              <div className="flex justify-center items-start gap-4 self-stretch w-[565px]">
                <div className="flex flex-col justify-center items-center self-stretch">
                  <Image 
                  className="rounded shadow-md shadow-slate-600 w-20 h-20 overflow-hidden"
                  src = {urlFor(fichas[i].realizado.imagen).url()}
                  alt= 'avatar'
                  width={82}
                  height = {82}/>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 self-stretch">
                  <div className="flex space-x-48 items-center self-stretch">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">{fichas[i].realizado.nombre} {fichas[i].realizado.apellido}</p>
                      <p className="text-slate-500">{fichas[i].realizado.cargo}</p>
                    </div>
                    <button className="rounded-lg text-green-500 border p-1 border-green-500">Curriculum vitae</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-slate-500">Supervisado </p>
            <div className="flex flex-col bg-white border rounded-lg shadow-sm items-start p-6 self-stretch">
              <div className="flex justify-center items-start gap-4 self-stretch w-[565px]">
                <div className="flex flex-col justify-center w-20 items-center self-stretch">
                  <Image 
                  className="rounded shadow-md shadow-slate-600 w-20 h-20 overflow-hidden"
                  src = {urlFor(fichas[i].supervisado.imagen).url()}
                  alt= 'avatar'
                  width={82}
                  height = {82}/>
                </div>
                <div className="flex flex-col justify-center items-start gap-4 self-stretch">
                  <div className="flex space-x-48 items-center self-stretch">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-xl font-bold">{fichas[i].supervisado.nombre} {fichas[i].supervisado.apellido}</p>
                      <p className="text-slate-500">{fichas[i].supervisado.cargo}</p>
                    </div>
                    <button className="rounded-lg text-green-500 border p-1 border-green-500">Curriculum vitae</button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        {/* CABECERA */}
        <div className="flex flex-col items-start gap-3 self-stretch">
          <p className="text-slate-500">Vehículo</p>
          {fichas[i].imagen &&
          <Image 
              className="object-cover h-[310px] rounded-md border shadow-sm shadow-slate-600"
              src = {urlFor(fichas[i].imagen).url()}
              alt= 'imagen'
              width={1000}
              height = {400}/>}
        </div>
      </div>
      {/* CARACTERÍSTICAS TÉCNICAS */}
      <div className="flex flex-col items-start gap-3 self-stretch mx-2 mt-4">
        <div className="text-slate-500">Carácterísticas ferroviarias</div>
        <div className="flex flex-col items-start gap-3 self-stretch">
          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex items-start justify-around bg-white shadow-sm rounded-lg p-6 gap-4 self-stretch">
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].tipo_uic}</p>
                <p className="text-slate-500">Tipo UIC</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].serie_uic}</p>
                <p className="text-slate-500">Serie UIC</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].marca}</p>
                <p className="text-slate-500">Marca</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].modelo}</p>
                <p className="text-slate-500">Modelo</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex items-start justify-around bg-white shadow-sm rounded-lg p-6 gap-4 self-stretch">
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].velocidad} Km/h</p>
                <p className="text-slate-500">Vel. Máx. (vía)</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].num_bogies}</p>
                <p className="text-slate-500">Número Bogies</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].num_ejes}</p>
                <p className="text-slate-500">Número Ejes</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].longitud} mm</p>
                <p className="text-slate-500">Longitud</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex items-start justify-around bg-white shadow-sm rounded-lg p-6 gap-4 self-stretch">
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].carga_maxima.toLocaleString('fr')} Kg</p>
                <p className="text-slate-500">Carga Máxima</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].tara.toLocaleString('es-ES')} Kg</p>
                <p className="text-slate-500 ">Tara</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{fichas[i].peso_x_eje.toLocaleString('es-ES')} Kg</p>
                <p className="text-slate-500">Peso x Eje</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SISTEMAS VEHÍCULO */}
      <div className="flex flex-col items-end gap-4 self-stretch mt-4 mx-2">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-slate-500">Composición del vehículo</p>
            <div className="flex flex-col py-2 px-4 items-start gap-2.5">
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
      <div className="flex flex-col w-[1142px] items-start gap-3 mt-4 mx-2">
        <div className="text-slate-500">Descripción Técnica del vehículo</div>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <PortableText
              value={fichas[i].detalle}
              components = {RichTextComponents}/>
        </div>
      </div>
      {/* MANTENIMIENTO */}
      <div className="flex flex-col w-[570px] items-start gap-3 mt-4 mx-2">
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
