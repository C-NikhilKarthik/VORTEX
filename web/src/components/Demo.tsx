import { Play } from 'lucide-react'
import { motion } from 'motion/react'

export default function Demo() {
  const fadeInUp = { 
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } 
  }

  return (
    <section className="py-32 bg-black relative border-t border-white/[0.05]" id="demo">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-white max-w-lg">
            Architecture in Action
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Robust tracking geometry operating perfectly across varying environments without training payloads.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="linear-card p-3"
        >
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 z-10">
            
            {/* Play Button Interface */}
            <div className="absolute inset-0 z-20 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Play className="w-8 h-8 text-white group-hover:text-black ml-1 transition-colors" />
              </div>
            </div>
            
            {/* HUD / UI Overlays */}
            <div className="absolute top-10 left-10 z-20 border-l border-t border-white/40 w-12 h-12 pointer-events-none">
              <div className="absolute -top-6 left-0 font-mono text-[10px] text-white/50 tracking-widest">OBJ_0x4F</div>
            </div>
            <div className="absolute bottom-10 right-10 z-20 border-r border-b border-white/40 w-12 h-12 pointer-events-none" />

            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="Tracking Demo Preview" 
              className="w-full h-full object-cover opacity-60 grayscale scale-100 min-h-[400px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
