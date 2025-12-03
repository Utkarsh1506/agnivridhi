import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { NewspaperIcon, CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: "A Step-by-Step Guide to the PMEGP Loan: Unlocking a 35% Subsidy",
      excerpt: "Dreaming of starting your own business but held back by funding? The PMEGP scheme offers a significant subsidy of up to 35% on your project cost. Learn the simplified breakdown of the application journey and how we can help maximize your approval chances.",
      category: "Government Schemes",
      date: "October 24, 2025",
      author: "Agnivridhi Team",
      image: "/img/service-1.jpg",
      link: "#"
    },
    {
      title: "New MSME Grant Announced for Tech Startups",
      excerpt: "The Ministry of Commerce has just released details for a new grant aimed at supporting technology and innovation in the MSME sector. This is a game-changing opportunity for tech entrepreneurs across India.",
      category: "Latest News",
      date: "October 24, 2025",
      author: "Agnivridhi Team",
      image: "/img/service-2.jpg",
      link: "#"
    },
    {
      title: "GeM Portal Update: New Categories Added for Service Providers",
      excerpt: "The Government e-Marketplace has expanded its list of approved service categories, opening up new opportunities for consultants and digital agencies. Find out how to register and leverage this platform for government contracts.",
      category: "Compliance & Certification",
      date: "September 15, 2025",
      author: "Agnivridhi Team",
      image: "/img/service-3.jpg",
      link: "#"
    },
    {
      title: "CGTMSE Loan: Everything You Need to Know About Collateral-Free Funding",
      excerpt: "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) is revolutionizing how MSMEs access capital. Learn how to qualify, apply, and secure up to ₹2 Crore without collateral.",
      category: "Funding Solutions",
      date: "September 5, 2025",
      author: "Agnivridhi Team",
      image: "/img/offer-1.jpg",
      link: "#"
    },
    {
      title: "5 Common Mistakes to Avoid When Applying for PMEGP",
      excerpt: "Even minor errors in your PMEGP application can lead to rejection. Discover the 5 most common mistakes entrepreneurs make and how to avoid them to increase your chances of approval.",
      category: "Expert Tips",
      date: "August 28, 2025",
      author: "Agnivridhi Team",
      image: "/img/offer-2.jpg",
      link: "#"
    },
    {
      title: "How to Register Your Startup with DPIIT: Complete Guide",
      excerpt: "Startup India registration offers incredible benefits including tax exemptions and funding access. This step-by-step guide walks you through the complete DPIIT registration process.",
      category: "Startup Resources",
      date: "August 15, 2025",
      author: "Agnivridhi Team",
      image: "/img/offer-3.jpg",
      link: "#"
    }
  ];

  const categories = ["All", "Government Schemes", "Latest News", "Funding Solutions", "Expert Tips", "Startup Resources"];

  return (
    <Layout>
      <Head>
        <title>Blog - Business Funding Insights & Updates | Agnivridhi India</title>
        <meta name="description" content="Expert insights on PMEGP, CGTMSE, MSME schemes, and business funding. Stay updated with latest government schemes and funding opportunities." />
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
                <NewspaperIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Agnivridhi <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your Knowledge Hub for Business Growth. Stay updated with expert advice, funding opportunities, and the latest in government schemes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-sm font-semibold rounded-full">
                      Featured Post
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-cyan-600 font-semibold mb-3">{blogPosts[0].category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-5 h-5" />
                      {blogPosts[0].author}
                    </div>
                  </div>
                  <Link
                    href={blogPosts[0].link}
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all"
                  >
                    Read Full Article
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights and updates to help you navigate business funding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
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
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <Link
                      href={post.link}
                      className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-4 transition-all"
                    >
                      Read More
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-10 text-cyan-50">
              Subscribe to our newsletter for the latest funding updates and expert insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
