import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  Star,
  Globe,
  Users,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consultationType: 'palm-reading'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Available 24/7 for urgent consultations'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@rekhasutra.com', 'support@rekhasutra.com'],
      description: 'Get response within 2 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: ['Mumbai, Maharashtra', 'Delhi, New Delhi'],
      description: 'Visit us for in-person consultations'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: ['Mon-Fri: 9 AM - 9 PM', 'Sat-Sun: 10 AM - 6 PM'],
      description: 'Extended hours during festivals'
    }
  ];

  const consultationTypes = [
    { value: 'palm-reading', label: 'Palm Reading' },
    { value: 'astrology', label: 'Astrology Consultation' },
    { value: 'numerology', label: 'Numerology' },
    { value: 'tarot', label: 'Tarot Reading' },
    { value: 'vastu', label: 'Vastu Consultation' },
    { value: 'gemology', label: 'Gemstone Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const faqs = [
    {
      question: 'How accurate are your predictions?',
      answer: 'Our predictions are based on ancient Vedic principles and have helped thousands of clients. While we maintain high accuracy, please remember that astrology provides guidance, not absolute certainty.'
    },
    {
      question: 'What information do I need for a consultation?',
      answer: 'For astrology consultations, you need your birth date, time, and place. For palm reading, clear photos of both palms are required. For in-person consultations, just bring yourself!'
    },
    {
      question: 'How long does a consultation take?',
      answer: 'Consultations typically last 30-60 minutes depending on the type. Palm readings take 30-45 minutes, while comprehensive astrology consultations can take up to 90 minutes.'
    },
    {
      question: 'Do you offer consultations in multiple languages?',
      answer: 'Yes, we offer consultations in Hindi, English, Gujarati, Marathi, and Bengali. Please specify your preferred language when booking.'
    },
    {
      question: 'What if I\'m not satisfied with my consultation?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not satisfied, we\'ll provide a full refund or reschedule with a different expert at no extra cost.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consultationType: 'palm-reading'
      });
    }, 2000);
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
            <MessageCircle className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-white/90 text-sm">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect with Our <span className="gradient-text">Spiritual Guides</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions about your spiritual journey? Need guidance on palm reading or astrology? 
            Our expert team is here to help you find the answers you seek.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-purple-400 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
              <div className="space-y-2 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/80 text-sm">{detail}</p>
                ))}
              </div>
              <p className="text-white/60 text-xs">{info.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-white/80 mb-4">
                  Thank you for reaching out. Our team will get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Consultation Type
                    </label>
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    >
                      {consultationTypes.map(type => (
                        <option key={type.value} value={type.value} className="bg-gray-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/10 pb-4"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                  <p className="text-white/70 text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/20">
              <h3 className="text-white font-semibold mb-2">Still have questions?</h3>
              <p className="text-white/80 text-sm mb-3">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Support
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Location & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Visit Our <span className="gradient-text">Centers</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Experience personalized consultations at our physical locations or 
              connect with us virtually from anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mumbai Center */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Mumbai Center</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-white">123 Spiritual Lane, Andheri West</p>
                    <p className="text-white/70 text-sm">Mumbai, Maharashtra 400058</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <p className="text-white">+91 98765 43210</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">Mon-Fri: 9:00 AM - 9:00 PM</p>
                    <p className="text-white/70 text-sm">Sat-Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Center */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Delhi Center</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-white">456 Mystic Avenue, Connaught Place</p>
                    <p className="text-white/70 text-sm">New Delhi, Delhi 110001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <p className="text-white">+91 87654 32109</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-white text-sm">Mon-Fri: 9:00 AM - 9:00 PM</p>
                    <p className="text-white/70 text-sm">Sat-Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your <span className="gradient-text">Spiritual Journey?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait for the perfect moment. The stars are aligned for you to discover 
            your true path. Book your consultation today and unlock the secrets of your destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
