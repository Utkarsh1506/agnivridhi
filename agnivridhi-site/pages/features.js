import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  MapPinIcon,
  FireIcon,
  MapIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      icon: ArrowPathIcon,
      title: "360° Support Ecosystem",
      description: "From funding to certification to marketing, we provide a seamless, end-to-end solution. Stop juggling multiple agencies. With us, you get a single, powerful partner for your entire growth journey.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: MapPinIcon,
      title: "Expert Navigation of Complexity",
      description: "We thrive in the world of paperwork and policy you want to avoid. Our deep expertise in government schemes and funding processes means we cut through the red tape, maximizing your approval chances and minimizing delays.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: FireIcon,
      title: "Relentless Focus on Results",
      description: "Our success is measured by yours. We don't just advise; we deliver. Our strategies are designed for one purpose: to secure the funding, grants, and certifications that will fuel your growth.",
      color: "from-cyan-600 to-cyan-700"
    },
    {
      icon: MapIcon,
      title: "Customized Roadmaps for Success",
      description: "Your vision is unique, and your strategy should be too. We listen to your goals and craft a personalized plan, ensuring our services align perfectly with the specific needs of your startup, MSME, or NGO.",
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: CheckBadgeIcon,
      title: "Proven Track Record",
      description: "500+ successful applications, ₹50+ Cr funded, and countless success stories. Our clients trust us because we deliver consistent, measurable results that transform businesses.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: RocketLaunchIcon,
      title: "Fast-Track Processing",
      description: "Time is money in business. Our streamlined processes and expert documentation ensure your applications move faster through approval channels, getting you funded sooner.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "100% Compliance Guarantee",
      description: "Regulatory compliance can make or break your business. We ensure every document, every filing, and every certification meets the highest standards of compliance and accuracy.",
      color: "from-cyan-600 to-teal-600"
    },
    {
      icon: UserGroupIcon,
      title: "Dedicated Support Team",
      description: "You're never alone in your journey. Our dedicated team of experts is available throughout the process, providing guidance, updates, and support whenever you need it.",
      color: "from-teal-600 to-cyan-600"
    }
  ];

  const advantages = [
    {
      title: "Unlock Maximum Financial Advantage",
      description: "We don't just find funding; we optimize it. Our expertise ensures you secure the highest possible subsidy (up to 35% with PMEGP), the most favorable loan terms, and access to grants you might have missed. We maximize every rupee available to you.",
      image: "/img/offer-1.jpg"
    },
    {
      title: "Gain Your Most Valuable Resource: Time",
      description: "Stop drowning in paperwork and bureaucratic red tape. We manage the entire application and documentation process from start to finish. This frees you to focus on what you do best—innovating, leading, and growing your business.",
      image: "/img/offer-2.jpg"
    },
    {
      title: "Increase Your Probability of Success",
      description: "Navigating funding and certification applications alone is risky. Our proven strategies and meticulous attention to detail minimize errors and significantly increase your chances of approval, saving you from costly rejections and delays.",
      image: "/img/offer-3.jpg"
    },
    {
      title: "Receive a True End-to-End Growth Partner",
      description: "Your journey doesn't end with a certificate or a loan. From securing initial funding to registering on GeM and marketing your brand digitally, we provide a holistic support system that stays with you at every stage of your business lifecycle.",
      image: "/img/offer-4.jpg"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Features - Why Partner with Agnivridhi India</title>
        <meta name="description" content="Discover why 500+ businesses trust Agnivridhi for funding, certifications, and growth. Expert navigation, 360° support, and proven results." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h4 className="text-cyan-600 font-semibold text-lg mb-4">OUR FEATURES</h4>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Why Partner with <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Agnivridhi?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are more than consultants; we are architects of your success. Our approach is built on a foundation of expertise, strategy, and a relentless commitment to your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-cyan-200">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Agnivridhi Advantage */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-cyan-600 font-semibold text-lg mb-4">OUR OFFER</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Agnivridhi Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you partner with us, you're not just hiring a consultant; you are gaining a strategic ally dedicated to your success.
            </p>
          </motion.div>

          <div className="space-y-16">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={advantage.image}
                      alt={advantage.title}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{advantage.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{advantage.description}</p>
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-10 text-cyan-50">
              Join 500+ successful businesses that trust Agnivridhi for their growth journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Get Free Consultation
              </motion.button>
              <motion.a
                href="tel:+919289555190"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all"
              >
                Call Now: +91 9289555190
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
