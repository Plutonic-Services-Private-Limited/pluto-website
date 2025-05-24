import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/content';
import ServicesClient from './ServicesClient';

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      <Navbar />
      <ServicesClient services={services} />
      <Footer />
    </>
  );
} 