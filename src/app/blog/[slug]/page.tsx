import { siteContent } from '@/data/content';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShareButtons from './ShareButtons';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = siteContent.blog.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = siteContent.blog
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-black mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-center text-gray-700">
                <span className="mr-6">{post.date}</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative -mt-8 mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Content */}
              <div className="prose prose-lg max-w-none text-black
                prose-headings:text-black prose-headings:font-bold
                prose-p:text-black prose-p:leading-relaxed prose-p:text-lg
                prose-strong:text-black prose-strong:font-semibold
                prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-li:text-black prose-li:leading-relaxed prose-li:text-lg
                prose-blockquote:text-black prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-4
                prose-hr:border-gray-200
                prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6
                prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-4">
                <div className="text-black">
                  {post.content}
                </div>
              </div>

              {/* Tags and Share Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gray-100 text-black text-sm rounded-full hover:bg-gray-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Share this post</h3>
                    <ShareButtons title={post.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-black text-center mb-12">Similar Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full group">
                        <div className="relative h-56">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-8">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {relatedPost.category.split(',').map((category, idx) => (
                              <span key={idx} className="px-3 py-1 bg-indigo-100 text-black text-xs rounded-full">
                                {category.trim()}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-indigo-600 transition-colors">{relatedPost.title}</h3>
                          <p className="text-black text-sm mb-4">{relatedPost.date}</p>
                          <p className="text-black line-clamp-2 mb-6">{relatedPost.excerpt}</p>
                          <div className="flex items-center justify-between">
                            {relatedPost.author && <span className="text-sm text-black">By {relatedPost.author}</span>}
                            <span className="text-indigo-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                              Read More
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-black mb-6">Stay Updated</h2>
              <p className="text-xl text-black font-medium mb-12">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <Link href="/contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Contact Us
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