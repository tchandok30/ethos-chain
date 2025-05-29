
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Handle return to dashboard using react-router navigation
  const handleReturnToDashboard = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 transition-all duration-300 transform hover-scale-shadow">
          <div className="flex justify-center mb-4 fade-in">
            <CircleDot className="w-16 h-16 text-ethos-teal animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-ethos-blue to-ethos-teal bg-clip-text text-transparent mb-4 fade-in-delay-1">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 fade-in-delay-2">
            Oops! This blockchain address doesn't exist
          </p>
          <div className="inline-block">
            <Button 
              onClick={handleReturnToDashboard}
              className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-ethos-aqua/20 px-6"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
