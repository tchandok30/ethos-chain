
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import DatasetCard from '@/components/Marketplace/DatasetCard';
import FilterSidebar from '@/components/Marketplace/FilterSidebar';
import { CircleDot } from 'lucide-react';
import Footer from '@/components/shared/Footer';

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4">
        {/* Hero Section */}
        <section className="mb-10 fade-in">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Ethical Dataset Marketplace
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Browse, purchase, and contribute ethically-sourced datasets for AI training
            </p>
          </div>
        </section>
        
        {/* Marketplace Content */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FilterSidebar />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Healthcare Patient Records"
                    description="Anonymized patient records with full consent for medical AI research."
                    price={120}
                    ethicalScore={92}
                    size="2.3 GB"
                    type="Tabular Data"
                    tags={["healthcare", "anonymized", "curated"]}
                    verified={true}
                  />
                </div>
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Diverse Facial Images"
                    description="Ethically sourced facial images with diverse demographic representation."
                    price={85}
                    ethicalScore={89}
                    size="4.7 GB"
                    type="Image Data"
                    tags={["faces", "diversity", "balanced"]}
                    verified={true}
                  />
                </div>
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Climate Research Data"
                    description="Environmental sensor data with full attribution to research institutions."
                    price={65}
                    ethicalScore={94}
                    size="1.8 GB"
                    type="Time Series"
                    tags={["climate", "research", "sensors"]}
                    verified={true}
                  />
                </div>
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Financial Transactions"
                    description="Synthetic financial data modeled on real-world patterns but without privacy concerns."
                    price={110}
                    ethicalScore={96}
                    size="1.2 GB"
                    type="Tabular Data"
                    tags={["finance", "synthetic", "privacy-safe"]}
                    verified={true}
                  />
                </div>
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Multilingual Speech"
                    description="Voice recordings from consenting participants in 50+ languages."
                    price={130}
                    ethicalScore={88}
                    size="5.6 GB"
                    type="Audio Data"
                    tags={["speech", "multilingual", "diverse"]}
                    verified={true}
                  />
                </div>
                <div className="reveal hover-scale-shadow">
                  <DatasetCard
                    title="Urban Mobility Patterns"
                    description="Anonymized transportation data from smart city initiatives with consent protocols."
                    price={75}
                    ethicalScore={90}
                    size="3.1 GB"
                    type="Time Series"
                    tags={["urban", "transport", "anonymized"]}
                    verified={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
