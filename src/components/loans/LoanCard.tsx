
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlassCard from '../ui/GlassCard';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface LoanFeature {
  name: string;
  included: boolean;
}

interface LoanDetailsProps {
  id: string;
  name: string;
  description: string;
  interestRate: string;
  term: string;
  maxAmount: string;
  minCreditScore: number;
  features: LoanFeature[];
  matchScore: number;
  lender: string;
}

const LoanCard: React.FC<LoanDetailsProps> = ({
  id,
  name,
  description,
  interestRate,
  term,
  maxAmount,
  minCreditScore,
  features,
  matchScore,
  lender
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleApply = () => {
    // In a real app, this would redirect to the loan application or lender's site
    toast.success("Starting application process for " + name);
  };

  return (
    <GlassCard 
      variant="bordered" 
      className={cn(
        "transition-all duration-500 overflow-hidden",
        expanded ? "md:h-auto" : "md:h-[180px]"
      )}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <Badge 
                variant="outline" 
                className={cn(
                  "bg-primary/10 font-medium",
                  matchScore >= 90 ? "text-green-600" : 
                  matchScore >= 70 ? "text-primary" : "text-orange-500"
                )}
              >
                {matchScore}% Match
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{description}</p>
          </div>
          
          <div className="flex flex-row md:flex-col items-center gap-2 py-2">
            <div className="text-center">
              <div className="text-xl font-semibold text-primary">{interestRate}</div>
              <div className="text-xs text-muted-foreground">Interest Rate</div>
            </div>
            <div className="hidden md:block h-4 w-px bg-border mx-2"></div>
            <div className="text-center">
              <div className="text-xl font-semibold">{term}</div>
              <div className="text-xs text-muted-foreground">Term</div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "transition-all duration-500 overflow-hidden",
          expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-[1000px]"
        )}>
          <div className="my-4 border-t border-b border-border py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Max Amount</div>
                <div className="font-medium">{maxAmount}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Min Credit Score</div>
                <div className="font-medium">{minCreditScore}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Lender</div>
                <div className="font-medium">{lender}</div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <div className="h-4 w-4 border border-muted-foreground rounded-full mr-2" />
                  )}
                  <span className={feature.included ? "text-sm" : "text-sm text-muted-foreground"}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="md:hidden"
          >
            <span className="mr-2">{expanded ? 'Show Less' : 'Show More'}</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
          
          <Button 
            onClick={handleApply}
            className="ml-auto btn-hover"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default LoanCard;
