import Tabs from "@/components/Tabs";

export default function Loading() {
  const tabs = [
    {name: 'Datos', href: '', current: true}, 
    {name: 'Circulaciones', href: '', current: false}, 
    {name: 'Mantenimiento', href: '', current: false}
  ]

  return (
    <>
    <Tabs tabs={tabs}/>
    <div className='w-full flex flex-col p-4 gap-3 sm:flex-row'>
      <div className='w-full flex flex-col gap-2'>
        <div className='rounded-lg shadow p-1 sm:hidden animate-pulse'>
          <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen Vehículo</div>
        </div>
        <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-4 p-5'>
          <div className=''>
            <div className='animate-pulse rounded-full h-2 bg-white w-32 mb-5'></div>
            <div className='animate-pulse rounded-full h-1 bg-gray-400 w-36'></div>
          </div>
        </div>
        <div className='rounded-lg shadow bg-white flex flex-col p-1 h-[70px] sm:hidden'>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-5'>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Matrícula</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium truncate'>Tipo UIC</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium truncate'>Serie UIC</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Owner</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Keeper</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>E.E.M.</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            <div className="flex justify-between w-40 my-2 mx-auto px-2 py-1 rounded-full bg-gray-100">
            </div>
            <div className='text-center text-sm text-gray-400 font-medium'>Circulación</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Km Realizados</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Velocidad</div>
          </div>
        </div>
        <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap gap-4 p-4'>
          <div className='px-4 flex-1'>
            <div className="flex justify-between my-2 w-40 mx-auto px-2 py-1 rounded-full bg-gray-100">
            </div>
            <div className='text-center text-sm text-gray-400 font-medium'>Mantenimiento</div>
          </div>
          <div className='border-r border-l border-gray-200 px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Último Mto</div>
          </div>
          <div className='px-4 flex-1'>
            <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
            <div className='text-center text-sm text-gray-400 font-medium'>Próximo Mto.</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 sm:w-[400px]'>
        <div className='hidden rounded-lg shadow bg-white sm:block'>
          <div className="animate-pulse flex items-center bg-gray-300 mb-4 rounded-t h-[179px]">
            <svg className="w-12 h-12 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
          </div>
          <div className='text-gray-500 text-sm font-medium mx-4 my-1'>Imagen Vehículo</div>
        </div>
        <div className='w-full rounded-lg shadow bg-white p-1 h-[195px]'>
          <div className='h-[155px] flex flex-col p-1 gap-1'>
          </div>
          <div className='text-gray-500 text-sm font-medium mx-4 mt-2 mb-1'>Ejes</div>
        </div>
        <div className='hidden rounded-lg shadow bg-white sm:flex sm:flex-col p-1 h-[70px]'>
          <div className='animate-pulse rounded-full bg-gray-500 h-1 w-52 mx-auto mt-5'></div>
        </div>
      </div>
    </div>
    </>
  );
}