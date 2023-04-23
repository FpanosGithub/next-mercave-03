import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"

export default function SanityNavbar(props:any) {
  return (
    <>
    <div className="flex space-x-4 bg-black">
      <Link href={'/'} className="mx-2 my-auto p-2 text-base font-semibold hover:text-gray-200 text-gray-400 border-r border-gray-300 flex gap-4">
        <HomeIcon className="h-6 w-6"/>
        <p className="mr-4">Home</p>
      </Link>
      {props.renderDefault(props)}
    </div>
    </>
  )
}
