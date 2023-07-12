'use client'
import clsx from 'clsx'
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import NavegadorConjunto from './NavegadorConjunto';

export default function NavegadorSistema({sistema, material, id, tipo, id_tipo, version}) {
  const [open, setOpen] = useState (false)

  return (
  <div className='flex flex-col w-[351px] md:w-[570px] lg:w-[1142px] lg:justify-end items-center gap-1 lg:gap-3'>
  {/* LINEA DE SISTEMA */}
    <div className="flex py-3 md:py-4 px-4 md:px-6 items-center md:items-start gap-6 grow bg-blue-100 rounded-lg">
      <span className='mx-4'
            onClick = {()=>setOpen(!open)}>
        {open? (<ChevronDownIcon className="w-6 text-gray-400"/>):(<ChevronRightIcon className="w-6 text-gray-400"/>)}
      </span>
      <div className='flex md:w-[400px] lg:w-[1010px] items-start grow lg:gap-6'>
        <Link  key = {sistema.num_doc} 
                className="text-sm lg:text-base text-blue-600"
                href = {`/Documentacion/Fichas_Tecnicas?material=${material}&id=${id}&tipo=${tipo}&id_tipo=${id_tipo}&sistema=${sistema.codigo}&id_sistema=${sistema.num_doc}&version=${1000}`}>
          {sistema.num_doc} - {sistema.codigo} - {sistema.descripcion}
        </Link>
        <div>
          <span className={clsx("rounded-lg px-4 py-1 text-slate-300", {
            'bg-red-600':sistema.ccs, 
            'bg-slate-600':!sistema.ccs})}>
          CCS
          </span>
        </div>
      </div>
    </div>
  {/* BLOQUE CONJUNTOS. - SI ABIERTO, SE MUESTRA LISTA DE CONJUNTOS DEL SISTEMA*/}
  <div className='flex flex-col gap-2'>
    {open && (sistema.conjuntos && (sistema.conjuntos.map((conjunto) => {
      return(
        conjunto?
          <NavegadorConjunto 
                sistema = {sistema}
                conjunto = {conjunto}
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
