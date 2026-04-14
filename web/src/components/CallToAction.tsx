import { useRef, type MouseEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    containerRef.current.style.setProperty('--pointer-x', `${x}px`)
    containerRef.current.style.setProperty('--pointer-y', `${y}px`)
  }
  
  const fadeInUp = { 
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } 
  }

  return (
    <section className="mx-auto px-6 py-24 sm:py-32 relative w-full text-center sm:mb-0 sm:pb-0 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-[100%]" />

      <motion.div 
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-[3.5rem] md:text-[5.5rem] tracking-tighter leading-[1.05] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 mb-6 drop-shadow-sm">
          Tracking reimagined.<br className="hidden md:block"/> Available today.
        </h2>
        
        <div className="my-16 flex flex-col justify-center items-center gap-6 sm:flex-row">
          
          <a href="/paper.pdf" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center select-none rounded-2xl text-white border-[1px] border-white/10 backdrop-blur-[25px] bg-origin-border bg-[linear-gradient(104deg,rgba(255,255,255,0.05)_5%,rgba(240,240,228,0.1)_100%)] shadow-xl hover:bg-white/90 hover:text-black transition-all duration-300 text-base h-12 px-6 font-semibold overflow-hidden">
             <span className="absolute inset-0 opacity-20 group-hover:opacity-10 mix-blend-overlay pointer-events-none noise-bg" />
             <span className="relative z-10 flex items-center gap-2">
                Evaluate VORTEX
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
             </span>
          </a>
          
          <a href="/contact" className="group relative inline-flex items-center justify-center select-none rounded-2xl transition ease-in-out duration-200 bg-transparent border border-transparent text-zinc-400 hover:text-white text-base h-12 px-6 font-medium">
             Contact Research Team
             <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
          </a>
        </div>
      </motion.div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative hidden overflow-hidden bg-black sm:block mt-16 cursor-default"
      >
        <div 
          className="text-[14vw] font-bold tracking-tighter leading-none select-none text-transparent w-full text-center relative z-10"
          style={{
            color: 'rgba(255,255,255,0.02)',
            WebkitTextStroke: '1px rgba(255,255,255,0.05)',
            backgroundImage: 'radial-gradient(30vw circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.4), transparent 70%)',
            WebkitBackgroundClip: 'text'
          }}
        >
          VORTEX
        </div>
      </div>
      
    </section>
  )
}
