
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import EthicalMetricsCard from '@/components/Dashboard/EthicalMetricsCard';
import BlockchainActivity from '@/components/Dashboard/BlockchainActivity';
import RecentTransactions from '@/components/Dashboard/RecentTransactions';
import DataProvenanceCard from '@/components/DataProvenance/DataProvenanceCard';
import ScoreCard from '@/components/EthicalScore/ScoreCard';
import EthicalRadarChart from '@/components/EthicalScore/RadarChart';
import { CircleDot, Database, ShieldCheck, Users, FileCheck } from 'lucide-react';
import DatasetCard from '@/components/Marketplace/DatasetCard';

// Sample data for the radar chart
const radarData = [
  { subject: 'Privacy', model: 85, average: 65, fullMark: 100 },
  { subject: 'Bias', model: 90, average: 60, fullMark: 100 },
  { subject: 'Consent', model: 75, average: 45, fullMark: 100 },
  { subject: 'Fairness', model: 80, average: 55, fullMark: 100 },
  { subject: 'Transparency', model: 95, average: 70, fullMark: 100 },
  { subject: 'Royalties', model: 85, average: 40, fullMark: 100 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="typing-animation text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              EthosChain
            </h1>
            <p className="typing-animation-subtitle text-xl text-gray-600 dark:text-gray-300 mb-6">
              The Decentralized Platform for Ethical AI Training & Auditing
            </p>
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">203 Datasets</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">87 Models</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">439 Auditors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Metrics Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">Platform Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <EthicalMetricsCard
              title="Privacy Compliance"
              value={92}
              description="Data protection and privacy regulations adherence"
              icon={<ShieldCheck className="w-5 h-5 text-white" />}
            />
            <EthicalMetricsCard
              title="Bias Detection"
              value={87}
              description="Algorithmic bias and fairness assessment"
              icon={<Users className="w-5 h-5 text-white" />}
            />
            <EthicalMetricsCard
              title="Data Provenance"
              value={94}
              description="Source verification and history tracking"
              icon={<Database className="w-5 h-5 text-white" />}
            />
            <EthicalMetricsCard
              title="Consent Management"
              value={89}
              description="Usage permission and rights management"
              icon={<FileCheck className="w-5 h-5 text-white" />}
            />
          </div>
        </section>
        
        {/* Blockchain Activity and Transactions */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <BlockchainActivity />
            </div>
            <div>
              <RecentTransactions />
            </div>
          </div>
        </section>
        
        {/* Data Provenance Preview */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-ethos-dark dark:text-white">Data Provenance</h2>
            <a href="/provenance" className="text-ethos-teal hover:text-ethos-blue transition-colors text-sm">
              View All Datasets
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </section>
        
        {/* Ethical Score Preview */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-ethos-dark dark:text-white">Ethical Scoring</h2>
            <a href="/metrics" className="text-ethos-teal hover:text-ethos-blue transition-colors text-sm">
              View All Metrics
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ScoreCard
              title="Facial Recognition Model"
              score={85}
              description="Computer vision model for facial recognition with bias mitigation."
              categories={[
                { name: "Bias Mitigation", value: 87 },
                { name: "Data Consent", value: 92 },
                { name: "Privacy Protection", value: 78 },
                { name: "Demographic Distribution", value: 83 }
              ]}
            />
            <EthicalRadarChart
              title="Model Comparison"
              data={radarData}
            />
          </div>
        </section>
        
        {/* Marketplace Preview */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-ethos-dark dark:text-white">Ethical Dataset Marketplace</h2>
            <a href="/marketplace" className="text-ethos-teal hover:text-ethos-blue transition-colors text-sm">
              Browse Marketplace
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
