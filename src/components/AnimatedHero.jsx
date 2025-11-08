import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ChevronDown } from 'lucide-react';
import HeroVideo from '../assets/videos/13570972_3840_2160_30fps.mp4';

export default function AnimatedHero() {
  // CORRECT: Typed ref
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && videoRef.current?.play().catch(() => {}),
      { threshold: 0.6 }
    );
    videoRef.current && observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={muted}
        playsInline
        autoPlay
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-light tracking-widest text-white mb-6"
        >
          ELEMENTIS
        </motion.h1>

        <motion.div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-2xl text-white/90 font-light">
          {['Wellness', 'Innovation', 'Nature', 'Community'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              {word} •{' '}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-lg md:text-2xl text-white/90 max-w-4xl leading-relaxed"
        >
          A lifestyle revolution for a sustainable fulfilling future
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16"
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </motion.div>

      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full p-4 transition"
      >
        <Volume2 className={`w-6 h-6 text-white ${muted ? 'opacity-50' : ''}`} />
      </button>
    </section>
  );
}