import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent text-slate-100 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">Me</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 font-light leading-relaxed">
                            <p>
                                Software Developer with robust expertise in Full-Stack Engineering and AI technologies. Skilled in architecting end-to-end solutions using Python (Flask), HTML/CSS, and MySQL, while leveraging Deep Learning and ML algorithms for advanced data processing.
                            </p>
                            <p>
                                Committed to writing efficient, object-oriented code and delivering user-centric software products.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 glass-card p-10 rounded-3xl border border-white/5"
                    >
                        <div className="relative pl-8 border-l border-white/10 group">
                            <span className="absolute left-[-17px] top-0 p-2 bg-cyber-black border border-cyber-cyan text-cyber-cyan rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                                <GraduationCap size={16} />
                            </span>
                            <h3 className="text-xl font-bold text-slate-100">Master of Computer Applications (MCA)</h3>
                            <p className="text-cyber-cyan text-sm mb-1 mt-1 font-medium">Aug 2024 - April 2026</p>
                            <p className="text-slate-400">Muthoot Institute of Technology and Science</p>
                            <p className="text-slate-500 text-sm mt-1">CGPA: 7.84</p>
                        </div>

                        <div className="relative pl-8 border-l border-white/10 group">
                            <span className="absolute left-[-17px] top-0 p-2 bg-cyber-black border border-cyber-magenta text-cyber-magenta rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(176,91,255,0.2)]">
                                <GraduationCap size={16} />
                            </span>
                            <h3 className="text-xl font-bold text-slate-100">Bachelor of Computer Applications (BCA)</h3>
                            <p className="text-cyber-magenta text-sm mb-1 mt-1 font-medium">2020 - 2023</p>
                            <p className="text-slate-400">Marygiri College of Arts and Science</p>
                            <p className="text-slate-500 text-sm mt-1">CGPA: 7.87</p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h3 className="text-2xl font-bold mb-6 text-slate-100 uppercase tracking-wide">Certifications</h3>
                            <div className="space-y-4">
                                <div className="p-4 border border-white/5 rounded-xl bg-white/5 shadow-sm hover:border-cyber-cyan/30 transition-all duration-300">
                                    <h4 className="font-bold text-slate-100">Introduction to Internet of Things</h4>
                                    <p className="text-slate-400 text-sm mt-1">IIT Kharagpur</p>
                                </div>
                                <div className="p-4 border border-white/5 rounded-xl bg-white/5 shadow-sm hover:border-cyber-cyan/30 transition-all duration-300">
                                    <h4 className="font-bold text-slate-100">Full-Stack Web Development Bootcamp</h4>
                                    <p className="text-slate-400 text-sm mt-1">Udemy</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
