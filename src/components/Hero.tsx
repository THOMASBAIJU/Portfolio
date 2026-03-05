import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Database, Layout as LayoutIcon, ChevronDown, BookOpen, Cpu } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

/* ─── Glitch Text ─────────────────────────────────────────── */
const GlitchText = ({ text }: { text: string }) => {
    const [glitchedText, setGlitchedText] = useState(text);
    useEffect(() => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let interval: ReturnType<typeof setInterval>;
        const glitch = () => {
            let iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                setGlitchedText(
                    text.split('').map((_, idx) => {
                        if (idx < iteration) return text[idx];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('')
                );
                if (iteration >= text.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        };
        glitch();
        const randGlitch = setInterval(() => { if (Math.random() > 0.8) glitch(); }, 4000);
        return () => { clearInterval(interval); clearInterval(randGlitch); };
    }, [text]);
    return <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-cyan text-glow inline-block">{glitchedText}</span>;
};

/* ─── Typewriter ──────────────────────────────────────────── */
const roles = ['Full-Stack Engineer', 'AI / ML Developer', 'Python Specialist', 'Deep Learning Enthusiast'];
const Typewriter = () => {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorTimer = setInterval(() => setShowCursor(c => !c), 500);
        return () => clearInterval(cursorTimer);
    }, []);

    useEffect(() => {
        const current = roles[roleIdx];
        if (!deleting && displayed.length < current.length) {
            const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
            return () => clearTimeout(t);
        }
        if (!deleting && displayed.length === current.length) {
            const t = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(t);
        }
        if (deleting && displayed.length > 0) {
            const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
            return () => clearTimeout(t);
        }
        if (deleting && displayed.length === 0) {
            setDeleting(false);
            setRoleIdx((roleIdx + 1) % roles.length);
        }
    }, [displayed, deleting, roleIdx]);

    return (
        <span className="text-cyber-cyan font-mono font-medium">
            {displayed}
            <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </span>
    );
};

/* ─── Animated Counter ────────────────────────────────────── */
const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            let start = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                start += step;
                if (start >= target) { setCount(target); clearInterval(timer); }
                else setCount(start);
            }, 40);
        }, { threshold: 0.6 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return <span ref={ref}>{count}{suffix}</span>;
};



/* ─── Tech Badge Pills ────────────────────────────────────── */
const techBadges = [
    { label: 'Python', color: 'border-cyber-cyan/40 text-cyber-cyan' },
    { label: 'TensorFlow', color: 'border-cyber-magenta/40 text-cyber-magenta' },
    { label: 'React', color: 'border-cyber-blue/40 text-cyber-blue' },
    { label: 'Flask', color: 'border-cyber-green/40 text-cyber-green' },
    { label: 'MySQL', color: 'border-amber-400/40 text-amber-400' },
];

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center pt-24">

                {/* Badge */}
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                    <div className="inline-flex items-center mb-10 px-5 py-2 rounded-full border border-cyber-cyan/30 glass-card text-cyber-cyan text-xs sm:text-sm tracking-[0.18em] font-medium uppercase text-glow shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse mr-3" />
                        Full-Stack &amp; AI Engineer
                    </div>
                </motion.div>

                {/* Name */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-4">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none text-slate-100 uppercase">
                        <GlitchText text="THOMAS" />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-magenta via-white to-cyber-cyan text-glow inline-block mt-2 sm:mt-0">
                            BAIJU
                        </span>
                    </h1>
                </motion.div>

                {/* Typewriter */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mb-6 text-xl md:text-2xl min-h-[2rem]">
                    <Typewriter />
                </motion.div>

                {/* Tagline */}
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base md:text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                    Building intelligent, end-to-end digital products — from <span className="text-white font-medium">deep learning</span> pipelines to <span className="text-white font-medium">full-stack</span> web apps.
                </motion.p>

                {/* Tech badge pills */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {techBadges.map(b => (
                        <span key={b.label} className={`px-4 py-1.5 rounded-full glass-card border text-xs font-semibold tracking-widest uppercase ${b.color} shine-effect`}>
                            {b.label}
                        </span>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="#projects"
                        className="group relative px-9 py-4 bg-white text-cyber-slate font-bold text-sm uppercase tracking-widest hover:text-white hover:bg-transparent transition-all duration-300 border border-transparent hover:border-cyber-cyan shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Explore Projects
                            <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1hCc69bCUJgcWI1bEdqwdKl9N3dsokA-p"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-9 py-4 border border-cyber-cyan/40 text-cyber-cyan font-bold text-sm uppercase tracking-widest hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.05)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] flex items-center gap-3"
                    >
                        <Download size={17} className="group-hover:-translate-y-0.5 transition-transform" />
                        Download CV
                    </a>
                </motion.div>

                {/* Stat counters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.85 }}
                    className="grid grid-cols-3 gap-6 sm:gap-12"
                >
                    {[
                        { icon: Code, value: 3, suffix: '+', label: 'Projects Built' },
                        { icon: BookOpen, value: 2, suffix: '', label: 'Degrees' },
                        { icon: Cpu, value: 10, suffix: '+', label: 'Technologies' },
                    ].map(({ icon: Icon, value, suffix, label }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <Icon size={20} className="text-cyber-cyan/70 mb-1" />
                            <span className="text-3xl sm:text-4xl font-black text-white text-glow">
                                <AnimatedCounter target={value} suffix={suffix} />
                            </span>
                            <span className="text-slate-500 text-xs uppercase tracking-widest">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Floating icons */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }} className="mt-20 flex justify-center gap-14 text-slate-600">
                    {[
                        { Icon: Code, color: 'hover:text-cyber-cyan', delay: 0 },
                        { Icon: Database, color: 'hover:text-cyber-magenta', delay: 1 },
                        { Icon: LayoutIcon, color: 'hover:text-cyber-blue', delay: 2 },
                    ].map(({ Icon, color, delay }) => (
                        <motion.div key={delay} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}>
                            <Icon size={32} className={`${color} transition-colors duration-500 cursor-pointer`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-70">Scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <ChevronDown size={22} className="opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
