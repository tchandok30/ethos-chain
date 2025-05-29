
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend
} from 'recharts';

interface RadarChartProps {
  title: string;
  data: {
    subject: string;
    model: number;
    average: number;
    fullMark: number;
  }[];
}

const EthicalRadarChart: React.FC<RadarChartProps> = ({ title, data }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-ethos-blue to-ethos-dark p-4">
        <CardTitle className="text-white text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex items-center justify-center min-h-[300px] graph-bg">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="rgba(10, 36, 99, 0.2)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6B7280', fontSize: 10 }} />
            
            <Radar
              name="This Model"
              dataKey="model"
              stroke="#1B998B"
              fill="#1B998B"
              fillOpacity={0.6}
            />
            
            <Radar
              name="Industry Average"
              dataKey="average"
              stroke="#0A2463"
              fill="#0A2463"
              fillOpacity={0.4}
            />
            
            <Legend />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EthicalRadarChart;
