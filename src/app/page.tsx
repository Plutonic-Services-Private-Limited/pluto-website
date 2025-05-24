import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import ClientLogos from '@/components/ClientLogos';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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
      <Footer />
    </main>
  );
}
