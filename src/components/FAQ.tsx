'use client';

import { useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQ = ({ title = "Frequently Asked Questions", description, faqs, className = "" }: FAQProps) => {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const target = event.target as HTMLDetailsElement;
      if (target.open) {
        detailsRefs.current.forEach((details) => {
          if (details && details !== target) {
            details.open = false;
          }
        });
      }
    };

    detailsRefs.current.forEach((details) => {
      if (details) {
        details.addEventListener('toggle', handleToggle);
      }
    });

    return () => {
      detailsRefs.current.forEach((details) => {
        if (details) {
          details.removeEventListener('toggle', handleToggle);
        }
      });
    };
  }, []);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && (
              <p className="text-xl text-gray-600">{description}</p>
            )}
          </div>
          
          <div className="space-y-4 [&_details[open]_details]:not([open])">
            {faqs.map((faq, index) => (
              <details
                key={index}
                ref={(el: HTMLDetailsElement | null) => {
                  detailsRefs.current[index] = el;
                }}
                className="group bg-white rounded-lg shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-lg font-medium text-gray-900 hover:bg-gray-50">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      className="h-5 w-5 text-indigo-600"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 