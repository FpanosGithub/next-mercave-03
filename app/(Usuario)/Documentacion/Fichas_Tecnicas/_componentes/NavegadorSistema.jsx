'use client'
import clsx from 'clsx'
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import NavegadorConjunto from './NavegadorConjunto';

export default function NavegadorSistema({sistema, material, id, tipo, id_tipo, version}) {
  const [open, setOpen] = useState (false)

  return (
  <div className='py-2 border-l-2 border-l-fuchsia-500 pl-2'>
  {/* LINEA DE SISTEMA */}
  <div className="flex space-x-5">
    <Link   key = {sistema.num_doc} 
            className="text-lg font-light"
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
    <span className='mx-4'
          onClick = {()=>setOpen(!open)}>
      {open? (<ChevronDownIcon className="w-6 text-gray-400"/>):(<ChevronRightIcon className="w-6 text-gray-400"/>)}
    </span>
  </div>
  {/* BLOQUE CONJUNTOS. - SI ABIERTO, SE MUESTRA LISTA DE CONJUNTOS DEL SISTEMA*/}
  <div className='pl-4'>
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
