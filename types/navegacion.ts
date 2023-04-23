export type Segmento = {
  nombre: string,
  link: string,
}

export type Segmentos = {
  previos: Segmento[],
  activo: Segmento,
}
