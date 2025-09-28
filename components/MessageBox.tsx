import React, { useState, useEffect } from 'react';

interface MessageBoxProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2700); // A bit shorter than the CSS transition to allow fade out
    return () => clearTimeout(timer);
  }, [message, type]);

  const baseClasses = "fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-xl text-center font-bold text-lg z-50 transition-all duration-300 transform";
  
  const typeClasses = {
    success: 'bg-green-100 border-green-500 text-green-800',
    error: 'bg-red-100 border-red-500 text-red-800',
    info: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  };

  const visibilityClasses = visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${visibilityClasses}`}>
      {message}
    </div>
  );
};

export default MessageBox;
