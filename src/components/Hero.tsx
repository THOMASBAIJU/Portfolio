import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout as LayoutIcon, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

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
}

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
            {/* The background is handled in Layout.tsx with the mesh-glow */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center pt-24">

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    <div className="inline-block mb-12 px-6 py-2 rounded-full border border-cyber-cyan/30 glass-card text-cyber-cyan text-xs sm:text-sm tracking-[0.2em] font-medium uppercase text-glow shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyber-cyan animate-pulse mr-3 align-middle"></span>
                        Full-Stack & AI Engineer
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-4 leading-none text-slate-100 uppercase">
                        <GlitchText text="THOMAS" />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-magenta via-white to-cyber-cyan text-glow inline-block mt-4 sm:mt-0">
                            BAIJU
                        </span>
                    </h1>
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                    Software Developer with robust expertise in <span className="text-white font-medium">Full-Stack Engineering</span> and <span className="text-white font-medium">AI technologies</span>.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#projects" className="group relative px-10 py-5 bg-white text-cyber-slate font-bold text-sm uppercase tracking-widest hover:text-white hover:bg-transparent transition-all duration-300 border border-transparent hover:border-cyber-cyan shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore Projects
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </span>
                    </a>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-32 flex justify-center gap-16 text-slate-600">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <Code size={36} className="hover:text-cyber-cyan transition-colors duration-500 cursor-pointer" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                        <Database size={36} className="hover:text-cyber-magenta transition-colors duration-500 cursor-pointer" />
                    </motion.div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                        <LayoutIcon size={36} className="hover:text-cyber-blue transition-colors duration-500 cursor-pointer" />
                    </motion.div>
                </motion.div>

            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-glow opacity-80">Scroll down</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <ChevronDown size={24} className="opacity-60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
