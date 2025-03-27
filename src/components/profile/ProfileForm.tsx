
import React, { useState } from 'react';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProfileFormData = {
  // Income
  primaryIncome: string;
  secondaryIncome: string;
  otherIncome: string;
  
  // Expenses
  housing: string;
  transportation: string;
  utilities: string;
  groceries: string;
  healthcare: string;
  entertainment: string;
  otherExpenses: string;
  
  // Assets
  cashSavings: string;
  investments: string;
  realEstate: string;
  retirement: string;
  otherAssets: string;
  
  // Liabilities
  mortgage: string;
  carLoan: string;
  studentLoan: string;
  creditCardDebt: string;
  otherLiabilities: string;
};

const initialFormData: ProfileFormData = {
  // Income
  primaryIncome: '',
  secondaryIncome: '',
  otherIncome: '',
  
  // Expenses
  housing: '',
  transportation: '',
  utilities: '',
  groceries: '',
  healthcare: '',
  entertainment: '',
  otherExpenses: '',
  
  // Assets
  cashSavings: '',
  investments: '',
  realEstate: '',
  retirement: '',
  otherAssets: '',
  
  // Liabilities
  mortgage: '',
  carLoan: '',
  studentLoan: '',
  creditCardDebt: '',
  otherLiabilities: '',
};

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>(initialFormData);
  const [activeTab, setActiveTab] = useState('income');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Only allow numbers and decimal points
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would save this data to a backend
    localStorage.setItem('financialProfile', JSON.stringify(formData));
    
    toast.success("Financial profile saved successfully");
    
    // Navigate to the loan recommendation page
    setTimeout(() => {
      navigate('/loan-recommendation');
    }, 1500);
  };

  return (
    <GlassCard className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="liabilities">Liabilities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="income" className="animate-fade-in space-y-6">
            <div className="title-chip">Step 1 of 4</div>
            <h3 className="text-2xl font-medium mb-4">Income Information</h3>
            <p className="text-muted-foreground mb-6">Enter your income details to help us understand your financial inflow.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primaryIncome">Primary Income (Monthly)</Label>
                <Input
                  id="primaryIncome"
                  name="primaryIncome"
                  placeholder="e.g., 5000"
                  value={formData.primaryIncome}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="secondaryIncome">Secondary Income (Monthly)</Label>
                <Input
                  id="secondaryIncome"
                  name="secondaryIncome"
                  placeholder="e.g., 1000"
                  value={formData.secondaryIncome}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="otherIncome">Other Income (Monthly)</Label>
                <Input
                  id="otherIncome"
                  name="otherIncome"
                  placeholder="e.g., 500"
                  value={formData.otherIncome}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                type="button" 
                onClick={() => setActiveTab('expenses')}
                className="btn-hover"
              >
                Next: Expenses
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="expenses" className="animate-fade-in space-y-6">
            <div className="title-chip">Step 2 of 4</div>
            <h3 className="text-2xl font-medium mb-4">Monthly Expenses</h3>
            <p className="text-muted-foreground mb-6">Enter your typical monthly expenses to help us calculate your expenditure.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="housing">Housing (Rent/Mortgage)</Label>
                <Input
                  id="housing"
                  name="housing"
                  placeholder="e.g., 1500"
                  value={formData.housing}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="transportation">Transportation</Label>
                <Input
                  id="transportation"
                  name="transportation"
                  placeholder="e.g., 300"
                  value={formData.transportation}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="utilities">Utilities</Label>
                <Input
                  id="utilities"
                  name="utilities"
                  placeholder="e.g., 200"
                  value={formData.utilities}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="groceries">Groceries</Label>
                <Input
                  id="groceries"
                  name="groceries"
                  placeholder="e.g., 400"
                  value={formData.groceries}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="healthcare">Healthcare</Label>
                <Input
                  id="healthcare"
                  name="healthcare"
                  placeholder="e.g., 200"
                  value={formData.healthcare}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="entertainment">Entertainment</Label>
                <Input
                  id="entertainment"
                  name="entertainment"
                  placeholder="e.g., 150"
                  value={formData.entertainment}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="otherExpenses">Other Expenses</Label>
                <Input
                  id="otherExpenses"
                  name="otherExpenses"
                  placeholder="e.g., 300"
                  value={formData.otherExpenses}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setActiveTab('income')}
                className="btn-hover"
              >
                Back: Income
              </Button>
              <Button 
                type="button" 
                onClick={() => setActiveTab('assets')}
                className="btn-hover"
              >
                Next: Assets
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="assets" className="animate-fade-in space-y-6">
            <div className="title-chip">Step 3 of 4</div>
            <h3 className="text-2xl font-medium mb-4">Your Assets</h3>
            <p className="text-muted-foreground mb-6">Enter information about your assets to help us understand your net worth.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cashSavings">Cash & Savings</Label>
                <Input
                  id="cashSavings"
                  name="cashSavings"
                  placeholder="e.g., 10000"
                  value={formData.cashSavings}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="investments">Investments</Label>
                <Input
                  id="investments"
                  name="investments"
                  placeholder="e.g., 20000"
                  value={formData.investments}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="realEstate">Real Estate</Label>
                <Input
                  id="realEstate"
                  name="realEstate"
                  placeholder="e.g., 300000"
                  value={formData.realEstate}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="retirement">Retirement Accounts</Label>
                <Input
                  id="retirement"
                  name="retirement"
                  placeholder="e.g., 50000"
                  value={formData.retirement}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="otherAssets">Other Assets</Label>
                <Input
                  id="otherAssets"
                  name="otherAssets"
                  placeholder="e.g., 5000"
                  value={formData.otherAssets}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setActiveTab('expenses')}
                className="btn-hover"
              >
                Back: Expenses
              </Button>
              <Button 
                type="button" 
                onClick={() => setActiveTab('liabilities')}
                className="btn-hover"
              >
                Next: Liabilities
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="liabilities" className="animate-fade-in space-y-6">
            <div className="title-chip">Step 4 of 4</div>
            <h3 className="text-2xl font-medium mb-4">Your Liabilities</h3>
            <p className="text-muted-foreground mb-6">Enter information about your debts and financial obligations.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="mortgage">Mortgage Balance</Label>
                <Input
                  id="mortgage"
                  name="mortgage"
                  placeholder="e.g., 200000"
                  value={formData.mortgage}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="carLoan">Car Loan Balance</Label>
                <Input
                  id="carLoan"
                  name="carLoan"
                  placeholder="e.g., 15000"
                  value={formData.carLoan}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="studentLoan">Student Loan Balance</Label>
                <Input
                  id="studentLoan"
                  name="studentLoan"
                  placeholder="e.g., 30000"
                  value={formData.studentLoan}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="creditCardDebt">Credit Card Debt</Label>
                <Input
                  id="creditCardDebt"
                  name="creditCardDebt"
                  placeholder="e.g., 5000"
                  value={formData.creditCardDebt}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="otherLiabilities">Other Liabilities</Label>
                <Input
                  id="otherLiabilities"
                  name="otherLiabilities"
                  placeholder="e.g., 2000"
                  value={formData.otherLiabilities}
                  onChange={handleInputChange}
                  className="text-right"
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setActiveTab('assets')}
                className="btn-hover"
              >
                Back: Assets
              </Button>
              <Button 
                type="submit"
                className="btn-hover"
              >
                Save Financial Profile
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </GlassCard>
  );
};

export default ProfileForm;
