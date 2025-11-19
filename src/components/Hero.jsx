import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Now with AI Image Editing + Ad Video Creator
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
              The retro-cool way to run your socials
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-200/90 sm:text-xl">
              Schedule once, post everywhere. Craft AI-polished visuals, generate catchy ad videos, and spy smart on competitors — all on one neon dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#cta" className="rounded-md bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-900 shadow-[0_0_40px_rgba(16,185,129,0.45)] hover:bg-emerald-300 transition">Start free trial</a>
              <a href="#features" className="rounded-md border border-white/20 bg-white/5 px-6 py-3 text-center font-semibold text-white hover:bg-white/10 transition">See features</a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950" />
      </div>
    </section>
  );
}
