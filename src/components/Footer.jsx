import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpButton } from '@clerk/clerk-react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  Shield,
  Clock,
  Award
} from 'lucide-react';

// WhatsApp icon component since Lucide doesn't have it
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Palm Reading', path: '/palm-reading' },
    { name: 'Astrology', path: '/astrology' },
    { name: 'Consultation', path: '/consultation' },
  ];

  const authLink = {
    name: 'Get Started',
    isAuth: true
  };

  const services = [
    { name: 'AI Palm Reading', path: '/palm-reading' },
    { name: 'Astrology Consultation', path: '/astrology' },
    { name: 'Live Consultation', path: '/consultation' },
    { name: 'Profile Settings', path: '/profile' },
  ];

  const support = [
    { name: 'Help Center', path: '/help' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
  ];

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: '100% Secure & Private' },
    { icon: <Clock className="w-5 h-5" />, text: '24/7 Support' },
    { icon: <Award className="w-5 h-5" />, text: 'Certified Experts' },
    { icon: <Heart className="w-5 h-5" />, text: '50K+ Happy Clients' },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-white font-bold text-xl font-playfair">
                Rekha<span className="text-purple-400">Sutra</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Unlock the secrets of your destiny through ancient palmistry and astrology. 
              Our AI-powered platform combines traditional wisdom with modern technology 
              to provide accurate predictions and spiritual guidance.
            </p>
            <div className="flex space-x-4">
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </button>
              <a href="https://wa.me/9877835457" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <SignUpButton mode="modal" afterSignUpUrl="/dashboard">
                  <button className="text-white/70 hover:text-white transition-colors text-sm">
                    {authLink.name}
                  </button>
                </SignUpButton>
              </li>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact & Support</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-white/70 text-sm">support@rekhasutra.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5" />
                <span className="text-white/70 text-sm">
                  123 Spiritual Center,<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 mb-8 border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="text-purple-400">
                  {feature.icon}
                </div>
                <span className="text-white/80 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8">
          <div className="text-center mb-4">
            <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
            <p className="text-white/70 text-sm">
              Subscribe to our newsletter for weekly horoscopes and spiritual insights
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} RekhaSutra. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-white/60 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/60 text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white/60 text-sm">Certified Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-white/60 text-sm">Made with Love in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
