import Head from 'next/head';

export default function SEO({
  title = 'Agnivridhi India - Business Growth & Government Scheme Consulting',
  description = 'Expert consulting for CGTMSE/MUDRA loans, PMEGP subsidies, GST registration, MSME/Udyam certification, ISO certification, digital marketing, and business growth strategies across India.',
  keywords = 'business consulting, government schemes, CGTMSE loan, MUDRA loan, PMEGP subsidy, GST registration, MSME certification, Udyam registration, ISO certification, digital marketing, business growth, startup funding, India',
  ogImage = '/img/og-image.jpg',
  url = 'https://agnivridhiindia.com',
  type = 'website',
  structuredData
}) {
  const siteName = 'Agnivridhi India';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Agnivridhi India',
    description: description,
    url: 'https://agnivridhiindia.com',
    logo: 'https://agnivridhiindia.com/logo1.png',
    image: 'https://agnivridhiindia.com/img/og-image.jpg',
    telephone: '+91-XXXXXXXXXX',
    email: 'info@agnivridhiindia.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    priceRange: '₹₹',
    sameAs: [
      'https://facebook.com/agnivridhiindia',
      'https://linkedin.com/company/agnivridhiindia',
      'https://twitter.com/agnivridhiindia'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    },
    serviceType: [
      'Business Consulting',
      'Government Scheme Consulting',
      'CGTMSE Loan Assistance',
      'PMEGP Subsidy Support',
      'GST Registration',
      'MSME Certification',
      'ISO Certification',
      'Digital Marketing',
      'Business Strategy'
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Agnivridhi India" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@agnivridhiindia" />
      <meta name="twitter:creator" content="@agnivridhiindia" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
