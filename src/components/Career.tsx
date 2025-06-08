import React, { useState, useEffect, useCallback } from 'react';
import { Briefcase, TrendingUp, Users, Award, DollarSign, Calendar, GraduationCap, Target, Sparkles, Zap, Star, Trophy, Rocket, Shield } from 'lucide-react';

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [countUpValues, setCountUpValues] = useState([0, 0, 0]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count-up animation for stats
          const finalValues = [100, 85, 15];
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
                newValues[index] = Math.floor(currentValue);
                return newValues;
              });
            }, 40);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('career');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Commission',
      description: 'Attractive commission structure with performance bonuses and unlimited earning potential',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible working hours and remote work options',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: GraduationCap,
      title: 'Comprehensive Training',
      description: 'Complete training program covering products, sales techniques, and industry regulations',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear advancement opportunities with leadership and management development paths',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const opportunities = [
    {
      icon: Rocket,
      title: 'Business Development',
      description: 'Lead generation and client acquisition specialist',
      type: 'Full-time'
    },
    {
      icon: Shield,
      title: 'Insurance Advisor',
      description: 'Provide expert consultation on insurance products',
      type: 'Commission-based'
    },
    {
      icon: Trophy,
      title: 'Team Leader',
      description: 'Build and manage high-performing sales teams',
      type: 'Leadership'
    }
  ];


  return (
    <section 
      id="career" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden"
      aria-labelledby="career-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            <Sparkles className="h-6 w-6 mr-2 text-purple-600 animate-spin" />
            <span className="text-lg font-semibold">Career Opportunities</span>
          </div>
          <h2 
            id="career-heading"
            className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6 leading-[1.15] pb-2"
          >
            Join Our Success Story
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Build a rewarding career in financial services with unlimited earning potential and professional growth opportunities
          </p>
        </header>

      

        {/* Main Content Section */}
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-20 items-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              <Zap className="h-5 w-5 mr-2 text-purple-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-8 leading-tight">
              Build Your Dream Career
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                Join a dynamic team of professionals in the fastest-growing insurance and financial services industry. 
                We offer comprehensive training, ongoing support, and unlimited earning potential for motivated individuals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-2 mr-4">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Fastest growing financial services sector</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-2 mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Help people secure their financial future</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 mr-4">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">Recognition and rewards for top performers</span>
                </div>
              </div>
              
              <p className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                Your success is our success - we invest in your growth every step of the way.
              </p>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
              style={{ backgroundSize: '200% 100%' }}
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-3 h-6 w-6 group-hover: transition-transform" />
                Apply Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
          </div>
          
          <div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional career opportunity in financial services"
                className="rounded-3xl shadow-2xl w-full transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-purple-500/20 rounded-3xl group-hover:from-slate-900/50 transition-all duration-300" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>        

        {/* Enhanced Benefits Grid */}
        <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="text-center mb-12">
            <h3 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent mb-4 pb-2">
              Why Work With Us?
            </h3>
            <p className="text-lg text-slate-600">Comprehensive benefits and growth opportunities</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 overflow-hidden ${
                    hoveredBenefit === index ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Floating Icon */}
                  <div className={`relative bg-gradient-to-br ${benefit.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover: transition-all duration-300 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                    {hoveredBenefit === index && (
                      <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping"></div>
                    )}
                  </div>

                  <h4 className="text-xl font-black text-slate-900 mb-4 text-center group-hover:text-slate-800 transition-colors">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors">
                    {benefit.description}
                  </p>

                  {/* Hover Effects */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${benefit.gradient} rounded-full animate-bounce`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;