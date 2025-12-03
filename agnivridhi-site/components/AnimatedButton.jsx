'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}) {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-xl hover:shadow-cyan-500/50',
    secondary: 'bg-white text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-50',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-cyan-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2"
    >
      {children}
      <motion.svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </motion.svg>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}
