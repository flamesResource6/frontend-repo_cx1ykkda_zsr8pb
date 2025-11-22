import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients & overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_10%,rgba(34,197,94,0.12),transparent)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_10%,rgba(59,130,246,0.18),transparent)]"></div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow-lg shadow-emerald-500/20 ring-1 ring-white/10" />
            <span className="text-lg font-semibold tracking-tight text-white">Aegis Health</span>
          </div>
          <div className="hidden gap-8 md:flex">
            <a className="text-slate-300 hover:text-white transition" href="#features">Features</a>
            <a className="text-slate-300 hover:text-white transition" href="#insights">Insights</a>
            <a className="text-slate-300 hover:text-white transition" href="#security">Security</a>
            <a className="text-slate-300 hover:text-white transition" href="#cta">Get Started</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/10">Request Demo</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> HIPAA-ready platform
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Unified Healthcare Data & Insights
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Connect EHR, claims, wearable, and operational data into a single source of truth. Real-time analytics,
              governed access, and AI-assisted insights built for providers, payers, and life sciences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/10">
                Launch Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10">
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-300/80">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> SOC 2 Type II</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> HITRUST-aligned</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400" /> FHIR APIs</div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
