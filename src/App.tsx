import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo - Improved mobile sizing */}
            <div className="flex-shrink-0 group">
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-600 transition-colors duration-300">
                  Ponnampully
                </h1>
                <span className="text-xs sm:text-sm font-medium text-amber-500 -mt-1 tracking-wider">
                  ASSOCIATES
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              ))}

              {/* CTA Button */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group"
              >
                Get Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile menu button - Improved */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Improved */}
          <div className={`lg:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg rounded-b-2xl">
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Get Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <WhyChooseUs />
        <Career />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;