const tiers = [
  {
    name: 'Creator',
    price: '$19',
    tagline: 'Solo makers and side hustles',
    features: ['3 social profiles', '30 scheduled posts / mo', 'AI captions & image edits', 'Basic analytics'],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Studio',
    price: '$49',
    tagline: 'Freelancers and small teams',
    features: ['10 social profiles', 'Unlimited scheduling', 'AI ad video creator', 'Competitor tracking'],
    cta: 'Try 14 days free',
    highlighted: true,
  },
  {
    name: 'Agency',
    price: '$129',
    tagline: 'Agencies and brands',
    features: ['Unlimited clients', 'Approval workflows', 'Market research suite', 'Priority support'],
    cta: 'Book a demo',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(135,206,250,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you grow.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-slate-900 shadow-[0_10px_40px_rgba(2,6,23,0.08)]' : 'border-slate-200'} bg-white p-6`}>
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-slate-900 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-900">Popular</div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t.name}</h3>
                  <p className="text-sm text-slate-600">{t.tagline}</p>
                </div>
                <div className="text-3xl font-black text-slate-900">{t.price}<span className="text-sm font-semibold text-slate-500">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 block rounded-md px-4 py-2 text-center font-semibold ${t.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-900 hover:bg-slate-50'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
