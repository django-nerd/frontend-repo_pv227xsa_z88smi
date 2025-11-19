import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_-20%_-20%,rgba(59,130,246,0.12),transparent),radial-gradient(1000px_500px_at_120%_-10%,rgba(236,72,153,0.12),transparent)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />

        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} RetroSocial — Built for creators and teams.
        </footer>
      </div>
    </div>
  )
}

export default App
