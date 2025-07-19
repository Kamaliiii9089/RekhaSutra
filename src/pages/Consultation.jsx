import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Video, 
  Phone, 
  Mail,
  Star,
  ArrowLeft
} from 'lucide-react';
import toast from 'react-hot-toast';
import { sendPaymentEmail, generateEmailContent, checkEmailServiceHealth } from '../utils/emailService';
import EmailPreview from '../components/EmailPreview';

const Consultation = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [step, setStep] = useState(1); // 1: Type selection, 2: Form & Payment
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showEmailPreview, setShowEmailPreview] = useState(false);
  const [previewBookingId, setPreviewBookingId] = useState(null);
  const [emailServiceStatus, setEmailServiceStatus] = useState('checking');

  // Check email service status on component mount
  useEffect(() => {
    const checkService = async () => {
      try {
        const health = await checkEmailServiceHealth();
        if (health.status === 'OK') {
          setEmailServiceStatus('online');
        } else {
          setEmailServiceStatus('offline');
        }
      } catch (error) {
        console.log('Email service offline, will use fallback');
        setEmailServiceStatus('offline');
      }
    };
    
    checkService();
  }, []);

  const consultationTypes = [
    {
      id: 'video',
      name: 'Video Call',
      icon: <Video className="w-8 h-8" />,
      description: 'Face-to-face consultation via video call for detailed palm reading and astrology guidance',
      price: 1299,
      duration: '45 mins',
      color: 'from-purple-500 to-pink-500',
      features: ['HD Video Quality', 'Screen Sharing', 'Recording Available', 'Follow-up Notes']
    },
    {
      id: 'audio',
      name: 'Audio Call',
      icon: <Phone className="w-8 h-8" />,
      description: 'Voice consultation via phone call for personalized astrology and spiritual guidance',
      price: 999,
      duration: '30 mins',
      color: 'from-blue-500 to-cyan-500',
      features: ['Crystal Clear Audio', 'Instant Connection', 'Call Recording', 'Expert Guidance']
    },
    {
      id: 'chat',
      name: 'Live Chat',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Text-based consultation via chat for quick questions and ongoing guidance',
      price: 699,
      duration: '60 mins',
      color: 'from-green-500 to-emerald-500',
      features: ['Instant Messaging', 'Extended Duration', 'Chat History', 'Quick Responses']
    }
  ];

  const handleTypeSelection = (type) => {
    setSelectedType(type);
    setStep(2);
  };

  const handleInputChange = (field, value) => {
    setUserDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookConsultation = async () => {
    // Validate form
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      toast.error('Please fill in all required details');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!phoneRegex.test(userDetails.phone) || userDetails.phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsProcessing(true);
    toast.loading('Sending payment details via Gmail SMTP...', { id: 'booking' });

    try {
      // Prepare booking details for email
      const bookingDetails = {
        userDetails,
        selectedType
      };

      // Send payment email via Gmail SMTP
      const emailResult = await sendPaymentEmail(bookingDetails);
      
      if (emailResult.success) {
        toast.success(
          `✅ Payment email sent via Gmail to ${userDetails.email}! Check your inbox for UPI payment instructions. Booking ID: ${emailResult.bookingId}`, 
          { 
            id: 'booking',
            duration: 8000
          }
        );
        
        // Show email preview for confirmation
        setPreviewBookingId(emailResult.bookingId);
        setShowEmailPreview(true);
        
        // Show additional instruction toast
        setTimeout(() => {
          toast.success('💬 After payment, WhatsApp the screenshot to +91 9877835457', {
            duration: 8000,
            style: {
              background: '#10B981',
              color: 'white'
            }
          });
        }, 2000);
        
      } else {
        // Fallback - show payment details directly
        const fallbackContent = generateEmailContent(bookingDetails);
        
        // Show email preview even if email sending failed
        setPreviewBookingId(emailResult.bookingId || fallbackContent.bookingId);
        setShowEmailPreview(true);
        
        if (emailServiceStatus === 'offline') {
          toast.error(
            `⚠️ Email service is offline. Your booking is confirmed with ID: ${emailResult.bookingId}. Please note the payment details below.`, 
            { 
              id: 'booking',
              duration: 8000
            }
          );
        } else {
          toast.error(
            `📧 Email delivery failed, but your booking is confirmed with ID: ${emailResult.bookingId}. Please save the payment details below.`, 
            { 
              id: 'booking',
              duration: 8000
            }
          );
        }
        
        // Show WhatsApp instruction
        setTimeout(() => {
          toast.success('💬 WhatsApp payment screenshot to +91 9877835457', {
            duration: 6000,
            style: {
              background: '#10B981',
              color: 'white'
            }
          });
        }, 2000);
        
        console.log('Gmail SMTP failed, showing preview with payment details:', emailResult);
      }
      
    } catch (error) {
      console.error('Booking process failed:', error);
      toast.error('Booking failed. Please try again or contact support.', { id: 'booking' });
    } finally {
      setIsProcessing(false);
    }
  };

  const goBack = () => {
    if (step === 2) {
      setStep(1);
      setSelectedType(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Book Your Consultation
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto px-2">
            Connect with our expert astrologers for personalized spiritual guidance
          </p>
        </div>

        {/* Step 1: Consultation Type Selection */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
              Choose Your Consultation Type
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {consultationTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                  onClick={() => handleTypeSelection(type)}
                >
                  <div className={`bg-gradient-to-br ${type.color} p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl text-white h-full min-h-[280px] sm:min-h-[320px] flex flex-col justify-between`}>
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-3 sm:p-4 rounded-full mb-4 sm:mb-6">
                        {type.icon}
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{type.name}</h3>
                      <p className="text-center text-white/90 mb-4 sm:mb-6 text-sm sm:text-base px-2">{type.description}</p>
                      
                      <div className="text-center mb-4 sm:mb-6">
                        <span className="text-2xl sm:text-3xl font-bold">₹{type.price}</span>
                        <span className="text-white/80 ml-2 text-sm sm:text-base">/ {type.duration}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <ul className="space-y-1 sm:space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white/90 text-sm sm:text-base">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-300 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 sm:mt-6 text-center">
                        <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                          Select This Option
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: User Details Form & Payment */}
        {step === 2 && selectedType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Back Button */}
            <button
              onClick={goBack}
              className="flex items-center text-blue-200 hover:text-white mb-6 sm:mb-8 transition-colors touch-manipulation"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm sm:text-base">Back to Consultation Types</span>
            </button>

            {/* Selected Type Summary */}
            <div className={`bg-gradient-to-r ${selectedType.color} p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 text-white`}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                  {selectedType.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-2xl font-bold truncate">{selectedType.name}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{selectedType.duration} • ₹{selectedType.price}</p>
                </div>
              </div>
            </div>

            {/* User Details Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Your Details</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium text-sm sm:text-base">Full Name *</label>
                  <input
                    type="text"
                    value={userDetails.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm sm:text-base">Email Address *</label>
                  <input
                    type="email"
                    value={userDetails.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium text-sm sm:text-base">Phone Number *</label>
                  <input
                    type="tel"
                    value={userDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 sm:px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-base"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Payment Section */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Payment Summary</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                  <span className="text-white/90 text-sm sm:text-base">{selectedType.name} ({selectedType.duration})</span>
                  <span className="text-xl sm:text-2xl font-bold text-white">₹{selectedType.price}</span>
                </div>

                {/* Payment Instructions Preview */}
                <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" />
                    <h5 className="text-white font-medium text-sm sm:text-base">Payment Instructions will be sent to:</h5>
                  </div>
                  <p className="text-blue-200 text-sm sm:text-base break-all">{userDetails.email || 'your email address'}</p>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-blue-200 space-y-1">
                    <p>✓ UPI ID for payment</p>
                    <p>✓ Booking reference number</p>
                    <p>✓ WhatsApp contact for confirmation</p>
                  </div>
                  
                  {/* Email Service Status */}
                  <div className="mt-2 sm:mt-3 flex items-center text-xs">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      emailServiceStatus === 'online' ? 'bg-green-400' :
                      emailServiceStatus === 'offline' ? 'bg-red-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-blue-200">
                      {emailServiceStatus === 'online' ? 'Gmail SMTP Ready' :
                       emailServiceStatus === 'offline' ? 'Email service offline (fallback mode)' : 'Checking email service...'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBookConsultation}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[50px] touch-manipulation"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      <span className="text-sm sm:text-base">Sending Email...</span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base">{`Get Payment Details - ₹${selectedType.price}`}</span>
                  )}
                </button>

                <p className="text-white/60 text-xs sm:text-sm text-center mt-3 sm:mt-4 px-2">
                  📧 Payment details will be sent to your email • 📱 WhatsApp support available
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Email Preview Modal */}
      {showEmailPreview && (
        <EmailPreview 
          bookingDetails={{ userDetails, selectedType }}
          bookingId={previewBookingId}
          onClose={() => {
            setShowEmailPreview(false);
            // Reset form after closing preview
            setTimeout(() => {
              setUserDetails({ name: '', email: '', phone: '' });
              setSelectedType(null);
              setStep(1);
            }, 500);
          }}
        />
      )}
    </div>
  );
};

export default Consultation;
