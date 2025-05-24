import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MultimediaClient from './MultimediaClient';

export default function Multimedia() {
  const relatedProjects = [
    {
      title: "Brand Video Production",
      description: "Professional video production for brand storytelling",
      image: "/images/projects/brand-video.jpg",
      slug: "brand-video"
    },
    {
      title: "Product Showcase",
      description: "Engaging product demonstration videos",
      image: "/images/projects/product-showcase.jpg",
      slug: "product-showcase"
    },
    {
      title: "Event Coverage",
      description: "Comprehensive event documentation and highlights",
      image: "/images/projects/event-coverage.jpg",
      slug: "event-coverage"
    }
  ];

  const subServices = [
    {
      icon: "VideoCameraIcon",
      title: "Video Production",
      description: "Professional video production services that bring your vision to life. Our video services include:",
      features: [
        "Corporate videos and commercials",
        "Product demonstrations",
        "Social media content",
        "Event coverage",
        "Motion graphics and animation"
      ]
    },
    {
      icon: "MicrophoneIcon",
      title: "Audio Production",
      description: "High-quality audio production services for various media. Our audio services include:",
      features: [
        "Voice-over recording",
        "Sound design and mixing",
        "Music composition",
        "Audio post-production",
        "Podcast production"
      ]
    },
    {
      icon: "PhotoIcon",
      title: "Graphic Design",
      description: "Creative graphic design solutions for your brand. Our design services include:",
      features: [
        "Brand identity design",
        "Marketing materials",
        "Social media graphics",
        "Print design",
        "Digital assets"
      ]
    },
    {
      icon: "PresentationChartLineIcon",
      title: "Interactive Media",
      description: "Engaging interactive media experiences. Our interactive services include:",
      features: [
        "AR/VR experiences",
        "360° videos",
        "Interactive presentations",
        "Web-based animations",
        "Virtual tours"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <MultimediaClient 
        relatedProjects={relatedProjects}
        subServices={subServices}
      />
      <Footer />
    </>
  );
}