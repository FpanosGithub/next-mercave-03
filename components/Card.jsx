import Link from "next/link";
import Image from "next/image";

export default function Card({enlace, titulo, descripcion, imagen}) {
return(

    <div className='border m-2 rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <Link href={`/${enlace}`}>
            <Image width={650} height={650} alt={titulo} src={imagen} className="object-cover rounded-t-xl" />
            <h1 className='text-xl font-bold p-4'>{titulo}</h1>
            <p className="text-slate-500 pl-4 pb-4 pr-4">{descripcion}</p>
        </Link>
    </div>
)
}