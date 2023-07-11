import Link from "next/link";
import Image from "next/image";

export default function Card({enlace, titulo, descripcion, imagen}) {
return(

    <div className='border bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-start max-w-[500px] h-[300px]'>
        <Link href={`/${enlace}`}>
            <Image width={370} height={160} alt={titulo} src={imagen} className="object-cover h-40 w-full" />
            <div className="p-5 self-stretch">
                <h1 className='font-bold pb-2'>{titulo}</h1>
                <p className="text-sm pb-2 line-clamp-4">{descripcion}</p>
            </div>
        </Link>
    </div>
)
}