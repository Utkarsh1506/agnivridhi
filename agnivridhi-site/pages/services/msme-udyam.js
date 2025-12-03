import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  BuildingOfficeIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function MsmeUdyam() {
  const features = [
    {
      icon: ClockIcon,
      title: "Same Day Registration",
      description: "Instant Udyam registration with government portal"
    },
    {
      icon: CurrencyRupeeIcon,
      title: "No Registration Fee",
      description: "Government's free online registration service"
    },
    {
      icon: ShieldCheckIcon,
      title: "Lifetime Validity",
      description: "One-time registration, valid for business lifetime"
    },
    {
      icon: DocumentCheckIcon,
      title: "Minimal Documents",
      description: "Just Aadhaar and PAN required for registration"
    }
  ]

  const benefits = [
    "Priority sector lending from banks",
    "Collateral-free loans under CGTMSE",
    "Lower interest rates on loans (1-1.5% less)",
    "Reimbursement of ISO certification charges",
    "Protection against delayed payments",
    "Subsidy on patent and trademark registration",
    "Preference in government tenders",
    "Electricity bill concession",
    "Tax benefits and exemptions",
    "Access to government schemes (PMEGP, Startup India)",
    "Credit guarantee for loans",
    "Reduced industrial promotion assistance"
  ]

  const categories = [
    {
      type: "Micro Enterprise",
      investment: "Up to ₹1 Crore",
      turnover: "Up to ₹5 Crore",
      description: "Small businesses and startups"
    },
    {
      type: "Small Enterprise",
      investment: "Up to ₹10 Crore",
      turnover: "Up to ₹50 Crore",
      description: "Growing businesses with moderate operations"
    },
    {
      type: "Medium Enterprise",
      investment: "Up to ₹50 Crore",
      turnover: "Up to ₹250 Crore",
      description: "Well-established businesses"
    }
  ]

  const documents = [
    "Aadhaar Card of owner/authorized signatory",
    "PAN Card of business/owner",
    "Business name and address",
    "Bank account details (optional)",
    "GSTIN (if registered)",
    "Previous registration details (if any)"
  ]

  const process = [
    {
      step: "01",
      title: "Aadhaar Verification",
      description: "Verify Aadhaar via OTP on Udyam portal"
    },
    {
      step: "02",
      title: "Fill Details",
      description: "Enter business information and investment details"
    },
    {
      step: "03",
      title: "Submit Application",
      description: "Submit online application with PAN verification"
    },
    {
      step: "04",
      title: "Get Certificate",
      description: "Receive Udyam certificate instantly via email"
    }
  ]

  const faqs = [
    {
      question: "What is Udyam Registration?",
      answer: "Udyam Registration is the new system for MSME registration in India. It replaced the earlier Udyog Aadhaar system. It's a free, online process that provides official recognition to micro, small, and medium enterprises."
    },
    {
      question: "Who should register for Udyam?",
      answer: "Any business engaged in manufacturing, production, processing, or preservation of goods, or providing services should register. Both new and existing businesses can register for free benefits."
    },
    {
      question: "What are the investment and turnover limits?",
      answer: "Micro: Investment up to ₹1 Cr, Turnover up to ₹5 Cr. Small: Investment up to ₹10 Cr, Turnover up to ₹50 Cr. Medium: Investment up to ₹50 Cr, Turnover up to ₹250 Cr."
    },
    {
      question: "Is Udyam registration mandatory?",
      answer: "While not legally mandatory for all businesses, Udyam registration is required to avail government benefits, priority sector lending, subsidies, and to participate in government tenders."
    },
    {
      question: "How long is Udyam certificate valid?",
      answer: "Udyam certificate is valid for the lifetime of the business. However, you must update details if there are significant changes in investment or turnover."
    },
    {
      question: "Can I register multiple businesses?",
      answer: "Yes, you can register multiple business units with different Aadhaar numbers. Each unit must have a separate Udyam registration."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>MSME/Udyam Registration - Free Online Certificate | Agnivridhi</title>
        <meta name="description" content="Get MSME Udyam certificate instantly. Free registration, lifetime validity, access to government benefits, priority loans, subsidies. Register your business today." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-6">
                <span className="text-cyan-600 font-semibold">Business Registration</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                MSME/Udyam
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Registration</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get instant Udyam certificate. Unlock government benefits, priority loans, 
                subsidies, and tax exemptions. 100% free registration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  Register Now
                </Link>
                <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-300">
                  Call: +91 9289555190
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-600">Free</div>
                  <div className="text-sm text-gray-600">Registration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">Instant</div>
                  <div className="text-sm text-gray-600">Certificate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">Lifetime</div>
                  <div className="text-sm text-gray-600">Validity</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/msme-udyam.jpg" 
                  alt="MSME Udyam Registration"
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Register for Udyam?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock exclusive benefits for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MSME Categories
            </h2>
            <p className="text-xl text-gray-600">
              Based on investment and annual turnover
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.type}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CurrencyRupeeIcon className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700"><strong>Investment:</strong> {category.investment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700"><strong>Turnover:</strong> {category.turnover}</span>
                  </div>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              12+ Government Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive advantages for registered MSMEs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50"
              >
                <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration Process</h2>
            <p className="text-xl text-gray-600">Get registered in 4 simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-start gap-3">
                  <DocumentCheckIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Register Your Business Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get instant Udyam certificate and unlock all benefits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Registration
              </Link>
              <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Call: +91 9289555190
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
