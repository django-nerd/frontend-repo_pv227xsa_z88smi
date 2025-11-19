import { Sparkles, Rocket, Image as ImageIcon, Film, BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-emerald-400/40">
    <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]" />
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
      <Icon size={20} />
    </div>
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {badge && (
        <span className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300">{badge}</span>
      )}
    </div>
    <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
  </div>
);

export default function Features() {
  const items = [
    { icon: Rocket, title: 'Post everywhere', desc: 'One composer. Publish to Instagram, TikTok, X, LinkedIn, YouTube, Facebook and more — automatically resized and optimized.' },
    { icon: ImageIcon, title: 'AI image editor', badge: 'NEW', desc: 'Retro-glow filters, smart background removal, brand color matching and caption suggestions.' },
    { icon: Film, title: 'Ad video creator', desc: 'Turn scripts or product links into punchy, vertical ads in minutes with auto cuts, captions and music.' },
    { icon: BarChart3, title: 'Competitor analytics', desc: 'Track rivals, content velocity, best post times and trending sounds across platforms.' },
    { icon: Globe2, title: 'Market research', desc: 'Audience keywords, hashtag clusters, and category benchmarks tailored to your niche.' },
    { icon: ShieldCheck, title: 'Approval workflows', desc: 'Plan, draft and approve with clients and teammates, with roles and version history.' },
    { icon: Zap, title: 'Automations', desc: 'Auto repost winners, recycle evergreen posts, and queue by goal.' },
    { icon: Sparkles, title: 'AI copilot', desc: 'Ideas, hooks, and captions trained on your top performing content.' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.08),transparent),radial-gradient(800px_circle_at_80%_0%,rgba(168,85,247,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Everything to run your socials</h2>
          <p className="mt-3 text-slate-300/80">A neon toolkit for modern teams. Fast, fun and surprisingly powerful.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
