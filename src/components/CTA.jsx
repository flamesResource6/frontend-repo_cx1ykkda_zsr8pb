import { useState } from 'react'

function CTA() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', msg: 'Submitting...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/demo-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company, message })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || `Request failed: ${res.status}`)
      }
      setStatus({ state: 'success', msg: 'Thanks! We\'ll reach out shortly.' })
      setEmail(''); setName(''); setCompany(''); setMessage('')
    } catch (err) {
      setStatus({ state: 'error', msg: err.message })
    }
  }

  return (
    <section id="cta" className="relative w-full bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_20%,rgba(2,132,199,0.15),transparent)]" />
      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">See your data united in weeks, not months</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Start with a guided pilot. We connect your core sources, configure governance, and light up the first set of analytics.
        </p>
        <form onSubmit={onSubmit} className="mx-auto mt-6 flex w-full max-w-2xl flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company / Org"
              className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Work email"
              className="flex-1 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/30 ring-1 ring-white/10 disabled:opacity-60"
            >
              {status.state === 'loading' ? 'Submitting...' : 'Request Demo'}
            </button>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your data sources or goals (optional)"
            rows={3}
            className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
        </form>
        {status.state !== 'idle' && (
          <div className={`mt-4 text-sm ${status.state === 'success' ? 'text-emerald-300' : status.state === 'error' ? 'text-rose-300' : 'text-slate-400'}`}>
            {status.msg}
          </div>
        )}
        <div className="mt-4 text-xs text-slate-400">We respect your privacy. No spam.</div>
      </div>
    </section>
  );
}

export default CTA;
