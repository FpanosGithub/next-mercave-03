import Tabs from "@/components/Tabs";
import BreadNav from "@/components/BreadNav";
import { BellAlertIcon } from '@heroicons/react/24/solid'

export default function Loading() {
    const segmentos = {
        previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
        activo:{nombre:'EAVM'}
      }

    const tabs = [
        { name: 'Datos', href: '', current: false, disabled: false},
        { name: 'Circulaciones', href: '', current: true, disabled: false},
        { name: 'Cambios', href: '', current: false, disabled: false},
        { name: 'Mantenimiento', href: '', current: false, disabled: true},
        { name: 'Ensayos Banco', href: '', current: false, disabled: false }
    ]

    return (
        <>
            <div className="h-full bg-gray-100">
                <div className="pb-2 shadow-sm bg-white">
                    <BreadNav segmentos = {segmentos}/>
                    <p className="ml-4 my-3 text-2xl font-semibold">Eje Ancho Variable</p>
                </div>
                <Tabs tabs={tabs} />
                <div className="rounded-lg shadow mt-4 mb-2 mx-1 sm:mx-4 p-2 bg-white h-[21rem]">
                    <div className="animate-pulse flex items-center h-[20rem] sm:flex-auto">
                        <img className="mx-auto animate-bounce" width="18" alt="Google Maps pin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/16px-Google_Maps_pin.svg.png" />
                    </div>
                </div>
                <div className='w-full px-1 mb-2 sm:px-4'>
                    <div className="w-full px-1 py-2 sm:px-2 rounded-xl bg-white border shadow-md">
                        <table className="min-w-full">
                            <thead className='bg-gray-100'>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
                                INICIO</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
                                HORA INIC.</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                                FIN</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 lg:table-cell">
                                HORA FIN</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-center text-sm font-semibold text-gray-500 sm:table-cell">
                                X</th>
                                <th scope="col" className="px-2 py-3.5 text-center text-sm font-semibold text-gray-500">
                                ALARMA</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            <tr className="animate-pulse"> 
                            <td className="py-4 pl-4 pr-1 sm:pr-3 text-gray-700 truncate lg:w-auto lg:max-w-none">
                                <dl className="font-normal lg:hidden">
                                <dt className="sr-only">HORA INICIAL</dt>
                                    <dd className="mt-1 truncate text-gray-400"></dd>
                                </dl>
                                <div className="h-1 bg-gray-500 rounded-full mb-2.5 w-16"></div>
                            </td>
                            <td className="hidden px-3 py-4 text-gray-700 lg:table-cell"><div className="h-1 bg-gray-500 rounded-full mb-2.5 w-16"></div></td>
                            
                            <td className="py-4 pl-4 pr-3 text-gray-700 truncate lg:w-auto lg:max-w-none">
                                <dl className="font-normal lg:hidden">
                                <dt className="sr-only">HORA FINAL</dt>
                                    <dd className="mt-1 truncate text-gray-400"></dd>
                                </dl>
                                <div className="h-1 bg-gray-500 rounded-full mb-2.5 w-16"></div>
                            </td>
                            <td className="hidden px-3 py-4 text-gray-700 lg:table-cell"><div className="h-1 bg-gray-500 rounded-full mb-2.5 w-16"></div></td>
                            
                            <td className="hidden py-4 pl-1 sm:pl-3 text-sm sm:table-cell">
                                <div className="h-1 bg-gray-500 rounded-full mb-2.5 mx-auto w-5"></div>
                            </td>
                            <td className="py-4 pl-2 pr-2 text-sm sm:pr-0">
                                <BellAlertIcon className="w-6 h-6 mx-auto my-1 text-slate-400"/>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>            
                </div>
            </div>
        </>
    )
}