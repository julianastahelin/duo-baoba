import { EventCard } from '@/components/eventCard'
import { getEvents } from '@/services/notion/events'


export const metadata = {
    title: 'Página de eventos',
    alternates: {
        canonical: '/eventos'
    },
    openGraph: {
        title: 'Página de eventos',
        type: 'website',
        url: 'https://duobaoba.vercel.app/eventos',
        siteName: 'Duo Baobá',
        locale: 'pt_BR'
    },
}

export default async function Eventos() {

    const events = await getEvents()

    return (
        <main className='min-h-screen w-full flex flex-col gap-5 items-center justify-center py-20 text-primary-foreground'>
            <h2 className='text-4xl md:text-5xl tracking-[2px] md:tracking-8px font-bold py-5 md:py-10'>Eventos</h2>
            <div className='flex md:flex-row flex-wrap gap-5 items-stretch justify-center w-full'>
                {events.map((event, index) => <EventCard event={event} key={event.title + index} />)}
            </div>
        </main>
    )
}
