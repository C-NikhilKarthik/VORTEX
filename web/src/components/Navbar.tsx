import { useEffect, useState } from 'react'

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

      // Determine scroll direction to hide/reveal navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false) // scrolling down past threshold
      } else {
        setVisible(true)  // scrolling up or at top
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled, lastScrollY])

  return (
    <nav 
      className={`fixed left-0 w-full z-50 px-6 py-4 transition-all duration-500 ease-in-out flex items-center justify-between ${
        visible ? 'top-0' : '-translate-y-full'
      } bg-transparent border-transparent`}
    >
      <div className="flex items-center gap-3">
         <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange-light to-brand-orange-dark shadow-[0_0_15px_rgba(249,115,22,0.6)]">
           <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2L2 22h20L12 2z" />
           </svg>
         </div>
        <span className="text-sm font-bold tracking-widest text-white uppercase ml-1 drop-shadow-md">Vortex</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 bg-white/[0.02] px-8 py-2.5 rounded-full border border-white/[0.1] backdrop-blur-[30px] saturate-150 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <a href="#benchmarks" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide uppercase drop-shadow">Benchmarks</a>
        <a href="#demo" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide uppercase drop-shadow">Platform</a>
        <a href="#contributors" className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors tracking-wide uppercase drop-shadow">Researchers</a>
      </div>
      
      <div>
         <a href="#paper" className="relative group px-6 py-2.5 bg-white text-black hover:bg-zinc-200 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
           <span className="relative z-10">Read Paper</span>
           <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-light/0 via-brand-orange/30 to-brand-orange-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
         </a>
      </div>
    </nav>
  )
}
