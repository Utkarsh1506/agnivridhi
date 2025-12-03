'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import heroBlobData from '../public/lottie/hero-blob.json';
import achievementIconData from '../public/lottie/achievement-icon.json';

const achievements = [
  {
    value: '500+',
    label: 'MSMEs Funded',
    description: 'Successfully funded startups and MSMEs'
  },
  {
    value: '₹200Cr+',
    label: 'Funding Facilitated',
    description: 'Total funding secured for clients'
  },
  {
    value: '1000+',
    label: 'Businesses Registered',
    description: 'Registrations & compliance handled'
  },
  {
    value: '50+',
    label: 'IT Projects Delivered',
    description: 'Web & app development projects'
  }
];

export default function HeroLottie() {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const intervalRef = useRef(null);

  // Auto-rotate achievements every 4 seconds
  useEffect(() => {
    if (!shouldReduceMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentAchievement((prev) => (prev + 1) % achievements.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [shouldReduceMotion]);

  // Entrance animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleNextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = shouldReduceMotion ? {} : {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative background blob - Hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-20"
          variants={floatVariants}
          animate="animate"
        >
          <Lottie
            animationData={heroBlobData}
            loop={true}
            autoplay={!shouldReduceMotion}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Floating scribble accent - SVG */}
      <motion.svg
        className="absolute top-32 left-1/4 w-32 h-32 text-cyan-500 opacity-30 hidden md:block"
        viewBox="0 0 100 100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: shouldReduceMotion ? 0.3 : [0.3, 0.5, 0.3],
          scale: shouldReduceMotion ? 1 : [0.8, 1.1, 0.8],
          rotate: shouldReduceMotion ? 0 : [0, 10, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      >
        <path
          d="M20,50 Q30,20 50,30 T80,50 Q85,70 60,75 T30,65 Q15,55 20,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold border border-cyan-500/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                Trusted by 500+ MSMEs
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance"
              variants={itemVariants}
            >
              <span className="text-white font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Aapke Business Ki Udaan,</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-cyan bg-clip-text text-transparent">
                  Humare Saath
                </span>
                {/* Animated Scribble Underline */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <motion.path
                    d="M5 7 Q 75 3, 150 7 T 295 7"
                    stroke="url(#scribble-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="scribble-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-xl text-balance"
              variants={itemVariants}
            >
              One stop solution for MSMEs and Startups — funding, compliance, and IT solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, boxShadow: '0 20px 40px rgba(249, 75, 58, 0.4)' }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-label="Get started with Agnivridhi"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <motion.a
                href="/services"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                aria-label="Explore our services"
              >
                Explore Services
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-dark flex items-center justify-center text-white text-sm font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {'★'.repeat(5)}
                </div>
                <p>Rated 4.9/5 by clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Cards */}
          <div className="relative lg:pl-8">
            <div className="relative space-y-6">
              {/* Achievement Ticker Card */}
              <motion.div
                className="card-glass p-6 relative overflow-hidden"
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)' }}
              >
                {/* Lottie Trophy Icon */}
                <div className="absolute top-4 right-4 w-16 h-16">
                  <Lottie
                    animationData={achievementIconData}
                    loop={true}
                    autoplay={!shouldReduceMotion}
                    aria-label="Achievement trophy icon"
                  />
                </div>

                <div className="pr-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAchievement}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.4 }}
                    >
                      <div className="text-5xl font-bold text-white mb-2">
                        {achievements[currentAchievement].value}
                      </div>
                      <div className="text-xl font-semibold text-gray-200 mb-1">
                        {achievements[currentAchievement].label}
                      </div>
                      <div className="text-sm text-gray-400">
                        {achievements[currentAchievement].description}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={handlePrevAchievement}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous achievement"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextAchievement}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next achievement"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots indicator */}
                  <div className="flex gap-1.5 ml-auto">
                    {achievements.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentAchievement(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentAchievement
                            ? 'bg-cyan-500 w-6'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to achievement ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Merger & Acquisition Card */}
              <motion.div
                className="card-glass p-6 bg-teal-500/10 border-teal-500/30"
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Merger & Acquisition
                    </h3>
                    <p className="text-sm text-gray-400">
                      Expert advisory for business consolidation and growth
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Additional feature cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="card-glass p-4 text-center"
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-white">Funding</div>
                </motion.div>
                <motion.div
                  className="card-glass p-4 text-center"
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-white">Compliance</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Book Consultation CTA */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <motion.button
          onClick={() => window.openConsultationModal?.()}
          className="bg-gradient-cyan text-white px-6 py-4 rounded-full shadow-2xl font-semibold flex items-center gap-3 group"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          aria-label="Book consultation"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Consultation</span>
          <motion.span
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden="true"
          />
        </motion.button>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
