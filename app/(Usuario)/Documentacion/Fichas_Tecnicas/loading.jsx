'use client'; // Error components must be Client components
import { useEffect } from 'react';
import BarraNavegacion from "./_componentes/BarraNavegacion";

export default function Loading({error,reset,}) {

  return (
    <>
    <BarraNavegacion/>
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-2xl font-extralight text-teal-700'><h2>Cargando la documentación .......</h2></div>
    </>
    
  );
}