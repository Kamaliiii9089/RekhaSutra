const { default: fetch } = require('node-fetch');

const testEmailSending = async () => {
  const testBookingData = {
    bookingDetails: {
      userDetails: {
        name: "Test User",
        email: "test@example.com", 
        phone: "+91 9876543210"
      },
      selectedType: {
        name: "Palm Reading Consultation",
        duration: "30 minutes",
        price: 599
      }
    }
  };

  try {
    console.log('🧪 Testing email sending...');
    console.log('📤 Sending request to:', 'http://localhost:3001/api/send-payment-email');
    
    const response = await fetch('http://localhost:3001/api/send-payment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testBookingData)
    });

    const result = await response.json();
    
    console.log('✅ Response Status:', response.status);
    console.log('📋 Response Data:', JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('🎉 Email sent successfully!');
      console.log('📧 Message ID:', result.messageId);
      console.log('🆔 Booking ID:', result.bookingId);
    } else {
      console.log('❌ Email sending failed:', result.error);
    }
    
  } catch (error) {
    console.error('🚨 Test failed:', error.message);
  }
};

testEmailSending();
