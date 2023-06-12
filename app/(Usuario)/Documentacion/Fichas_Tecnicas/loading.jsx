import BarraNavegacion from "./_componentes/BarraNavegacion";

export default function Loading() {

  return (
    <>
      <div className='h-full bg-gray-100'>
        <div className="pb-2 bg-white shadow-sm">
          <BarraNavegacion />
          <p className="ml-4 mt-4 text-2xl font-semibold">Ficha Técnica</p>
        </div>
      </div>
      <div className="">
      {/* BANNER */}
          <div className="flex gap-2 mx-2 flex-wrap">
            <div className="bg-gray-700 text-white rounded-md shadow-sm flex-1 flex justify-between flex-wrap">
              <div className="flex flex-col justify-center">
                <div className="w-[180px] h-[80px] py-2 my-4 mx-4 rounded-lg border-2 bg-white">
                  
                </div>
              </div>
              <div className="min-w-[340px] flex-1 flex justify-between items-center flex-wrap">
                <div className="text-3xl font-light max-w-[500px] mx-4 md:mx-8 my-2">
                  <p></p>
                  {/*<p className="text-slate-500 text-xl">{fichas[i].codigo}</p>*/}
                  </div>
                <div className= "flex justify-center border shadow p-2 rounded-md bg-gray-800 hover:cursor-pointer mx-4 md:mx-8 my-2">
                  <p className="text-slate-200"> Expediente AESF</p>
                </div>
              </div>
            </div>
            <div className="p-1 sm:max-w-[200px] bg-gray-700 rounded-md text-white flex-1 shadow-sm">
              <div className="m-0.5 p-1 flex justify-between gap-2">
                <span className="text-slate-300">Documento: </span>
                <span></span>
              </div>
              <div className="m-0.5 p-1 flex">
                <div className="flex-1 flex justify-between border-r border-slate-300">
                  <span className="text-slate-300">Versión:</span>
                </div>
              </div>
              <div className="m-0.5 p-1 flex justify-between gap-2">
                <span className="text-slate-300">Fecha: </span>
                <span></span>
              </div>
            </div>
          </div>
          {/* AUTORES */}
          <div className=" mx-2 mt-2 flex flex-wrap border border-slate-600 rounded-md">
            <div className="my-1 flex p-3 space-x-6 ml-1 border-r">
              <div className="text-slate-500">Elaborado: </div>
              <div className="">
                <p></p>
                <p className="text-slate-500"></p>
              </div>
            </div>
            <div className="my-1 flex p-3 space-x-6 border-r">
              <div className="text-slate-500">Supervisado: </div>
              <div className="">
                <p></p>
                <p className="text-slate-500"></p>
              </div>
            </div> 
          </div>
          {/* CABECERA */}
          <div className="mx-2 my-2 p-4 border  border-slate-600 rounded-md">
          </div>
          {/* CARACTERÍSTICAS TÉCNICAS */}
          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              Cuadro de Carácterísticas
            </div>
            <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">
              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Aplicación:</div>
                
              </div>
              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Rueda:</div>
                
              </div>

              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Fab. Rueda:</div>
                
              </div>

              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Fab. Eje:</div>
                
              </div>
            </div>
            
            <div className="flex w-full border-b border-slate-300 text-lg font-light flex-wrap">

              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Anchos:</div>
                
              </div>

              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Frenos:</div>
                
              </div>

              <div className="my-1 border-r border-slate-300 flex-1">
                <div className="text-slate-500 p-2">Carga Max.:</div>
        
              </div>
            </div>
          </div>

          {/* SISTEMAS EAVM */}
          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="p-2 w-full border-b border-slate-300">
              <div className="text-2xl font-extralight">Composición del EAVM</div>
              <div className="text-lg font-extralight flex px-2 pt-2">
                <div className="border-l border-l-fuchsia-500 px-2">Sistemas</div>
                <div className="border-l border-l-blue-500 px-2">Conjuntos</div>
                <div className="border-l border-l-emerald-500 pl-2">Elementos</div>
              </div>
            </div>
            <div className="p-8 text-slate-500">
              
            </div>
          </div>

          {/* DESCRIPCIÓN TÉCNICA */}
          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              Descripción Técnica
            </div>
            <div className="p-2">
            </div>
          </div>
          {/* MANTENIMIENTO */}
          <div className="mx-2 mt-4 border border-slate-600 rounded-md">
            <div className="text-2xl font-extralight p-2 w-full border-b border-slate-300">
              Mantenimiento
            </div>
            <div className="p-4">
              
            </div>
          </div>
      </div>
    </>
  );
}