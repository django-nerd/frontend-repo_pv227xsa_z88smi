import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-[6px] bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-500 shadow" />
            <span className="text-lg font-black tracking-tight text-slate-900">
              RetroSocial
            </span>
            <span className="ml-2 hidden rounded border border-emerald-500/30 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 md:inline-block">
              BETA
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#showcase" className="hover:text-slate-900">Platforms</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <a href="#cta" className="rounded-md bg-slate-900 px-4 py-2 text-white font-semibold shadow hover:bg-slate-800 transition">Get Started</a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 text-slate-800">
            <div className="grid gap-3">
              <a href="#features" className="hover:text-slate-900">Features</a>
              <a href="#showcase" className="hover:text-slate-900">Platforms</a>
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#faq" className="hover:text-slate-900">FAQ</a>
              <a href="#cta" className="mt-2 rounded-md bg-slate-900 px-4 py-2 text-white font-semibold">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
