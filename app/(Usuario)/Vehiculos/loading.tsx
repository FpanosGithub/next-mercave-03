import BreadNav from "@/components/BreadNav";

const segmentos = {
  previos:[], 
  activo:{nombre:'Vehículos', link: 'Vehiculos'}
}

export default function loading() {
  return (
    <div className='h-full w-full bg-gray-100'>
      {/* Cabecera */}
      <div className="pb-2 mb-3 shadow bg-white">
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-4 text-2xl font-semibold">Vehículos</p>
      </div>
      <div className="rounded-lg shadow m-4 p-2 bg-white grid gap-2 grid-rows-2 sm:flex sm:h-[21rem]">
        <div className="animate-pulse flex items-center h-[20rem] sm:flex-auto">
          <img className="mx-auto animate-bounce" width="18" alt="Google Maps pin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/16px-Google_Maps_pin.svg.png" />
        </div>
        <div className='rounded-lg shadow h-[20rem] w-56 mx-auto animate-pulse'>
          <div>
            <div className="flex items-center bg-gray-300 mb-4 rounded-t h-[126px]">
              <svg className="w-12 h-12 mx-auto text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className='flex flex-col mx-auto w-32'>
              <div className="h-1.5 bg-gray-700 rounded-full mb-4"></div>
              <div className="h-1 bg-gray-500 rounded-full mb-2.5 w-12 mx-auto"></div>
              <div className="h-1 bg-gray-500 rounded-full mb-2.5 w-20 mx-auto"></div>
            </div>
          </div>
          <div>
            <div className="mx-auto mt-3 h-8 bg-gray-100 rounded-full w-40"></div>
          </div>
          <div className="border-t border-gray-200 mt-6">
            <div className="h-1 bg-gray-500 rounded-full mt-5 mx-auto w-32"></div>
          </div>
        </div>
      </div>
      <div className='w-full px-4 pb-8'>
        <div className='w-full rounded-xl bg-white border shadow-md h-[100px] overflow-y-auto'>
        <table className="min-w-full">
          <thead className=''>
            <tr>
              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
              VEHÍCULO</th>
              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
              DESCRIPCIÓN</th>
              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-500 sm:table-cell">
              SERVICIO</th>
              <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter px-3 py-3.5 text-center text-sm font-semibold text-gray-500">
              ACCIÓN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr className="animate-pulse">
              <td className="w-full max-w-0 py-4 pl-4 pr-3 text-gray-700 truncate sm:w-auto sm:max-w-none">
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only">DESCRIPCIÓN</dt>
                    <dd className="mt-1 truncate text-gray-400"></dd>
                </dl>
                <div className="h-1 bg-gray-500 rounded-full mb-2.5 w-32"></div>
              </td>
              <td className="hidden px-3 py-4 text-gray-700 lg:table-cell"><div className="h-1 bg-gray-500 rounded-full mb-2.5 w-32"></div></td>
              <td className="hidden w-28 mx-auto sm:flex justify-center gap-2 mt-4"><div className="h-1 bg-gray-500 rounded-full mb-2.5 w-32 ml-3"></div></td>
              <td className="py-4 pl-3 pr-4 text-sm sm:pr-0"><div className="h-1 bg-gray-500 rounded-full mb-2.5 w-24 mx-auto"></div></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
