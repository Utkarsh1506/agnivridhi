'use client';
import { motion } from 'framer-motion';

export default function AnimatedCard({ 
  children, 
  className = '',
  hoverScale = 1.02,
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: hoverScale, 
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        transition: { duration: 0.3 }
      }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ServiceCard({ icon: Icon, title, description, link, delay = 0 }) {
  return (
    <AnimatedCard delay={delay}>
      <motion.div
        className="p-6 h-full flex flex-col"
        whileHover={{ backgroundColor: 'rgba(8, 145, 178, 0.02)' }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="mb-4 text-cyan-600"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{description}</p>
        {link && (
          <motion.a
            href={link}
            className="text-cyan-600 font-semibold inline-flex items-center gap-2 group"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        )}
      </motion.div>
    </AnimatedCard>
  );
}
