import { ArrowRight, Github, ChevronRight } from 'lucide-react'
import WebGLBackground from './WebGLBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden w-full pt-20">
      {/* <WebGLBackground /> */}
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Supreme Glass Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.01] backdrop-blur-[30px] saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-xs text-zinc-300 font-medium tracking-wide mb-10 hover:bg-white/[0.04] transition-all cursor-pointer group">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/20 mr-1 shadow-[0_0_10px_rgba(249,115,22,0.5)]">
             <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
          </span>
          Next-Gen VORTEX Engine Released
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-zinc-400 ml-1" />
        </div>
        
        <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter mb-8 leading-[1.05]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-100 to-zinc-500 text-glow">
            Pure Mathematics.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-zinc-400 to-zinc-800">
            Absolute Tracking.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 font-normal mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Visual Object Rendering and Tracking Engine for Cross-platform. 
          Deterministic geometry replacing heavy neural-nets.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          {/* Primary Button */}
          <a href="#paper" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 hover:scale-105 rounded-xl text-sm font-bold tracking-wide transition-all group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Read Research
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Secondary Button - Heavy Glass */}
          <a href="#github" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.02] hover:bg-white/[0.06] text-white rounded-xl text-sm font-bold tracking-wide transition-all border border-white/[0.1] backdrop-blur-[20px] saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105">
            <Github className="w-5 h-5" />
            View Source
          </a>
        </div>
      </div>
    </section>
  )
}
