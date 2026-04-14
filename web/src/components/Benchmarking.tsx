import { Activity, Zap, Layers } from 'lucide-react'

export default function Benchmarking() {
  const metrics = [
    {
      label: "Accuracy",
      value: "98.4%",
      comparison: "+12% vs SOTA",
      icon: <Activity className="w-8 h-8 text-brand-orange drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
    },
    {
      label: "Inference",
      value: "58.6",
      suffix: "FPS",
      comparison: "Real-time edge",
      icon: <Zap className="w-8 h-8 text-brand-orange drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
    },
    {
      label: "Payload",
      value: "88",
      suffix: "KB",
      comparison: "Lightest in market",
      icon: <Layers className="w-8 h-8 text-brand-orange drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
    }
  ]

  return (
    <section className="py-32 bg-black relative" id="benchmarks">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
             <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Performance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white max-w-2xl leading-tight">
            Deterministic Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-light to-white">Zero Compromise.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            VORTEX bypasses noisy neural networks in favor of pure computational geometry. The result is unmatched speed and pixel-perfect accuracy on any hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="flam-card p-10 group isolate cursor-default">
              {/* Flamapp intense background hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              
              {/* Radial glow orb inside card floating around */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/30 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-0 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 ease-out">
                    {metric.icon}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-6xl font-black text-white tracking-tighter drop-shadow-lg">{metric.value}</h3>
                    {metric.suffix && <span className="text-xl font-bold text-zinc-500">{metric.suffix}</span>}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{metric.label}</h4>
                  <div className="inline-flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                    <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">{metric.comparison}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
