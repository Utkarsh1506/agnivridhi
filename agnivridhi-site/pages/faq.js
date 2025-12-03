import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is the PMEGP loan, and who can apply for it?",
      answer: "PMEGP (Prime Minister's Employment Generation Programme) is a government scheme that offers subsidies of up to 35% on project costs for new micro-enterprises. It is available to individuals above 18 years (educational qualifications may vary) and can be used for both manufacturing and service sector businesses. We help determine your eligibility and guide you through the entire application."
    },
    {
      question: "How long does it take to get a PMEGP or CGTMSE loan approved?",
      answer: "The typical approval timeline is 45-90 days from the date of application submission. This can vary based on the complexity of your project, the bank you are applying through, and how well your application is prepared. With our expert guidance, we significantly streamline this process and increase approval speed."
    },
    {
      question: "What is a CGTMSE loan, and why is collateral-free important?",
      answer: "CGTMSE stands for Credit Guarantee Fund Trust for Micro and Small Enterprises. This scheme provides a guarantee cover to banks so they can offer loans up to ₹2 Crore to MSMEs without requiring collateral. For most small businesses, lack of collateral is a major roadblock-CGTMSE eliminates that barrier completely."
    },
    {
      question: "Can you help me if I don't have a business plan or financial projections?",
      answer: "Absolutely. Many of our clients come to us without a formal business plan. We work with you to build a robust, bank-ready business plan and detailed financial projections that align with your vision and meet lender requirements. This is a core part of our service."
    },
    {
      question: "Why should I hire you instead of applying for schemes myself?",
      answer: "While you can apply for these schemes on your own, the process is often complex, time-consuming, and has a high rejection rate due to minor errors. Our expertise ensures your application is professional, accurate, and strategically positioned for approval. We save you time, reduce stress, and significantly increase your chances of success."
    },
    {
      question: "I don't have any property or collateral. Can I still get a business loan?",
      answer: "Yes. This is a very common situation. We specialize in helping clients access collateral-free loans through powerful government schemes like CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) and the MUDRA Loan."
    },
    {
      question: "What are the key benefits of a Startup India Certificate?",
      answer: "The DPIIT Startup India certificate provides major advantages, including a potential 3-year tax holiday, self-certification for compliance, eligibility for government tenders, and access to a network of funding opportunities like the Fund of Funds for Startups."
    },
    {
      question: "Who needs a GeM (Government e-Marketplace) Certificate?",
      answer: "Any business—whether you sell products or services—that wants to work with government departments, ministries, or Public Sector Undertakings (PSUs) should have a GeM registration. It opens up a massive, reliable market for your business."
    },
    {
      question: "What is the process to get started with Agnivridhi?",
      answer: "It's simple: 1) Contact Us for a free, no-obligation consultation. 2) Assessment: We discuss your goals and determine your eligibility. 3) Strategy: We create a clear roadmap and provide a checklist of required documents. 4) Execution: We handle the application and follow-up process from start to finish."
    },
    {
      question: "How much do you charge for your services?",
      answer: "Our fees are structured based on the complexity and type of service required. We believe in providing transparent and fair pricing, which we will discuss with you during our initial consultation. Our goal is to provide a service that delivers a significant return on your investment."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>FAQs - Frequently Asked Questions | Agnivridhi India</title>
        <meta name="description" content="Get answers to common questions about PMEGP, CGTMSE, MSME certifications, and business funding. Expert guidance from Agnivridhi India." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h4 className="text-cyan-600 font-semibold text-lg mb-4">FAQ</h4>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              We understand that navigating the world of business funding can be overwhelming. Here are answers to the most common questions we receive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-cyan-200 transition-all"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">{faq.question}</h3>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === index ? 'auto' : 0,
                      opacity: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-10 text-cyan-50">
              Our expert team is ready to provide personalized answers and guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Schedule a Call
              </motion.button>
              <motion.a
                href="mailto:info@agnivridhiindia.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all"
              >
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
