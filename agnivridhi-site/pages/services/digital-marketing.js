import { motion } from 'framer-motion'
import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { 
  MegaphoneIcon, 
  CheckCircleIcon, 
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function DigitalMarketing() {
  const services = [
    {
      icon: MagnifyingGlassIcon,
      name: "SEO (Search Engine Optimization)",
      description: "Rank higher on Google, drive organic traffic, and increase visibility",
      features: ["Keyword research", "On-page SEO", "Link building", "Technical SEO"]
    },
    {
      icon: MegaphoneIcon,
      name: "Social Media Marketing",
      description: "Build brand presence on Facebook, Instagram, LinkedIn, Twitter",
      features: ["Content creation", "Community management", "Paid campaigns", "Analytics"]
    },
    {
      icon: DevicePhoneMobileIcon,
      name: "Google Ads (PPC)",
      description: "Instant visibility with targeted paid advertising campaigns",
      features: ["Search ads", "Display ads", "Shopping ads", "ROI tracking"]
    },
    {
      icon: UserGroupIcon,
      name: "Content Marketing",
      description: "Engage audience with valuable content that drives conversions",
      features: ["Blog posts", "Videos", "Infographics", "Email campaigns"]
    }
  ]

  const features = [
    {
      icon: ChartBarIcon,
      title: "Data-Driven Strategy",
      description: "Every decision backed by analytics and performance metrics"
    },
    {
      icon: GlobeAltIcon,
      title: "Multi-Channel Approach",
      description: "Integrated campaigns across all digital platforms"
    },
    {
      icon: UserGroupIcon,
      title: "Targeted Audience",
      description: "Reach your ideal customers with precision targeting"
    },
    {
      icon: SparklesIcon,
      title: "Creative Excellence",
      description: "Compelling content and designs that convert"
    }
  ]

  const benefits = [
    "Increased brand awareness and visibility",
    "Higher website traffic and engagement",
    "Quality lead generation",
    "Improved conversion rates",
    "Better customer relationships",
    "Competitive market advantage",
    "Measurable ROI on every rupee spent",
    "24/7 business presence online",
    "Cost-effective compared to traditional marketing",
    "Real-time campaign optimization",
    "Detailed analytics and reporting",
    "Scalable marketing solutions"
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understand your business, audience, competitors, and goals"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create comprehensive digital marketing roadmap"
    },
    {
      step: "03",
      title: "Campaign Setup",
      description: "Design creatives, set up platforms, configure tracking"
    },
    {
      step: "04",
      title: "Launch & Execute",
      description: "Roll out campaigns across chosen channels"
    },
    {
      step: "05",
      title: "Monitor & Optimize",
      description: "Track performance and continuously improve results"
    },
    {
      step: "06",
      title: "Report & Scale",
      description: "Share insights and scale successful campaigns"
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO basics (5 keywords)",
        "2 social media platforms",
        "Weekly content posting",
        "Monthly analytics report",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "₹30,000",
      period: "/month",
      description: "Ideal for businesses looking to scale their online presence",
      features: [
        "Advanced SEO (15 keywords)",
        "4 social media platforms",
        "Daily content posting",
        "Google Ads management (₹20k budget)",
        "Bi-weekly reports",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for established businesses",
      features: [
        "Full SEO suite (unlimited keywords)",
        "All platforms + YouTube",
        "Multiple daily posts",
        "Multi-channel ad campaigns",
        "Real-time dashboard",
        "Dedicated team",
        "Custom integrations"
      ]
    }
  ]

  const faqs = [
    {
      question: "What is digital marketing?",
      answer: "Digital marketing is promoting your business online through various channels like search engines (Google), social media (Facebook, Instagram), email, and websites to reach and engage customers where they spend most of their time."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary by channel. Paid ads (Google Ads, Facebook Ads) show results within days. SEO takes 3-6 months for significant results. Social media engagement starts building within weeks. We provide monthly reports to track progress."
    },
    {
      question: "What's the difference between SEO and Google Ads?",
      answer: "SEO is organic (free) traffic from search results - takes time but cost-effective long-term. Google Ads is paid advertising - instant visibility but costs per click. We recommend combining both for maximum impact."
    },
    {
      question: "Which social media platforms should I use?",
      answer: "Depends on your business. B2B companies: LinkedIn + Twitter. B2C retail/food: Instagram + Facebook. Local services: Facebook + Google My Business. We analyze your target audience and recommend the best platforms."
    },
    {
      question: "How much should I budget for digital marketing?",
      answer: "Typically 5-10% of revenue for established businesses, more for new businesses. Start with ₹15-30k/month for services + ₹10-20k for ad spend. We create custom packages based on your goals and budget."
    },
    {
      question: "Do I need to sign long-term contracts?",
      answer: "No. While we recommend minimum 3-6 months for SEO results, you can start month-to-month. We focus on delivering value so you want to continue, not forcing contracts."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Digital Marketing Services - SEO, Social Media, Google Ads | Agnivridhi</title>
        <meta name="description" content="Grow your business online with expert digital marketing. SEO, social media, Google Ads, content marketing. Data-driven strategies, measurable results. Get free consultation." />
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
                <span className="text-cyan-600 font-semibold">Growth Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Grow your business online with data-driven digital marketing. SEO, social media, 
                Google Ads, content marketing. Measurable results, transparent reporting.
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
                  <div className="text-3xl font-bold text-cyan-600">3X</div>
                  <div className="text-sm text-gray-600">Avg. ROI</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">500+</div>
                  <div className="text-sm text-gray-600">Campaigns</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600">98%</div>
                  <div className="text-sm text-gray-600">Retention</div>
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
                  src="/img/digital-marketing.jpg" 
                  alt="Digital Marketing Services"
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to dominate your market online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <feature.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right plan for your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl p-8 ${pkg.popular ? 'bg-gradient-to-br from-cyan-600 to-teal-600 text-white transform scale-105' : 'bg-gray-50'} hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-cyan-600'}`}>
                    {pkg.price}
                  </span>
                  <span className={pkg.popular ? 'text-cyan-100' : 'text-gray-600'}>
                    {pkg.period}
                  </span>
                </div>
                <p className={`mb-6 ${pkg.popular ? 'text-cyan-100' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircleIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-cyan-600'}`} />
                      <span className={pkg.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className={`block text-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-white text-cyan-600 hover:shadow-xl' 
                      : 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:shadow-xl hover:shadow-cyan-500/50'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Digital Marketing?
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
                className="flex items-start gap-3 p-4 bg-white rounded-lg"
              >
                <CheckCircleIcon className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
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
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-xl p-6"
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
              Ready to Grow Online?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get free digital marketing consultation and strategy session
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Book Free Consultation
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
