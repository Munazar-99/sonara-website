import { Metadata } from 'next';
import config from './config';

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    title: title || config.appName,
    description: description || config.appDescription,
    keywords: keywords || [
      'virtual receptionist service ireland',
      'call answering service for small business',
      '24/7 call answering service ireland',
      'Sonara',
      'phone answering service for tradesmen',
      'outsourced call handling',
      'affordable answering service ireland',
      'best virtual receptionist ireland',
      'business phone answering service',
      'after-hours call answering ireland',
      'live call answering service ireland',
      'receptionist service for local businesses',
    ],
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/'
        : `https://${config.domainName}/`,
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      locale: 'en_IE',
      type: 'website',
    },

    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    ...extraTags,
  };
};

export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'SoftwareApplication',
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          author: {
            '@type': 'Organization',
            name: 'Sonara',
          },
          datePublished: new Date(),
          applicationCategory: 'BusinessApplication',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            ratingCount: '3',
          },
          offers: [
            {
              '@type': 'Offer',
              price: '0.49',
              priceCurrency: 'EUR',
            },
          ],
        }),
      }}
    ></script>
  );
};
