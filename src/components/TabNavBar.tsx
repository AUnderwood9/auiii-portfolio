import React from 'react';
import { useTabNavBar } from './TabNavBarContext';
import { useLocation } from 'react-router-dom';

const TabNavBar: React.FC = () => {
  const { openTabs, closeTab, setActiveTab } = useTabNavBar();
  const location = useLocation();

  return (
    <div className="bg-gray-800 border-b border-gray-700 flex items-center min-h-[35px] pr-2">
      {openTabs.length > 0 ? (
        <div className="flex">
          {openTabs.map((tab) => (
            <div
              key={tab.path}
              className={`border-r border-gray-600 px-3 py-2 flex items-center space-x-2 min-w-[120px] max-w-[200px] group hover:bg-gray-650 cursor-pointer ${location.pathname === tab.path ? 'bg-gray-600' : 'bg-gray-900'}`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                {React.isValidElement(tab.icon) ? tab.icon : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M14 1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3 13V3h10v10H3z"/>
                  </svg>
                )}
              </div>
              <span className="text-sm truncate flex-1">
                {tab.text || 'Untitled'}
              </span>
              <button 
                className="w-4 h-4 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 hover:bg-gray-600 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab);
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-3 py-2 text-gray-400 text-sm">
          No file open
        </div>
      )}

      <div className="ml-auto flex items-center">
        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700 text-gray-400 hover:text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7.5 7.5h-7v1h7v7h1v-7h7v-1h-7v-7h-1v7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TabNavBar; 