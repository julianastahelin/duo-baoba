'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fetchAndSetImageSrc } from '@/services/cloudfare'


interface AnimatedDivProps extends React.ComponentProps<typeof motion.div> {
    fileName?: string
    children?: React.ReactNode
    x?: number
    y?: number
    scale?: number
    delay?: number
    duration?: number
}

export function AnimatedDiv({
    fileName,
    children,
    x = 0,
    y = 0,
    scale = 1,
    duration = 0.5,
    delay = 0.3,
    ...props
}: AnimatedDivProps) {

    const [imageSrc, setImageSrc] = useState<string>()
    useEffect(() => {
        if (fileName) {
            fetchAndSetImageSrc(fileName, setImageSrc)
        }
    }, [fileName])
    
    return (
        <motion.div
            initial={{ opacity: 0, x: x, y: y, scale:scale }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale:1 }}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url(${imageSrc}` }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
