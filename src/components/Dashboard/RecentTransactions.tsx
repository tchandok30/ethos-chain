
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, AlertCircle, CircleEllipsis } from 'lucide-react';

const transactions = [
  {
    id: 'tx123',
    type: 'Dataset Upload',
    name: 'Medical Imaging Dataset',
    status: 'verified',
    hash: '0x3a8d...e29f',
    time: '10 mins ago'
  },
  {
    id: 'tx456',
    type: 'Ethical Audit',
    name: 'NLP Training Model',
    status: 'pending',
    hash: '0x7b2c...f18a',
    time: '27 mins ago'
  },
  {
    id: 'tx789',
    type: 'Royalty Payment',
    name: 'Photography Collection',
    status: 'completed',
    hash: '0x9d4e...c52b',
    time: '1 hour ago'
  },
  {
    id: 'tx101',
    type: 'Consent Verification',
    name: 'Voice Recognition Data',
    status: 'flagged',
    hash: '0x2e6f...a97c',
    time: '3 hours ago'
  },
  {
    id: 'tx102',
    type: 'Dataset Upload',
    name: 'Synthetic Text Data',
    status: 'verified',
    hash: '0x8c3d...b45e',
    time: '5 hours ago'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'verified':
      return <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>;
    case 'pending':
      return <Badge className="bg-amber-500 hover:bg-amber-600">Pending</Badge>;
    case 'completed':
      return <Badge className="bg-blue-500 hover:bg-blue-600">Completed</Badge>;
    case 'flagged':
      return <Badge className="bg-red-500 hover:bg-red-600">Flagged</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'verified':
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'pending':
      return <CircleEllipsis className="w-5 h-5 text-amber-500" />;
    case 'flagged':
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    default:
      return null;
  }
};

const RecentTransactions = () => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="bg-gradient-to-r from-ethos-blue to-ethos-teal p-4">
        <CardTitle className="text-white text-lg">Recent Blockchain Transactions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[365px] overflow-y-auto">
          {transactions.map((tx, index) => (
            <React.Fragment key={tx.id}>
              <div className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(tx.status)}
                    <span className="font-medium">{tx.type}</span>
                  </div>
                  {getStatusBadge(tx.status)}
                </div>
                <div className="text-sm text-gray-500 mb-1">{tx.name}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-500">{tx.hash}</span>
                  <span className="text-gray-400">{tx.time}</span>
                </div>
              </div>
              {index < transactions.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
