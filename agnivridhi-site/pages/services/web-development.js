import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  DevicePhoneMobileIcon,
  ChartBarIcon,
  SparklesIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function WebDevelopment() {
  const features = [
    {
      icon: GlobeAltIcon,
      title: "Modern Responsive Design",
      description: "Beautiful, mobile-friendly websites that look great on every device"
    },
    {
      icon: CodeBracketIcon,
      title: "Custom Development",
      description: "Tailored solutions for your business needs using latest technologies"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Fast Loading & SEO Ready",
      description: "Optimized for speed, search engines, and conversions"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure & Reliable",
      description: "SSL, data protection, and robust hosting for peace of mind"
    }
  ]

  const benefits = [
    "Professional online presence",
    "Higher customer trust and engagement",
    "Easy content management",
    "Integrated contact forms and lead capture",
    "E-commerce and payment gateway options",
    "Analytics and tracking setup",
    "Scalable for future growth",
    "Ongoing support and maintenance"
  ]

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Understand your goals, audience, and requirements"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and visual mockups for feedback"
    },
    {
      step: "03",
      title: "Development",
      description: "Build your site using modern frameworks and best practices"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing for performance, security, and usability"
    },
    {
      step: "05",
      title: "Training & Support",
      description: "Hand over, train your team, and provide ongoing help"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹19,999",
      description: "5-page business website, mobile responsive, contact form, basic SEO, 1 month support"
    },
    {
      name: "Growth",
      price: "₹39,999",
      description: "10-page site, blog, advanced SEO, analytics, WhatsApp integration, 3 months support"
    },
    {
      name: "E-Commerce",
      price: "₹59,999+",
      description: "Online store, payment gateway, product management, order tracking, 6 months support"
    }
  ]

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typical business sites take 2-3 weeks. E-commerce and custom projects may take 4-6 weeks. We provide clear timelines after consultation."
    },
    {
      question: "Can I update my website myself?",
      answer: "Yes! All sites come with easy-to-use admin panels. We provide training and documentation."
    },
    {
      question: "Will my site work on mobile?",
      answer: "Absolutely. Every site is fully responsive and tested on all major devices."
    },
    {
      question: "Do you provide hosting and domain?",
      answer: "We help you choose the best hosting and domain provider, and can manage setup for you."
    },
    {
      question: "Is SEO included?",
      answer: "Yes, all packages include basic SEO setup. Advanced SEO and ongoing optimization available in higher packages."
    },
    {
      question: "What support do I get after launch?",
      answer: "All packages include free support for 1-6 months. You can extend support or request new features anytime."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Web Development Services - Modern, Fast, SEO-Ready Websites | Agnivridhi</title>
        <meta name="description" content="Get a beautiful, fast, and secure website for your business. Responsive design, custom development, SEO, e-commerce, analytics, and ongoing support. Free consultation." />
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
                Web
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get a modern, fast, and secure website for your business. Custom solutions, SEO, e-commerce, analytics, and ongoing support.
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
                  <div className="text-sm text-gray-600">Responsive</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">2-3</div>
                  <div className="text-sm text-gray-600">Weeks Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">SEO</div>
                  <div className="text-sm text-gray-600">Ready</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/img/web-development.jpg" alt="Web Development" loading="lazy" className="w-full h-auto" />
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need for a powerful online presence</p>
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
            <p className="text-xl text-gray-600">We build websites that grow your business</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
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
            <p className="text-xl text-gray-600">5-step journey to your perfect website</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Your Dream Website?</h2>
            <p className="text-xl text-cyan-100 mb-8">Get free consultation and project quote today</p>
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
