import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    semester: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    color: string;
    colSpan?: string;
}

const projects: Project[] = [
    {
        title: 'YCRY-AI Cry Translator',
        category: 'Deep Learning',
        semester: 'MCA Sem 4',
        description: 'A web-based AI parenting assistant predicting infant states (Hunger, Pain, Tiredness, Burping, Discomfort) by routing baby cries through a custom CNN model on audio spectrograms.',
        tech: ['Python', 'Flask', 'TensorFlow', 'Librosa', 'TailwindCSS'],
        link: 'https://ycry.onrender.com',
        color: 'from-cyber-magenta to-purple-600',
    },
    {
        title: 'Batsman Bowler Matchup Analysis',
        category: 'Machine Learning',
        semester: 'MCA Sem 3',
        description: 'A forecasting engine using XGBoost to predict cricket player performance and dismissal probability based on historical matchup data from real-time data inputs.',
        tech: ['Python', 'Flask', 'Scikit-learn', 'XGBoost', 'Pandas'],
        github: 'https://github.com/THOMASBAIJU/Batsman_Bowler_Matchup',
        color: 'from-cyber-blue to-cyan-500',
    },
    {
        title: 'College Voting System',
        category: 'Full-Stack Web',
        semester: 'BCA Final Year',
        description: 'A responsive digital voting platform employing secure CRUD mechanisms to manage election data through Flask and a robust automated MySQL database.',
        tech: ['HTML', 'CSS', 'Bootstrap', 'Flask', 'MySQL'],
        github: 'https://github.com/THOMASBAIJU/College_Voting_System',
        color: 'from-indigo-400 to-indigo-600',
    },
    {
        title: 'Explore Archives',
        category: 'GitHub',
        semester: '',
        description: 'Dive deeper into the repositories containing my open source contributions, tools, scripts, and full deployment experiments.',
        tech: ['Git', 'VS Code'],
        link: 'https://github.com/THOMASBAIJU',
        color: 'from-cyber-green to-emerald-600',
    }
];

export default function BentoGrid() {
    return (
        <section id="projects" className="py-20 relative z-10 w-full overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white uppercase">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue text-glow">Works</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        A curated selection of my interactive experiments, AI tooling, and high-performance digital systems.
                    </p>
                </motion.div>

                {/* Updated to grid-cols-1 md:grid-cols-2 to make exactly 4 grid blocks of identical size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(350px,auto)]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-3xl glass-card border border-white/5 p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="text-xs font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full bg-white/5 text-slate-300 group-hover:bg-cyber-cyan/10 group-hover:text-cyber-cyan group-hover:border-cyber-cyan/30 border border-transparent transition-all duration-500 shadow-sm">
                                            {project.category}
                                        </span>
                                        {project.semester && (
                                            <span className="text-xs text-slate-500 font-medium px-2 py-1">
                                                {project.semester}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-slate-300 backdrop-blur-sm border border-white/5 shadow-sm">
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-slate-300 backdrop-blur-sm border border-white/5 shadow-sm">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 group-hover:text-cyber-cyan transition-colors duration-500 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-500">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs text-slate-400 bg-cyber-black/50 px-3 py-1.5 rounded-md border border-white/5 shadow-inner">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
