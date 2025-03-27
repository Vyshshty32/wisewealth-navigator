
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from '../ui/GlassCard';
import { Button } from "@/components/ui/button";
import { BarChart, ArrowRight, TrendingUp, AlertCircle } from 'lucide-react';

interface CapitalAdviceCardProps {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  timeFrame: 'short' | 'medium' | 'long';
  type: 'investment' | 'savings' | 'debt' | 'alert';
  action?: string;
  onAction?: () => void;
}

const CapitalAdviceCard: React.FC<CapitalAdviceCardProps> = ({
  id,
  title,
  description,
  impact,
  timeFrame,
  type,
  action,
  onAction
}) => {
  const getImpactColor = () => {
    switch (impact) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-primary';
      case 'low': return 'text-orange-500';
      default: return 'text-primary';
    }
  };
  
  const getTimeFrameText = () => {
    switch (timeFrame) {
      case 'short': return 'Short-term';
      case 'medium': return 'Medium-term';
      case 'long': return 'Long-term';
      default: return 'Undefined';
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case 'investment': return <TrendingUp className="h-5 w-5" />;
      case 'savings': return <BarChart className="h-5 w-5" />;
      case 'debt': return <ArrowRight className="h-5 w-5" />;
      case 'alert': return <AlertCircle className="h-5 w-5" />;
      default: return <BarChart className="h-5 w-5" />;
    }
  };
  
  return (
    <GlassCard 
      variant="bordered" 
      className="h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-2 rounded-full",
            type === 'investment' && 'bg-green-100',
            type === 'savings' && 'bg-blue-100',
            type === 'debt' && 'bg-orange-100',
            type === 'alert' && 'bg-red-100',
          )}>
            {getIcon()}
          </div>
          <div className="flex items-center">
            <span className={cn("text-xs font-medium", getImpactColor())}>
              {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
            </span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">
              {getTimeFrameText()}
            </span>
          </div>
        </div>
        
        <div className="mt-4 mb-auto">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        
        {action && (
          <Button 
            onClick={onAction}
            variant="outline" 
            className="mt-6 self-start btn-hover"
          >
            {action}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default CapitalAdviceCard;
