
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Database, Lock, ShieldCheck, Users } from 'lucide-react';

interface DatasetCardProps {
  title: string;
  description: string;
  price: number;
  ethicalScore: number;
  size: string;
  type: string;
  tags: string[];
  verified: boolean;
}

const DatasetCard: React.FC<DatasetCardProps> = ({
  title,
  description,
  price,
  ethicalScore,
  size,
  type,
  tags,
  verified
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-emerald-500";
    if (score >= 50) return "bg-amber-500";
    return "bg-red-500";
  };
  
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
      <CardHeader className="p-4 flex flex-row items-start justify-between border-b">
        <div>
          <h3 className="font-bold">{title}</h3>
          <div className="flex gap-2 mt-1">
            {verified && (
              <Badge variant="outline" className="flex items-center gap-1 text-blue-600 border-blue-300">
                <ShieldCheck className="w-3 h-3" />
                Verified
              </Badge>
            )}
            <Badge variant="outline" className="text-gray-600">
              {type}
            </Badge>
          </div>
        </div>
        <div className={`${getScoreColor(ethicalScore)} text-white px-2 py-1 rounded-full font-bold`}>
          {ethicalScore}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Database className="w-3.5 h-3.5" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy: High</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Users className="w-3.5 h-3.5" />
            <span>Consent: Full</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs py-0">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center border-t bg-gray-50">
        <div className="font-bold text-ethos-blue">{price} $ETHOS</div>
        <Button className="bg-ethos-teal hover:bg-ethos-blue">Purchase</Button>
      </CardFooter>
    </Card>
  );
};

export default DatasetCard;
