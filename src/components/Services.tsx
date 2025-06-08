import React, { useState, useEffect } from 'react';
import { Heart, Shield, TrendingUp, Briefcase, ArrowRight, CheckCircle, Sparkles, Star } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance policies to protect your family\'s financial future with cutting-edge coverage options.',
      features: ['Term Life Insurance', 'Investment Linked Policy', 'Child Insurance', 'Retirement Plans', 'Guaranteed/ULIP Plans'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-rose-500 to-pink-600',
      bgGradient: 'from-rose-50 to-pink-50',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: Shield,
      title: 'Health Insurance',
      description: 'Complete health insurance solutions with comprehensive coverage for all your medical needs and wellness goals.',
      features: ['Individual/Family Health Plans', 'Infinite Restore', 'Maternity Benefits', 'High End Test Benefits', 'General Insurance'],
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Expert financial planning and investment strategies designed to maximize your wealth and secure your future.',
      features: ['Retirement Planning', 'Investment Strategy', 'Mutual Fund Management', 'Portfolio Optimization'],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Join our elite team of financial advisors and unlock unlimited earning potential with world-class training.',
      features: ['Flexible Schedule', 'Comprehensive Training', 'Competitive Commission', 'Growth Opportunities'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <Sparkles className="h-6 w-6 mr-2 text-blue-600" />
            <span className="text-lg font-semibold">Premium Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight pb-2">
            Exceptional Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience premium insurance and financial services designed to exceed your expectations and secure your dreams
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              </div>

              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Floating Icon */}
                  <div className={`absolute top-6 left-6 w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 ${hoveredService === index ? 'scale-110 ' : ''}`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 bg-gradient-to-br ${service.bgGradient} relative`}>
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <div className={`ml-auto transition-transform duration-300 ${hoveredService === index ? 'rotate-45' : ''}`}>
                      <ArrowRight className="h-6 w-6 text-slate-400" />
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className={`flex items-center text-slate-700 transition-all duration-300 ${hoveredService === index ? 'translate-x-2' : ''}`}
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <CheckCircle className={`h-5 w-5 ${service.iconColor} mr-3 flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`relative w-full bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-black/25 active:scale-95 overflow-hidden group`}
                  >
                    <span className="relative z-10">Explore Service</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className={`relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4">
            <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Sparkles className="h-6 w-6 text-blue-400 animate-bounce" />
          </div>

          <div className="relative text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
              Ready to Transform Your Future?
            </h3>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who have secured their financial future with our premium services and expert guidance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-white text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection('career')}
                className="group relative border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Join Elite Team
                  <Briefcase className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-blue-200/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;