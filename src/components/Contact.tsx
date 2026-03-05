import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Github, Linkedin, Phone, CheckCircle2 } from 'lucide-react';

const socialLinks = [
    { name: 'Github', icon: Github, href: 'https://github.com/THOMASBAIJU', color: 'hover:text-cyber-cyan   hover:border-cyber-cyan' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/thomas-baiju/', color: 'hover:text-cyber-blue   hover:border-cyber-blue' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thoma_.5/?igshid=ZDdkNTZiNTM%3D', color: 'hover:text-cyber-magenta hover:border-cyber-magenta' },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative z-10 w-full overflow-hidden bg-transparent border-t border-white/5">
            {/* Mesh glow */}
            <div className="absolute inset-0 bg-mesh-glow pointer-events-none opacity-40 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white uppercase">
                        Let's{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">
                            Connect
                        </span>
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
                        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group card-hover-glow shine-effect">
                            {/* Decorative glow blob */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-cyber-cyan/10 blur-3xl rounded-full pointer-events-none group-hover:bg-cyber-cyan/20 transition-all duration-700" />

                            {/* ── Open to Opportunities badge ── */}
                            <div className="flex justify-center mb-8">
                                <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cyber-green/10 border border-cyber-green/30 pulse-badge">
                                    <CheckCircle2 size={16} className="text-cyber-green" />
                                    <span className="text-cyber-green text-sm font-bold tracking-wide text-glow-green">Open to Opportunities</span>
                                </div>
                            </div>

                            {/* Availability note */}
                            <p className="text-center text-slate-400 text-sm mb-10">
                                Available for full-time roles from{' '}
                                <span className="text-white font-semibold">June 2026</span>
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-8 tracking-wide text-center">
                                Start a Conversation
                            </h3>

                            {/* Contact items */}
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col gap-6 w-fit">
                                    {[
                                        {
                                            icon: Mail,
                                            label: 'EMAIL ME AT',
                                            href: 'mailto:thomasbaiju02@gmail.com',
                                            value: 'thomasbaiju02@gmail.com',
                                            color: 'text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5 group-hover/item:border-cyber-cyan/50 group-hover/item:bg-cyber-cyan/10',
                                        },
                                        {
                                            icon: Phone,
                                            label: 'CALL ME AT',
                                            href: 'tel:9605145925',
                                            value: '+91-9605145925',
                                            color: 'text-cyber-cyan border-cyber-cyan/20 bg-cyber-cyan/5 group-hover/item:border-cyber-cyan/50 group-hover/item:bg-cyber-cyan/10',
                                        },
                                        {
                                            icon: MapPin,
                                            label: 'LOCATION',
                                            href: null,
                                            value: 'Ernakulam, Kerala',
                                            color: 'text-cyber-magenta border-cyber-magenta/20 bg-cyber-magenta/5 group-hover/item:border-cyber-magenta/50 group-hover/item:bg-cyber-magenta/10',
                                        },
                                    ].map(({ icon: Icon, label, href, value, color }) => (
                                        <div key={label} className="flex items-center gap-5 group/item cursor-pointer">
                                            <div className={`p-4 rounded-2xl border transition-all duration-300 ${color}`}>
                                                <Icon size={22} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-bold tracking-[0.15em] mb-1">{label}</p>
                                                {href ? (
                                                    <a href={href} className="block text-base text-slate-100 font-bold hover:text-cyber-cyan transition-colors duration-200">
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <p className="text-base text-slate-100 font-bold">{value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center">
                                <p className="text-xs text-slate-500 font-bold tracking-[0.15em] mb-5 uppercase">Social Archives</p>
                                <div className="flex gap-5">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.name}
                                            className={`p-4 bg-white/5 rounded-full border border-white/5 text-slate-400 transition-all duration-300 hover:scale-110 ${link.color}`}
                                        >
                                            <link.icon size={22} />
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
