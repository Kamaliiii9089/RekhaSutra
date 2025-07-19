@echo off
echo 🔮 RekhaSutra - Palmistry ^& Astrology Platform Setup 🔮
echo ==================================================

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo ✅ Dependencies installed successfully
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Check if .env file exists
if not exist ".env" (
    echo ❌ .env file not found. Creating from template...
    (
        echo # Clerk Configuration
        echo REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
        echo CLERK_SECRET_KEY=sk_test_your_secret_key_here
    ) > .env
    echo ✅ .env file created
)

REM Check if Clerk keys are configured
findstr "your_publishable_key_here" .env >nul
if %ERRORLEVEL% EQU 0 (
    echo ⚠️  Please configure your Clerk API keys in .env file:
    echo    1. Go to https://dashboard.clerk.dev
    echo    2. Create a new application
    echo    3. Copy your API keys
    echo    4. Replace the placeholders in .env file
    echo.
    echo 📖 For detailed setup instructions, see CLERK_SETUP_GUIDE.md
) else (
    echo ✅ Clerk keys appear to be configured
)

echo.
echo 🚀 Setup completed! Next steps:
echo    1. Configure Clerk API keys (if not done)
echo    2. Run 'npm start' to start the development server
echo    3. Visit http://localhost:3000
echo.
echo 📚 Documentation:
echo    - Setup Guide: CLERK_SETUP_GUIDE.md
echo    - Project README: README.md
echo.
echo ✨ Happy coding! ✨
pause
