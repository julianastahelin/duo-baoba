'use client'
import { motion } from 'framer-motion'


interface AnimatedFooterProps extends React.ComponentProps<typeof motion.footer> {
    children: React.ReactNode
}

export function AnimatedFooter({ children, ...props }: AnimatedFooterProps) {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.footer>
    )
}
