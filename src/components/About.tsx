import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Award, Clock, Users, Target, Star, Phone, Mail, Calendar, MapPin, Sparkles, Trophy, Zap, Shield } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className: string; 'aria-hidden': boolean }>;
  value: string;
  label: string;
  description: string;
  gradient: string;
  color: string;
}

interface Achievement {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className: string; 'aria-hidden': boolean }>;
  type: 'gold' | 'blue';
  year: string;
}

const About: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isConsultationImageLoaded, setIsConsultationImageLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countUpValues, setCountUpValues] = useState([0, 0, 0, 0]);
  const profileImageRef = useRef<HTMLImageElement>(null);
  const consultationImageRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start count-up animation
          const finalValues = [5, 500, 99, 24];
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Handle image loading
  useEffect(() => {
    const profileImg = profileImageRef.current;
    const consultationImg = consultationImageRef.current;

    if (profileImg) {
      if (profileImg.complete) {
        setIsImageLoaded(true);
      } else {
        profileImg.onload = () => setIsImageLoaded(true);
        profileImg.onerror = () => setIsImageLoaded(false);
      }
    }

    if (consultationImg) {
      if (consultationImg.complete) {
        setIsConsultationImageLoaded(true);
      } else {
        consultationImg.onload = () => setIsConsultationImageLoaded(true);
        consultationImg.onerror = () => setIsConsultationImageLoaded(false);
      }
    }
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handlePhoneCall = useCallback(() => {
    window.location.href = 'tel:+919400486381';
  }, []);

  const handleEmailContact = useCallback(() => {
    window.location.href = 'mailto:mursind@gmail.com';
  }, []);

  const stats: StatItem[] = [
    {
      icon: Clock,
      value: '5+',
      label: 'Years Experience',
      description: 'Years of dedicated service in financial advisory',
      gradient: 'from-emerald-500 to-teal-600',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers across Kerala',
      gradient: 'from-blue-500 to-indigo-600',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction and retention rate',
      gradient: 'from-purple-500 to-pink-600',
      color: 'text-purple-600'
    },
    {
      icon: Target,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer support',
      gradient: 'from-orange-500 to-red-600',
      color: 'text-orange-600'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'MDRT 2023',
      subtitle: 'Million Dollar Round Table Achievement - Elite Performance Recognition',
      icon: Trophy,
      type: 'gold',
      year: '2023'
    },
    {
      title: 'International Convention',
      subtitle: 'Pattaya 2023 - Global Industry Excellence Recognition & Leadership Award',
      icon: Award,
      type: 'blue',
      year: '2023'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            <Sparkles className="h-6 w-6 mr-2 text-blue-600 animate-spin" />
            <span className="text-lg font-semibold">About Our Excellence</span>
          </div>
         <h2 
  id="about-heading"
  className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 leading-tight pb-2">
  Ponnampully Associates
</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Building lasting relationships through trusted financial guidance and comprehensive insurance solutions
          </p>
        </header>

        {/* Business Leader Section */}
        <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl mb-20 border border-white/20 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          <header className="text-center mb-12 relative">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">Leadership Excellence</span>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4">Meet Our Business Leader</h3>
            <p className="text-lg text-slate-600">Leading with expertise and proven results</p>
          </header>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center relative">
            {/* Profile Section */}
            <div className="text-center xl:text-left">
              <div className="relative inline-block mb-8">
                {!isImageLoaded && (
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse" />
                )}
                <div className="relative">
                  <img 
                    ref={profileImageRef}
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face"
                    alt="Muraleedhran P B, Business Associate Leader at Ponnampully Associates"
                    className={`w-48 h-48 rounded-full shadow-2xl border-4 border-white transition-all duration-700 ${
                      isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg animate-bounce">
                  <Star className="h-6 w-6 text-white fill-current" aria-hidden="true" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-purple-500 rounded-full opacity-40 animate-pulse"></div>
              </div>
              
              <h4 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-2">
                Muraleedhran P B
              </h4>
              <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-8">
                Business Associate Leader
              </p>
              
              {/* Enhanced Contact Information */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handlePhoneCall}
                  className="group relative w-full xl:w-auto bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden border border-green-200/50"
                  aria-label="Call Muraleedhran P B"
                >
                  <div className="flex items-center justify-center xl:justify-start">
                    <div className="bg-green-500 p-2 rounded-full mr-3 group-hover:transition -transform">
                      <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 font-bold text-lg">+91 9400486381</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-200/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                
                <button
                  onClick={handleEmailContact}
                  className="group relative w-full xl:w-auto bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden border border-blue-200/50"
                  aria-label="Email Muraleedhran P B"
                >
                  <div className="flex items-center justify-center xl:justify-start">
                    <div className="bg-blue-500 p-2 rounded-full mr-3 group-hover: transition-transform">
                      <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 font-bold text-lg">mursind@gmail.com</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
              </div>
              
              {/* Enhanced Location Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-slate-100 to-gray-100 px-6 py-3 rounded-full text-slate-600 shadow-lg">
                <MapPin className="h-5 w-5 mr-2 text-red-500" aria-hidden="true" />
                <span className="font-semibold">Based in Kerala, India</span>
              </div>
            </div>
            
            {/* Enhanced Achievements Section */}
            <div>
              <h5 className="text-3xl font-black text-slate-900 mb-8 text-center xl:text-left">
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Accomplishments</span> & Recognition
              </h5>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  const isGold = achievement.type === 'gold';
                  
                  return (
                    <div 
                      key={index}
                      className={`group relative p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover: shadow-xl hover:shadow-2xl overflow-hidden ${
                        isGold 
                          ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white' 
                          : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
                      }`}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        {achievement.year}
                      </div>

                      <div className="relative">
                        <div className="flex items-center mb-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-4 group-hover: transition-transform">
                            <IconComponent 
                              className="h-8 w-8 text-white"
                              aria-hidden={true}
                            />
                          </div>
                          <div>
                            <h6 className="font-black text-2xl mb-1">
                              {achievement.title}
                            </h6>
                            <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-white/90 leading-relaxed font-medium">
                          {achievement.subtitle}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-20 items-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="order-2 xl:order-1">
            <div className="relative group">
              {!isConsultationImageLoaded && (
                <div className="w-full h-96 bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse rounded-3xl" />
              )}
              <img 
                ref={consultationImageRef}
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional financial consultation session"
                className={`rounded-3xl shadow-2xl w-full transition-all duration-700 group-hover:scale-105 ${
                  isConsultationImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-blue-500/20 rounded-3xl group-hover:from-slate-900/50 transition-all duration-300" />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-60 blur-2xl animate-pulse"></div>
            </div>
          </div>
          
          <div className="order-1 xl:order-2">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              <Zap className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Mission</span>
            </div>


            <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight pb-2">
              Your Partner in Financial Security
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                At Ponnampully Associates, we believe that everyone deserves financial security and peace of mind. 
                With years of experience in the insurance and financial services industry, we have built our reputation 
                on trust, integrity, and personalized service.
              </p>
              
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                Our team of certified professionals works closely with leading insurance providers like TATA AIA Life Insurance, 
                AIG General Insurance, and Star Health Insurance to offer you the best coverage options tailored to your 
                unique needs and budget.
              </p>
              
              <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                We don't just sell policies; we build relationships that last a lifetime.
              </p>
            </div>
            
            <div className="mt-10">
              <button 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                style={{ backgroundSize: '200% 100%' }}
                aria-label="Schedule a consultation"
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 group-hover: transition-transform" aria-hidden="true" />
                  Schedule Consultation
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const displayValue = index < 2 ? `${countUpValues[index]}${stat.value.includes('+') ? '+' : ''}` : 
                               index === 2 ? `${countUpValues[index]}%` : '24/7';
            
            return (
              <div 
                key={index}
                className="group relative text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover: border border-white/20 overflow-hidden"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Floating Icon */}
                <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover: transition-all duration-300 shadow-lg`}>
                  <IconComponent 
                    className="h-10 w-10 text-white" 
                    aria-hidden={true}
                  />
                  {hoveredStat === index && (
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping"></div>
                  )}
                </div>

                {/* Animated Value */}
                <div className={`text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-all duration-300 ${hoveredStat === index ? 'scale-110' : ''}`}>
                  {displayValue}
                </div>

                {/* Label */}
                <div className="text-slate-700 font-bold text-lg mb-3 group-hover:text-slate-900 transition-colors">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                  {stat.description}
                </div>

                {/* Hover Effects */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;