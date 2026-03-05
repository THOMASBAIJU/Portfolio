import type { ReactNode } from 'react';
import { Github, Linkedin, Mail, Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarBackground from './StarBackground';

interface LayoutProps {
    children: ReactNode;
}

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Layout({ children }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);

    /* Scroll-spy: highlight active nav link — throttled via rAF to avoid reflow jank */
    useEffect(() => {
        let rafId = 0;
        const handleScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 30);
                const sectionIds = ['hero', 'projects', 'skills', 'about', 'contact'];
                for (const id of [...sectionIds].reverse()) {
                    const el = document.getElementById(id);
                    if (el && window.scrollY >= el.offsetTop - 120) {
                        setActiveSection(id);
                        break;
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="min-h-screen bg-cyber-black text-slate-100 font-sans selection:bg-cyber-cyan selection:text-black relative">
            {/* Animated starfield background */}
            <StarBackground />

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-black/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Brand */}
                        <div className="flex-shrink-0">
                            <a href="#" className="text-xl font-black tracking-tighter text-white hover:opacity-90 transition-opacity duration-300">
                                THOMAS{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue animate-gradient-text">
                                    BAIJU
                                </span>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const sectionId = link.href.replace('#', '');
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`relative text-sm font-medium transition-all duration-300 px-1 py-2 group ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute -bottom-0.5 left-0 h-[2px] bg-cyber-cyan transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                        />
                                    </a>
                                );
                            })}

                            {/* Download CV */}
                            <a
                                href="https://drive.google.com/uc?export=download&id=1hCc69bCUJgcWI1bEdqwdKl9N3dsokA-p"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2 rounded-full border border-cyber-cyan/40 text-cyber-cyan text-xs font-bold uppercase tracking-widest hover:bg-cyber-cyan/10 hover:border-cyber-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                            >
                                <Download size={13} />
                                Download CV
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-400 hover:text-white focus:outline-none transition-colors p-1"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden glass-card border-t-0"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-400 hover:text-white block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1hCc69bCUJgcWI1bEdqwdKl9N3dsokA-p"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2.5 text-cyber-cyan text-sm font-bold hover:bg-cyber-cyan/10 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Download size={14} /> Download CV
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main className="pt-20 relative z-10 w-full overflow-hidden">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 glass-card border-x-0 border-b-0 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-black text-white mb-1 tracking-tighter">
                                THOMAS{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">BAIJU</span>
                            </h3>
                            <p className="text-slate-500 text-sm">Crafting intelligent digital experiences.</p>
                        </div>
                        <div className="flex space-x-5">
                            <a href="https://github.com/THOMASBAIJU" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/thomas-baiju/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors duration-300 hover:scale-110 transform">
                                <Linkedin size={22} />
                            </a>
                            <a href="mailto:thomasbaiju02@gmail.com" className="text-slate-400 hover:text-cyber-magenta transition-colors duration-300 hover:scale-110 transform">
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-slate-600 text-xs">
                        © {new Date().getFullYear()} Thomas Baiju. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
