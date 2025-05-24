import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/content';
import OfficeGlimpses from '@/components/OfficeGlimpses';
import MissionVision from '@/components/MissionVision';
import TeamGrid from '@/components/TeamGrid';
import Image from 'next/image';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

export default function About() {
  const { company, stats, testimonials } = siteContent;

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About {company.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{company.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stats.projectsCompleted}+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stats.happyClients}+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stats.teamMembers}+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stats.yearsExperience}+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Glimpses */}
        <OfficeGlimpses />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Team Section */}
        <TeamGrid />

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          title="About Us FAQ"
          description="Learn more about our company, team, and working process."
          faqs={[
            {
              question: "What is your company's mission?",
              answer: "Our mission is to empower businesses through innovative digital solutions. We strive to deliver exceptional value to our clients while maintaining the highest standards of quality and professionalism."
            },
            {
              question: "How do you select and train your team members?",
              answer: "We carefully select team members based on their expertise, experience, and cultural fit. We invest in continuous training and professional development to ensure our team stays at the forefront of technology and industry best practices."
            },
            {
              question: "What is your company's approach to innovation?",
              answer: "Innovation is at our core. We encourage creative thinking, experimentation, and continuous learning. Our team regularly explores new technologies and methodologies to deliver cutting-edge solutions to our clients."
            },
            {
              question: "How do you maintain quality across all projects?",
              answer: "We have established rigorous quality control processes and best practices. Each project undergoes thorough testing and review phases, and we maintain detailed documentation to ensure consistency and excellence."
            },
            {
              question: "What are your company's core values?",
              answer: "Our core values include integrity, innovation, excellence, collaboration, and client satisfaction. These values guide our decisions and actions, ensuring we deliver the best possible service to our clients."
            }
          ]}
          className="bg-white"
        />

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. Contact us today to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 