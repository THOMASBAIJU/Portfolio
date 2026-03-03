import type { ReactNode } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-cyber-black text-slate-100 font-sans selection:bg-cyber-cyan selection:text-black relative">
            {/* Global Immersive Background Mesh */}
            <div className="bg-mesh-glow fixed inset-0 z-0 pointer-events-none opacity-40" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-cyber-black/60 backdrop-blur-xl border-b border-white/5 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:text-glow transition-all duration-300">
                                THOMAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">BAIJU</span>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-400 hover:text-white hover:text-glow px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-400 hover:text-white focus:outline-none transition-colors"
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
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-slate-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
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
                            <h3 className="text-xl font-bold text-white mb-2">Thomas Baiju</h3>
                            <p className="text-slate-400 text-sm">Crafting high-end digital experiences.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://github.com/THOMASBAIJU" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/thomas-baiju/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors duration-300 hover:scale-110 transform">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:thomasbaiju02@gmail.com" className="text-slate-400 hover:text-cyber-magenta transition-colors duration-300 hover:scale-110 transform">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-slate-500 text-xs">
                        © {new Date().getFullYear()} Thomas Baiju. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
