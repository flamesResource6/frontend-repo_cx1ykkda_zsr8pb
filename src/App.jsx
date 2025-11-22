import Hero from './components/Hero';
import Features from './components/Features';
import Insights from './components/Insights';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Features />
      <Insights />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Aegis Health — Unified Healthcare Data Platform</div>
      </footer>
    </div>
  );
}

export default App;
