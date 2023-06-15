import BarraNavegacion from "./_componentes/BarraNavegacion";
import tria from '@/public/logos/tria.png'
import Image from "next/image";

export default function Loading() {

  return (
    <>
      <div className='h-full bg-gray-100'>
        <div className="pb-2 bg-white shadow-sm">
          <BarraNavegacion />
          <p className="ml-4 mt-4 text-2xl font-semibold">Ficha Técnica</p>
        </div>
        <div className="">
          <div className="flex gap-2 mx-2 flex-wrap">
            <div className="bg-gray-700 text-white rounded-md shadow-sm flex-1 flex justify-between flex-wrap">
              <div className="flex flex-col justify-center">
                <div className="w-[180px] h-[80px] py-2 my-4 mx-4 rounded-lg border-2 bg-white">
                  <Image src={tria} width = 'auto' height={60} alt='logo tria' priority/>
                </div>
              </div>
              <div className="min-w-[340px] flex-1 flex justify-between items-center flex-wrap">
                <div className="text-3xl font-light max-w-[500px] mx-4 md:mx-8 my-2">
                  <div className='animate-pulse rounded-full h-2 bg-white w-80 mb-5'></div>
                </div>
                <div className= "flex justify-center border shadow p-2 rounded-md bg-gray-800 hover:cursor-pointer mx-4 md:mx-8 my-2">
                  <p className="text-slate-200"> Expediente AESF</p>
                </div>
              </div>
            </div>
            <div className="p-1 sm:max-w-[200px] bg-gray-700 rounded-md text-white flex-1 shadow-sm">
              <div className="m-0.5 p-1 flex justify-between gap-2">
                <span className="text-slate-300">Documento: </span>
                <span><div className='animate-pulse rounded-full bg-white h-1 w-2 mt-2'></div></span>
              </div>
              <div className="m-0.5 p-1 flex">
                <div className="flex-1 flex justify-between border-r border-slate-300">
                  <span className="text-slate-300">Versión:</span>
                </div>
              </div>
              <div className="m-0.5 p-1 flex justify-between gap-2">
                <span className="text-slate-300">Fecha: </span>
                <span><div className='animate-pulse rounded-full bg-white h-1 w-14 mt-3'></div></span>
              </div>
            </div>
          </div>
          <div className=" mx-2 mt-2 flex flex-wrap border border-slate-600 rounded-md">
            <div className="my-1 flex p-3 space-x-6 ml-1 border-r">
              <div className="text-slate-500">Elaborado: </div>
              <div className="">
                <div className='animate-pulse rounded-full bg-black h-2 w-20 mb-2'></div>
                <div className='animate-pulse rounded-full bg-gray-500 h-2 w-20 mb-2'></div>
              </div>
              <div className="animate-pulse w-12 h-12 m-l-8 bg-gray-300 rounded-full">
                <svg className="w-7 h-7 mx-auto mt-2 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div>
            <div className="my-1 flex p-3 space-x-6 border-r">
              <div className="text-slate-500">Supervisado: </div>
              <div className="">
                <div className='animate-pulse rounded-full bg-black h-2 w-20 mb-2'></div>
                <div className='animate-pulse rounded-full bg-gray-500 h-2 w-20 mb-2'></div>
              </div>
              <div className="animate-pulse w-12 h-12 m-l-8 bg-gray-300 rounded-full">
                <svg className="w-7 h-7 mx-auto mt-2 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div> 
          </div>
          <div className="mx-2 my-2 p-4 border  border-slate-600 rounded-md">
            <div className="animate-pulse flex items-center bg-gray-300 mb-4 rounded-t h-[580px]">
              <svg className="w-12 h-12 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
          </div>
          <div className="animate-pulse mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              <div className='rounded-full bg-gray-500 h-2 w-52 mb-2'></div>
            </div>
          </div>

          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="p-2 w-full border-b border-slate-300">
              <div className='animate-pulse rounded-full bg-gray-500 h-2 w-52 mb-2'></div>
              <div className="text-lg font-extralight flex px-2 pt-2">
                <div className="border-l border-l-fuchsia-500 px-2">Sistemas</div>
                <div className="border-l border-l-blue-500 px-2">Conjuntos</div>
                <div className="border-l border-l-emerald-500 pl-2">Elementos</div>
              </div>
            </div>
            <div className="p-8 text-slate-500">
              <div className='py-2 border-l-2 border-l-fuchsia-500 pl-2'>
                <div className="flex space-x-5"><div className='animate-pulse rounded-full bg-gray-500 h-2 w-1/2 mb-2'></div></div>
              </div>
            </div>
          </div>

          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              <div className='animate-pulse rounded-full bg-gray-500 h-2 w-52 mb-2'></div>
            </div>
            <div className="p-2">
              <div className='animate-pulse rounded-full bg-gray-500 h-2 w-1/2 mb-3'></div>
              <div className="animate-pulse flex items-center bg-gray-300 mb-4 rounded-t h-[580px]">
                <svg className="w-12 h-12 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div>
          </div>
          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              Mantenimiento
            </div>
            <div className="p-4">
              <div className='animate-pulse rounded-full bg-gray-500 h-2 w-1/2 mb-2'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}