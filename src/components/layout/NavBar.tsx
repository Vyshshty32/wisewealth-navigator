
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Financial Profile' },
    { href: '/loan-recommendation', label: 'Loan Advisory' },
    { href: '/capital-management', label: 'Capital Management' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-padding container flex items-center justify-between">
        <Link 
          to="/" 
          className="relative z-10 text-2xl font-bold text-primary transition-transform duration-300 hover:scale-[1.02]"
        >
          WiseWealth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 link-hover',
                    location.pathname === link.href 
                      ? 'text-primary after:w-full' 
                      : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 z-0 bg-white p-6 transition-all duration-300 md:hidden',
            isMobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          )}
        >
          <div className="flex flex-col h-full pt-16">
            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'flex items-center justify-between py-2 text-lg font-medium',
                      location.pathname === link.href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
