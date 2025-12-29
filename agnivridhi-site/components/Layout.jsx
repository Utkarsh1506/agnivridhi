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
    // Auto-open disabled: first-visit popup is suppressed on all devices
    sessionStorage.setItem('hasVisitedBefore', 'true');
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
