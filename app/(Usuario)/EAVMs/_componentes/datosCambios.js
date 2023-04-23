function PrepararDatosCambios (cambios)
{

    let datos = 
            {
              duracion_dias:0,
              duracion_horas:0,
              num_cambios:0,
              
              fdaM:0,
              fdbM:0,
              fda_med:0,
              fdb_med:0,
              
              fcaM:0,
              fcbM:0,
              fca_med:0,
              fcb_med:0,
              
              feam:100,
              febm:100,
              deam:0,
              debm:0,
                
              descerrojamiento:        
                    [ {x:'<10', A :0, B:0}, 
                      {x:'15', A :0, B:0},
                      {x:'25', A :0, B:0},
                      {x:'35', A :0, B:0}, 
                      {x:'45', A :0, B:0}, 
                      {x:'55', A :0, B:0},
                      {x:'65', A :0, B:0},
                      {x:'>70', A :0, B:0}, 
                    ],
            cambio:        
                    [ {x:'<10', A :0, B:0}, 
                      {x:'15', A :0, B:0},
                      {x:'25', A :0, B:0},
                      {x:'35', A :0, B:0}, 
                      {x:'45', A :0, B:0}, 
                      {x:'55', A :0, B:0},
                      {x:'65', A :0, B:0},
                      {x:'>70', A :0, B:0}, 
            ], 
            encerrojamiento: 
                    [ {x:'<1', A :0, B:0}, 
                      {x:'1.5', A :0, B:0},
                      {x:'2.5', A :0, B:0},
                      {x:'3.5', A :0, B:0}, 
                      {x:'4.5', A :0, B:0}, 
                      {x:'5.5', A :0, B:0},
                      {x:'6.5', A :0, B:0},
                      {x:'>7', A :0, B:0}, 
            ],       
            }
    
    let num = 0
    let sum_fda = 0
    let sum_fdb = 0
    let sum_fca = 0
    let sum_fcb = 0
  
    if (cambios && cambios.length>0)
      {
      cambios.forEach ((obj) => 
        {
        if (obj.fdaM<10)
        {datos.descerrojamiento[0].A = datos.descerrojamiento[0].A + 1}
        if (obj.fdaM >= 10 && obj.fdaM< 20) 
        {datos.descerrojamiento[1].A = datos.descerrojamiento[1].A + 1}
        if (obj.fdaM >= 20 && obj.fdaM< 30) 
        {datos.descerrojamiento[2].A = datos.descerrojamiento[2].A + 1}
        if (obj.fdaM >= 30 && obj.fdaM< 40) 
        {datos.descerrojamiento[3].A = datos.descerrojamiento[3].A + 1}
        if (obj.fdaM >= 40 && obj.fdaM< 50) 
        {datos.descerrojamiento[4].A = datos.descerrojamiento[4].A + 1}
        if (obj.fdaM >= 50 && obj.fdaM< 60) 
        {datos.descerrojamiento[5].A = datos.descerrojamiento[5].A + 1}
        if (obj.fdaM >= 60 && obj.fdaM< 70) 
        {datos.descerrojamiento[6].A = datos.descerrojamiento[6].A + 1}
        if (obj.fdaM >= 70) 
        {datos.descerrojamiento[7].A = datos.descerrojamiento[7].A + 1}
  
        if (obj.fdbM<10)
        {datos.descerrojamiento[0].B = datos.descerrojamiento[0].B + 1}
        if (obj.fdbM >= 10 && obj.fdbM< 20) 
        {datos.descerrojamiento[1].B = datos.descerrojamiento[1].B + 1}
        if (obj.fdbM >= 20 && obj.fdbM< 30) 
        {datos.descerrojamiento[2].B = datos.descerrojamiento[2].B + 1}
        if (obj.fdbM >= 30 && obj.fdbM< 40) 
        {datos.descerrojamiento[3].B = datos.descerrojamiento[3].B + 1}
        if (obj.fdbM >= 40 && obj.fdbM< 50) 
        {datos.descerrojamiento[4].B = datos.descerrojamiento[4].B + 1}
        if (obj.fdbM >= 50 && obj.fdbM< 60) 
        {datos.descerrojamiento[5].B = datos.descerrojamiento[5].B + 1}
        if (obj.fdbM >= 60 && obj.fdbM< 70) 
        {datos.descerrojamiento[6].B = datos.descerrojamiento[6].B + 1}
        if (obj.fdbM >= 70) 
        {datos.descerrojamiento[7].B = datos.descerrojamiento[7].B + 1}
  
        if (obj.fcaM<10)
        {datos.cambio[0].A = datos.cambio[0].A + 1}
        if (obj.fcaM >= 10 && obj.fcaM< 20) 
        {datos.cambio[1].A = datos.cambio[1].A + 1}
        if (obj.fcaM >= 20 && obj.fcaM< 30) 
        {datos.cambio[2].A = datos.cambio[2].A + 1}
        if (obj.fcaM >= 30 && obj.fcaM< 40) 
        {datos.cambio[3].A = datos.cambio[3].A + 1}
        if (obj.fcaM >= 40 && obj.fcaM< 50) 
        {datos.cambio[4].A = datos.cambio[4].A + 1}
        if (obj.fcaM >= 50 && obj.fcaM< 60) 
        {datos.cambio[5].A = datos.cambio[5].A + 1}
        if (obj.fcaM >= 60 && obj.fcaM< 70) 
        {datos.cambio[6].A = datos.cambio[6].A + 1}
        if (obj.fcaM >= 70) 
        {datos.cambio[7].A = datos.cambio[7].A + 1}
  
        if (obj.fcbM<10)
        {datos.cambio[0].B = datos.cambio[0].B + 1}
        if (obj.fcbM >= 10 && obj.fcbM< 20) 
        {datos.cambio[1].B = datos.cambio[1].B + 1}
        if (obj.fcbM >= 20 && obj.fcbM< 30) 
        {datos.cambio[2].B = datos.cambio[2].B + 1}
        if (obj.fcbM >= 30 && obj.fcbM< 40) 
        {datos.cambio[3].B = datos.cambio[3].B + 1}
        if (obj.fcbM >= 40 && obj.fcbM< 50) 
        {datos.cambio[4].B = datos.cambio[4].B + 1}
        if (obj.fcbM >= 50 && obj.fcbM< 60) 
        {datos.cambio[5].B = datos.cambio[5].B + 1}
        if (obj.fcbM >= 60 && obj.fcbM< 70) 
        {datos.cambio[6].B = datos.cambio[6].B + 1}
        if (obj.fcbM >= 70) 
        {datos.cambio[7].B = datos.cambio[7].B + 1}
  
  
        if (obj.feam<1)
        {datos.encerrojamiento[0].A = datos.encerrojamiento[0].A + 1}
        if (obj.feam >= 1 && obj.feam< 2) 
        {datos.encerrojamiento[1].A = datos.encerrojamiento[1].A + 1}
        if (obj.feam >= 2 && obj.feam< 3) 
        {datos.encerrojamiento[2].A = datos.encerrojamiento[2].A + 1}
        if (obj.feam >= 2 && obj.feam< 3) 
        {datos.encerrojamiento[3].A = datos.encerrojamiento[3].A + 1}
        if (obj.feam >= 3 && obj.feam< 4) 
        {datos.encerrojamiento[4].A = datos.encerrojamiento[4].A + 1}
        if (obj.feam >= 4 && obj.feam< 5) 
        {datos.encerrojamiento[5].A = datos.encerrojamiento[5].A + 1}
        if (obj.feam >= 5 && obj.feam< 6) 
        {datos.encerrojamiento[6].A = datos.encerrojamiento[6].A + 1}
        if (obj.feam >= 7) 
        {datos.encerrojamiento[7].A = datos.encerrojamiento[7].A + 1}
  
        if (obj.febm<1)
        {datos.encerrojamiento[0].B = datos.encerrojamiento[0].B + 1}
        if (obj.febm >= 1 && obj.febm< 2) 
        {datos.encerrojamiento[1].B = datos.encerrojamiento[1].B + 1}
        if (obj.febm >= 2 && obj.febm< 3) 
        {datos.encerrojamiento[2].B = datos.encerrojamiento[2].B + 1}
        if (obj.febm >= 2 && obj.febm< 3) 
        {datos.encerrojamiento[3].B = datos.encerrojamiento[3].B + 1}
        if (obj.febm >= 3 && obj.febm< 4) 
        {datos.encerrojamiento[4].B = datos.encerrojamiento[4].B + 1}
        if (obj.febm >= 4 && obj.febm< 5) 
        {datos.encerrojamiento[5].B = datos.encerrojamiento[5].B + 1}
        if (obj.febm >= 5 && obj.febm< 6) 
        {datos.encerrojamiento[6].B = datos.encerrojamiento[6].B + 1}
        if (obj.febm >= 7) 
        {datos.encerrojamiento[7].B = datos.encerrojamiento[7].B + 1}
  
        if (obj.fdaM > datos.fdaM) {datos.fdaM = obj.fdaM}
        if (obj.fdbM > datos.fdbM) {datos.fdbM = obj.fdbM}
        if (obj.fcaM > datos.fcaM) {datos.fcaM = obj.fcaM}
        if (obj.fcbM > datos.fcbM) {datos.fcbM = obj.fcbM}
        if (obj.feam < datos.feam) {datos.feam = obj.feam; datos.deam = obj.deam}
        if (obj.febm < datos.febm) {datos.febm = obj.febm; datos.debm = obj.debm}
  
        sum_fda = sum_fda + obj.fdaM
        sum_fdb = sum_fdb + obj.fdbM
        sum_fca = sum_fca + obj.fcaM
        sum_fcb = sum_fcb + obj.fcbM
        num = num +1
        })
      datos.fda_med = (sum_fda/num).toFixed(2)
      datos.fdb_med = (sum_fdb/num).toFixed(2)
      datos.fca_med = (sum_fca/num).toFixed(2)
      datos.fcb_med = (sum_fcb/num).toFixed(2)
      }
    else
      {
      datos.fdaM = '-'
      datos.fdbM = '-'
      datos.fcaM = '-'
      datos.fcbM = '-'
      datos.feam = '-'
      datos.febm = '-'
      }
    return datos
}
 
export default PrepararDatosCambios;