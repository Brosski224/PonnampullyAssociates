import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, Star, Shield, Trophy, Zap, Award, TrendingUp, Users, Heart, Sparkles } from 'lucide-react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [countUpValues, setCountUpValues] = useState([0, 0, 0, 0]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count-up animation for trust indicators
          const finalValues = [24, 99.1, 12, 100];
          finalValues.forEach((finalValue, index) => {
            let currentValue = 0;
            const increment = finalValue / 50;
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
              }
              setCountUpValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(currentValue * 10) / 10;
                return newValues;
              });
            }, 40);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: 'TATA AIA Life Insurance',
      logo: 'https://www.tataaia.com/content/dam/tataaialifeinsurancecompanylimited/navigations/new-navigation-icon/Logo.svg',
      description: 'Leading insurance provider with comprehensive coverage and innovative solutions for modern families',
      specialties: ['Life Insurance', 'Retirement Planning', 'Investment Plans'],
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      accentColor: 'text-blue-600',
      established: '1919',
      rating: '4.8'
    },
    {
      name: 'TATA AIG General Insurance',
      logo: 'https://www.tataaig.com/logo-min.png',
      description: 'Global insurance leader offering innovative general insurance solutions with cutting-edge technology',
      specialties: ['Health Insurance','Motor Insurance', 'Travel Insurance', 'Home Insurance'],
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      accentColor: 'text-emerald-600',
      established: '1919',
      rating: '4.7'
    },
    {
      name: 'Star Health Insurance',
      logo: 'https://d28c6jni2fmamz.cloudfront.net/star_health_logo_big_77cff254bd.svg',
      description: 'India\'s leading health insurance specialist with comprehensive medical coverage and wellness programs',
      specialties: ['Health Insurance', 'Critical Illness', 'Senior Citizen Plans'],
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      accentColor: 'text-purple-600',
      established: '2006',
      rating: '4.6'
    }
  ];

  const trustIndicators = [
    {
      icon: Users,
      value: countUpValues[0],
      suffix: '',
      label: 'Lives Secured',
      description: 'Families protected with comprehensive coverage',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Trophy,
      value: countUpValues[1],
      suffix: '%',
      label: 'Claim Settlement',
      description: 'Industry-leading claim settlement ratio',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Heart,
      value: countUpValues[2],
      suffix: '',
      label: 'Team Members',
      description: 'Dedicated professionals serving you',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      value: countUpValues[3],
      suffix: '%',
      label: 'Pan India Coverage',
      description: 'Network coverage across the country',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section 
      id="partners" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-25 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <header className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            <Shield className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
            <span className="text-lg font-semibold uppercase tracking-wider">Trusted Insurance Partners</span>
            <Shield className="h-6 w-6 ml-2 text-purple-600 animate-pulse" />
          </div>
          <h2 
            id="partners-heading"
            className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-[1.15]"
          >
            Our Elite Partners
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We collaborate with industry-leading insurance giants to deliver unmatched coverage and financial security
          </p>
        </header>

        {/* Enhanced Partners Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 rounded-3xl shadow-lg`}> 
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 text-center overflow-hidden border border-white/20`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredPartner(index)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-8 left-6 w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>

              {/* Logo Section */}
              <div className="relative mb-6">
                <div className={`w-32 h-16 mx-auto bg-white/90 border-2 border-white shadow-lg rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover: transition-all duration-300 overflow-hidden`}>
                  <img 
                    src={partner.logo}
                    alt={partner.name + ' logo'}
                    className="max-h-12 max-w-[6.5rem] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
                    loading="lazy"
                  />
                </div>
                
               
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-xl font-black mb-3 bg-gradient-to-r ${partner.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {partner.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                  {partner.description}
                </p>

                {/* Enhanced Specialties */}
                <div className="space-y-3">
                  {partner.specialties.map((specialty, specialtyIndex) => (
                    <div 
                      key={specialtyIndex} 
                      className={`group/item flex items-center justify-center text-sm font-medium transition-all duration-300 ${partner.accentColor} bg-white/50 backdrop-blur-sm rounded-full py-2 px-4 hover:bg-white/80 hover:scale-105 shadow-sm`}
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 group-hover/item:animate-pulse" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effects */}
              {hoveredPartner === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 rounded-3xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl mb-16 border border-white/20 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          <div className="relative">
            <header className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                <Sparkles className="h-5 w-5 mr-2 text-emerald-600 animate-spin" />
                <span className="text-sm font-semibold uppercase tracking-wider">Performance Metrics</span>
              </div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
                Trust Indicators
              </h3>
              <p className="text-lg text-slate-600">Numbers that reflect our commitment to excellence</p>
            </header>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon;
                const displayValue = index === 1 ? 
                  `${indicator.value}${indicator.suffix}` : 
                  index === 0 ? `${Math.floor(indicator.value)}` :
                  index === 2 ? `${Math.floor(indicator.value)}` :
                  'Pan India';
                
                return (
                  <div 
                    key={index}
                    className="group text-center transform hover:-translate-y-4 transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className={`relative bg-gradient-to-br ${indicator.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover: transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" aria-hidden="true" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Value */}
                    <div className={`text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r ${indicator.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {displayValue}
                    </div>

                    {/* Label */}
                    <div className="text-slate-700 font-bold text-lg mb-2 group-hover:text-slate-900 transition-colors">
                      {indicator.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                      {indicator.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Authorization Badge */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CheckCircle className="h-6 w-6 mr-3 group-hover:animate-bounce" />
            <span className="relative">Authorized Insurance Provider & Distributor</span>
            <Award className="h-6 w-6 ml-3 group-hover:animate-pulse" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;