import GlobalNav from '@/components/GlobalNav'
import '@/styles/globals.css'
import {Session} from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'

export const metadata = {
  title: 'Mercave',
  description: 'Created by Tria',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <body>
        {session?
          <GlobalNav admin session={session as Session}>
            {children}
          </GlobalNav>
        :
          <Login/>
        }
      </body>
    </html>
  )
}
