import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Github, Linkedin, Phone } from 'lucide-react';

const socialLinks = [
    {
        name: 'Github',
        icon: Github,
        href: 'https://github.com/THOMASBAIJU',
        color: 'hover:text-cyber-cyan hover:border-cyber-cyan'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/thomas-baiju/',
        color: 'hover:text-cyber-blue hover:border-cyber-blue'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        href: 'https://www.instagram.com/thoma_.5/?igshid=ZDdkNTZiNTM%3D',
        color: 'hover:text-cyber-magenta hover:border-cyber-magenta'
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 w-full overflow-hidden bg-transparent">
            {/* Immersive mesh glow specific to contact section */}
            <div className="absolute inset-0 bg-mesh-glow pointer-events-none opacity-50 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white uppercase">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">Connect</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Interested in collaborating or have an exciting project? I'm always open to discussing tech, development, and new opportunities.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 blur-3xl rounded-full pointer-events-none group-hover:bg-cyber-cyan/20 transition-all duration-700" />
                            <h3 className="text-3xl font-bold text-white mb-10 tracking-wide text-center">
                                Start a Conversation
                            </h3>

                            {/* Flex container ensuring elements align perfectly to their icon start */}
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col gap-8 w-fit">
                                    <div className="flex items-center gap-6 group/item cursor-pointer">
                                        <div className="p-4 bg-white/5 rounded-2xl text-cyber-cyan border border-white/5 group-hover/item:border-cyber-cyan/30 group-hover/item:bg-cyber-cyan/10 transition-all duration-300">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium tracking-wider mb-1">EMAIL ME AT</p>
                                            <a href="mailto:thomasbaiju02@gmail.com" className="block text-lg text-slate-100 font-bold hover:text-cyber-cyan transition-colors">
                                                thomasbaiju02@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group/item cursor-pointer">
                                        <div className="p-4 bg-white/5 rounded-2xl text-cyber-cyan border border-white/5 group-hover/item:border-cyber-cyan/30 group-hover/item:bg-cyber-cyan/10 transition-all duration-300">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium tracking-wider mb-1">CALL ME AT</p>
                                            <a href="tel:9605145925" className="block text-lg text-slate-100 font-bold hover:text-cyber-cyan transition-colors">
                                                +91-9605145925
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group/item cursor-pointer">
                                        <div className="p-4 bg-white/5 rounded-2xl text-cyber-magenta border border-white/5 group-hover/item:border-cyber-magenta/30 group-hover/item:bg-cyber-magenta/10 transition-all duration-300">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium tracking-wider mb-1">LOCATION</p>
                                            <p className="text-lg text-slate-100 font-bold">
                                                Ernakulam, Kerala
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col items-center">
                                <p className="text-sm text-slate-500 font-medium tracking-wider mb-6">SOCIAL ARCHIVES</p>
                                <div className="flex gap-6">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-white/5 rounded-full border border-white/5 text-slate-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                                            aria-label={link.name}
                                        >
                                            <link.icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
