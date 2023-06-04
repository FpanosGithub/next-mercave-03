'use client'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowUturnLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export default function BarraNavegacion() {
  const searchParams = useSearchParams();
  
  let retorno = '/Documentacion'
  if (searchParams.has('material')) {retorno = `/${searchParams.get('material')}/${searchParams.get('id')}`}

  return (
    <div className='flex py-4 pl-4'>
      <Link href={retorno} className='font-light text-lg flex'>
        <ArrowUturnLeftIcon className = 'h-6 w-6 mr-4'/>
      </Link>

      {searchParams.has('tipo')?
        ( 
        <>
        <Link 
          href={`/Documentacion/Fichas_Tecnicas?material=${searchParams.get('material')}&id=${searchParams.get('id')}&tipo=${searchParams.get('tipo')}&id_tipo=${searchParams.get('id_tipo')}&version=${1000}`} 
          className='font-light text-lg ml-5'>
            {searchParams.get('tipo')}
        </Link>
        <ChevronRightIcon className = 'h-9 w-6 -mt-1'/>
        </>
        )
        :''}
      
      {searchParams.has('sistema')?
        ( 
        <>
        <Link 
          href={`/Documentacion/Fichas_Tecnicas?material=${searchParams.get('material')}&id=${searchParams.get('id')}&tipo=${searchParams.get('tipo')}&id_tipo=${searchParams.get('id_tipo')}&sistema=${searchParams.get('sistema')}&id_sistema=${searchParams.get('id_sistema')}&version=${1000}`} 
          className='font-light text-lg text-fuchsia-500'>
            {searchParams.get('sistema')}
        </Link>
        <ChevronRightIcon className = 'h-9 w-6 -mt-1'/>
        </>
        )
        :''}
      
      {searchParams.has('conjunto')?
        ( 
        <>
        <Link 
          href={`/Documentacion/Fichas_Tecnicas?material=${searchParams.get('material')}&id=${searchParams.get('id')}&tipo=${searchParams.get('tipo')}&id_tipo=${searchParams.get('id_tipo')}&sistema=${searchParams.get('sistema')}&id_sistema=${searchParams.get('id_sistema')}&conjunto=${searchParams.get('conjunto')}&id_conjunto=${searchParams.get('id_conjunto')}&version=${1000}`} 
          className='font-light text-lg text-blue-500'>
            {searchParams.get('conjunto')}
        </Link>
        <ChevronRightIcon className = 'h-9 w-6 -mt-1'/>
        </>
        )
        :''}
      {searchParams.has('componente')?
        ( 
        <>
        <Link 
          href={`/Documentacion/Fichas_Tecnicas?material=${searchParams.get('material')}&id=${searchParams.get('id')}&tipo=${searchParams.get('tipo')}&id_tipo=${searchParams.get('id_tipo')}&sistema=${searchParams.get('sistema')}&id_sistema=${searchParams.get('id_sistema')}&conjunto=${searchParams.get('conjunto')}&id_conjunto=${searchParams.get('id_conjunto')}&componente=${searchParams.get('componente')}&id_componente=${searchParams.get('id_componente')}&version=${1000}`} 
          className='font-light text-lg text-emerald-500'>
            {searchParams.get('componente')}
        </Link>
        <ChevronRightIcon className = 'h-9 w-6 -mt-1'/>
        </>
        )
        :''}

    </div>
  )
}
