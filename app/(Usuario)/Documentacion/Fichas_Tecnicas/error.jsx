'use client'; // Error components must be Client components
import { useEffect } from 'react';
import BarraNavegacion from "./_componentes/BarraNavegacion";

export default function Error({error,reset,}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
    <BarraNavegacion/>
    <div className='p-16 border border-slate-500 max-w-8xl w-full text-3xl font-extralight text-purple-500'><h2>¡ No se encontró la Ficha Técnica buscada !.</h2></div>
    </>
    
  );
}