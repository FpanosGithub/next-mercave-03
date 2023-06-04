import clsx from "clsx";
import { groq } from "next-sanity";
import { client } from "@/sanity/sanity.client";
import tria from '@/public/logos/tria.png'
import Image from "next/image";
import urlFor from '@/lib/urlFor'
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "./RichTextComponents";
import NavegadorVersiones from "./NavegadorVersiones";
import NavegadorConjunto from "./NavegadorConjunto";
import FTSistemaEAVM from "./FTSistemaEAVM";
import FTSistemaVehiculo from "./FTSistemaVehiculo"

export default async function FTSistema({material, id, tipo, id_tipo, sistema, id_sistema, version}) {
  if (material==='Ejes_EAVM') {
    return (
    <FTSistemaEAVM
      material= {material}
      id = {id}
      tipo = {tipo}
      id_tipo = {id_tipo}
      sistema = {sistema}
      id_sistema = {id_sistema}
      version = {version}
    />)}
  else {
    return (
      <FTSistemaVehiculo
        material= {material}
        id = {id}
        tipo = {tipo}
        id_tipo = {id_tipo}
        sistema = {sistema}
        id_sistema = {id_sistema}
        version = {version}
      />)
  }
}
