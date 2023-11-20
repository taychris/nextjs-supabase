import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/lib/provider'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="flex flex-col items-center min-h-screen">
          <Provider>
            {children}
          </Provider>
        </main>
      </body>
    </html>
  )
}