
import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { CircleDot, Shield, Award, Users, Filter, FileCheck, MoreHorizontal, Calendar, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Auditors = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [specialtyFilter, setSpecialtyFilter] = useState<string | null>(null);
  
  const specialties = ["Bias Detection", "Privacy Compliance", "Consent Verification", "All Specialties"];

  const auditors = [
    {
      name: "Alex.eth",
      avatar: "bg-ethos-blue dark:bg-ethos-teal",
      reputation: 5,
      specialty: "Bias Detection",
      auditsCompleted: 143,
      status: "active",
      lastActive: "Today",
      experience: "3+ years"
    },
    {
      name: "DataEthicist",
      avatar: "bg-ethos-teal dark:bg-ethos-aqua",
      reputation: 5,
      specialty: "Privacy Compliance",
      auditsCompleted: 127,
      status: "active",
      lastActive: "Yesterday", 
      experience: "5+ years"
    },
    {
      name: "EthicalAI.lens",
      avatar: "bg-ethos-aqua dark:bg-ethos-blue",
      reputation: 4,
      specialty: "Consent Verification",
      auditsCompleted: 98,
      status: "active",
      lastActive: "2 days ago",
      experience: "2+ years"
    },
    {
      name: "FairAlgorithm",
      avatar: "bg-ethos-teal dark:bg-ethos-blue",
      reputation: 4,
      specialty: "Bias Detection",
      auditsCompleted: 87,
      status: "inactive",
      lastActive: "1 week ago",
      experience: "4+ years"
    }
  ];
  
  const filteredAuditors = specialtyFilter && specialtyFilter !== "All Specialties" 
    ? auditors.filter(auditor => auditor.specialty === specialtyFilter)
    : auditors;

  return (
    <div className="min-h-screen bg-background dark:bg-background dark:bg-gray-900 hex-grid transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 page-transition-enter">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Auditor DAO
            </h1>
            <p className="text-xl text-foreground mb-6 dark:text-gray-300">
              Join our decentralized network of ethical AI auditors and data scientists
            </p>
            <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">439 Auditors</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">1,284 Audits</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-gray-800 py-1.5 px-4 rounded-full elliptical-element">
                  <div className="blockchain-node"></div>
                  <span className="text-ethos-blue dark:text-ethos-teal">89% Consensus Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* DAO Information */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Shield className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold dark:text-white">Become an Auditor</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Join our DAO and earn $ETHOS tokens by auditing datasets and AI models for ethical compliance.
                </p>
                <Button className="w-full bg-ethos-teal hover:bg-ethos-blue">Apply Now</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Award className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold dark:text-white">Auditor Rewards</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Earn tokens for each successful audit. Higher reputation leads to higher-value audit opportunities.
                </p>
                <Button className="w-full bg-ethos-teal hover:bg-ethos-blue">Reward Structure</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700 hover-scale">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Users className="w-5 h-5 text-ethos-teal" />
                <h3 className="text-lg font-bold dark:text-white">DAO Governance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Participate in governance votes to shape the future of EthosChain and ethical AI standards.
                </p>
                <Button className="w-full bg-ethos-teal hover:bg-ethos-blue">View Proposals</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Top Auditors Section */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mb-2 md:mb-0 text-ethos-dark dark:text-white">Top Auditors</h2>
            <div className="flex gap-2 items-center">
              <Button
                variant="outline" 
                size="sm" 
                className={`gap-1 dark:border-gray-600 dark:text-gray-300 ${filterActive ? 'border-ethos-teal text-ethos-teal dark:border-ethos-teal dark:text-ethos-teal' : ''}`}
                onClick={() => setFilterActive(!filterActive)}
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              
              {filterActive && (
                <div className="flex gap-1 flex-wrap">
                  {specialties.map(specialty => (
                    <Badge 
                      key={specialty}
                      className={`cursor-pointer hover:bg-ethos-teal ${specialtyFilter === specialty ? 'bg-ethos-teal' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                      onClick={() => setSpecialtyFilter(specialty)}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <TableHeader className="bg-gray-100 dark:bg-gray-700">
                <TableRow>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Auditor</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Reputation</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Specialty</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Audits Completed</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Last Active</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Experience</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Status</TableHead>
                  <TableHead className="py-3 px-4 text-left dark:text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="divide-y divide-gray-200 dark:divide-gray-600">
                {filteredAuditors.map((auditor, index) => (
                  <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 ${auditor.avatar} rounded-full`}></div>
                        <span className="dark:text-white">{auditor.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < auditor.reputation ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}>★</span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-3 px-4 dark:text-white">{auditor.specialty}</TableCell>
                    <TableCell className="py-3 px-4 dark:text-white">{auditor.auditsCompleted}</TableCell>
                    <TableCell className="py-3 px-4 dark:text-white">{auditor.lastActive}</TableCell>
                    <TableCell className="py-3 px-4 dark:text-white">{auditor.experience}</TableCell>
                    <TableCell className="py-3 px-4">
                      {auditor.status === "active" ? (
                        <span className="bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                          Active
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                          Inactive
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 dark:text-gray-300">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
                          <DropdownMenuLabel className="dark:text-gray-300">Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator className="dark:bg-gray-700" />
                          <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700">
                            <FileCheck className="h-4 w-4 mr-2" /> View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700">
                            <Calendar className="h-4 w-4 mr-2" /> Request Audit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700">
                            <Briefcase className="h-4 w-4 mr-2" /> View Portfolio
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auditors;
