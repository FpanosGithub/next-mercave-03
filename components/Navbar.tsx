'use client'
import Link from 'next/link';
import Image from 'next/image';
import { UserButton } from "@clerk/nextjs";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import adif from  '@/public/logos/adif.png'

export default function Navbar({admin, open, setOpen}:{admin?: Boolean, open: Boolean, setOpen:Function}) {
  return (
    <div className='border border-b border-gray-300 flex justify-between items-center bg-white px-4'>
      <div className='flex gap-2'> 
        {!admin && <Bars3BottomLeftIcon 
          className='h-8 mt-1 hover:cursor-pointer md:hidden'
          onClick={()=>setOpen(!open)}/>
        }
        <Link href="/" className="">
            <Image src={adif} width = {80} height={40} alt='logo adif' className='w-auto' priority/>
        </Link>
      </div>
      <UserButton 
        afterSignOutUrl="/" 
        appearance={{elements: {avatarBox: 'h-12 w-12'}}}/>
    </div>
  )
}
