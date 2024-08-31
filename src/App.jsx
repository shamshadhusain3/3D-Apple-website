import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Highlights from './component/Highlights'
import Model from './component/Model'
import Feature from './component/Feature'
import HowItWorks from './component/HowItWorks'
import Footer from './component/Footer'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
      <HowItWorks/>
      <Footer/>
    </main>
    </>
  )
}

export default App
