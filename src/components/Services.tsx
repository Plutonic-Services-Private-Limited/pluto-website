import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Comprehensive software solutions tailored to your business needs',
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      'Website Development',
      'AI Solutions',
      'Mobile Applications',
      'IoT Development',
      'Web Applications',
      'E-commerce Solutions',
      'API Integration',
      'DevOps Services'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'multimedia',
    title: 'Multimedia',
    description: 'Creative design solutions that bring your brand to life',
    icon: (
      <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Packaging Design',
      'Graphic Design',
      'Video Editing',
      'Brochure Design',
      'Brand Book Creation'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Designing',
    description: 'User-centered design that creates engaging digital experiences',
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing',
      'Prototyping',
      'User Research',
      'Usability Testing'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your business',
    icon: (
      <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    features: [
      'Social Media Marketing',
      'Email Marketing',
      'Search Engine Optimization',
      'Performance Marketing',
      'Ads Marketing',
      'Influencer Marketing'
    ],
    color: 'from-red-500 to-red-600'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive digital solutions to help your business thrive
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`} />
              <div className="relative p-8">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    What We Offer
                  </h4>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Learn More
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Your Project
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services; 