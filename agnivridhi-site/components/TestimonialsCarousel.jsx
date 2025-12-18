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
      const scrollAmount = currentIndex.current * (carousel.offsetWidth / 2.5);
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3500);

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

        <div ref={carouselRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.2 } }}
              className="min-w-[260px] md:min-w-[280px] flex-shrink-0 group"
            >
              <div className="rounded-lg bg-white border border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-auto max-h-[380px]">
                {/* Avatar Section - Compact */}
                <div className="p-3 flex items-center gap-2.5 border-b border-cyan-50">
                  <img
                    src={item.image}
                    alt={item.company}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-gray-900 truncate group-hover:text-cyan-700 transition-colors">
                      {item.company}
                    </h3>
                    <span className="inline-block px-1.5 py-0.5 mt-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 flex flex-col gap-2 flex-1">
                  <h4 className="text-sm font-semibold text-cyan-700">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="px-3 py-2 border-t border-cyan-50 bg-gradient-to-r from-cyan-50 to-teal-50">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-0.5 text-cyan-700 font-bold text-xs hover:gap-1 transition-all group/link"
                  >
                    Read Story
                    <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
