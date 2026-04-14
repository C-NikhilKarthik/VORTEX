import { ArrowRight, Github } from 'lucide-react'
import WebGLBackground from './WebGLBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden w-full pt-16">
      <div className="absolute inset-0 linear-grid -z-10" />
      <WebGLBackground />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Sleek monochromatic pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-xs text-zinc-400 font-medium tracking-wide mb-10 transition-colors">
          <span className="flex items-center justify-center w-2 h-2 rounded-full bg-zinc-300"></span>
          VORTEX Framework 1.0
        </div>
        
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 text-glow">
            Pure Geometry.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-zinc-400 to-zinc-700">
            Absolute Tracking.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
          Hardware and geometry-aware 6-DoF object tracking framework designed for maximum performance on edge architectures without persistent mapping.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
           {/* Primary White Button */}
          <a href="/paper.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg text-sm font-medium transition-all group">
            Explore Research
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          
          {/* Secondary Ghost Button */}
          <a href="#github" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-white/[0.05] text-zinc-300 rounded-lg text-sm font-medium transition-all border border-white/[0.1]">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
