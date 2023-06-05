import Link from 'next/link';
import Image from "next/image"
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Weather from '@/components/Weather';
import clsx from 'clsx';

export default function FichaEje ({eje}){
  return(
    <>
    {/* Título Ficha */}
    <div className='text-lg text-gray-500 mb-2'>Ficha Eje</div>

    {/* Div general */}
    <div className="bp-2:grid bp-2:gap-1 bp-2:grid-cols-2 bp-3:grid-cols-3 bp-4:grid-cols-4 bp-5:grid-cols-5 bp-6:grid-cols-6 bp-7:grid-cols-7 bp-8:grid-cols-8">
      
      {/* Div # 1 - Imagen + estado ocupa 2 cols */}
      <div className="flex justify-around align-middle col-span-2 rounded-md py-1 border border-slate-500 h-[12rem]">
          <Image src = {'/imagenes/ejes/eje.png'} alt = 'imagen eje EAVM' height = {250} width = {340} className="rounded-lg h-auto"/>
      </div>
      
      {/* Div # 2 - Código y Versión y Descripción*/}
      <div className="rounded-md px-4 py-3 border border-slate-500 h-[12rem]">
        <div className="rounded-md pt-2 px-1 h-12  text-lg font-extralight overflow-hidden text-center bg-slate-800 ">{eje.codigo}</div>
        <div className='flex justify-between'>
          <div className="text-xs text-slate-300 mt-2">Versión:</div>
          <Link className= "mt-2" 
                href = {`/Documentacion/Fichas_Tecnicas?material=Ejes_EAVM&id=${eje.id}&tipo=${eje.tipo_EAVM.codigo}&id_tipo=${eje.tipo_EAVM.id}&version=${1000}`}> 
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400"/>
          </Link>
        </div>
        <Link className= "w-full h-10 flex justify-between text-lg font-extralight text-slate-400" 
              href = {`/Documentacion/Fichas_Tecnicas?material=Ejes_EAVM&id=${eje.id}&tipo=${eje.tipo_EAVM.codigo}&id_tipo=${eje.tipo_EAVM.id}&version=${1000}`}> 
            <div className="overflow-hidden h-8 text-md font-light text-slate-400">{eje.tipo_EAVM.codigo}</div>
        </Link>
        <div className='flex justify-between'>
          <div className="text-xs text-slate-300 mt-1">Vehículo:</div>
          <Link className= "mt-1" 
                href = {`/Vehiculos/${eje.vehiculo.id}`}> 
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400"/>
          </Link>
        </div>
          <Link className= "w-full h-10 flex justify-between text-lg font-extralight text-slate-400" 
                href = {`/Vehiculos/${eje.vehiculo.id}`}> 
            <div className="overflow-hidden h-8 text-md font-light text-slate-400">{eje.vehiculo.num_uic}</div>
          </Link>
        
          
          
      </div>

      {/* Div # 3 - Owner/Keeper Fabricante/EEM*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[12rem]">
          <div className="text-xs text-slate-300">Owner / Keeper:</div>
          <div className="rounded-md mt-2 p-1 h-16 text-lg font-light  text-slate-400">{eje.owner} / {eje.keeper}</div>
          <div className="text-xs text-slate-300">Fabricante / EEM:</div>
          <div className="mt-2 p-1 h-16 text-lg font-light  text-slate-400">{eje.fabricante} / {eje.EEM}</div>
      </div>

    {/* Div # 4 - Datos servicio*/}
    <div className="rounded-md px-4 py-2 border border-slate-500 h-[12rem]">
        <div className="text-slate-300">Servicio:</div>
        <div className = 'flex justify-around mt-2 p-0.5 rounded-full border border-slate-500'>
          {eje.en_servicio?
              (<BoltIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<BoltSlashIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        </div>
        <div className="mt-3 text-xs text-slate-300">Fabricado:</div>
        <div className="py-1 h-10 overflow-hidden text-md font-light  text-slate-400 ">{eje.fecha_fab}</div>

        <div className="text-xs text-slate-300">Observaciones:</div>
        <div className="py-1 h-6 overflow-hidden text-sm font-light  text-slate-400">{eje.observaciones_servicio}</div> 
    </div>

    {/* Div # 5 - datos Circulación*/}
    <div className="rounded-md px-4 py-2 border border-slate-500 h-[12rem]">
        <div className="text-slate-300">Circulación:</div>
        <div className = 'flex justify-evenly mt-2 p-0.5 rounded-full border border-slate-500'>
        {eje.en_circulacion?
              (<PlayIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<PauseIcon className="w-6 h-6 mx-auto text-red-500"/>)}
        {eje.alarma_aceleraciones?
          (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
        : (<BellAlertIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
        {eje.alarma_temp?
          (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
        : (<BellAlertIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
        </div>
        <div className="mt-3 text-xs text-slate-300">KM realizados:</div>
        <div className="py-1 h-10 text-lg font-light  text-slate-400 overflow-hidden">{Math.round(eje.km_totales).toLocaleString('fr')} km</div>
        <div className='text-xs  text-slate-300'>Temp. ruedas:</div>
        <div className="mt-1 flex justify-between">
          <span 
            className={clsx('text-md font-light',
              {
                'text-blue-600': (eje.tempa<=(-20)),
                'text-blue-500': (eje.tempa>(-20)&&eje.tempa<=(-10)),
                'text-blue-400': (eje.tempa>(-10)&&eje.tempa<=(-0)),
                'text-teal-200': (eje.tempa>(0)&&eje.tempa<=(10)),
                'text-emerald-200': (eje.tempa>(10)&&eje.tempa<=(20)),
                'text-lime-300': (eje.tempa>(20)&&eje.tempa<=(30)),
                'text-lime-400': (eje.tempa>(30)&&eje.tempa<=(40)),
                'text-amber-300': (eje.tempa>(40)&&eje.tempa<=(50)),
                'text-orange-300': (eje.tempa>(50)&&eje.tempa<=(60)),
                'text-orange-400': (eje.tempa>(60)&&eje.tempa<=(70)),
                'text-red-500': (eje.tempa>(70)),
              },
            )}>
             A:{eje.tempa.toFixed(1)}º
            </span>
          <span className={clsx('text-md font-light',
              {
                'text-blue-600': (eje.tempb<=(-20)),
                'text-blue-500': (eje.tempb>(-20)&&eje.tempb<=(-10)),
                'text-blue-400': (eje.tempb>(-10)&&eje.tempb<=(-0)),
                'text-teal-200': (eje.tempb>(0)&&eje.tempb<=(10)),
                'text-emerald-200': (eje.tempb>(10)&&eje.tempb<=(20)),
                'text-lime-300': (eje.tempb>(20)&&eje.tempb<=(30)),
                'text-lime-400': (eje.tempb>(30)&&eje.tempb<=(40)),
                'text-amber-300': (eje.tempb>(40)&&eje.tempb<=(50)),
                'text-orange-300': (eje.tempb>(50)&&eje.tempb<=(60)),
                'text-orange-400': (eje.tempb>(60)&&eje.tempb<=(70)),
                'text-red-500': (eje.tempb>(70)),
              },
            )}>
            B:{eje.tempb.toFixed(1)}º
            </span>
        </div>
    </div>

    {/* Div # 6 - cambios*/}
    <div className="rounded-md px-4 border border-slate-500 h-[12rem]">
      <div className="mt-2 text-slate-300">Cambios:</div>
      <div className = 'flex justify-evenly mt-2 p-0.5 rounded-full border border-slate-500'>
        {eje.alarma_cambio?
          (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
        : (<BellAlertIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
      </div>
      <div className="mt-4 text-xs text-slate-300">Cambios realizados:</div>
      <div className="py-1 h-10 overflow-hidden text-lg font-light  text-slate-400 ">{eje.num_cambios}</div> 

    </div>
    
    {/* Div # 7 - datos Mantenimiento*/}
    <div className="rounded-md px-4 border border-slate-500 h-[12rem]">
      <div className = 'flex justify-between'>
        <div className="mt-2 text-slate-300">Mto.: </div>
        <Link className="mt-2 flex justify-between text-lg font-extralight text-slate-400" href = '/Ejes_EAVM'> 
          <ArrowTopRightOnSquareIcon className="w-6 h-5"/>
        </Link>
      </div>
      <div className = 'flex justify-evenly mt-2 p-0.5 rounded-full border border-slate-500'>
        {eje.en_mantenimiento?
          (<WrenchIcon className="w-6 h-6 mx-auto text-green-500"/>)
        : (<WrenchIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
        {eje.alarma_mantenimiento?
          (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
        : (<BellAlertIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
      </div>
      <div className="mt-3 text-xs text-slate-300">Último Mto:</div>
      <div className="py-1 h-10 overflow-hidden text-md font-light  text-slate-400 ">{eje.fecha_ultimo_mantenimiento}</div> 
      <div className="text-xs text-slate-300">Próximo Mto:</div>
      <div className="py-1 h-10 overflow-hidden text-md font-light  text-red-700">{eje.fecha_proximo_mantenimiento}</div> 
    </div>
  
  </div>
  </>
  )
}
