import { cn } from '../../utils/cn';

export const Badge = ({ children, color = 'primary', className }) => {
  const colorStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    cyan: "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/20",
    violet: "bg-[#7c3aed]/10 text-[#7c3aed] border-[#7c3aed]/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };

  return (
    <span className={cn(
      "px-3 py-1 text-xs font-bold font-sans rounded-full border backdrop-blur-md",
      colorStyles[color] || colorStyles.primary,
      className
    )}>
      {children}
    </span>
  );
};
