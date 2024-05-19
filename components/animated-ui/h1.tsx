'use client'
import { motion } from 'framer-motion'


interface AnimatedH1Props extends React.ComponentProps<typeof motion.h1> {
    children: React.ReactNode
    x?: number
    y?: number
    duration?: number
    delay?: number
}

export function AnimatedH1({
    children,
    x = 0,
    y = 0,
    duration = 0.8,
    delay = 1.2,
    ...props
}: AnimatedH1Props) {
    return (
        <motion.h1
            initial={{ opacity: 0, x:x, y:y }}
            animate={{ opacity: 1, x:0, y:0 }}
            transition={{ duration: duration, delay: delay }}
            {...props}
        >
            {children}
        </motion.h1>
    )
}
