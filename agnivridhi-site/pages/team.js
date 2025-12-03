import Head from 'next/head';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Team() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/img/team/ceo.jpg',
      bio: 'Expert in MSME funding with 15+ years of experience in government schemes and business consulting.',
      expertise: ['CGTMSE', 'PMEGP', 'Business Strategy'],
      email: 'rajesh@agnivridhiindia.com',
      phone: '+91 9289555190'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Compliance',
      image: '/img/team/compliance.jpg',
      bio: 'Specialist in GST, MSME registration, and ISO certifications with proven track record.',
      expertise: ['GST Registration', 'MSME Udyam', 'ISO Certification'],
      email: 'priya@agnivridhiindia.com',
      phone: '+91 9289555191'
    },
    {
      name: 'Amit Patel',
      role: 'Digital Marketing Lead',
      image: '/img/team/marketing.jpg',
      bio: 'Growth hacker with expertise in digital marketing, SEO, and brand building for MSMEs.',
      expertise: ['SEO', 'Social Media', 'Content Marketing'],
      email: 'amit@agnivridhiindia.com',
      phone: '+91 9289555192'
    },
    {
      name: 'Sneha Verma',
      role: 'Technical Head',
      image: '/img/team/tech.jpg',
      bio: 'Full-stack developer specializing in web and mobile app development for businesses.',
      expertise: ['Web Development', 'App Development', 'UI/UX Design'],
      email: 'sneha@agnivridhiindia.com',
      phone: '+91 9289555193'
    },
    {
      name: 'Vikram Singh',
      role: 'Funding Advisor',
      image: '/img/team/advisor.jpg',
      bio: 'Financial expert helping MSMEs secure collateral-free loans and government subsidies.',
      expertise: ['MUDRA Loans', 'Startup Funding', 'Financial Planning'],
      email: 'vikram@agnivridhiindia.com',
      phone: '+91 9289555194'
    },
    {
      name: 'Anjali Reddy',
      role: 'Client Relations Manager',
      image: '/img/team/relations.jpg',
      bio: 'Dedicated to ensuring exceptional client experience and long-term partnerships.',
      expertise: ['Client Success', 'Relationship Management', 'Support'],
      email: 'anjali@agnivridhiindia.com',
      phone: '+91 9289555195'
    }
  ];

  const values = [
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'Constantly evolving to provide cutting-edge solutions for business growth'
    },
    {
      icon: BriefcaseIcon,
      title: 'Expertise',
      description: 'Deep industry knowledge and proven track record of 500+ successful clients'
    },
    {
      icon: AcademicCapIcon,
      title: 'Integrity',
      description: 'Transparent processes and ethical practices in every client engagement'
    }
  ];

  return (
    <Layout>
      <SEO
        title="Our Team - Expert Consultants | Agnivridhi India"
        description="Meet the expert team behind Agnivridhi India. Experienced professionals helping MSMEs with funding, certifications, and business growth across India."
        url="https://agnivridhiindia.com/team"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center">
                <UserCircleIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experienced professionals dedicated to empowering MSMEs and startups with funding, certifications, and growth strategies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                  className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-100 to-teal-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserCircleIcon className="w-32 h-32 text-cyan-600/30" />
                  </div>
                  {/* Placeholder - replace with actual image when available */}
                  {/* <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      <span className="text-xs">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </a>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Let our expert team help you achieve your business goals with personalized consultation
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
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-block"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
