import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Hand, 
  Star, 
  MessageCircle, 
  Calendar, 
  Camera, 
  Video, 
  Shield, 
  Award,
  Clock,
  Users,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Hand className="w-8 h-8" />,
      title: "AI Palm Reading",
      description: "Upload your palm photo and get instant AI-powered analysis of your life lines, personality traits, and future predictions.",
      features: [
        "Life Line Analysis",
        "Heart Line Reading",
        "Head Line Interpretation",
        "Fate Line Predictions",
        "Detailed PDF Report"
      ],
      price: "₹299",
      originalPrice: "₹499",
      duration: "Instant",
      rating: 4.9,
      reviews: 2456,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      link: "/palm-reading"
    },
    {
      id: 2,
      icon: <Star className="w-8 h-8" />,
      title: "Astrology Consultation",
      description: "Personalized astrology readings based on your birth chart, planetary positions, and cosmic influences.",
      features: [
        "Birth Chart Analysis",
        "Planetary Predictions",
        "Career Guidance",
        "Relationship Compatibility",
        "Gemstone Recommendations"
      ],
      price: "₹799",
      originalPrice: "₹1299",
      duration: "45 mins",
      rating: 4.8,
      reviews: 1834,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      link: "/astrology"
    },
    {
      id: 3,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Consultation",
      description: "One-on-one live sessions with certified astrologers via chat, audio, or video call for personalized guidance.",
      features: [
        "Expert Astrologers",
        "Video/Audio Calls",
        "Live Chat Support",
        "Personalized Guidance",
        "Follow-up Support"
      ],
      price: "₹1299",
      originalPrice: "₹1999",
      duration: "60 mins",
      rating: 4.9,
      reviews: 3241,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      link: "/consultation"
    }
  ];

  const specialOffers = [
    {
      title: "First Reading Free",
      description: "Get your first palm reading absolutely free",
      icon: <Hand className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Support",
      description: "Round the clock customer support",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Certified Experts",
      description: "Only verified and experienced astrologers",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Privacy Protected",
      description: "Your personal data is 100% secure",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-xs md:text-sm">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Choose Your <span className="gradient-text">Spiritual Journey</span>
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            From AI-powered palm readings to live consultations with expert astrologers, 
            we offer comprehensive spiritual guidance tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`service-card rounded-2xl p-4 md:p-6 h-full bg-gradient-to-br ${service.bgColor} border ${service.borderColor} hover:scale-105 transition-all duration-300`}>
                {/* Popular Badge */}
                {service.id === 2 && (
                  <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white text-lg md:text-xl">
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                    <span className="text-white/80 text-xs md:text-sm">{service.rating}</span>
                  </div>
                </div>

                <p className="text-white/70 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-4 md:mb-6">
                  <ul className="space-y-1.5 md:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs md:text-sm text-white/80">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-xl md:text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-xs md:text-sm text-white/50 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-white/70 text-xs md:text-sm">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center space-x-1 text-white/60 text-xs md:text-sm">
                    <Users className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{service.reviews} reviews</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className={`w-full inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold hover:scale-105 transition-all group-hover:shadow-lg text-sm md:text-base`}
                >
                  Choose Plan
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specialOffers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-morphism rounded-xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${offer.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <div className="text-white">
                  {offer.icon}
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">{offer.title}</h4>
              <p className="text-white/70 text-sm">{offer.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Service to Choose?
            </h3>
            <p className="text-white/80 mb-6">
              Our expert advisors can help you select the perfect service based on your specific needs and concerns.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
