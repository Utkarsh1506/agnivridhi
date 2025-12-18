import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
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
import { TrophyIcon, PlayIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTimeUpdate = () => {
      const pct = v.duration ? (v.currentTime / v.duration) * 100 : 0;
      setVideoProgress(pct);
    };
    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    onTimeUpdate();
    return () => {
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);
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

        {/* Featured In Section - Magazine Style */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest">Media Coverage</p>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Featured in Leading Publications</h3>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Our founder's journey has been recognized and featured across India's most respected business and entrepreneurship magazines</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  name: 'Asia Connect Magazine', 
                  title: 'Building Agnivridhi India as a Platform for Growth and Possibility',
                  image: '/img/magazine-asia-connect.jpg',
                  description: '',
                  url: 'https://asiaconnectmagazine.com/rahul-kumar-singh-building-agnivridhi-india-as-a-platform-for-growth-and-possibility/' 
                },
                { 
                  name: 'Success Magazine', 
                  title: 'Creating Opportunities Through Vision and Responsibility',
                  image: '/img/magazine-success.png',
                  description: 'Today, Agnivridhi India offers a range of business support and professional development services aimed at strengthening operational efficiency, improving professional readiness, and building long-term credibility.',
                  url: 'https://successmagazine.in/rahul-kumar-singh-creating-opportunities-through-vision-and-responsibility/' 
                },
                { 
                  name: 'Brandz Magazine', 
                  title: 'A Young Visionary Building Pathways for Sustainable Growth',
                  image: '/img/magazine-brandz.jpg',
                  description: '',
                  url: 'https://brandzmagazine.com/rahul-kumar-singh-a-young-visionary-building-pathways-for-sustainable-growth/' 
                },
                { 
                  name: 'CEO India Magazine', 
                  title: 'Transforming Ambition into Action Through Agnivridhi India',
                  image: '/img/magazine-ceo-india.jpg',
                  description: '',
                  url: 'https://ceoindiamagazine.com/rahul-kumar-singh-transforming-ambition-into-action-through-agnivridhi-india/' 
                },
                { 
                  name: 'Business Matters', 
                  title: 'Building a Future of Confidence, Clarity and Responsible Growth',
                  image: '/img/magazine-business-matters.jpg',
                  description: '',
                  url: 'https://businessmatters.in/rahul-kumar-singh-building-a-future-of-confidence-clarity-and-responsible-growth/' 
                },
                { 
                  name: 'Founder Magazine', 
                  title: 'Nurturing Growth Through Purpose-Driven Entrepreneurship',
                  image: '/img/magazine-founder.jpg',
                  description: '',
                  url: 'https://foundermagazine.in/rahul-kumar-singh-nurturing-growth-through-purpose-driven-entrepreneurship/' 
                }
              ].map((pub, index) => (
                <motion.a
                  key={index}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 32, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.2 } }}
                  className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200"
                >
                  {/* Magazine Cover Image */}
                  <div className="relative h-64 bg-gradient-to-br from-cyan-100 to-teal-100 overflow-hidden">
                    <img
                      src={pub.image}
                      alt={pub.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                        e.target.parentElement.innerHTML = '<div class="text-center p-6"><div class="text-6xl mb-3">📰</div><p class="text-cyan-700 font-bold text-lg">' + pub.name + '</p></div>';
                      }}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured 2024
                    </div>
                  </div>

                  {/* Magazine Details */}
                  <div className="p-5 flex-1 flex flex-col bg-white">
                    <div className="mb-3 pb-3 border-b border-gray-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Publication</p>
                      <h4 className="text-gray-900 font-black text-lg leading-tight group-hover:text-cyan-700 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                        {pub.name}
                      </h4>
                    </div>

                    <p className="text-gray-700 text-sm font-semibold leading-snug mb-2 line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {pub.title}
                    </p>

                    {pub.description && (
                      <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3 italic" style={{ fontFamily: 'Georgia, serif' }}>
                        "{pub.description}"
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-cyan-700 text-sm font-bold group-hover:gap-3 transition-all mt-auto" style={{ fontFamily: 'Georgia, serif' }}>
                      <span>Read Full Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent stripe */}
                  <div className="h-1 bg-gradient-to-r from-cyan-600 to-teal-600" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Spotlight (Top) - Revamped */}
        <section className="py-16 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-cyan-700 bg-cyan-100/60 border border-cyan-200">
                <TrophyIcon className="w-4 h-4" /> Awards & Achievements
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">Recognition That Builds Trust</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-3">A quick showcase of our recent honors and client milestones across funding and technology.</p>
            </motion.div>

            <div className="columns-1 md:columns-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                whileHover={{ rotate: -0.5, y: -4, scale: 1.01 }}
                className="group bg-white/80 backdrop-blur rounded-2xl border border-cyan-100 shadow-sm hover:shadow-xl transition-all mb-8"
                style={{ breakInside: 'avoid' }}
              >
                <div className="relative aspect-[4/3]">
                  <img src="/img/award-team-1.jpeg" alt="Team receiving national award" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-cyan-600 to-teal-600 shadow-md">National Spotlight</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs rounded-full border border-cyan-200 text-cyan-700 font-semibold bg-cyan-50">MSME Excellence</span>
                    <span className="text-gray-500 text-xs">2025</span>
                  </div>
                  <h6 className="text-base font-semibold text-gray-900 mb-1">Recognized for Enabling Growth</h6>
                  <p className="text-sm text-gray-600">Funding readiness, compliance, and digital enablement that unlocked faster scale.</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ rotate: 0.5, y: -4, scale: 1.01 }}
                className="group bg-white/80 backdrop-blur rounded-2xl border border-teal-100 shadow-sm hover:shadow-xl transition-all mb-8"
                style={{ breakInside: 'avoid' }}
              >
                <div className="relative aspect-[4/3]">
                  <img src="/img/award-team-2.jpeg" alt="Award ceremony stage moment" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md">Client Success</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs rounded-full border border-teal-200 text-teal-700 font-semibold bg-teal-50">Impact Delivery</span>
                    <span className="text-gray-500 text-xs">Funding + Tech</span>
                  </div>
                  <h6 className="text-base font-semibold text-gray-900 mb-1">Celebrating Partner Wins</h6>
                  <p className="text-sm text-gray-600">From CGTMSE approvals to go-live digital products across sectors.</p>
                </div>
              </motion.div>

              {/* Card 3 (Video Teaser) */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                whileHover={{ rotate: -0.3, y: -4, scale: 1.01 }}
                className="group bg-white/80 backdrop-blur rounded-2xl border border-cyan-100 shadow-sm hover:shadow-xl transition-all mb-8"
                style={{ breakInside: 'avoid' }}
              >
                <div className="relative aspect-video">
                  <img src="/img/award-team-1.jpeg" alt="Highlights Poster" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-cyan-600 to-teal-600 shadow-md">Highlights</span>
                  <div className="absolute inset-0 bg-black/30 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="#achievements-video" className="px-4 py-2 rounded-full bg-white text-cyan-700 font-bold shadow">
                      Watch Reel →
                    </Link>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs rounded-full border border-cyan-200 text-cyan-700 font-semibold bg-cyan-50">Highlights Reel</span>
                    <span className="text-gray-500 text-xs">Live</span>
                  </div>
                  <h6 className="text-base font-semibold text-gray-900 mb-1">A Quick Look at Our Journey</h6>
                  <p className="text-sm text-gray-600">Snapshots of on-stage moments and client wins—tap to view full video.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dedicated Video Section */}
        <section id="achievements-video" className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10"
              >
                <video ref={videoRef} className="w-full h-full" controls autoPlay loop playsInline muted preload="metadata" poster="/img/award-team-1.jpeg">
                  <source src="/img/award-ceremony.mp4" type="video/mp4" />
                </video>
                {/* Pulse glow ring when playing */}
                <div className={`absolute inset-0 rounded-2xl pointer-events-none ${isVideoPlaying ? 'opacity-40 animate-ping ring-4 ring-white/40' : 'opacity-0'}`}></div>
                <div className="absolute inset-0 grid place-items-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur ring-2 ring-white/40">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">On-Stage Moments & Client Wins</h3>
                <p className="text-cyan-50 text-lg mb-6">A short reel capturing the energy, gratitude, and trust we’ve built while delivering funding, certifications, and digital launches.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['CGTMSE', 'PMEGP', 'Digital Launch', 'Certifications'].map((chip, i) => (
                    <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20">{chip}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href="/success-stories" className="px-6 py-3 bg-white text-cyan-700 font-bold rounded-full shadow hover:shadow-2xl transition-all">Explore Success Stories</Link>
                  <a href="tel:+919289555190" className="px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-700 transition-all">Call: +91 9289555190</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


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
