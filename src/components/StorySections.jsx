import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="min-h-[70vh] flex flex-col justify-center max-w-3xl mx-auto px-6 py-20 text-center"
    >
      {title && (
        <h2 className="text-3xl md:text-5xl font-serif text-romantic-red mb-8">
          {title}
        </h2>
      )}
      <div className="text-lg md:text-xl text-gray-700 font-light leading-relaxed space-y-6">
        {children}
      </div>
    </motion.div>
  );
};

const StorySections = () => {
  return (
    <div className="relative z-10 w-full bg-white/40 backdrop-blur-sm">
      <Section title="Why You Feel Different">
        <p>
          It’s hard to put into words, but from the moment we started talking, something shifted.
          Talking to you feels like coming home. It's the way you listen, the way you think, and the effortless way you make me smile.
        </p>
      </Section>

      <Section title="Beyond Just Talking">
        <p>
          I know we are still figuring things out taking our time to understand each other's worlds.
          But even in this quiet beginning, my feelings for you are profound, steady, and undeniably serious.
        </p>
      </Section>

      <Section title="You Are The One">
        <p>
          You aren't just an option or a fleeting thought. You are the one who constantly lingers in my mind.
          The one who makes the future look brighter and the present feel incredibly warm.
        </p>
      </Section>

      <Section title="The Only One">
        <p>
          My eyes aren't looking anywhere else, and my heart has stopped searching.
          It has found exactly where it belongs, and who it wants to be with.
        </p>
      </Section>

      <Section title="The Last One I Want to Fight For">
        <p>
          If love is about trying, then I want to try with you.
          If love is about staying, then I want to stay for you.
          I want you to be the last person I ever fight for.
        </p>
      </Section>
    </div>
  );
};

export default StorySections;
