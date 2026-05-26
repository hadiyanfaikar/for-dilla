import React, { useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import StorySections from './components/StorySections';
import FinalMessage from './components/FinalMessage';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const finalMessageRef = useRef(null);

  const scrollToMessage = () => {
    finalMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-romantic-rose selection:text-white font-sans">
      <ParticleBackground />
      <MusicPlayer />
      
      <main className="relative z-10">
        <Hero onScrollToMessage={scrollToMessage} />
        <StorySections />
        <FinalMessage ref={finalMessageRef} />
      </main>
    </div>
  );
}

export default App;
