import Tabs from '@/components/Tabs';
import BreadNav from '@/components/BreadNav'

export default function Loading() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'EAVMs', link: 'EAVMs'}
  }
  const tabs = [
    {name: 'Datos', href: '', current: true}, 
    {name: 'Circulaciones', href: '',current: false},
    {name: 'Cambios', href: '', current: false}, 
    {name: 'Mantenimiento', href: '', current: false},
    {name: 'Ensayos Banco', href: '', current: false}
  ]

  return (
    <>
      <div className="pb-2 shadow-sm bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-3 text-2xl font-semibold">Ejes de Ancho Variable de Mercancías</p>
      </div>
      <Tabs tabs = {tabs}/>
      <div className='w-full flex flex-col p-4 gap-3 sm:flex-row'>
        <div className='w-full flex flex-col gap-2'>
          <div className='rounded-lg shadow bg-white p-1 sm:hidden'>
            <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen EAVM</div>
          </div>
          <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-4 p-5'>
            <div>
              <div className='animate-pulse rounded-full h-2 bg-white w-32 mb-5'></div>
            </div>
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Versión</div>
            </div>
            <div className='border-l border-r border-gray-200 px-4 flex-1 flex flex-col'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium truncate'>Vehículo</div>
            </div>
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-14 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Owner</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-14 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Keeper</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-14 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Fabricante</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>  
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-14 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>EEM</div>
            </div>  
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse mx-auto w-24 rounded-full bg-gray-100 h-6'>
              </div>
              <div className='text-center text-sm text-gray-400 font-medium'>Servicio</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Fabricado</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Observaciones</div>
            </div> 
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse mx-auto w-40 rounded-full bg-gray-100 flex gap-2 justify-center h-6'>
              </div>
              <div className='text-center text-sm text-gray-400 font-medium'>Circulación</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Km realizados</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200 flex flex-col'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='mx-auto text-sm text-gray-400 font-medium'>Temp. ruedas</div>
            </div> 
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse mx-auto w-32 rounded-full bg-gray-100 flex gap-2 justify-center h-6'>
              </div>
              <div className='text-center text-sm text-gray-400 font-medium'>Mantenimiento</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Último Mto.</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-32 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Próximo Mto.</div>
            </div>
          </div>
          <div className='rounded-md shadow bg-white flex justify-between items-center flex-wrap p-5'>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse mx-auto w-24 rounded-full bg-gray-100 flex gap-2 justify-center h-6'>
              </div>
              <div className='text-center text-sm text-gray-400 font-medium'>Cambios</div>
            </div>
            <div className='px-4 flex-1 border-l border-r border-gray-200'>
              <div className='animate-pulse rounded-full bg-gray-500 h-1 w-2 mx-auto mb-2'></div>
              <div className='text-center text-sm text-gray-400 font-medium'>Cambios realizados</div>
            </div>
          </div>
        </div>
        {/* Lateral */}
        <div className='flex flex-col gap-2 sm:w-[400px]'>
          <div className='hidden rounded-lg shadow bg-white sm:block'>
            <div className="animate-pulse flex items-center bg-gray-300 mb-4 rounded-t h-[179px]">
              <svg className="w-12 h-12 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className='text-gray-500 text-sm font-medium mx-4 my-2'>Imagen EAVM</div>
          </div>
          <div className='animate-pulse rounded-lg shadow p-4 bg-white sm:flex sm:justify-center sm:flex-wrap sm:gap-4'>
            <div className='shadow rounded p-2 flex flex-col gap-1'>
              <span className='mx-auto text-sm text-gray-700'>Temperatura</span>
            </div>
            <div className='shadow rounded p-2 flex flex-col gap-1'>
              <span className='mx-auto text-sm text-gray-700'>Aceleraciones</span>
            </div>
            <div className='shadow rounded p-2 flex flex-col gap-1'>
              <span className='mx-auto text-sm text-gray-700'>Mantenimiento</span>
            </div>
            <div className='shadow rounded p-2 flex flex-col gap-1'>
              <span className='mx-auto text-sm'>Cambio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}