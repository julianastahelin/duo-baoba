import { getSocialMedias } from '@/services/notion/'
import { SocialMedias } from '@/components/socialMedias'
import { AnimatedDiv } from '@/components/animated-ui/div'


export const revalidate = 10

export const metadata = {
    title: 'Página de contatos',
    alternates: {
        canonical: '/contato'
    },
    openGraph: {
        title: 'Página de contatos | Duo Baobá',
        type: 'website',
        url: 'https://duobaoba.com.br/contato',
        siteName: 'Duo Baobá - Música instrumental brasileira',
        locale: 'pt_BR'
    },
}

export default async function ContactPage() {

    const socialMedias = await getSocialMedias()

    return (
        <main className='pt-16 flex flex-col-reverse sm:flex-row h-screen overflow-hidden'>
            <AnimatedDiv x={10}
                style={{ backgroundImage: `url(/assets/img/duo-2.jpg)` }}
                className='h-[60vh] sm:h-[100vh] w-full sm:w-1/2 md:w-2/3 bg-cover bg-center md:bg-right relative'
            ></AnimatedDiv>
            <AnimatedDiv x={-10} delay={0.6} className='flex flex-col items-center justify-center grow text-primary-foreground'>
                <h1 className='text-4xl md:text-5xl tracking-[2px] md:tracking-8px font-bold py-5 md:py-10'>Contato</h1>
                <SocialMedias socialMedias={socialMedias} />
            </AnimatedDiv>
        </main >
    )
}
