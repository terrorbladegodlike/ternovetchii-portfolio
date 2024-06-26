// Import Fonts from Next
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Import Styles CSS file
import './globals.css'

// Import Dark Mode from Shadcn
import { ThemeProvider } from './provider'

// Create Font component
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Mihail Portfolio',
   description: 'Modern & Minimalist Portfolio',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <ThemeProvider
               attribute='class'
               defaultTheme='dark'
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   )
}
