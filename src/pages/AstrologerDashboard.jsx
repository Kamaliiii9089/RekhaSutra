import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  MessageCircle, 
  VideoIcon, 
  FileText, 
  Star,
  DollarSign,
  User,
  Settings,
  Bell,
  Eye,
  Edit,
  Plus
} from 'lucide-react';

const AstrologerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const astrologer = {
    name: 'Dr. Rajesh Sharma',
    specialty: 'Vedic Astrology & Palmistry',
    experience: '15 years',
    rating: 4.9,
    reviews: 2456,
    earnings: 45000,
    consultations: 156,
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
  };

  const stats = [
    { label: 'Total Consultations', value: '156', icon: <MessageCircle className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { label: 'This Month Earnings', value: '₹45,000', icon: <DollarSign className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { label: 'Average Rating', value: '4.9', icon: <Star className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
    { label: 'Active Clients', value: '89', icon: <Users className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      client: 'Priya Sharma',
      type: 'Video Call',
      date: '2024-01-25',
      time: '3:00 PM',
      topic: 'Career Guidance',
      duration: '45 mins',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Rahul Kumar',
      type: 'Audio Call',
      date: '2024-01-25',
      time: '5:00 PM',
      topic: 'Relationship Issues',
      duration: '30 mins',
      status: 'pending'
    },
    {
      id: 3,
      client: 'Anita Patel',
      type: 'Live Chat',
      date: '2024-01-26',
      time: '2:00 PM',
      topic: 'Health Concerns',
      duration: '60 mins',
      status: 'confirmed'
    }
  ];

  const recentConsultations = [
    {
      id: 1,
      client: 'Meera Singh',
      type: 'Palm Reading',
      date: '2024-01-24',
      rating: 5,
      earnings: 1299,
      status: 'completed'
    },
    {
      id: 2,
      client: 'Arjun Patel',
      type: 'Birth Chart',
      date: '2024-01-23',
      rating: 4,
      earnings: 1599,
      status: 'completed'
    },
    {
      id: 3,
      client: 'Kavya Reddy',
      type: 'Tarot Reading',
      date: '2024-01-22',
      rating: 5,
      earnings: 999,
      status: 'completed'
    }
  ];

  const clientMessages = [
    {
      id: 1,
      client: 'Priya Sharma',
      message: 'Thank you for the consultation. Can you suggest some remedies?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      client: 'Rahul Kumar',
      message: 'When is the best time for marriage this year?',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      client: 'Anita Patel',
      message: 'The prediction about job change came true! Thank you.',
      time: '1 day ago',
      unread: false
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="w-4 h-4" /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar className="w-4 h-4" /> },
    { id: 'consultations', label: 'Consultations', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'messages', label: 'Messages', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="dashboard-card rounded-xl p-6 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Today's Schedule */}
            <div className="dashboard-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Today's Schedule</h3>
              <div className="space-y-4">
                {upcomingAppointments.slice(0, 3).map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{appointment.client}</h4>
                        <p className="text-white/70 text-sm">{appointment.type} • {appointment.topic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">{appointment.time}</div>
                      <div className="text-white/70 text-sm">{appointment.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="dashboard-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Consultations</h3>
                <div className="space-y-4">
                  {recentConsultations.map((consultation) => (
                    <div key={consultation.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{consultation.client}</h4>
                        <p className="text-white/70 text-sm">{consultation.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-medium">₹{consultation.earnings}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/70 text-sm">{consultation.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Client Messages</h3>
                <div className="space-y-4">
                  {clientMessages.map((message) => (
                    <div key={message.id} className={`p-3 rounded-lg ${
                      message.unread ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-white/5'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{message.client}</h4>
                        <span className="text-white/60 text-xs">{message.time}</span>
                      </div>
                      <p className="text-white/80 text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'appointments':
        return (
          <div className="space-y-6">
            <div className="dashboard-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Upcoming Appointments</h3>
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Slot
                </button>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          {appointment.type === 'Video Call' && <VideoIcon className="w-6 h-6 text-white" />}
                          {appointment.type === 'Audio Call' && <Clock className="w-6 h-6 text-white" />}
                          {appointment.type === 'Live Chat' && <MessageCircle className="w-6 h-6 text-white" />}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{appointment.client}</h4>
                          <p className="text-white/70 text-sm">{appointment.type} • {appointment.topic}</p>
                          <p className="text-white/60 text-sm">{appointment.date} at {appointment.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {appointment.status}
                        </span>
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Edit className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'consultations':
        return (
          <div className="space-y-6">
            <div className="dashboard-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Consultation History</h3>
              <div className="space-y-4">
                {recentConsultations.map((consultation) => (
                  <div key={consultation.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{consultation.client}</h4>
                          <p className="text-white/70 text-sm">{consultation.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-medium">₹{consultation.earnings}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/70 text-sm">{consultation.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{consultation.date}</span>
                      <div className="flex space-x-2">
                        <button className="flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </button>
                        <button className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                          <FileText className="w-4 h-4 mr-1" />
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="dashboard-card rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              {tabs.find(t => t.id === activeTab)?.label}
            </h3>
            <p className="text-white/70">Content for {activeTab} tab coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={astrologer.avatar}
              alt={astrologer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{astrologer.name}</h1>
              <p className="text-white/70">{astrologer.specialty}</p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/70 text-sm">{astrologer.rating} ({astrologer.reviews})</span>
                </div>
                <div className="text-white/60 text-sm">•</div>
                <div className="text-white/70 text-sm">{astrologer.experience} experience</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
              Set Availability
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
    </div>
  );
};

export default AstrologerDashboard;
