import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Abstract from './components/Abstract'
import Benchmarking from './components/Benchmarking'
import Demo from './components/Demo'
import Contributors from './components/Contributors'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-black w-full selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      <Hero />
      <Abstract />
      <Benchmarking />
      <Demo />
      <Contributors />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App
