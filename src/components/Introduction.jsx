import point6 from '../assets/hero1.png';

export default function Introduction() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Introduction
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Welcome to a world of luxury and well-being with <strong>ELEMENTIS</strong>, where you will discover exquisite luxury health and wellness resorts and residences nestled in the most breathtaking destinations on the globe.
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            At ELEMENTIS, we use the <span className="text-emerald-400 font-medium">Integrative Wellness</span> approach, that considers psychological, physical, and nutritional aspects of your life to improve overall well-being and balance.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative">
          <img
            src={point6}
            alt="ELEMENTIS Introduction"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
