'use client'
import { motion } from 'framer-motion'


interface AnimatedHeader extends React.ComponentProps<typeof motion.header> {
    children: React.ReactNode 
}

export function AnimatedHeader({children, ...props}: AnimatedHeader) {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            {...props}
        >
            {children}
        </motion.header>
    )
}
