'use client'
import i01d from '@/public/imagenes/clima/01d.png'
import i01n from '@/public/imagenes/clima/01n.png'
import i02d from '@/public/imagenes/clima/02d.png'
import i02n from '@/public/imagenes/clima/02n.png'
import i03d from '@/public/imagenes/clima/03d.png'
import i03n from '@/public/imagenes/clima/03n.png'
import i04d from '@/public/imagenes/clima/04d.png'
import i04n from '@/public/imagenes/clima/04n.png'
import i09d from '@/public/imagenes/clima/09d.png'
import i09n from '@/public/imagenes/clima/09n.png'
import i10d from '@/public/imagenes/clima/10d.png'
import i10n from '@/public/imagenes/clima/10n.png'
import i11d from '@/public/imagenes/clima/11d.png'
import i11n from '@/public/imagenes/clima/11n.png'
import i13d from '@/public/imagenes/clima/13d.png'
import i13n from '@/public/imagenes/clima/13n.png'
import i50d from '@/public/imagenes/clima/50d.png'
import i50n from '@/public/imagenes/clima/50n.png'
import nubes from '@/public/imagenes/clima/nublado.png'
import Image from 'next/image'

export default function IconoTiempo({icono}:{icono:string}) {
  if(!icono){return(<></>)}
  const width = 80
  const height = 60
  const classname = 'h-10 w-auto'
  let src = null
  switch(icono) {
    case '01d': src = i01d; break;
    case '01n': src = i01n; break;
    case '02d': src = i02d; break;
    case '02n': src = i02n; break;
    case '03d': src = i03d; break;
    case '03n': src = i03n; break;
    case '04d': src = i04d; break;
    case '04n': src = i04n; break;
    case '09d': src = i09d; break;
    case '09n': src = i09n; break;
    case '10d': src = i10d; break;
    case '10n': src = i10n; break;
    case '11d': src = i11d; break;
    case '11n': src = i11n; break;
    case '13d': src = i13d; break;
    case '13n': src = i13n; break;
    case '50d': src = i50d; break;
    case '50n': src = i50n; break;
    default: src = nubes;
  }

  return (
  <Image src={src} width = {width} height={height} alt='i' className={classname}/>
  )
}
