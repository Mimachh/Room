import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Room',
  description: 'Video calling app',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn(inter.className, 'min-h-screen primary-radial')}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
