import { cn } from '../../utils/cn';

export const Card = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-2xl overflow-hidden relative group transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Subtle border glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/30 rounded-2xl" />
      {children}
    </div>
  );
};
