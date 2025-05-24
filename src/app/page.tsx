import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import ClientLogos from '@/components/ClientLogos';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ClientLogos />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      {/* FAQ Section */}
      <FAQ
        title="Common Questions"
        description="Find answers to frequently asked questions about our services and process."
        faqs={[
          {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule a consultation to understand your needs and provide a tailored solution for your business."
          },
          {
            question: "What makes your services different from others?",
            answer: "We combine technical expertise with creative innovation, offering end-to-end digital solutions. Our team stays ahead of industry trends and uses cutting-edge technologies to deliver exceptional results."
          },
          {
            question: "Do you work with startups and small businesses?",
            answer: "Absolutely! We work with businesses of all sizes. We offer scalable solutions that can grow with your business, from startups to enterprise-level organizations."
          },
          {
            question: "Can you help with existing projects?",
            answer: "Yes, we can help improve or maintain existing projects. We'll analyze your current setup and provide recommendations for enhancements, optimizations, or complete overhauls if needed."
          },
          {
            question: "What is your approach to project management?",
            answer: "We follow an agile methodology, ensuring regular communication and iterative development. You'll receive frequent updates and have opportunities to provide feedback throughout the project lifecycle."
          }
        ]}
        className="bg-gray-50"
      />
      <Footer />
    </main>
  );
}
