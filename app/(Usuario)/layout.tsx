import GlobalNav from '@/components/GlobalNav'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mercave',
  description: 'Created by Tria',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  //const session = await getServerSession(authOptions)
  
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <GlobalNav>
          {children}
        </GlobalNav>
      </body>
    </html>
  </ClerkProvider>
  )
}
