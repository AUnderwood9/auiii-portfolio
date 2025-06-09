import React from 'react';

interface CodeEditorProps {
  children: React.ReactNode;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  children,
}) => {
  return (
    <div className="h-full bg-gray-900 text-gray-100">
      <div className="h-full p-6 overflow-auto">
        <div className="max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor; 