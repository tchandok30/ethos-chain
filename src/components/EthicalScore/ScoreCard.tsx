
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ScoreCardProps {
  title: string;
  score: number;
  description: string;
  categories: {
    name: string;
    value: number;
  }[];
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  title,
  score,
  description,
  categories
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-emerald-500";
    if (score >= 50) return "text-amber-500";
    return "text-red-500";
  };

  const getCategoryColor = (value: number) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 70) return "bg-emerald-500";
    if (value >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-ethos-blue to-ethos-teal p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-lg">{title}</CardTitle>
          <div className={`${getScoreColor(score)} bg-white rounded-full px-3 py-1 text-xl font-bold`}>
            {score}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">{category.name}</span>
                <span className={`${getScoreColor(category.value)} font-medium text-sm`}>{category.value}/100</span>
              </div>
              <Progress 
                value={category.value} 
                className={`h-2 ${getCategoryColor(category.value)}`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
