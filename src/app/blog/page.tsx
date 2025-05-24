import { siteContent } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  // Safely access blog posts with a default empty array
  const posts = siteContent.blog || [];
  const defaultImage = '/images/blog-hero.jpg';

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src={posts[0]?.image || defaultImage}
              alt="Blog"
              fill
              className="object-cover opacity-50"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
                <p className="text-xl text-gray-200">
                  Insights, updates, and stories from our team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image || defaultImage}
                        alt={post.title || 'Blog post'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.category.split(',').map((category, idx) => (
                            <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                              {category.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title || 'Untitled Post'}</h2>
                      {post.date && <p className="text-gray-600 text-sm mb-4">{post.date}</p>}
                      {post.excerpt && <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>}
                      <div className="mt-4 flex items-center justify-between">
                        {post.author && <span className="text-sm text-gray-500">By {post.author}</span>}
                        <span className="text-indigo-600 hover:text-indigo-700">Read More →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-600 mb-12">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <Link href="/contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-lg transition-colors duration-300">
                  Subscribe Now
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