import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';


export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Technologies and tools for building beautiful, responsive user interfaces.',
      skills: [
        'React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Design', 'UI/UX Principles'
      ]
    },
    {
      title: 'Backend',
      description: 'Frameworks and languages for server-side development and APIs.',
      skills: [
        'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'RESTful APIs', 'GraphQL'
      ]
    },
    {
      title: 'Database',
      description: 'Databases and platforms for storing and managing data.',
      skills: [
        'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'
      ]
    }
  ];

  const [currentCategory, setCurrentCategory] = useState(0);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };
  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
  <section id="skills" className="py-20 " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-slate-900 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SKILLS
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevCategory}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextCategory}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Skill Category Slider */}
          <motion.div
            key={currentCategory}
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
                    {skillCategories[currentCategory].title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {skillCategories[currentCategory].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategories[currentCategory].skills.map((skill) => (
                    <Badge key={skill} className="bg-yellow-400 text-slate-900">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              {/* Optional: Add an illustration or icon here if desired */}
            </div>
          </motion.div>

          {/* Category Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCategory ? 'bg-slate-900' : 'bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}