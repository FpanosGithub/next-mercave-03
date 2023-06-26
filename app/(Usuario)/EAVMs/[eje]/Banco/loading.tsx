import Tabs from '@/components/Tabs';
import BreadNav from "@/components/BreadNav";

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
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold py-1'>Cambio</span>
                        <div className='flex justify-between gap-3'>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Max</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold py-1'>Encerrojamiento</span>
                        <div className='flex justify-between gap-3'>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. min</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        <div className='font-semibold py-1 flex flex-col'>
                            <span className='font-semibold py-1'>f. Med Tot</span>
                            <div className="animate-pulse h-1 bg-gray-500 rounded-full mt-2 w-2"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}