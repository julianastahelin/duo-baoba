import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { ScrollTopButton } from '@/components/scrollTopBtn'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'


const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://duo-baoba.vercel.app'),
  title: {
    default:'Duo Baobá',
    template: '%s | Duo Baobá'
  },
  category: 'Música',
  description: 'Música instrumental brasileira',
  keywords: ['Música instrumental', 'Música brasileira', 'Choro', 'Chorinho', 'Flauta', 'Violão', 'Flautista', 'Violonista', 'Florianópolis', 'Floripa', 'Santa Catarina', 'Brasil', 'Mayara Araújo', 'Mayara', 'David', 'David Cardona', 'Música para eventos', 'Show', 'Show musical', 'Recital', 'Apresentações musicais', 'Musicistas', 'Músicos', 'Duo flauta e violão', 'Duo instrumental', 'Pixinguinha', 'Chiquinha Gonzaga', 'Jacob do Bandolin', 'Waldir Azevedo', 'Ernesto Nazareth', 'Joaquim Calado', 'João Pernambuco' ],
  creator: 'Juliana Stahelin e Sabrina Stahelin',
  publisher: 'Vercel',
  verification: {
    google: 'SxxgicHgEvIXTNo-QILSefFzRtoMytiKQec9DJQvFbk'
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={ubuntu.className}>
      <body className='bg-primary relative'>
        <Navbar />
        {children}
        <ScrollTopButton />
        <Toaster />
      </body>
    </html>
  )
}
