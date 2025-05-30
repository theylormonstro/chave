import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'rounded-lg font-bold text-lg py-4 px-8 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 shadow-lg';
  
  const typeClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-blue-400 border border-blue-500',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;