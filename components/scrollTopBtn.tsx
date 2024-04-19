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
            className='fixed bottom-0 right-0 m-5 md:m-10 p-1 rounded-full bg-primary-foreground hover:scale-105 hover:opacity-90 transition-all shadow-md shadow-shadowColor'
        >
            <ArrowUp className='text-secondary-foreground w-5 h-5 lg:w-6 lg:h-6' />
        </button>
    )
}
