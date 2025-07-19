const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_GMAIL_USER,
      pass: process.env.REACT_APP_GMAIL_APP_PASSWORD
    }
  });
};

// Generate email HTML template
const generateEmailHTML = (bookingDetails, bookingId) => {
  const { userDetails, selectedType } = bookingDetails;
  const upiId = process.env.REACT_APP_UPI_ID;
  const businessName = process.env.REACT_APP_BUSINESS_NAME;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RekhaSutra Payment Details</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 30px 20px;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #2c3e50;
        }
        .section {
            margin: 25px 0;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3498db;
        }
        .booking-details {
            background: #f8f9fa;
        }
        .customer-details {
            background: #e8f5e8;
            border-left-color: #27ae60;
        }
        .payment-section {
            background: #fff3cd;
            border-left-color: #f39c12;
        }
        .next-steps {
            background: #e3f2fd;
            border-left-color: #2196f3;
        }
        .section h3 {
            margin: 0 0 15px 0;
            color: #2c3e50;
            font-size: 18px;
        }
        .section p {
            margin: 8px 0;
        }
        .upi-highlight {
            background: #e74c3c;
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            margin: 15px 0;
            box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
        }
        .amount-highlight {
            background: #27ae60;
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
        }
        .booking-id {
            background: #3498db;
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            display: inline-block;
            font-family: monospace;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
        }
        .contact-info {
            background: #34495e;
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-top: 30px;
        }
        .contact-info h3 {
            color: white;
            margin-bottom: 15px;
        }
        .contact-item {
            margin: 8px 0;
            font-size: 16px;
        }
        .footer {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .footer p {
            margin: 5px 0;
            opacity: 0.9;
        }
        .highlight-box {
            background: #ff6b6b;
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            margin: 20px 0;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin: 8px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌟 RekhaSutra Payment Details</h1>
            <p>Your Spiritual Guidance Partner</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear ${userDetails.name},
            </div>
            
            <p>Thank you for booking a consultation with RekhaSutra! Here are your complete payment details:</p>
            
            <div class="section booking-details">
                <h3>📋 Booking Details</h3>
                <p><strong>Booking ID:</strong> <span class="booking-id">${bookingId}</span></p>
                <p><strong>Service:</strong> ${selectedType.name}</p>
                <p><strong>Duration:</strong> ${selectedType.duration}</p>
                <p><strong>Amount:</strong> <span class="amount-highlight">₹${selectedType.price}</span></p>
                <p><strong>Booked on:</strong> ${currentDate}</p>
            </div>
            
            <div class="section customer-details">
                <h3>👤 Customer Details</h3>
                <p><strong>Name:</strong> ${userDetails.name}</p>
                <p><strong>Email:</strong> ${userDetails.email}</p>
                <p><strong>Phone:</strong> ${userDetails.phone}</p>
            </div>
            
            <div class="section payment-section">
                <h3>💳 Payment Instructions</h3>
                <div class="highlight-box">
                    ⚠️ IMPORTANT: Complete payment within 24 hours to confirm your booking
                </div>
                
                <p><strong>Step 1:</strong> Open any UPI app (PhonePe, Google Pay, Paytm, etc.)</p>
                <p><strong>Step 2:</strong> Send money to this UPI ID:</p>
                
                <div class="upi-highlight">
                    UPI ID: ${upiId}
                </div>
                
                <p><strong>Step 3:</strong> Enter amount: <span class="amount-highlight">₹${selectedType.price}</span></p>
                <p><strong>Step 4:</strong> Add reference: <span class="booking-id">${bookingId}</span></p>
                <p><strong>Step 5:</strong> Complete the payment</p>
                <p><strong>Step 6:</strong> Take a screenshot of payment confirmation</p>
                <p><strong>Step 7:</strong> WhatsApp the screenshot to: <strong>+91 9877835457</strong></p>
            </div>
            
            <div class="section next-steps">
                <h3>📞 What Happens Next?</h3>
                <ul>
                    <li><strong>Payment Verification:</strong> We'll verify your payment within 2 hours</li>
                    <li><strong>Confirmation Call:</strong> You'll receive a confirmation call within 24 hours</li>
                    <li><strong>Session Scheduling:</strong> Our expert will contact you to schedule your ${selectedType.name}</li>
                    <li><strong>Session Duration:</strong> ${selectedType.duration} of personalized consultation</li>
                    <li><strong>Booking Reference:</strong> Keep this email and booking ID handy</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3>📞 Need Help?</h3>
                <div class="contact-item">📱 WhatsApp: +91 9877835457</div>
                <div class="contact-item">📧 Email: info@rekhasutra.com</div>
                <div class="contact-item">🌐 Website: www.rekhasutra.com</div>
                <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                    Our support team is available 24/7 to assist you
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Thank you for choosing RekhaSutra!</strong></p>
            <p>🌟 Your Spiritual Guidance Partner</p>
            <p style="font-size: 12px; opacity: 0.8; margin-top: 10px;">
                This is an automated email. Please do not reply to this email address.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

// Email sending endpoint
app.post('/api/send-payment-email', async (req, res) => {
  try {
    const { bookingDetails } = req.body;
    const { userDetails, selectedType } = bookingDetails;
    
    // Generate unique booking ID
    const bookingId = `RS${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    // Create transporter
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('Gmail SMTP connection verified successfully');
    
    // Email options
    const mailOptions = {
      from: {
        name: process.env.REACT_APP_BUSINESS_NAME || 'RekhaSutra Team',
        address: process.env.REACT_APP_GMAIL_USER
      },
      to: userDetails.email,
      subject: `💳 Payment Details - ${selectedType.name} Consultation (${bookingId})`,
      html: generateEmailHTML(bookingDetails, bookingId),
      text: `
Dear ${userDetails.name},

Thank you for booking a consultation with RekhaSutra!

BOOKING DETAILS:
• Booking ID: ${bookingId}
• Service: ${selectedType.name}
• Duration: ${selectedType.duration}
• Amount: ₹${selectedType.price}

PAYMENT INSTRUCTIONS:
1. Send ₹${selectedType.price} to UPI ID: ${process.env.REACT_APP_UPI_ID}
2. Use reference: ${bookingId}
3. WhatsApp payment screenshot to: +91 9877835457

CUSTOMER DETAILS:
• Name: ${userDetails.name}
• Email: ${userDetails.email}
• Phone: ${userDetails.phone}

For support: WhatsApp +91 9877835457

Thank you for choosing RekhaSutra!
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    res.json({
      success: true,
      bookingId,
      messageId: info.messageId,
      message: 'Payment instructions sent successfully'
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Generate booking ID even if email fails
    const bookingId = `RS${Date.now()}${Math.floor(Math.random() * 1000)}`;
    
    res.status(500).json({
      success: false,
      error: error.message,
      bookingId,
      message: 'Failed to send email, but booking is confirmed'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Email service is running',
    timestamp: new Date().toISOString()
  });
});

// Test email configuration
app.get('/api/test-email-config', async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    
    res.json({
      success: true,
      message: 'Gmail SMTP configuration is valid',
      config: {
        service: 'gmail',
        user: process.env.REACT_APP_GMAIL_USER,
        passwordSet: !!process.env.REACT_APP_GMAIL_APP_PASSWORD
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: 'Gmail SMTP configuration failed'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Email service running on port ${PORT}`);
  console.log(`📧 Gmail User: ${process.env.REACT_APP_GMAIL_USER}`);
  console.log(`🔑 App Password Set: ${!!process.env.REACT_APP_GMAIL_APP_PASSWORD}`);
  console.log(`💳 UPI ID: ${process.env.REACT_APP_UPI_ID}`);
});
