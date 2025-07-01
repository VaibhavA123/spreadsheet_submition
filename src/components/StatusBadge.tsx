import React from 'react';

type Props = { value: string };

const colors: Record<string, string> = {
  'In-process': 'bg-yellow-200 text-yellow-800',
  'Complete': 'bg-green-200 text-green-800',
  'Blocked': 'bg-red-200 text-red-800',
  'Need to start': 'bg-orange-100 text-orange-800',
  'High': 'bg-red-100 text-red-700',
  'Medium': 'bg-yellow-100 text-yellow-700',
  'Low': 'bg-blue-100 text-blue-700',
};

const StatusBadge = ({ value }: Props) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium ${colors[value] || 'bg-gray-100'}`}>
    {value}
  </span>
);

export default StatusBadge;
