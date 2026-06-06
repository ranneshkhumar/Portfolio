import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';
import { cn } from '../../utils/cn';
import { staggerContainer, slideIn } from '../../utils/animations';

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * -15); // max 15 deg tilt
    setRotateY(xPct * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className={cn("h-full w-full", className)}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const getCategoryColor = (category) => {
    if (category === 'AI') return 'cyan';
    if (category === 'Frontend') return 'violet';
    if (category === 'Backend') return 'orange';
    return 'primary';
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle title="Featured Work" subtitle="Selected Projects" />

        <motion.div 
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={slideIn('up', 'tween', 0, 0.6)}
              className={cn(
                project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
              )}
            >
              <TiltCard>
                <Card className="h-full flex flex-col group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Thumbnail Placeholder */}
                  <div className="h-48 w-full bg-background/50 border-b border-border relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
                    {project.image && (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm">
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full hover:bg-primary hover:text-white transition-colors">
                          <FiGithub size={20} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full hover:bg-primary hover:text-white transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge color={getCategoryColor(project.category)}>{project.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-syne font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-secondary font-sans text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex-grow space-y-3 mb-6">
                      <div>
                        <span className="font-syne font-bold text-xs text-primary block mb-1 uppercase tracking-wider">Problem</span>
                        <span className="font-sans text-xs text-secondary leading-relaxed">{project.problem}</span>
                      </div>
                      <div>
                        <span className="font-syne font-bold text-xs text-primary block mb-1 uppercase tracking-wider">Solution</span>
                        <span className="font-sans text-xs text-secondary leading-relaxed">{project.solution}</span>
                      </div>
                      <div>
                        <span className="font-syne font-bold text-xs text-primary block mb-1 uppercase tracking-wider">Features</span>
                        <span className="font-sans text-xs text-secondary leading-relaxed">{project.features?.join(' • ')}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-sans font-medium text-secondary bg-background px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="ghost">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};
