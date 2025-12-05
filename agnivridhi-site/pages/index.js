import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HeroLottie from '../components/HeroLottie'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import ConsultationModal from '../components/ConsultationModal'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CurrencyRupeeIcon, 
  ShieldCheckIcon, 
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agnivridhi India',
    url: 'https://agnivridhiindia.com',
    logo: 'https://agnivridhiindia.com/logo1.png',
    description: 'Leading business consulting firm specializing in government schemes, funding, certifications, and digital growth solutions for Indian businesses.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://facebook.com/agnivridhiindia',
      'https://linkedin.com/company/agnivridhiindia',
      'https://twitter.com/agnivridhiindia'
    ]
  };

  return (
    <>
      <SEO 
        title="Agnivridhi India - Expert Business Growth & Government Scheme Consulting"
        description="Transform your business with expert consulting for CGTMSE/MUDRA loans, PMEGP subsidies, GST & MSME certifications, ISO standards, digital marketing, and strategic growth solutions across India."
        keywords="business consulting India, government schemes, CGTMSE loan consultant, MUDRA loan expert, PMEGP subsidy assistance, GST registration services, MSME Udyam certification, ISO certification consultant, digital marketing agency, business growth strategy, startup funding India, collateral-free loans, business advisory services"
        url="https://agnivridhiindia.com"
        structuredData={homeStructuredData}
      />
      <Head>
        <title>Agnivridhi India - Business Funding & Growth Solutions | CGTMSE, PMEGP, MSME</title>
        <meta name="description" content="Aapke Business Ki Udaan, Humare Saath - Expert solutions for MSME funding (CGTMSE, PMEGP, MUDRA), certifications (GST, ISO, MSME), and business growth. 500+ successful clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CGTMSE loan, PMEGP scheme, MUDRA loan, MSME registration, business funding, startup funding, GST registration" />
        <meta property="og:title" content="Agnivridhi India - Business Funding & Growth Solutions" />
        <meta property="og:description" content="Expert MSME funding, certifications, and growth consulting. 500+ businesses funded." />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        {/* Hero Section with Lottie */}
        <HeroLottie />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Services Section with Tabs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h4 className="text-cyan-600 font-semibold text-lg mb-4">OUR SERVICES</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Solutions for Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From funding to certifications to growth - everything you need under one roof
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Funding Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-cyan-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CurrencyRupeeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Funding Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Collateral-free loans, government schemes, and startup funding assistance
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>CGTMSE & MUDRA Loans</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>PMEGP Scheme (35% Subsidy)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>Business Loans & Grants</span>
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all"
                  >
                    Explore Funding
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Compliance & Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-teal-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Certifications</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Quick registrations and certifications for business credibility
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>MSME/Udyam Registration</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>GST & Tax Compliance</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>ISO & Quality Certifications</span>
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all"
                  >
                    View Certifications
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Business Growth & IT Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full border border-cyan-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CodeBracketIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & IT Solutions</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Digital transformation, software development, and strategic consulting
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>Custom Software & Apps</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>Cloud & Infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>Digital Marketing & SEO</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>AI & Automation</span>
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all"
                  >
                    Growth Services
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h4 className="text-cyan-600 font-semibold text-lg mb-4">OUR FEATURES</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Partner with Agnivridhi?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are more than consultants; we are architects of your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: SparklesIcon,
                  title: "360° Support Ecosystem",
                  description: "From funding to certification to marketing - a single powerful partner for your entire growth journey"
                },
                {
                  icon: CheckCircleIcon,
                  title: "Expert Navigation",
                  description: "Deep expertise in government schemes - we cut through red tape and maximize approval chances"
                },
                {
                  icon: ChartBarIcon,
                  title: "Results-Focused",
                  description: "Our success is measured by yours. We deliver funding, grants, and certifications that fuel growth"
                },
                {
                  icon: UserGroupIcon,
                  title: "Customized Roadmaps",
                  description: "Personalized strategies aligned perfectly with your startup, MSME, or NGO's specific needs"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Successful Applications", icon: CheckCircleIcon },
                { number: "₹50+ Cr", label: "Total Funding Secured", icon: CurrencyRupeeIcon },
                { number: "98%", label: "Client Satisfaction Rate", icon: SparklesIcon },
                { number: "45 Days", label: "Average Approval Time", icon: ClockIcon }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-cyan-200" />
                    </div>
                    <div className="text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-cyan-100 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Agnivridhi Advantage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h4 className="text-cyan-600 font-semibold text-lg mb-4">OUR OFFER</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Agnivridhi Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When you partner with us, you gain a strategic ally dedicated to your success
              </p>
            </motion.div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {[
                {
                  title: "Unlock Maximum Financial Advantage",
                  description: "We don't just find funding; we optimize it. Our expertise ensures you secure the highest possible subsidy (up to 35% with PMEGP), the most favorable loan terms, and access to grants you might have missed.",
                  image: "/img/offer-1.jpg"
                },
                {
                  title: "Gain Your Most Valuable Resource: Time",
                  description: "Stop drowning in paperwork and bureaucratic red tape. We manage the entire application and documentation process from start to finish. This frees you to focus on what you do best—innovating, leading, and growing your business.",
                  image: "/img/offer-2.jpg",
                  reverse: true
                }
              ].map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: offer.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${offer.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{offer.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{offer.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transition-all"
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Get expert consultation and take the first step towards securing funding and achieving growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all"
                >
                  Schedule Free Consultation
                </motion.button>
                <motion.a
                  href="tel:+919289555190"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-cyan-600 font-bold rounded-full text-lg border-2 border-cyan-600 hover:shadow-xl transition-all inline-block"
                >
                  Call: +91 9289555190
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Layout>
    </>
  )
}
