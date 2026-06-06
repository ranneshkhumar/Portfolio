import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { certifications } from '../../data/certifications';
import { staggerContainer, fadeIn } from '../../utils/animations';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Credentials" subtitle="Continuous Learning" />

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={fadeIn('up', 'tween', 0, 0.5)}
              className="h-[280px] w-full perspective-1000 group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180"
                style={{ transformStyle: 'preserve-3d', transitionProperty: 'transform' }}
              >
                {/* Front */}
                <div 
                  className="absolute inset-0 w-full h-full glass-panel rounded-2xl p-6 flex flex-col justify-between overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Holographic Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out" />
                  
                  <div>
                    <div className="p-3 bg-primary/10 w-max rounded-lg mb-4 text-primary">
                      <FiAward size={24} />
                    </div>
                    <h3 className="font-syne font-bold text-lg mb-2">{cert.name}</h3>
                    <p className="text-secondary font-sans text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-sans font-bold text-primary">{cert.date}</span>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 w-full h-full glass-panel rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-primary/5 border-primary/30"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-sm font-sans text-secondary mb-2">Credential ID</p>
                  <p className="font-syne font-bold text-sm mb-6 truncate w-full">{cert.credentialId}</p>
                  
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full text-sm font-bold hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all"
                  >
                    Verify <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
