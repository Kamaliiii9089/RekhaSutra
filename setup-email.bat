@echo off
echo =====================================
echo   RekhaSutra EmailJS Setup Helper
echo =====================================
echo.

echo This script will help you set up Gmail SMTP with EmailJS
echo for sending payment instructions to customers.
echo.

echo STEP 1: Gmail App Password Setup
echo ================================
echo 1. Go to your Gmail account settings
echo 2. Enable 2-Factor Authentication
echo 3. Generate an App Password for "Mail"
echo 4. Copy the 16-character password
echo.

echo STEP 2: EmailJS Account Setup
echo =============================
echo 1. Go to https://www.emailjs.com/
echo 2. Create a free account
echo 3. Add a Gmail service with your credentials
echo 4. Create an email template for payment instructions
echo 5. Get your Service ID, Template ID, and Public Key
echo.

echo STEP 3: Update Environment Variables
echo ===================================
echo Edit your .env file and update these values:
echo.
echo REACT_APP_EMAILJS_SERVICE_ID=your_service_id
echo REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
echo REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
echo REACT_APP_UPI_ID=your_upi_id@paytm
echo.

echo STEP 4: Test the Setup
echo ======================
echo 1. Run: npm start
echo 2. Go to /consultation page
echo 3. Fill in your email and book a consultation
echo 4. Check your email for payment details
echo.

echo For detailed instructions, see: EMAILJS_SETUP_GUIDE.md
echo.

pause
