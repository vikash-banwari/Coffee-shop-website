# Practo Clone - Healthcare Platform

A modern, responsive healthcare platform built with Next.js (frontend) and Express.js (backend), replicating the core functionality of Practo's doctor discovery and booking system.

## 🚀 Features

### Frontend (Next.js)
- **Responsive Homepage** - Modern landing page with search functionality
- **Doctor Listing Page** - Comprehensive doctor search with filters
- **Advanced Search** - Location-based and specialty-based doctor discovery
- **Filter System** - Sort by experience, fees, availability, and more
- **Mobile-First Design** - Fully responsive across all devices
- **Modern UI** - Clean, professional design with Tailwind CSS

### Backend (Express.js)
- **RESTful API** - Well-structured API endpoints
- **Doctor Search** - Advanced filtering and sorting capabilities
- **Search Suggestions** - Autocomplete functionality for specialties
- **Location Services** - Area and city-based search
- **Mock Data** - Comprehensive fake data for testing

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Components** - Reusable, modular components

### Backend
- **Express.js** - Fast, minimalist web framework
- **Node.js** - JavaScript runtime
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
practo-clone/
├── app/                    # Next.js App Router
│   ├── doctors/           # Doctor listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── SearchSection.tsx  # Hero search section
│   ├── Footer.tsx         # Footer component
│   ├── DoctorCard.tsx     # Individual doctor card
│   └── DoctorFilters.tsx  # Filtering component
├── backend/               # Express.js backend
│   ├── routes/           # API route handlers
│   │   ├── doctors.js    # Doctor-related endpoints
│   │   └── search.js     # Search suggestions
│   ├── data/             # Mock data
│   │   └── mockData.js   # Doctors, specialties, locations
│   ├── package.json      # Backend dependencies
│   └── server.js         # Express server
├── package.json          # Frontend dependencies
├── tailwind.config.js    # Tailwind configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd practo-clone
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Running the Application

1. **Start the backend server** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:3001`

2. **Start the frontend development server** (Terminal 2)
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 📡 API Endpoints

### Doctors
- `GET /api/doctors` - Get all doctors with filtering
- `GET /api/doctors/:id` - Get specific doctor details
- `GET /api/doctors/specialty/:specialty` - Get doctors by specialty
- `GET /api/doctors/available/today` - Get doctors available today

### Search Suggestions
- `GET /api/search-suggestions` - Get search suggestions
- `GET /api/search-suggestions/specialties` - Get all specialties
- `GET /api/search-suggestions/locations` - Get all locations
- `GET /api/search-suggestions/popular` - Get popular searches

### Example API Calls

```bash
# Get dermatologists in JP Nagar
curl "http://localhost:3001/api/doctors?location=jp-nagar&specialty=dermatologist"

# Get doctors available today
curl "http://localhost:3001/api/doctors/available/today"

# Get search suggestions
curl "http://localhost:3001/api/search-suggestions?query=derm"
```

## 🎨 Design Features

### Homepage
- **Hero Section** - Eye-catching banner with search functionality
- **Location Search** - Dropdown for city selection
- **Specialty Search** - Search doctors by specialty or name
- **Popular Searches** - Quick access to common specialties
- **Animated Elements** - Subtle animations and floating elements
- **Service Cards** - Healthcare service options in footer

### Doctor Listing Page
- **Search Bar** - Persistent search with location and specialty
- **Filter Sidebar** - Advanced filtering options
  - Gender filter
  - Experience range
  - Patient stories count
  - Availability status
- **Doctor Cards** - Comprehensive doctor information
  - Profile information
  - Clinic details
  - Consultation fees
  - Ratings and reviews
  - Availability status
  - Action buttons
- **Sorting Options** - Sort by relevance, experience, fees
- **Responsive Design** - Works on all screen sizes

## 🔧 Customization

### Adding New Doctors
Edit `backend/data/mockData.js` and add new doctor objects to the `doctors` array:

```javascript
{
  id: 'doc_new',
  name: 'Dr. New Doctor',
  specialty: 'Cardiologist',
  experience: 10,
  location: 'New Area,City',
  clinicName: 'Heart Care Clinic',
  consultationFee: 800,
  rating: 95,
  patientStories: 500,
  availableToday: true,
  gender: 'Male'
}
```

### Adding New Specialties
Add to the `specialties` array in `mockData.js`:

```javascript
{
  id: 'spec_new',
  name: 'New Specialty',
  searchTerms: ['specialty', 'medical field'],
  description: 'Description of the specialty',
  commonConditions: ['Condition 1', 'Condition 2']
}
```

### Styling Changes
- Edit `app/globals.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update component styles directly in JSX files

## 🖼 Image Placeholders

The following areas are marked for image insertion:

1. **Homepage Hero Background** - Replace placeholder emojis in `SearchSection.tsx`
   - Location: Lines with "Image One" comment
   - Recommended: Medical illustrations, doctor graphics

2. **Doctor Profile Images** - Replace placeholder in `DoctorCard.tsx`
   - Location: Lines with "Image Two" comment  
   - Recommended: Professional doctor photos

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
npm run start
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
cd backend
npm start
```

### Environment Variables
Create `.env.local` for frontend:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## ⚠️ Important Notes

- This is a **clone/replica** for educational purposes
- Replace all placeholder images with appropriate medical graphics
- The mock data is for demonstration only
- No real booking functionality is implemented
- For production use, implement proper authentication and database integration

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend is running on port 3001
   - Check CORS configuration in `backend/server.js`

2. **API Connection Failed**
   - Verify backend server is running
   - Check if firewall is blocking port 3001

3. **Styling Issues**
   - Run `npm run dev` to ensure Tailwind is compiling
   - Check browser console for CSS errors

4. **Build Errors**
   - Clear Next.js cache: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

## 📞 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the API documentation
3. Check browser developer console for errors
4. Ensure all dependencies are properly installed

---

**Made with ❤️ for healthcare technology**
