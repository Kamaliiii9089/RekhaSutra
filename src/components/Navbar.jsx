import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Menu, X, Bell } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';
import { useNotifications } from '../hooks/useNotifications';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const notificationRef = useRef(null);

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    // Service links for authenticated users
    { path: '/palm-reading', label: 'Palm Reading' },
    { path: '/astrology', label: 'Astrology' },
    { path: '/consultation', label: 'Consultation' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    // Close mobile menu
    setIsMenuOpen(false);
    // Scroll to top with smooth animation
    setTimeout(() => scrollToTop(), 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-white font-bold text-xl font-playfair">
              Rekha<span className="text-purple-400">Sutra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedIn>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    isActive(item.path) ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </SignedIn>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications - Only show when signed in */}
            <SignedIn>
              <div className="relative" ref={notificationRef}>
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Bell className="w-5 h-5 text-white" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">Notifications</h3>
                        {unreadCount > 0 && (
                          <button 
                            onClick={markAllAsRead}
                            className="text-purple-400 text-sm hover:text-purple-300"
                          >
                            Mark all as read
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-400">
                          No notifications yet
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer ${
                              !notification.isRead ? 'bg-gray-800/50' : ''
                            }`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="text-white font-medium text-sm">{notification.title}</h4>
                                <p className="text-gray-300 text-xs mt-1">{notification.message}</p>
                                <p className="text-gray-500 text-xs mt-2">
                                  {notification.timestamp.toLocaleString()}
                                </p>
                              </div>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-1"></div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SignedIn>

            {/* Authentication */}
            <SignedOut>
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "bg-gray-900 border border-gray-700",
                    userButtonPopoverText: "text-white",
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-2 space-y-1">
            <SignedIn>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${
                    isActive(item.path) ? 'text-purple-400 bg-white/10' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </SignedIn>
            <div className="pt-2 mt-2 border-t border-white/10 space-y-2">
              {/* Mobile Authentication */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="block w-full px-3 py-2 text-white/80 text-center border border-white/20 rounded-lg font-medium hover:bg-white/10">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="block w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-center">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              
              <SignedIn>
                <Link
                  to="/dashboard"
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg font-medium text-center"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-white/80 hover:bg-white/10 rounded-lg font-medium text-center"
                >
                  Profile
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
