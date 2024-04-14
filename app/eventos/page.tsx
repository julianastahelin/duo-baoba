import { EventCard } from '@/components/eventCard'
import { Event } from '@/types'

export default async function Eventos() {

    const events: Event[] = [
        {
            title: 'Duo Baobá “Choros, polcas, valsas, maxixes e sambas”',
            date: '15/09/2023',
            time: '19h',
            price: 'Entrada franca',
            midia: [
                {
                    title: 'Secart UFSC',
                    url: 'https://secarte.ufsc.br/projeto-igrejinha-musical-apresenta-duo-baoba-nesta-quinta-feira-1509/'
                },
                {
                    title: 'Notícias UFSC',
                    url: 'https://noticias.ufsc.br/2022/09/igrejinha-recebe-o-duo-baoba-com-repertorio-de-chorinho-na-quinta-15/'
                }
            ]
        }
    ]

    return (
        <main className='min-h-screen w-full flex flex-col gap-5 items-center justify-center py-20 text-primary-foreground'>
            <h2 className='text-4xl md:text-5xl tracking-[2px] md:tracking-8px font-bold py-5 md:py-10'>Eventos</h2>
            <div className='flex md:flex-row flex-wrap gap-5 items-center justify-center w-full'>
                {events.map((event, index) => <EventCard event={event} key={event.title + index} />)}
            </div>
        </main>
    )
}
