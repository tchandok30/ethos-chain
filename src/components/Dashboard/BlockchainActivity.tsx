
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';

const data = [
  { name: 'Jan', audits: 12, datasets: 20, tokenValue: 1.2 },
  { name: 'Feb', audits: 19, datasets: 25, tokenValue: 1.3 },
  { name: 'Mar', audits: 17, datasets: 30, tokenValue: 1.5 },
  { name: 'Apr', audits: 25, datasets: 40, tokenValue: 1.7 },
  { name: 'May', audits: 30, datasets: 45, tokenValue: 2.0 },
  { name: 'Jun', audits: 43, datasets: 60, tokenValue: 2.3 },
  { name: 'Jul', audits: 52, datasets: 75, tokenValue: 2.7 }
];

const BlockchainActivity = () => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-ethos-teal to-ethos-aqua p-4">
        <CardTitle className="text-white text-lg">Blockchain Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-4 graph-bg">
        <div className="h-[280px] pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorAudits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A2463" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0A2463" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorDatasets" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#247BA0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#247BA0" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
              <YAxis tick={{ fill: '#6B7280' }} />
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="audits" 
                stroke="#0A2463" 
                fillOpacity={1} 
                fill="url(#colorAudits)"
                name="Audits Performed" 
              />
              <Area 
                type="monotone" 
                dataKey="datasets" 
                stroke="#247BA0" 
                fillOpacity={1} 
                fill="url(#colorDatasets)" 
                name="Datasets Verified"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-ethos-blue mr-2"></div>
            <span className="text-gray-600">Audits Performed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-ethos-teal mr-2"></div>
            <span className="text-gray-600">Datasets Verified</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-ethos-accent mr-2"></div>
            <span className="text-gray-600">$ETHOS Value: ${data[data.length - 1].tokenValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainActivity;
