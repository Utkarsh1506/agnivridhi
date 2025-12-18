import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Agnivridhi India</title>
        <meta name="description" content="Expert funding, certification, and growth support for MSMEs and startups. Learn about our mission and how we help businesses scale." />
        <meta name="keywords" content="funding for MSMEs, CGTMSE, PMEGP, business growth" />
        <link rel="canonical" href="https://agnivridhiindia.com/about" />
        <meta property="og:title" content="About Agnivridhi India | MSME Funding & Growth" />
        <meta property="og:description" content="We help MSMEs access government schemes, collateral-free loans, and certifications to scale with confidence." />
        <meta property="og:url" content="https://agnivridhiindia.com/about" />
        <meta property="og:image" content="https://agnivridhiindia.com/logo.png" />
        <meta property="og:type" content="profile" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Agnivridhi India
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                Empowering MSMEs and Startups with Expert Funding, Certifications, and Growth Solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Agnivridhi India, we believe every business deserves the opportunity to grow and thrive. 
                  Our mission is to bridge the gap between ambitious MSMEs, startups, and the resources they need to succeed.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We provide comprehensive support in funding, compliance, certifications, and digital growth - 
                  ensuring your business has everything it needs to scale with confidence.
                </p>
                <p className="text-lg text-gray-600">
                  With deep expertise in government schemes like CGTMSE, PMEGP, MUDRA, and various certification processes, 
                  we simplify complex procedures and help you access the capital and credentials your business deserves.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/img/award-team-1.jpeg"
                    alt="Awards – Team recognition"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white bg-gradient-to-r from-cyan-600 to-teal-600">
                    Awards & Recognition
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-cyan rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Trust & Transparency</h3>
                <p className="text-gray-600">
                  We build lasting relationships through honest communication and transparent processes at every step.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-teal rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Excellence in Service</h3>
                <p className="text-gray-600">
                  We're committed to delivering exceptional results and exceeding expectations in every project we undertake.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-cyan rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3">Client-Centric Approach</h3>
                <p className="text-gray-600">
                  Your success is our success. We tailor our solutions to meet your unique business needs and goals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-200">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">₹200Cr+</div>
                <div className="text-gray-200">Funding Facilitated</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-200">Successful Registrations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-200">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you access funding, streamline compliance, and accelerate growth.
              </p>
              <button className="bg-gradient-cyan text-white font-semibold px-10 py-5 rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Schedule Free Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
