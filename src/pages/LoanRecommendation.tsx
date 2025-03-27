
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import LoanCard from '@/components/loans/LoanCard';

// Sample loan data - in a real app this would come from an API
const sampleLoans = [
  {
    id: "loan1",
    name: "Business Expansion Loan",
    description: "Ideal for expanding your existing business with competitive rates and flexible terms.",
    interestRate: "5.25%",
    term: "3-7 years",
    maxAmount: "$500,000",
    minCreditScore: 680,
    matchScore: 95,
    lender: "First Capital Bank",
    features: [
      { name: "No early repayment fees", included: true },
      { name: "Fixed interest rate", included: true },
      { name: "Online application", included: true },
      { name: "Deferred payments", included: false },
      { name: "Interest-only periods", included: true },
      { name: "Equipment collateral", included: false },
    ]
  },
  {
    id: "loan2",
    name: "Small Business Startup Loan",
    description: "For new businesses with special terms for startups with limited operating history.",
    interestRate: "6.75%",
    term: "5-10 years",
    maxAmount: "$250,000",
    minCreditScore: 650,
    matchScore: 85,
    lender: "Innovation Credit Union",
    features: [
      { name: "No early repayment fees", included: true },
      { name: "Fixed interest rate", included: true },
      { name: "Online application", included: true },
      { name: "Deferred payments", included: true },
      { name: "Interest-only periods", included: false },
      { name: "Equipment collateral", included: false },
    ]
  },
  {
    id: "loan3",
    name: "Equipment Financing",
    description: "Specifically designed for purchasing business equipment with the equipment as collateral.",
    interestRate: "4.99%",
    term: "2-5 years",
    maxAmount: "$150,000",
    minCreditScore: 620,
    matchScore: 78,
    lender: "Equipment Finance Partners",
    features: [
      { name: "No early repayment fees", included: false },
      { name: "Fixed interest rate", included: true },
      { name: "Online application", included: true },
      { name: "Deferred payments", included: false },
      { name: "Interest-only periods", included: false },
      { name: "Equipment collateral", included: true },
    ]
  },
  {
    id: "loan4",
    name: "Working Capital Line of Credit",
    description: "Flexible revolving credit for managing cash flow and day-to-day operations.",
    interestRate: "7.50%",
    term: "Revolving",
    maxAmount: "$100,000",
    minCreditScore: 660,
    matchScore: 72,
    lender: "Business Capital",
    features: [
      { name: "No early repayment fees", included: true },
      { name: "Fixed interest rate", included: false },
      { name: "Online application", included: true },
      { name: "Deferred payments", included: false },
      { name: "Interest-only periods", included: true },
      { name: "Equipment collateral", included: false },
    ]
  }
];

const LoanRecommendation: React.FC = () => {
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
            <div className="title-chip mx-auto">Loan Advisory</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Personalized Loan Recommendations</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on your financial profile, these loan options are tailored to fit your situation and goals.
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
                To receive personalized loan recommendations, you need to create your financial profile first.
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
            className="space-y-6"
          >
            {sampleLoans.map((loan) => (
              <motion.div key={loan.id} variants={item}>
                <LoanCard {...loan} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LoanRecommendation;
