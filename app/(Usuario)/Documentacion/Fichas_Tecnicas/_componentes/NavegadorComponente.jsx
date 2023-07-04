'use client'
import clsx from 'clsx'
import Link from "next/link"
import { useState } from 'react';

export default function NavegadorComponente({componente, conjunto, sistema, material, id, tipo, id_tipo, version}) {
  return (
  <div className="flex justify-end items-center gap-3">
    {/* LINEA DE COMPONENTE */}
    <div className='flex w-[1031px] py-4 px-6 items-start gap-6 bg-teal-100 rounded-lg'>
      <div className='flex items-center gap-2'>
        <Link key = {componente.num_doc} 
              className="text-teal-600"
              href = {`/Documentacion/Fichas_Tecnicas?material=${material}&id=${id}&tipo=${tipo}&id_tipo=${id_tipo}&sistema=${sistema.codigo}&id_sistema=${sistema.num_doc}&conjunto=${conjunto.codigo}&id_conjunto=${conjunto.num_doc}&componente=${componente.codigo}&id_componente=${componente.num_doc}&version=${1000}`}>
          {componente.num_doc} - {componente.codigo} - {componente.descripcion}
        </Link>
        <div>
          <span className={clsx("rounded-lg px-4 py-1 text-slate-300", {
            'bg-red-600':componente.ccs, 
            'bg-slate-600':!componente.ccs})}>
          CCS
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}
