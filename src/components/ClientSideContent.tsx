'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RelatedProject {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ClientSideContentProps {
  relatedProjects: RelatedProject[];
}

const ClientSideContent = ({ relatedProjects }: ClientSideContentProps) => {
  return (
    <>
      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Technologies We Use</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable solutions for our clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center group">
              <h3 className="text-xl font-bold mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Frontend</h3>
              <div className="flex flex-col items-center space-y-6">
                {['React', 'Vue.js', 'Angular', 'Next.js'].map((tech) => (
                  <div 
                    key={tech} 
                    className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-4 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-xl 
                             hover:border-2 hover:border-indigo-500 group"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/tech/${tech.toLowerCase()}.png`}
                        alt={tech}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center group">
              <h3 className="text-xl font-bold mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Backend</h3>
              <div className="flex flex-col items-center space-y-6">
                {['Node.js', 'Python', 'Java', '.NET'].map((tech) => (
                  <div 
                    key={tech} 
                    className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-4 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-xl 
                             hover:border-2 hover:border-indigo-500 group"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/tech/${tech.toLowerCase()}.png`}
                        alt={tech}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center group">
              <h3 className="text-xl font-bold mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Cloud & DevOps</h3>
              <div className="flex flex-col items-center space-y-6">
                {['AWS', 'Azure', 'Docker', 'Kubernetes'].map((tech) => (
                  <div 
                    key={tech} 
                    className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-4 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-xl 
                             hover:border-2 hover:border-indigo-500 group"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/tech/${tech.toLowerCase()}.png`}
                        alt={tech}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center group">
              <h3 className="text-xl font-bold mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Databases</h3>
              <div className="flex flex-col items-center space-y-6">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'].map((tech) => (
                  <div 
                    key={tech} 
                    className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-4 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-xl 
                             hover:border-2 hover:border-indigo-500 group"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/tech/${tech.toLowerCase()}.png`}
                        alt={tech}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center group">
              <h3 className="text-xl font-bold mb-8 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Tools</h3>
              <div className="flex flex-col items-center space-y-6">
                {['Git', 'Jenkins', 'Jira', 'VS Code'].map((tech) => (
                  <div 
                    key={tech} 
                    className="w-28 h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-4 
                             transform transition-all duration-300 hover:scale-110 hover:shadow-xl 
                             hover:border-2 hover:border-indigo-500 group"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/tech/${tech.toLowerCase()}.png`}
                        alt={tech}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">See Our Work in Action</h2>
          <div className="max-w-6xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="Software Development Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[600px] rounded-xl shadow-2xl"
              ></iframe>
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
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSideContent; 