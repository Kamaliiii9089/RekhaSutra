import React from 'react';

export const EmailPreview = ({ bookingDetails, bookingId, onClose }) => {
  const { userDetails, selectedType } = bookingDetails;
  const upiId = process.env.REACT_APP_UPI_ID || 'rekhasutra@paytm';
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 sm:p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-2xl font-bold">📧 Email Preview</h2>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl min-w-[40px] min-h-[40px] flex items-center justify-center touch-manipulation"
            >
              ×
            </button>
          </div>
          <p className="text-white/90 mt-2 text-sm sm:text-base">This is what the customer will receive via email</p>
        </div>
        
        <div className="p-6">
          {/* Email Content Preview */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
              <h1 className="text-xl font-bold">🌟 RekhaSutra Payment Details</h1>
              <p className="text-white/90">Your Spiritual Guidance Partner</p>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Dear {userDetails.name},</h3>
              
              <p className="mb-4">Thank you for booking a consultation with RekhaSutra! Here are your payment details:</p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">📋 Booking Details</h4>
                <p><strong>Booking ID:</strong> {bookingId}</p>
                <p><strong>Service:</strong> {selectedType.name}</p>
                <p><strong>Duration:</strong> {selectedType.duration}</p>
                <p><strong>Amount:</strong> ₹{selectedType.price}</p>
                <p><strong>Booked on:</strong> {new Date().toLocaleDateString('en-IN')}</p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">👤 Customer Details</h4>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.phone}</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">💳 Payment Instructions</h4>
                <p><strong>1. UPI Payment:</strong></p>
                <div className="bg-white p-3 rounded border my-2">
                  <p className="text-lg font-bold text-blue-600">UPI ID: {upiId}</p>
                </div>
                <p><strong>2. Amount:</strong> ₹{selectedType.price}</p>
                <p><strong>3. Reference:</strong> {bookingId}</p>
                <p><strong>4. After Payment:</strong> WhatsApp screenshot to <strong>+91 9877835457</strong></p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">📞 What's Next?</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>You'll receive a confirmation call within 24 hours</li>
                  <li>Our expert will contact you to schedule the session</li>
                  <li>Keep your booking ID handy: <strong>{bookingId}</strong></li>
                  <li>We'll confirm your booking within 2 hours of payment</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p><strong>For any queries:</strong></p>
                <p>📱 WhatsApp: +91 9877835457</p>
                <p>📧 Email: info@rekhasutra.com</p>
                <p>🌐 Website: www.rekhasutra.com</p>
                
                <p className="mt-4 text-gray-600">
                  <em>Thank you for choosing RekhaSutra!</em><br/>
                  🌟 Your Spiritual Guidance Partner
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center px-4">
            <button 
              onClick={onClose}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 min-h-[50px] w-full sm:w-auto touch-manipulation text-sm sm:text-base font-medium"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
