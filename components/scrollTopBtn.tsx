'use client'
import { ArrowUp } from 'lucide-react'


export function ScrollTopButton() {
    
    function isBrowser() {
        return typeof window !== 'undefined'
    }

    function scrollToTop() {
        if (!isBrowser()) return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className='fixed bottom-0 right-0 m-8 md:m-10 p-1 rounded-full bg-primary-foreground hover:scale-105 hover:opacity-90 transition-all shadow-md shadow-shadowColor'
        >
            <ArrowUp className='text-secondary-foreground w-6 h-6 2xl:w-8 2xl:h-8' />
        </button>
    )
}
