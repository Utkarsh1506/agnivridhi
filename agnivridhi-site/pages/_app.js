import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics page view tracking
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-H1GCZDZ513', {
          page_path: url,
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      }

      // Facebook Pixel page view tracking
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Initialize Google Analytics
  useEffect(() => {
    // Load GA4
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H1GCZDZ513';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-H1GCZDZ513', {
        send_page_view: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    };
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
