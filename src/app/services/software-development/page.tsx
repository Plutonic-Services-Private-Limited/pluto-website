import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SoftwareDevelopmentClient from '@/app/services/software-development/SoftwareDevelopmentClient';
import Link from 'next/link';
import Image from 'next/image';

export default function SoftwareDevelopment() {
  const relatedProjects = [
    {
      title: "E-commerce Platform Development",
      description: "Built a scalable e-commerce platform with advanced features like real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      slug: "ecommerce-platform"
    },
    {
      title: "Mobile App Development",
      description: "Developed a cross-platform mobile application with offline capabilities and push notifications.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      slug: "mobile-app"
    },
    {
      title: "Enterprise Software Solution",
      description: "Created a comprehensive enterprise software solution for managing business operations and workflows.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      slug: "enterprise-software"
    }
  ];

  const subServices = [
    {
      icon: "CodeBracketIcon",
      title: "Custom Software Development",
      description: "We build tailored software solutions that address your specific business needs. Our custom software development services include:",
      features: [
        "Requirement analysis and planning",
        "Custom application development",
        "Legacy system modernization",
        "API development and integration",
        "Quality assurance and testing"
      ]
    },
    {
      icon: "CloudIcon",
      title: "Enterprise Solutions",
      description: "Scalable and secure enterprise-grade applications that streamline your business operations. Our enterprise solutions include:",
      features: [
        "Enterprise resource planning (ERP)",
        "Customer relationship management (CRM)",
        "Supply chain management",
        "Business intelligence systems",
        "Workflow automation"
      ]
    },
    {
      icon: "Squares2X2Icon",
      title: "Cloud Applications",
      description: "Modern cloud-native applications that leverage the power of cloud computing. Our cloud services include:",
      features: [
        "Cloud migration and optimization",
        "Serverless architecture",
        "Microservices development",
        "Cloud-native applications",
        "DevOps implementation"
      ]
    },
    {
      icon: "DevicePhoneMobileIcon",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile development services include:",
      features: [
        "iOS and Android development",
        "Cross-platform development",
        "Mobile app maintenance",
        "App store optimization",
        "Mobile app testing"
      ]
    },
    {
      icon: "CpuChipIcon",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning. Our AI services include:",
      features: [
        "Machine learning model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "AI-powered automation"
      ]
    },
    {
      icon: "CircleStackIcon",
      title: "IoT Solutions",
      description: "Connected devices and smart systems that transform your business. Our IoT services include:",
      features: [
        "IoT device development",
        "Smart home solutions",
        "Industrial IoT applications",
        "IoT data analytics",
        "IoT security implementation"
      ]
    },
    {
      icon: "CubeIcon",
      title: "Blockchain Development",
      description: "Secure and transparent blockchain solutions for various industries. Our blockchain services include:",
      features: [
        "Smart contract development",
        "DeFi applications",
        "NFT marketplace development",
        "Blockchain integration",
        "Cryptocurrency solutions"
      ]
    },
    {
      icon: "ShieldCheckIcon",
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets. Our cybersecurity services include:",
      features: [
        "Security assessment and audit",
        "Penetration testing",
        "Security architecture design",
        "Incident response planning",
        "Security monitoring and compliance"
      ]
    },
    {
      icon: "ServerIcon",
      title: "Data Science & Analytics",
      description: "Data-driven solutions that help you make informed business decisions. Our data services include:",
      features: [
        "Big data analytics",
        "Data visualization",
        "Business intelligence",
        "Data warehousing",
        "Predictive modeling"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <SoftwareDevelopmentClient 
        relatedProjects={relatedProjects}
        subServices={subServices}
      />
      <Footer />
    </>
  );
} 