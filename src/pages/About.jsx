import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Video, 
  Calendar, 
  Shield, 
  Star,
  Clock,
  Globe,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '50K+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '25+', label: 'Expert Astrologers', icon: <Star className="w-6 h-6" /> },
    { number: '100K+', label: 'Readings Done', icon: <MessageCircle className="w-6 h-6" /> },
    { number: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> }
  ];

  const features = [
    {
      title: 'Ancient Wisdom',
      description: 'Rooted in 5000+ years of Vedic tradition and Sanskrit texts',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Modern Technology',
      description: 'AI-powered analysis combined with human expertise',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Verified Experts',
      description: 'All our astrologers are certified and extensively vetted',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Personalized Approach',
      description: 'Every reading is tailored to your unique birth chart',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const team = [
    {
      name: 'Pandit Rajesh Sharma',
      role: 'Chief Astrologer',
      experience: '25+ Years',
      speciality: 'Vedic Astrology, Palmistry',
      image: '/api/placeholder/150/150',
      rating: 4.9
    },
    {
      name: 'Dr. Priya Nair',
      role: 'Senior Astrologer',
      experience: '18+ Years',
      speciality: 'Numerology, Tarot',
      image: '/api/placeholder/150/150',
      rating: 4.8
    },
    {
      name: 'Acharya Vikram Singh',
      role: 'Vedic Expert',
      experience: '22+ Years',
      speciality: 'Gemology, Vastu',
      image: '/api/placeholder/150/150',
      rating: 4.9
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We maintain the purity of ancient Vedic traditions while embracing modern insights.'
    },
    {
      title: 'Accuracy',
      description: 'Our predictions are based on precise calculations and deep spiritual knowledge.'
    },
    {
      title: 'Accessibility',
      description: 'Making ancient wisdom accessible to everyone through technology and expert guidance.'
    },
    {
      title: 'Confidentiality',
      description: 'Your personal information and consultations are kept completely private and secure.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-xs md:text-sm">About RekhaSutra</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Bridging Ancient <span className="gradient-text">Wisdom</span> with Modern Life
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            For over a decade, we've been helping people discover their true potential through 
            the timeless art of palmistry and astrology, combining traditional knowledge with 
            cutting-edge technology.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="text-purple-400 mb-2 md:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.number}</div>
                <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-12 md:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            {['mission', 'vision', 'story'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="text-center">
            {activeTab === 'mission' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                  To democratize access to ancient wisdom and spiritual guidance through technology, 
                  helping individuals make informed decisions about their lives, relationships, and 
                  future. We believe everyone deserves to understand their cosmic blueprint and 
                  live their most authentic life.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'vision' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                  To become the world's most trusted platform for spiritual guidance, where ancient 
                  wisdom meets modern convenience. We envision a future where everyone can access 
                  personalized spiritual insights anytime, anywhere, empowering them to navigate 
                  life's challenges with confidence and clarity.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
                  Founded in 2010 by a group of traditional astrologers and tech enthusiasts, 
                  RekhaSutra began as a small consultation center in Mumbai. Witnessing the 
                  transformative power of palmistry and astrology in people's lives, we decided 
                  to leverage technology to reach more souls seeking guidance. Today, we serve 
                  thousands of clients worldwide, maintaining the authenticity of ancient practices 
                  while embracing the possibilities of the digital age.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">RekhaSutra</span>?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We combine the best of traditional wisdom with modern technology to provide 
              you with the most accurate and insightful spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our certified astrologers and palmists bring decades of experience and 
              deep spiritual knowledge to guide you on your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                  <p className="text-white/70 text-sm mb-3">{member.experience}</p>
                  <p className="text-white/60 text-sm mb-4">{member.speciality}</p>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white ml-1 text-sm">{member.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              These principles guide everything we do at RekhaSutra, ensuring you receive 
              the highest quality spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your <span className="gradient-text">Spiritual Journey?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have discovered their true potential 
            through our personalized palm reading and astrological guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Start Your Reading
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
