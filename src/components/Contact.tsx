import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, ClipboardCheck, Sparkles, Zap, Shield, Star } from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<{ className: string; 'aria-hidden': boolean }>;
  title: string;
  content: string[];
  gradient: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  }, [formData]);

  const handleQuickAction = useCallback((action: string) => {
    switch (action) {
      case 'call':
        window.location.href = 'tel:+919400486381';
        break;
      case 'whatsapp':
        window.open('https://wa.me/919400486381', '_blank');
        break;
      case 'quiz':
        window.open('https://muraleedhranpb.tataaiapartner.com?tid=a58nl', '_blank');
        break;
    }
  }, []);

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      content: ['+91 9400486381', '+91 8078216794'],
      gradient: 'from-green-500 to-emerald-600',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      content: ['mursind@gmail.com', 'ponnampullyassociates@gmail.com'],
      gradient: 'from-blue-500 to-indigo-600',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      content: ['Ponnampully Associates', 'Potttore Road, Thiroor, Thrissur', 'Kerala 680581'],
      gradient: 'from-red-500 to-pink-600',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed', 'Call anytime for emergencies'],
      gradient: 'from-purple-500 to-violet-600',
      color: 'text-purple-600'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden"
      aria-labelledby="contact-heading"
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
            <span className="text-lg font-semibold">Connect With Us</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-[1.15]"
          >
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to secure your financial future? Contact us for a free consultation and personalized quote
          </p>
        </header>

        {/* Quick Actions Section */}
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
              <Zap className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">Quick Connect</span>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg text-slate-600">Choose your preferred way to connect with us</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => handleQuickAction('call')}
              className="group relative bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden border border-green-200/50"
              aria-label="Call now"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-slate-700 font-bold text-lg mb-2">Call Now</h4>
                <p className="text-slate-600 text-sm">+91 9400486381</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-200/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>

            <button
              onClick={() => handleQuickAction('whatsapp')}
              className="group relative bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden border border-green-200/50"
              aria-label="WhatsApp chat"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-slate-700 font-bold text-lg mb-2">WhatsApp</h4>
                <p className="text-slate-600 text-sm">Instant Support</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-teal-200/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>

            <button
              onClick={() => handleQuickAction('quiz')}
              className="group relative bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden border border-blue-200/50"
              aria-label="Take insurance quiz"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <ClipboardCheck className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h4 className="text-slate-700 font-bold text-lg mb-2">Take Quiz</h4>
                <p className="text-slate-600 text-sm">Find Best Plan</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
          </div>
        </div>

        {/* Main Content Section */}
        <div className={`grid grid-cols-1 xl:grid-cols-2 gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Information */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold uppercase tracking-wider">Contact Details</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-12 leading-tight">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                
                return (
                  <div 
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 overflow-hidden"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-start relative">
                      <div className={`bg-gradient-to-br ${info.gradient} rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <IconComponent 
                          className="h-6 w-6 text-white" 
                          aria-hidden={true}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-slate-800 transition-colors">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.content.map((item, itemIndex) => (
                            <p 
                              key={itemIndex} 
                              className={`text-slate-600 transition-colors ${
                                item.includes('emergency') || item.includes('anytime') 
                                  ? 'text-red-600 font-semibold' 
                                  : 'group-hover:text-slate-700'
                              }`}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}></div>
              </div>

              <header className="mb-8 relative">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  <Send className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Send Message</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-slate-600">We'll respond within 24 hours</p>
              </header>
              
              <form className="space-y-6 relative" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-3 h-5 w-5 transition-colors ${
                      focusedField === 'name' ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'name'
                          ? 'border-blue-500 ring-4 ring-blue-500/10 bg-white/80'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-3 h-5 w-5 transition-colors ${
                      focusedField === 'email' ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'email'
                          ? 'border-blue-500 ring-4 ring-blue-500/10 bg-white/80'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-3 top-3 h-5 w-5 transition-colors ${
                      focusedField === 'phone' ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        focusedField === 'phone'
                          ? 'border-blue-500 ring-4 ring-blue-500/10 bg-white/80'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      focusedField === 'service'
                        ? 'border-blue-500 ring-4 ring-blue-500/10 bg-white/80'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="life-insurance">Life Insurance</option>
                    <option value="health-insurance">Health Insurance</option>
                    <option value="financial-advisory">Financial Advisory</option>
                    <option value="career-opportunity">Career Opportunity</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                      focusedField === 'message'
                        ? 'border-blue-500 ring-4 ring-blue-500/10 bg-white/80'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  style={{ backgroundSize: '200% 100%' }}
                  aria-label="Send message"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  * Required fields. We'll respond within 24 hours
                </p>
              </form>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-40 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;