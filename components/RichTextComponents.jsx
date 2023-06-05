import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({value}) => {
    return (
      <div className="relative my-3">
        <Image
          className = 'object-contain h-auto mx-auto'
          width={1200}
          height={800}
          src = {urlFor(value).url()}
          alt= "" 
          />
      </div>
    )}}, 
  list: {
    bullet: ({children}) => (<ul className="ml-10 my-4 list-disc font-light">{children}</ul>),
    number: ({children}) => (<ol className="ml-10 my-4 list-decimal font-light">{children}</ol>),
  },
  block: {
    h1: ({children}) => (<h1 className="text-5xl ml-2 py-10">{children}</h1>),
    h2: ({children}) => (<h2 className="text-4xl ml-2 py-10">{children}</h2>),
    h3: ({children}) => (<h3 className="text-3xl ml-2 py-4">{children}</h3>),
    h4: ({children}) => (<h4 className="text-2xl ml-2 py-4">{children}</h4>),
    h5: ({children}) => (<h5 className="text-xl ml-2 py-4">{children}</h5>),
    normal: ({children}) => (<p className="text-md font-light ml-2 mb-2">{children}</p>),
    h6: ({children}) => (<p className="-mt-2 pb-5 text-center font-thin">{children}</p>),
    blockquote: ({children}) => (<blockquote className="border-l-4 border-l-red-500 pl-5 py-5 my-5 font-light">{children}</blockquote>),
  },
  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startswith("/")
        ? "noreferrer noopener" 
        : undefined;
      return (
        <Link
          href={value.href} 
          rel={rel}
          className="underline decoration-red-600 hover:decoration-black">
              {children}
        </Link>
      )
    }
  }
}