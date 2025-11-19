import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-[6px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 shadow-[0_0_30px_rgba(236,72,153,0.35)]" />
            <span className="text-lg font-black tracking-tight text-white">
              RetroSocial
            </span>
            <span className="ml-2 hidden rounded border border-emerald-400/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300/90 md:inline-block">
              BETA
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Platforms</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <a href="#cta" className="rounded-md bg-emerald-400 px-4 py-2 text-slate-900 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:bg-emerald-300 transition">Get Started</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-slate-200/90">
            <div className="grid gap-3">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#showcase" className="hover:text-white">Platforms</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#cta" className="mt-2 rounded-md bg-emerald-400 px-4 py-2 text-slate-900 font-semibold">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
