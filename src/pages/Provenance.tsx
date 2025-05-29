
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import DataProvenanceCard from '@/components/DataProvenance/DataProvenanceCard';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Provenance = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter options
  const filterCategories = ["Medical", "Synthetic", "Environmental", "Speech"];

  // Function to handle reveal animations
  useEffect(() => {
    const cards = document.querySelectorAll('.provenance-card');
    cards.forEach((card, index) => {
      card.classList.add('reveal');
      // Fix: Cast the element to HTMLElement before accessing style property
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe all cards
    cards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4">
        {/* Hero Section */}
        <section className="mb-10 fade-in">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Data Provenance
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Verify and track the ethical lineage of AI training datasets
            </p>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
              <Input
                placeholder="Search datasets..."
                className="pl-10 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button
              variant="outline"
              className={`gap-1 dark:border-gray-700 dark:text-gray-300 ${showFilters ? 'border-ethos-teal text-ethos-teal dark:border-ethos-teal dark:text-ethos-teal' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Filter
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {filterCategories.map(category => (
                <Badge 
                  key={category}
                  className={`cursor-pointer hover:bg-ethos-teal ${activeFilter === category ? 'bg-ethos-teal' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                  onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}
        </section>
        
        {/* Provenance Listing */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="provenance-card hover-scale-shadow">
              <DataProvenanceCard 
                name="Medical Imaging Dataset"
                description="A curated collection of 10,000+ anonymized MRI scans with patient consent for AI diagnostic training."
                hash="0x3a8d7f29e4c6b5a1d2e8f9c7b3d5e2a9f8c7d6e5f4a3b2c1d0e9f8c7d6e5f4a3b2c1d0e9f"
                consentStatus="full"
                licenseType="research"
                source="University Medical Center"
                timestamp="2025-03-15 14:32:17"
                ethicalScore={94}
              />
            </div>
            <div className="provenance-card hover-scale-shadow">
              <DataProvenanceCard 
                name="Synthetic Text Data"
                description="AI-generated synthetic text data for natural language processing without privacy concerns."
                hash="0x8c3d6f5a2e9b7c4d3e8f9a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1"
                consentStatus="unknown"
                licenseType="commercial"
                source="AI Text Lab"
                timestamp="2025-04-08 09:17:42"
                ethicalScore={87}
              />
            </div>
            <div className="provenance-card hover-scale-shadow">
              <DataProvenanceCard 
                name="Environmental Sensor Data"
                description="Open-source climate and environmental data from government weather stations."
                hash="0x5d2e6f1a9c8b7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6"
                consentStatus="unknown"
                licenseType="research"
                source="Climate Research Institute"
                timestamp="2025-02-22 11:05:33"
                ethicalScore={95}
              />
            </div>
            <div className="provenance-card hover-scale-shadow">
              <DataProvenanceCard 
                name="Diverse Speech Recordings"
                description="Voice samples from 10,000 participants across 75 countries with explicit usage consent."
                hash="0x1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8"
                consentStatus="full"
                licenseType="commercial"
                source="Global Audio Project"
                timestamp="2025-01-30 08:45:19"
                ethicalScore={92}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Provenance;
