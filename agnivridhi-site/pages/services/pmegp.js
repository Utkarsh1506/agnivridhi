import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  CurrencyRupeeIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function Pmegp() {
  const features = [
    {
      icon: CurrencyRupeeIcon,
      title: "15-35% Subsidy",
      description: "Government subsidy on project cost for manufacturing and service businesses"
    },
    {
      icon: ShieldCheckIcon,
      title: "Up to ₹50 Lakh",
      description: "Project cost up to ₹25 lakh for services, ₹50 lakh for manufacturing"
    },
    {
      icon: ClockIcon,
      title: "60 Days Processing",
      description: "Fast-track application with our expert documentation support"
    },
    {
      icon: DocumentCheckIcon,
      title: "End-to-End Support",
      description: "Complete assistance from application to subsidy disbursement"
    }
  ]

  const subsidyRates = [
    {
      category: "General Category",
      manufacturing: "15% (Max ₹7.5L)",
      services: "15% (Max ₹3.75L)"
    },
    {
      category: "Special Category*",
      manufacturing: "25% (Max ₹12.5L)",
      services: "25% (Max ₹6.25L)"
    },
    {
      category: "SC/ST/OBC/Minorities/Women/PWD",
      manufacturing: "35% (Max ₹17.5L)",
      services: "35% (Max ₹8.75L)"
    }
  ]

  const benefits = [
    "No income ceiling for availing subsidy",
    "Applicable for both new and existing businesses",
    "Working capital and term loan support",
    "Interest subsidy on bank loans",
    "Training and skill development support",
    "Marketing assistance and handholding",
    "Online application and tracking system",
    "Expert guidance throughout the process"
  ]

  const eligibility = [
    "Age: 18 years and above",
    "Educational qualification: Minimum 8th pass",
    "Income: No upper income limit",
    "Can be individual, group, or cooperative society",
    "Should not have availed benefits under any other subsidy scheme",
    "Contribution: Minimum 5-10% of project cost",
    "No loan default in any bank/financial institution"
  ]

  const process = [
    {
      step: "01",
      title: "Eligibility Check",
      description: "Free consultation to verify your eligibility and project viability"
    },
    {
      step: "02",
      title: "Project Report",
      description: "We prepare detailed project report and business plan"
    },
    {
      step: "03",
      title: "Application Filing",
      description: "Submit application online through PMEGP portal"
    },
    {
      step: "04",
      title: "Bank Approval",
      description: "Coordinate with bank for loan processing and approval"
    },
    {
      step: "05",
      title: "Project Setup",
      description: "Implement project and receive loan disbursement"
    },
    {
      step: "06",
      title: "Subsidy Release",
      description: "Get subsidy after successful project implementation"
    }
  ]

  const faqs = [
    {
      question: "What is PMEGP?",
      answer: "Prime Minister's Employment Generation Programme (PMEGP) is a credit-linked subsidy programme for setting up new micro-enterprises and generating employment opportunities in rural and urban areas."
    },
    {
      question: "Who can apply for PMEGP?",
      answer: "Any individual above 18 years with minimum 8th class education can apply. There's no upper age or income limit. Both new entrepreneurs and existing business owners can apply."
    },
    {
      question: "What is the maximum project cost?",
      answer: "For manufacturing sector: ₹50 lakh. For service sector: ₹25 lakh. The subsidy percentage varies from 15% to 35% based on category and location."
    },
    {
      question: "How much is my contribution?",
      answer: "General category: 10% of project cost. Special category (SC/ST/OBC/Minorities/Women/PWD): 5% of project cost. Rest is funded through bank loan."
    },
    {
      question: "When will I receive the subsidy?",
      answer: "Subsidy is released by KVIC/KVIB after successful implementation of the project and verification by the bank. Typically takes 3-6 months after project completion."
    },
    {
      question: "Can I apply if I already have a business?",
      answer: "Yes, but you should not have availed subsidy under any other government scheme for the same unit. The project should be for diversification or expansion."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>PMEGP Subsidy - 15-35% Government Grant for Business | Agnivridhi</title>
        <meta name="description" content="Get 15-35% government subsidy on your business project through PMEGP. Up to ₹50 lakh project cost, minimal investment, expert support. Start your entrepreneurship journey today." />
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
                <span className="text-cyan-600 font-semibold">Government Subsidy Scheme</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                PMEGP
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Subsidy</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get 15-35% government subsidy on your business project. Low investment, 
                high returns. We handle everything from application to subsidy disbursement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </Link>
                <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-300">
                  Call: +91 9289555190
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-600">35%</div>
                  <div className="text-sm text-gray-600">Max Subsidy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">₹50L</div>
                  <div className="text-sm text-gray-600">Project Cost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">5%</div>
                  <div className="text-sm text-gray-600">Min Investment</div>
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
                  src="/img/pmegp-subsidy.jpg" 
                  alt="PMEGP Government Subsidy"
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PMEGP?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government's flagship scheme for entrepreneurship and employment generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Rates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subsidy Rates
            </h2>
            <p className="text-xl text-gray-600">
              Get up to 35% subsidy based on your category
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Manufacturing</th>
                  <th className="px-6 py-4 text-left font-semibold">Services/Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subsidyRates.map((rate, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hover:bg-cyan-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{rate.category}</td>
                    <td className="px-6 py-4 text-gray-600">{rate.manufacturing}</td>
                    <td className="px-6 py-4 text-gray-600">{rate.services}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            *Special Category: NE Region, Hilly & Scheduled Areas
          </p>
        </div>
      </section>

      {/* Benefits & Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eligibility Criteria
              </h2>
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6-step guided process to get your PMEGP subsidy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about PMEGP
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Business with PMEGP
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get expert guidance from application to subsidy disbursement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Application
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
