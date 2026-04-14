import { Activity, Zap, Layers } from 'lucide-react'
import { motion } from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Benchmarking() {
  const metrics = [
    {
      label: "Accuracy",
      value: "98.4%",
      comparison: "+12% vs SOTA",
      icon: <Activity className="w-5 h-5 text-zinc-100" />
    },
    {
      label: "Inference",
      value: "58.6",
      suffix: "FPS",
      comparison: "Real-time edge",
      icon: <Zap className="w-5 h-5 text-zinc-100" />
    },
    {
      label: "Payload",
      value: "88",
      suffix: "KB",
      comparison: "Lightest in market",
      icon: <Layers className="w-5 h-5 text-zinc-100" />
    }
  ]

  return (
    <section className="py-32 bg-black relative border-t border-white/[0.05]" id="benchmarks">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12 border-b border-white/[0.05] pb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-white max-w-lg">
              Deterministic Precision
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
              Bypassing noisy neural networks in favor of pure computational geometry. Resulting in unmatched speed and pixel-perfect accuracy on any hardware.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric, i) => (
            <motion.div variants={itemVariants} key={i} className="linear-card p-10 group flex flex-col justify-between noise-bg min-h-[280px]">
              <div className="mb-8">
                  <div className="relative z-10 w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center bg-white/[0.03]">
                    {metric.icon}
                  </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <h3 className="text-5xl font-semibold text-white tracking-tight">{metric.value}</h3>
                  {metric.suffix && <span className="text-base font-medium text-zinc-500">{metric.suffix}</span>}
                </div>
                <div className="flex items-center justify-between mt-6 border-t border-white/[0.05] pt-6">
                  <span className="text-base font-medium text-white">{metric.label}</span>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest bg-white/[0.03] px-3 py-1.5 rounded">{metric.comparison}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
