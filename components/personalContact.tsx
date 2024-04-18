'use client'
import { useToast } from '@/components/ui/use-toast'
import { Profile } from '@/types'

import { Icon, IconName } from './icons'


export function PersonalContact({ profile }: { profile: Profile }) {
    const { toast } = useToast()
    
    function copyAddress(address: string) {
        navigator.clipboard.writeText(address)
        toast({
            description: 'Copiado para a área de transferência',
            className: 'bg-primary-foreground text-tertiary-foreground',
        })
    }
    
    return (
        <div className='text-primary-foreground flex flex-col items-center justify-center gap-6 p-10 break-words'>
            <p className='text-center text-lg md:text-3xl tracking-[2px] md:tracking-[5px]'>Quer contratar {profile.name}? Entre em contato!</p>
            <ul className='flex flex-col gap-2 text-sm sm:text-base w-auto max-w-full'>
                <li>
                    <a href={profile.instagram} target='_blank' className='flex flex-wrap gap-1 items-center w-full'>
                        <Icon name={'Instagram' as IconName} className='w-7 h-7 md:w-8 md:h-8 fill-primary-foreground' />
                        <span className='underline max-w-full'>@{profile.instagram.split('/')[3]}</span>
                    </a>
                </li>
                <li>
                    <a href={`tel:+55${profile.phone}`} target='_blank' className='flex flex-wrap gap-1 items-center w-full'>
                        <Icon name={'Whatsapp' as IconName} className='w-7 h-7 md:w-8 md:h-8 fill-primary-foreground stroke-1' />
                        <span className='underline max-w-full'>{profile.phone}</span>
                    </a>
                </li>
                <li>
                    <button onClick={() => copyAddress(profile.email)} className='flex flex-wrap gap-1 items-center w-full'>
                        <Icon name={'Email' as IconName} className='w-7 h-7 md:w-8 md:h-8 stroke-1 fill-primary-foreground stroke-tertiary' />
                        <span className='underline max-w-full'>{profile.email}</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
