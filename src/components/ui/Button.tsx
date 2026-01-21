import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'blue' | 'white' | 'gold-gradient';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'transition-all duration-300 font-medium inline-flex items-center justify-center cursor-pointer';

  const variants = {
    primary:
      'bg-gold text-white hover:bg-gold-light rounded-[50px] shadow-lg hover:shadow-gold/20',
    outline:
      'border border-gold text-gold hover:bg-gold hover:text-white rounded-[50px]',
    blue: 'bg-viottoBlue text-white hover:bg-blue-600 rounded-[2px]',
    white:
      'bg-transparent text-white border border-white hover:bg-white hover:text-black rounded-[50px]',
    'gold-gradient':
      'bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] text-black border border-yellow-400 font-semibold rounded-md hover:brightness-110 shadow-[0_0_10px_rgba(255,215,0,0.3)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
