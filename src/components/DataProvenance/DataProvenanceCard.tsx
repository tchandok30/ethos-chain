
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck, CircleX, CircleDashed, ExternalLink, Hash, FileCheck, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type ConsentType = 'full' | 'partial' | 'none' | 'unknown';
type LicenseType = 'commercial' | 'noncommercial' | 'research' | 'unknown';

interface ProvenanceCardProps {
  name: string;
  description: string;
  hash: string;
  consentStatus: ConsentType;
  licenseType: LicenseType;
  source: string;
  timestamp: string;
  ethicalScore: number;
}

const DataProvenanceCard: React.FC<ProvenanceCardProps> = ({
  name,
  description,
  hash,
  consentStatus,
  licenseType,
  source,
  timestamp,
  ethicalScore,
}) => {
  const getConsentIcon = () => {
    switch (consentStatus) {
      case 'full':
        return <CircleCheck className="text-green-500" />;
      case 'partial':
        return <CircleDashed className="text-amber-500" />;
      case 'none':
        return <CircleX className="text-red-500" />;
      default:
        return <CircleDashed className="text-gray-400" />;
    }
  };

  const getConsentText = () => {
    switch (consentStatus) {
      case 'full':
        return 'Full Consent';
      case 'partial':
        return 'Partial Consent';
      case 'none':
        return 'No Consent';
      default:
        return 'Unknown';
    }
  };

  const getLicenseBadge = () => {
    switch (licenseType) {
      case 'commercial':
        return <Badge className="bg-blue-500">Commercial License</Badge>;
      case 'noncommercial':
        return <Badge className="bg-purple-500">Non-Commercial</Badge>;
      case 'research':
        return <Badge className="bg-teal-500">Research Only</Badge>;
      default:
        return <Badge variant="outline">Unknown License</Badge>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-emerald-500";
    if (score >= 50) return "text-amber-500";
    return "text-red-500";
  };

  // Format hash for better display
  const formattedHash = `${hash.substring(0, 10)}...${hash.substring(hash.length - 8)}`;

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800/50 dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-ethos-blue to-ethos-dark p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-lg">{name}</CardTitle>
          <div className={`text-lg font-bold ${getScoreColor(ethicalScore)}`}>
            {ethicalScore}/100
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 dark:text-gray-200">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <span className="font-medium w-24">Hash:</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <Hash className="h-3.5 w-3.5 text-ethos-teal" />
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400 hover:text-ethos-teal dark:hover:text-ethos-aqua transition-colors">
                      {formattedHash}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono text-xs">{hash}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex items-center text-sm">
            <span className="font-medium w-24">Consent:</span>
            <div className="flex items-center gap-2">
              {getConsentIcon()}
              <span className="dark:text-gray-300">{getConsentText()}</span>
            </div>
          </div>

          <div className="flex items-center text-sm">
            <span className="font-medium w-24">License:</span>
            {getLicenseBadge()}
          </div>
          
          <div className="flex items-center text-sm">
            <span className="font-medium w-24">Source:</span>
            <span className="text-gray-600 dark:text-gray-300">{source}</span>
          </div>

          <div className="flex items-center text-sm">
            <span className="font-medium w-24">Timestamp:</span>
            <span className="text-gray-600 dark:text-gray-300">{timestamp}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="text-xs gap-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
            <ExternalLink className="h-3.5 w-3.5" />
            View on Explorer
          </Button>
          <Button size="sm" className="text-xs bg-ethos-teal hover:bg-ethos-blue">
            <FileCheck className="h-3.5 w-3.5 mr-1" />
            Verify Dataset
          </Button>
          <Button size="sm" className="text-xs bg-ethos-blue hover:bg-ethos-teal">
            <ShoppingCart className="h-3.5 w-3.5 mr-1" />
            Purchase
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataProvenanceCard;
