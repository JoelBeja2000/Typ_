
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
