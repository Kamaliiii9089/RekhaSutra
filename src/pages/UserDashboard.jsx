import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Star, 
  FileText, 
  Clock, 
  TrendingUp,
  TrendingDown,
  MessageCircle,
  Hand,
  Bell,
  CreditCard,
  ShoppingCart,
  Phone,
  Gift,
  Check,
  Users
} from 'lucide-react';
import toast from 'react-hot-toast';

// WhatsApp icon component since Lucide doesn't have it
const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
  </svg>
);

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    joinDate: '2024-01-15',
    wallet: 2500,
    credits: 150,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face'
  };

  const services = [
    {
      id: 'palm-reading',
      name: 'AI Palm Reading',
      description: 'Upload your palm photo and get instant AI-powered analysis of your life lines, personality traits, and future predictions.',
      price: 299,
      originalPrice: 499,
      duration: 'Instant',
      icon: <Hand className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Life Line Analysis', 'Heart Line Reading', 'Head Line Interpretation', 'Fate Line Predictions', 'Detailed PDF Report'],
      discount: 40,
      popular: false,
      rating: 4.9,
      reviews: 2456
    },
    {
      id: 'astrology-consultation',
      name: 'Astrology Consultation',
      description: 'Personalized astrology readings based on your birth chart, planetary positions, and cosmic influences.',
      price: 799,
      originalPrice: 1299,
      duration: '45 mins',
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Birth Chart Analysis', 'Planetary Predictions', 'Career Guidance', 'Relationship Compatibility', 'Gemstone Recommendations'],
      discount: 38,
      popular: true,
      rating: 4.8,
      reviews: 1834
    },
    {
      id: 'live-consultation',
      name: 'Live Consultation',
      description: 'One-on-one live sessions with certified astrologers via chat, audio, or video call for personalized guidance.',
      price: 1299,
      originalPrice: 1999,
      duration: '60 mins',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Expert Astrologers', 'Video/Audio Calls', 'Live Chat Support', 'Personalized Guidance', 'Follow-up Support'],
      discount: 35,
      popular: false,
      rating: 4.9,
      reviews: 3241
    }
  ];

  const paymentMethods = [
    { id: 'wallet', name: 'Wallet Balance', balance: user.wallet, icon: <CreditCard className="w-5 h-5" /> },
    { id: 'credits', name: 'Service Credits', balance: user.credits, icon: <Gift className="w-5 h-5" /> },
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'upi', name: 'UPI Payment', icon: <Phone className="w-5 h-5" /> }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsPaymentModalOpen(true);
  };

  const handlePayment = (paymentMethod) => {
    if (paymentMethod === 'wallet' && user.wallet < selectedService.price) {
      toast.error('Insufficient wallet balance!');
      return;
    }

    // Process payment
    toast.success(`Payment successful! ${selectedService.name} purchased.`);
    setIsPaymentModalOpen(false);
    setSelectedService(null);

    // Navigate to respective service page
    if (selectedService.id === 'palm-reading') {
      navigate('/palm-reading');
    } else if (selectedService.id === 'astrology-consultation') {
      navigate('/consultation');
    } else if (selectedService.id === 'tarot-reading') {
      navigate('/astrology');
    }
  };

  const tabs = [
    { id: 'services', label: 'Services', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'orders', label: 'My Orders', icon: <FileText className="w-4 h-4" /> },
    { id: 'wallet', label: 'Wallet', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        return (
          <div className="space-y-6">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="dashboard-card rounded-xl p-6 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">₹{service.price}</span>
                    <span className="text-white/50 line-through text-sm">₹{service.originalPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      {service.discount}% OFF
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-white/70" />
                    <span className="text-white/70 text-sm">{service.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{service.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-white/70" />
                      <span className="text-white/60 text-sm">{service.reviews} reviews</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleServiceSelect(service)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color} text-white`}
                  >
                    Purchase Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      case 'orders':
        return (
          <div className="space-y-6">
            <div className="dashboard-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {[
                  { id: 1, service: 'Palm Reading', date: '2024-01-20', status: 'Completed', amount: 299 },
                  { id: 2, service: 'Astrology Consultation', date: '2024-01-18', status: 'Completed', amount: 1299 },
                  { id: 3, service: 'Tarot Reading', date: '2024-01-15', status: 'Pending', amount: 799 }
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{order.service}</h4>
                        <p className="text-white/70 text-sm">{order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">₹{order.amount}</p>
                      <p className={`text-xs ${order.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'wallet':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dashboard-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Wallet Balance</h3>
                <div className="text-3xl font-bold text-white mb-2">₹{user.wallet}</div>
                <p className="text-white/70 text-sm mb-4">Available Balance</p>
                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all">
                  Add Money
                </button>
              </div>
              
              <div className="dashboard-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Service Credits</h3>
                <div className="text-3xl font-bold text-white mb-2">{user.credits}</div>
                <p className="text-white/70 text-sm mb-4">Available Credits</p>
                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                  Buy Credits
                </button>
              </div>
            </div>
            
            <div className="dashboard-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
              <div className="space-y-4">
                {[
                  { id: 1, type: 'Payment', description: 'Palm Reading Purchase', amount: -299, date: '2024-01-20' },
                  { id: 2, type: 'Refund', description: 'Consultation Refund', amount: +1299, date: '2024-01-18' },
                  { id: 3, type: 'Payment', description: 'Wallet Top-up', amount: +2000, date: '2024-01-15' }
                ].map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                        {transaction.amount > 0 ? <TrendingUp className="w-5 h-5 text-white" /> : <TrendingDown className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{transaction.description}</h4>
                        <p className="text-white/70 text-sm">{transaction.date}</p>
                      </div>
                    </div>
                    <div className={`text-right font-semibold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="dashboard-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Profile Information</h3>
              <div className="flex items-center space-x-6 mb-6">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-500"
                />
                <div>
                  <h4 className="text-2xl font-bold text-white">{user.name}</h4>
                  <p className="text-white/70">{user.email}</p>
                  <p className="text-white/70 text-sm">Member since {user.joinDate}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue={user.name} 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue={user.email} 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
              
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                Update Profile
              </button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-white/70">{user.email}</p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <CreditCard className="w-4 h-4 text-green-400" />
                  <span className="text-white/70 text-sm">₹{user.wallet}</span>
                </div>
                <div className="text-white/60 text-sm">•</div>
                <div className="flex items-center space-x-1">
                  <Gift className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/70 text-sm">{user.credits} credits</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <a 
              href="https://wa.me/9877835457" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              title="WhatsApp Support"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </a>
            <button 
              onClick={() => navigate('/palm-reading')}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Quick Reading
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Complete Payment</h3>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${selectedService.color} rounded-xl flex items-center justify-center`}>
                  <div className="text-white">{selectedService.icon}</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{selectedService.name}</h4>
                  <p className="text-white/70 text-sm">{selectedService.duration}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">Price</span>
                  <span className="text-white">₹{selectedService.price}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">Discount</span>
                  <span className="text-green-400">-₹{selectedService.originalPrice - selectedService.price}</span>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-bold text-xl">₹{selectedService.price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className="text-white font-semibold mb-3">Choose Payment Method</h4>
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handlePayment(method.id)}
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-white">{method.icon}</div>
                    <span className="text-white">{method.name}</span>
                  </div>
                  {method.balance !== undefined && (
                    <span className="text-white/70 text-sm">
                      {method.id === 'wallet' ? `₹${method.balance}` : `${method.balance} credits`}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="flex-1 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePayment('wallet')}
                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                Pay Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
