import { motion } from 'motion/react';
import { Badge } from './ui/badge';

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/20" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.p 
            className="text-green-400 text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'am Vikram Roy
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FULL-STACK
            <br />
            <span className="text-green-400">DEVELOPER</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-32 right-8 md:right-32"
          >
            <Badge className="bg-green-400 text-slate-900 rotate-12 text-sm px-3 py-1">
              AVAILABLE
              <br />
              FOR WORK
            </Badge>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Bar with Enhanced Marquee Effect */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 bg-yellow-400 py-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="marquee-wrapper relative w-full overflow-hidden">
            <div className="marquee flex items-center text-slate-900 font-bold whitespace-nowrap" style={{gap: '4rem'}}>
              {Array(2).fill(null).map((_, repeatIdx) => (
                ['HTML', 'CSS', 'JAVA', 'REACT JS', 'PYTHON'].map((tech, index) => (
                  <span
                    key={tech + repeatIdx + index}
                    className="text-sm md:text-base flex items-center px-8"
                  >
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-2" />
                    {tech}
                  </span>
                ))
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .marquee-wrapper {
            width: 100vw;
            overflow: hidden;
            position: relative;
          }
          .marquee {
            display: flex;
            gap: 4rem;
            min-width: max-content;
            animation: marquee 16s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </motion.div>
    </section>
  );
}