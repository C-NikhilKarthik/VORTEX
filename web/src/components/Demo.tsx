import { Play } from 'lucide-react'

export default function Demo() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="demo">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange-dark/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
             <span className="text-xs font-bold uppercase tracking-widest text-white">Platform</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            See it in Action
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
            Robust tracking geometry operating perfectly across varying environments. No training payload required.
          </p>
        </div>

        <div className="flam-card p-4 group cursor-pointer relative max-w-5xl mx-auto flam-glow">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black outline outline-1 outline-white/10">
            
            {/* Intensive tracking visual glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 via-transparent to-black mix-blend-overlay z-10 opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
            
            {/* Giant Play Button Interface mapping Flamapp's stark UI */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/30 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <Play className="w-10 h-10 text-white ml-2 transition-colors drop-shadow-md" />
              </div>
            </div>
            
            {/* HUD / UI Overlays representing tracking engine */}
            <div className="absolute top-10 left-10 z-20 border-l-2 border-t-2 border-brand-orange w-16 h-16 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="absolute -top-8 left-0 font-mono text-xs text-brand-orange font-bold tracking-widest">OBJ: 0x4F</div>
            </div>
            <div className="absolute bottom-10 right-10 z-20 border-r-2 border-b-2 border-brand-orange w-16 h-16 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Simulated frame tracking overlay */}
            <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50 parallax"></div>

            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="Tracking Demo Preview" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-[1.5s] ease-out min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
