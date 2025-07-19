import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const CelestialClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [celestialInfo] = useState({
    moonPhase: 'Waxing Crescent',
    sunSign: 'Capricorn',
    moonSign: 'Pisces',
    luckyTime: '2:30 PM - 4:00 PM',
    planetaryHour: 'Venus',
    auspaciousDay: 'Thursday'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getMoonPhaseIcon = (phase) => {
    switch (phase) {
      case 'New Moon': return '🌑';
      case 'Waxing Crescent': return '🌒';
      case 'First Quarter': return '🌓';
      case 'Waxing Gibbous': return '🌔';
      case 'Full Moon': return '🌕';
      case 'Waning Gibbous': return '🌖';
      case 'Last Quarter': return '🌗';
      case 'Waning Crescent': return '🌘';
      default: return '🌙';
    }
  };

  const getPlanetaryColor = (planet) => {
    const colors = {
      'Sun': 'from-yellow-400 to-orange-500',
      'Moon': 'from-blue-300 to-purple-400',
      'Mars': 'from-red-500 to-pink-600',
      'Mercury': 'from-green-400 to-teal-500',
      'Jupiter': 'from-purple-500 to-indigo-600',
      'Venus': 'from-pink-400 to-rose-500',
      'Saturn': 'from-gray-500 to-slate-600'
    };
    return colors[planet] || 'from-purple-500 to-pink-500';
  };

  const celestialData = [
    {
      label: 'Moon Phase',
      value: celestialInfo.moonPhase,
      icon: getMoonPhaseIcon(celestialInfo.moonPhase),
      color: 'from-blue-400 to-purple-500'
    },
    {
      label: 'Sun Sign',
      value: celestialInfo.sunSign,
      icon: '☉',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      label: 'Moon Sign',
      value: celestialInfo.moonSign,
      icon: '☽',
      color: 'from-blue-300 to-purple-400'
    },
    {
      label: 'Planetary Hour',
      value: celestialInfo.planetaryHour,
      icon: '⭐',
      color: getPlanetaryColor(celestialInfo.planetaryHour)
    }
  ];

  const hours = currentTime.getHours() % 12 || 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="constellation-bg w-full h-full"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Celestial Clock</h3>
            <p className="text-white/70 text-sm sm:text-base px-4">Current cosmic influences and auspicious timings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Celestial Clock */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Outer Ring */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-white/10 flex items-center justify-center relative">
                  
                  {/* Zodiac Symbols */}
                  <div className="absolute inset-0">
                    {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, index) => (
                      <div
                        key={index}
                        className="absolute text-white/60 text-lg font-bold"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${index * 30}deg) translateY(-110px) rotate(-${index * 30}deg)`,
                        }}
                      >
                        {symbol}
                      </div>
                    ))}
                  </div>

                  {/* Clock Face */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/20 flex items-center justify-center relative">
                    
                    {/* Hour Markers */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-6 bg-white/40"
                        style={{
                          top: '10px',
                          left: '50%',
                          transformOrigin: '50% 86px',
                          transform: `translateX(-50%) rotate(${i * 30}deg)`,
                        }}
                      />
                    ))}

                    {/* Hour Hand */}
                    <motion.div
                      className="absolute w-1 h-16 bg-white rounded-full origin-bottom"
                      style={{
                        bottom: '50%',
                        left: '50%',
                        transformOrigin: '50% 100%',
                        transform: `translateX(-50%) rotate(${hourAngle}deg)`,
                      }}
                      animate={{ rotate: hourAngle }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {/* Minute Hand */}
                    <motion.div
                      className="absolute w-0.5 h-20 bg-white/80 rounded-full origin-bottom"
                      style={{
                        bottom: '50%',
                        left: '50%',
                        transformOrigin: '50% 100%',
                        transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
                      }}
                      animate={{ rotate: minuteAngle }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    {/* Second Hand */}
                    <motion.div
                      className="absolute w-0.5 h-22 bg-red-400 rounded-full origin-bottom"
                      style={{
                        bottom: '50%',
                        left: '50%',
                        transformOrigin: '50% 100%',
                        transform: `translateX(-50%) rotate(${secondAngle}deg)`,
                      }}
                      animate={{ rotate: secondAngle }}
                      transition={{ duration: 0.1, ease: "easeInOut" }}
                    />

                    {/* Center Dot */}
                    <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
                  </div>
                </div>

                {/* Current Time Display */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{formatTime(currentTime)}</div>
                  <div className="text-sm text-white/70">{formatDate(currentTime)}</div>
                </div>
              </div>
            </div>

            {/* Celestial Information */}
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {celestialData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/10"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-lg md:text-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm md:text-base">{item.label}</h4>
                        <p className="text-white/70 text-xs md:text-sm">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Auspicious Times */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 md:p-4 border border-green-500/20">
                <h4 className="text-white font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                  <Star className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
                  Today's Auspicious Times
                </h4>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Lucky Hours:</span>
                    <span className="text-white">{celestialInfo.luckyTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Best Day:</span>
                    <span className="text-white">{celestialInfo.auspaciousDay}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Planetary Ruler:</span>
                    <span className="text-white">{celestialInfo.planetaryHour}</span>
                  </div>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2 md:mb-3 flex items-center text-sm md:text-base">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-400" />
                  Location Settings
                </h4>
                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">City:</span>
                    <span className="text-white">New Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Timezone:</span>
                    <span className="text-white">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Coordinates:</span>
                    <span className="text-white">28.6°N, 77.2°E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CelestialClock;
