'use client';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-cyan-600 to-teal-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50"
      aria-label="Back to top"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </motion.button>
  );
}
