import React from 'react';
import { Trophy, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Board Members', href: '#board' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                alt="Veterans Cricket Nepal Logo" 
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-600"
              />
              <div className="text-lg font-bold">
                <span className="text-red-400">Veterans</span>
                <span className="text-blue-400"> Cricket Nepal</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Celebrating the legacy of cricket through experienced players who continue to inspire 
              the next generation of cricketers in Nepal. Join us in building a stronger cricket 
              community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Tribhuvan University Cricket Ground</p>
              <p>Kirtipur, Kathmandu, Nepal</p>
              <p>Phone: +977-01-4123456</p>
              <p>Email: info@veteranscricketnepal.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Veterans Cricket Nepal. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for cricket in Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;