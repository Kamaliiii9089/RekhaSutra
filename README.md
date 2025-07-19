# 🔮 RekhaSutra - Modern Palmistry & Astrology Platform

A comprehensive digital platform for palmistry, astrology, and spiritual guidance featuring AI-powered palm readings, live consultations, and mystical experiences.

![RekhaSutra Platform](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=RekhaSutra+Platform)

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication** powered by Clerk
- **Role-Based Access Control** (User, Astrologer, Admin)
- **Social Login** (Google, GitHub)
- **Email Verification** and password reset
- **User Profile Management** with avatars

### 🤚 Palm Reading Services
- **AI-Powered Palm Analysis** with detailed reports
- **Interactive Palm Mapping** with life lines visualization
- **Photo Upload** with drag-and-drop interface
- **Instant Results** with mystical presentation

### 🌟 Astrology Services
- **Birth Chart Generation** with planetary positions
- **Daily Horoscopes** for all zodiac signs
- **Compatibility Analysis** between signs
- **Personalized Predictions** based on birth data

### 💬 Consultation Platform
- **Live Chat** with certified astrologers
- **Video Consultations** for detailed readings
- **Appointment Scheduling** with calendar integration
- **Session History** and recordings

### 🎨 User Experience
- **Mystical Design** with celestial animations
- **Smooth Scrolling** powered by Lenis.js
- **Responsive Design** for all devices
- **Dark Theme** with purple/blue gradients
- **Interactive Elements** with Framer Motion

### 📊 Dashboard Features

#### 👤 User Dashboard
- Consultation history and upcoming appointments
- Palm reading results archive
- Profile settings and preferences
- Spiritual guidance library

#### 🔮 Astrologer Dashboard
- Client management and consultation queue
- Earnings and performance analytics
- Schedule management
- Rating and review system

#### 🛠️ Admin Dashboard
- User management with role assignment
- Platform analytics and insights
- Astrologer verification system
- Content and service management

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn package manager
- Clerk account (free tier available)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/rekhasutra.git
cd rekhasutra
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
```bash
# Create .env file and add your Clerk keys
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
```

4. **Start Development Server**
```bash
npm start
```

5. **Open Browser**
Visit `http://localhost:3000` to see the application.

### Quick Setup Scripts

For automated setup, run:
- **Windows**: `setup.bat`
- **Linux/Mac**: `./setup.sh`

## 📖 Documentation

- **[Clerk Setup Guide](CLERK_SETUP_GUIDE.md)** - Complete authentication setup
- **[API Documentation](docs/API.md)** - Backend API reference
- **[Component Guide](docs/COMPONENTS.md)** - UI component documentation

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library
- **Tailwind CSS 3.2.7** - Utility-first styling
- **Framer Motion 10.0.0** - Advanced animations
- **React Router DOM 6.8.0** - Client-side routing
- **Lenis 1.0.45** - Smooth scrolling

### Authentication
- **Clerk** - Complete authentication solution
- **Role-based access control**
- **Social login integration**

### UI Components
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form management
- **React Dropzone** - File uploads
- **React Hot Toast** - Notifications

### State Management
- **Zustand** - Lightweight state management
- **React Context** - Component state sharing

## 🎯 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CelestialClock.jsx
│   ├── ConstellationVisualizer.jsx
│   ├── MysticalParticles.jsx
│   ├── Navbar.jsx
│   ├── TarotCards.jsx
│   └── UserManagement.jsx
├── pages/              # Main application pages
│   ├── Home.jsx
│   ├── Auth.jsx
│   ├── Astrology.jsx
│   ├── PalmReading.jsx
│   ├── Consultation.jsx
│   ├── UserDashboard.jsx
│   ├── AstrologerDashboard.jsx
│   └── AdminDashboard.jsx
├── hooks/              # Custom React hooks
│   └── useLenis.js
└── utils/              # Utility functions
    ├── smoothScroll.js
    └── userUtils.js
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Clerk Authentication
REACT_APP_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# API Configuration (Optional)
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development

# Analytics (Optional)
REACT_APP_GOOGLE_ANALYTICS_ID=GA-XXXXXXX
```

### Clerk Dashboard Setup

1. Create account at [Clerk Dashboard](https://dashboard.clerk.dev)
2. Create new application
3. Configure authentication methods
4. Set up user roles in metadata
5. Copy API keys to environment variables

## 🎨 Customization

### Theme Configuration

The application uses a mystical dark theme with purple/blue gradients. Customize in `src/index.css`:

```css
:root {
  --primary-purple: #7c3aed;
  --primary-blue: #3b82f6;
  --accent-gold: #fbbf24;
  --dark-bg: #0f0f23;
  --card-bg: rgba(255, 255, 255, 0.05);
}
```

### Animation Settings

Modify smooth scrolling behavior in `src/hooks/useLenis.js`:

```javascript
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  normalizeWheel: true
});
```

## 🔒 Security Features

- **Secure Authentication** with Clerk
- **Protected Routes** based on user roles
- **Input Validation** on all forms
- **CSRF Protection** on API endpoints
- **Rate Limiting** for API calls
- **Secure File Uploads** with validation

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Screen**: 1440px+

## 🚀 Deployment

### Production Build

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the guides in `/docs`
- **Issues**: Create an issue on GitHub
- **Email**: support@rekhasutra.com
- **Discord**: Join our community server

## 🙏 Acknowledgments

- **Clerk** for authentication services
- **Tailwind CSS** for the styling framework
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Lucide** for beautiful icons

## 🔗 Links

- **Live Demo**: [https://rekhasutra.vercel.app](https://rekhasutra.vercel.app)
- **Documentation**: [https://docs.rekhasutra.com](https://docs.rekhasutra.com)
- **GitHub**: [https://github.com/yourusername/rekhasutra](https://github.com/yourusername/rekhasutra)

---

**Made with ❤️ and ✨ for the mystical community**
