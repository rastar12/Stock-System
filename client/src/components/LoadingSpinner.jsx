
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
    </div>
  );
};

export default LoadingSpinner;
