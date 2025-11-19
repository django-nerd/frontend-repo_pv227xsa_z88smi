import { Sparkles, Rocket, Image as ImageIcon, Film, BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/5 text-slate-900">
      <Icon size={20} />
    </div>
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {badge && (
        <span className="rounded-full border border-fuchsia-300 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-700">{badge}</span>
      )}
    </div>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
  </div>
);

export default function Features() {
  const items = [
    { icon: Rocket, title: 'Post everywhere', desc: 'One composer. Publish to Instagram, TikTok, X, LinkedIn, YouTube, Facebook, Threads, Mastodon and Bluesky.' },
    { icon: ImageIcon, title: 'AI image editor', badge: 'NEW', desc: 'Retro filters, background removal, brand color matching and caption suggestions.' },
    { icon: Film, title: 'Ad video creator', desc: 'Turn scripts or links into punchy vertical ads with auto cuts, captions and music.' },
    { icon: BarChart3, title: 'Competitor analytics', desc: 'Track rivals, content velocity, best post times and trending sounds.' },
    { icon: Globe2, title: 'Market research', desc: 'Audience keywords, hashtag clusters, and category benchmarks.' },
    { icon: ShieldCheck, title: 'Approval workflows', desc: 'Plan, draft and approve with roles and version history.' },
    { icon: Zap, title: 'Automations', desc: 'Auto repost winners and recycle evergreen posts.' },
    { icon: Sparkles, title: 'AI copilot', desc: 'Ideas, hooks, and captions trained on your top content.' },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(255,182,193,0.25),transparent),radial-gradient(800px_circle_at_80%_0%,rgba(135,206,250,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Everything to run your socials</h2>
          <p className="mt-3 text-slate-600">A playful, retro vibe with serious power under the hood.</p>
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
