import { motion } from 'framer-motion';
import { Blocks, Braces, Code, Database, Users, Wrench, Zap } from 'lucide-react';

/* Proficiency levels 0–5 */
const skillCategories = [
    {
        category: 'Languages',
        icon: Braces,
        dotColor: '#22d3ee',
        iconBg: 'bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-white',
        topBar: 'via-cyber-cyan/60',
        items: [
            { name: 'Python', level: 5 },
            { name: 'Java', level: 4 },
            { name: 'SQL', level: 4 },
            { name: 'JavaScript', level: 3 },
        ],
    },
    {
        category: 'Web Technologies',
        icon: Code,
        dotColor: '#3b82f6',
        iconBg: 'bg-cyber-blue/10 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white',
        topBar: 'via-cyber-blue/60',
        items: [
            { name: 'HTML', level: 5 },
            { name: 'CSS', level: 4 },
            { name: 'Bootstrap', level: 4 },
            { name: 'TailwindCSS', level: 4 },
        ],
    },
    {
        category: 'Frameworks & Libraries',
        icon: Blocks,
        dotColor: '#c084fc',
        iconBg: 'bg-cyber-magenta/10 text-cyber-magenta group-hover:bg-cyber-magenta group-hover:text-white',
        topBar: 'via-cyber-magenta/60',
        items: [
            { name: 'Flask', level: 5 },
            { name: 'TensorFlow (Keras)', level: 4 },
            { name: 'Scikit-learn', level: 4 },
            { name: 'XGBoost', level: 3 },
            { name: 'Pandas', level: 4 },
            { name: 'Librosa', level: 3 },
        ],
    },
    {
        category: 'Databases',
        icon: Database,
        dotColor: '#f59e0b',
        iconBg: 'bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black',
        topBar: 'via-amber-400/60',
        items: [
            { name: 'MySQL', level: 5 },
            { name: 'MongoDB', level: 3 },
        ],
    },
    {
        category: 'Dev Tools',
        icon: Wrench,
        dotColor: '#10b981',
        iconBg: 'bg-cyber-green/10 text-cyber-green group-hover:bg-cyber-green group-hover:text-white',
        topBar: 'via-cyber-green/60',
        items: [
            { name: 'Git', level: 5 },
            { name: 'GitHub', level: 5 },
            { name: 'VS Code', level: 5 },
        ],
    },
    {
        category: 'Soft Skills',
        icon: Users,
        dotColor: '#818cf8',
        iconBg: 'bg-indigo-400/10 text-indigo-400 group-hover:bg-indigo-400 group-hover:text-white',
        topBar: 'via-indigo-400/60',
        items: [
            { name: 'Communication', level: 5 },
            { name: 'Teamwork', level: 5 },
            { name: 'Leadership', level: 4 },
            { name: 'Adaptability', level: 5 },
            { name: 'Time Management', level: 4 },
        ],
    },
];

/* Proficiency dots — uses inline style so any hex color works reliably */
const ProficiencyDots = ({ level, dotColor }: { level: number; dotColor: string }) => (
    <span className="flex gap-0.5 ml-auto shrink-0">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
                key={i}
                className="inline-block w-1.5 h-1.5 rounded-full transition-colors duration-300"
                style={{ background: i < level ? dotColor : 'rgba(255,255,255,0.1)' }}
            />
        ))}
    </span>
);

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white uppercase">
                        Technical{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-magenta text-glow">
                            Expertise
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        A core foundation honed for building scalable, intelligent, production-ready applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="p-7 rounded-3xl glass-card border border-white/5 hover:border-white/15 transition-all duration-500 group relative overflow-hidden card-hover-glow shine-effect"
                        >
                            {/* Accent top bar */}
                            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${skill.topBar} to-transparent group-hover:h-[3px] transition-all duration-500`} />

                            {/* Icon + Category */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3.5 rounded-2xl transition-all duration-500 ${skill.iconBg} shadow-[0_4px_20px_rgba(0,0,0,0.2)]`}>
                                    <skill.icon size={22} />
                                </div>
                                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">{skill.category}</h3>
                            </div>

                            {/* Skill items with proficiency dots */}
                            <div className="flex flex-col gap-2.5">
                                {skill.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-3 px-3.5 py-2.5 bg-cyber-black/50 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-250 group/item"
                                    >
                                        <span className="text-sm text-slate-300 font-medium group-hover/item:text-white transition-colors duration-200 flex-1">
                                            {item.name}
                                        </span>
                                        <ProficiencyDots level={item.level} dotColor={skill.dotColor} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Currently Learning row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8 p-5 rounded-2xl border border-cyber-green/20 bg-cyber-green/5 flex flex-col sm:flex-row items-center gap-4"
                >
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green" />
                        </span>
                        <span className="text-cyber-green text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Zap size={14} /> Currently Learning
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['TypeScript', 'React', 'Docker', 'FastAPI'].map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-cyber-green/10 border border-cyber-green/25 text-cyber-green text-xs font-semibold tracking-wide">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
