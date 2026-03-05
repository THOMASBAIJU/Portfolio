import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    semester: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    color: string;
    accentColor: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: 'YCRY — AI Cry Translator',
        category: 'Deep Learning',
        semester: 'MCA Sem 4',
        description: 'A web-based AI parenting assistant predicting infant states (Hunger, Pain, Tiredness, Burping, Discomfort) by routing baby cries through a custom CNN model trained on audio spectrograms.',
        tech: ['Python', 'Flask', 'TensorFlow', 'Librosa', 'TailwindCSS'],
        link: 'https://ycry.onrender.com',
        color: 'from-cyber-magenta to-purple-600',
        accentColor: 'rgba(192,132,252,0.7)',
        featured: true,
    },
    {
        title: 'Batsman Bowler Matchup Analysis',
        category: 'Machine Learning',
        semester: 'MCA Sem 3',
        description: 'A forecasting engine using XGBoost to predict cricket player performance and dismissal probability based on historical matchup data.',
        tech: ['Python', 'Flask', 'Scikit-learn', 'XGBoost', 'Pandas'],
        github: 'https://github.com/THOMASBAIJU/Batsman_Bowler_Matchup',
        color: 'from-cyber-blue to-cyan-500',
        accentColor: 'rgba(59,130,246,0.7)',
    },
    {
        title: 'College Voting System',
        category: 'Full-Stack Web',
        semester: 'BCA Final Year',
        description: 'A responsive digital voting platform with secure CRUD mechanisms managing election data via Flask and an automated MySQL database.',
        tech: ['HTML', 'CSS', 'Bootstrap', 'Flask', 'MySQL'],
        github: 'https://github.com/THOMASBAIJU/College_Voting_System',
        color: 'from-indigo-400 to-indigo-600',
        accentColor: 'rgba(99,102,241,0.7)',
    },
    {
        title: 'Explore All Repositories',
        category: 'Open Source',
        semester: '',
        description: 'Dive into all open-source contributions, tools, scripts, and deployment experiments on GitHub.',
        tech: ['Git', 'GitHub', 'Open Source'],
        link: 'https://github.com/THOMASBAIJU',
        color: 'from-cyber-green to-emerald-600',
        accentColor: 'rgba(16,185,129,0.7)',
    },
];

export default function BentoGrid() {
    return (
        <section id="projects" className="py-24 relative z-10 w-full overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white uppercase">
                        Featured{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">
                            Works
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        A curated selection of AI tooling, intelligent systems, and full-stack digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(320px,auto)]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: index * 0.12 }}
                            className={`group relative overflow-hidden rounded-3xl glass-card border border-white/5 flex flex-col justify-between card-hover-glow shine-effect hover:border-white/15 transition-all duration-500 ${project.featured ? 'md:col-span-2 md:flex-row md:items-center' : ''}`}
                        >
                            {/* Color accent bar at top */}
                            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Hover glow blob */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 30% 30%, ${project.accentColor}, transparent 70%)` }}
                            />

                            {/* Content */}
                            <div className={`relative z-10 p-8 flex flex-col justify-between h-full ${project.featured ? 'md:w-2/3' : 'w-full'}`}>
                                {/* Header row */}
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-5 gap-4">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className={`text-xs font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full bg-white/5 text-slate-300 group-hover:bg-white/10 border border-transparent group-hover:border-white/10 transition-all duration-500`}>
                                            {project.category}
                                        </span>
                                        {project.semester && (
                                            <span className="text-xs text-slate-500 font-medium px-2 py-0.5">
                                                {project.semester}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-slate-300 border border-white/5 hover:border-transparent text-xs font-semibold tracking-wide"
                                            >
                                                <Github size={14} />
                                                <span className="hidden sm:inline">GitHub</span>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full transition-all duration-300 text-xs font-semibold tracking-wide shadow-lg hover:opacity-90 hover:scale-105`}
                                            >
                                                <ExternalLink size={14} />
                                                <span className="hidden sm:inline">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className={`font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-500 leading-tight ${project.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                                    {project.title}
                                    {project.featured && (
                                        <span className="ml-3 align-middle text-xs font-bold px-2 py-0.5 rounded-full bg-cyber-magenta/20 border border-cyber-magenta/40 text-cyber-magenta tracking-widest uppercase">
                                            Featured
                                        </span>
                                    )}
                                </h3>

                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-500">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-slate-400 bg-cyber-black/60 px-3 py-1.5 rounded-md border border-white/5 hover:border-white/15 hover:text-slate-200 transition-all duration-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Featured decorative side panel — clickable link */}
                            {project.featured && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden md:flex md:w-1/3 items-center justify-center p-8 cursor-pointer"
                                >
                                    <div className={`w-36 h-36 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-2xl`} />
                                    <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700`} />
                                    <div className="absolute flex flex-col items-center gap-2 text-white">
                                        <ArrowRight size={30} className="opacity-60 group-hover:translate-x-2 transition-transform duration-500" />
                                        <span className="text-xs font-bold tracking-widest uppercase opacity-60">View Live</span>
                                    </div>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
