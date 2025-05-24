import { siteContent } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjects = () => {
  const featuredProjects = siteContent.projects.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent work and see how we&apos;ve helped businesses transform their digital presence.
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-lg text-gray-600">{project.description}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.results?.map((result, index) => (
                        <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Case Study
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
                      >
                        Visit Live Site
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 