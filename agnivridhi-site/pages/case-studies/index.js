import Head from 'next/head';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function CaseStudiesIndex() {
  const caseStudies = [
    {
      id: 'cgtmse-george-martin-jose',
      title: 'Scaling Operations with Collateral-Free Capital',
      client: 'George Martin Jose',
      category: 'CGTMSE Funding',
      categoryColor: 'cyan',
      highlight: '₹35L Collateral-Free',
      description: 'How George accessed CGTMSE funding to expand operations and improve working capital efficiency by 18%.',
      results: ['₹35L Funded', '30 Days Approval', '+18% Efficiency'],
      image: '/img/service-1.jpg',
      link: '/case-studies/cgtmse-george-martin-jose'
    },
    {
      id: 'pmegp-vedanta-cosmetics',
      title: 'Launching a Cosmetics Brand with Government Support',
      client: 'Vedanta Cosmetics',
      category: 'PMEGP Subsidy',
      categoryColor: 'purple',
      highlight: '35% Government Subsidy',
      description: 'Vedanta Cosmetics secured PMEGP subsidy to establish a manufacturing unit and launch 8 product SKUs.',
      results: ['35% Subsidy', '₹15L Project', '15 Jobs Created'],
      image: '/img/service-2.jpg',
      link: '/case-studies/pmegp-vedanta-cosmetics'
    },
    {
      id: 'website-vishwam-enterprises',
      title: 'Digital Transformation for Traditional Business',
      client: 'Vishwam Enterprises',
      category: 'Web Development',
      categoryColor: 'teal',
      highlight: 'Complete Digital Presence',
      description: 'A traditional trading business transformed with modern e-commerce website and digital marketing.',
      results: ['3x Traffic', '250+ Leads/mo', 'Online Sales'],
      image: '/img/service-3.jpg',
      link: '#' // Placeholder
    },
    {
      id: 'incorporation-pal-and-sons',
      title: 'Fast-Track Business Registration & Compliance',
      client: 'Pal & Sons',
      category: 'Business Setup',
      categoryColor: 'orange',
      highlight: 'Complete Legal Setup',
      description: 'End-to-end company incorporation, GST, MSME registration, and compliance framework in 15 days.',
      results: ['15 Days Setup', 'All Certifications', 'Tax Compliant'],
      image: '/img/about-1.jpg',
      link: '#' // Placeholder
    },
    {
      id: 'digital-marketing-goldi-kirana',
      title: 'Local Business Goes Digital',
      client: 'Goldi Kirana Store',
      category: 'Digital Marketing',
      categoryColor: 'green',
      highlight: '5x Revenue Growth',
      description: 'A neighborhood kirana store expanded through digital marketing, online orders, and delivery setup.',
      results: ['5x Revenue', '500+ Orders/mo', 'Digital Presence'],
      image: '/img/offer-1.jpg',
      link: '#' // Placeholder
    },
    {
      id: 'iso-certification-aadhithya-energy',
      title: 'ISO 9001 Certification for Quality Standards',
      client: 'Aadhithya Energy',
      category: 'ISO Certification',
      categoryColor: 'blue',
      highlight: 'Global Quality Standards',
      description: 'Energy solutions provider achieved ISO 9001:2015 certification to expand into government contracts.',
      results: ['ISO 9001:2015', '60 Days Process', 'Gov Contracts'],
      image: '/img/offer-2.jpg',
      link: '#' // Placeholder
    }
  ];

  const stats = [
    { icon: CheckCircleIcon, value: '500+', label: 'Success Stories' },
    { icon: CurrencyRupeeIcon, value: '₹50+ Cr', label: 'Funding Secured' },
    { icon: SparklesIcon, value: '98%', label: 'Client Satisfaction' },
    { icon: BuildingStorefrontIcon, value: '1000+', label: 'Businesses Helped' }
  ];

  const categories = [
    { name: 'All', count: 6, color: 'gray' },
    { name: 'CGTMSE Funding', count: 4, color: 'cyan' },
    { name: 'PMEGP Subsidy', count: 1, color: 'purple' },
    { name: 'Web Development', count: 3, color: 'teal' },
    { name: 'Digital Marketing', count: 2, color: 'green' },
    { name: 'Certifications', count: 5, color: 'blue' }
  ];

  const getCategoryColor = (color) => {
    const colors = {
      cyan: 'bg-cyan-600',
      purple: 'bg-purple-600',
      teal: 'bg-teal-600',
      green: 'bg-green-600',
      blue: 'bg-blue-600',
      orange: 'bg-orange-600',
      gray: 'bg-gray-600'
    };
    return colors[color] || colors.gray;
  };

  return (
    <Layout>
      <SEO
        title="Success Stories & Case Studies | Agnivridhi India"
        description="Real success stories of businesses that achieved growth through CGTMSE funding, PMEGP subsidies, certifications, and digital transformation with Agnivridhi India."
        keywords="case studies, success stories, CGTMSE success, PMEGP success, business transformation, client testimonials"
        url="https://agnivridhiindia.com/case-studies"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center">
                <SparklesIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Success Stories That <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Inspire</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real businesses, real results. Discover how we've helped entrepreneurs secure funding, launch ventures, 
              and achieve sustainable growth across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 text-center"
                >
                  <Icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => study.link !== '#' && (window.location.href = study.link)}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-100 to-teal-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GlobeAltIcon className="w-20 h-20 text-cyan-600/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${getCategoryColor(study.categoryColor)} text-white text-xs font-semibold rounded-full`}>
                      {study.category}
                    </span>
                  </div>
                  {study.link === '#' && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{study.client}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.results.map((result, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold text-cyan-600">{study.highlight}</span>
                    {study.link !== '#' && (
                      <ArrowRightIcon className="w-5 h-5 text-cyan-600 group-hover:translate-x-2 transition-transform" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Join 500+ businesses that have achieved their growth goals with our expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Book Free Consultation
              </motion.button>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-flex items-center gap-2"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
