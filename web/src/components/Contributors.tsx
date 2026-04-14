import { Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Contributors() {
  const contributors = [
    {
      name: "Your Name",
      role: "Lead Researcher",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300",
      description: "Developed the core geometric algorithms and theoretical foundations of the engine.",
      github: "#",
      linkedin: "#"
    },
    {
      name: "Co-Author Name",
      role: "Systems Architect",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      description: "Optimized the platform for embedded devices and integrated cross-platform support.",
      github: "#",
      linkedin: "#"
    }
  ]

  return (
    <section className="py-32 bg-black relative" id="contributors">
       {/* Background ambient lighting */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange-dark/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-white">The Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
              Researchers
            </h2>
            <p className="text-zinc-400 max-w-xl text-lg">
              Built by engineers pushing the boundaries of computational geometry.
            </p>
          </div>
           
           <a href="#paper" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all group">
            <ExternalLink className="w-4 h-4" />
            View Authors in Paper
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributors.map((contributor, i) => (
            <div key={i} className="flam-card p-1 group flex flex-col sm:flex-row gap-0 sm:gap-6 pr-6">
              
              {/* Profile Image - Full width on top for mobile, left align large square for desktop */}
              <div className="w-full sm:w-48 h-64 sm:h-auto shrink-0 overflow-hidden rounded-3xl m-1 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 sm:hidden"></div>
                <img 
                  src={contributor.image} 
                  alt={contributor.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                />
              </div>
              
              <div className="flex-1 py-6 px-4 sm:px-0 flex flex-col justify-center relative z-20">
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 drop-shadow-md">{contributor.name}</h3>
                <div className="inline-flex items-center mb-4">
                   <p className="text-brand-orange text-sm font-bold tracking-wider uppercase bg-brand-orange/10 px-3 py-1 rounded-md">{contributor.role}</p>
                </div>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-md">
                  {contributor.description}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <a href={contributor.github} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={contributor.linkedin} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
