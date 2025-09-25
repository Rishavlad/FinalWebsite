import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
              alt="Veterans Cricket Nepal Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="text-xl font-bold">
              <span className={`${isScrolled ? 'text-red-600' : 'text-white'}`}>Veterans</span>
              <span className={`${isScrolled ? 'text-blue-600' : 'text-white'}`}> Cricket Nepal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('board')}
              className={`font-medium hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Board Members
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </button>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4">
              <a href="#" className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-gray-800 hover:text-red-600 font-medium w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-gray-800 hover:text-red-600 font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('board')}
              className="block px-3 py-2 text-gray-800 hover:text-red-600 font-medium w-full text-left"
            >
              Board Members
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block px-3 py-2 text-gray-800 hover:text-red-600 font-medium w-full text-left"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-gray-800 hover:text-red-600 font-medium w-full text-left"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;