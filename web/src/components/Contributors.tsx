import { Github, Linkedin, ArrowRight } from 'lucide-react'
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

export default function Contributors() {
  const contributors = [
    {
      name: "Prakharkumar Srivastava",
      role: "Lead Researcher",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFVWU77G-2V3Q/profile-displayphoto-scale_400_400/B56Znne5iRKEAg-/0/1760525264215?e=1777507200&v=beta&t=ynzCRWFGwCt5T3Ohf-e-KQ4Tkt6evqYqRk5I-2lIXyo",
      description: "Architected and implemented the shader-based pipeline for real-time computational optimization.",
      linkedin: "https://www.linkedin.com/in/prakharssrivastava/"
    },
    {
      name: "Nikhil Karthik",
      role: "Systems Architect",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEhjF1lHJz8mg/profile-displayphoto-scale_400_400/B56ZxcSYm0HoAg-/0/1771074852733?e=1777507200&v=beta&t=cEGPqLe78swgd-I0BAUWmN4rWmdmaeZ43dxBxjHBrVw",
      description: "Developed the SE(3) pose optimization framework, compute shader architectures, and the synthetic reference renderer.",
      github: "https://github.com/C-NikhilKarthik",
      linkedin: "https://www.linkedin.com/in/nikhilkarthik24/"
    },
    {
      name: "Aman Agrawal",
      role: "Optimization Engineer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG8sD4QXAL11Q/profile-displayphoto-scale_400_400/B4DZyNuebQJwAg-/0/1771904302170?e=1777507200&v=beta&t=lDzjqNOlKDA9gvWpskGPz_KTQKPChuYYxGolxzcmClc",
      description: "Designed and implemented vectorized computer vision algorithms leveraging SIMD instructions for high-throughput CPU acceleration.",
      linkedin: "https://www.linkedin.com/in/xlib/"
    },
    {
      name: "Aloori Raj Aryan",
      role: "Algorithm Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGPfyG03emd4w/profile-displayphoto-shrink_400_400/B56ZgOAe29HMAg-/0/1752581665252?e=1777507200&v=beta&t=0pwdRMVrzikuTzOI76BO2MSdZp59Jnec_QCtORV1dJ4",
      description: "Optimized Lucas-Kanade optical flow tracking algorithms and refined the core feature-based algebraic matching pipeline.",
      linkedin: "https://www.linkedin.com/in/aloori-raj-aryan-b364081b4/"
    }
  ]

  return (
    <section className="py-32 bg-black relative border-t border-white/[0.05]" id="contributors">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">
              The Engine Builders
            </h2>
            <p className="text-zinc-500 max-w-xl text-lg">
              Researchers and engineers pushing the boundaries of computational geometry.
            </p>
          </div>
           
           <a href="/paper.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group pb-2">
            Read Full Paper
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {contributors.map((contributor, i) => (
            <motion.div variants={itemVariants} key={i} className="linear-card p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 noise-bg">
              
              <div className="relative z-10 w-24 h-24 shrink-0 rounded-full overflow-hidden border border-white/10">
                <img 
                  src={contributor.image} 
                  alt={contributor.name} 
                  className="w-full h-full object-cover grayscale opacity-80" 
                />
              </div>
              
              <div className="flex-1 relative z-10 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-white tracking-tight">{contributor.name}</h3>
                <p className="text-zinc-400 text-sm font-medium mb-4">{contributor.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {contributor.description}
                </p>
                
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  {contributor.github && (
                    <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {contributor.linkedin && (
                    <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
