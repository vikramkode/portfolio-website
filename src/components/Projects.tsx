import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import portfolioVikram from './portfolio-vikram.jpg';
import park from './parkinsons.png';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.',
    image: portfolioVikram,
    technologies: ['React', 'Tailwind', 'Motion'],
    url: 'https://portfolio.dev'
  },
  {
    id: 2,
    title: 'Parkinson’s Disease Prediction',
    description: 'This project uses a Random Forest model with top 30 voice-derived features and Mutual Information selection, deployed via a Streamlit web app for accurate, real-time Parkinson’s Disease prediction',
    image: park,
    technologies: ['Python', 'NumPy', 'Pandas', 'Streamlit'],
    url: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcHJvamVjdCUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NTY5OTMwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Python', 'PostgreSQL'],
    url: '#'
  }
];

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-slate-900 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Slider */}
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 mx-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <Badge key={tech} className="bg-yellow-400 text-slate-900">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-green-400 text-slate-900 hover:bg-green-500 px-8 py-2 rounded-full transition-all duration-300"
                  >
                    VIEW PROJECT
                  </Button>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-yellow-400 rounded-lg p-4 transform rotate-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      {/* <div className="flex-1 bg-white rounded mx-4 px-2 py-1 text-sm text-gray-600">
                        {projects[currentProject].url}
                      </div> */}
                    </div>
                    <ImageWithFallback
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-slate-900' : 'bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}