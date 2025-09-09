import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vikramkode', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/royvikram/', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/vikramkode', icon: '🐦' },
    { name: 'Email', url: 'mailto:vikramroy5010@gmail.com', icon: '📧' }
  ];

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-green-400 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-2 bg-slate-800 hover:bg-green-400 hover:text-slate-900 px-6 py-3 rounded-full transition-all duration-300"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-green-400 text-slate-900 hover:bg-green-500 px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={handleOpenModal}
            >
              Get In Touch
            </Button>
            {/* contact form modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 overflow-auto"
          onClick={handleCloseModal}
        >
          <div
            style={{ background: '#fff', color: '#222' }}
            className="rounded-xl shadow-lg p-6 w-full max-w-sm relative border border-gray-200 my-8 max-h-[90vh] overflow-y-auto flex flex-col justify-center"
            onClick={e => e.stopPropagation()}
          >
            {/* <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 text-xl font-bold hover:text-green-500"
            >
              &times;
            </button> */}
            <h3 className="text-xl font-bold text-green-600 mb-4 text-center bg-green-100 rounded-t-xl py-2">Contact Form</h3>
            <form action="https://formsubmit.co/vikramroy5010@gmail.com" method="POST" className="space-y-4">
              <div>
                <label className="block text-gray-900 font-bold mb-1">Name</label>
                <input type="text" style={{ background: '#fff', color: '#222' }} className="w-full px-4 py-2 border border-gray-400 rounded" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-1">Email Address</label>
                <input type="email" style={{ background: '#fff', color: '#222' }} className="w-full px-4 py-2 border border-gray-400 rounded" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-1">Phone Number</label>
                <input type="tel" style={{ background: '#fff', color: '#222' }} className="w-full px-4 py-2 border border-gray-400 rounded" placeholder="Your Number" required />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-1">Message</label>
                <textarea style={{ background: '#fff', color: '#222' }} className="w-full px-4 py-2 border border-gray-400 rounded" rows={3} placeholder="Your Message" required />
              </div>
              <Button
                type="submit"
                style={{ background: '#22c55e', color: '#fff', fontWeight: 'bold' }}
                className="hover:bg-green-600 px-6 py-2 rounded-full w-full"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Designed and Developed by Vikram Roy</p>
        </motion.div>
      </div>
    </footer>
  );
}