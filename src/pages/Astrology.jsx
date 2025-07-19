import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Calendar, 
  Heart, 
  Target,
  Sun,
  Sparkles,
  ChevronRight,
  BookOpen,
  Zap,
  Eye,
  Download
} from 'lucide-react';

const Astrology = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    place: ''
  });
  const [showHoroscope, setShowHoroscope] = useState(false);

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire', color: 'from-red-500 to-orange-500' },
    { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'Earth', color: 'from-green-500 to-emerald-500' },
    { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'Air', color: 'from-yellow-500 to-amber-500' },
    { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'Water', color: 'from-blue-500 to-cyan-500' },
    { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire', color: 'from-orange-500 to-red-500' },
    { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth', color: 'from-green-600 to-teal-600' },
    { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'Air', color: 'from-pink-500 to-rose-500' },
    { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'Water', color: 'from-purple-600 to-indigo-600' },
    { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire', color: 'from-purple-500 to-violet-500' },
    { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth', color: 'from-gray-600 to-slate-600' },
    { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'Air', color: 'from-cyan-500 to-blue-500' },
    { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'Water', color: 'from-indigo-500 to-purple-500' }
  ];

  const services = [
    {
      id: 1,
      name: 'Birth Chart Analysis',
      description: 'Complete analysis of your birth chart with planetary positions and their influences',
      features: ['Detailed birth chart', 'Planetary analysis', 'House interpretations', 'Dasha predictions'],
      price: 1299,
      duration: '60 mins',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Daily Horoscope',
      description: 'Personalized daily predictions based on your zodiac sign and planetary transits',
      features: ['Daily predictions', 'Lucky numbers', 'Color recommendations', 'Timing suggestions'],
      price: 199,
      duration: 'Daily',
      icon: <Sun className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 3,
      name: 'Compatibility Reading',
      description: 'Analyze relationship compatibility with detailed partner matching',
      features: ['Love compatibility', 'Marriage prospects', 'Relationship advice', 'Timing analysis'],
      price: 999,
      duration: '45 mins',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      name: 'Career Guidance',
      description: 'Professional astrology consultation for career and business decisions',
      features: ['Career analysis', 'Business timing', 'Success periods', 'Remedial measures'],
      price: 1599,
      duration: '90 mins',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const todaysHoroscope = {
    Aries: {
      overview: "Today brings exciting opportunities in your professional life. Your natural leadership qualities will be highlighted.",
      love: "Venus favors romantic encounters. Single Aries may meet someone special.",
      career: "A new project or promotion is on the horizon. Trust your instincts.",
      health: "Energy levels are high. Good time for physical activities.",
      lucky: { number: 7, color: "Red", time: "2:00 PM - 4:00 PM" },
      rating: 4
    },
    Taurus: {
      overview: "Stability and security are your focus today. Financial matters look promising.",
      love: "Existing relationships grow stronger. Express your feelings openly.",
      career: "Steady progress in work projects. Patience will be rewarded.",
      health: "Take care of your throat and neck area. Stay hydrated.",
      lucky: { number: 3, color: "Green", time: "10:00 AM - 12:00 PM" },
      rating: 5
    },
    Gemini: {
      overview: "Communication and networking are favored. Social connections prove beneficial.",
      love: "Intellectual compatibility with partner increases. Great conversations ahead.",
      career: "Writing, teaching, or communication-related work flourishes.",
      health: "Mental stimulation is important. Avoid information overload.",
      lucky: { number: 12, color: "Yellow", time: "6:00 PM - 8:00 PM" },
      rating: 4
    }
  };

  const handleSignSelect = (sign) => {
    setSelectedSign(sign);
    setShowHoroscope(true);
  };

  const handleBirthChartGenerate = () => {
    if (!birthData.date || !birthData.time || !birthData.place) {
      alert('Please fill in all birth details');
      return;
    }
    // Generate birth chart logic here
    console.log('Generating birth chart for:', birthData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm">Vedic Astrology</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Your <span className="gradient-text">Cosmic Blueprint</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Unlock the secrets of your destiny through ancient Vedic astrology. 
            Get personalized insights based on your birth chart and planetary positions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="service-card rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-4`}>
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-white/70 text-sm mb-4">{service.description}</p>
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-white/60">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">₹{service.price}</span>
                <span className="text-white/60 text-sm">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Birth Chart Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Generate Your <span className="gradient-text">Birth Chart</span>
            </h2>
            <p className="text-white/80">
              Enter your birth details to generate a detailed astrological chart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={birthData.date}
                onChange={(e) => setBirthData({...birthData, date: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Time of Birth
              </label>
              <input
                type="time"
                value={birthData.time}
                onChange={(e) => setBirthData({...birthData, time: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Place of Birth
              </label>
              <input
                type="text"
                value={birthData.place}
                onChange={(e) => setBirthData({...birthData, place: e.target.value})}
                placeholder="City, Country"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleBirthChartGenerate}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Birth Chart
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Zodiac Signs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your <span className="gradient-text">Zodiac Sign</span>
            </h2>
            <p className="text-white/80">
              Select your zodiac sign to get today's personalized horoscope
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {zodiacSigns.map((sign, index) => (
              <motion.button
                key={sign.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSignSelect(sign.name)}
                className={`p-4 rounded-xl border transition-all hover:scale-105 ${
                  selectedSign === sign.name
                    ? 'border-purple-500 bg-white/10'
                    : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{sign.symbol}</div>
                  <h3 className="text-white font-medium text-sm">{sign.name}</h3>
                  <p className="text-white/60 text-xs">{sign.dates}</p>
                  <div className="mt-2">
                    <span className="text-xs text-white/50">{sign.element}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Horoscope Display */}
          {showHoroscope && selectedSign && todaysHoroscope[selectedSign] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedSign} - Today's Horoscope
                </h3>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < todaysHoroscope[selectedSign].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-white/20'
                      }`} 
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Overview
                    </h4>
                    <p className="text-white/80 text-sm">{todaysHoroscope[selectedSign].overview}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Love
                    </h4>
                    <p className="text-white/80 text-sm">{todaysHoroscope[selectedSign].love}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Career
                    </h4>
                    <p className="text-white/80 text-sm">{todaysHoroscope[selectedSign].career}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Health
                    </h4>
                    <p className="text-white/80 text-sm">{todaysHoroscope[selectedSign].health}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-white font-semibold mb-3">Lucky Elements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {todaysHoroscope[selectedSign].lucky.number}
                    </div>
                    <div className="text-white/70 text-sm">Lucky Number</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-1">
                      {todaysHoroscope[selectedSign].lucky.color}
                    </div>
                    <div className="text-white/70 text-sm">Lucky Color</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-white mb-1">
                      {todaysHoroscope[selectedSign].lucky.time}
                    </div>
                    <div className="text-white/70 text-sm">Lucky Time</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Download Detailed Report
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Your Complete <span className="gradient-text">Astrological Reading?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get detailed insights about your personality, relationships, career, and future 
            through a comprehensive astrological consultation with our expert astrologers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Astrology;
