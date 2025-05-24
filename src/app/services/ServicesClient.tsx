'use client';

import {
  CodeBracketIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  link: string;
}

interface ServicesClientProps {
  services: Service[];
}

const iconMap = {
  CodeBracketIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MegaphoneIcon
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ServicesClient = ({ services }: ServicesClientProps) => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-10 h-full">
                      <div className="flex items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      </div>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
                              <span className="text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure the success of every project we undertake.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MagnifyingGlassIcon, title: 'Discovery', description: 'We begin by understanding your business goals and requirements.' },
              { icon: ClipboardDocumentListIcon, title: 'Planning', description: 'We create a detailed project plan and timeline.' },
              { icon: WrenchScrewdriverIcon, title: 'Execution', description: 'Our team builds your solution with regular updates.' },
              { icon: RocketLaunchIcon, title: 'Delivery', description: 'We deploy your solution and provide ongoing support.' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help your business grow with our services.
            </p>
            <Link href="/contact">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesClient; 