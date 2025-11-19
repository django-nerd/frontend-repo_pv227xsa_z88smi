export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-emerald-500/10 via-fuchsia-500/10 to-violet-600/10 p-8 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_-10%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(600px_200px_at_110%_0%,rgba(168,85,247,0.15),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Ready to glow up your socials?</h3>
            <p className="mt-2 text-slate-300/80">Try the full suite free for 14 days. No credit card required.</p>
            <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="you@brand.co" className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-emerald-400/60" />
              <button className="rounded-md bg-emerald-400 px-6 py-3 font-semibold text-slate-900 hover:bg-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.35)]">Get started</button>
            </form>
            <p className="mt-2 text-xs text-slate-400">By signing up, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
