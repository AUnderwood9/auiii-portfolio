import React from 'react';
import { useTabNavBar } from './TabNavBarContext';
import { PlusIcon } from '@heroicons/react/24/outline';

const TabNavBar: React.FC = () => {
    const { openTabs, activeTab, closeTab, setActiveTab, getTabIcon } = useTabNavBar();

    return (
        <div className="bg-gray-800 border-b border-gray-700 flex items-center min-h-[35px] pr-2">
            {openTabs.length > 0 ? (
                <div className="flex">
                    {openTabs.map((tab) => {
                        const isActive = activeTab?.path === tab.path;
                        const tabClasses = [
                            'border-gray-600 px-3 py-2',
                            'flex items-center space-x-2',
                            'min-w-[120px] max-w-[200px]',
                            'group hover:bg-gray-650 cursor-pointer',
                            isActive ? 'bg-gray-600' : 'bg-gray-900'
                        ].join(' ');

                        return (
                            <div
                                key={tab.path}
                                className={tabClasses}
                                onClick={() => setActiveTab(tab)}
                            >
                                <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                    {getTabIcon(tab)}
                                </div>
                                <span className="text-sm truncate flex-1 text-white">
                                    {tab.text || 'Untitled'}
                                </span>
                                {tab.isClosable !== false && (
                                    <button
                                        className="w-4 h-4 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 hover:bg-gray-600 text-xs"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeTab(tab);
                                        }}
                                    >
                                        x
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="px-3 py-2 text-gray-400 text-sm">
                    No file open
                </div>
            )}

            <div className="ml-auto flex items-center">
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-700 text-gray-400 hover:text-white">
                    <PlusIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default TabNavBar; 