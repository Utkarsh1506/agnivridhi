import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  ClockIcon,
  GlobeAltIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function IsoCertification() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      title: "Quality Management",
      description: "Demonstrates consistent quality and customer satisfaction",
      benefits: ["Enhanced credibility", "Better processes", "Customer trust"]
    },
    {
      name: "ISO 14001:2015",
      title: "Environmental Management",
      description: "Shows commitment to environmental responsibility",
      benefits: ["Eco-friendly image", "Compliance", "Cost savings"]
    },
    {
      name: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description: "Ensures safe and healthy workplace for employees",
      benefits: ["Worker safety", "Risk reduction", "Legal compliance"]
    },
    {
      name: "ISO 27001:2013",
      title: "Information Security",
      description: "Protects sensitive business and customer data",
      benefits: ["Data security", "Client confidence", "Cyber protection"]
    }
  ]

  const features = [
    {
      icon: TrophyIcon,
      title: "Expert Consultation",
      description: "Experienced consultants guide you through entire certification process"
    },
    {
      icon: ClockIcon,
      title: "Fast Processing",
      description: "Complete certification in 45-90 days with our streamlined approach"
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Success Rate",
      description: "Proven track record of successful certifications across industries"
    },
    {
      icon: GlobeAltIcon,
      title: "International Recognition",
      description: "Globally accepted certification opening doors to new markets"
    }
  ]

  const benefits = [
    "Enhanced business credibility and reputation",
    "Competitive advantage in tenders and contracts",
    "Access to international markets",
    "Improved operational efficiency",
    "Better risk management",
    "Increased customer confidence",
    "Higher profit margins",
    "Attract quality employees",
    "Compliance with legal requirements",
    "Continuous improvement culture",
    "Cost savings through optimization",
    "MSME subsidy on certification costs"
  ]

  const process = [
    {
      step: "01",
      title: "Gap Analysis",
      description: "Assess current systems and identify gaps for certification"
    },
    {
      step: "02",
      title: "Documentation",
      description: "Prepare required policies, procedures, and records"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Implement ISO standards in your organization"
    },
    {
      step: "04",
      title: "Internal Audit",
      description: "Conduct pre-certification audit to ensure readiness"
    },
    {
      step: "05",
      title: "Certification Audit",
      description: "External auditor evaluates compliance with standards"
    },
    {
      step: "06",
      title: "Certificate Issue",
      description: "Receive ISO certificate valid for 3 years"
    }
  ]

  const faqs = [
    {
      question: "What is ISO certification?",
      answer: "ISO certification is an internationally recognized standard that validates your business meets specific quality, safety, or environmental management criteria. It's issued by accredited certification bodies after rigorous audit."
    },
    {
      question: "Which ISO certification do I need?",
      answer: "ISO 9001 (Quality) is most common and suitable for all businesses. ISO 14001 (Environment) for eco-conscious companies. ISO 45001 (Safety) for industries with workplace risks. ISO 27001 (Information Security) for IT/data-driven businesses."
    },
    {
      question: "How long does certification take?",
      answer: "Typically 45-90 days from start to certificate, depending on organization size and readiness. We expedite the process with expert guidance and documentation support."
    },
    {
      question: "How much does ISO certification cost?",
      answer: "Costs vary based on ISO standard, company size, and complexity. We offer competitive pricing with MSME subsidy assistance. Contact us for detailed quotation."
    },
    {
      question: "Is ISO certification valid forever?",
      answer: "ISO certificates are valid for 3 years. During this period, annual surveillance audits are conducted. After 3 years, recertification audit is required to maintain certification."
    },
    {
      question: "Can small businesses get ISO certified?",
      answer: "Absolutely! ISO certification is for businesses of all sizes. In fact, MSMEs get subsidy on certification costs. It helps small businesses compete with larger companies."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>ISO Certification - Quality & Compliance Standards | Agnivridhi</title>
        <meta name="description" content="Get ISO 9001, ISO 14001, ISO 45001, ISO 27001 certification. Expert consultation, fast processing, MSME subsidy support. Boost credibility and win more contracts." />
      </Head>

      {/* Hero */}
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
                <span className="text-cyan-600 font-semibold">International Standards</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                ISO
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Certification</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get internationally recognized ISO certification. Boost credibility, 
                win more contracts, expand globally. Expert support from start to certificate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  Get Certified
                </Link>
                <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-300">
                  Call: +91 9289555190
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-600">45</div>
                  <div className="text-sm text-gray-600">Days Process</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">Global</div>
                  <div className="text-sm text-gray-600">Recognition</div>
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
                  src="/img/iso-certification.jpg" 
                  alt="ISO Certification"
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ISO Certifications We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right certification for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <ShieldCheckIcon className="w-12 h-12 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-cyan-600 font-semibold">{cert.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Benefits of ISO Certification
            </h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification Process
            </h2>
            <p className="text-xl text-gray-600">
              6-step journey to ISO certification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
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
              Ready to Get ISO Certified?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Take your business to international standards
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Certification
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
