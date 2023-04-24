'use client'
import Link from 'next/link';
import Image from 'next/image';
import {Session} from 'next-auth'
import { Bars3BottomLeftIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import adif from  '@/public/logos/adif.png'
import { signIn,signOut } from 'next-auth/react';

export default function Navbar({admin, open, setOpen, session}:{admin?: Boolean, open: Boolean, setOpen:Function, session:Session}) {
  
  return (
    <div className='border border-b border-gray-300 flex justify-between items-center bg-white'>
      <div className='flex'> 
        {!admin && <Bars3BottomLeftIcon 
          className='h-8 ml-4 mt-1 hover:cursor-pointer md:hidden'
          onClick={()=>setOpen(!open)}/>}
        <Link href="/" className="mx-6">
            <Image src={adif} width = {80} height={40} alt='logo adif' className='w-auto' priority/>
        </Link>
      </div>
      {session?.user? 
        <div className='flex mx-8 items-center'>
          <Image src={session?.user?.image as string} width = {30} height={30} alt='logo adif' className='h-10 w-10 rounded-full mx-4' priority/>
          <p className='hidden md:inline'>{session?.user?.name}</p>
          <ChevronDownIcon onClick={() => signOut()} className='ml-2 h-4 hover:cursor-pointer'/>
        </div>
      :
      <div className='flex mx-8 items-center'>
        <button  className = 'rounded bg-emerald-700 text-white shadow px-4 py-1' onClick={()=>signIn()} >Entrar</button>
      </div>
      }
    </div>
  )
}
