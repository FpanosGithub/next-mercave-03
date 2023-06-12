'use client'
import Link from 'next/link';
import Image from "next/image"
import { useState, useEffect } from 'react';
import { DatosBancoEAVM, TotalesBanco } from '@/types/cambio';
import ListaCambiosBanco from './ListaCambiosBanco';
import GraficasBanco from './GraficasBanco';

export default function PanelBanco ({datos_banco, totales}:{datos_banco:DatosBancoEAVM, totales:TotalesBanco}){
  const [select, setSelect] = useState(0)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return(
  <div className='w-full flex flex-col p-4 gap-3'>
    <div className='rounded-md bg-gray-600 text-white flex justify-between items-center flex-wrap gap-2 p-2'>
      <div className='flex flex-col'>
        <span className='font-semibold py-1'>Descerrojamiento</span>
        <div className='flex justify-between gap-3'>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Max</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fmaxdes).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fmeddes).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med Tot</span>
            <span className='font-semibold py-1'>{Math.round(totales.fmeddes).toLocaleString('es-ES')} N</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold py-1'>Cambio</span>
        <div className='flex justify-between gap-3'>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Max</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fmaxcamb).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fmedcamb).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med Tot</span>
            <span className='font-semibold py-1'>{Math.round(totales.fmedcamb).toLocaleString('es-ES')} N</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold py-1'>Encerrojamiento</span>
        <div className='flex justify-between gap-3'>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. min</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fminenc).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med</span>
            <span className='font-semibold py-1'>{Math.round(datos_banco.fmedenc).toLocaleString('es-ES')} N</span>
          </div>
          <div className='font-semibold py-1 flex flex-col'>
            <span className='font-semibold py-1'>f. Med Tot</span>
            <span className='font-semibold py-1'>{Math.round(totales.fmedenc).toLocaleString('es-ES')} N</span>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-wrap'>
      <ListaCambiosBanco 
        cambios = {datos_banco.cambios}
        select = {select}
        onSelect = {setSelect}/>
      <GraficasBanco 
        cambios = {datos_banco.cambios}
        select = {select}/>
    </div>
  </div>
  )
}
