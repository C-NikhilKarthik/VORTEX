import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/[0.04]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2L2 22h20L12 2z" className="fill-white/5" />
              </svg>
              <h3 className="text-sm font-semibold text-white tracking-wide">VORTEX</h3>
            </div>
            <p className="text-zinc-500 text-xs max-w-xs leading-relaxed mb-6">
              Visual Object Rendering and Tracking Engine for Cross-platform. High precision deterministic geometry.
            </p>
            <p className="text-zinc-600 text-xs">
              © {new Date().getFullYear()} Vortex Research. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
             <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-2">Resources</h4>
             <a href="#paper" className="text-xs text-zinc-500 hover:text-white transition-colors">Research Paper</a>
             <a href="#benchmarks" className="text-xs text-zinc-500 hover:text-white transition-colors">Benchmarks</a>
             <a href="#demo" className="text-xs text-zinc-500 hover:text-white transition-colors">Live Demo</a>
          </div>

          <div className="flex flex-col gap-3">
             <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-2">Connect</h4>
             <a href="https://github.com" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Github className="w-3.5 h-3.5" /> GitHub
             </a>
             <a href="https://twitter.com" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Twitter className="w-3.5 h-3.5" /> X (Twitter)
             </a>
             <a href="mailto:contact@vortex.dev" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Mail className="w-3.5 h-3.5" /> Contact
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
