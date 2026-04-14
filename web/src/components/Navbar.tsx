import { useEffect, useState } from 'react'

export const VortexLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#ffffff"
    strokeWidth="3"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    className={className}
  >
    <path d="M4 4 L15 21" />
    <path d="M20 4 L9 21" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > 20
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false) 
      } else {
        setVisible(true)  
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled, lastScrollY])

  return (
    <nav 
      className={`fixed left-0 w-full px-6 z-50 transition-all duration-500 ease-in-out flex items-center justify-between pointer-events-none ${
        visible ? 'top-6 opacity-100' : 'top-[-5rem] opacity-0'
      }`}
    >
      <div className="pointer-events-auto bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full h-14 pl-4 pr-6 flex items-center shadow-lg">
        <a href="/" className="flex items-center gap-3 pr-6 hover:opacity-80 transition-opacity">
          <VortexLogo className="w-5 h-5 text-white" />
          <span className="text-[14px] font-bold tracking-widest text-white leading-none hidden sm:block mt-0.5 uppercase" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.2)' }}>VORTEX</span>
        </a>
        <div className="hidden md:flex items-center gap-8 pl-6 border-l border-white/10 h-6">
          <a href="#abstract" className="text-[15px] font-medium text-zinc-400 hover:text-white transition-colors tracking-wide">Abstract</a>
          <a href="#benchmarks" className="text-[15px] font-medium text-zinc-400 hover:text-white transition-colors tracking-wide">Platform</a>
          <a href="#demo" className="text-[15px] font-medium text-zinc-400 hover:text-white transition-colors tracking-wide">Demo</a>
          <a href="#contributors" className="text-[15px] font-medium text-zinc-400 hover:text-white transition-colors tracking-wide">Team</a>
        </div>
      </div>
      
      <div className="pointer-events-auto bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-full h-14 pl-8 pr-2 flex items-center gap-8 shadow-lg">
         <a href="/contact" className="hidden sm:block text-[15px] font-medium text-zinc-400 hover:text-white transition-colors tracking-wide">
            Contact
         </a>
         <a 
           href="/paper.pdf" 
           target="_blank" 
           rel="noopener noreferrer"
           className="h-10 px-6 flex items-center justify-center bg-white hover:bg-zinc-200 text-black rounded-full text-[15px] font-semibold transition-colors shadow-sm"
         >
           Read Paper
         </a>
      </div>
    </nav>
  )
}
