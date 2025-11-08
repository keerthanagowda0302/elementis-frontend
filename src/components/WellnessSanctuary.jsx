'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplets, Flower2 } from 'lucide-react';

import spa1 from '../assets/hero3.png';
import spa2 from '../assets/spa-2.jpeg';
import spa3 from '../assets/spa-3.jpeg';

const images = [spa1, spa2, spa3]; // Use imported images

export default function WellnessSanctuary() {
  const [active, setActive] = useState(0);

  // Parallax for floating icons
  const { scrollYProgress } = useScroll();
  const yLeaf = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const yWater = useTransform(scrollYProgress, [0, 1], ['10%', '-15%']);
  const yLotus = useTransform(scrollYProgress, [0, 1], ['-15%', '5%']);

  // Staggered card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white">
      {/* Subtle animated border */}
      <div className="absolute inset-0 border-t border-b border-emerald-500/20 animate-pulse" />

      {/* FLOATING ICONS */}
      <motion.div style={{ y: yLeaf }} className="absolute top-20 left-10 text-emerald-400 opacity-60">
        <Leaf className="w-16 h-16 drop-shadow-lg" />
      </motion.div>
      <motion.div style={{ y: yWater }} className="absolute top-32 right-12 text-cyan-400 opacity-50">
        <Droplets className="w-14 h-14 drop-shadow-md" />
      </motion.div>
      <motion.div style={{ y: yLotus }} className="absolute bottom-32 left-20 text-pink-300 opacity-50">
        <Flower2 className="w-20 h-20 drop-shadow-lg" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title – word-by-word */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light mb-8"
        >
          {'Wellness Sanctuary'.split(' ').map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl font-light text-emerald-400 mb-12"
        >
          Personalized wellness, innovation, and nature meet in synergy
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-lg md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-16"
        >
          At ELEMENTIS, we use the{' '}
          <motion.span
            initial={{ backgroundSize: '0%' }}
            whileInView={{ backgroundSize: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-no-repeat bg-left-bottom"
            style={{ backgroundSize: '0% 2px', backgroundPosition: '0 100%' }}
          >
            Integrative Wellness
          </motion.span>{' '}
          approach that considers psychological, physical, and nutritional aspects of your life to improve overall well-being and balance.
        </motion.p>

        {/* IMAGE GRID – Uses REAL imported images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateY: 4, rotateX: 2 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={src}
                alt={`Wellness Sanctuary ${i + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">
                  {['Serenity Spa', 'Healing Waters', 'Lotus Retreat'][i]}
                </p>
              </div>

              {active === i && (
                <motion.div
                  layoutId="activeCard"
                  className="absolute inset-0 border-4 border-emerald-400 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${i === active ? 'bg-emerald-400 w-8 shadow-lg shadow-emerald-400/50' : 'bg-white/40'}
              `}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}