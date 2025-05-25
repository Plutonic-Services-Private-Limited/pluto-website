import Link from 'next/link';
import { siteContent } from '@/data/content';
import {
  CodeBracketIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  MegaphoneIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  CodeBracketIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  MegaphoneIcon,
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link key={index} href={service.link}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors">
                        {Icon && (
                          <Icon
                            className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-600">
                              <svg
                                className="w-4 h-4 mr-2 text-indigo-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 