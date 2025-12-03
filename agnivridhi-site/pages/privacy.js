import Head from 'next/head';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeSlashIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Privacy() {
  const sections = [
    {
      title: '1. Information We Collect',
      icon: DocumentCheckIcon,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly, including name, email, phone number, business name, PAN, Aadhaar, GST number, and other details required for service delivery.'
        },
        {
          subtitle: 'Business Information',
          text: 'Financial documents, business plans, bank statements, turnover details, and other business-related information necessary for funding applications and certifications.'
        },
        {
          subtitle: 'Automatic Information',
          text: 'When you visit our website, we automatically collect IP address, browser type, device information, pages visited, time spent, and referring URLs through cookies and analytics tools.'
        },
        {
          subtitle: 'Communication Data',
          text: 'Records of emails, calls, messages, and consultation notes exchanged with our team for service improvement and dispute resolution.'
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      icon: UserGroupIcon,
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'To process applications for MSME funding, certifications (GST, ISO, MSME), government schemes (CGTMSE, PMEGP), and other consulting services.'
        },
        {
          subtitle: 'Communication',
          text: 'To send service updates, appointment reminders, scheme notifications, promotional offers, and respond to your inquiries.'
        },
        {
          subtitle: 'Improvement & Analytics',
          text: 'To analyze website usage, improve user experience, develop new services, and conduct research on business trends.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'To comply with legal obligations, government regulations, tax requirements, and respond to lawful requests from authorities.'
        },
        {
          subtitle: 'Marketing',
          text: 'To send newsletters, success stories, industry insights, and promotional materials. You can opt-out anytime.'
        }
      ]
    },
    {
      title: '3. Information Sharing',
      icon: GlobeAltIcon,
      content: [
        {
          subtitle: 'Government Authorities',
          text: 'We share necessary information with banks, SIDBI, NSIC, Ministry of MSME, and other government bodies for scheme processing and approvals.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted third parties (payment processors, hosting providers, email services, analytics tools) who assist in service delivery under strict confidentiality agreements.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, court orders, government investigations, or to protect our rights and safety.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In case of merger, acquisition, or sale of business assets, your information may be transferred to the new entity with continued privacy protection.'
        },
        {
          subtitle: 'What We Don\'t Share',
          text: 'We NEVER sell your personal information to third parties for marketing purposes. Your data is protected with us.'
        }
      ]
    },
    {
      title: '4. Data Security',
      icon: LockClosedIcon,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures including SSL encryption, secure servers, access controls, regular security audits, and data backup systems.'
        },
        {
          subtitle: 'Employee Training',
          text: 'All team members are trained on data protection practices and bound by confidentiality agreements.'
        },
        {
          subtitle: 'Physical Security',
          text: 'Physical documents are stored in secure locations with restricted access. Digital files are password-protected and encrypted.'
        },
        {
          subtitle: 'Limitations',
          text: 'While we strive for maximum security, no internet transmission is 100% secure. You share information at your own risk.'
        }
      ]
    },
    {
      title: '5. Your Rights',
      icon: ShieldCheckIcon,
      content: [
        {
          subtitle: 'Access & Correction',
          text: 'You can request access to your personal information and ask for corrections if data is inaccurate or incomplete.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You can request deletion of your information, subject to legal and contractual obligations. Some data must be retained for compliance.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt-out of marketing emails anytime by clicking unsubscribe or contacting us. Service-related communications will continue.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request your data in a structured, commonly used format for transfer to another service.'
        },
        {
          subtitle: 'Withdraw Consent',
          text: 'Where processing is based on consent, you can withdraw it anytime. This won\'t affect previous processing.'
        }
      ]
    },
    {
      title: '6. Cookies & Tracking',
      icon: EyeSlashIcon,
      content: [
        {
          subtitle: 'What Are Cookies',
          text: 'Cookies are small text files stored on your device that help us recognize you, remember preferences, and analyze site usage.'
        },
        {
          subtitle: 'Types of Cookies',
          text: 'We use essential cookies (necessary for site function), analytics cookies (Google Analytics), and marketing cookies (Facebook Pixel, Google Ads).'
        },
        {
          subtitle: 'Managing Cookies',
          text: 'You can disable cookies in your browser settings. However, this may affect site functionality and user experience.'
        },
        {
          subtitle: 'Third-Party Tracking',
          text: 'We use Google Analytics, Facebook Pixel, and similar tools to understand user behavior and improve marketing effectiveness.'
        }
      ]
    },
    {
      title: '7. Data Retention',
      content: [
        {
          subtitle: 'Retention Period',
          text: 'We retain your information as long as your account is active or as needed to provide services, typically 7 years for financial records as per Indian law.'
        },
        {
          subtitle: 'Inactive Accounts',
          text: 'If you\'re inactive for 3 years, we may archive or delete your non-essential data after notification.'
        },
        {
          subtitle: 'Legal Obligations',
          text: 'Some documents must be retained longer for tax, legal, and regulatory compliance (e.g., GST records, loan applications).'
        },
        {
          subtitle: 'Deletion Process',
          text: 'Upon deletion request, we remove data from active systems within 30 days, except where legal retention is required.'
        }
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        {
          text: 'Our services are not directed to individuals under 18. We do not knowingly collect information from minors. If you believe a child has provided us data, please contact us immediately for deletion.'
        }
      ]
    },
    {
      title: '9. International Data Transfers',
      content: [
        {
          subtitle: 'Location',
          text: 'Your data is primarily stored on servers in India. Some service providers (hosting, email) may store data in other countries with adequate protection.'
        },
        {
          subtitle: 'Safeguards',
          text: 'When data is transferred internationally, we ensure appropriate safeguards through contracts and compliance with data protection standards.'
        }
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: [
        {
          text: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Modified" date. Significant changes will be notified via email or website announcement. Continued use after changes constitutes acceptance.'
        }
      ]
    },
    {
      title: '11. Contact Us',
      content: [
        {
          text: 'For privacy-related questions, data access requests, or concerns:'
        },
        {
          text: 'Email: privacy@agnivridhiindia.com or info@agnivridhiindia.com'
        },
        {
          text: 'Phone: +91 9289555190'
        },
        {
          text: 'Address: Ghaziabad, Uttar Pradesh, India'
        },
        {
          text: 'We will respond to your request within 30 days.'
        }
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title="Privacy Policy | Agnivridhi India"
        description="Learn how Agnivridhi India collects, uses, and protects your personal information. Our commitment to data privacy and security."
        url="https://agnivridhiindia.com/privacy"
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
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Privacy <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Agnivridhi India, we are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We handle sensitive business and financial information with the highest standards of confidentiality and security. 
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-12 pb-8 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-start gap-4 mb-6">
                  {Icon && (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{section.title}</h3>
                </div>

                <div className="space-y-6 ml-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      {item.subtitle && (
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                      )}
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* GDPR Compliance Notice */}
      <section className="py-12 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <LockClosedIcon className="w-10 h-10 text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We comply with the Information Technology Act, 2000, and align our practices with international 
                  standards including GDPR principles. Your data is processed lawfully, fairly, and transparently.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to ensure a level of security 
                  appropriate to the risk, including pseudonymization, encryption, and regular security testing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About Privacy?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Our team is here to address any concerns about how we handle your data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.openConsultationModal?.()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Contact Us
              </motion.button>
              <motion.a
                href="/terms"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all inline-block"
              >
                Terms & Conditions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
