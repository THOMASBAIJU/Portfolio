import { motion } from 'framer-motion';
import { Blocks, Braces, Code, Database, Server, Wrench } from 'lucide-react';

const skillCategories = [
    {
        category: 'Languages',
        icon: Braces,
        items: ['Java', 'Python', 'SQL', 'JavaScript'],
    },
    {
        category: 'Web Technologies',
        icon: Code,
        items: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS'],
    },
    {
        category: 'Frameworks & Libraries',
        icon: Blocks,
        items: ['Flask', 'TensorFlow (Keras)', 'Scikit-learn', 'XGBoost', 'Pandas', 'Librosa'],
    },
    {
        category: 'Databases',
        icon: Database,
        items: ['MySQL', 'MongoDB'],
    },
    {
        category: 'Tools',
        icon: Wrench,
        items: ['Git', 'GitHub', 'VS Code'],
    },
    {
        category: 'Soft Skills',
        icon: Server,
        items: ['Communication', 'Teamwork', 'Leadership', 'Adaptability', 'Time management'],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white uppercase">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-glow">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        A core foundation of technologies and interpersonal skills honed to build scalable intelligent applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="p-8 rounded-3xl glass-card border border-white/5 hover:border-cyber-cyan/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent group-hover:via-cyber-cyan/60 transition-all duration-500" />

                            <div className="flex items-center gap-5 mb-8">
                                <div className="p-4 bg-white/5 rounded-2xl text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-white transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                                    <skill.icon size={26} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wide">{skill.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-cyber-black/60 text-slate-300 text-sm font-medium rounded-xl border border-white/5 hover:border-cyber-cyan/50 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 shadow-inner"
                                    >
                                        {item}
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
