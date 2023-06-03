'use client'


import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export default function NavegadorVersiones({material, id, tipo, id_tipo, sistema, id_sistema, conjunto, id_conjunto, componente, id_componente, version}) {

  const version_superior = parseInt(version) + 1
  const version_inferior = parseInt(version) -1
  
  const url_basica = '/Documentacion/Fichas_Tecnicas?'
  let url_material = ''
  if (material){url_material=`material=${material}&id=${id}`}
  let url_tipo = ''
  if (tipo){url_tipo=`&tipo=${tipo}&id_tipo=${id_tipo}`}
  let url_sistema = ''
  if (sistema){url_sistema=`&sistema=${sistema}&id_sistema=${id_sistema}`}
  let url_conjunto = ''
  if (conjunto){url_conjunto=`&conjunto=${conjunto}&id_conjunto=${id_conjunto}`}
  let url_componente = ''
  if (componente){url_componente=`&componente=${componente}&id_componente=${id_componente}`}

  return (
    <div className="flex text-center">
      <Link 
        href = {`${url_basica}${url_material}${url_tipo}${url_sistema}${url_conjunto}${url_componente}&version=${version_inferior}`}>
        <ChevronLeftIcon className = 'h-5 w-5 mt-0.5 text-slate-500'/>
      </Link>
      <Link 
        href = {`${url_basica}${url_material}${url_tipo}${url_sistema}${url_conjunto}${url_componente}&version=${version_superior}`}>
        <ChevronRightIcon className = 'h-5 w-5 mt-0.5 text-slate-500'/>
      </Link> 
    </div>
  )
}
