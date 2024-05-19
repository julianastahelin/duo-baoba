'use client'
import { motion } from 'framer-motion'


interface AnimatedSectionProps extends React.ComponentProps<typeof motion.section> {
    children: React.ReactNode
    index: number
}

export function AnimatedSection({ children, index, ...props }: AnimatedSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index / 6 }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.section>
    )
}