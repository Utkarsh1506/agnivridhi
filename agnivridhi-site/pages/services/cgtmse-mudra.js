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
  ChartBarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function CgtmseMudra() {
  const features = [
    {
      icon: CurrencyRupeeIcon,
      title: "Up to ₹50 Lakh Loan",
      description: "Collateral-free loans from ₹10 lakh to ₹50 lakh for your business growth"
    },
    {
      icon: ShieldCheckIcon,
      title: "80% Government Guarantee",
      description: "Credit Guarantee Fund covers 80% of loan, making approval easier"
    },
    {
      icon: ClockIcon,
      title: "45 Days Approval",
      description: "Fast processing with expert guidance throughout the application"
    },
    {
      icon: DocumentCheckIcon,
      title: "Minimal Documentation",
      description: "Simple paperwork process with our end-to-end support"
    }
  ]

  const benefits = [
    "No collateral or third-party guarantee required",
    "Interest rates as low as 8-12% per annum",
    "Flexible repayment tenure up to 7 years",
    "Available for new and existing businesses",
    "Covers manufacturing, trading, and service sectors",
    "Both MSME registered and non-registered can apply",
    "Working capital and term loan options available",
    "Expert consultation throughout the process"
  ]

  const process = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Discuss your business needs and eligibility with our experts"
    },
    {
      step: "02",
      title: "Document Preparation",
      description: "We help gather and prepare all necessary documentation"
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Submit application to banks with CGTMSE coverage"
    },
    {
      step: "04",
      title: "Follow-up & Approval",
      description: "We coordinate with bank until loan disbursement"
    }
  ]

  const faqs = [
    {
      question: "What is CGTMSE?",
      answer: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a government scheme that provides guarantee coverage to banks, making it easier for MSMEs to get loans without collateral."
    },
    {
      question: "What is MUDRA Loan?",
      answer: "MUDRA (Micro Units Development & Refinance Agency) provides loans up to ₹10 lakh for micro-enterprises. It has three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh)."
    },
    {
      question: "Who is eligible for CGTMSE loans?",
      answer: "Micro and Small Enterprises (as per MSME Act) in manufacturing, trading, and service sectors can apply. Both new and existing businesses with viable projects are eligible."
    },
    {
      question: "How long does the approval process take?",
      answer: "With proper documentation and our expert support, CGTMSE loans typically get approved within 45-60 days from application submission."
    },
    {
      question: "What is the interest rate?",
      answer: "Interest rates vary by bank and business profile, typically ranging from 8-12% per annum. We help you get the best rates by presenting your case effectively."
    },
    {
      question: "Do I need to be MSME registered?",
      answer: "While MSME registration (Udyam) is preferred and can improve your chances, it's not mandatory for CGTMSE loans. We can help you get registered if needed."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>CGTMSE & MUDRA Loans - Collateral-Free Business Funding | Agnivridhi</title>
        <meta name="description" content="Get collateral-free business loans up to ₹50 lakh through CGTMSE & MUDRA schemes. 80% government guarantee, fast approval, minimal documentation. Expert support from Agnivridhi." />
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
                <span className="text-cyan-600 font-semibold">Government Backed Funding</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                CGTMSE & MUDRA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Loans</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get collateral-free business loans up to ₹50 lakh with 80% government guarantee. 
                Fast approval, minimal documentation, expert guidance.
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
                  <div className="text-3xl font-bold text-cyan-600">₹50L</div>
                  <div className="text-sm text-gray-600">Maximum Loan</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">80%</div>
                  <div className="text-sm text-gray-600">Govt. Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">45</div>
                  <div className="text-sm text-gray-600">Days Approval</div>
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
                  src="/img/cgtmse-funding.jpg" 
                  alt="CGTMSE MUDRA Loans"
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about CGTMSE & MUDRA loans
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose CGTMSE/MUDRA?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                These government-backed schemes are designed to make business funding accessible 
                to small and micro enterprises without the burden of collateral.
              </p>
              
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Loan Categories</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-2">MUDRA - Shishu</h4>
                    <p className="text-cyan-100 mb-2">Up to ₹50,000</p>
                    <p className="text-sm text-cyan-100">For micro-enterprises and startups</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-2">MUDRA - Kishore</h4>
                    <p className="text-cyan-100 mb-2">₹50,000 to ₹5 Lakh</p>
                    <p className="text-sm text-cyan-100">For established small businesses</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-2">MUDRA - Tarun</h4>
                    <p className="text-cyan-100 mb-2">₹5 Lakh to ₹10 Lakh</p>
                    <p className="text-sm text-cyan-100">For expanding businesses</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-2">CGTMSE</h4>
                    <p className="text-cyan-100 mb-2">₹10 Lakh to ₹50 Lakh</p>
                    <p className="text-sm text-cyan-100">For MSMEs with growth potential</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to get your loan approved
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-teal-600" 
                       style={{ width: 'calc(100% + 2rem)', marginLeft: 'calc(50% - 2.5rem)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
              Everything you need to know about CGTMSE & MUDRA loans
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              Ready to Get Your Business Loan?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your application today or speak with our funding experts
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
