'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import ConsultationModal from './ConsultationModal';

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Auto-show modal on first visit (after 2 seconds)
    const hasVisited = sessionStorage.getItem('hasVisitedBefore');
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640; // Tailwind 'sm' breakpoint
    if (!hasVisited && !isMobile) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem('hasVisitedBefore', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Make modal accessible globally via window object
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openConsultationModal = () => setShowModal(true);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar onConsultationClick={() => setShowModal(true)} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <ConsultationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
