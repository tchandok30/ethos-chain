
import React from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { CircleDot, Shield, Sparkles, Code, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background hex-grid transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 page-transition-enter">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="typing-animation text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              About EthosChain
            </h1>
            <p className="typing-animation-subtitle text-xl text-foreground dark:text-gray-300 mb-6">
              Revolutionizing Ethical AI Development Through Blockchain
            </p>
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center text-ethos-dark dark:text-white">Our Mission</h2>
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                EthosChain was founded with a singular vision: to ensure the ethical development of artificial intelligence through transparent, auditable, and fair practices. We believe that as AI becomes increasingly integrated into our daily lives, it's essential that these systems are developed with strong ethical foundations, free from biases, and respectful of human dignity and privacy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-ethos-dark dark:text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Shield className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold">Transparency</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in complete transparency in AI development. All datasets and models on our platform are thoroughly documented with clear provenance tracking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Sparkles className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold">Accountability</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Through our blockchain-based audit system, we ensure that all participants in the AI ecosystem are held to the highest ethical standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Users className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold">Inclusivity</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to creating an AI ecosystem that benefits everyone, with safeguards to prevent bias and discrimination in AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-ethos-dark dark:text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Anilove",
                role: "Frontend Developer",
                bio: "Manages the frontend, Auditor DAO voting system, and Ethical Score UI..",
                color: "bg-ethos-blue"
              },
              {
                name: "Tanisha",
                role: "Backend Developer",
                bio: "Handles the smart contracts, backend, and blockchain integrations.",
                color: "bg-ethos-teal"
              },
              // {
              //   name: "Dr. Aisha Patel",
              //   role: "Chief Ethics Officer",
              //   bio: "Former academic specializing in AI ethics and policy. Led ethical AI initiatives at major tech companies.",
              //   color: "bg-ethos-aqua"
              // },
              // {
              //   name: "Thomas Rodriguez",
              //   role: "Head of Community",
              //   bio: "DAO governance expert with a background in community building across Web3 and AI ecosystems.",
              //   color: "bg-ethos-accent"
              // }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover-scale">
                <div className={`h-3 ${member.color}`}></div>
                <div className="p-5">
                  <h3 className="text-lg font-bold dark:text-white">{member.name}</h3>
                  <p className="text-sm text-ethos-teal mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
