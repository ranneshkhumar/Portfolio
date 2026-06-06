import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { SiReact, SiTensorflow, SiPytorch } from 'react-icons/si';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/animations';

const roles = ["AI Systems Builder", "Full & Mern Stack Developer", "Hackathon Enthusiast", "Problem Solver"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const role = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(role.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Floating Badges */}
      <motion.div 
        className="absolute top-1/4 left-10 md:left-1/4 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Badge color="cyan" className="flex items-center gap-2 px-4 py-2 text-sm shadow-lg shadow-cyan-500/20">
          <SiReact /> React
        </Badge>
      </motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-10 md:right-1/4 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Badge color="violet" className="flex items-center gap-2 px-4 py-2 text-sm shadow-lg shadow-violet-500/20">
          <SiPytorch /> PyTorch
        </Badge>
      </motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Badge color="orange" className="flex items-center gap-2 px-4 py-2 text-sm shadow-lg shadow-orange-500/20">
          <SiTensorflow /> TensorFlow
        </Badge>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeIn('down', 'spring', 0, 1)}>
            <Badge color="primary" className="mb-6">Rannesh Portfolio</Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn('up', 'tween', 0.2, 0.8)}
            className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold tracking-tighter mb-4"
          >
            Hi, I'm <span className="shimmer-text">Rannesh Khumar</span>
          </motion.h1>
          
          <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 0.8)}
            className="text-xl md:text-2xl lg:text-3xl font-sans text-secondary font-medium h-12 mb-8 flex items-center justify-center gap-2"
          >
            I am a(n) <span className="text-primary font-bold">{text}</span>
            <span className="w-1 h-6 bg-primary animate-pulse" />
          </motion.div>
          
          <motion.p 
            variants={fadeIn('up', 'tween', 0.6, 0.8)}
            className="max-w-2xl text-secondary text-lg mb-12 font-sans"
          >
            Computer Science Engineering student at Rajalakshmi Engineering College. Passionate about building practical AI and web applications that solve real-world problems.
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 'tween', 0.8, 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <Button variant="filled">View My Work</Button>
            </Link>
            <a href="/Rannesh_Resume.pdf" download="Rannesh_Resume.pdf">
              <Button variant="ghost">Download Resume</Button>
            </a>
            <a href="/Rannesh Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">View Resume</Button>
            </a>
          </motion.div>
          
          <motion.div 
            variants={zoomIn(1, 0.5)}
            className="flex items-center gap-6"
          >
            {[
              { icon: FiGithub, href: "https://github.com/ranneshkhumar" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/rannesh-khumar-b-r-507377289/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzD0kZhMARVizQ2YE664gpw%3D%3D" },
              { icon: FiMail, href: "mailto:rannesh.br@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link to="about" smooth={true} offset={-80} duration={500} className="cursor-pointer text-secondary hover:text-primary transition-colors">
          <FiChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};
