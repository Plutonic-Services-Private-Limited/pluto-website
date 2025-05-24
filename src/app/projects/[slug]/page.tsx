import { siteContent } from '@/data/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface ProjectMetric {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  color?: string;
}

interface ProjectSection {
  title: string;
  content: string;
  image: string;
  metrics?: ProjectMetric[];
  features?: string[];
  position: 'left' | 'right';
  type?: 'default' | 'multimedia' | 'marketing';
}

export default async function ProjectDetailPage({ params, searchParams }: ProjectDetailPageProps) {
  const [resolvedParams] = await Promise.all([params, searchParams]);
  const project = siteContent.projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const details = project.details || {
    client: 'Client',
    duration: project.duration || 'N/A',
    challenge: project.challenge || 'N/A',
    solution: project.solution || 'N/A',
    results: project.results || [],
    gallery: [
      project.image,
      '/images/projects/gallery-1.jpg',
      '/images/projects/gallery-2.jpg',
      '/images/projects/gallery-3.jpg',
      '/images/projects/gallery-4.jpg',
      '/images/projects/gallery-5.jpg',
    ],
  };

  // Use gallery images from project details or fallback to sample images
  const galleryImages = details.gallery || [
    project.image,
    '/images/projects/gallery-1.jpg',
    '/images/projects/gallery-2.jpg',
    '/images/projects/gallery-3.jpg',
    '/images/projects/gallery-4.jpg',
    '/images/projects/gallery-5.jpg',
  ];

  // Define project sections with consistent structure
  const projectSections: ProjectSection[] = [
    {
      title: 'Challenge',
      content: details.challenge,
      image: galleryImages[1],
      metrics: [
        { value: '3x', label: 'Growth Target', description: 'Expected business growth', color: 'indigo' },
        { value: '50%', label: 'Efficiency Goal', description: 'Target efficiency improvement', color: 'indigo' }
      ],
      position: 'right',
      type: 'default'
    },
    {
      title: 'Solution',
      content: details.solution,
      image: galleryImages[2],
      features: [
        'Advanced Technology Stack',
        'Scalable Architecture',
        'User-Centric Design',
        'Performance Optimization',
        'Security Implementation'
      ],
      position: 'left',
      type: 'default'
    },
    {
      title: 'Results',
      content: 'Project outcomes and achievements',
      image: galleryImages[3],
      metrics: [
        { value: '200%', label: 'Growth Achieved', description: 'Business growth', color: 'green' },
        { value: '60%', label: 'Efficiency Gain', description: 'Operational efficiency', color: 'green' }
      ],
      position: 'right',
      type: 'default'
    },
    {
      title: 'Impact',
      content: 'Business impact and user engagement',
      image: galleryImages[4],
      metrics: [
        { value: '500K+', label: 'Active Users', description: 'Engaged with the platform', color: 'indigo' },
        { value: '4.8/5', label: 'User Satisfaction', description: 'Based on user feedback', color: 'indigo' }
      ],
      position: 'left',
      type: 'default'
    }
  ];

  // Add specialized sections based on project category
  if (project.category.toLowerCase().includes('multimedia')) {
    projectSections.push(
      {
        title: 'Media Production',
        content: 'High-quality media content creation and production',
        image: galleryImages[5] || galleryImages[0],
        metrics: [
          { value: '100+', label: 'Videos Produced', description: 'Professional video content', color: 'blue' },
          { value: '50+', label: 'Graphics Created', description: 'Custom visual assets', color: 'blue' }
        ],
        position: 'right',
        type: 'multimedia'
      },
      {
        title: 'Content Strategy',
        content: 'Strategic content planning and execution',
        image: galleryImages[6] || galleryImages[1],
        features: [
          'Video Production',
          'Motion Graphics',
          '3D Animation',
          'Sound Design',
          'Visual Effects'
        ],
        position: 'left',
        type: 'multimedia'
      }
    );
  }

  if (project.category.toLowerCase().includes('marketing')) {
    projectSections.push(
      {
        title: 'Campaign Performance',
        content: 'Digital marketing campaign results and metrics',
        image: galleryImages[5] || galleryImages[0],
        metrics: [
          { value: '1M+', label: 'Reach', description: 'Total audience reached', color: 'green' },
          { value: '100K+', label: 'Engagement', description: 'User interactions', color: 'green' }
        ],
        position: 'right',
        type: 'marketing'
      },
      {
        title: 'ROI & Analytics',
        content: 'Campaign return on investment and analytics',
        image: galleryImages[6] || galleryImages[1],
        metrics: [
          { value: '300%', label: 'ROI', description: 'Return on investment', color: 'green' },
          { value: '50%', label: 'Conversion Rate', description: 'Lead to customer conversion', color: 'green' }
        ],
        position: 'left',
        type: 'marketing'
      },
      {
        title: 'Channel Performance',
        content: 'Performance across different marketing channels',
        image: galleryImages[7] || galleryImages[2],
        features: [
          'Social Media Marketing',
          'Search Engine Optimization',
          'Content Marketing',
          'Email Marketing',
          'Paid Advertising'
        ],
        position: 'right',
        type: 'marketing'
      }
    );
  }

  const renderSection = (section: ProjectSection, index: number) => {
    const isLeft = section.position === 'left';
    return (
      <div key={index} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`order-1 ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{section.content}</p>
              
              {section.metrics && (
                <div className={`grid ${section.type === 'marketing' ? 'grid-cols-2' : 'grid-cols-2'} gap-4 mb-6`}>
                  {section.metrics.map((metric, idx) => (
                    <div key={idx} className={`bg-${metric.color}-50 p-4 rounded-lg`}>
                      <div className="text-2xl font-bold text-${metric.color}-600 mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                      {metric.description && (
                        <div className="text-xs text-gray-500 mt-1">{metric.description}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.features && (
                <div className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={`order-2 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.split(',').map((category, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">
                      {category.trim()}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
                <p className="text-xl text-gray-200 mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Live Project
                      </button>
                    </Link>
                  )}
                  {project.details?.githubUrl && (
                    <Link href={project.details.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Duration</h3>
                </div>
                <p className="text-gray-600">{details.duration}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Client</h3>
                </div>
                <p className="text-gray-600">{details.client}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Sections */}
        {projectSections.map((section, index) => renderSection(section, index))}

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-600 mb-12">
                Let&apos;s discuss how we can help bring your vision to life.
              </p>
              <Link href="/contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-lg transition-colors duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 