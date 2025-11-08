export default function JoinSection() {
  const steps = [
    "Take the first step",
    "Integrated Wellness Programs",
    "Sustainable Living",
    "Exclusive Experiences",
    "Global Community",
  ];

  return (
    <section className="py-24 px-6 bg-linear-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
          Join ELEMENTIS Club
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Picture a place where you can experience a life of wellness, sustainability, and meaningful connections.
          Be part of a global community that honors life, connection, and the limitless potential within us all.
        </p>

        <div className="grid md:grid-cols-5 gap-8 mt-20">
          {steps.map((title, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-bold text-white/20 mb-4">
                0{i + 1}.
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}