import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Shield, TrendingUp, Users, ArrowRight, ClipboardCheck, Star, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse movement for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Memoized scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // External link handler
  const openQuiz = useCallback(() => {
    window.open('https://muraleedhranpb.tataaiapartner.com?tid=a58nl', '_blank', 'noopener,noreferrer');
  }, []);

  // Enhanced trust indicators
  const trustIndicators = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Tailored insurance solutions for every life stage",
      gradient: "from-emerald-400 to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth", 
      description: "Expert financial planning for wealth building",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Dedicated service with human understanding",
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            animationDelay: '1s'
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className={`text-center transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Company Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 mb-8 border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white/90">Trusted Financial Partners Since 2023</span>
          </div>
          
          {/* Company Name */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/80 mb-2 tracking-wider">
              PONNAMPULLY ASSOCIATES
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Secure Your Future with
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text mt-3 pb-2 animate-pulse" style={{ lineHeight: '1.2' }}>
              Expert Financial Guidance
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive insurance and investment solutions designed to protect your wealth 
            and accelerate your financial growth with personalized strategies.
          </p>

          {/* Financial Health Quiz CTA */}
          <div className="relative group mb-12 max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-3 mr-3">
                  <ClipboardCheck className="h-6 w-6 text-white" />
                </div>
                <span className="text-cyan-300 font-semibold text-lg">Free Financial Assessment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Discover Your Financial Health Plan
              </h3>
              <p className="text-gray-300 mb-6 text-base sm:text-lg">
                Get personalized recommendations and unlock your financial potential 
              </p>
              <button 
                onClick={openQuiz}
                className="group/btn relative w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 overflow-hidden"
            >
              <span className="relative z-10">Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group relative border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div 
                  key={index}
                  className={`group relative text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ 
                    animationDelay: `${600 + index * 150}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className={`bg-gradient-to-r ${indicator.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {indicator.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
                    {indicator.description}
                  </p>
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${indicator.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <button 
          onClick={() => scrollToSection('about')}
          className="group text-white/60 hover:text-white transition-all duration-300 focus:outline-none rounded-full p-3 focus:ring-2 focus:ring-white focus:ring-opacity-30 hover:bg-white/10 backdrop-blur-sm"
          aria-label="Scroll to about section"
        >
          <div className="animate-bounce group-hover:animate-pulse">
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;