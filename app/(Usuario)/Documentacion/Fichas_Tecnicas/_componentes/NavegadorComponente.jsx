'use client'
import clsx from 'clsx'
import Link from "next/link"
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function NavegadorComponente({componente, conjunto, sistema, material, id, tipo, id_tipo, version}) {
  const [open, setOpen] = useState (false)

  return (
  <>
  {/* LINEA DE COMPONENTE */}
  <div className="py-1 flex space-x-5 border-l-2 border-l-emerald-700 pl-2">
    <Link   key = {componente.num_doc} 
            className="text-lg font-light"
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
  </>
  )
}
