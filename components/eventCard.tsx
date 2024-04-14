import Image from 'next/image'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Event } from '@/types'

import { MetadataCard } from './metadataCard'


export function EventCard({ event }: { event: Event }) {
    return (
        <Card className='border-2 border-primary-foreground flex flex-col sm:flex-row items-stretch w-4/5 sm:w-3/5 max-w-[500px]'>
            <Image src='/assets/img/evento-1.png' width={300} height={300} alt='Cartaz do evento' className='w-full sm:w-1/2' />
            <div>
                <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p><strong>Quando:</strong> {event.date}</p>
                    <p><strong>Horário: </strong> {event.time}</p>
                    <p><strong>Ingresso:</strong> {event.price}</p>
                </CardContent>
                {event.midia
                    ? <CardFooter>
                        <div><strong>Na mídia:</strong>
                            <ul>
                                {event.midia.map((item, index) => {
                                    return (
                                        <li key={item.title + index}>
                                            <HoverCard>
                                                <HoverCardTrigger href={item.url} target='_blank' className='underline hover:opacity-80'>
                                                    {item.title}
                                                </HoverCardTrigger>
                                                <HoverCardContent className='bg-primary'>
                                                    <MetadataCard url={item.url} title={item.title} />
                                                </HoverCardContent>
                                            </HoverCard>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </CardFooter>
                    : ''
                }
            </div>
        </Card>
    )
}
