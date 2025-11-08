import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Volume2 } from 'lucide-react';

export default function HeroVideo() {
const videoRef = useRef<HTMLVideoElement>(null);  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        poster="https://elementis.co/assets/hero-poster.jpg"
      >
        <source src="https://elementis.co/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all rounded-full p-4"
      >
        <Volume2 className={`w-6 h-6 text-white ${isMuted ? 'opacity-50' : ''}`} />
      </button>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-light text-white tracking-widest mb-6">
          Community ― Elementis
        </h1>
        <p className="text-lg md:text-2xl text-white/90 font-light max-w-4xl leading-relaxed">
          A lifestyle revolution for a sustainable fulfilling future
        </p>
        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-10 h-10 text-white" />
        </div>
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}