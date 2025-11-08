'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Leaf, Recycle, Trees, Sparkles, Wind } from 'lucide-react';

// IMPORT IMAGES
import point1 from '../assets/point.jpeg';
import point2 from '../assets/point-6.jpeg';
import point3 from '../assets/point-8.jpeg';

const images = [point1, point2, point3];
const captions = [
  "Glue-laminated timber, born from the forest, returns to it.",
  "Low-E glass reflects heat, not the planet's future.",
  "Solar climate systems: 30% energy, 100% harmony.",
];

export default function Sustainability() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const smoothY = useSpring(y, { stiffness: 80, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Floating particles
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-zinc-950 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ANIMATED BACKGROUND IMAGE – Parallax + Fade */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: smoothY }}
      >
        <motion.img
          key={index}
          src={images[index]}
          alt="Sustainable Retreat"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
      </motion.div>

      {/* FLOATING PARTICLES */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
          initial={{ x: `${p.x}vw`, y: '100vh' }}
          animate={{ y: '-10vh' }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
          style={{ x: `${Math.sin(Date.now() * 0.001 + p.id) * 30}px` }}
        />
      ))}

      {/* FLOATING ICONS – 3D Parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-20%', '20%']) }}
        className="absolute top-20 left-12 text-emerald-400"
      >
        <Trees className="w-24 h-24 drop-shadow-2xl" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['10%', '-25%']) }}
        className="absolute top-20 right-12 text-lime-400"
      >
        <Recycle className="w-24 h-24 drop-shadow-2xl animate-spin-slow" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['-30%', '15%']) }}
        className="absolute bottom-32 left-20 text-emerald-300"
      >
        <Leaf className="w-28 h-28 drop-shadow-2xl" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Title – Word-by-word + Gradient */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-thin mb-10 tracking-widest"
        >
          {'Sustainable Retreat'.split(' ').map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              className="inline-block mr-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
          <span className="text-white/60"> • </span>
          {'Sustainable Retreat'.split(' ').map((word, i) => (
            <motion.span
              key={`dup-${word}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.9 }}
              className="inline-block mr-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8"
        >
          At our Resorts and Residences, we believe in fostering a{' '}
          <motion.span
            className="text-emerald-400 font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring' }}
          >
            sense of partnership
          </motion.span>
          , building a thriving ecosystem, nurturing a strong Community, and prioritizing the health of the planet.
        </motion.p>

        {/* Vision Statement + Animated Underline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          We envision a world where mind, body, and spirit thrive in harmony, fostering connections to each other and the natural world,{' '}
          <motion.span
            className="inline-block"
            initial={{ backgroundSize: '0% 3px' }}
            whileInView={{ backgroundSize: '100% 3px' }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
            style={{
              background: 'linear-gradient(to right, #34d399, #a3e635)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
            }}
          >
            redefining the concept of fulfillment beyond material success
          </motion.span>.
        </motion.p>

        {/* Caption for Current Image */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-emerald-300/80 italic max-w-3xl mx-auto mb-16"
        >
          {captions[index]}
        </motion.p>

        {/* INTERACTIVE DOTS – With Magnetic Hover */}
        <div className="flex justify-center gap-4 mt-16">
          {images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              className="relative"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => document.body.style.cursor = 'pointer'}
              onMouseLeave={() => document.body.style.cursor = 'default'}
            >
              <motion.div
                className={`
                  w-3 h-3 rounded-full transition-all duration-500
                  ${i === index 
                    ? 'bg-emerald-400 shadow-lg shadow-emerald-400/60' 
                    : 'bg-white/30'
                  }
                `}
                animate={{
                  width: i === index ? 40 : 12,
                  height: 12,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              {i === index && (
                <motion.div
                  layoutId="activeDotGlow"
                  className="absolute inset-0 bg-emerald-400/40 rounded-full blur-xl -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Eco Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-20"
        >
          <div className="px-8 py-4 bg-emerald-500/10 border border-emerald-400/40 rounded-full backdrop-blur-xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <p className="text-emerald-400 text-sm font-semibold tracking-widest">
              BUILT FOR ETERNITY • POWERED BY NATURE
            </p>
            <Wind className="w-5 h-5 text-lime-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}