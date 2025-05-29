
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleDot, LogOut } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    // Show toast notification
    toast({
      title: "Logged Out Successfully",
      description: "You have been logged out of your account.",
    });
    
    // Redirect to home after a brief delay
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 2000);
    
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 flex items-center justify-center">
        <div className="text-center reveal visible">
          <div className="flex justify-center mb-6">
            <CircleDot className="h-16 w-16 text-ethos-teal animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent">
            Logging Out
          </h1>
          <div className="flex items-center justify-center mb-6">
            <LogOut className="h-6 w-6 text-ethos-teal mr-2" />
            <p className="text-lg text-gray-600 dark:text-gray-300">
              You are being securely logged out...
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Redirecting you to the homepage shortly
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Logout;
