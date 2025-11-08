import { Play } from 'lucide-react';

export default function PodcastSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            ELEMENTIS Way
          </h2>
          <h3 className="text-2xl font-medium mb-6 text-emerald-400">
            Podcast
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            "A journey towards well-being, touching on various topics such as mental health, physical fitness, holistic healing, mindfulness, nutrition, and more.
            Our podcast aims to introduce these concepts and themes to the public, by interviewing experts on each topic, we will navigate the areas that make ELEMENTIS this unique place."
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500 rounded-full p-4 cursor-pointer hover:bg-emerald-400 transition-colors">
              <Play className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="font-medium">Pipe Valdes</p>
              <p className="text-sm text-white/60">
                podcast host of ELEMENTIS Way
              </p>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-br from-emerald-900/20 to-teal-900/20 border border-white/10 rounded-3xl aspect-square flex items-center justify-center">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 mx-auto mb-6" />
            <p className="text-white/60">Podcast Artwork</p>
          </div>
        </div>
      </div>
    </section>
  );
}