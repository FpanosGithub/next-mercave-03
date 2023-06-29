import Tabs from '@/components/Tabs';
import BreadNav from "@/components/BreadNav";
import { BellAlertIcon } from '@heroicons/react/24/solid';

export default function Loading() {
    const segmentos = {
        previos:[{nombre:'EAVMs', link: '/EAVMs'}], 
        activo:{nombre:'EAVM'}
      }
      
    const tabs = [
        {name:'Datos',href:'',current:false, disabled: false}, 
        {name:'Circulaciones',href:'',current:false, disabled: false}, 
        {name:'Mantenimiento',href:'',current:false, disabled: true},
        {name:'Ensayos Banco',href:'',current:true, disabled: false}
    ]

    return (
        <div className='h-full bg-gray-100'>
            {/* Cabecera */}
            <div className="pb-2 shadow-sm bg-white">
                <BreadNav segmentos = {segmentos}/>
                <p className="ml-4 my-3 text-2xl font-semibold">Eje Ancho Variable</p>
            </div>
            {/* Panel Ejes */}
            <Tabs tabs = {tabs}/>
            <div className='w-full flex flex-col p-4 gap-3'>
                <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-2 p-2'>
                    <div className='flex flex-col'>
                        <span className='font-semibold py-1'>Descerrojamiento</span>
                        <div className='flex justify-between gap-3'>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Max</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold py-1'>Cambio</span>
                        <div className='flex justify-between gap-3'>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Max</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold py-1'>Encerrojamiento</span>
                        <div className='flex justify-between gap-3'>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. min</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-white rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap gap-1'>
                    <div className='pb-8 flex-1'>
                        <div className='w-full rounded-lg bg-white border shadow-md overflow-y-auto'>
                            <table className="min-w-full">
                                <thead className=''>
                                <tr className=''>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500">
                                    ID</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                                    FECHA</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-500 xl:table-cell">
                                    V</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 xl:table-cell">
                                    FV</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-500 md:table-cell">
                                    SENTIDO</th>
                                    <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 bg-opacity-75 backdrop-blur backdrop-filter  px-3 py-3.5 text-right text-sm font-semibold text-gray-500">
                                    ALARMA</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                <tr className='animate pulse'>
                                    <td className="py-4 pl-4 pr-3 text-gray-700"></td>
                                    <td className="px-3 py-4 text-gray-700"></td>
                                    <td className="hidden px-3 py-4 text-gray-700 xl:table-cell"></td>
                                    <td className="hidden px-3 py-4 text-gray-700 text-right xl:table-cell"></td>
                                    <td className="hidden px-3 py-4 text-gray-700 text-right md:table-cell"></td>
                                    <td className="mt-4 mr-8 flex justify-end">
                                        <BellAlertIcon className="w-6 h-6 my-1 text-gray-500"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}