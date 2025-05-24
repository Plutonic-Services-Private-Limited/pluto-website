export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  slug: string;
  liveUrl?: string;
  link?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  details?: {
    client: string;
    duration: string;
    challenge: string;
    solution: string;
    results: string[];
    githubUrl?: string;
    gallery: string[];
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  features: string[];
  technologies: string[];
}

export interface Company {
  name: string;
  description: string;
  mission: string;
  vision: string;
  founded: number;
  location: string;
  email: string;
  phone: string;
}

export interface SiteContent {
  company: Company;
  services: Service[];
  projects: Project[];
  blog: BlogPost[];
} 