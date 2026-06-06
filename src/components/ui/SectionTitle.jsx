import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { fadeIn } from '../../utils/animations';

export const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'tween', 0, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("mb-16 flex flex-col items-center text-center", className)}
    >
      {subtitle && (
        <span className="text-primary font-syne font-bold uppercase tracking-widest text-sm mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-glow relative inline-block">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 rounded-full" />
    </motion.div>
  );
};
