import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Sparkles, Shield, Award, Star, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('footer');
    if (element) observer.observe(element);

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+919400486381';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:mursind@gmail.com';
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' }
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Career', id: 'career' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Life Insurance',
    'Health Insurance', 
    'Financial Planning',
    'Investment Advisory',
    'Career Opportunities'
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl"></div>
          
          {/* Animated Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 mr-2 text-blue-400 animate-spin" />
              <span className="text-lg font-semibold">Stay Connected</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4 leading-tight pb-2">
              Ponnampully <span className="text-yellow-400">Associates</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive insurance and financial solutions across India
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group">
                <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  About Us
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Building secure futures for individuals and families with personalized insurance and financial solutions.
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} overflow-hidden`}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="group text-slate-300 hover:text-white transition-all duration-300 flex items-center hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent flex items-center">
                <Award className="h-5 w-5 mr-2 text-purple-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="group text-slate-300 hover:text-white transition-all duration-300 flex items-center hover:translate-x-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                Contact Info
              </h4>
              <div className="space-y-4">
                <button
                  onClick={handlePhoneCall}
                  className="group w-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30 backdrop-blur-sm p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-green-500/20 overflow-hidden"
                >
                  <div className="flex items-start relative z-10">
                    <Phone className="h-5 w-5 text-green-400 mr-3 mt-0.5 group-hover: transition-transform" />
                    <div className="text-left">
                      <p className="text-white font-bold">+91 9400486381</p>
                      <p className="text-slate-300 text-sm">Primary Contact</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                
                <button
                  onClick={handleEmailContact}
                  className="group w-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 backdrop-blur-sm p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-blue-500/20 overflow-hidden"
                >
                  <div className="flex items-start relative z-10">
                    <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5 group-hover: transition-transform" />
                    <div className="text-left">
                      <p className="text-white font-bold">mursind@gmail.com</p>
                      <p className="text-slate-300 text-sm">Email Us</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                
                <div className="bg-gradient-to-r from-slate-600/20 to-gray-600/20 backdrop-blur-sm p-4 rounded-2xl border border-slate-500/20">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-white font-bold mb-1">Kerala, India</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Serving clients across<br />
                        Kerala and beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className={`border-t border-white/10 pt-12 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
                <Award className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-lg font-semibold">Authorized Partners</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
                {['TATA AIA Life Insurance', 'AIG General Insurance', 'Star Health Insurance'].map((partner, index) => (
                  <div key={index} className="group">
                    <span className="text-slate-200 group-hover:text-white transition-colors duration-300 font-semibold bg-gradient-to-r from-white/80 to-blue-200/80 bg-clip-text text-transparent hover:from-white hover:to-blue-100">
                      {partner}
                    </span>
                    {index < 2 && <span className="hidden sm:inline text-slate-500 mx-4">•</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`border-t border-white/10 pt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <Heart className="h-5 w-5 text-red-400 mr-2 animate-pulse" />
                <p className="text-slate-300 text-sm">
                  © 2024 Ponnampully Associates. Made with care for your financial security.
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline decoration-2 underline-offset-4 decoration-blue-400"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <p className="text-xs text-slate-400 text-center leading-relaxed bg-gradient-to-r from-slate-800/50 to-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                <strong className="text-yellow-400">Disclaimer:</strong> Insurance is subject to terms and conditions. 
                Please read the policy documents carefully before concluding any sale. 
                Past performance is not indicative of future results. 
                <span className="block mt-2 text-slate-500">
                  Licensed insurance advisor committed to your financial wellbeing.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50 group overflow-hidden"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover: transition-transform" />
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 rounded-full"></div>
        </button>
      )}
    </>
  );
};

export default Footer;