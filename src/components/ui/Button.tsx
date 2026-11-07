'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const sizeStyles = {
    sm: 'px-4 py-2 text-[11px] tracking-eyebrow',
    md: 'px-7 py-3.5 text-xs tracking-eyebrow',
    lg: 'px-9 py-4 text-xs tracking-eyebrow',
  };

  const variantStyles = {
    primary:
      'bg-gold-antique text-white border border-gold-antique hover:bg-gold-deep hover:border-gold-deep shadow-sm hover:shadow-luxury transition-all duration-300',
    secondary:
      'bg-heritage-brown text-white border border-heritage-brown hover:bg-gold-deep hover:border-gold-deep transition-all duration-300',
    outline:
      'bg-transparent text-heritage-brown border border-heritage-brown/60 hover:border-gold-antique hover:text-gold-antique transition-all duration-300',
    ghost:
      'bg-transparent text-heritage-brown hover:text-gold-antique p-0 transition-colors duration-200',
  };

  const baseContent = (
    <span className="relative z-10 flex items-center justify-center gap-2 uppercase font-medium font-sans">
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </span>
  );

  const fullClasses = `group relative inline-flex items-center justify-center overflow-hidden font-sans select-none disabled:opacity-50 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={fullClasses}>
        {baseContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.985 }}
      className={fullClasses}
    >
      {baseContent}
    </motion.button>
  );
};
