
import React from 'react';
import { Link } from 'react-router-dom';
import { CircleDot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ethos-dark dark:bg-gray-900 text-white py-8 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 hover-scale">
            <CircleDot className="w-6 h-6 text-ethos-teal" />
            <span className="text-lg font-bold">EthosChain</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="transition-all duration-300 hover:text-ethos-aqua hover:scale-110">About</Link>
            <Link to="/docs" className="transition-all duration-300 hover:text-ethos-aqua hover:scale-110">Documentation</Link>
            <Link to="/dao" className="transition-all duration-300 hover:text-ethos-aqua hover:scale-110">Join DAO</Link>
            <Link to="/contact" className="transition-all duration-300 hover:text-ethos-aqua hover:scale-110">Contact</Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2025 EthosChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
