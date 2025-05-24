'use client';

import {
  ChartBarIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShareIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedProject {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface SubService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface DigitalMarketingClientProps {
  relatedProjects: RelatedProject[];
  subServices: SubService[];
}

const iconMap = {
  ChartBarIcon,
  MegaphoneIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ShareIcon,
  EnvelopeIcon
};

export default function DigitalMarketingClient({ relatedProjects, subServices }: DigitalMarketingClientProps) {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Drive growth and engagement with our comprehensive digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subServices.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircleIcon className="w-5 h-5 text-indigo-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How We Do It</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Strategy & Analysis</h3>
              <p className="text-gray-600">
                We analyze your market and create a tailored digital marketing strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MegaphoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Implementation</h3>
              <p className="text-gray-600">
                We execute your strategy across multiple digital channels.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize your campaigns for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center text-indigo-600">
                      <span className="mr-2">View Project</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let&apos;s discuss how we can help you achieve your marketing goals with our digital marketing expertise.
            </p>
            <Link href="/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 