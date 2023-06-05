import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const long = searchParams.get('lon');

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric&lang=es`)
  const tiempo = await res.json();
  //if (!tiempo.ok) {return new Response('No encontrado tiempo!',{status: 500})}
  return NextResponse.json({
      ciudad:tiempo.name,
      temperatura:tiempo.main.temp,
      humedad:tiempo.main.humidity,
      viento:tiempo.wind.speed,
      icono:tiempo.weather[0].icon
    });
}