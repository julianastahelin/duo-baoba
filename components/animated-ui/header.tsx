'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fetchAndSetImageSrc } from '@/services/cloudfare'


interface AnimatedHeader extends React.ComponentProps<typeof motion.header> {
    className: string
    children: React.ReactNode
    fileName?: string
}

export function AnimatedHeader({ className, children, fileName, ...props }: AnimatedHeader) {
    const [imageSrc, setImageSrc] = useState<string>()

    useEffect(() => {
        if (fileName) {
            fetchAndSetImageSrc(fileName, setImageSrc)
        }
    }, [fileName])
    
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ '--image-url': `url(${imageSrc})` } as React.CSSProperties}
            className={`md:bg-[image:var(--image-url)] ${className}`}
            {...props}
        >
            {children}
        </motion.header>
    )
}
