import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  Edit3, 
  Save, 
  X,
  Camera,
  Star,
  Clock
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    timeOfBirth: '14:30',
    placeOfBirth: 'Mumbai, Maharashtra',
    gender: 'male',
    maritalStatus: 'married',
    occupation: 'Software Engineer',
    avatar: null
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    newsletter: true,
    consultationReminders: true,
    language: 'english',
    timezone: 'IST'
  });

  const recentReadings = [
    {
      id: 1,
      type: 'Palm Reading',
      date: '2025-07-05',
      astrologer: 'Pandit Sharma',
      rating: 5,
      status: 'completed'
    },
    {
      id: 2,
      type: 'Astrology Consultation',
      date: '2025-06-28',
      astrologer: 'Dr. Priya Nair',
      rating: 4,
      status: 'completed'
    },
    {
      id: 3,
      type: 'Numerology Reading',
      date: '2025-06-15',
      astrologer: 'Acharya Singh',
      rating: 5,
      status: 'completed'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Tarot Reading',
      date: '2025-07-15',
      time: '3:00 PM',
      astrologer: 'Pandit Sharma',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Vastu Consultation',
      date: '2025-07-20',
      time: '11:00 AM',
      astrologer: 'Dr. Priya Nair',
      status: 'pending'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
    console.log('Profile updated:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-white/80">
            Manage your account settings and spiritual journey
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  {profileData.avatar ? (
                    <img 
                      src={profileData.avatar} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-white" />
                  )}
                </div>
                <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                <p className="text-white/70">{profileData.email}</p>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white/80 ml-1 text-sm">4.8 Client Rating</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            {['profile', 'preferences', 'history', 'appointments'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profileData.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Time of Birth
                </label>
                <input
                  type="time"
                  name="timeOfBirth"
                  value={profileData.timeOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={profileData.placeOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 disabled:opacity-50"
                />
              </div>

              {isEditing && (
                <div className="md:col-span-2 flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {Object.entries(preferences).slice(0, 5).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-white font-medium">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-white/60 text-sm">
                          {key === 'emailNotifications' && 'Receive updates via email'}
                          {key === 'smsNotifications' && 'Receive SMS alerts'}
                          {key === 'pushNotifications' && 'Browser push notifications'}
                          {key === 'newsletter' && 'Monthly newsletter and tips'}
                          {key === 'consultationReminders' && 'Appointment reminders'}
                        </p>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange(key)}
                        className={`w-12 h-6 rounded-full transition-all ${
                          value ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/20'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Language & Region</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Language
                    </label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences(prev => ({...prev, language: e.target.value}))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="english" className="bg-gray-800">English</option>
                      <option value="hindi" className="bg-gray-800">Hindi</option>
                      <option value="gujarati" className="bg-gray-800">Gujarati</option>
                      <option value="marathi" className="bg-gray-800">Marathi</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Timezone
                    </label>
                    <select
                      value={preferences.timezone}
                      onChange={(e) => setPreferences(prev => ({...prev, timezone: e.target.value}))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="IST" className="bg-gray-800">IST (Indian Standard Time)</option>
                      <option value="UTC" className="bg-gray-800">UTC</option>
                      <option value="PST" className="bg-gray-800">PST</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Recent Readings</h3>
              <div className="space-y-4">
                {recentReadings.map((reading) => (
                  <div key={reading.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{reading.type}</h4>
                        <p className="text-white/70 text-sm">with {reading.astrologer}</p>
                        <p className="text-white/60 text-sm">{reading.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < reading.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-white/20'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          {reading.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Upcoming Appointments</h3>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{appointment.type}</h4>
                        <p className="text-white/70 text-sm">with {appointment.astrologer}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-white/60 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center text-white/60 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {appointment.status}
                        </span>
                        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
