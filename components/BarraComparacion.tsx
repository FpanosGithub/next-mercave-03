import clsx from "clsx"
export default function BarraComparacion({
  valor,
  referencia,
  unidades,
  texto_valor,
  texto_referencia,
}:{
  valor:number,
  referencia:number,
  unidades?:string,
  texto_valor?:string,
  texto_referencia?:string,
}) {
  const ratio = valor/referencia
  let color = ''
  if (ratio >= 2) {color = 'text-amber-800'}
  else if (ratio >= 1.5) {color = 'text-amber-500'}
  else if (ratio >= 1) {color = 'text-amber-300'}
  else if (ratio >= 0.75) {color = 'text-emerald-600'}
  else if (ratio >= 0.5) {color = 'text-emerald-400'}
  else if (ratio >= 0.25) {color = 'text-emerald-200'} 

  return (
    <div className="flex justify-center gap-4">
      <div className={`flex flex-col text-sm`}>
        <span className="text-center">{texto_valor}</span>
        <span className={`text-center ${color}`}>{Math.round(valor)} {unidades}</span>
      </div>
      <div className="flex flex-col justify-center h-[60px] w-8 border border-gray-300 rounded">
        <div className = {clsx("h-[10px] border-b border-gray-200",{'bg-amber-800':(ratio>=2)} )}></div>
        <div className={clsx("h-[10px] border-b border-gray-200",{'bg-amber-500':(ratio>=1.50)} )}></div>
        <div className={clsx("h-[10px] border-b-4 border-blue-800",{'bg-amber-300':(ratio>=1)} )}></div>
        <div className={clsx("h-[10px] border-b border-gray-200",{'bg-emerald-600':(ratio>=0.75)} )}></div>
        <div className={clsx("h-[10px] border-b border-gray-200",{'bg-emerald-400':(ratio>=0.5)} )}></div>
        <div className={clsx("h-[10px] border-b border-gray-200",{'bg-emerald-200':(ratio>=0.25)} )}></div>

      </div>
      <div className="flex flex-col text-sm text-gray-600">
        <span className="text-center">{texto_referencia}</span>
        <span className="text-center text-blue-800">{Math.round(referencia)} {unidades}</span>
      </div>
    </div>
  )
}
