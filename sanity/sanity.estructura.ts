import { BookOpenIcon, WrenchIcon, NewspaperIcon, UserIcon, WrenchScrewdriverIcon, TruckIcon, StopCircleIcon, CpuChipIcon, SwatchIcon, CubeIcon} from "@heroicons/react/24/outline"

export const estructura = (S:any) =>
  S.list().title('Contenido')
    .items([
      S.listItem().title('Fichas Técnicas').icon(NewspaperIcon)
        .child(
          S.list().title('Fichas Técnicas').items([
            S.listItem().title('Vehiculos').icon(TruckIcon)
              .child(S.documentTypeList('FTVehiculo').title('Vehiculos').child(S.document().schemaType('FTVehiculo'))),
            S.listItem().title('Ejes EAVM').icon(StopCircleIcon)
              .child(S.documentTypeList('FTEAVM').title('Ejes EAVM')),
            S.listItem().title('Sistemas EAVM').icon(CubeIcon)
              .child(S.documentTypeList('FTSistemaEAVM').title('Sistemas EAVM')),
              S.listItem().title('Sistemas Vehiculos').icon(CubeIcon)
              .child(S.documentTypeList('FTSistemaVehiculo').title('Sistemas Vehiculo')),
            S.listItem().title('Conjuntos').icon(SwatchIcon)
              .child(S.documentTypeList('FTConjunto').title('Conjuntos')),
            S.listItem().title('Elementos').icon(CpuChipIcon)
              .child(S.documentTypeList('FTComponente').title('Elementos')),
            ])),

      S.listItem().title('Instrucc. Mantenimiento').icon(WrenchIcon)
        .child(S.documentTypeList('ITComponente').title('Instrucciónes Técnicas').child()),
      
      S.listItem().title('Manuales de Uso').icon(BookOpenIcon),
      S.divider(),

      S.listItem().title('Personas').icon(UserIcon)
        .child(S.documentTypeList('Persona').title('Personas').child()),
      S.divider(),
      S.listItem().title('Maquinaria Herramienta').icon(WrenchScrewdriverIcon),
      ])