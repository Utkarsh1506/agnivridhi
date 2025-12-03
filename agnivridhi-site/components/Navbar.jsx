'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationModal from './ConsultationModal';
import { 
  HomeIcon, 
  InformationCircleIcon, 
  BriefcaseIcon, 
  NewspaperIcon,
  DocumentTextIcon,
  PhoneIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  CheckBadgeIcon,
  TrophyIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export default function Navbar({ onConsultationClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/about', label: 'About', icon: InformationCircleIcon },
    { href: '/services', label: 'Services', icon: BriefcaseIcon },
    { href: '/blog', label: 'Blog', icon: NewspaperIcon },
    {
      label: 'Pages',
      icon: DocumentTextIcon,
      dropdown: [
        { href: '/features', label: 'Our Features', icon: CheckBadgeIcon },
        { href: '/success-stories', label: 'Success Stories', icon: TrophyIcon },
        { href: '/faq', label: 'FAQs', icon: QuestionMarkCircleIcon },
      ]
    },
    { href: '/contact', label: 'Contact', icon: PhoneIcon },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-cyan-100' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Animation */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
              <motion.div 
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                  <img
                    src="/logo1.png"
                    alt="Agnivridhi India"
                    className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all"
                  />
                </div>
              </motion.div>
              <motion.span 
                className="hidden sm:block text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Agnivridhi
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <div key={index} className="relative">
                    {link.dropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <motion.button 
                          className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors flex items-center gap-2 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          {link.label}
                          <ChevronDownIcon className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-cyan-100 py-2 overflow-hidden"
                            >
                              {link.dropdown.map((item, i) => {
                                const DropIcon = item.icon;
                                return (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 hover:text-cyan-700 transition-all group"
                                    >
                                      <DropIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                      <span className="font-medium">{item.label}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={link.href}
                          className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors flex items-center gap-2 group"
                        >
                          <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          {link.label}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+919289555190"
                className="flex items-center gap-2 px-4 py-2 text-teal-600 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button
                onClick={onConsultationClick}
                className="relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 z-50"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-cyan-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-6 h-6" />
                              <span className="font-medium">{link.label}</span>
                            </div>
                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="ml-6 mt-2 space-y-2 overflow-hidden"
                              >
                                {link.dropdown.map((item, i) => {
                                  const DropIcon = item.icon;
                                  return (
                                    <Link
                                      key={i}
                                      href={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors"
                                    >
                                      <DropIcon className="w-5 h-5" />
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700 rounded-lg transition-colors"
                        >
                          <Icon className="w-6 h-6" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <a
                    href="tel:+919289555190"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 text-teal-600 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call Now
                  </a>
                  <button
                    onClick={() => {
                      onConsultationClick();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-full"
                  >
                    Get Started →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
