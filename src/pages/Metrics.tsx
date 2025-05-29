
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import EthicalMetricsCard from '@/components/Dashboard/EthicalMetricsCard';
import EthicalRadarChart from '@/components/EthicalScore/RadarChart';
import ScoreCard from '@/components/EthicalScore/ScoreCard';
import { CircleDot, Database, ShieldCheck, Users, FileCheck } from 'lucide-react';
import Footer from '@/components/shared/Footer';

// Sample data for the radar chart
const radarData = [
  { subject: 'Privacy', model: 85, average: 65, fullMark: 100 },
  { subject: 'Bias', model: 90, average: 60, fullMark: 100 },
  { subject: 'Consent', model: 75, average: 45, fullMark: 100 },
  { subject: 'Fairness', model: 80, average: 55, fullMark: 100 },
  { subject: 'Transparency', model: 95, average: 70, fullMark: 100 },
  { subject: 'Royalties', model: 85, average: 40, fullMark: 100 },
];

const Metrics = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 hex-grid">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4">
        {/* Hero Section */}
        <section className="mb-10 fade-in">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Ethical Metrics
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Comprehensive analysis of AI model and dataset ethical compliance
            </p>
          </div>
        </section>
        
        {/* Platform Metrics Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-gray-200">Platform Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="reveal hover-scale-shadow">
              <EthicalMetricsCard
                title="Privacy Compliance"
                value={92}
                description="Data protection and privacy regulations adherence"
                icon={<ShieldCheck className="w-5 h-5 text-white" />}
              />
            </div>
            <div className="reveal hover-scale-shadow">
              <EthicalMetricsCard
                title="Bias Detection"
                value={87}
                description="Algorithmic bias and fairness assessment"
                icon={<Users className="w-5 h-5 text-white" />}
              />
            </div>
            <div className="reveal hover-scale-shadow">
              <EthicalMetricsCard
                title="Data Provenance"
                value={94}
                description="Source verification and history tracking"
                icon={<Database className="w-5 h-5 text-white" />}
              />
            </div>
            <div className="reveal hover-scale-shadow">
              <EthicalMetricsCard
                title="Consent Management"
                value={89}
                description="Usage permission and rights management"
                icon={<FileCheck className="w-5 h-5 text-white" />}
              />
            </div>
          </div>
        </section>
        
        {/* Ethical Scoring Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-gray-200">Model Scoring</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="reveal hover-scale-shadow">
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
            </div>
            <div className="reveal hover-scale-shadow">
              <ScoreCard
                title="Medical Diagnostics AI"
                score={92}
                description="Healthcare model for identifying potential medical conditions in imaging."
                categories={[
                  { name: "Regulatory Compliance", value: 95 },
                  { name: "Patient Consent", value: 98 },
                  { name: "Demographic Balance", value: 89 },
                  { name: "Diagnosis Accuracy", value: 91 }
                ]}
              />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-gray-200">Comparative Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="reveal hover-scale-shadow">
              <EthicalRadarChart
                title="Model Comparison"
                data={radarData}
              />
            </div>
            <div className="reveal hover-scale-shadow">
              <EthicalRadarChart
                title="Industry Standards"
                data={[
                  { subject: 'Privacy', model: 80, average: 70, fullMark: 100 },
                  { subject: 'Bias', model: 85, average: 65, fullMark: 100 },
                  { subject: 'Consent', model: 90, average: 60, fullMark: 100 },
                  { subject: 'Fairness', model: 75, average: 55, fullMark: 100 },
                  { subject: 'Transparency', model: 85, average: 70, fullMark: 100 },
                  { subject: 'Royalties', model: 70, average: 50, fullMark: 100 },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Metrics;
