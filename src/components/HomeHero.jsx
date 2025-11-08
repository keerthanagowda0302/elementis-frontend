import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Import images
import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Hero3 from '../assets/hero3.jpeg';

const images = [Hero1, Hero2, Hero3];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10_000); // 30 seconds
    return () => clearInterval(timer);
  }, []);

  // Parallax
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* ---------- IMAGE SLIDESHOW ---------- */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Mute button (decorative) */}
      {/* <button className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full p-4 transition">
        <svg className="w-6 h-6 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
        </svg>
      </button> */}

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ scale: 0.85, opacity: 0 }}
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

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
