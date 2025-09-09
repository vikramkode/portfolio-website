import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Navigation() {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'SKILLS' ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-green-400 font-bold text-xl"
          >
            Vikram Roy
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors duration-200 cursor-pointer"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.toLowerCase());
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              onClick={() => {
                const target = document.getElementById('contact');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              CONTACT
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}