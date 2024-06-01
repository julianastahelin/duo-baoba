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
  metadataBase: new URL('https://duobaoba.com.br'),
  title: {
    default:'Duo Baobá - Música instrumental brasileira',
    template: '%s | Duo Baobá'
  },
  category: 'Música',
  description: 'O Duo Baobá é um duo de música instrumental brasileira formado pela flautista Mayara Araújo e pelo violonista David Cardona, cuja pesquisa sonora explora a linguagem do "Choro" em sua diversidade. O duo é atuante em Florianópolis, onde realiza apresentações em espaços de lazer, cultura e eventos particulares.',
  keywords: ['Música instrumental', 'Música brasileira', 'Choro', 'Chorinho', 'Flauta', 'Violão', 'Flautista', 'Violonista', 'Florianópolis', 'Floripa', 'Santa Catarina', 'Brasil', 'Mayara Araújo', 'Mayara', 'David', 'David Cardona', 'Música para eventos', 'Show', 'Show musical', 'Recital', 'Apresentações musicais', 'Musicistas', 'Músicos', 'Duo flauta e violão', 'Duo instrumental', 'Pixinguinha', 'Chiquinha Gonzaga', 'Jacob do Bandolin', 'Waldir Azevedo', 'Ernesto Nazareth', 'Joaquim Calado', 'João Pernambuco' ],
  creator: 'Juliana Stahelin e Sabrina Stahelin',
  publisher: 'Vercel',
  openGraph: {
    title: 'Duo Baobá - Música instrumental brasileira',
    description: 'O Duo Baobá é um duo de música instrumental brasileira formado pela flautista Mayara Araújo e pelo violonista David Cardona, cuja pesquisa sonora explora a linguagem do "Choro" em sua diversidade. O duo é atuante em Florianópolis, onde realiza apresentações em espaços de lazer, cultura e eventos particulares.',
    type: 'website',
    url: 'https://duobaoba.com.br',
    siteName: 'Duo Baobá - Música instrumental brasileira',
    locale: 'pt_BR'
  },
  alternates: {
    canonical: './',
    languages: {
      'pt-BR': '/'
    }
  }
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
