import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import DigitalMarketingClient from './DigitalMarketingClient';

export default function DigitalMarketing() {
  const relatedProjects = [
    {
      title: 'E-commerce Growth Campaign',
      description: 'Increased online sales by 200% through targeted digital marketing strategies.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2070&auto=format&fit=crop',
      slug: 'ecommerce-campaign'
    },
    {
      title: 'Brand Awareness Campaign',
      description: 'Successfully launched a new brand with comprehensive digital marketing.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
      slug: 'brand-launch'
    },
    {
      title: 'Lead Generation Strategy',
      description: 'Generated 500+ qualified leads through multi-channel marketing.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      slug: 'lead-gen'
    }
  ];

  const subServices = [
    {
      icon: "MagnifyingGlassIcon",
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility in search engines and drive organic traffic.",
      features: [
        "Keyword Research & Analysis",
        "On-page SEO Optimization",
        "Technical SEO Audit",
        "Content Strategy",
        "Link Building",
        "Local SEO"
      ]
    },
    {
      icon: "CurrencyDollarIcon",
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic and conversions through strategic paid advertising.",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display Network Campaigns",
        "Remarketing Strategies",
        "Conversion Rate Optimization",
        "Budget Management"
      ]
    },
    {
      icon: "ShareIcon",
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience on social platforms.",
      features: [
        "Content Strategy",
        "Community Management",
        "Social Media Advertising",
        "Influencer Marketing",
        "Social Analytics",
        "Crisis Management"
      ]
    },
    {
      icon: "DocumentTextIcon",
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience.",
      features: [
        "Blog Content Creation",
        "Email Marketing",
        "Video Marketing",
        "Infographics",
        "Case Studies",
        "Content Distribution"
      ]
    },
    {
      icon: "EnvelopeIcon",
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships through email campaigns.",
      features: [
        "Email Campaign Strategy",
        "List Management",
        "Automation Workflows",
        "A/B Testing",
        "Performance Analytics",
        "Compliance Management"
      ]
    },
    {
      icon: "ChartBarIcon",
      title: "Analytics & Reporting",
      description: "Track and analyze your marketing performance to make data-driven decisions.",
      features: [
        "Performance Tracking",
        "Custom Dashboards",
        "ROI Analysis",
        "Competitor Analysis",
        "Market Research",
        "Strategic Recommendations"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <DigitalMarketingClient 
        relatedProjects={relatedProjects}
        subServices={subServices}
      />
      <Footer />
    </>
  );
} 