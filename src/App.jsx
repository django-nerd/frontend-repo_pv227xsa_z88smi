import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Retro pastel background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-20%_-20%,rgba(255,182,193,0.25),transparent),radial-gradient(900px_500px_at_120%_-10%,rgba(135,206,250,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_94%,rgba(0,0,0,0.04)_95%),linear-gradient(90deg,transparent_0,transparent_94%,rgba(0,0,0,0.04)_95%)] bg-[length:24px_24px]" />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />

        <footer className="border-t border-slate-200 bg-white/70 py-10 text-center text-sm text-slate-500 backdrop-blur">
          © {new Date().getFullYear()} RetroSocial — Built for creators and teams.
        </footer>
      </div>
    </div>
  )
}

export default App
