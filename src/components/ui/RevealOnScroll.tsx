
import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function RevealOnScroll({ children, className = "", id, delay = 0 }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <section ref={ref} id={id} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </section>
    );
}
