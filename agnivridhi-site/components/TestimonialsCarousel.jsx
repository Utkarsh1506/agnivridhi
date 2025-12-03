'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      company: "George Martin Jose",
      badge: "CGTMSE LOAN",
      title: "CGTMSE Success",
      excerpt: "Secured collateral-free capital under the CGTMSE scheme to expand operations, improve working capital cycles, and streamline compliance.",
      image: "/img/testimonial-1.jpg",
      link: "/cgtmse-george-martin-jose"
    },
    {
      company: "Pal & Sons Agro Pvt Ltd",
      badge: "Incorporation + Seed Fund",
      title: "Incorporation & Funding",
      excerpt: "End-to-end incorporation support and investor readiness. Structured documents and projections to unlock seed funding for scale.",
      image: "/img/pal_and_sons.png",
      link: "/incorporation-palandsons"
    },
    {
      company: "Vedanta Cosmetics",
      badge: "PMEGP",
      title: "PMEGP Success",
      excerpt: "Enabled PMEGP subsidy to establish a compliant manufacturing unit, create jobs, and launch new product lines.",
      image: "/img/vedanta_cosmetic.jpg",
      link: "/pmegp-vedanta-cosmetics"
    },
    {
      company: "Aadhithya Energy",
      badge: "Website",
      title: "Digital Launch",
      excerpt: "Designed and launched a modern, high-conversion website to boost local discovery and customer engagement.",
      image: "/img/aaditthya_filling_station.png",
      link: "/website-aadhithya-energy"
    },
    {
      company: "VISHWAM PANDYA ENTERPRISES",
      badge: "CGTMSE + Website",
      title: "Finance + Web",
      excerpt: "Secured CGTMSE funding and launched a refreshed brand website—unlocking both capital and credibility.",
      image: "/img/vishwam_enterprises.jpg",
      link: "/cgtmse-website-vishwam-pandya"
    },
    {
      company: "Goldi Kirana Store",
      badge: "CGTMSE",
      title: "Retail Funding",
      excerpt: "Accessed collateral-free CGTMSE funding to expand inventory, improve margins, and upgrade in-store experience.",
      image: "/img/goldi_kirana_store.png",
      link: "/cgtmse-goldi-kirana"
    },
    {
      company: "Hands of Happiness",
      badge: "CSR Funding",
      title: "Social Impact",
      excerpt: "Structured a CSR grant proposal and compliance framework to secure funding for high-impact community programs.",
      image: "/img/service-2.jpg",
      link: "/csr-hands-of-happiness"
    }
  ];

  const carouselRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % testimonials.length;
      const scrollAmount = currentIndex.current * (carousel.offsetWidth / 3);
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses. Real results. See how we've helped entrepreneurs achieve their dreams.
          </p>
        </motion.div>

        <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[350px] md:min-w-[400px] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.company}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-semibold rounded-full">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.company}</h3>
                  <p className="text-cyan-600 font-semibold mb-3 text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                currentIndex.current = index;
                carouselRef.current?.scrollTo({
                  left: index * (carouselRef.current.offsetWidth / 3),
                  behavior: 'smooth'
                });
              }}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-cyan-600 transition-colors"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
