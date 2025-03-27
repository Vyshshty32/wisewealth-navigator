
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import { toast } from "sonner";
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import CapitalAdviceCard from '@/components/capital/CapitalAdviceCard';

// Sample capital advice - in a real app this would come from an API
const sampleAdvice = [
  {
    id: "advice1",
    title: "Emergency Fund Allocation",
    description: "Consider increasing your emergency fund to cover 6 months of expenses. This provides security during financial uncertainties.",
    impact: "high" as const,
    timeFrame: "short" as const,
    type: "savings" as const,
    action: "Learn More"
  },
  {
    id: "advice2",
    title: "Debt Consolidation",
    description: "Consolidating your high-interest debts could save you money and simplify your monthly payments.",
    impact: "high" as const,
    timeFrame: "medium" as const,
    type: "debt" as const,
    action: "Explore Options"
  },
  {
    id: "advice3",
    title: "Retirement Contributions",
    description: "Increasing your retirement contributions by 3% could significantly impact your long-term financial security.",
    impact: "medium" as const,
    timeFrame: "long" as const,
    type: "investment" as const,
    action: "Simulate Impact"
  },
  {
    id: "advice4",
    title: "Diversify Investment Portfolio",
    description: "Your current portfolio shows high concentration in a single sector. Consider diversifying to reduce risk.",
    impact: "medium" as const,
    timeFrame: "long" as const,
    type: "investment" as const,
    action: "View Strategy"
  },
  {
    id: "advice5",
    title: "High Credit Card Utilization",
    description: "Your credit utilization is above recommended levels. Reducing this could improve your credit score.",
    impact: "medium" as const,
    timeFrame: "short" as const,
    type: "alert" as const,
    action: "See Plan"
  },
  {
    id: "advice6",
    title: "Tax-Advantaged Savings",
    description: "Consider maximizing contributions to tax-advantaged accounts to reduce your tax liability.",
    impact: "low" as const,
    timeFrame: "medium" as const,
    type: "savings" as const,
    action: "Calculate Savings"
  }
];

const CapitalManagement: React.FC = () => {
  const [hasProfile, setHasProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if a financial profile exists in localStorage
    const profile = localStorage.getItem('financialProfile');
    setHasProfile(!!profile);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleAdviceAction = (adviceId: string, action: string) => {
    // In a real app, this would navigate to detailed view or action page
    toast.info(`${action} for advice item: ${adviceId}`);
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 container-padding container">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="title-chip mx-auto">Capital Management</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Strategic Capital Management</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personalized recommendations to help you optimize your investments, savings, and debt management strategies.
            </p>
          </motion.div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse-subtle h-12 w-12 rounded-full bg-primary/30"></div>
          </div>
        ) : !hasProfile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Financial Profile Found</AlertTitle>
              <AlertDescription>
                To receive personalized capital management advice, you need to create your financial profile first.
              </AlertDescription>
            </Alert>
            
            <div className="text-center">
              <Button 
                onClick={() => navigate('/profile')}
                className="btn-hover"
              >
                Create Financial Profile
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sampleAdvice.map((advice) => (
              <motion.div key={advice.id} variants={item} className="h-full">
                <CapitalAdviceCard 
                  {...advice} 
                  onAction={() => handleAdviceAction(advice.id, advice.action || '')}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CapitalManagement;
