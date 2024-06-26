'use client'
import { ArrowDownToLine, Copy } from 'lucide-react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useToast } from '@/components/ui/use-toast'
import { SocialMedia } from '@/types'

import { Icon, IconName } from './icons'


export function SocialMedias({ socialMedias }: { socialMedias: SocialMedia[] }) {
    const { toast } = useToast()

    const pressKit = socialMedias.find((item) => item.title === 'Press kit')
    const socialMediasFiltered = socialMedias.filter((item) => item.title !== 'Press kit')

    function copyAddress(address: string) {
        navigator.clipboard.writeText(address)
        toast({
            description: 'Copiado para a área de transferência',
            className: 'bg-primary-foreground text-tertiary-foreground',
        })
    }

    return (
        <div className='flex flex-col gap-4 items-center pb-6'>
            <ul className='flex gap-5 items-center'>
                {
                    socialMediasFiltered.map((media, index) => {
                        return (
                            <li key={media.title + index} className='hover:scale-105 transition-all'>
                                {
                                    media.title === 'Email'
                                        ? <TooltipProvider delayDuration={400}>
                                            <Tooltip>
                                                <TooltipTrigger onClick={() => copyAddress(media.link)} className='flex items-center'>
                                                    <Icon name={media.title as IconName} className='w-8 h-8 md:w-10 md:h-10 stroke-1 fill-primary-foreground stroke-tertiary' />
                                                </TooltipTrigger>
                                                <TooltipContent className='bg-primary-foreground text-tertiary-foreground border-none shadow-sm'>
                                                    <button onClick={() => copyAddress(media.link)} className='flex gap-2 items-center'>
                                                        {media.link}
                                                        <Copy className='h-4 w-4' />
                                                    </button>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        : <a href={media.link} target='_blank'>
                                            <Icon name={media.title as IconName} className='w-8 h-8 md:w-10 md:h-10 fill-primary-foreground stroke-1' />
                                        </a>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <a href={`../assets/pdf/${pressKit?.link}.pdf`} target='_blank' className='py-1 px-4 rounded-full border-primary-foreground border-[1.5px] text-xs md:text-sm flex gap-2 items-center justify-center hover:cursor-pointer hover:scale-105 transition-all'>
                {pressKit?.title}
                <ArrowDownToLine className='w-4 h-4 md:w-5 md:h-5' strokeWidth={2.5} />
            </a>
        </div>
    )
}
