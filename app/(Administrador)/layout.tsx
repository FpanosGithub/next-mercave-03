import GlobalNav from '@/components/GlobalNav'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title: 'Mercave',
  description: 'Created by Tria',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
  <ClerkProvider>
    <html lang="en">
      <body>
          <GlobalNav admin>
            {children}
          </GlobalNav>
      </body>
    </html>
  </ClerkProvider>
  )
}
