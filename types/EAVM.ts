import {VehiculoMin} from './vehiculo'

export type TipoEAVMMin = {
  id: number,
  codigo: string,
  imagen: string,
}
export type EAVMBasico = {
  id: number,
  codigo: string,
  tipo_EAVM: TipoEAVMMin,
  vehiculo?: VehiculoMin,
  fabricante?: string, 
  owner?: string, 
  EEM?: string, 
  fecha_proximo_mantenimiento?: Date, 
  lat: number, 
  lng: number,
}
export type posicionEAVM = {
  id: number,
  codigo: string, 
  lat: number, 
  lng: number,
}
export type EstadoEAVM = {
  en_servicio: boolean, 
  en_circulacion: boolean, 
  en_mantenimiento: boolean, 
  alarma_temp: boolean, 
  alarma_aceleraciones: boolean, 
  alarma_cambio: boolean, 
  alarma_mantenimiento: boolean,
  num_cambios: number, 
  km_totales: number,
}
export type EAVMCompleto = {
  id: number,
  codigo: string,
  tipo_EAVM: TipoEAVMMin, 
  owner: string,
  fabricante: string,
  fecha_fab: string,
  keeper: string 
  EEM: string 
  fecha_ultimo_mantenimiento?: Date,
  fecha_proximo_mantenimiento?: Date, 
  km_proximo_mant?: number,
  nivel_proximo_mant?: number,
  vehiculo?: VehiculoMin,  
  en_servicio: boolean, 
  en_mantenimiento: boolean, 
  en_circulacion: boolean, 
  observaciones_servicio?: string 
  alarma_temp: boolean, 
  alarma_aceleraciones: boolean, 
  alarma_cambio: boolean, 
  alarma_mantenimiento: boolean, 
  tempa: number, 
  tempb: number, 
  lng: number, 
  lat: number, 
  num_cambios: number, 
  km_totales: number, 
  coef_trabajo?: number,  
}
