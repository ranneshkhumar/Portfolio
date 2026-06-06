import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { staggerContainer, fadeIn } from '../../utils/animations';
import { FiCode, FiCpu, FiTerminal, FiZap } from 'react-icons/fi';

const items = [
  { title: "AI Campus Assistant", icon: FiCpu, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { title: "Full Stack Applications", icon: FiCode, color: "text-violet-400", bg: "bg-violet-500/10" },
  { title: "Machine Learning Projects", icon: FiTerminal, color: "text-orange-400", bg: "bg-orange-500/10" },
  { title: "Hackathon Ideas", icon: FiZap, color: "text-yellow-400", bg: "bg-yellow-500/10" }
];

export const CurrentlyBuilding = () => {
  return (
    <section id="currently-building" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle title="Currently Building" subtitle="Active Pursuits" />

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10"
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={fadeIn('up', 'tween', 0, 0.5)} className="h-full">
              <Card className="p-6 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group backdrop-blur-xl">
                <div className={`p-4 rounded-full ${item.bg} ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="font-syne font-bold text-lg">{item.title}</h3>
                
                {/* Ping dot to show active status */}
                <div className="mt-auto pt-6 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-sans text-secondary uppercase tracking-widest font-bold">In Progress</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
