import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/* ── Scroll Progress Bar (thin glowing line at top) ─────────── */
export function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let rafId = 0;
        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const el = document.documentElement;
                const scrolled = el.scrollTop;
                const total = el.scrollHeight - el.clientHeight;
                setProgress(total > 0 ? (scrolled / total) * 100 : 0);
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-[100] h-[2px] transition-none pointer-events-none"
            style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #22d3ee, #c084fc, #3b82f6)',
                boxShadow: '0 0 8px rgba(34,211,238,0.8)',
            }}
            aria-hidden="true"
        />
    );
}

/* ── Back to Top Button ──────────────────────────────────────── */
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let rafId = 0;
        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => setVisible(window.scrollY > 400));
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollUp}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full glass-card border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/15 hover:border-cyber-cyan/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 group"
                >
                    <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
