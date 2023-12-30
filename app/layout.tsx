import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FinalFooter from './footer'
import NavBar from './navbar'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {               // works as meta data
  title: 'DeoCodingTech',
  description: 'Created by Deo',
 }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

          
            <NavBar />
   
          {children}
          <FinalFooter />

      </body>
    </html>
  );
}
