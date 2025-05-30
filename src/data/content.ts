import { SiteContent } from '@/types/content';

export const siteContent: SiteContent = {
  company: {
    name: 'Plutonic',
    description: 'A leading digital agency that helps businesses transform their digital presence.',
    mission: 'To help businesses thrive in the digital age by providing innovative solutions that drive growth and success.',
    vision: 'To be the leading digital agency that transforms businesses through technology and creativity.',
    founded: 2018,
    location: 'Tech City, TC 12345',
    email: 'contact@plutonic.com',
    phone: '+1 (555) 123-4567',
  },
  services: [
    {
      title: 'Software Development',
      description: 'Comprehensive software solutions tailored to your business needs, from web applications to AI-powered systems.',
      icon: 'CodeBracketIcon',
      link: '/services/software-development',
      features: [
        'Website Development',
        'AI Solutions',
        'Mobile Applications',
        'IoT Development',
        'Web Applications',
        'E-commerce Platforms',
        'API Integration',
        'DevOps Services'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Multimedia',
      description: 'Creative design solutions that bring your brand to life through compelling visual content and packaging.',
      icon: 'VideoCameraIcon',
      link: '/services/multimedia',
      features: [
        'Packaging Design',
        'Graphic Design',
        'Video Editing',
        'Brochure Design',
        'Brand Book Creation',
        'Motion Graphics'
      ],
      technologies: ['Adobe Creative Suite', 'Final Cut Pro', 'After Effects', 'Illustrator', 'Photoshop']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: 'PaintBrushIcon',
      link: '/services/ui-ux-design',
      features: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing',
        'Prototyping',
        'User Research',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle']
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to boost your online presence and drive business growth.',
      icon: 'MegaphoneIcon',
      link: '/services/digital-marketing',
      features: [
        'Social Media Marketing',
        'Email Marketing',
        'Search Engine Optimization',
        'Performance Marketing',
        'Ads Marketing',
        'Influencer Marketing'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'Google Ads', 'Mailchimp', 'SEMrush']
    },
  ],
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      category: 'Web Development',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      slug: 'ecommerce-platform',
      liveUrl: 'https://example.com/ecommerce',
      duration: '3 months',
      challenge: 'Building a scalable e-commerce platform that could handle high traffic and complex product management.',
      solution: 'Implemented a microservices architecture with Next.js for the frontend and Node.js for the backend, using MongoDB for flexible data storage.',
      results: [
        'Increased conversion rate by 40%',
        'Reduced page load time by 60%',
        'Handled 10x more concurrent users',
        'Improved mobile conversion by 35%'
      ]
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application with real-time transaction features.',
      category: 'Mobile Development',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
      slug: 'mobile-banking-app',
      liveUrl: 'https://example.com/banking',
      duration: '4 months',
      challenge: 'Creating a secure mobile banking solution that meets strict financial regulations while providing a great user experience.',
      solution: 'Developed a React Native app with end-to-end encryption and biometric authentication, backed by a secure Node.js API.',
      results: [
        'Achieved 99.9% uptime',
        'Reduced transaction time by 50%',
        'Increased user adoption by 200%',
        'Maintained zero security breaches'
      ]
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent analytics platform that provides real-time insights and predictions.',
      category: 'Data Science',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      slug: 'ai-analytics-dashboard',
      liveUrl: 'https://example.com/analytics',
      duration: '5 months',
      challenge: 'Building an AI-powered analytics platform that could process large datasets and provide accurate predictions.',
      solution: 'Implemented machine learning models using TensorFlow and created an interactive dashboard with React and D3.js.',
      results: [
        'Improved prediction accuracy by 85%',
        'Reduced data processing time by 70%',
        'Increased user engagement by 150%',
        'Generated 30% more actionable insights'
      ]
    },
    {
      title: 'Corporate Website',
      description: 'A responsive corporate website with modern design and CMS integration.',
      category: 'Web Development',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      slug: 'corporate-website',
      link: '#',
      details: {
        client: 'Tech Corporation',
        duration: '3 months',
        challenge: 'Create a modern, content-rich website that effectively communicates the company\'s vision and services.',
        solution: 'Developed a custom website with Next.js and Sanity CMS for easy content management, featuring interactive animations and responsive design.',
        results: [
          '200% increase in lead generation',
          '45% increase in time spent on site',
          '60% improvement in mobile engagement',
          '75% reduction in content update time',
        ],
        githubUrl: 'https://github.com/plutonic/corporate-website',
        gallery: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
        ],
      },
    },
    {
      title: 'Food Delivery App',
      description: 'A real-time food delivery application with order tracking and payment integration.',
      category: 'Mobile Development',
      technologies: ['React Native', 'Google Maps API', 'Stripe', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop',
      slug: 'food-delivery-app',
      link: '#',
      details: {
        client: 'Food Delivery Startup',
        duration: '5 months',
        challenge: 'Build a scalable food delivery app with real-time order tracking and seamless payment processing.',
        solution: 'Developed a cross-platform app with real-time order tracking, integrated payment processing, and optimized delivery routes.',
        results: [
          '500K+ active users',
          '4.7/5 app store rating',
          '30% increase in order volume',
          '25% reduction in delivery time',
        ],
        githubUrl: 'https://github.com/plutonic/food-delivery-app',
        gallery: [
          'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=450&fit=crop',
        ],
      },
    },
    {
      title: 'Marketing Dashboard',
      description: 'An analytics dashboard for tracking marketing campaigns and performance.',
      category: 'Web Development',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      slug: 'marketing-dashboard',
      link: '#',
      details: {
        client: 'Marketing Agency',
        duration: '4 months',
        challenge: 'Create a comprehensive dashboard for tracking and analyzing marketing campaign performance.',
        solution: 'Built a real-time analytics dashboard with interactive visualizations and automated reporting features.',
        results: [
          '50% reduction in reporting time',
          '40% increase in campaign ROI',
          'Real-time data visualization',
          'Automated report generation',
        ],
        githubUrl: 'https://github.com/plutonic/marketing-dashboard',
        gallery: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
        ],
      },
    },
    {
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness tracking application with workout plans and progress monitoring.',
      category: 'Mobile Development',
      technologies: ['React Native', 'GraphQL', 'AWS', 'Redux', 'HealthKit'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
      slug: 'fitness-tracking-app',
      link: '#',
      details: {
        client: 'Fitness Brand',
        duration: '7 months',
        challenge: 'Develop a feature-rich fitness app with workout tracking and social features.',
        solution: 'Created a cross-platform app with workout tracking, progress monitoring, and social sharing capabilities.',
        results: [
          '2M+ downloads',
          '4.9/5 app store rating',
          '70% user retention rate',
          '1M+ workouts tracked',
        ],
        githubUrl: 'https://github.com/plutonic/fitness-app',
        gallery: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
        ],
      },
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo, color palette, and visual guidelines.',
      category: 'Multimedia, Branding',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=450&fit=crop',
      slug: 'brand-identity-design',
      liveUrl: 'https://example.com/brand-identity',
      duration: '2 months',
      challenge: 'Creating a unique and memorable brand identity that resonates with the target audience.',
      solution: 'Developed a comprehensive brand identity system with consistent visual elements and guidelines.',
      results: [
        'Increased brand recognition by 75%',
        'Improved brand consistency across platforms',
        'Enhanced customer engagement',
        'Positive feedback from stakeholders'
      ]
    },
    {
      title: 'Product Launch Campaign',
      description: 'Comprehensive digital marketing campaign for a new product launch.',
      category: 'Digital Marketing, Social Media',
      technologies: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
      slug: 'product-launch-campaign',
      liveUrl: 'https://example.com/product-launch',
      duration: '3 months',
      challenge: 'Creating buzz and driving sales for a new product in a competitive market.',
      solution: 'Implemented a multi-channel marketing strategy with targeted campaigns and influencer partnerships.',
      results: [
        '200% increase in pre-orders',
        '1M+ social media reach',
        '50% higher engagement rate',
        'Exceeded sales targets by 150%'
      ]
    },
    {
      title: 'Video Production Series',
      description: 'Series of promotional and educational videos for a tech company.',
      category: 'Multimedia, Video Production',
      technologies: ['Adobe Premiere Pro', 'After Effects', 'Cinema 4D'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
      slug: 'video-production-series',
      liveUrl: 'https://example.com/video-series',
      duration: '4 months',
      challenge: 'Creating engaging video content that explains complex technical concepts.',
      solution: 'Produced a series of high-quality videos with motion graphics and animations.',
      results: [
        '500K+ video views',
        '40% increase in product understanding',
        '25% higher conversion rate',
        'Positive user feedback'
      ]
    },
    {
      title: 'Social Media Campaign',
      description: 'Integrated social media marketing campaign across multiple platforms.',
      category: 'Digital Marketing, Social Media',
      technologies: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop',
      slug: 'social-media-campaign',
      liveUrl: 'https://example.com/social-campaign',
      duration: '2 months',
      challenge: 'Building brand presence and engagement across social media platforms.',
      solution: 'Created and executed a cohesive social media strategy with engaging content.',
      results: [
        '300% increase in followers',
        '200% higher engagement rate',
        '50% increase in website traffic',
        'Improved brand sentiment'
      ]
    },
    {
      title: 'Motion Graphics Package',
      description: 'Custom motion graphics and animations for a marketing campaign.',
      category: 'Multimedia, Animation',
      technologies: ['After Effects', 'Cinema 4D', 'Adobe Illustrator'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
      slug: 'motion-graphics-package',
      liveUrl: 'https://example.com/motion-graphics',
      duration: '1 month',
      challenge: 'Creating engaging motion graphics that align with brand guidelines.',
      solution: 'Developed a suite of custom animations and motion graphics.',
      results: [
        'Enhanced visual storytelling',
        'Improved message retention',
        'Higher engagement rates',
        'Positive client feedback'
      ]
    },
    {
      title: 'SEO Optimization Campaign',
      description: 'Comprehensive SEO strategy and implementation for improved search rankings.',
      category: 'Digital Marketing, SEO',
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'WordPress'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      slug: 'seo-optimization-campaign',
      liveUrl: 'https://example.com/seo-campaign',
      duration: '6 months',
      challenge: 'Improving search rankings and organic traffic for a competitive industry.',
      solution: 'Implemented a comprehensive SEO strategy with content optimization and link building.',
      results: [
        '200% increase in organic traffic',
        'Top 10 rankings for key terms',
        '50% more qualified leads',
        'Improved conversion rate'
      ]
    }
  ],
  blog: [
    {
      title: 'The Future of Web Development',
      slug: 'future-of-web-development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'Web Development',
      tags: ['Web Development', 'Technology', 'Future Trends'],
      author: 'John Doe',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop'
    },
    {
      title: 'AI in Digital Marketing',
      slug: 'ai-in-digital-marketing',
      excerpt: 'How artificial intelligence is revolutionizing digital marketing strategies.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'Digital Marketing',
      tags: ['AI', 'Digital Marketing', 'Technology'],
      author: 'Jane Smith',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop'
    },
    {
      title: 'UI/UX Design Best Practices',
      slug: 'ui-ux-design-best-practices',
      excerpt: 'Essential tips and best practices for creating exceptional user experiences.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'Best Practices'],
      author: 'Mike Johnson',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop'
    }
  ],
  team: [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital technology, John leads our team with vision and expertise.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      bio: 'Jane brings 10 years of UI/UX design experience, creating beautiful and intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Mike is a full-stack developer with expertise in modern web technologies and cloud architecture.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Sarah Wilson',
      role: 'Digital Marketing Director',
      bio: 'Sarah specializes in digital marketing strategies and has helped numerous businesses grow their online presence.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Emily Carter',
      role: 'Project Manager',
      bio: 'Emily ensures every project runs smoothly and on time.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'Alex Lee', 
      role: 'Backend Developer', 
      bio: 'Alex builds robust server-side solutions.', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', 
      social: { linkedin: '#', github: '#' } 
    },
    { 
      name: 'Priya Patel', 
      role: 'Frontend Developer', 
      bio: 'Priya crafts beautiful, responsive interfaces.', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop', 
      social: { linkedin: '#', github: '#' } 
    },
    { 
      name: 'Carlos Gomez', 
      role: 'QA Engineer', 
      bio: 'Carlos ensures our products are bug-free.', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', 
      social: { linkedin: '#', twitter: '#' } 
    },
    { 
      name: 'Linda Zhang', 
      role: 'Content Strategist', 
      bio: 'Linda creates compelling content strategies.', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', 
      social: { linkedin: '#', twitter: '#' } 
    },
    { 
      name: 'Tom Brown', 
      role: 'DevOps Engineer', 
      bio: 'Tom automates and optimizes our infrastructure.', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', 
      social: { linkedin: '#', github: '#' } 
    },
    { 
      name: 'Nina Rossi', 
      role: 'UI Designer', 
      bio: 'Nina designs stunning user interfaces.', 
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop', 
      social: { linkedin: '#', dribbble: '#' } 
    },
    { 
      name: 'Omar Farouk', 
      role: 'Mobile Developer', 
      bio: 'Omar builds seamless mobile experiences.', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', 
      social: { linkedin: '#', github: '#' } 
    },
    { 
      name: 'Sophie Dubois', 
      role: 'HR Manager', 
      bio: 'Sophie fosters a great team culture.', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', 
      social: { linkedin: '#', twitter: '#' } 
    },
    { 
      name: 'Ivan Petrov', 
      role: 'Data Scientist', 
      bio: 'Ivan turns data into actionable insights.', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', 
      social: { linkedin: '#', github: '#' } 
    },
    { 
      name: 'Mia Kim', 
      role: 'Support Lead', 
      bio: 'Mia ensures our clients are always happy.', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', 
      social: { linkedin: '#', twitter: '#' } 
    },
  ],
  officeGlimpses: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=450&fit=crop',
  ],
  testimonials: [
    {
      name: 'David Brown',
      role: 'CEO, TechStart',
      content: 'Plutonic transformed our digital presence completely. Their team\'s expertise and dedication to our project was outstanding.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Working with Plutonic has been a game-changer for our business. Their digital marketing strategies have significantly increased our online reach.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, FoodDelivery',
      content: 'The mobile app Plutonic developed for us has received outstanding feedback from our customers. Their attention to detail and user experience is remarkable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ],
  stats: {
    projectsCompleted: 150,
    happyClients: 100,
    teamMembers: 25,
    yearsExperience: 5,
  },
  clients: [
    {
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop',
      website: 'https://techcorp.com'
    },
    {
      name: 'InnovateX',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://innovatex.com'
    },
    {
      name: 'GlobalTech',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://globaltech.com'
    },
    {
      name: 'FutureSystems',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://futuresystems.com'
    },
    {
      name: 'SmartSolutions',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://smartsolutions.com'
    },
    {
      name: 'DataDynamics',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://datadynamics.com'
    },
    {
      name: 'CloudNine',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://cloudnine.com'
    },
    {
      name: 'DigitalWave',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://digitalwave.com'
    },
    {
      name: 'TechVision',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://techvision.com'
    },
    {
      name: 'InnovateHub',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://innovatehub.com'
    },
    {
      name: 'SmartTech',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://smarttech.com'
    },
    {
      name: 'FutureTech',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://futuretech.com'
    },
    {
      name: 'DataFlow',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://dataflow.com'
    },
    {
      name: 'CloudTech',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://cloudtech.com'
    },
    {
      name: 'DigitalEdge',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://digitaledge.com'
    },
    {
      name: 'TechMatrix',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://techmatrix.com'
    },
    {
      name: 'InnovatePro',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://innovatepro.com'
    },
    {
      name: 'SmartSystems',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://smartsystems.com'
    },
    {
      name: 'FutureWave',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://futurewave.com'
    },
    {
      name: 'DataTech',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://datatech.com'
    },
    {
      name: 'CloudMatrix',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://cloudmatrix.com'
    },
    {
      name: 'DigitalPro',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://digitalpro.com'
    },
    {
      name: 'TechWave',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
      website: 'https://techwave.com'
    },
    {
      name: 'InnovateTech',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop',
      website: 'https://innovatetech.com'
    },
    {
      name: 'SmartMatrix',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
      website: 'https://smartmatrix.com'
    }
  ]
}; 