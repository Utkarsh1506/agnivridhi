import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  DocumentCheckIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  BuildingOfficeIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function GstRegistration() {
  const features = [
    {
      icon: ClockIcon,
      title: "3-5 Days Registration",
      description: "Quick GST registration with expert documentation support"
    },
    {
      icon: CurrencyRupeeIcon,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges"
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Compliance",
      description: "Ensure full legal compliance from day one"
    },
    {
      icon: DocumentCheckIcon,
      title: "Complete Support",
      description: "End-to-end assistance including filing and returns"
    }
  ]

  const benefits = [
    "Legal recognition for your business",
    "Claim Input Tax Credit (ITC)",
    "Nationwide business operations",
    "Increased business credibility",
    "Easier access to loans and funding",
    "Government tender participation",
    "Online business expansion",
    "Simplified tax compliance"
  ]

  const documents = [
    "PAN Card of the business/proprietor",
    "Aadhaar Card of proprietor/authorized signatory",
    "Business address proof (rent agreement/property documents)",
    "Bank account statement/cancelled cheque",
    "Business registration certificate (if applicable)",
    "Digital signature (for company/LLP)",
    "Email ID and mobile number",
    "Photographs of proprietor/partners/directors"
  ]

  const types = [
    {
      type: "Regular GST",
      description: "For businesses with turnover above ₹40 lakh (goods) or ₹20 lakh (services)",
      features: ["Monthly/Quarterly returns", "Input tax credit available", "Interstate sales allowed"]
    },
    {
      type: "Composition Scheme",
      description: "For small businesses with turnover up to ₹1.5 crore",
      features: ["Quarterly returns only", "Simplified compliance", "Lower tax rates"]
    },
    {
      type: "Casual/Non-Resident",
      description: "For temporary business operations",
      features: ["Valid for specific period", "Advance tax deposit", "Special compliance"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Document Collection",
      description: "We help you gather all required documents"
    },
    {
      step: "02",
      title: "Application Filing",
      description: "File GST application on government portal"
    },
    {
      step: "03",
      title: "Verification",
      description: "Government verification of documents and details"
    },
    {
      step: "04",
      title: "GSTIN Allotment",
      description: "Receive your 15-digit GST identification number"
    }
  ]

  const faqs = [
    {
      question: "Is GST registration mandatory?",
      answer: "GST registration is mandatory if your annual turnover exceeds ₹40 lakh for goods or ₹20 lakh for services. It's also required for interstate sales, e-commerce sellers, and certain specified businesses regardless of turnover."
    },
    {
      question: "How long does GST registration take?",
      answer: "With complete documents, GST registration typically takes 3-7 working days. Our expert support ensures faster processing without rejections."
    },
    {
      question: "What is GSTIN?",
      answer: "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit number assigned to every GST-registered business. It's based on your PAN and state code."
    },
    {
      question: "Can I cancel GST registration?",
      answer: "Yes, GST registration can be cancelled if you discontinue business, fall below threshold turnover, or change business structure. We assist with proper cancellation procedures."
    },
    {
      question: "What are GST return filing requirements?",
      answer: "Regular businesses must file monthly GSTR-1 (sales) and GSTR-3B (summary). Composition scheme businesses file quarterly returns. We provide ongoing return filing support."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>GST Registration - Fast & Easy Online GST Number | Agnivridhi</title>
        <meta name="description" content="Get GST registration in 3-5 days. Expert support for GST number, returns filing, compliance. Affordable pricing, complete documentation assistance. Register your business today." />
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
                <span className="text-cyan-600 font-semibold">Tax Registration</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                GST
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Registration</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get your GST number in just 3-5 days. Complete documentation support, 
                hassle-free process, 100% online registration.
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
                  <div className="text-3xl font-bold text-cyan-600">3-5</div>
                  <div className="text-sm text-gray-600">Days Process</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">100%</div>
                  <div className="text-sm text-gray-600">Online</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
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
                  src="/img/gst-registration.jpg" 
                  alt="GST Registration"
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
              Why Choose Our GST Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional GST registration with ongoing compliance support
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

      {/* GST Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of GST Registration
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right GST registration for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {types.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.type}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of GST Registration</h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <DocumentCheckIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple 4-step GST registration</p>
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
              Ready to Register for GST?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get expert assistance from start to finish
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
