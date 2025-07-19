# RekhaSutra - Clerk Authentication Setup Guide

## Overview
This guide will help you set up Clerk authentication for your RekhaSutra palmistry and astrology platform. The application is now fully integrated with Clerk for user management, authentication, and role-based access control.

## Prerequisites
- Node.js 16+ installed
- A Clerk account (free tier available)
- VS Code or your preferred editor

## Step 1: Create a Clerk Application

1. Go to [Clerk Dashboard](https://dashboard.clerk.dev)
2. Sign up or log in to your account
3. Click "Create Application"
4. Choose your application name: "RekhaSutra"
5. Select authentication methods:
   - ✅ Email address
   - ✅ Google (recommended)
   - ✅ GitHub (optional)
   - ✅ Phone number (optional)

## Step 2: Get Your API Keys

1. In your Clerk dashboard, go to "API Keys"
2. Copy the following keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

## Step 3: Configure Environment Variables

1. Open your `.env` file in the project root
2. Replace the placeholder values with your actual Clerk keys:

```env
# Clerk Configuration
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here

# Optional: Custom domains (for production)
REACT_APP_CLERK_DOMAIN=your-custom-domain.com
```

## Step 4: Install Dependencies

Run the following command to ensure all dependencies are installed:

```bash
npm install
```

## Step 5: Start the Development Server

```bash
npm start
```

Your application will open at `http://localhost:3000`

## Step 6: Test Authentication

1. **Sign Up Process:**
   - Click "Sign Up" in the navigation
   - Create a new account using email or social login
   - Verify your email if required

2. **Sign In Process:**
   - Click "Sign In" in the navigation
   - Use your credentials to log in

3. **User Dashboard:**
   - After login, you'll be redirected to the user dashboard
   - Access palm reading and consultation features

## Step 7: Configure User Roles (Admin Setup)

### Setting Up Admin Users

1. In Clerk Dashboard, go to "Users"
2. Find your user account
3. Click on your user
4. Go to "Metadata" tab
5. Add to "Public Metadata":
```json
{
  "role": "admin"
}
```

### Setting Up Astrologer Users

For astrologer accounts:
```json
{
  "role": "astrologer"
}
```

### Default User Role
Regular users don't need any metadata - they default to "user" role.

## Step 8: Configure Webhooks (Optional but Recommended)

1. In Clerk Dashboard, go to "Webhooks"
2. Add endpoint: `https://your-domain.com/api/webhooks/clerk`
3. Select events:
   - user.created
   - user.updated
   - user.deleted

## Features Implemented

### 🔐 Authentication Features
- ✅ Email/Password login
- ✅ Social login (Google, GitHub)
- ✅ User registration
- ✅ Email verification
- ✅ Password reset
- ✅ User profile management

### 👥 Role-Based Access Control
- ✅ **User Role**: Access to palm reading, consultations, profile
- ✅ **Astrologer Role**: Access to astrologer dashboard, consultation management
- ✅ **Admin Role**: Access to admin dashboard, user management, system analytics

### 🎨 UI/UX Features
- ✅ Mystical themed authentication forms
- ✅ Smooth scrolling with Lenis.js
- ✅ Responsive design
- ✅ Loading states and animations
- ✅ User avatar and profile display

### 📱 Dashboard Features
- ✅ **User Dashboard**: Consultation history, palm readings, profile settings
- ✅ **Astrologer Dashboard**: Client management, earnings, schedule
- ✅ **Admin Dashboard**: User management, analytics, system overview

## Customization Options

### 1. Clerk Appearance Customization

In your Clerk Dashboard, go to "Customization" to match your brand:
- Upload your logo
- Set primary colors to match your purple/blue theme
- Customize button styles
- Add custom CSS

### 2. Adding More Authentication Methods

In Clerk Dashboard, go to "Authentication" → "Social Login":
- Facebook
- Twitter
- Discord
- Apple
- Microsoft

### 3. Email Templates

Customize email templates in Clerk Dashboard:
- Welcome emails
- Password reset emails
- Email verification

## Troubleshooting

### Common Issues:

1. **"Clerk not configured" error:**
   - Check your `.env` file has correct API keys
   - Restart your development server after adding keys

2. **Authentication not working:**
   - Verify your publishable key starts with `pk_test_`
   - Check if your domain is configured correctly in Clerk

3. **Role-based redirects not working:**
   - Ensure user metadata is set correctly in Clerk Dashboard
   - Check the `useUserRole` hook is working

4. **Smooth scrolling issues:**
   - Verify Lenis is imported correctly
   - Check if there are any console errors

### Debug Steps:

1. Check browser console for errors
2. Verify API keys in `.env` file
3. Check Clerk Dashboard for user status
4. Test in incognito mode to avoid cache issues

## Production Deployment

### 1. Environment Setup
```env
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_live_your_production_key
CLERK_SECRET_KEY=sk_live_your_production_secret
```

### 2. Domain Configuration
1. In Clerk Dashboard, go to "Domains"
2. Add your production domain
3. Update your environment variables

### 3. Security Checklist
- ✅ Use production API keys
- ✅ Enable HTTPS
- ✅ Configure CORS properly
- ✅ Set up proper webhook endpoints
- ✅ Review user permissions

## Next Steps

1. **Payment Integration**: Add Stripe/Razorpay for consultation payments
2. **Real-time Chat**: Implement live consultation features
3. **AI Integration**: Add actual palm reading AI model
4. **Mobile App**: React Native version with same authentication
5. **Analytics**: Advanced user behavior tracking

## Support

If you encounter any issues:
1. Check this guide first
2. Review Clerk documentation: https://clerk.dev/docs
3. Check the project's GitHub issues
4. Contact the development team

## Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- Regularly rotate your API keys
- Monitor user activity in Clerk Dashboard
- Set up proper webhook verification

---

**Your RekhaSutra platform is now fully configured with professional authentication! 🔮✨**
