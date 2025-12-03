import Head from 'next/head';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CurrencyRupeeIcon, 
  ClockIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function CGTMSEGeorgeMartin() {
  const results = [
    { value: '₹35L', label: 'Collateral-Free Capital' },
    { value: '30 Days', label: 'From File to Approval' },
    { value: '+18%', label: 'Working Capital Efficiency' }
  ];

  const solutions = [
    'Business plan and financial projections',
    'End-to-end documentation and application',
    'Bank liaison and follow-up',
    'Compliance setup to support disbursement'
  ];

  const relatedServices = [
    { name: 'CGTMSE Funding', href: '/services/cgtmse-mudra' },
    { name: 'Business Loans', href: '/services/cgtmse-mudra' },
    { name: 'MSME Compliance', href: '/services/msme-udyam' },
    { name: 'Business Consulting', href: '/services/strategy-consulting' }
  ];

  return (
    <Layout>
      <SEO
        title="CGTMSE Success: George Martin Jose | Agnivridhi India"
        description="How George Martin Jose secured ₹35L collateral-free CGTMSE capital to scale operations and stabilize cash flow with strategic support from Agnivridhi India."
        keywords="CGTMSE, collateral-free loan, MSME funding, George Martin Jose, business success story"
        url="https://agnivridhiindia.com/case-studies/cgtmse-george-martin-jose"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-1 bg-cyan-600 text-white text-sm font-semibold rounded-full">
                CGTMSE Loan
              </span>
              <span className="px-4 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                Working Capital
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Scaling Operations with Collateral-Free Capital
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              George Martin Jose's journey to securing ₹35 lakhs in CGTMSE funding
            </p>
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-cyan-600">Home</Link>
              <span>/</span>
              <Link href="/success-stories" className="hover:text-cyan-600">Success Stories</Link>
              <span>/</span>
              <span className="text-cyan-600">CGTMSE Funding</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Challenge */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">The Challenge</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    George needed timely capital to expand operations and stabilize working capital cycles. 
                    Traditional bank financing required collateral and complex documentation, creating delays and uncertainty.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Like many MSME owners, George faced the challenge of accessing growth capital without 
                    pledging assets, while maintaining business momentum during the application process.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We assessed eligibility under the CGTMSE scheme and managed the process end-to-end, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-cyan-50 rounded-lg p-4"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">The Results</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 text-center border border-cyan-100"
                      >
                        <h3 className="text-4xl font-bold text-cyan-600 mb-2">{result.value}</h3>
                        <p className="text-gray-700">{result.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Client Testimonial</h2>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 text-white"
                  >
                    <div className="text-6xl mb-4 opacity-50">"</div>
                    <p className="text-xl italic leading-relaxed mb-4">
                      Agnivridhi handled everything—from eligibility to bank coordination. I could focus on 
                      the business while they ensured a smooth approval.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyan-600">GM</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg">George Martin Jose</p>
                        <p className="text-cyan-100">Business Owner</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* About CGTMSE */}
                <div className="bg-cyan-50 border-l-4 border-cyan-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-cyan-600" />
                    About CGTMSE
                  </h3>
                  <p className="text-gray-600">
                    Collateral-free loans for MSMEs up to ₹2 crore through partner banks and NBFCs. 
                    The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides 
                    guarantees to lending institutions, enabling them to offer loans without security.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 mb-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for CGTMSE funding?</h3>
                  <p className="text-gray-600 mb-6">
                    We can help you assess eligibility and secure approval—fast.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => window.openConsultationModal?.()}
                      className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all"
                    >
                      Book Free Consultation
                    </button>
                    <a
                      href="https://wa.me/919289555190"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="tel:+919289555190"
                      className="w-full bg-transparent border-2 border-cyan-600 text-cyan-600 font-bold py-3 px-6 rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>

                  <hr className="my-6 border-gray-200" />

                  <h4 className="font-bold text-gray-900 mb-4">Related Services</h4>
                  <ul className="space-y-3">
                    {relatedServices.map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-cyan-600" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-4">Why Choose CGTMSE?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">No collateral required up to ₹2 Cr</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">80% guarantee coverage for lenders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">Quick approval for eligible MSMEs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">Suitable for both new and existing businesses</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Talk to our experts about funding, certifications, and growth. Quick eligibility check and next steps in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Book Free Consultation
              </motion.button>
              <motion.a
                href="/success-stories"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-flex items-center gap-2"
              >
                More Success Stories
                <ArrowRightIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
