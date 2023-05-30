'use client'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

export default function MapaCirculaciones ({circulaciones, select, onSelect, hover, onHover}) {
  
  const checkDate = (date) => {
    const fecha = new Date(date)
    const yesterday  = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const daybefore  = new Date();
    daybefore.setDate(daybefore.getDate() - 2);
    const oneweekbefore  = new Date();
    oneweekbefore.setDate(oneweekbefore.getDate() - 7);
    const twoweeksbefore  = new Date();
    twoweeksbefore.setDate(twoweeksbefore.getDate() - 14);
    const onemonthbefore  = new Date();
    onemonthbefore.setDate(onemonthbefore.getDate() - 30);
    const twomonthsbefore  = new Date();
    twomonthsbefore.setDate(twomonthsbefore.getDate() - 60);
    const threemonthsbefore  = new Date();
    threemonthsbefore.setDate(threemonthsbefore.getDate() - 90);

    if (fecha > yesterday) {return 0}
    if (fecha > daybefore) {return 1}
    if (fecha > oneweekbefore) {return 2}
    if (fecha > twoweeksbefore) {return 3}
    if (fecha > onemonthbefore) {return 4}
    if (fecha > twomonthsbefore) {return 5}
    if (fecha > threemonthsbefore) {return 6}
    return 8
  }

  const width = (date)=>{
    const num = checkDate(date) * 4
    return (35 - num)
  }

  const color = (date)=>{
    let hue = 185
    let saturation = 81
    let lightness = 29
    const priority = checkDate(date)
    switch (priority) {
      case 0:
        hue = 184
        saturation = 91
        lightness = 17
        break
      case 1:
        hue = 185
        saturation = 84
        lightness = 25
        break
      case 2:
        hue = 185
        saturation = 81
        lightness = 29
        break
      case 3:
        hue = 184
        saturation = 77
        lightness = 34
        break
      case 4:
        hue = 185
        saturation = 62
        lightness = 45
        break
      case 5:
        hue = 185
        saturation = 57
        lightness = 50
        break
      case 6:
        hue = 184
        saturation = 65
        lightness = 59
        break
      default:
        hue = 184
        saturation = 80
        lightness = 74
    }
    return `hsl(${hue}deg ${saturation}% ${lightness}%)`
  }

  const data_overlay = () => {
    let data = {anchor:[40, -2], color:'white', texto:'', dia:'', hora:''}
    if (hover !== -1) {
    circulaciones.forEach((circulacion)=> {
      if (hover === circulacion.id) {
        data.anchor = [circulacion.lat_final, circulacion.lng_final]
        switch (checkDate(circulacion.dt_final)) {
          case 0:
            data.texto = 'Hoy'
            break
          case 1:
            data.texto = 'Ayer'
            break
          case 2:
            data.texto = 'Hace menos de 7 días'
            break
          case 3:
            data.texto = 'Hace menos 14 días'
            break
          case 4:
            data.texto = 'Hace menos de 1 mes'
            break
          case 5:
            data.texto = 'Hace menos de 2 meses'
            break
          case 6:
            data.texto = 'Hace menos de 3 meses'
            break
          default:
            data.texto = 'Hace más de 3 meses'
        }
        data.color = color(circulacion.dt_final)
        data.dia = circulacion.dt_final.slice(0,10)
        data.hora = circulacion.dt_final.slice(11,19)
            }
            })
      }
    return data
  }
  const overlay = data_overlay()

  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem]">
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[40, -2]}
      defaultZoom={5} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        {circulaciones.map((circulacion)=>
        (
          <Marker 
          key = {circulacion.id}
          width={width(circulacion.dt_final)} 
          color = {color(circulacion.dt_final)} 
          anchor={[circulacion.lat_final, circulacion.lng_final]}
          onMouseOver={() => onHover(circulacion.id)}
          onClick = {() => onSelect(circulacion.id)}/>
        )
        )}
        {(hover !== -1)?
          (<Overlay 
            anchor={overlay.anchor}>
              <div  className='flex flex-col w-36 h-30 p-1 text-xs text-center border rounded-md bg-slate-600/80 border-slate-500 hover:cursor-zoom-out'
                    onClick = {() => onHover(-1)}>
                <div className='my-1'>Fin circulación:</div>
                <div className='my-1'>{overlay.texto}</div>
                <div>{overlay.dia}</div>
                <div>{overlay.hora}</div>
              </div>
          </Overlay>)
          :
          ('')
        }  
    </Map>
    </div>
  )
}