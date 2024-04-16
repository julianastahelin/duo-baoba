'use client'
import { useState } from 'react'
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'


export function Navbar() {
    const [open, setOpen] = useState<boolean>(false)
    
    return (
        <>
            <nav className='w-full bg-tertiary text-primary-foreground text-base md:text-lg absolute z-10 top-0 flex justify-center md:opacity-80'>
                <ul className={`
                flex flex-col md:flex-row flex-nowrap 
                h-full w-52 md:w-5/6 max-w-[1440px]
                px-20 py-14 md:py-3 md:justify-evenly items-center gap-7
                fixed md:static top-0 right-0
                text-tertiary md:text-inherit
                bg-primary-foreground md:bg-inherit
                transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 
                `}>
                    <li>
                        <Link href='/' className='hover:text-primary-foreground hover:bg-primary p-2 rounded-md' onClick={() => setOpen(!open)}>Início</Link>
                    </li>
                    <li>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='text-base md:text-lg font-normal'>Sobre nós</NavigationMenuTrigger>
                                    <NavigationMenuContent className='flex flex-col gap-2 text-lg bg-primary-foreground md:bg-tertiary bg-opacity-100 w-40 text-nowrap'>
                                        <NavigationMenuLink href='/sobre/mayara' className='hover:text-primary-foreground hover:bg-primary py-2 px-4 rounded-md' onClick={() => setOpen(!open)}>
                                            Mayara Araújo
                                        </NavigationMenuLink>
                                        <NavigationMenuLink href='/sobre/david' className='hover:text-primary-foreground hover:bg-primary py-2 px-4 rounded-md' onClick={() => setOpen(!open)}>
                                            David Cardona
                                        </NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </li>
                    <li>
                        <Link href='/contato' className='hover:text-primary-foreground hover:bg-primary p-2 rounded-md' onClick={() => setOpen(!open)}>Contato</Link>
                    </li>
                    <li>
                        <Link href='/eventos' className='hover:text-primary-foreground hover:bg-primary p-2 rounded-md' onClick={() => setOpen(!open)}>Eventos</Link>
                    </li>
                </ul>
            </nav>

            <div
                onClick={() => setOpen(!open)}
                className={`flex md:hidden flex-col flex-nowrap justify-around w-9 h-9 fixed top-4 right-5 z-20 hover:opacity-80 hover:cursor-pointer p-1 rounded-md ${open ? 'bg-inherit' : 'bg-primary'}`}
            >
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary rotate-45' : 'bg-primary-foreground rotate-0'}`} />
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary translate-x-full opacity-0' : 'bg-primary-foreground translate-x-0 opacity-100'}`} />
                <div className={`w-7 h-[2px] rounded-3xl transition-all duration-300 ease-linear origin-[1px] ${open ? 'bg-tertiary rotate-[-45deg]' : 'bg-primary-foreground rotate-0'}`} />
            </div>
        </>
    )
}
