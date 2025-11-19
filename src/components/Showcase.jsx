import { Facebook, Instagram, Twitch, Youtube, Linkedin, Twitter, Music2, MessageCircle } from 'lucide-react';

const icons = [Facebook, Instagram, Twitter, Linkedin, Youtube, Twitch, Music2, MessageCircle];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Post across every platform</h2>
          <p className="mt-3 text-slate-300/80">Choose once, adapt everywhere. Our composer auto-resizes, times and tags for each network.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {icons.map((I, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-slate-200/90">
              <I className="mx-auto mb-3" />
              <span className="text-sm">{I.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
