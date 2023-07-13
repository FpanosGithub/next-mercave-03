import BreadNav from '@/components/BreadNav'

export default async function Layout({
  children,
  }: {
  children: React.ReactNode
  }) {
  const segmentos = {
    previos:[], 
    activo:{nombre:'Documentación', link: 'Documentacion'}
  }
  
  return (
    <div className='h-full'>
      <div className='flex flex-col items-start gap-4 self-stretch bg-white shadow'>
        <BreadNav segmentos = {segmentos}/>
        <p className="ml-4 my-4 text-2xl font-semibold">Documentación</p>
      </div>
      <div className='bg-gray-100'>
        {children}
      </div>
    </div>
  )
}
