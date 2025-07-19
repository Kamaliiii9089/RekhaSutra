#!/bin/bash

# RekhaSutra Quick Setup Script
echo "🔮 RekhaSutra - Palmistry & Astrology Platform Setup 🔮"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found. Creating from template..."
    cp .env.example .env 2>/dev/null || echo "Creating new .env file..."
    cat > .env << EOL
# Clerk Configuration
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
EOL
    echo "✅ .env file created"
fi

# Check if Clerk keys are configured
if grep -q "your_publishable_key_here" .env; then
    echo "⚠️  Please configure your Clerk API keys in .env file:"
    echo "   1. Go to https://dashboard.clerk.dev"
    echo "   2. Create a new application"
    echo "   3. Copy your API keys"
    echo "   4. Replace the placeholders in .env file"
    echo ""
    echo "📖 For detailed setup instructions, see CLERK_SETUP_GUIDE.md"
else
    echo "✅ Clerk keys appear to be configured"
fi

echo ""
echo "🚀 Setup completed! Next steps:"
echo "   1. Configure Clerk API keys (if not done)"
echo "   2. Run 'npm start' to start the development server"
echo "   3. Visit http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "   - Setup Guide: CLERK_SETUP_GUIDE.md"
echo "   - Project README: README.md"
echo ""
echo "✨ Happy coding! ✨"
