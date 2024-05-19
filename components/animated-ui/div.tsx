'use client'
import { motion } from 'framer-motion'


interface AnimatedDivProps extends React.ComponentProps<typeof motion.div> {
    children?: React.ReactNode
    x?: number
    y?: number
    scale?: number
    delay?: number
    duration?: number
}

export function AnimatedDiv({
    children,
    x = 0,
    y = 0,
    scale = 1,
    duration = 0.5,
    delay = 0.3,
    ...props
}: AnimatedDivProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: x, y: y, scale:scale }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale:1 }}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
