import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import VikImage from './Vik_Image.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-slate-900 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-green-400 rounded-lg p-6 relative">
              <ImageWithFallback
                src={VikImage}
                alt="Vikram Roy - Full Stack Developer"
                className="w-full h-80 object-fit:scale-down rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Vikram Roy, Who? <span className="text-green-400">A Full-Stack Developer</span>
              </h3>
              <p className="text-slate-700 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I specialize in creating scalable applications using React, Node.js, Python, 
                and various databases. My journey involves crafting seamless user experiences 
                and robust backend solutions that drive business success.
              </p>
            </div>
{/* 
            <div className="flex flex-wrap gap-3">
              {['PYTHON', 'JAVASCRIPT', 'REACT', 'NODE.JS' , 'MONGO DB'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Badge className="bg-yellow-400 text-slate-900 px-3 py-1">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {/* <Button 
                className="bg-green-400 text-slate-900 hover:bg-green-500 px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                MORE
              </Button>
                &nbsp;
                 &nbsp; */}
              <Button 
                className="bg-green-400 text-slate-900 hover:bg-green-500 px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <a href= "#">
                DOWNLOAD CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}