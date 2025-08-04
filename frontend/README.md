# Practo Clone - Frontend

Modern React/Next.js frontend application for the Practo clone healthcare platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at http://localhost:3000

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout/         # Layout components
│   │   │   ├── Navbar.tsx  # Main navigation
│   │   │   ├── Footer.tsx  # Footer with services
│   │   │   └── Layout.tsx  # Layout wrapper
│   │   ├── Search/         # Search functionality
│   │   │   └── SearchBar.tsx
│   │   ├── Doctor/         # Doctor-related components
│   │   │   └── DoctorCard.tsx
│   │   └── Filters/        # Filter components
│   │       └── FilterSidebar.tsx
│   ├── pages/              # Next.js pages
│   │   ├── _app.tsx        # App wrapper
│   │   ├── index.tsx       # Homepage
│   │   └── doctors.tsx     # Doctor listing page
│   ├── styles/             # CSS files
│   │   └── globals.css     # Global styles with Tailwind
│   └── lib/                # Utilities
│       └── api.ts          # API functions
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Pages

### Homepage (`/`)
- Hero section with animated background elements
- Main search bar with location dropdown
- Popular medical specialties grid
- Service features section
- Footer with quick actions

### Doctor Listing (`/doctors`)
- Search results with filtering
- Advanced filter sidebar
- Doctor cards with detailed information
- Sort options (relevance, rating, experience, fee)
- Mobile-responsive design with modal filters

## 🧩 Components

### Layout Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Service grid and footer links
- **Layout**: Main wrapper component

### Search Components
- **SearchBar**: Advanced search with suggestions and location dropdown

### Doctor Components
- **DoctorCard**: Professional doctor cards with booking actions

### Filter Components
- **FilterSidebar**: Advanced filtering with collapsible sections

## 🎯 Features

### Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Tablet**: Adapted layouts for medium screens
- **Desktop**: Full-featured layout with sidebars

### Search Functionality
- Real-time search suggestions
- Location-based filtering
- Specialty-based filtering
- Popular search shortcuts

### Advanced Filtering
- Gender selection
- Experience ranges
- Availability filters
- Patient stories filter
- Clear all functionality

### User Experience
- Loading states with skeleton screens
- Error handling with retry options
- Smooth animations and transitions
- Accessibility-friendly design

## 🛠️ Technology Stack

- **Next.js 14**: React framework with SSR/SSG
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Comprehensive icon library
- **Axios**: HTTP client for API requests

## 🎨 Design System

### Colors
```css
--practo-blue: #2563eb
--practo-dark-blue: #1e40af
--practo-light-blue: #dbeafe
--practo-green: #16a34a
--practo-orange: #ea580c
```

### Typography
- **Font**: Inter (imported from Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Components Classes
```css
.btn-primary      /* Primary button styling */
.btn-secondary    /* Secondary button styling */
.card            /* Card container with shadow */
.input-field     /* Input field styling */
```

## 📱 Responsive Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Next.js Configuration
- API proxy to backend server
- Optimized builds with SWC
- TypeScript support

### Tailwind Configuration
- Custom color palette
- Extended animations
- Custom utility classes

## 🚀 Development

### Development Server
```bash
npm run dev
```
- Hot reload enabled
- TypeScript compilation
- Tailwind CSS compilation

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📦 Dependencies

### Main Dependencies
- `next`: Next.js framework
- `react`: React library
- `react-dom`: React DOM renderer
- `typescript`: TypeScript support
- `tailwindcss`: Utility CSS framework
- `axios`: HTTP client
- `react-icons`: Icon library

### Development Dependencies
- `@types/*`: TypeScript type definitions
- `eslint`: Code linting
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes

## 🎯 API Integration

### API Functions
Located in `src/lib/api.ts`:
- `doctorsAPI.getDoctors()`: Fetch doctors with filters
- `doctorsAPI.getDoctor()`: Get single doctor
- `searchAPI.getSuggestions()`: Get search suggestions
- `searchAPI.getPopularSearches()`: Get popular searches

### Error Handling
- Automatic retry on network errors
- User-friendly error messages
- Loading states for better UX

## 🎨 Styling Guidelines

### Component Structure
```tsx
<div className="container mx-auto px-4">
  <div className="card p-6">
    <h2 className="text-xl font-semibold mb-4">Title</h2>
    <p className="text-gray-600">Content</p>
  </div>
</div>
```

### Responsive Classes
```css
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
className="hidden lg:block"  /* Desktop only */
className="lg:hidden"        /* Mobile/tablet only */
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

### Build Optimization
- Automatic code splitting
- Image optimization
- Static generation where possible
- Bundle analysis available

## 🔍 SEO & Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Meta tags for social sharing
- Core Web Vitals optimization
- Lighthouse score: 90+

## 🧪 Testing

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Search functionality works
- [ ] Doctor listing filters work
- [ ] Mobile navigation functions
- [ ] All buttons and links work
- [ ] Responsive design on all screen sizes

### Future Testing Setup
- Jest for unit tests
- React Testing Library for component tests
- Cypress for end-to-end tests

## 🚀 Future Enhancements

- PWA capabilities
- Dark mode support
- Internationalization (i18n)
- Advanced animations with Framer Motion
- Real-time features with WebSockets
- Offline functionality
- Performance monitoring

---

**Modern healthcare platform frontend built with Next.js and TypeScript**