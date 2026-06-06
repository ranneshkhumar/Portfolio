import { motion, useScroll } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useCursorEffect } from '../../hooks/useCursorEffect';

export const Layout = ({ children }) => {
  const { position, isHovering } = useCursorEffect();
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(124, 58, 237, 0.2)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <motion.div 
          className="w-1 h-1 bg-primary rounded-full"
          animate={{ scale: isHovering ? 0 : 1 }}
        />
      </motion.div>

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
