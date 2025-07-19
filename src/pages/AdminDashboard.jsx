import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Star, 
  User, 
  MessageCircle, 
  Settings,
  Award,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  BarChart3,
  Activity,
  UserCog
} from 'lucide-react';
import UserManagement from '../components/UserManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '12,456', change: '+12%', icon: <Users className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Revenue', value: '₹5,67,890', change: '+18%', icon: <DollarSign className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Astrologers', value: '156', change: '+8%', icon: <Star className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { label: 'Consultations', value: '2,341', change: '+15%', icon: <MessageCircle className="w-5 h-5" />, color: 'from-orange-500 to-red-500' }
  ];

  const recentUsers = [
    { id: 1, name: 'Priya Sharma', email: 'priya@email.com', joinDate: '2024-01-20', status: 'Active', readings: 5 },
    { id: 2, name: 'Rahul Kumar', email: 'rahul@email.com', joinDate: '2024-01-19', status: 'Active', readings: 3 },
    { id: 3, name: 'Anita Patel', email: 'anita@email.com', joinDate: '2024-01-18', status: 'Inactive', readings: 1 },
    { id: 4, name: 'Suresh Singh', email: 'suresh@email.com', joinDate: '2024-01-17', status: 'Active', readings: 8 }
  ];

  const astrologers = [
    { 
      id: 1, 
      name: 'Dr. Rajesh Sharma', 
      specialty: 'Vedic Astrology', 
      rating: 4.9, 
      consultations: 156, 
      earnings: 45000, 
      status: 'Active',
      verified: true
    },
    { 
      id: 2, 
      name: 'Priya Agarwal', 
      specialty: 'Tarot Reading', 
      rating: 4.8, 
      consultations: 134, 
      earnings: 38000, 
      status: 'Active',
      verified: true
    },
    { 
      id: 3, 
      name: 'Pandit Suresh Kumar', 
      specialty: 'Palmistry', 
      rating: 4.7, 
      consultations: 98, 
      earnings: 28000, 
      status: 'Pending',
      verified: false
    }
  ];

  const recentTransactions = [
    { id: 1, user: 'Priya Sharma', amount: 1299, type: 'Palm Reading', date: '2024-01-20', status: 'Completed' },
    { id: 2, user: 'Rahul Kumar', amount: 999, type: 'Consultation', date: '2024-01-20', status: 'Completed' },
    { id: 3, user: 'Anita Patel', amount: 1599, type: 'Birth Chart', date: '2024-01-19', status: 'Pending' },
    { id: 4, user: 'Suresh Singh', amount: 699, type: 'Tarot Reading', date: '2024-01-19', status: 'Completed' }
  ];

  const supportTickets = [
    { id: 1, user: 'Priya Sharma', subject: 'Payment Issue', priority: 'High', status: 'Open', date: '2024-01-20' },
    { id: 2, user: 'Rahul Kumar', subject: 'Account Access', priority: 'Medium', status: 'In Progress', date: '2024-01-19' },
    { id: 3, user: 'Anita Patel', subject: 'Refund Request', priority: 'Low', status: 'Resolved', date: '2024-01-18' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" /> },
    { id: 'user-management', label: 'User Management', icon: <UserCog className="w-4 h-4" /> },
    { id: 'astrologers', label: 'Astrologers', icon: <Star className="w-4 h-4" /> },
    { id: 'transactions', label: 'Transactions', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'support', label: 'Support', icon: <MessageCircle className="w-4 h-4" /> },
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
                  className="admin-card rounded-xl p-6 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm mb-2">{stat.label}</div>
                  <div className="text-green-400 text-sm font-medium">{stat.change}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="admin-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Revenue Trend</h3>
                <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-white/50">
                    <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                    <p>Chart visualization would go here</p>
                  </div>
                </div>
              </div>

              <div className="admin-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">User Growth</h3>
                <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-white/50">
                    <TrendingUp className="w-16 h-16 mx-auto mb-2" />
                    <p>Growth chart would go here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="admin-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Users</h3>
                <div className="space-y-3">
                  {recentUsers.slice(0, 4).map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">{user.name}</h4>
                          <p className="text-white/70 text-xs">{user.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          user.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {recentTransactions.slice(0, 4).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium text-sm">{transaction.user}</h4>
                        <p className="text-white/70 text-xs">{transaction.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-medium text-sm">₹{transaction.amount}</div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="admin-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">User Management</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all">
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white/70 font-medium py-3">User</th>
                      <th className="text-left text-white/70 font-medium py-3">Email</th>
                      <th className="text-left text-white/70 font-medium py-3">Join Date</th>
                      <th className="text-left text-white/70 font-medium py-3">Readings</th>
                      <th className="text-left text-white/70 font-medium py-3">Status</th>
                      <th className="text-left text-white/70 font-medium py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-white/5">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-white/70">{user.email}</td>
                        <td className="py-4 text-white/70">{user.joinDate}</td>
                        <td className="py-4 text-white/70">{user.readings}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'Active' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'user-management':
        return <UserManagement />;

      case 'astrologers':
        return (
          <div className="space-y-6">
            <div className="admin-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Astrologer Management</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Astrologer
                </button>
              </div>

              <div className="space-y-4">
                {astrologers.map((astrologer) => (
                  <div key={astrologer.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-white font-medium">{astrologer.name}</h4>
                            {astrologer.verified && (
                              <Award className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                          <p className="text-white/70 text-sm">{astrologer.specialty}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span>{astrologer.rating}⭐</span>
                            <span>{astrologer.consultations} consultations</span>
                            <span>₹{astrologer.earnings.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          astrologer.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {astrologer.status}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-6">
            <div className="admin-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Support Tickets</h3>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{ticket.subject}</h4>
                        <p className="text-white/70 text-sm">From: {ticket.user}</p>
                        <p className="text-white/60 text-sm">{ticket.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          ticket.priority === 'High' 
                            ? 'bg-red-500/20 text-red-400' 
                            : ticket.priority === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {ticket.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          ticket.status === 'Open' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : ticket.status === 'In Progress'
                            ? 'bg-orange-500/20 text-orange-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {ticket.status}
                        </span>
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
          <div className="admin-card rounded-xl p-6">
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
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-white/70">Manage your platform and monitor performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Activity className="w-5 h-5 text-white" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
              Generate Report
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

export default AdminDashboard;
