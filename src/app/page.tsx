'use client';

import { Header, Stack, Projects, Footer, Experience, Contact, Navbar, Education } from '@/components';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-200 select-none pb-24">
      <main className="max-w-2xl mx-auto px-4">
        <Navbar />

        <Header />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} id="experience" className="scroll-mt-24">
            <Experience />
          </motion.div>

          <motion.div variants={item} id="education" className="scroll-mt-24">
            <Education />
          </motion.div>

          <motion.div variants={item} id="stack" className="scroll-mt-24">
            <Stack />
          </motion.div>

          <motion.div variants={item} id="projects" className="scroll-mt-24">
            <Projects />
          </motion.div>

          <motion.div variants={item} id="contact" className="scroll-mt-24">
            <Contact />
          </motion.div>
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
