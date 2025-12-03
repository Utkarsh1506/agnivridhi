import Head from 'next/head';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function PMEGPVedantaCosmetics() {
  const results = [
    { value: '35%', label: 'Government Subsidy' },
    { value: '₹15L', label: 'Total Project Cost' },
    { value: '45 Days', label: 'Setup to Launch' }
  ];

  const solutions = [
    'PMEGP eligibility assessment and application',
    'Detailed project report preparation',
    'Bank loan coordination for balance 65%',
    'MSME registration and compliance setup',
    'Training program coordination'
  ];

  const relatedServices = [
    { name: 'PMEGP Scheme', href: '/services/pmegp' },
    { name: 'Business Planning', href: '/services/strategy-consulting' },
    { name: 'MSME Registration', href: '/services/msme-udyam' },
    { name: 'GST Registration', href: '/services/gst-registration' }
  ];

  return (
    <Layout>
      <SEO
        title="PMEGP Success: Vedanta Cosmetics | Agnivridhi India"
        description="How Vedanta Cosmetics secured 35% government subsidy through PMEGP scheme to launch their cosmetics manufacturing unit with Agnivridhi India's support."
        keywords="PMEGP, government subsidy, cosmetics manufacturing, Vedanta Cosmetics, startup funding"
        url="https://agnivridhiindia.com/case-studies/pmegp-vedanta-cosmetics"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                PMEGP Subsidy
              </span>
              <span className="px-4 py-1 bg-pink-600 text-white text-sm font-semibold rounded-full">
                Manufacturing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Launching a Cosmetics Brand with 35% Government Support
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Vedanta Cosmetics' journey from idea to production with PMEGP funding
            </p>
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-purple-600">Home</Link>
              <span>/</span>
              <Link href="/success-stories" className="hover:text-purple-600">Success Stories</Link>
              <span>/</span>
              <span className="text-purple-600">PMEGP Success</span>
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
                    Vedanta Cosmetics had a vision to create an organic, locally-sourced cosmetics brand but faced 
                    significant capital requirements for machinery, raw materials, and setup costs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As first-time entrepreneurs, they needed guidance on government subsidies, business setup, 
                    compliance requirements, and funding coordination—all while maintaining focus on product development.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We identified PMEGP as the perfect scheme for their manufacturing venture and managed the complete process:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-purple-50 rounded-lg p-4"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
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
                        className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100"
                      >
                        <h3 className="text-4xl font-bold text-purple-600 mb-2">{result.value}</h3>
                        <p className="text-gray-700">{result.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Detailed Impact */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Business Impact</h2>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <SparklesIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Manufacturing Unit Established</p>
                          <p className="text-gray-600">Complete production facility with modern equipment and quality control systems</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <SparklesIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">15 Direct Jobs Created</p>
                          <p className="text-gray-600">Employment opportunities in production, quality check, and packaging</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <SparklesIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Product Line Launched</p>
                          <p className="text-gray-600">8 SKUs including skincare, haircare, and wellness products</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <SparklesIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Distribution Network</p>
                          <p className="text-gray-600">Retail presence in 50+ stores across 3 states</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Client Testimonial</h2>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
                  >
                    <div className="text-6xl mb-4 opacity-50">"</div>
                    <p className="text-xl italic leading-relaxed mb-4">
                      The PMEGP subsidy made our dream viable. Agnivridhi guided us through every step—from project 
                      report to bank coordination to MSME registration. Their expertise turned our vision into reality.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-purple-600">VC</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg">Vedanta Cosmetics Team</p>
                        <p className="text-purple-100">Founders</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* About PMEGP */}
                <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-purple-600" />
                    About PMEGP
                  </h3>
                  <p className="text-gray-600">
                    Prime Minister's Employment Generation Programme (PMEGP) offers 15-35% subsidy on project cost 
                    (up to ₹50 lakhs for manufacturing). It's ideal for new entrepreneurs starting manufacturing 
                    or service businesses with government financial support.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in PMEGP?</h3>
                  <p className="text-gray-600 mb-6">
                    Get 15-35% government subsidy for your manufacturing or service venture.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => window.openConsultationModal?.()}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all"
                    >
                      Check Eligibility
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
                      className="w-full bg-transparent border-2 border-purple-600 text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
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
                          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-purple-600" />
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
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-4">PMEGP Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">15-35% subsidy on project cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">Up to ₹50 lakhs for manufacturing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">Entrepreneurship training included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 text-sm">Balance through bank loan at lower rates</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Manufacturing Dream with PMEGP
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get government subsidy and complete handholding from idea to launch. Let's check your eligibility today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Check Eligibility Now
              </motion.button>
              <motion.a
                href="/success-stories"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all inline-flex items-center gap-2"
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
