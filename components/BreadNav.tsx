import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {Segmentos} from '@/types/navegacion'
import Link from 'next/link'

export default function BreadNav({segmentos}:{segmentos:Segmentos}) {
  return (
    <div className='flex flex-wrap items-center gap-4 mx-3 py-3 text-gray-700 text-sm font-medium'>
      <Link href={'/'} className='flex items-center space-x-5'>
        <HomeIcon className='h-6'/>
        <p className=''> Home </p>
      </Link>
      <ChevronRightIcon className='h-6'/>
      {segmentos.previos.map((segmento)=>(
            <>
            <Link href={segmento.link as string} key = {segmento.nombre} className='flex justify-center items-center'>
              <p className='text-gray-700'> {segmento.nombre} </p>
            </Link>
            <ChevronRightIcon className='h-6'/>
            </>
        ))
      }
        <p className='text-gray-500'> {segmentos.activo.nombre} </p>
    </div>
  )
}