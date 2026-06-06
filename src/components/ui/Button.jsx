import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Button = ({ children, variant = 'filled', className, ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-sm font-syne font-bold tracking-wide transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    filled: "bg-primary text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] dark:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.8)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] hover:scale-105",
    ghost: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-105",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'filled' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
      )}
    </motion.button>
  );
};
