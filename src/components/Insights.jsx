import { useEffect, useState } from 'react'

function Insights() {
  const [metrics, setMetrics] = useState([
    { label: 'EHR Feeds', value: '—', hint: '' },
    { label: 'Claims/day', value: '—', hint: '' },
    { label: 'Avg. Latency', value: '—', hint: '' },
    { label: 'AI Models', value: '—', hint: '' },
  ])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/metrics`)
        if (!res.ok) throw new Error('Failed to load metrics')
        const data = await res.json()
        if (data && Array.isArray(data.metrics)) {
          setMetrics(data.metrics)
        }
        setStatus('ok')
      } catch (e) {
        setStatus('error')
      }
    }
    fetchMetrics()
  }, [])

  return (
    <section id="insights" className="relative w-full bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Operational visibility in real time</h2>
            <p className="mt-3 text-slate-300">Dashboards, alerts, and anomaly detection across ingestion, processing, and downstream utilization.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Cohort builder and export</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-400" /> Data contracts & lineage</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400" /> Model monitoring & drift</li>
            </ul>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="mt-1 text-3xl font-semibold text-white">{m.value}</div>
                  <div className="text-xs text-slate-400">{m.hint}</div>
                </div>
              ))}
              <div className="col-span-full rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-6">
                <div className="text-sm text-slate-300">Smart anomaly detection is highlighting increased admission rates in region 2. Suggested action: expand care navigation teams and update predictive model thresholds.</div>
                {status === 'error' && <div className="mt-2 text-xs text-rose-300">Live metrics unavailable. Showing placeholders.</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;
