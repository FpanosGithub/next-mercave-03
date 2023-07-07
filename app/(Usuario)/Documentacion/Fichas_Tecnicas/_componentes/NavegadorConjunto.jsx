'use client'
import clsx from 'clsx'
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import NavegadorComponente from './NavegadorComponente';

export default function NavegadorConjunto({conjunto, sistema, material, id, tipo, id_tipo, version}) {
  const [open, setOpen] = useState (false)

  return (
  <div className='flex flex-col w-[323px] md:w-[490px] lg:w-[1106px] gap-3'>
    {/* LINEA DE CONJUNTO */}
    <div className="flex py-3 lg:py-4 px-4 lg:px-6 items-center lg:items-start gap-6 grow bg-orange-100 rounded-lg">
      <span className='mx-4'
          onClick = {()=>setOpen(!open)}>
          {open? (<ChevronDownIcon className="w-6 text-gray-400"/>):(<ChevronRightIcon className="w-6 text-gray-400"/>)}
      </span>
      <div className='flex items-start lg:items-center gap-2 grow'>
        <Link   key = {conjunto.num_doc} 
                className="text-sm lg:text-base text-orange-600"
                href = {`/Documentacion/Fichas_Tecnicas?material=${material}&id=${id}&tipo=${tipo}&id_tipo=${id_tipo}&sistema=${sistema.codigo}&id_sistema=${sistema.num_doc}&conjunto=${conjunto.codigo}&id_conjunto=${conjunto.num_doc}&version=${1000}`}>
          {conjunto.num_doc} - {conjunto.codigo} - {conjunto.descripcion}
        </Link>
        <div>
          <span className={clsx("rounded-lg px-4 py-1 text-slate-300", {
            'bg-red-600':conjunto.ccs, 
            'bg-slate-600':!conjunto.ccs})}>
          CCS
          </span>
        </div>
      </div>
    </div>
    {/* BLOQUE COMPONENTES. - SI ABIERTO, SE MUESTRA LISTA DE COMPONENTES DEL SISTEMA*/}
    <div className='flex flex-col gap-2'>
      {open && (conjunto.componentes && (conjunto.componentes.map((componente) => {
        return(
          componente?
            <NavegadorComponente 
              conjunto = {conjunto}
              componente = {componente}
              sistema = {sistema}
              material = {material}
              id = {id}
              tipo = {tipo}
              id_tipo = {id_tipo}
              version = {version}/>   
          :(''))})))}
    </div>
  </div>
)
}
