import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PalmReading from './pages/PalmReading';
import Astrology from './pages/Astrology';
import Consultation from './pages/Consultation';
import UserDashboard from './pages/UserDashboard';
import AstrologerDashboard from './pages/AstrologerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import useLenis from './hooks/useLenis';
import './App.css';

const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Missing Clerk Publishable Key. Please add REACT_APP_CLERK_PUBLISHABLE_KEY to your .env file.');
}

function App() {
  // Initialize Lenis for smooth scrolling
  useLenis();

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <Router>
        <div className="App bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/palm-reading" element={<PalmReading />} />
              <Route path="/astrology" element={<Astrology />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Protected Routes - Require Authentication */}
              <Route 
                path="/dashboard" 
                element={
                  <SignedIn>
                    <UserDashboard />
                  </SignedIn>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <SignedIn>
                    <Profile />
                  </SignedIn>
                } 
              />
              <Route 
                path="/astrologer-dashboard" 
                element={
                  <SignedIn>
                    <AstrologerDashboard />
                  </SignedIn>
                } 
              />
              
              {/* Admin Only Routes */}
              <Route 
                path="/admin-dashboard" 
                element={
                  <SignedIn>
                    <AdminDashboard />
                  </SignedIn>
                } 
              />
            </Routes>
          </main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1e1b4b',
                color: '#fff',
                border: '1px solid #4c1d95'
              }
            }}
          />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
