
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { FileText, Code, Cpu, Database, Shield, Book } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background hex-grid transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 page-transition-enter">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="typing-animation text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Documentation
            </h1>
            <p className="typing-animation-subtitle text-xl text-foreground dark:text-gray-300 mb-6">
              Everything you need to know about EthosChain
            </p>
          </div>
        </section>
        
        {/* Documentation Tabs */}
        <section className="max-w-4xl mx-auto mb-10">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="models">Models</TabsTrigger>
              <TabsTrigger value="auditing">Auditing</TabsTrigger>
              <TabsTrigger value="dao">DAO</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">EthosChain Overview</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  EthosChain is a decentralized platform that enables ethical AI development through transparent, auditable data and model provenance. Our platform connects data providers, AI developers, and ethical auditors in a trustless ecosystem.
                </p>
                <p>
                  The platform uses blockchain technology to ensure immutable record-keeping of dataset origins, model training procedures, and ethical audit results. This creates an AI ecosystem where ethics are verifiable rather than merely promised.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Key Components:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Dataset Marketplace with verified ethical datasets</li>
                    <li>Model Registry for documenting AI models and their training</li>
                    <li>Auditor DAO for decentralized ethical verification</li>
                    <li>Provenance system for tracking the lineage of AI systems</li>
                    <li>ETHOS token for governance and incentive alignment</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="datasets" className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">Dataset Documentation</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Datasets on EthosChain undergo a rigorous verification process before being made available on our marketplace. Each dataset includes detailed documentation about its source, collection methodology, and ethical considerations.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Dataset Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Clear documentation of data collection methodology</li>
                    <li>Verification of proper consent from data subjects</li>
                    <li>Assessment of potential biases in the dataset</li>
                    <li>Documentation of preprocessing steps</li>
                    <li>Clear licensing information</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Dataset Submission Process:</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Submit dataset with complete documentation</li>
                    <li>Verification by EthosChain curation team</li>
                    <li>Initial ethical review by auditors</li>
                    <li>Dataset tokenization and listing on marketplace</li>
                    <li>Ongoing audits and reviews</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="models" className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">AI Model Documentation</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  AI Models registered on EthosChain maintain a complete record of their development process, including training data used, methodologies employed, and ethical considerations addressed.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Model Registration Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Complete training dataset provenance</li>
                    <li>Model architecture documentation</li>
                    <li>Training methodology and parameters</li>
                    <li>Documented ethical considerations and mitigations</li>
                    <li>Model performance metrics across demographic groups</li>
                    <li>Intended use cases and limitations</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Ethical Score Components:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Fairness across demographic groups</li>
                    <li>Robustness to adversarial inputs</li>
                    <li>Privacy preservation</li>
                    <li>Explainability and transparency</li>
                    <li>Safety considerations</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="auditing" className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">Auditing Process</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The auditing process on EthosChain is performed by our decentralized network of qualified ethical AI auditors. Each auditor has expertise in specific domains such as bias detection, privacy assessment, or safety evaluation.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Audit Workflow:</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Dataset or model submission for audit</li>
                    <li>Random assignment to multiple qualified auditors</li>
                    <li>Independent audit by each assigned auditor</li>
                    <li>Consensus-building through auditor DAO voting</li>
                    <li>Issuance of final audit report with ethical score</li>
                    <li>On-chain record of audit results</li>
                  </ol>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Auditor Qualifications:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Demonstrated expertise in AI ethics</li>
                    <li>Specialized knowledge in relevant domains</li>
                    <li>Stake of ETHOS tokens as collateral</li>
                    <li>Reputation system based on audit quality</li>
                    <li>Continuing education requirements</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dao" className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-ethos-dark dark:text-white">DAO Governance</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  The EthosChain DAO is responsible for governing the platform, setting ethical standards, and ensuring the quality of audits. All ETHOS token holders can participate in governance voting.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">DAO Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Setting and updating ethical standards</li>
                    <li>Managing treasury funds</li>
                    <li>Approving auditor applications</li>
                    <li>Resolving disputes in audit results</li>
                    <li>Protocol upgrades and improvements</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-ethos-dark dark:text-white">Voting Mechanism:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Quadratic voting based on ETHOS token holdings</li>
                    <li>Proposal creation requires minimum token stake</li>
                    <li>Multi-stage voting process for major decisions</li>
                    <li>Delegate voting options</li>
                    <li>Transparent on-chain voting records</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
