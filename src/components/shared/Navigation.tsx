
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  CircleDot,
  Home,
  LogIn,
  LogOut,
  Moon,
  ShieldCheck,
  Store,
  Sun,
  Users,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";
import { useTheme } from '../ThemeProvider';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, [location]); // Re-check when location changes
  
  // Helper function to check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path ? "text-ethos-aqua" : "text-white/90";
  };

  // Wallet connection handler
  const handleConnectWallet = () => {
    setConnecting(true);
    
    // Simulate wallet connection process
    setTimeout(() => {
      setConnecting(false);
      toast({
        title: "Wallet connection",
        description: "Wallet connected successfully!",
        variant: "default",
      });
    }, 1500);
  };

  // Handle login
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Handle logout
  const handleLogoutClick = () => {
    navigate('/logout');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-ethos-blue to-ethos-dark dark:from-ethos-dark dark:to-ethos-blue z-50 py-4 px-5 md:px-8 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <CircleDot className="w-8 h-8 text-ethos-teal" />
        <span className="text-xl font-bold bg-gradient-to-r from-white to-ethos-teal bg-clip-text text-transparent">
          EthosChain
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className={`flex items-center gap-1 hover:text-ethos-aqua transition-colors transform hover:scale-105 duration-200 ${isActive('/')}`}>
          <Home className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link to="/marketplace" className={`flex items-center gap-1 hover:text-ethos-aqua transition-colors transform hover:scale-105 duration-200 ${isActive('/marketplace')}`}>
          <Store className="w-4 h-4" />
          <span>Marketplace</span>
        </Link>
        <Link to="/provenance" className={`flex items-center gap-1 hover:text-ethos-aqua transition-colors transform hover:scale-105 duration-200 ${isActive('/provenance')}`}>
          <ShieldCheck className="w-4 h-4" />
          <span>Provenance</span>
        </Link>
        <Link to="/auditors" className={`flex items-center gap-1 hover:text-ethos-aqua transition-colors transform hover:scale-105 duration-200 ${isActive('/auditors')}`}>
          <Users className="w-4 h-4" />
          <span>DAO</span>
        </Link>
        <Link to="/metrics" className={`flex items-center gap-1 hover:text-ethos-aqua transition-colors transform hover:scale-105 duration-200 ${isActive('/metrics')}`}>
          <BarChart3 className="w-4 h-4" />
          <span>Metrics</span>
        </Link>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          onClick={toggleTheme} 
          variant="ghost" 
          size="icon" 
          className="text-white/90 hover:text-ethos-aqua hover:bg-ethos-dark/20 transition-all duration-200 transform hover:scale-110"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        {isLoggedIn ? (
          <Button 
            onClick={handleLogoutClick}
            className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 transition-all duration-200 text-white transform hover:scale-105 hover:shadow-lg hover:shadow-ethos-aqua/20"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Logout
          </Button>
        ) : (
          <Button 
            onClick={handleLoginClick}
            className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 transition-all duration-200 text-white transform hover:scale-105 hover:shadow-lg hover:shadow-ethos-aqua/20"
          >
            <LogIn className="w-4 h-4 mr-1" />
            Login
          </Button>
        )}
        
        <Button 
          onClick={handleConnectWallet}
          disabled={connecting}
          className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 transition-all duration-200 text-white transform hover:scale-105 hover:shadow-lg hover:shadow-ethos-aqua/20"
        >
          {connecting ? "Connecting..." : (
            <>
              <Wallet className="w-4 h-4 mr-1" />
              Connect Wallet
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
