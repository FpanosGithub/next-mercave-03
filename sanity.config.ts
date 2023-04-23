import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import { estructura } from './sanity/sanity.estructura'
import SanityLogo from './components/SanityLogo'
import SanityNavbar from './components/SanityNavbar'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: "/gestor_documentacion",
  name: 'Gestor_Documentacion',
  title: 'DOCUMENTACIÓN TRAMS',
  projectId,
  dataset,
  plugins: [
    deskTool(
      {structure:estructura,},
    ), 
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:SanityLogo,
      navbar:SanityNavbar,
    }
  },
})
