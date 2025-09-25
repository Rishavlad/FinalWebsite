import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-black/50 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block text-red-400">Veterans</span>
          <span className="block text-blue-400">Cricket Nepal</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Celebrating the legacy of cricket through experienced players who continue to inspire 
          the next generation of cricketers in Nepal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-red-400 transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;