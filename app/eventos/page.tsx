import { AnimatedDiv, AnimatedH1 } from '@/components/animated-ui'
import { EventCard } from '@/components/eventCard'
import { getEvents } from '@/services/notion/events'


export const revalidate = 10

export const metadata = {
    title: 'Página de eventos',
    alternates: {
        canonical: '/eventos'
    },
    openGraph: {
        title: 'Página de eventos | Duo Baobá',
        type: 'website',
        url: 'https://duobaoba.com.br/eventos',
        siteName: 'Duo Baobá',
        locale: 'pt_BR'
    },
}

export default async function Eventos() {

    const events = await getEvents()

    return (
        <main className='min-h-screen w-full flex flex-col gap-5 items-center justify-center py-20 text-primary-foreground'>
            <AnimatedH1 y={10} delay={0.2} className='text-4xl md:text-5xl tracking-[2px] md:tracking-8px font-bold py-5 md:py-10'>Eventos</AnimatedH1>
            <div className='flex md:flex-row flex-wrap gap-5 items-stretch justify-center w-full'>
                {events.map((event, index) =>
                    <AnimatedDiv
                        x={10}
                        delay={0.6 + index / 3}
                        key={event.title + index}
                        className='w-4/5 sm:w-3/5 max-w-[500px]'
                    >
                        <EventCard event={event} />
                    </AnimatedDiv>
                )}
            </div>
        </main>
    )
}
