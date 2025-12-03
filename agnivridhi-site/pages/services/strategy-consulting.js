import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  CheckCircleIcon, 
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  CurrencyRupeeIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function StrategyConsulting() {
  const features = [
    {
      icon: LightBulbIcon,
      title: "Business Model Innovation",
      description: "Transform your business model for growth and profitability"
    },
    {
      icon: ChartBarIcon,
      title: "Market Research & Analysis",
      description: "Deep insights into your market, competitors, and opportunities"
    },
    {
      icon: UserGroupIcon,
      title: "Team & Leadership Development",
      description: "Build high-performing teams and effective leadership"
    },
    {
      icon: CurrencyRupeeIcon,
      title: "Financial Planning & Funding",
      description: "Strategic financial planning and access to funding sources"
    }
  ]

  const benefits = [
    "Clear business vision and strategy",
    "Faster growth and market expansion",
    "Improved profitability and cost control",
    "Better decision making",
    "Competitive advantage",
    "Access to expert network",
    "Risk management and compliance",
    "Sustainable long-term success"
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Understand your business, goals, and challenges"
    },
    {
      step: "02",
      title: "Strategy Formulation",
      description: "Develop actionable strategies for growth and improvement"
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "Guide your team through execution and change management"
    },
    {
      step: "04",
      title: "Monitoring & Review",
      description: "Track progress, measure results, and refine strategies"
    }
  ]

  const packages = [
    {
      name: "Startup",
      price: "₹9,999",
      description: "Business model validation, market research, funding roadmap, 2 strategy sessions"
    },
    {
      name: "Growth",
      price: "₹19,999",
      description: "Full strategy plan, team development, financial planning, 4 sessions, ongoing support"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "End-to-end consulting, leadership workshops, market expansion, dedicated team"
    }
  ]

  const faqs = [
    {
      question: "What is strategy consulting?",
      answer: "Strategy consulting helps businesses develop and implement plans for growth, profitability, and competitive advantage. We provide expert advice, market insights, and hands-on support."
    },
    {
      question: "Who should use strategy consulting?",
      answer: "Startups, SMEs, and established businesses looking to grow, enter new markets, improve profitability, or solve complex challenges."
    },
    {
      question: "How are sessions conducted?",
      answer: "Sessions are online or in-person, as per your preference. We use presentations, workshops, and collaborative tools for maximum impact."
    },
    {
      question: "Will you help with implementation?",
      answer: "Yes! We guide your team through execution, change management, and provide ongoing support."
    },
    {
      question: "How do I get started?",
      answer: "Book a free consultation. We'll assess your needs and recommend the best package for you."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Strategy Consulting - Business Growth, Market Expansion | Agnivridhi</title>
        <meta name="description" content="Expert strategy consulting for startups, SMEs, and enterprises. Business model innovation, market research, team development, funding, and growth planning. Free consultation." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-6">
                <span className="text-cyan-600 font-semibold">Growth Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Strategy
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unlock business growth, market expansion, and profitability with expert strategy consulting. Tailored plans, actionable insights, and hands-on support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </Link>
                <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-300">
                  Call: +91 9289555190
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-600">100%</div>
                  <div className="text-sm text-gray-600">Growth Focus</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/img/strategy-consulting.jpg" alt="Strategy Consulting" loading="lazy" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need for business growth and success</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-xl transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Expert guidance for every stage of your business</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-teal-50">
                <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600">Choose the right plan for your business</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-xl p-8 bg-gray-50 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-cyan-600">{pkg.price}</span>
                </div>
                <p className="mb-6 text-gray-600">{pkg.description}</p>
                <Link href="/contact" className="block text-center px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300">Get Started</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">4-step journey to business transformation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white text-xl font-bold">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 mb-8">Get free strategy session and growth roadmap</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">Book Free Consultation</Link>
              <a href="tel:+919289555190" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">Call: +91 9289555190</a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
