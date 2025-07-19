import React from 'react';
import { SignUpButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { scrollToId } from '../utils/smoothScroll';

const Hero = () => {
  const handleScrollToFeatures = () => {
    scrollToId('features', -80); // Offset for fixed navbar
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8"
        >
          <Star className="w-4 h-4 text-yellow-400 mr-2" />
          <span className="text-white/90 text-sm font-medium">
            Ancient Wisdom Meets Modern Technology
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight"
        >
          Discover Your{' '}
          <span className="gradient-text">
            Destiny
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Unlock the secrets of your palm and stars through our AI-powered palmistry 
          and personalized astrology consultations with certified experts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <SignUpButton mode="modal" afterSignUpUrl="/dashboard">
            <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl min-h-[50px] touch-manipulation w-full sm:w-auto">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </SignUpButton>
          
          <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 transition-all backdrop-blur-sm min-h-[50px] touch-manipulation w-full sm:w-auto">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/60 text-xs sm:text-sm px-4"
        >
          <div className="flex items-center">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
            <span>4.9/5 Rating</span>
          </div>
          <div className="hidden sm:block">50,000+ Happy Clients</div>
          <div className="sm:hidden">50K+ Clients</div>
          <div className="hidden sm:block">24/7 Expert Support</div>
          <div className="sm:hidden">24/7 Support</div>
          <div className="hidden sm:block">100% Satisfaction Guarantee</div>
          <div className="sm:hidden">100% Guaranteed</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={handleScrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-purple-400" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-1/4 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
