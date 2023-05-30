import { urls_mercave } from '@/lib/mercave';


export default async function Page({params}:{params:any}) {

  return (
    <>
    <h1>LINK CIRCULACIONES MULTI-DINAMIC</h1>
      <p>params.vehiculo: {params.vehiculo}</p>
      <p>params.tipo: {params.tipo}</p>
    </>
  )
}