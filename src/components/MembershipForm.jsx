'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Trees, Sun, Wind, Sparkles } from 'lucide-react';
import pointImage from '../assets/point.jpeg';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Fixed: Removed TypeScript syntax
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Thank you! Your journey with ELEMENTIS begins...');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 800);
  };

  const inputClasses = `
    w-full px-6 py-4 bg-white/5 backdrop-blur-xl border 
    border-white/10 rounded-2xl text-white 
    placeholder-white/40 focus:outline-none 
    focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
    transition-all duration-300 resize-none
    shadow-inner shadow-black/20
  `;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-emerald-950/20 py-24 md:py-32">
      {/* Animated Background Layers */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 text-emerald-500/20">
          <Trees className="w-32 h-32" />
        </div>
        <div className="absolute bottom-32 right-32 text-amber-500/20">
          <Sun className="w-40 h-40" />
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/50 rounded-full"
          initial={{ 
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
            y: -10 
          }}
          animate={{ 
            y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000 
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT – Imported Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={pointImage}
                alt="ELEMENTIS — Harmony with Nature"
                className="w-full h-auto object-cover"
              />

              {/* Glass Overlay + Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <Leaf className="w-6 h-6 text-emerald-400" />
                  <p className="text-sm font-medium tracking-wider">
                    SUSTAINABLE LUXURY LIVING
                  </p>
                </motion.div>
                <p className="text-xs text-white/70 mt-1">
                  Glue-laminated timber • Low-E glass • Solar climate control
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-thin text-white tracking-tight mb-6">
                <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Take the First Step
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-lg leading-relaxed">
                Become a member of{' '}
                <span className="text-emerald-400 font-medium">ELEMENTIS Club</span> and step into a life of{' '}
                <span className="italic">purpose</span>, <span className="italic">wellness</span>, and{' '}
                <span className="italic">deep connection</span> with nature.
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="mt-10 p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                >
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-5 h-5 text-emerald-500 bg-white/10 border-white/20 rounded focus:ring-emerald-400"
                  />
                  <label htmlFor="consent" className="text-white/80 text-sm cursor-pointer">
                    I would like to receive information on{' '}
                    <span className="text-emerald-400 font-medium">ELEMENTIS</span>.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative w-full overflow-hidden rounded-2xl
                    bg-gradient-to-r from-emerald-500 to-teal-600
                    text-black font-semibold text-lg py-5
                    transition-all duration-300
                    ${isSubmitted ? 'opacity-80' : 'hover:shadow-2xl hover:shadow-emerald-500/50'}
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitted ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-pulse" />
                        Awakening Your Journey...
                      </>
                    ) : (
                      <>
                        <Wind className="w-5 h-5" />
                        BECOME A MEMBER
                      </>
                    )}
                  </span>
                  {isSubmitted && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ scale: 0, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.2 }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-white/50 text-sm italic text-center lg:text-left"
            >
              Powered by sustainable innovation in tropical architecture.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}