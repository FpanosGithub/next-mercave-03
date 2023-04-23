export default function datosCirculacion (eventos)
{
    let datos = {
      velocidades:[],
      temperaturas:[],
      vel_maxima:0,
      tempa_max:0,
      tempb_max:0,
      tempa_med:0,
      tempb_med:0,
      tempa_min:1000,
      tempb_min:1000,
      axM:[],
      ayM:[],
      azM:[],
      axmed:[],
      aymed:[],
      azmed:[],
      fx:[],
      fy:[],
      fz:[],
    }  
    let num = 0
    let sum_tempa = 0
    let sum_tempb = 0

    if (eventos.length>0)
      {
        eventos.forEach ((obj) => 
        {
          datos.velocidades.unshift({'vel':obj.vel})
          datos.temperaturas.unshift({'tempa':obj.tempa, 'tempb': obj.tempb})
          if (obj.vel>datos.vel_maxima){datos.vel_maxima = obj.vel}
          if (obj.tempa>datos.tempa_max){datos.tempa_max = obj.tempa}
          if (obj.tempb>datos.tempb_max){datos.tempb_max = obj.tempb}
          if (obj.tempa<datos.tempa_min){datos.tempa_min = obj.tempa}
          if (obj.tempb<datos.tempb_min){datos.tempb_min = obj.tempb}
          sum_tempa = sum_tempa + obj.tempa
          sum_tempb = sum_tempb + obj.tempb
          datos.axM.unshift({'a':obj.axMa, 'b': obj.axMb})
          datos.ayM.unshift({'a':obj.ayMa, 'b': obj.ayMb})
          datos.azM.unshift({'a':obj.azMa, 'b': obj.azMb})
          datos.axmed.unshift({'a':obj.axmeda, 'b': obj.axmedb})
          datos.aymed.unshift({'a':obj.aymeda, 'b': obj.aymedb})
          datos.azmed.unshift({'a':obj.azmeda, 'b': obj.azmedb})
          datos.fx.unshift({'a':obj.fxa, 'b': obj.fxb})
          datos.fy.unshift({'a':obj.fya, 'b': obj.fyb})
          datos.fz.unshift({'a':obj.fya, 'b': obj.fzb})
          num = num +1
        })
      datos.tempa_med = (sum_tempb/num).toFixed(2)
      datos.tempb_med = (sum_tempb/num).toFixed(2)
    }
    else{
      datos.tempa_min = 0
      datos.tempb_min = 0
    }
return datos
}