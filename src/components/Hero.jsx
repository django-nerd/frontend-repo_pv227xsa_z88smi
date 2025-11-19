import Spline from '@splinetool/react-spline';
import InteractiveDecor from './InteractiveDecor';
import PlatformsRibbon from './PlatformsRibbon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-white/60">
      {/* Spline background */}
      <div className="absolute inset-0 opacity-90 [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Now with AI Image Editing + Ad Video Creator
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
              A retro-future way to run your socials
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-700 sm:text-xl">
              Schedule once, post everywhere. Craft AI‑polished visuals, generate catchy ad videos, and track competitors — fast and fun.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#cta" className="rounded-md bg-slate-900 px-6 py-3 text-center font-semibold text-white shadow hover:bg-slate-800 transition">Start free trial</a>
              <a href="#features" className="rounded-md border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-900 hover:bg-slate-50 transition">See features</a>
            </div>

            <PlatformsRibbon />
          </div>
        </div>

        <InteractiveDecor />
      </div>
    </section>
  );
}
