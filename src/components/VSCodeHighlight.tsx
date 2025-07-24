import React from 'react';

interface VSCodeHighlightProps {
  children: React.ReactNode;
}

// VS Code-style color classes
const highlightClasses = {
  keyword: 'text-blue-400',      // VS Code blue for keywords
  string: 'text-green-400',      // VS Code green for strings
  comment: 'text-gray-500',      // VS Code gray for comments
  number: 'text-orange-400',     // VS Code orange for numbers
  property: 'text-cyan-400',     // VS Code cyan for properties
  function: 'text-yellow-300',   // VS Code yellow for functions
  variable: 'text-purple-400',   // VS Code purple for variables
  operator: 'text-white',        // VS Code white for operators
  bracket: 'text-gray-300',      // VS Code light gray for brackets
};

const VSCodeHighlight: React.FC<VSCodeHighlightProps> = ({ children }) => {
  return (
    <div className="vs-code-content">
      {children}
    </div>
  );
};

// Helper components for different types of highlighted content
export const Keyword: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.keyword}>{children}</span>
);

export const String: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.string}>{children}</span>
);

export const Comment: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.comment}>{children}</span>
);

export const Number: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.number}>{children}</span>
);

export const Property: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.property}>{children}</span>
);

export const Function: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.function}>{children}</span>
);

export const Variable: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.variable}>{children}</span>
);

export const Operator: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.operator}>{children}</span>
);

export const Bracket: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className={highlightClasses.bracket}>{children}</span>
);

export default VSCodeHighlight; 