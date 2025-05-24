import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SoftwareDevelopmentClient from '@/app/services/software-development/SoftwareDevelopmentClient';

export default function SoftwareDevelopment() {
  const relatedProjects = [
    {
      title: "Enterprise Resource Planning System",
      description: "A comprehensive ERP solution that streamlines business operations and improves efficiency.",
      image: "/images/projects/erp.jpg",
      slug: "enterprise-resource-planning"
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with advanced features and seamless user experience.",
      image: "/images/projects/ecommerce.jpg",
      slug: "ecommerce-platform"
    },
    {
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking application with real-time transaction capabilities.",
      image: "/images/projects/banking.jpg",
      slug: "mobile-banking-app"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management solution",
      image: "/images/projects/healthcare-system.jpg",
      slug: "healthcare-system"
    },
    {
      title: "Inventory Management System",
      description: "Real-time inventory tracking and management",
      image: "/images/projects/inventory-system.jpg",
      slug: "inventory-system"
    },
    {
      title: "Learning Management Platform",
      description: "Interactive e-learning platform with analytics",
      image: "/images/projects/learning-platform.jpg",
      slug: "learning-platform"
    },
    {
      title: "Supply Chain Solution",
      description: "End-to-end supply chain management system",
      image: "/images/projects/supply-chain.jpg",
      slug: "supply-chain"
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