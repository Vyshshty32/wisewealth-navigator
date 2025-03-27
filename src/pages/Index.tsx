
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, BarChart3, PiggyBank, LineChart } from 'lucide-react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import GlassCard from '@/components/ui/GlassCard';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative container-padding container">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="title-chip">Financial Wisdom at Your Fingertips</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Personalized Financial Guidance for Your Wealth Journey</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              WiseWealth helps you make informed financial decisions with personalized loan recommendations and capital management strategies tailored to your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-hover">
                <Link to="/profile">Create Your Profile <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-hover">
                <Link to="/loan-recommendation">Explore Loan Options</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] animate-fade-in delay-200">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:mt-12">
                <GlassCard variant="bordered" className="animate-floating">
                  <div className="p-2 bg-green-100 rounded-full w-fit mb-4">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Financial Profile</h3>
                  <p className="text-muted-foreground text-sm mb-4">Create your comprehensive financial snapshot.</p>
                  <Button variant="outline" size="sm" asChild className="btn-hover">
                    <Link to="/profile">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </GlassCard>
              </div>
              
              <GlassCard variant="bordered" className="animate-floating [animation-delay:0.5s]">
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                  <PiggyBank className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Loan Advisory</h3>
                <p className="text-muted-foreground text-sm mb-4">Discover and compare personalized loan options.</p>
                <Button variant="outline" size="sm" asChild className="btn-hover">
                  <Link to="/loan-recommendation">
                    View Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </GlassCard>
              
              <GlassCard variant="bordered" className="animate-floating [animation-delay:1s]">
                <div className="p-2 bg-blue-100 rounded-full w-fit mb-4">
                  <LineChart className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Capital Management</h3>
                <p className="text-muted-foreground text-sm mb-4">Optimize your investments with tailored advice.</p>
                <Button variant="outline" size="sm" asChild className="btn-hover">
                  <Link to="/capital-management">
                    Explore Strategies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 container-padding container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="title-chip mx-auto">Our Approach</div>
          <h2 className="text-3xl font-bold mb-6">Make Smarter Financial Decisions</h2>
          <p className="text-muted-foreground">
            We combine advanced algorithms with financial expertise to provide you with personalized recommendations that fit your unique financial situation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard variant="bordered" className="flex flex-col items-center text-center">
            <div className="rounded-full p-3 bg-primary/10 mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Comprehensive Profile</h3>
            <p className="text-muted-foreground mb-6">
              Build a complete financial profile with income, expenses, assets, and liabilities to receive tailored advice.
            </p>
            <Button variant="link" asChild className="mt-auto text-primary">
              <Link to="/profile">Create Your Profile</Link>
            </Button>
          </GlassCard>
          
          <GlassCard variant="bordered" className="flex flex-col items-center text-center">
            <div className="rounded-full p-3 bg-primary/10 mb-6">
              <PiggyBank className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Loan Recommendations</h3>
            <p className="text-muted-foreground mb-6">
              Get personalized loan options based on your eligibility and financial goals with transparent terms.
            </p>
            <Button variant="link" asChild className="mt-auto text-primary">
              <Link to="/loan-recommendation">Explore Loans</Link>
            </Button>
          </GlassCard>
          
          <GlassCard variant="bordered" className="flex flex-col items-center text-center">
            <div className="rounded-full p-3 bg-primary/10 mb-6">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-3">Capital Management</h3>
            <p className="text-muted-foreground mb-6">
              Receive customized investment strategies and savings recommendations to achieve your financial goals.
            </p>
            <Button variant="link" asChild className="mt-auto text-primary">
              <Link to="/capital-management">Manage Your Capital</Link>
            </Button>
          </GlassCard>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container-padding container">
          <GlassCard className="max-w-4xl mx-auto text-center px-8 py-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Create your financial profile today and get personalized recommendations to optimize your finances.
            </p>
            <Button asChild size="lg" className="btn-hover">
              <Link to="/profile">Create Your Profile <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </GlassCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
