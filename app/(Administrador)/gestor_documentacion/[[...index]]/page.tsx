'use client'
import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return (
  <>
    <div className = ''>
      <NextStudio config={config} />
    </div>
  </>
  )   
}
