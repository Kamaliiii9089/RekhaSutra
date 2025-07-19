import React from 'react';
import { SignUpButton, SignInButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Sparkles,
  ChevronRight,
  Users,
  Award,
  Clock,
  Star,
  Heart,
  Zap,
  BookOpen
} from 'lucide-react';
import Hero from '../components/Hero';
import TarotCards from '../components/TarotCards';
import CelestialClock from '../components/CelestialClock';
import ConstellationVisualizer from '../components/ConstellationVisualizer';
import MysticalParticles from '../components/MysticalParticles';

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Mystical Experience",
      description: "Immerse yourself in the ancient wisdom of spiritual sciences",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Connect with certified spiritual advisors and experienced practitioners",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Growth",
      description: "Discover your true potential through spiritual enlightenment",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your spiritual journey is protected with advanced security measures",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "100+", label: "Expert Astrologers", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The palm reading was incredibly accurate! It helped me make important life decisions with confidence.",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=8b5cf6&color=fff&size=100&rounded=true"
    },
    {
      name: "Rahul Kumar",
      location: "Delhi",
      rating: 5,
      text: "Amazing astrology consultation. The predictions about my career came true exactly as predicted.",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=06b6d4&color=fff&size=100&rounded=true"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      text: "The spiritual guidance I received was life-changing. Highly recommend RekhaSuptra to everyone.",
      avatar: "https://ui-avatars.com/api/?name=Anita+Patel&background=ec4899&color=fff&size=100&rounded=true"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <MysticalParticles />
      <ConstellationVisualizer />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Experience Ancient <span className="gradient-text">Wisdom</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Discover the power of spiritual sciences through our comprehensive platform that 
              connects you with certified experts and ancient wisdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="service-card rounded-xl p-4 sm:p-6 h-full text-center hover:scale-105 transition-transform">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white text-lg sm:text-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 sm:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-morphism rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
                  <div className="text-purple-400 mb-2 flex justify-center text-lg sm:text-xl">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarot Cards Section */}
      <TarotCards />

      {/* Celestial Clock */}
      <section id="celestial" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Celestial <span className="gradient-text">Timing</span>
            </h2>
            <p className="text-xl text-white/80">
              Track planetary movements and auspicious times for your important decisions
            </p>
          </motion.div>
          <CelestialClock />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 px-4">
              Thousands of satisfied clients have found clarity and direction through our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-white font-semibold text-sm">${testimonial.name.split(' ').map(n => n[0]).join('')}</span>`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-white/70 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 italic text-sm sm:text-base">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of satisfied clients who have found clarity and direction through our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton mode="modal" afterSignUpUrl="/dashboard">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </SignUpButton>
              <SignInButton mode="modal" afterSignInUrl="/dashboard">
                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all transform hover:scale-105">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Already have an account?
                </button>
              </SignInButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
