import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SuccessStories() {
  const stories = [
    {
      company: "George Martin Jose",
      badge: "CGTMSE LOAN",
      title: "Securing Collateral-Free Capital",
      description: "Secured collateral-free capital under the CGTMSE scheme to expand operations, improve working capital cycles, and streamline compliance.",
      image: "/img/testimonial-1.jpg",
      link: "/case-studies/cgtmse-george-martin-jose"
    },
    {
      company: "Pal & Sons Agro Pvt Ltd",
      badge: "Incorporation + Seed Fund",
      title: "From Setup to Investor-Ready",
      description: "End-to-end incorporation support and investor readiness—structured documents and projections unlocked seed funding and compliance in 15 days.",
      image: "/img/pal_and_sons.png",
      link: "/case-studies"
    },
    {
      company: "Vedanta Cosmetics",
      badge: "PMEGP",
      title: "Manufacturing Launch",
      description: "Enabled 35% PMEGP subsidy to establish a compliant manufacturing unit, create 25+ jobs, and launch new product lines within 60 days.",
      image: "/img/vedanta_cosmetic.jpg",
      link: "/case-studies/pmegp-vedanta-cosmetics"
    },
    {
      company: "Aadhithya Energy Filling Station",
      badge: "Website Launch",
      title: "Digital Discovery",
      description: "Designed and launched a modern, high-conversion website to boost local discovery—tripled inbound inquiries within weeks.",
      image: "/img/aaditthya_filling_station.png",
      link: "/case-studies"
    },
    {
      company: "VISHWAM PANDYA ENTERPRISES",
      badge: "CGTMSE + Website",
      title: "Capital & Credibility",
      description: "Secured ₹40L CGTMSE funding and launched a refreshed brand website—unlocking both capital and credibility for new client acquisition.",
      image: "/img/vishwam_enterprises.jpg",
      link: "/case-studies"
    },
    {
      company: "Goldi Kirana Store",
      badge: "CGTMSE Funding",
      title: "Expanding Inventory",
      description: "Accessed ₹18L collateral-free CGTMSE funding to expand inventory depth, improve margins, and boost monthly sales by 28%.",
      image: "/img/goldi_kirana_store.png",
      link: "/cgtmse-goldi-kirana"
    },
    {
      company: "Hands of Happiness",
      badge: "CSR Funding",
      title: "Social Impact",
      description: "Structured a ₹12L CSR grant proposal and compliance framework to secure funding for 3 high-impact community programs.",
      image: "/img/service-2.jpg",
      link: "/csr-hands-of-happiness"
    },
    {
      company: "Hamarapetrol",
      badge: "CGTMSE Loan",
      title: "Retail Expansion",
      description: "Secured CGTMSE funding to expand retail operations and improve service infrastructure across multiple locations.",
      image: "/img/service-3.jpg",
      link: "/cgtmse-hamarapetrol"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Applications" },
    { number: "₹50+ Cr", label: "Total Funding Secured" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "45 Days", label: "Average Approval Time" }
  ];

  return (
    <Layout>
      <Head>
        <title>Success Stories - Client Testimonials | Agnivridhi India</title>
        <meta name="description" content="Read success stories of 500+ businesses funded through PMEGP, CGTMSE, and MSME schemes. Real results from Agnivridhi India's expert services." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full">
                <TrophyIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Success <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-600">
              Real businesses. Real results. Real growth. Discover how we've helped entrepreneurs like you secure funding, certifications, and business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business has a unique story. Here are some of our proudest moments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.company}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-semibold rounded-full">
                        {story.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {story.company}
                    </h3>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-600">
                      {story.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                      {story.description}
                    </p>
                    <Link
                      href={story.link}
                      className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all group"
                    >
                      Read Full Story
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              We measure success by the outcomes our clients achieve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Agnivridhi simplified the entire funding journey for us. Professional, responsive, and outcome-focused from day one.",
                author: "Business Owner",
                role: "MSME Founder"
              },
              {
                quote: "The CGTMSE loan approval came through in record time. Their expertise made all the difference.",
                author: "Manufacturing Unit",
                role: "Production Manager"
              },
              {
                quote: "From incorporation to funding, they handled everything seamlessly. Highly recommended!",
                author: "Startup Founder",
                role: "Tech Entrepreneur"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl relative"
              >
                <div className="text-cyan-600 text-6xl mb-4 opacity-30">"</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-2 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
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
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-10 text-cyan-50">
              Let's discuss how we can help your business secure funding and achieve growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Schedule Consultation
              </motion.button>
              <motion.a
                href="tel:+919289555190"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all"
              >
                Call: +91 9289555190
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
