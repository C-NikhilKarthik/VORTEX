import { Github, Twitter, Mail } from 'lucide-react'
import { VortexLogo } from './Navbar'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-black py-16 border-t border-white/[0.05]"
    >
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
             <VortexLogo className="w-5 h-5 text-zinc-300" />
            <h3 className="text-xs font-semibold text-zinc-300 tracking-wide uppercase mt-0.5">VORTEX</h3>
          </div>
          <p className="text-zinc-600 text-xs max-w-sm leading-relaxed mb-6">
            Visual Object Rendering and Tracking Engine for Cross-platform. High precision deterministic geometry.
          </p>
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} Vortex Research.
          </p>
        </div>
        
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
             <h4 className="text-zinc-100 text-xs font-semibold mb-2">Resources</h4>
             <a href="#abstract" className="text-xs text-zinc-500 hover:text-white transition-colors">Abstract</a>
             <a href="#benchmarks" className="text-xs text-zinc-500 hover:text-white transition-colors">Platform</a>
             <a href="#demo" className="text-xs text-zinc-500 hover:text-white transition-colors">Demo</a>
          </div>

          <div className="flex flex-col gap-4">
             <h4 className="text-zinc-100 text-xs font-semibold mb-2">Connect</h4>
             <a href="https://github.com" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Github className="w-3.5 h-3.5" /> Source
             </a>
             <a href="https://twitter.com" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Twitter className="w-3.5 h-3.5" /> Updates
             </a>
             <a href="mailto:contact@vortex.dev" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
               <Mail className="w-3.5 h-3.5" /> Contact
             </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
