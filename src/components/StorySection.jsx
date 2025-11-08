'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import homepageImg from '../assets/homepagee-1jpg.jpeg';
import wellnessImg from '../assets/wellnessjpg.jpeg';

export default function StorySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [cursorVariant, setCursorVariant] = useState('default');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Custom cursor glow animation
  useAnimationFrame((t) => {
    const glow = document.getElementById('cursor-glow');
    if (glow && cursorVariant === 'hover') {
      glow.style.left = `${mouseX.get()}px`;
      glow.style.top = `${mouseY.get()}px`;
    }
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.3, duration: 1, ease: 'easeOut' },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black text-white overflow-hidden"
      onMouseMove={(e) => {
        const cards = document.querySelectorAll('.story-card');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      }}
    >
      {/* Background Gradient Orbs */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute top-20 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['10%', '-10%']) }}
        className="absolute bottom-20 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />

      {/* Custom Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-50"
        style={{ opacity: cursorVariant === 'hover' ? 1 : 0 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Title with Word-by-Word Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-thin text-center mb-16 tracking-tight"
        >
          {'ELEMENTIS Story'.split(' ').map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="inline-block mr-4 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-20 leading-relaxed font-light"
        >
          Our story is deeply rooted in fostering meaningful connections,
          providing genuine care, and upholding a strong commitment to our{' '}
          <span className="text-emerald-400 font-medium">Community</span>.
        </motion.p>

        {/* INTERACTIVE IMAGE GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            onMouseMove={handleMouseMove}
            className="story-card group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl"
            style={{
              transformStyle: 'preserve-3d',
              '--mouse-x': '50%',
              '--mouse-y': '50%',
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={homepageImg}
              alt="ELEMENTIS Story – Connection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Magnetic Glow */}
            <div
              className="absolute w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                left: 'var(--mouse-x)',
                top: 'var(--mouse-y)',
                transform: 'translate(-50%, -50%)',
              }}
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-2xl font-medium">Harmony in Design</p>
              <p className="text-sm text-white/70 mt-1">Sustainable luxury meets tropical elegance</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            onMouseMove={handleMouseMove}
            className="story-card group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl"
            style={{
              transformStyle: 'preserve-3d',
              '--mouse-x': '50%',
              '--mouse-y': '50%',
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={wellnessImg}
              alt="ELEMENTIS Story – Wellness"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div
              className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                left: 'var(--mouse-x)',
                top: 'var(--mouse-y)',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-2xl font-medium">Wellness Redefined</p>
              <p className="text-sm text-white/70 mt-1">Mind, body, and spirit in perfect balance</p>
            </div>
          </motion.div>
        </div>

        {/* Eco Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full backdrop-blur-md">
            <p className="text-emerald-400 text-sm font-medium tracking-wider">
              Crafted with Nature • Built for Eternity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}