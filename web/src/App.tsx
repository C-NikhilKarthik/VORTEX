import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benchmarking from './components/Benchmarking'
import Demo from './components/Demo'
import Contributors from './components/Contributors'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-black w-full selection:bg-brand-orange selection:text-black">
      <Navbar />
      <Hero />
      <Benchmarking />
      <Demo />
      <Contributors />
      <Footer />
    </main>
  )
}

export default App
