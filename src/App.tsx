import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import BoardMembers from './components/BoardMembers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BoardMembers />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;