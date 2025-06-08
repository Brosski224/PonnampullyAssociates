import React, { useState, useEffect, useRef } from 'react';
import { Users, Clock, Award, Shield, Phone, Target, Star, Quote, Sparkles, Zap, Heart, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const sectionRef = useRef(null);
  const testimonialRef = useRef(null);

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

    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (testimonialRef.current) testimonialObserver.observe(testimonialRef.current);

    return () => {
      observer.disconnect();
      testimonialObserver.disconnect();
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Every client receives individual attention with customized insurance and financial solutions tailored to their unique needs and lifestyle.',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      accentColor: 'text-blue-600',
      hoverColor: 'hover:text-blue-700'
    },
    {
      icon: Clock,
      title: 'Lightning-Fast Processing',
      description: 'Experience rapid policy processing and claim settlements with minimal documentation and completely hassle-free procedures.',
      gradient: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      accentColor: 'text-emerald-600',
      hoverColor: 'hover:text-emerald-700'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Our certified professionals provide expert advice backed by years of industry experience and continuous professional training.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      accentColor: 'text-purple-600',
      hoverColor: 'hover:text-purple-700'
    },
    {
      icon: Shield,
      title: 'Trusted Protection',
      description: 'Reliable coverage from top-rated insurance providers with proven track records and exceptional claim settlement ratios.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      accentColor: 'text-orange-600',
      hoverColor: 'hover:text-orange-700'
    },
    {
      icon: Phone,
      title: '24/7 Premium Support',
      description: 'Round-the-clock premium customer support for policy inquiries, claims assistance, and emergency services whenever you need us.',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50',
      accentColor: 'text-cyan-600',
      hoverColor: 'hover:text-cyan-700'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Planning',
      description: 'We focus on your long-term financial goals and help you build a secure future through strategic planning and smart investments.',
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      accentColor: 'text-yellow-600',
      hoverColor: 'hover:text-yellow-700'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      location: 'Kochi, Kerala',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Exceptional service and expert guidance that exceeded all my expectations. They helped me choose the perfect life insurance policy for my family with remarkable attention to detail. Highly recommended!',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      location: 'Thrissur, Kerala',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Professional team with incredible depth of knowledge and genuine care. They made health insurance selection simple and provided outstanding post-purchase support that goes above and beyond.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Amit Patel',
      role: 'Retired Teacher',
      location: 'Calicut, Kerala',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Trustworthy advisors who genuinely care about their clients\' financial wellbeing. Their retirement planning advice has been invaluable for securing my future with confidence and peace of mind.',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full opacity-25 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <header className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            <Sparkles className="h-6 w-6 mr-2 text-purple-600 animate-spin" />
            <span className="text-lg font-semibold uppercase tracking-wider">Why We're Different</span>
            <Sparkles className="h-6 w-6 ml-2 text-pink-600 animate-spin" />
          </div>
          <h2 
            id="why-choose-heading"
            className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6 leading-[1.15]"
          >
            Why Choose Ponnampully Associates?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Experience the difference of working with dedicated professionals who put your interests first and deliver exceptional results
          </p>
        </header>

        {/* Enhanced Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 overflow-hidden border border-white/20`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                  <div className="absolute top-8 left-6 w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></div>
                </div>

                {/* Enhanced Icon */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg mx-auto lg:mx-0`}>
                    <IconComponent className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                  
                  {/* Success Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center lg:text-left">
                  <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effects */}
                {hoveredFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 rounded-3xl"></div>
                )}

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Client Testimonials */}
        <div 
          ref={testimonialRef}
          className={`relative bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden transition-all duration-1000 ${isTestimonialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          <div className="relative">
            {/* Header */}
            <header className="text-center mb-12">
              <div className="inline-flex items-center text-purple-300 mb-4">
                <Quote className="h-5 w-5 mr-2 animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wider">Client Success Stories</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent pb-2">
                What Our Clients Say
              </h3>
              <p className="text-xl text-purple-200 leading-relaxed">Real experiences from satisfied customers across Kerala</p>
            </header>
            
            {/* Testimonials Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl transform transition-all duration-500 ${index === activeTestimonial ? 'scale-100' : 'scale-95'}`}>
                        {/* Client Info */}
                        <div className="flex items-center mb-6">
                          <div className="relative">
                            <img 
                              src={testimonial.image}
                              alt={`${testimonial.name} testimonial`}
                              className="w-16 h-16 rounded-full mr-6 ring-4 ring-white/20 shadow-lg"
                              loading="lazy"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-1">
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-xl text-white mb-1">{testimonial.name}</div>
                            <div className="text-purple-200 text-sm mb-2">{testimonial.role}</div>
                            <div className="text-pink-200 text-xs flex items-center">
                              <span>{testimonial.location}</span>
                            </div>
                          </div>
                          {/* Rating Stars */}
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                            ))}
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-2 h-8 w-8 text-purple-300/50" />
                          <p className="text-lg leading-relaxed text-purple-100 pl-6 font-medium">
                            {testimonial.testimonial}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Trust Badge */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-gradient-to-r from-green-400/20 to-emerald-400/20 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full text-green-300 font-semibold">
                <Heart className="h-5 w-5 mr-2 animate-pulse" />
                <span>Trusted by 500+ Happy Families</span>
                <Zap className="h-5 w-5 ml-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;