import Link from 'next/link';
import Image from "next/image"
import nubes from '@/public/imagenes/clima/nubes.png'
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

export default async function FichaVehiculo ({vehiculo}){
  
  return(
    <>
    {/* Título Ficha */}
    <div className='text-lg text-gray-400 mb-2'>Vehículo: [ {vehiculo.id} ]</div>
    {/* Div General */} 
    <div className="bp-2:grid bp-2:gap-1 bp-2:grid-cols-2 bp-3:grid-cols-3 bp-4:grid-cols-4 bp-5:grid-cols-5 bp-6:grid-cols-6 bp-7:grid-cols-7 bp-8:grid-cols-8">
      {/* Div # 1 - Imagen + estado ocupa 2 cols */}
      <div className="flex justify-around align-middle col-span-1 rounded-md py-2 px-2 border border-slate-500 h-[12rem] bp-2:col-span-2">
          <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = 'imagen vehículo' height = {230} width = {350} className="rounded-lg h-auto"/>

      </div>
      
      {/* Div # 2 - Matrícula y Descripción*/}
      <div className="rounded-md px-2 py-2 border border-slate-500 h-[12rem] overflow-y-hidden bp-5:col-span-2 bp-7:col-span-1">
        <div className="rounded-md pt-2 px-1 h-16 text-lg font-extralight overflow-hidden text-center bg-slate-800 ">{vehiculo.num_uic}</div>
        <div className="mt-2 p-1 font-light text-sm text-slate-400 border border-slate-600 rounded-md">{vehiculo.descripcion_particular}</div>
      </div>

      {/* Div # 3 - Tipo*/}
      <div className="rounded-md px-4 border border-slate-500 overflow-hidden h-[12rem]">
        <div className = 'flex justify-between'>
          <div className="mt-2 text-slate-300">Tipo:</div>
          <Link className="mt-2 flex justify-between text-lg font-extralight text-slate-400" 
            href = {`/Documentacion/Fichas_Tecnicas?material=Vehiculos&id=${vehiculo.id}&tipo=${vehiculo.tipo.descripcion}&id_tipo=${vehiculo.tipo.id}&version=${1000}`}> 
            <ArrowTopRightOnSquareIcon className="w-6 h-5"/>
          </Link>
        </div>
        <div className="mt-2 h-12 overflow-hidden text-md font-light text-slate-400">{vehiculo.tipo.descripcion}</div>
        <div className="mt-1 text-xs text-slate-300">Tipo UIC:</div>
          <div className="mt-1 text-md font-light text-slate-400">{vehiculo.tipo.tipo_uic}</div>
          <div className="text-xs text-slate-300 mt-2">Serie UIC:</div>
          <div className="mt-1 text-md font-light  text-slate-400">{vehiculo.tipo.serie_uic}</div>
      </div>

      {/* Div # 4 - Owner y Keeper*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
          <div className="text-xs text-slate-300">Owner / Keeper:</div>
          <div className="rounded-md mt-2 p-1 h-16 text-md font-light  text-slate-400">{vehiculo.owner} / {vehiculo.keeper}</div>
          <div className="text-xs text-slate-300 mt-1">EEM:</div>
          <div className="mt-2 p-1 h-10 text-md font-light  text-slate-400">{vehiculo.EEM}</div>
      </div>

    {/* Div # 5 - Clima  
    <div className="rounded-md px-4 py-2 border border-slate-500 h-[12rem]">
        <Image src = {nubes} alt = 'nubes' height = {100} width = {120} className="rounded-lg mx-auto p-2"/>
        <div className=" text-slate-500 font-extrabold mx-auto text-center">Zaragoza</div>
        <div className=" text-slate-500 font-extrabold text-5xl mx-auto text-center">7º</div>
    </div>
    */}
    {/* Div # 6 - datos Circulación*/}
    <div className="rounded-md px-4 py-2 border border-slate-500 h-[12rem] bp-6:col-span-2 bp-7:col-span-1">
        <div className=" text-slate-300">Circulación:</div>
        <div className = 'flex justify-evenly mt-2 p-0.5 rounded-full border border-slate-500'>
        {vehiculo.en_circulacion?
              (<PlayIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<PauseIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        {vehiculo.alarma?
            (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
          : (<BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>)}
        {vehiculo.transmitiendo?
              (<RssIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<WifiIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        </div>
        <div className="mt-3 text-xs text-slate-300">KM realizados:</div>
        <div className="py-1 h-10 text-lg font-light  text-slate-400 overflow-hidden">{Math.round(vehiculo.km_totales).toLocaleString('fr')} km</div>
        <div className="flex justify-between">
          <div className='text-xs  text-slate-300 pt-1'>Nudo ferroviario:</div>
          {vehiculo.en_nudo?
            (<CheckIcon className="mx-auto w-6 h-6 text-green-400"/>)
          : (<XMarkIcon className="mx-auto w-6 h-6 text-gray-400"/>)
          }
        </div>
    </div>

    {/* Div # 7 - datos Mantenimiento*/}
    <div className="rounded-md px-4 border border-slate-500 h-[12rem] bp-6:col-span-2 bp-7:col-span-1">
      <div className = 'flex justify-between'>
        <div className="mt-2 text-slate-300">Mantenim.:</div>
        <Link className="mt-2 flex justify-between text-lg font-extralight text-slate-400" href = '/Vehiculos'> 
          <ArrowTopRightOnSquareIcon className="w-6 h-5"/>
        </Link>
      </div>
      <div className = 'flex justify-evenly mt-2 p-1 rounded-full border border-slate-500'>
        {vehiculo.en_servicio?
          (<BoltIcon className="w-6 h-6 mx-auto text-green-500"/>)
        : (<BoltSlashIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        {vehiculo.en_mantenimiento?
          (<WrenchIcon className="w-6 h-6 mx-auto text-green-500"/>)
        : (<WrenchIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
        {vehiculo.alarma_mantenimiento?
          (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
        : (<BellAlertIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
      </div>
      {vehiculo.en_servicio?
      (
        <>
        <div className="mt-3 text-xs text-slate-300">Último Mto:</div>
        <div className="py-1 h-10 overflow-hidden text-md font-light  text-slate-400 ">{vehiculo.fecha_ultimo_mantenimiento}</div> 
        <div className="text-xs text-slate-300">Próximo Mto:</div>
        <div className="py-1 h-10 overflow-hidden text-md font-light  text-red-700">{vehiculo.fecha_proximo_mantenimiento}</div> 
        </>
      )
      :
      (
        <>
        <div className="mt-3 text-xs text-slate-300">Observaciones:</div>
        <div className="mt-2 h-20 overflow-hidden text-md font-light  text-slate-400">{vehiculo.observaciones_servicio}</div>  
        </>
      )
      }
      </div>
    
    {/* Div # 8 - Ejes */}
    <div className="rounded-md px-2 py-2  border border-slate-500 h-[12rem] bp-3:col-span-2 bp-4:col-span-1 bp-5:col-span-2 bp-8:col-span-1">
        <div className=" text-slate-300 mb-1">Ejes:</div>
        <div className="rounded-m py-1 px-1 h-36 bg-slate-900 overflow-y-scroll">
          {vehiculo.ejes.map((eje)=>{return(
              <Link key={eje.id} className="mt-1 flex justify-between text-md font-light text-slate-400 overflow-hidden" href = {`/Ejes_EAVM/${eje.id}`}> 
                {eje.codigo} 
                <ArrowTopRightOnSquareIcon className="w-6 h-5 ml-4"/>
              </Link>
            )
            })}
        </div>
      </div>
  </div>
  </>
  )
}
