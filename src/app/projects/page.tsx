import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import ProjectFilters from './ProjectFilters';

export default function ProjectsPage() {
  const { projects } = siteContent;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our portfolio of innovative solutions and successful projects.
              </p>
              <ProjectFilters projects={projects} />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link key={index} href={`/projects/${project.slug}`}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category.split(',').map((category, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {category.trim()}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                        <div className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                          View Case Study
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
                Let's discuss how we can help bring your vision to life.
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