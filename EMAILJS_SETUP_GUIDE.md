# Gmail SMTP Setup Guide for RekhaSutra

This guide will help you set up Gmail SMTP with EmailJS to send payment instructions via email when users book consultations.

## Step 1: Prepare Your Gmail Account

### Enable 2-Factor Authentication
1. Go to [Gmail Account Settings](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication (required for App Passwords)
3. Verify with your phone number

### Generate App Password
1. Go to Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Click "Generate app password"
4. Select "Mail" as the app
5. Copy the 16-character app password (save it securely)

## Step 2: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 3: Configure Gmail Service in EmailJS

1. In your EmailJS dashboard, click "Add New Service"
2. Select "Gmail"
3. Configure the service:
   - **Service Name**: `RekhaSutra Gmail SMTP`
   - **From Name**: `RekhaSutra Team`
   - **From Email**: Your Gmail address (e.g., `your-email@gmail.com`)
   - **Gmail Username**: Your Gmail address
   - **Gmail Password**: Use the App Password (16 characters, no spaces)

4. Test the service connection
5. Save the service and copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 4: Create Email Template

1. Click "Email Templates" → "Create New Template"
2. Template Configuration:

### Template Name: `payment_instructions`

### Subject Line:
```
💳 Payment Details - {{service_type}} Consultation ({{booking_id}})
```

### Email Body (HTML):
```html
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
                Dear {{to_name}},
            </div>
            
            <p>Thank you for booking a consultation with RekhaSutra! Here are your complete payment details:</p>
            
            <div class="section booking-details">
                <h3>📋 Booking Details</h3>
                <p><strong>Booking ID:</strong> <span class="booking-id">{{booking_id}}</span></p>
                <p><strong>Service:</strong> {{service_type}}</p>
                <p><strong>Duration:</strong> {{service_duration}}</p>
                <p><strong>Amount:</strong> <span class="amount-highlight">₹{{service_price}}</span></p>
                <p><strong>Booked on:</strong> {{booking_date}}</p>
            </div>
            
            <div class="section customer-details">
                <h3>👤 Customer Details</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Email:</strong> {{customer_email}}</p>
                <p><strong>Phone:</strong> {{customer_phone}}</p>
            </div>
            
            <div class="section payment-section">
                <h3>💳 Payment Instructions</h3>
                <div class="highlight-box">
                    ⚠️ IMPORTANT: Complete payment within 24 hours to confirm your booking
                </div>
                
                <p><strong>Step 1:</strong> Open any UPI app (PhonePe, Google Pay, Paytm, etc.)</p>
                <p><strong>Step 2:</strong> Send money to this UPI ID:</p>
                
                <div class="upi-highlight">
                    UPI ID: {{upi_id}}
                </div>
                
                <p><strong>Step 3:</strong> Enter amount: <span class="amount-highlight">₹{{payment_amount}}</span></p>
                <p><strong>Step 4:</strong> Add reference: <span class="booking-id">{{booking_id}}</span></p>
                <p><strong>Step 5:</strong> Complete the payment</p>
                <p><strong>Step 6:</strong> Take a screenshot of payment confirmation</p>
                <p><strong>Step 7:</strong> WhatsApp the screenshot to: <strong>{{business_whatsapp}}</strong></p>
            </div>
            
            <div class="section next-steps">
                <h3>📞 What Happens Next?</h3>
                <ul>
                    <li><strong>Payment Verification:</strong> We'll verify your payment within 2 hours</li>
                    <li><strong>Confirmation Call:</strong> You'll receive a confirmation call within 24 hours</li>
                    <li><strong>Session Scheduling:</strong> Our expert will contact you to schedule your {{service_type}}</li>
                    <li><strong>Session Duration:</strong> {{service_duration}} of personalized consultation</li>
                    <li><strong>Booking Reference:</strong> Keep this email and booking ID handy</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3>📞 Need Help?</h3>
                <div class="contact-item">📱 WhatsApp: {{business_whatsapp}}</div>
                <div class="contact-item">📧 Email: {{business_email}}</div>
                <div class="contact-item">🌐 Website: {{website}}</div>
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
```

3. Save the template and copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 5: Get Public Key

1. Go to "Account" → "General" in EmailJS dashboard
2. Copy your **Public Key** (looks like: `user_xxxxxxxxxxxxxxxx`)

## Step 6: Update Environment Variables

Replace the demo values in your `.env` file with actual values:

```env
# EmailJS Configuration for Gmail SMTP
REACT_APP_EMAILJS_SERVICE_ID=service_your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=user_your_actual_public_key

# Gmail SMTP Configuration (for reference)
REACT_APP_GMAIL_USER=your-business-email@gmail.com
REACT_APP_GMAIL_APP_PASSWORD=your-16-char-app-password

# Payment Configuration
REACT_APP_UPI_ID=your-actual-upi-id@paytm
REACT_APP_BUSINESS_NAME=RekhaSutra Astrology Services
```

## Step 7: Test the Email System

1. **Restart your React server:**
   ```bash
   npm start
   ```

2. **Test the booking flow:**
   - Go to `/consultation` page
   - Select a consultation type
   - Fill in your personal email address
   - Click "Get Payment Details"
   - Check your email inbox (and spam folder)

## Step 8: Verify Email Template Variables

Make sure these variables are working in your template:
- `{{to_name}}` - Customer name
- `{{booking_id}}` - Unique booking reference
- `{{service_type}}` - Video Call/Audio Call/Live Chat
- `{{service_duration}}` - Session duration
- `{{service_price}}` - Amount to pay
- `{{customer_phone}}` - Customer phone number
- `{{upi_id}}` - Your UPI ID for payments
- `{{booking_date}}` - Current date and time

## Troubleshooting

### Email Not Sending:
1. **Check EmailJS Dashboard:**
   - Go to EmailJS dashboard → Statistics
   - Look for failed/successful sends
   - Check error messages

2. **Gmail App Password Issues:**
   - Ensure 2FA is enabled on Gmail
   - Generate a new App Password
   - Use the App Password (not regular Gmail password)
   - Remove any spaces from the App Password

3. **Service Configuration:**
   - Test the Gmail service in EmailJS dashboard
   - Make sure "From Email" matches your Gmail address
   - Verify all credentials are correct

### Template Issues:
1. **Variables not showing:**
   - Check variable names match exactly (case-sensitive)
   - Test template in EmailJS dashboard
   - Ensure template is published/active

2. **Formatting Problems:**
   - Test with plain text template first
   - Gradually add HTML styling
   - Use EmailJS template editor preview

### Common Errors:
```
Error: Invalid service ID
→ Check REACT_APP_EMAILJS_SERVICE_ID in .env

Error: Template not found
→ Check REACT_APP_EMAILJS_TEMPLATE_ID in .env

Error: Unauthorized
→ Check REACT_APP_EMAILJS_PUBLIC_KEY in .env
```

## Security Best Practices

1. **Environment Variables:**
   - Never commit real API keys to version control
   - Use `.env.local` for local testing
   - Use environment-specific configurations

2. **Rate Limiting:**
   - EmailJS free tier: 200 emails/month
   - Monitor usage in dashboard
   - Implement client-side rate limiting

3. **Email Validation:**
   - Validate email format before sending
   - Handle failures gracefully
   - Provide fallback options

## Production Checklist

- [ ] Gmail App Password generated and tested
- [ ] EmailJS service configured and tested
- [ ] Email template created and tested
- [ ] Environment variables updated with real values
- [ ] UPI ID updated with your actual payment details
- [ ] Test booking flow end-to-end
- [ ] Check email delivery to multiple email providers
- [ ] Verify payment instructions are clear and accurate
- [ ] Set up email monitoring/logging

## Email Template Features

✅ **Professional Design:** Clean, responsive HTML template  
✅ **Clear Payment Instructions:** Step-by-step UPI payment guide  
✅ **Booking Reference:** Unique ID for tracking  
✅ **Contact Information:** WhatsApp and email support  
✅ **Brand Consistency:** RekhaSutra colors and styling  
✅ **Mobile Friendly:** Responsive design for all devices  

Your Gmail SMTP email system is now ready to send professional payment instructions! 🚀
