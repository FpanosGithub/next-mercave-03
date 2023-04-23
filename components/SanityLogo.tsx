import Image from "next/image"
import tria from  '@/public/logos/tria.png'
export default function SanityLogo() {
  return (
    <Image src={tria} width = {100} height={20} alt='logo adif' className='h-8 w-auto mr-4' priority/>
  )
}
