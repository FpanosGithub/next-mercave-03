import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import Image from "next/image";
import urlFor from '@/sanity/urlFor';
import BreadNav from '@/components/BreadNav'
import Tabs from "./Tabs";

export default async function page() {
  const segmentos = {
    previos:[], 
    activo:{nombre:'Documentación', link: 'Documentacion'}
  }
  
  const query_vehiculos = groq`
  *[_type=='FTVehiculo'] | order(num_doc, version) 
  {imagen, slug, num_doc, version, clase, descripcion, tipo_uic, serie_uic}
  `
  const fichas_vehiculos = await client.fetch(query_vehiculos);

  const query_EAVMs= groq`
  *[_type=='FTEAVM'] | order(num_doc, version) 
  {imagen, slug, num_doc, version, codigo, descripcion}
  `
  const fichas_EAVMs = await client.fetch(query_EAVMs);

  const query_personas= groq`
  *[_type=='Persona']
  {imagen, nombre, apellido, cargo}
  `
  const personas = await client.fetch(query_personas);
    
  return (
    <div>
      <BreadNav segmentos = {segmentos}/>
      <p className="ml-4 my-4 text-2xl font-semibold">Documentación</p>
      <Tabs
        fichas_vehiculos = {fichas_vehiculos}
        fichas_EAVMs = {fichas_EAVMs}
        personas = {personas}
      />
    </div>
  )
}
