import Head from 'next/head';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon, 
  InformationCircleIcon,
  ShieldExclamationIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function Disclaimer() {
  const sections = [
    {
      title: 'General Disclaimer',
      icon: InformationCircleIcon,
      content: [
        'The information provided on this website and through our services is for general informational and educational purposes only.',
        'While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, services, or materials contained on this website.',
        'Any reliance you place on such information is strictly at your own risk.'
      ]
    },
    {
      title: 'Professional Services Disclaimer',
      icon: DocumentMagnifyingGlassIcon,
      content: [
        'Agnivridhi India provides business consulting and facilitation services. We are not a bank, financial institution, or government agency.',
        'We assist clients in applying for government schemes (CGTMSE, PMEGP, MUDRA, etc.), but final approval decisions rest solely with respective government authorities and banks.',
        'We do not guarantee loan approvals, scheme sanctions, or specific outcomes. Success depends on eligibility criteria, documentation, government policies, and bank assessment.',
        'Our role is limited to consulting, documentation, and application facilitation.'
      ]
    },
    {
      title: 'No Guarantee of Results',
      icon: ShieldExclamationIcon,
      content: [
        'While we provide professional consulting services based on our expertise and experience, we cannot guarantee specific results or outcomes.',
        'Business success, funding approvals, certification timelines, and marketing results depend on multiple factors beyond our control including government processing times, eligibility criteria, market conditions, and client effort.',
        'Past success stories and testimonials do not guarantee similar results for your business.',
        'Every business situation is unique, and outcomes may vary significantly.'
      ]
    },
    {
      title: 'Government Schemes Disclaimer',
      content: [
        'Information about government schemes (CGTMSE, PMEGP, MUDRA, Startup India, etc.) is sourced from official government websites and notifications.',
        'Scheme terms, eligibility criteria, interest rates, and guidelines are subject to change by government authorities without notice.',
        'We are not responsible for any changes, modifications, or discontinuation of government schemes.',
        'Clients must verify current scheme details with respective government departments before making decisions.',
        'Processing times mentioned are estimates and may vary based on government workload and document verification.'
      ]
    },
    {
      title: 'Financial Advice Disclaimer',
      content: [
        'We provide business consulting and funding facilitation services but are not licensed financial advisors or investment consultants.',
        'Any financial information or suggestions provided should not be considered as professional financial, tax, or legal advice.',
        'Clients should consult with qualified chartered accountants, lawyers, or financial advisors for specific financial and legal decisions.',
        'We are not responsible for any financial losses or business decisions made based on our consultation.',
        'Loan terms, interest rates, and repayment conditions are determined by banks and financial institutions.'
      ]
    },
    {
      title: 'Website Content Disclaimer',
      content: [
        'This website may contain technical inaccuracies or typographical errors. Information may be changed or updated without notice.',
        'We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without prior notice.',
        'The website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites.',
        'Downloading files or accessing links from this website is at your own risk. We are not liable for any damage or viruses.',
        'Content on the website, including blog posts and case studies, represents our opinions and experiences and should not be taken as guaranteed outcomes.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'Agnivridhi India, its directors, employees, partners, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:',
        '• Use or inability to use our services',
        '• Delays or rejection of government applications',
        '• Errors or omissions in information provided',
        '• Business losses or missed opportunities',
        '• Third-party actions or government policy changes',
        'Our total liability, if any, shall not exceed the amount paid by you for the specific service in question.'
      ]
    },
    {
      title: 'Accuracy of Business Plans & Documents',
      content: [
        'Business plans, project reports, and financial projections prepared by us are based on information provided by clients.',
        'We are not responsible for the accuracy of information provided by clients or third parties.',
        'Financial projections are estimates and should not be considered guaranteed future performance.',
        'Clients are responsible for reviewing and verifying all documents before submission to authorities.',
        'Any misrepresentation or false information provided by clients may lead to application rejection, and we shall not be held liable.'
      ]
    },
    {
      title: 'Digital Marketing Disclaimer',
      content: [
        'Digital marketing results (website traffic, leads, conversions, ROI) depend on multiple factors including industry competition, budget, market conditions, and client\'s business quality.',
        'We do not guarantee specific rankings on search engines, number of leads, or sales conversions.',
        'Social media followers, engagement, and reach are subject to platform algorithms and policies beyond our control.',
        'Marketing campaigns require time to show results. Immediate outcomes are not guaranteed.',
        'Client cooperation and timely feedback are essential for successful campaign execution.'
      ]
    },
    {
      title: 'Intellectual Property Disclaimer',
      content: [
        'All website designs, logos, marketing materials, and digital assets created by us remain our intellectual property until full payment is received.',
        'Upon full payment, agreed deliverables are transferred to the client with usage rights as per the service agreement.',
        'We reserve the right to use anonymized case studies and project samples for our portfolio and marketing purposes.',
        'Clients must not use our proprietary methodologies, templates, or processes for commercial purposes without written permission.',
        'Third-party images, icons, and resources used are properly licensed or used under fair use guidelines.'
      ]
    },
    {
      title: 'Testimonials & Case Studies',
      content: [
        'Testimonials and success stories featured on our website are genuine experiences of past clients.',
        'Results mentioned in case studies are specific to those clients and should not be considered as typical or guaranteed results.',
        'Individual outcomes may vary based on business model, market conditions, effort, and external factors.',
        'Some testimonials may be edited for length and clarity while maintaining the original intent.',
        'Clients featured in case studies have provided consent for their stories to be shared.'
      ]
    },
    {
      title: 'Refund & Service Delivery',
      content: [
        'Service timelines mentioned are estimates and may be affected by factors beyond our control (government processing, client documentation delays, third-party dependencies).',
        'Refund policies are governed by the Terms and Conditions and individual service agreements.',
        'We are not responsible for delays caused by incomplete documentation, government office closures, technical issues, or force majeure events.',
        'Clients must fulfill their obligations (document submission, payments, approvals) for timely service delivery.'
      ]
    },
    {
      title: 'Legal Disclaimer',
      content: [
        'This disclaimer is governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Ghaziabad, Uttar Pradesh.',
        'If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall remain in full force.',
        'We reserve the right to update this disclaimer at any time without prior notice.',
        'Continued use of our services after changes constitutes acceptance of the updated disclaimer.',
        'For legal matters, clients should consult with qualified legal professionals.'
      ]
    },
    {
      title: 'Contact for Clarifications',
      content: [
        'If you have any questions about this disclaimer or need clarification on any aspect of our services, please contact us:',
        'Email: info@agnivridhiindia.com',
        'Phone: +91 9289555190',
        'We will be happy to address your concerns and provide additional information.'
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title="Disclaimer | Agnivridhi India"
        description="Important disclaimers about Agnivridhi India's services, government scheme facilitation, and business consulting. Please read before using our services."
        url="https://agnivridhiindia.com/disclaimer"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
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
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
                <ExclamationTriangleIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Disclaimer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Important information about our services, limitations, and responsibilities
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-600"
          >
            <div className="flex items-start gap-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Read Carefully</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  This disclaimer outlines the limitations and responsibilities associated with using Agnivridhi India's services. 
                  By engaging with our services, you acknowledge that you have read, understood, and agree to this disclaimer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We recommend consulting with qualified professionals (chartered accountants, lawyers, financial advisors) 
                  for specific legal, financial, or tax advice before making business decisions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-12 pb-8 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-start gap-4 mb-6">
                  {Icon && (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{section.title}</h3>
                </div>

                <div className={`space-y-3 ${Icon ? 'ml-16' : ''}`}>
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final Notice */}
      <section className="py-12 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <InformationCircleIcon className="w-10 h-10 text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our Role</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Agnivridhi India is a business consulting firm dedicated to helping MSMEs and startups navigate 
                  government schemes, certifications, and growth strategies. We provide guidance, documentation support, 
                  and application facilitation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  However, we do not have control over government approval processes, bank lending decisions, or market outcomes. 
                  Our expertise lies in maximizing your chances of success through proper documentation, strategy, and guidance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to transparency, ethical practices, and delivering quality services. Your success is our goal, 
                  but it requires collaborative effort and realistic expectations.
                </p>
              </div>
            </div>
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
              Need Clarification?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              If you have questions about this disclaimer or our services, we're here to help
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
                href="/terms"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-block"
              >
                Terms & Conditions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
