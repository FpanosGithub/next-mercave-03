'use client'
import Link from 'next/link';
import Image from "next/image"
import { useState, useEffect } from 'react';
import { DatosBancoEAVM, TotalesBanco } from '@/types/cambio';
import ListaCambiosBanco from './ListaCambiosBanco';
import GraficasBanco from './GraficasBanco';
import BarraComparacion from '@/components/BarraComparacion'

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

    <div className='flex items-center flex-wrap gap-2 rounded-md  bg-white shadow p-1'>
      <div className=' rounded-md bg-white shadow flex flex-col gap-2 min-w-[380px] border-r border-gray-300 px-2 pb-2'>
        <span className='text-gray-500 font-medium text-sm'>DESCERROJAMIENTO</span>
        <div className='flex gap-3'>
          <div className='w-[120px] py-1 flex flex-col justify-between pr-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fmaxdes).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MAX</div>
          </div>
          <div className='w-[120px] py-1 flex flex-col justify-between px-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fmeddes).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MED</div>
          </div>
          <BarraComparacion
            valor = {datos_banco.fmeddes}
            referencia = {totales.fmeddes}
            unidades = 'N'
            texto_valor = 'media eje'
            texto_referencia = 'media resto'/>
        </div>
      </div>

      <div className='rounded-md bg-white shadow flex flex-col gap-2 min-w-[380px] border-r border-gray-300 px-2 pb-2'>
        <span className='text-gray-500 font-medium text-sm'>CAMBIO</span>
        <div className='flex gap-3'>
          <div className='w-[120px] py-1 flex flex-col justify-between pr-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fmaxcamb).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MAX</div>
          </div>
          <div className='w-[120px] py-1 flex flex-col justify-between px-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fmedcamb).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MED</div>
          </div>
          <BarraComparacion
            valor = {datos_banco.fmedcamb}
            referencia = {totales.fmedcamb}
            unidades = 'N'
            texto_valor = 'media eje'
            texto_referencia = 'media resto'/>
        </div>
      </div>

      <div className='rounded-md bg-white shadow flex flex-col gap-2 min-w-[380px] border-r border-gray-300 px-2 pb-2'>
        <span className='text-gray-500 font-medium text-sm'>ENCERROJAMIENTO</span>
        <div className='flex gap-3'>
          <div className='w-[120px] py-1 flex flex-col justify-between pr-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fminenc).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MIN</div>
          </div>
          <div className='w-[120px] py-1 flex flex-col justify-between px-2 border-r border-gray-200'>
            <div className='mt-1.5 truncate flex gap-2'>
              <span className='text-2xl'>{Math.round(datos_banco.fmedenc).toLocaleString('es-ES')}</span>
              <span className='text-sm mt-2'>N</span>
            </div>
            <div className='text-gray-500 font-medium text-sm'>F. MED</div>
          </div>
          <BarraComparacion
            valor = {datos_banco.fmedenc}
            referencia = {totales.fmedenc}
            unidades = 'N'
            texto_valor = 'media eje'
            texto_referencia = 'media resto'/>
        </div>
      </div>    
    </div>
    <div className='flex flex-wrap gap-1'>
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
