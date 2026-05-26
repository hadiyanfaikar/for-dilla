import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ onScrollToMessage }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-serif text-romantic-red mb-6 drop-shadow-sm">
          She's The One
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light mb-12 italic">
          The Only One I Want to Fight For
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <button
          onClick={onScrollToMessage}
          className="group flex flex-col items-center gap-2 text-romantic-rose hover:text-romantic-red transition-colors duration-300 focus:outline-none"
        >
          <span className="text-sm uppercase tracking-widest">Read My Heart</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
