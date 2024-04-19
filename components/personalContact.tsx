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

    const profileInstagramUsername = `@${profile.instagram.split('/')[3]}`
    const profilePhoneNumsOnly = profile.phone.split('').map(char => /^[0-9]*$/.test(char) ? char : '').join('')

    const profileContacts = [
        {
            type: 'Instagram',
            link: profile.instagram,
            title: profileInstagramUsername
        },
        {
            type: 'Whatsapp',
            link: `https://wa.me/55${profilePhoneNumsOnly}`,
            title: profile.phone
        },
        {
            type: 'Email',
            link: profile.email,
            title: profile.email
        }
    ]

    return (
        <div className='text-primary-foreground flex flex-col items-center justify-center gap-6 p-10 break-words'>
            <p className='text-center text-lg md:text-3xl tracking-[2px] md:tracking-[5px]'>Quer contratar {profile.name}? Entre em contato!</p>
            <ul className='flex flex-col gap-2 text-sm sm:text-base w-auto max-w-full'>
                {profileContacts.map((contact, index) => {
                    return (
                        <li key={contact.type + index}>
                            {
                                contact.type === 'Email'
                                    ? <a onClick={() => copyAddress(profile.email)} className='flex flex-wrap gap-1 items-center w-full hover:opacity-80 transition-all'>
                                        <Icon name={contact.type as IconName} className='w-7 h-7 md:w-8 md:h-8 fill-primary-foreground stroke-1 stroke-tertiary' />
                                        <span className='underline max-w-full'>{contact.title}</span>
                                    </a>
                                    : <a href={contact.link} target='_blank' className='flex flex-wrap gap-1 items-center w-full hover:opacity-80 transition-all'>
                                        <Icon name={contact.type as IconName} className='w-7 h-7 md:w-8 md:h-8 fill-primary-foreground' />
                                        <span className='underline max-w-full'>{contact.title}</span>
                                    </a>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
