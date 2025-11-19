export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
          <div className="relative">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">Ready to glow up your socials?</h3>
            <p className="mt-2 text-slate-600">Try the full suite free for 14 days. No credit card required.</p>
            <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="you@brand.co" className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-900" />
              <button className="rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800">Get started</button>
            </form>
            <p className="mt-2 text-xs text-slate-500">By signing up, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
