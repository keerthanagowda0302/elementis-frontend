export default function OverViewSection() {
  const items = [
    {
      num: "01",
      title: "Experience Integrated Wellness",
      desc: "As a member of ELEMENTIS Club, you’ll gain exclusive access to integrated wellness programs designed to nurture your body, mind, and soul. We promote longevity and vitality through personalized health plans and comprehensive therapies that promise to elevate your well-being.",
    },
    {
      num: "02",
      title: "Sustainable Accommodations",
      desc: "Step into a world of firsts - Neyra - a smart oasis crafted from sustainably sourced high-quality glue laminated timber, Low-E solar control glass, and innovative climate control system, where sound, light, and scent harmoniously blend to create the ultimate healthy environment.",
    },
    {
      num: "03",
      title: "Life-Changing Sanctuary",
      desc: "Designed with eco-consciousness in mind and powered by solar energy, and cooled by water, ELEMENTIS is an intelligent sanctuary that enhances your well-being naturally. Your personalized ring connects with your emotional energy, allowing your Neyra room and personal space to respond and nurture your state of mind.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
          ELEMENTIS Club - Overview
        </h2>
        <p className="text-center text-white/80 text-lg max-w-4xl mx-auto mb-20 leading-relaxed">
          We’re building a family of individuals from around the world who share a desire for a more fulfilling life. Here, you’ll connect with others who prioritize well-being, sustainable living, and the beauty of nature.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.num} className="group">
              <div className="text-8xl font-bold text-white/10 mb-6">
                {item.num}
              </div>
              <h3 className="text-2xl font-medium mb-4 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}