import React, { Suspense } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Highlights from './component/Highlights';
import Model from './component/Model';
import Feature from './component/Feature';
import HowItWorks from './component/HowItWorks';
import Footer from './component/Footer';
import Preloader from './component/Preloader';

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Feature />
        <HowItWorks />
        <Footer />
      </main>
    </Suspense>
  );
}

export default App;
