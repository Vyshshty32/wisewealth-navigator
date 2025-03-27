
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'subtle';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-all duration-300',
          variant === 'default' && 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]',
          variant === 'bordered' && 'bg-white/80 backdrop-blur-sm border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)]',
          variant === 'subtle' && 'bg-white/60 backdrop-blur-sm',
          hoverEffect && 'hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] hover:translate-y-[-2px]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
