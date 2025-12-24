'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessName: '',
    businessType: '',
    fundingRequired: '',
    serviceInterested: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbxhXssWcCEYQarFtOakmxU4iizigxPbPUiPf-_-Bb368ZFpB45GEw0lrKpXYgdk9Ix3/exec';
      
      // Send data to Google Apps Script
      const response = await fetch(googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since we're using no-cors mode, we assume success if no error is thrown
      setStatus('success');
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        businessName: '',
        businessType: '',
        fundingRequired: '',
        serviceInterested: '',
        message: ''
      });
      setTimeout(() => {
        setStatus('');
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 relative max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-hero text-white p-8 rounded-t-2xl sticky top-0 z-10 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-3xl font-bold mb-2">Book Free Consultation</h2>
                <p className="text-gray-100">Get expert advice for your business growth</p>
              </div>

              {/* Form */}
              <div className="p-8">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                          placeholder="10-digit mobile"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                        placeholder="Your business name (optional)"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">Business Type *</label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                        >
                          <option value="">Select type</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Service">Service</option>
                          <option value="Trading">Trading</option>
                          <option value="Retail">Retail</option>
                          <option value="Startup">Startup</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-dark mb-2">Funding Required</label>
                        <select
                          name="fundingRequired"
                          value={formData.fundingRequired}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                        >
                          <option value="">Select range</option>
                          <option value="Under ₹10 Lakhs">Under ₹10 Lakhs</option>
                          <option value="₹10-25 Lakhs">₹10-25 Lakhs</option>
                          <option value="₹25-50 Lakhs">₹25-50 Lakhs</option>
                          <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                          <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                          <option value="Not Sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Service Interested *</label>
                      <select
                        name="serviceInterested"
                        value={formData.serviceInterested}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none"
                      >
                        <option value="">Select service</option>
                        <option value="CGTMSE Loan">CGTMSE Loan</option>
                        <option value="MUDRA Loan">MUDRA Loan</option>
                        <option value="PMEGP Scheme">PMEGP Scheme</option>
                        <option value="Business Loan">Business Loan</option>
                        <option value="GST Registration">GST Registration</option>
                        <option value="MSME Registration">MSME Registration</option>
                        <option value="ISO Certification">ISO Certification</option>
                        <option value="Trademark Registration">Trademark Registration</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">Additional Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all outline-none resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        Failed to submit. Please try again or call us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-gradient-cyan text-white font-semibold py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting, you agree to our Terms & Privacy Policy
                    </p>

                    {/* Mobile-friendly close link */}
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-2 w-full text-center text-sm text-gray-600 underline sm:hidden"
                    >
                      Close
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
