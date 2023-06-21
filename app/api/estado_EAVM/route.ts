import { NextResponse } from 'next/server';
import { urls_mercave } from '@/lib/mercave';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const codigo = searchParams.get('codigo');

  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.estado_eje}${codigo}/`)
  const estado_eje = await res.json();
  return NextResponse.json({
    en_servicio:estado_eje.en_servicio,
    en_circulacion: estado_eje.en_circulacion,
    en_mantenimiento: estado_eje.en_mantenimiento,
    alarma_temp: estado_eje.alarma_temp,
    alarma_aceleraciones: estado_eje.alarma_aceleraciones,
    alarma_cambio: estado_eje.alarma_cambio,
    alarma_mantenimiento: estado_eje.alarma_mantenimiento,
  })
}