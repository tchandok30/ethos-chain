
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type MetricProps = {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
};

const EthicalMetricsCard = ({ title, value, description, icon }: MetricProps) => {
  const getColorClass = (value: number) => {
    if (value >= 90) return "text-green-500";
    if (value >= 70) return "text-emerald-500";
    if (value >= 50) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-ethos-blue to-ethos-teal p-4">
        <CardTitle className="text-white flex items-center justify-between text-lg">
          {title}
          <span className="bg-white/20 p-2 rounded-full">{icon}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Score</span>
          <span className={`text-2xl font-bold ${getColorClass(value)}`}>{value}%</span>
        </div>
        <Progress value={value} className="h-2 mb-3" />
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EthicalMetricsCard;
