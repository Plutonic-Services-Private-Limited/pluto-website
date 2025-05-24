'use client';

import { useState } from 'react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  slug?: string;
  liveUrl?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  link?: string;
  details?: {
    client: string;
    duration: string;
    challenge: string;
    solution: string;
    results: string[];
    githubUrl: string;
    gallery: string[];
  };
}

interface ProjectFiltersProps {
  projects: Project[];
}

export default function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique categories for filtering
  const categories = ['all', ...new Set(
    projects.flatMap(project => 
      project.category.split(',').map(cat => cat.trim().toLowerCase())
    )
  )];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
} 