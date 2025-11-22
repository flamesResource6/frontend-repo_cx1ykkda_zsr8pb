function CTA() {
  return (
    <section id="cta" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_20%,rgba(2,132,199,0.15),transparent)]" />
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">See your data united in weeks, not months</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Start with a guided pilot. We connect your core sources, configure governance, and light up the first set of analytics.
        </p>
        <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Work email"
            className="flex-1 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
          <button type="submit" className="rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/10">
            Request Demo
          </button>
        </form>
        <div className="mt-4 text-xs text-slate-400">We respect your privacy. No spam.</div>
      </div>
    </section>
  );
}

export default CTA;
