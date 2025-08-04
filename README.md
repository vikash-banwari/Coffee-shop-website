# Practo Clone - Healthcare Platform

A modern healthcare platform built with Next.js (frontend) and Express.js (backend) that replicates the core functionality of Practo's doctor booking system.

## 🌟 Features

### Frontend (Next.js)
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Homepage**: Hero section with search functionality and popular medical services
- **Doctor Listing**: Advanced filtering and sorting of doctors
- **Search**: Real-time search with suggestions and location-based filtering
- **Modern UI**: Clean, professional design with smooth animations

### Backend (Express.js)
- **RESTful API**: Well-structured API endpoints for doctors and search
- **Mock Data**: Comprehensive mock dataset with realistic doctor information
- **Filtering**: Advanced filtering by location, specialty, experience, and availability
- **Search Suggestions**: Dynamic search suggestions for specialties and locations
- **Error Handling**: Robust error handling and validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd practo-clone
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run install:all
   ```

3. **Start both servers in development mode**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Individual Setup

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📁 Project Structure

```
practo-clone/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Layout/      # Layout components (Navbar, Footer)
│   │   │   ├── Search/      # Search-related components
│   │   │   ├── Doctor/      # Doctor card and related components
│   │   │   └── Filters/     # Filter sidebar components
│   │   ├── pages/           # Next.js pages
│   │   ├── styles/          # Global styles and Tailwind CSS
│   │   └── lib/             # Utility functions and API calls
│   ├── public/              # Static assets
│   └── package.json
├── backend/                 # Express.js backend application
│   ├── routes/              # API route handlers
│   ├── data/                # Mock data and database logic
│   ├── server.js            # Main server file
│   └── package.json
└── README.md
```

## 🎯 API Endpoints

### Doctors API
- `GET /api/doctors` - Get all doctors with optional filtering
  - Query params: `location`, `specialty`, `experience`, `sortBy`, `availableToday`
- `GET /api/doctors/:id` - Get single doctor by ID

### Search API
- `GET /api/search/suggestions` - Get search suggestions
- `GET /api/search/popular` - Get popular searches
- `GET /api/search/locations` - Get all available locations
- `GET /api/search/specialties` - Get all medical specialties

### Health Check
- `GET /api/health` - API health status

## 🎨 Design Features

### Homepage (Image One Reference)
- Hero section with gradient background
- Animated decorative elements
- Prominent search bar with location dropdown
- Popular medical specialties grid
- Service options in footer

### Doctor Listing (Image Two Reference)
- Professional doctor cards with photos
- Detailed information: experience, ratings, location
- "Available Today" indicators
- Action buttons: "Book Clinic Visit" and "Contact Clinic"
- Advanced filtering sidebar
- Responsive mobile design

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Nodemon** - Development auto-restart

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px+): Full sidebar and grid layouts
- **Tablet** (768px-1024px): Adapted layouts with collapsible elements
- **Mobile** (320px-768px): Mobile-optimized navigation and modal filters

## 🔧 Development Scripts

```bash
# Run both frontend and backend
npm run dev

# Install all dependencies
npm run install:all

# Build frontend for production
npm run build

# Start production servers
npm run start

# Individual commands
npm run dev:frontend    # Start only frontend
npm run dev:backend     # Start only backend
```

## 🌐 Environment Configuration

### Frontend
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend
Create `backend/.env`:
```env
PORT=5000
NODE_ENV=development
```

## 🚀 Deployment

### Frontend Deployment
1. Build the application: `cd frontend && npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Set environment variables for production API URL

### Backend Deployment
1. Deploy to Heroku, Railway, or your preferred platform
2. Set PORT environment variable
3. Update CORS origins for production domain

## 📋 Features Checklist

- ✅ Responsive homepage with search functionality
- ✅ Doctor listing page with filters and sorting
- ✅ Advanced search with location and specialty filtering
- ✅ Professional UI matching Practo's design language
- ✅ Mobile-optimized navigation and layouts
- ✅ RESTful API with comprehensive endpoints
- ✅ Mock data with realistic doctor information
- ✅ Error handling and loading states
- ✅ TypeScript for type safety
- ✅ Modern development setup with hot reload

## 🔮 Future Enhancements

- User authentication and profiles
- Booking system with calendar integration
- Payment gateway integration
- Real-time chat/video consultation
- Email notifications
- Admin dashboard for doctors
- Integration with real medical databases
- Advanced search with AI-powered recommendations

## 📝 Notes for Development

### Image Placeholders
The following placeholders need to be replaced with actual images:
- **"Image One"**: Homepage hero section illustrations
- **"Image Two"**: Doctor profile photos in listing cards

### Customization Points
- Update color scheme in `tailwind.config.js`
- Modify API endpoints in `frontend/src/lib/api.ts`
- Add new filter options in `FilterSidebar.tsx`
- Extend mock data in `backend/data/mockData.js`

## 📄 License

This is an educational project created for internship purposes. Please ensure compliance with healthcare regulations if adapting for real-world use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Created for internship project - Demonstrating full-stack development skills with modern web technologies**
