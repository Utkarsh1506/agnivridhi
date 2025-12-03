import Head from 'next/head';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function Terms() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Agnivridhi India\'s services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to update, change or replace any part of these Terms and Conditions by posting updates on our website.'
      ]
    },
    {
      title: '2. Services Provided',
      content: [
        'Agnivridhi India provides business consulting services including but not limited to: MSME funding assistance, government scheme applications (CGTMSE, PMEGP, MUDRA), business registration, GST & ISO certifications, digital marketing, and web development.',
        'We act as facilitators and consultants. Final approvals for government schemes rest with respective government authorities.',
        'Service timelines are estimates and may vary based on government processing times and document verification.'
      ]
    },
    {
      title: '3. User Responsibilities',
      content: [
        'You agree to provide accurate, current, and complete information during registration and service engagement.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree not to use our services for any unlawful or unauthorized purpose.',
        'You must provide all required documents and information promptly for timely service delivery.'
      ]
    },
    {
      title: '4. Payment Terms',
      content: [
        'Payment terms are specified in the service agreement/quotation provided to you.',
        'Consultation fees, if applicable, are non-refundable once services have commenced.',
        'Government fees, registration charges, and third-party costs are separate and non-refundable.',
        'We accept payments through bank transfer, UPI, credit/debit cards, and other authorized payment methods.',
        'GST will be charged as applicable on all services.'
      ]
    },
    {
      title: '5. Refund Policy',
      content: [
        'Refunds are subject to the terms mentioned in your service agreement.',
        'Government processing fees and third-party charges are non-refundable.',
        'If you cancel services before work begins, consultation fees may be retained.',
        'Refund requests must be made in writing within 7 days of service commencement.',
        'Refunds will be processed within 15-30 business days of approval.'
      ]
    },
    {
      title: '6. Intellectual Property',
      content: [
        'All content, trademarks, logos, and materials on our website are owned by Agnivridhi India or licensed to us.',
        'You may not reproduce, distribute, or create derivative works without explicit written permission.',
        'Client-specific deliverables (reports, strategies, websites) become the property of the client upon full payment.',
        'We retain the right to use anonymized case studies and testimonials for marketing purposes.'
      ]
    },
    {
      title: '7. Confidentiality',
      content: [
        'We maintain strict confidentiality of all client information and documents.',
        'Client data will not be shared with third parties except as required for service delivery or legal compliance.',
        'Both parties agree not to disclose confidential business information without consent.',
        'This obligation continues even after termination of services.'
      ]
    },
    {
      title: '8. Limitation of Liability',
      content: [
        'Agnivridhi India provides consulting services to the best of our ability but cannot guarantee specific outcomes.',
        'We are not liable for delays caused by government processing, third-party services, or force majeure events.',
        'Our liability is limited to the amount paid for the specific service in question.',
        'We are not responsible for indirect, incidental, or consequential damages.',
        'Government scheme approvals depend on eligibility criteria and are at the discretion of respective authorities.'
      ]
    },
    {
      title: '9. Service Termination',
      content: [
        'Either party may terminate services with written notice as per the service agreement.',
        'We reserve the right to terminate services if you breach these terms or provide false information.',
        'Upon termination, you remain liable for payment of services rendered up to that point.',
        'Work completed before termination will be delivered as per the agreement.'
      ]
    },
    {
      title: '10. Dispute Resolution',
      content: [
        'Any disputes arising from these terms shall be resolved through mutual negotiation first.',
        'If negotiation fails, disputes will be subject to arbitration under Indian Arbitration and Conciliation Act.',
        'The jurisdiction for legal matters shall be Ghaziabad, Uttar Pradesh, India.',
        'Legal proceedings, if any, shall be conducted in English or Hindi.'
      ]
    },
    {
      title: '11. Amendments',
      content: [
        'We reserve the right to modify these terms at any time.',
        'Changes will be effective immediately upon posting on our website.',
        'Continued use of our services after changes constitutes acceptance of new terms.',
        'We will notify clients of significant changes via email or website announcement.'
      ]
    },
    {
      title: '12. Contact Information',
      content: [
        'For questions about these Terms and Conditions, please contact us:',
        'Email: info@agnivridhiindia.com',
        'Phone: +91 9289555190',
        'Address: Ghaziabad, Uttar Pradesh, India'
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title="Terms and Conditions | Agnivridhi India"
        description="Read the terms and conditions for using Agnivridhi India's business consulting services including MSME funding, certifications, and digital marketing."
        url="https://agnivridhiindia.com/terms"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center">
                <ScaleIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Terms & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 mb-8"
            >
              <div className="flex items-start gap-4">
                <DocumentTextIcon className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed mb-0">
                    Welcome to Agnivridhi India. These Terms and Conditions govern your use of our website and services. 
                    By engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* All Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-8 pb-8 border-b border-gray-200 last:border-0"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mt-8"
            >
              <div className="flex items-start gap-4">
                <ShieldCheckIcon className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h3>
                  <p className="text-gray-600 leading-relaxed mb-0">
                    These terms constitute a legally binding agreement between you and Agnivridhi India. 
                    If you have any questions or concerns about these terms, please contact us before using our services. 
                    Your continued use of our services signifies your acceptance of these terms and any future modifications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About Our Terms?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Our team is here to clarify any doubts about our terms and conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Contact Us
              </motion.button>
              <motion.a
                href="/privacy"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-block"
              >
                Privacy Policy
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
