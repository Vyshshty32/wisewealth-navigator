
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-secondary mt-auto">
      <div className="container-padding container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-primary">
              WiseWealth
            </Link>
            <p className="mt-3 text-muted-foreground max-w-md">
              Personalized financial guidance to help you make informed decisions about your loans and capital management.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Financial Profile
                </Link>
              </li>
              <li>
                <Link to="/loan-recommendation" className="text-muted-foreground hover:text-primary transition-colors">
                  Loan Advisory
                </Link>
              </li>
              <li>
                <Link to="/capital-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Capital Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WiseWealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
