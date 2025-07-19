// Direct Gmail SMTP email service using backend API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const sendPaymentEmail = async (bookingDetails) => {
  try {
    const { userDetails, selectedType } = bookingDetails;
    
    console.log('Sending payment email via Gmail SMTP...');
    
    // Clean the selectedType object to remove circular references (React components)
    const cleanSelectedType = {
      id: selectedType.id,
      name: selectedType.name,
      description: selectedType.description,
      price: selectedType.price,
      duration: selectedType.duration,
      color: selectedType.color,
      features: selectedType.features
    };
    
    // Clean booking details for API call
    const cleanBookingDetails = {
      userDetails: {
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone
      },
      selectedType: cleanSelectedType
    };
    
    // Call backend API to send email
    const response = await fetch(`${API_BASE_URL}/api/send-payment-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookingDetails: cleanBookingDetails
      })
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      console.log('Email sent successfully via Gmail SMTP:', result);
      return { 
        success: true, 
        bookingId: result.bookingId,
        messageId: result.messageId,
        response: result 
      };
    } else {
      console.error('Backend email sending failed:', result);
      return { 
        success: false, 
        error: result.error || 'Unknown error',
        bookingId: result.bookingId 
      };
    }
    
  } catch (error) {
    console.error('Failed to connect to email service:', error);
    
    // Generate fallback booking ID
    const bookingId = `RS${Date.now()}${Math.floor(Math.random() * 1000)}`;
    return { 
      success: false, 
      error: `Connection failed: ${error.message}`,
      bookingId 
    };
  }
};

// Test email service connection
export const testEmailService = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/test-email-config`);
    const result = await response.json();
    return result;
  } catch (error) {
    return { 
      success: false, 
      error: `Service unavailable: ${error.message}` 
    };
  }
};

// Health check for email service
export const checkEmailServiceHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const result = await response.json();
    return result;
  } catch (error) {
    return { 
      status: 'ERROR', 
      message: `Service unavailable: ${error.message}` 
    };
  }
};

// Fallback email content (if EmailJS fails)
export const generateEmailContent = (bookingDetails) => {
  const { userDetails, selectedType } = bookingDetails;
  const bookingId = `RS${Date.now()}${Math.floor(Math.random() * 1000)}`;
  const upiId = process.env.REACT_APP_UPI_ID || 'rekhasutra@paytm';
  
  return {
    bookingId,
    subject: `Payment Details - ${selectedType.name} Consultation Booking`,
    content: `
Dear ${userDetails.name},

Thank you for booking a consultation with RekhaSutra! Here are your payment details:

📋 BOOKING DETAILS:
• Booking ID: ${bookingId}
• Service: ${selectedType.name}
• Duration: ${selectedType.duration}
• Amount: ₹${selectedType.price}
• Booked on: ${new Date().toLocaleDateString('en-IN')}

👤 CUSTOMER DETAILS:
• Name: ${userDetails.name}
• Email: ${userDetails.email}
• Phone: ${userDetails.phone}

💳 PAYMENT INSTRUCTIONS:
1. Send ₹${selectedType.price} to UPI ID: ${upiId}
2. Use reference: ${bookingId}
3. WhatsApp payment screenshot to: +91 9877835457
4. We'll confirm your booking within 2 hours

📞 WHAT'S NEXT:
• You'll receive a confirmation call within 24 hours
• Our expert will contact you to schedule the session
• Keep your booking ID handy: ${bookingId}

For any queries:
• WhatsApp: +91 9877835457
• Email: info@rekhasutra.com

Thank you for choosing RekhaSutra!

Best regards,
RekhaSutra Team
🌟 Your Spiritual Guidance Partner
    `
  };
};
