'use client';

import {
  CodeBracketIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
                      <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                        {iconMap[service.icon as keyof typeof iconMap] && (
                          React.createElement(iconMap[service.icon as keyof typeof iconMap], {
                            className: "w-8 h-8 text-indigo-600 group-hover:text-white transition-colors"
                          })
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600">
                We&apos;re committed to delivering exceptional results through our comprehensive approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  We maintain the highest standards of quality in every project we undertake.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <MagnifyingGlassIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Attention to Detail
                </h3>
                <p className="text-gray-600">
                  We pay meticulous attention to every aspect of your project.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-600">
                  We provide end-to-end solutions that address all your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesClient; 