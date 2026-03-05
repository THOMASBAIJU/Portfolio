import { motion } from 'framer-motion';
import { GraduationCap, Award, BarChart2, FolderOpen, CalendarDays, BookOpen } from 'lucide-react';

const stats = [
    { icon: BarChart2, value: '7.84', label: 'MCA CGPA' },
    { icon: FolderOpen, value: '3+', label: 'Projects' },
    { icon: CalendarDays, value: '6+', label: 'Yrs in CS' },
    { icon: BookOpen, value: '2', label: 'Certs' },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-transparent text-slate-100 relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── Section heading ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">
                            Me
                        </span>
                    </h2>
                    <p className="text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                        Software Developer with robust expertise in Full-Stack Engineering and AI technologies.
                        Building scalable, intelligent digital products — one commit at a time.
                    </p>
                </motion.div>

                {/* ─── Stats strip ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div
                            key={label}
                            className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyber-cyan/30 transition-all duration-400 flex flex-col items-center gap-2 text-center card-hover-glow"
                        >
                            <Icon size={22} className="text-cyber-cyan/70" />
                            <span className="text-3xl font-black text-white text-glow">{value}</span>
                            <span className="text-slate-500 text-xs uppercase tracking-widest">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ─── Education + Certifications ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Education timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 space-y-8"
                    >
                        <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <GraduationCap size={20} className="text-cyber-cyan" /> Education
                        </h3>

                        {[
                            {
                                degree: 'Master of Computer Applications (MCA)',
                                period: 'Aug 2024 – Apr 2026',
                                institute: 'Muthoot Institute of Technology and Science',
                                cgpa: '7.84',
                                color: 'cyber-cyan',
                            },
                            {
                                degree: 'Bachelor of Computer Applications (BCA)',
                                period: '2020 – 2023',
                                institute: 'Marygiri College of Arts and Science',
                                cgpa: '7.87',
                                color: 'cyber-magenta',
                            },
                        ].map((edu) => (
                            <div
                                key={edu.degree}
                                className={`relative pl-8 border-l border-white/10 group hover:border-${edu.color}/40 transition-all duration-400`}
                            >
                                <span
                                    className={`absolute left-[-17px] top-0 p-2 bg-cyber-black border border-${edu.color} text-${edu.color} rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]`}
                                >
                                    <GraduationCap size={15} />
                                </span>
                                <h4 className="text-base font-bold text-slate-100 leading-snug">{edu.degree}</h4>
                                <p className={`text-${edu.color} text-sm mb-1 mt-1 font-medium`}>{edu.period}</p>
                                <p className="text-slate-400 text-sm">{edu.institute}</p>
                                <span className={`inline-block mt-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-${edu.color}/10 border border-${edu.color}/25 text-${edu.color} tracking-wide`}>
                                    CGPA {edu.cgpa}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 md:p-10 rounded-3xl border border-white/5"
                    >
                        <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Award size={20} className="text-cyber-magenta" /> Certifications
                        </h3>

                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Introduction to Internet of Things',
                                    issuer: 'IIT Kharagpur · NPTEL',
                                    badge: 'bg-orange-400/10 border-orange-400/25 text-orange-400',
                                    label: 'Verified',
                                },
                                {
                                    title: 'Full-Stack Web Development Bootcamp',
                                    issuer: 'Udemy',
                                    badge: 'bg-purple-400/10 border-purple-400/25 text-purple-400',
                                    label: 'Completed',
                                },
                            ].map((cert) => (
                                <div
                                    key={cert.title}
                                    className="p-5 border border-white/5 rounded-2xl bg-white/[0.03] hover:border-cyber-cyan/30 hover:bg-white/5 transition-all duration-300 card-hover-glow group"
                                >
                                    <div className="flex items-start justify-between gap-3 mb-1">
                                        <h4 className="font-bold text-slate-100 text-sm leading-snug group-hover:text-white transition-colors">
                                            {cert.title}
                                        </h4>
                                        <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border ${cert.badge} tracking-widest uppercase`}>
                                            {cert.label}
                                        </span>
                                    </div>
                                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                                </div>
                            ))}
                        </div>

                        {/* Small "Open to connections" note */}
                        <div className="mt-8 pt-6 border-t border-white/5 text-slate-500 text-xs leading-relaxed">
                            📍 Currently based in <span className="text-slate-300 font-medium">Ernakulam, Kerala</span>.
                            Actively expanding my skill-set and open to new challenges.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
