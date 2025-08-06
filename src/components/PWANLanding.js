import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  MapPin, 
  FileText, 
  Eye, 
  Building, 
  Shield, 
  Lightbulb, 
  Route, 
  Droplets, 
  Plane, 
  School, 
  Phone, 
  Mail, 
  CheckCircle,
  AlertTriangle,
  Star,
  ArrowRight,
  Gift,
  User,
  Heart,
  Download
} from 'lucide-react';

const PWANLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interested: false
  });

  const [showForm, setShowForm] = useState(false);
  const [showBookForm, setShowBookForm] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-31T23:59:59').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly for your FREE site inspection.');
    setFormData({ name: '', email: '', phone: '', interested: false });
    setShowForm(false);
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your FREE Real Estate Investment Guide will be sent to your email shortly.');
    setFormData({ name: '', email: '', phone: '', interested: false });
    setShowBookForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo */}
      <div className="bg-white py-4 px-4 text-center border-b-2 border-red-600">
        <div className="text-2xl font-bold text-blue-900">
          PBC <span className="text-red-600">+</span> <span className="text-sm">PWAN<br/>BUSINESS<br/>OWNERS</span>
        </div>
      </div>

      {/* INTEREST - Ultra Bold Headline */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight shadow-text">
            <span className="block text-yellow-400 animate-pulse">YOU TOO CAN BUILD</span>
            <span className="block text-white">A MULTI BILLION</span>
            <span className="block text-yellow-400">NAIRA REAL ESTATE</span>
            <span className="block text-white">BUSINESS FROM</span>
            <span className="block text-yellow-400 text-6xl md:text-9xl">ZERO CAPITAL!</span>
          </h1>
          <div className="bg-blue-600 text-white inline-block px-8 py-6 rounded-lg text-2xl md:text-3xl font-bold border-4 border-yellow-400 animate-bounce">
            While Enjoying Fantastic Commissions, Unbelievable Incentives<br/>
            And International Travels & Tours
          </div>
        </div>
      </div>

      {/* Countdown Alert */}
      <div className="bg-red-600 text-white py-6 px-4 text-center sticky top-0 z-50 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Clock className="w-8 h-8 animate-spin" />
          <span className="font-black text-xl">🚨 AUGUST SPECIAL ENDS IN:</span>
          <div className="flex gap-3">
            <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-black text-lg">{timeLeft.days}d</span>
            <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-black text-lg">{timeLeft.hours}h</span>
            <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-black text-lg">{timeLeft.minutes}m</span>
            <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-black text-lg">{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* ATTENTION - Problem Recognition */}
        <div className="bg-yellow-400 rounded-xl p-8 mb-12 border-4 border-red-600 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-center text-red-600 mb-6">
            DID YOU KNOW?
          </h2>
          <div className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            You Can NOW Become a Land Owner in the HIGH BROW Area of 
            <span className="text-red-600"> IBUSA (ADMIRALTY UNIVERSITY AREA)</span>
          </div>
          <div className="bg-red-600 text-white text-center py-6 rounded-lg">
            <div className="text-5xl md:text-6xl font-black">₦6M ONLY</div>
            <div className="text-2xl font-bold">For 464sqm Plot!</div>
            <div className="text-lg mt-2">
              <span className="line-through opacity-75">Others Charge ₦15M</span>
              <span className="ml-4 text-yellow-400 font-black">YOU SAVE ₦9M!</span>
            </div>
          </div>
        </div>

        {/* Expert Introduction */}
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-12 border-l-8 border-blue-600">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-6 font-black text-lg">
                <User className="inline w-6 h-6 mr-2" />
                13 YEARS REAL ESTATE EXPERT
              </div>
              <h3 className="text-4xl font-black text-blue-600 mb-6">Dear Future Bragging Landlord,</h3>
              <div className="text-xl leading-relaxed mb-6">
                <p className="font-bold text-2xl text-red-600 mb-4">
                  "My Name is Dr Augustine Onwumere and I am proud to offer you this incredible opportunity because I have been in the Real Estate Business for 13 years and I know my onions when I tell you this is a STEAL!"
                </p>
                <p className="text-gray-700 text-lg">
                  I am giving you these plots of land for just ₦6M (No one is doing that, in fact it's a steal) 
                  while others are selling the same size plots in the same area for ₦12M - ₦15M!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-10 h-10 text-yellow-400 fill-current" />
              ))}
              <div className="text-center font-bold text-blue-600 mt-2">5-Star Expert</div>
            </div>
          </div>
        </div>

        {/* DESIRE - What You Get */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-12 border-4 border-green-500">
          <h3 className="text-4xl font-black text-center text-green-600 mb-8">
            🎁 WHAT YOU GET WHEN YOU INVEST TODAY:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: 'Instant Documentation', desc: 'Get your papers within 24 hours', color: 'text-red-500' },
              { icon: MapPin, title: 'Instant Physical Allocation', desc: 'Choose your exact plot in August 2025', color: 'text-blue-500' },
              { icon: Eye, title: 'FREE Site Inspection', desc: 'See what you\'re buying before you commit', color: 'text-green-500' },
              { icon: Building, title: 'FREE Building Plans', desc: 'Start planning your dream home immediately', color: 'text-purple-500' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-green-500">
                <benefit.icon className={`w-16 h-16 ${benefit.color} mx-auto mb-4`} />
                <h4 className="text-xl font-black mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-600 text-center">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Shock Comparison */}
        <div className="bg-red-50 rounded-xl p-8 mb-12 border-4 border-red-600">
          <h3 className="text-4xl font-black text-center text-red-600 mb-8">
            😱 LEAVE THE GOSSIP, FACE FACTS!
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-4 border-red-400 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-black">
                OTHER COMPANIES
              </div>
              <div className="text-5xl font-black text-red-600 mb-4 mt-4">₦12M - ₦15M</div>
              <p className="text-lg font-bold text-gray-700">Same area, same 464sqm size</p>
              <p className="text-red-600 font-bold mt-2">Why pay more? 🤷‍♂️</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 rounded-xl text-center relative transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-black animate-pulse">
                🔥 YOUR PRICE TODAY
              </div>
              <div className="text-6xl font-black mb-4 mt-4">₦6M</div>
              <p className="text-xl font-bold">464sqm Premium Plot</p>
              <p className="text-yellow-300 font-black text-2xl mt-2">SAVE ₦9M! 💰</p>
            </div>
          </div>
        </div>

        {/* Estate Features */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12 border-4 border-blue-600">
          <h3 className="text-4xl font-black text-center text-blue-600 mb-8">
            🏆 PROSPERITY HEIGHTS ESTATE FEATURES
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: School, title: 'Admiralty University Nearby' },
              { icon: Plane, title: 'Asaba International Airport' },
              { icon: Shield, title: 'Secured Environment' },
              { icon: Lightbulb, title: 'Street Lights Installation' },
              { icon: Route, title: 'Good Road Network' },
              { icon: Droplets, title: 'Completely Dry Land' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 border-l-4 border-blue-600">
                <feature.icon className="w-10 h-10 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-blue-600 text-lg">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION - CTA Section */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-8 text-center mb-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            🚀 READY TO BECOME A BRAGGING LANDLORD?
          </h2>
          <p className="text-2xl mb-8 font-bold">
            Join Smart Investors Securing Their Future TODAY!
          </p>
          
          <div className="bg-yellow-400 text-black p-6 rounded-xl mb-8 border-4 border-white">
            <h4 className="text-2xl font-black mb-4">⚡ PAYMENT ACCOUNT DETAILS:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-black text-sm">ACCOUNT NAME:</p>
                <p className="font-bold">Pwan Lands Acquisition Title Procurement Ltd.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-black text-sm">ACCOUNT NUMBER:</p>
                <p className="text-3xl font-black text-red-600">0123953050</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-black text-sm">BANK:</p>
                <p className="text-xl font-black">WEMA BANK</p>
              </div>
            </div>
            <p className="text-center mt-4 font-black">
              📧 Send payment receipt to: <span className="text-red-600">Pwantitles@gmail.com</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-6 rounded-xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
            >
              <Eye className="w-8 h-8" />
              GET FREE SITE INSPECTION
            </button>
            <a 
              href="tel:+2348000000000" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 rounded-xl font-black text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-8 h-8" />
              CALL NOW FOR INSTANT RESPONSE
            </a>
          </div>
        </div>

        {/* Final Urgency Warning */}
        <div className="bg-yellow-400 rounded-xl p-8 border-4 border-red-600 text-center mb-12">
          <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6 animate-bounce" />
          <h3 className="text-4xl font-black text-red-600 mb-6">
            ⚠️ FINAL WARNING: PRICE INCREASE IMMINENT!
          </h3>
          <div className="text-2xl font-bold mb-4">
            ₦6M Price ONLY Valid Until <span className="text-red-600 font-black">August 31st, 2025</span>
          </div>
          <div className="text-xl font-bold mb-4">
            From September 1st: <span className="text-red-600 font-black">₦10M per plot</span>
          </div>
          <p className="text-2xl font-black text-red-600">
            DON'T SAY WE DIDN'T WARN YOU! 😤
          </p>
        </div>

        {/* Free Book Offer */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 text-center mb-12">
          <Gift className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-4xl font-black mb-6">
            🎁 BONUS: GET MY FREE REAL ESTATE INVESTMENT GUIDE
          </h3>
          <p className="text-xl mb-8 font-bold">
            Learn Insider Secrets on Real Estate Investment in Nigeria
          </p>
          <button 
            onClick={() => setShowBookForm(true)}
            className="bg-yellow-400 text-black px-8 py-6 rounded-xl font-black text-xl hover:bg-yellow-300 transition-all flex items-center gap-3 mx-auto transform hover:scale-105"
          >
            <Download className="w-8 h-8" />
            📖 DOWNLOAD FREE GUIDE NOW
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full border-4 border-red-600">
            <h3 className="text-3xl font-black text-red-600 mb-6 text-center">
              🎯 GET YOUR FREE SITE INSPECTION
            </h3>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-lg"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interested"
                    checked={formData.interested}
                    onChange={handleInputChange}
                    className="mr-3 w-5 h-5"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    I'm interested in purchasing a plot and would like to receive updates
                  </span>
                </label>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-red-600 text-white py-4 rounded-lg font-black text-lg hover:bg-red-700 transition-colors"
                >
                  SCHEDULE INSPECTION
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Book Form Modal */}
      {showBookForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full border-4 border-purple-600">
            <h3 className="text-3xl font-black text-purple-600 mb-6 text-center">
              📖 GET YOUR FREE REAL ESTATE GUIDE
            </h3>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleBookSubmit}
                  className="flex-1 bg-purple-600 text-white py-4 rounded-lg font-black text-lg hover:bg-purple-700 transition-colors"
                >
                  SEND MY GUIDE
                </button>
                <button
                  onClick={() => setShowBookForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-black mb-4 text-yellow-400">
            Welcome to PROSPERITY HEIGHTS ESTATE PHASE ONE
          </h3>
          <p className="text-2xl mb-6 font-bold">By Admiralty University, Ibusa, Delta State</p>
          <div className="border-t border-gray-600 pt-8">
            <p className="text-2xl font-black text-red-400">Dr. Augustine Onwumere</p>
            <p className="text-xl text-blue-400 font-bold">Founder, PWAN Real Estate</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
              <a href="mailto:Pwantitles@gmail.com" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 text-lg font-bold">
                <Mail className="w-6 h-6" />
                Pwantitles@gmail.com
              </a>
              <a href="tel:+2348000000000" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 text-lg font-bold">
                <Phone className="w-6 h-6" />
                Call for Immediate Site Inspection
              </a>
            </div>
            <div className="mt-8 p-6 bg-red-600 rounded-lg">
              <p className="text-xl font-black">
                "Your investment is safe today and in the future. We are on ground monitoring things for you. 
                This is what we have been doing for 13 years and we are not stopping anytime soon."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWANLanding;