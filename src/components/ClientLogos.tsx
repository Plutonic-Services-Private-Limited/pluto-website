import { siteContent } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';

const ClientLogos = () => {
  const { clients } = siteContent;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies across various industries.
            Our solutions have helped these organizations achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <Link
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-16 w-full grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain p-2 filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Clients
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 