import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { fadeIn, slideIn } from '../../utils/animations';
import profilePic from '../../assets/profile.jpeg';

const Stat = ({ label, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      const duration = 2000;
      const incrementTime = duration / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <span className="text-3xl font-syne font-bold text-primary mb-1">
        {count}{suffix}
      </span>
      <span className="text-xs font-sans text-secondary uppercase tracking-wider">{label}</span>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="The Narrative" />
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          
          {/* Avatar side */}
          <motion.div 
            variants={slideIn('left', 'tween', 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-5/12 flex justify-center relative"
          >
            {/* Glowing Ring Animation */}
            <div className="absolute inset-0 m-auto w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 border-dashed animate-rotate-border" />
            <div className="absolute inset-0 m-auto w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full border border-secondary/20 animate-rotate-border" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
            
            {/* Hexagon Avatar */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 p-2">
              <div 
                className="w-full h-full bg-card overflow-hidden relative"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay" />
                <img 
                  src={profilePic} 
                  alt="Rannesh" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Callout Card */}
            <motion.div 
              variants={fadeIn('up', 'tween', 0.6, 0.5)}
              className="absolute -bottom-6 -right-6 md:right-0 z-20"
            >
              <Card className="px-4 py-3 flex items-center gap-3 backdrop-blur-xl">
                <div className="relative w-3 h-3">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                  <span className="relative block w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-sm font-sans font-medium">Currently building AWS SDC website for My College</span>
              </Card>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            variants={slideIn('right', 'tween', 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h3 className="text-2xl md:text-3xl font-syne font-bold mb-6">
              Building intelligent <span className="text-primary">products</span>, not just writing code.
            </h3>
            
            <p className="text-secondary font-sans text-lg mb-6 leading-relaxed">
              I'm Rannesh Khumar, a Semester 4 Computer Science Engineering student at Rajalakshmi Engineering College. I'm deeply passionate about artificial intelligence, machine learning, and full-stack development—focusing on building practical products that solve real-world problems.
            </p>
            
            <p className="text-secondary font-sans text-lg mb-10 leading-relaxed">
              I believe that theoretical knowledge should always translate into tangible solutions. Whether I'm building AI-powered student applications, exploring complex datasets, or participating in fast-paced hackathons, my goal is to engineer scalable, impactful software.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border w-full">
              <Stat value="6+" label="Projects Built" />
              <Stat value="4+" label="Domains Explored" />
              <Stat value="2+" label="Years Programming" />
              <Stat value="100%" label="Constant Learning" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
