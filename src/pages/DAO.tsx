
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { CircleDot, Shield, Users, Vote, LineChart, FileCheck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const DAO = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background hex-grid transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 page-transition-enter">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="typing-animation text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              EthosChain DAO
            </h1>
            <p className="typing-animation-subtitle text-xl text-foreground dark:text-gray-300 mb-6">
              Join our decentralized autonomous organization and help shape the future of ethical AI
            </p>
            <Button className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 text-white hover-scale">
              <Users className="w-4 h-4 mr-2" />
              Join the DAO
            </Button>
          </div>
        </section>
        
        {/* DAO Stats */}
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-10 h-10 text-ethos-teal mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">2,475</h3>
                  <p className="text-gray-500 dark:text-gray-400">Total Members</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Vote className="w-10 h-10 text-ethos-teal mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">435</h3>
                  <p className="text-gray-500 dark:text-gray-400">Active Proposals</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardContent className="pt-6">
                <div className="text-center">
                  <LineChart className="w-10 h-10 text-ethos-teal mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">$4.23</h3>
                  <p className="text-gray-500 dark:text-gray-400">$ETHOS Price</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="w-10 h-10 text-ethos-teal mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">92%</h3>
                  <p className="text-gray-500 dark:text-gray-400">Governance Participation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Active Proposals Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-ethos-dark dark:text-white">Active Proposals</h2>
          <div className="space-y-6">
            {[
              {
                id: "EIP-27",
                title: "Expand Ethical Standards for Generative Models",
                description: "Proposal to update the ethical standards framework to include specific criteria for generative AI models, particularly focusing on content authenticity and creative rights.",
                deadline: "3 days",
                forVotes: 68,
                againstVotes: 12,
                status: "Active"
              },
              {
                id: "EIP-28",
                title: "Treasury Allocation for Auditor Training Program",
                description: "Allocate 50,000 ETHOS tokens from the treasury to fund a comprehensive training program for new auditors specializing in fairness and bias detection.",
                deadline: "5 days",
                forVotes: 54,
                againstVotes: 21,
                status: "Active"
              },
              {
                id: "EIP-29",
                title: "Integration with Arbitrum for Lower Gas Fees",
                description: "Proposal to deploy EthosChain contracts on Arbitrum to reduce gas fees and improve accessibility for smaller participants in the ecosystem.",
                deadline: "2 days",
                forVotes: 87,
                againstVotes: 5,
                status: "Active"
              }
            ].map((proposal, index) => (
              <Card key={index} className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-ethos-teal" />
                      <span className="text-lg font-bold">{proposal.id}: {proposal.title}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{proposal.deadline} remaining</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{proposal.description}</p>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{proposal.forVotes}% For</span>
                      <span>{proposal.againstVotes}% Against</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-ethos-teal rounded-full" 
                        style={{ width: `${proposal.forVotes}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Vote For</Button>
                    <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600 hover:bg-red-100 dark:hover:bg-red-900/20">Vote Against</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button className="bg-ethos-teal hover:bg-ethos-blue text-white">View All Proposals</Button>
          </div>
        </section>
        
        {/* How to Join Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-ethos-dark dark:text-white">How to Join the DAO</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-ethos-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-ethos-dark dark:text-white">Acquire ETHOS Tokens</h3>
                    <p className="text-gray-600 dark:text-gray-300">Purchase ETHOS tokens through our partner exchanges or earn them by contributing datasets or performing audits.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-ethos-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-bold text-ethos-dark dark:text-white">Connect Your Wallet</h3>
                    <p className="text-gray-600 dark:text-gray-300">Connect your Ethereum wallet to the EthosChain platform to verify your token holdings.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-ethos-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-bold text-ethos-dark dark:text-white">Stake Your Tokens</h3>
                    <p className="text-gray-600 dark:text-gray-300">Stake a minimum of 100 ETHOS tokens to become an active member with voting rights.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-ethos-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-bold text-ethos-dark dark:text-white">Participate in Governance</h3>
                    <p className="text-gray-600 dark:text-gray-300">Vote on proposals, create new proposals, and contribute to discussions on the future of EthosChain.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 text-white px-8 py-2 text-lg hover-scale">Get Started Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DAO;
