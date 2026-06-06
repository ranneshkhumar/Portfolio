import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { timeline } from '../../data/timeline';
import { cn } from '../../utils/cn';
import { slideIn, zoomIn } from '../../utils/animations';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle title="The Journey" subtitle="Experience & Education" />

        <div className="relative max-w-4xl mx-auto pt-10">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0">
                
                {/* Center Node (Dot) */}
                <motion.div 
                  variants={zoomIn(0.2, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_15px_rgba(124,58,237,0.8)] z-10 hidden md:block"
                >
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                </motion.div>

                {/* Left / Right Side Card */}
                <motion.div 
                  variants={slideIn(isEven ? 'right' : 'left', 'tween', 0, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className={cn(
                    "w-full md:w-[45%] mb-8 md:mb-0",
                    !isEven && "md:order-last md:text-left",
                    isEven && "md:text-right"
                  )}
                >
                  <Card className="p-6 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-primary font-syne font-bold text-sm mb-2 block">{item.date}</span>
                    <h3 className="text-xl font-syne font-bold mb-1">{item.title}</h3>
                    <h4 className="text-secondary font-sans text-sm mb-4 uppercase tracking-wider">{item.subtitle}</h4>
                    <p className="text-secondary font-sans text-sm">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
