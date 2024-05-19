'use client'
import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from 'lucide-react'


export function ScrollTopButton() {

    const { scrollY } = useScroll()
    const [showBtn, setShowBtn] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 200) setShowBtn(true)
        else setShowBtn(false)
    })

    function isBrowser() {
        return typeof window !== 'undefined'
    }

    function scrollToTop() {
        if (!isBrowser()) return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (showBtn)
        return (
            <motion.button
                onClick={scrollToTop}
                className='fixed bottom-0 right-0 m-8 md:m-10 p-1 rounded-full bg-primary-foreground hover:scale-105 hover:opacity-90 transition-all shadow-md shadow-shadowColor'
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <ArrowUp className='text-secondary-foreground w-6 h-6 2xl:w-8 2xl:h-8' />
            </motion.button>
        )
}
