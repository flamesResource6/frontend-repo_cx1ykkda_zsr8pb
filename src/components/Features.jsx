function Features() {
  const items = [
    {
      title: 'Interoperability Hub',
      desc: 'Seamless FHIR R4 ingestion, HL7 v2, EDI X12, and device streams with automated mapping and validation.',
      color: 'from-emerald-500 to-sky-500',
    },
    {
      title: 'Real-time Analytics',
      desc: 'Stream processing and cohorting to surface utilization, quality, and population health trends instantly.',
      color: 'from-sky-500 to-indigo-500',
    },
    {
      title: 'Governed Access',
      desc: 'Fine-grained permissions, PII/PHI masking, and full audit trails to meet HIPAA and SOC2 requirements.',
      color: 'from-indigo-500 to-fuchsia-500',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(16,185,129,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built for modern healthcare</h2>
          <p className="mt-3 text-slate-300">A secure, scalable foundation for providers, payers, and life sciences workflows.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${f.color} ring-1 ring-white/20 shadow-lg shadow-emerald-500/10`} />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
              <div className="mt-4 text-xs text-slate-400">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
