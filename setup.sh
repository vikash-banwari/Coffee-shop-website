#!/bin/bash

# Practo Clone Setup Script
echo "🏥 Setting up Practo Clone Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "Please upgrade Node.js and try again."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

echo "✅ Frontend dependencies installed"

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

echo "✅ Backend dependencies installed"
cd ..

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "🚀 To start the application:"
echo ""
echo "1. Start the backend server (Terminal 1):"
echo "   cd backend && npm run dev"
echo ""
echo "2. Start the frontend server (Terminal 2):"
echo "   npm run dev"
echo ""
echo "3. Open your browser and navigate to:"
echo "   http://localhost:3000"
echo ""
echo "📡 Backend API will be available at:"
echo "   http://localhost:3001"
echo ""
echo "💡 Check the README.md for detailed instructions and API documentation."