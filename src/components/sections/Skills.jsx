import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { skills, skillsCategories } from '../../data/skills';
import { cn } from '../../utils/cn';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/animations';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsCategories];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skill Arsenal" subtitle="Technical Proficiency" />

        {/* Filter Chips */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-sans font-bold transition-all duration-300 backdrop-blur-md border",
                activeCategory === category 
                  ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(124,58,237,0.5)]" 
                  : "bg-card text-secondary border-border hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={zoomIn(0, 0.5)}
                initial="hidden"
                animate="show"
                exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background text-primary group-hover:scale-110 group-hover:text-white group-hover:bg-primary transition-all duration-300">
                      <skill.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-syne font-bold text-lg">{skill.name}</h4>
                      <span className="text-xs text-secondary font-sans uppercase tracking-wider">{skill.category}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-secondary">Proficiency</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-neon-cyan rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse-glow" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
