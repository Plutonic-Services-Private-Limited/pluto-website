import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UiUxDesignClient from './UiUxDesignClient';

export default function UiUxDesign() {
  const relatedProjects = [
    {
      title: "E-commerce Redesign",
      description: "Complete UI/UX overhaul for a leading retail platform",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      slug: "ecommerce-redesign"
    },
    {
      title: "Mobile App Design",
      description: "User-centered design for a fitness tracking application",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2070&auto=format&fit=crop",
      slug: "mobile-app"
    },
    {
      title: "Dashboard Interface",
      description: "Intuitive analytics dashboard for enterprise clients",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      slug: "dashboard"
    }
  ];

  const subServices = [
    {
      icon: "PaintBrushIcon",
      title: "User Interface Design",
      description: "We create visually appealing and intuitive interfaces that enhance user experience. Our UI design services include:",
      features: [
        "Visual design and branding",
        "Responsive design implementation",
        "Interactive prototypes",
        "Design system creation",
        "Accessibility compliance"
      ]
    },
    {
      icon: "ComputerDesktopIcon",
      title: "User Experience Design",
      description: "We focus on creating meaningful and engaging user experiences. Our UX design services include:",
      features: [
        "User research and analysis",
        "Information architecture",
        "User journey mapping",
        "Usability testing",
        "Interaction design"
      ]
    },
    {
      icon: "DevicePhoneMobileIcon",
      title: "Mobile App Design",
      description: "We design mobile applications that are both beautiful and functional. Our mobile design services include:",
      features: [
        "iOS and Android design",
        "Mobile-first approach",
        "Gesture-based interactions",
        "App store optimization",
        "Mobile usability testing"
      ]
    },
    {
      icon: "PresentationChartLineIcon",
      title: "Dashboard Design",
      description: "We create intuitive and informative dashboard interfaces. Our dashboard design services include:",
      features: [
        "Data visualization",
        "Information hierarchy",
        "Real-time updates",
        "Custom widgets",
        "Analytics integration"
      ]
    },
    {
      icon: "ShoppingBagIcon",
      title: "E-commerce Design",
      description: "We design e-commerce experiences that drive conversions. Our e-commerce design services include:",
      features: [
        "Product page optimization",
        "Shopping cart design",
        "Checkout flow optimization",
        "Category navigation",
        "Mobile commerce design"
      ]
    },
    {
      icon: "UserGroupIcon",
      title: "Enterprise Design",
      description: "We create scalable design solutions for enterprise applications. Our enterprise design services include:",
      features: [
        "Complex system design",
        "Workflow optimization",
        "Enterprise UI patterns",
        "Design documentation",
        "Team collaboration tools"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <UiUxDesignClient 
        relatedProjects={relatedProjects}
        subServices={subServices}
      />
      <Footer />
    </>
  );
} 