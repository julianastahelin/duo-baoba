'use client'
import { motion } from 'framer-motion'


interface AnimatedParagraphProps extends React.ComponentProps<typeof motion.p> {
    children: React.ReactNode
    x?: number
    y?: number
    duration?: number
    delay?: number
}

export function AnimatedParagraph({
    children,
    x = 0,
    y = 0,
    duration = 0.8,
    delay = 1.6,
    ...props
}: AnimatedParagraphProps) {
    return (
        <motion.p
            initial={{ opacity: 0, x: x, y: y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: duration, delay: delay }}
            {...props}
        >
            {children}
        </motion.p>
    )
}
