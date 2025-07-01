import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Sheet 1');
  const tabs = ['Sheet 1', 'Sheet 2', 'Sheet 3'];

  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            console.log(`Switched to ${tab}`);
          }}
          className={`px-4 py-1 rounded-md border text-sm font-medium ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;