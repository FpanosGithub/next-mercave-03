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
    <div>
      <BreadNav segmentos = {segmentos}/>
      <p className="ml-4 my-4 text-2xl font-semibold">Documentación</p>
      {children}
    </div>
  )
}
