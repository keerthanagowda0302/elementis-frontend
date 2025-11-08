'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Trees, Wind, Sparkles, Globe, Heart, Sun, Droplets } from 'lucide-react';

const ecoValues = [
  { icon: Leaf, label: 'Pure Natural', color: 'text-emerald-400' },
  { icon: Trees, label: 'Sustainable', color: 'text-lime-400' },
  { icon: Wind, label: 'Eco-Conscious', color: 'text-teal-400' },
  { icon: Sparkles, label: 'Innovative', color: 'text-cyan-400' },
  { icon: Globe, label: 'Global Impact', color: 'text-emerald-300' },
  { icon: Heart, label: 'Wellness', color: 'text-green-400' },
  { icon: Sun, label: 'Solar Powered', color: 'text-amber-400' },
  { icon: Droplets, label: 'Climate Safe', color: 'text-cyan-300' },
];

export default function Footer() {
  const [hovered, setHovered] = useState(null);
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8]);

  // Floating orbs
  const orbs = [
    { size: 'w-64 h-64', color: 'bg-emerald-500/5', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-teal-500/5', delay: 2 },
    { size: 'w-80 h-80', color: 'bg-lime-500/5', delay: 4 },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-24 bg-black text-white overflow-hidden"
      style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
    >
      {/* Animated Gradient Orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.size} ${orb.color}`}
          initial={{ x: i % 2 === 0 ? -300 : 300, y: 200 }}
          animate={{ x: i % 2 === 0 ? 300 : -300, y: -200 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Parallax Background Texture */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 opacity-20"
      >
        <div className="w-full h-full bg-gradient-to-t from-emerald-950 via-transparent to-lime-950" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Main Title – Word-by-word */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-thin mb-8 tracking-widest"
        >
          {'ELEMENTIS'.split('').map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className="inline-block bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-400 bg-clip-text text-transparent"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
        >
          A lifestyle revolution for a <span className="text-emerald-400 font-medium">sustainable</span>,{' '}
          <span className="text-lime-400 font-medium">fulfilling</span> future.
        </motion.p>

        {/* ECO VALUES GRID – Interactive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {ecoValues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ rotate: hovered === i ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className={`${item.color}`}
                >
                  <item.icon className="w-10 h-10" />
                </motion.div>
                <p className="text-sm font-medium tracking-wider text-white/90">
                  {item.label}
                </p>
              </div>
              {hovered === i && (
                <motion.div
                  layoutId="hoverGlow"
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-lime-500/20 rounded-2xl -z-10 blur-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA – Membership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <p className="text-lg text-white/80 mb-4">
            Become a member of <span className="text-emerald-400 font-semibold">ELEMENTIS Club</span>
          </p>
          <p className="text-sm text-white/60">
            Take the first step toward purpose, wellness, and connection.
          </p>
        </motion.div>

        {/* Copyright + Legal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/40 text-xs tracking-widest">
          <p>© 2025 ELEMENTIS. ALL RIGHTS RESERVED.</p>
          <div className="hidden md:block w-px h-4 bg-white/20" />
          <p>INNOVATION • SUSTAINABILITY • LUXURY</p>
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="px-6 py-3 bg-emerald-500/10 border border-emerald-400/30 rounded-full backdrop-blur-md flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <p className="text-emerald-400 text-xs font-bold tracking-widest">
              BUILT FOR ETERNITY
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}