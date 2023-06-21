export type ValorCambio = {
  x: number,
  f: number,
  ms?: number,
}

export type CambioBanco = {
  id: number,
  dt: Date,
  V: number,
  FV: number,
  sentido: string,
  alarma: boolean,
  valoresDA: ValorCambio[],
  valoresDB: ValorCambio[],
  valoresCA: ValorCambio[],
  valoresCB: ValorCambio[],
  valoresEA: ValorCambio[],
  valoresEB: ValorCambio[],
}

export type DatosBancoEAVM = {
  EAVM:string,
  num_cambios: number,
  fmaxdes: number,
  posmaxdes: number,
  fmaxcamb: number,
  posmaxcamb: number,
  fminenc: number,
  posminenc: number,
  fmeddes: number,
  fmedcamb: number,
  fmedenc: number,
  cambios: CambioBanco[],
}

export type TotalesBanco = {
  num_cambios: number,
  ValoresMaxD: ValorCambio[],
  ValoresMaxC: ValorCambio[],
  ValoresminE: ValorCambio[],
  ValoresminD: ValorCambio[],
  ValoresminC: ValorCambio[],
  ValoresMaxE: ValorCambio[],
  fmeddes: number,
  fmedcamb: number,
  fmedenc: number,
}
