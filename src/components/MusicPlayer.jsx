import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create a dummy audio source since no specific mp3 is provided yet.
    // In a real scenario, you'd place your romantic track in the public folder and link it here.
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {isPlaying && (
        <span className="text-sm text-romantic-red italic hidden md:inline-block">Playing romantic tune...</span>
      )}
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-romantic-red hover:bg-romantic-rose hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-romantic-pink"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
