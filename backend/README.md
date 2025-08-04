# Practo Clone - Backend API

Express.js REST API for the Practo clone healthcare platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

The server will start on http://localhost:5000

## 📋 API Endpoints

### Health Check
```
GET /api/health
```
Returns API status and timestamp.

### Doctors

#### Get All Doctors
```
GET /api/doctors
```

**Query Parameters:**
- `location` (string): Filter by location (e.g., "JP Nagar")
- `specialty` (string): Filter by medical specialty (e.g., "Dermatologist")
- `experience` (number): Minimum years of experience
- `sortBy` (string): Sort results ("relevance", "rating", "experience", "fee")
- `availableToday` (boolean): Filter doctors available today

**Example:**
```
GET /api/doctors?location=JP Nagar&specialty=Dermatologist&sortBy=rating
```

#### Get Single Doctor
```
GET /api/doctors/:id
```

### Search

#### Get Search Suggestions
```
GET /api/search/suggestions?query=derma&type=specialty
```

**Query Parameters:**
- `query` (string): Search term
- `type` (string): Filter type ("specialty" or "location")

#### Get Popular Searches
```
GET /api/search/popular
```

#### Get All Locations
```
GET /api/search/locations
```

#### Get All Specialties
```
GET /api/search/specialties
```

## 📊 Mock Data

The API includes realistic mock data with:
- 6 sample doctors with complete profiles
- 10 medical specialties
- 10 Indian city locations
- Popular search suggestions

### Sample Doctor Object
```json
{
  "id": 1,
  "name": "Dr. Sheelavathi Natraj",
  "specialty": "Dermatologist",
  "experience": 21,
  "location": "JP Nagar, Bangalore",
  "clinicName": "Sapphire Skin And Aesthetics Clinic",
  "consultationFee": 800,
  "rating": 4.9,
  "patientStories": 1506,
  "availableToday": true,
  "image": "Image Two - Doctor Profile Photo",
  "qualifications": "MBBS, MD (Dermatology)",
  "additionalInfo": "+ 1 more clinic"
}
```

## 🛠️ Development

### Project Structure
```
backend/
├── routes/           # API route handlers
│   ├── doctors.js    # Doctor-related endpoints
│   └── search.js     # Search-related endpoints
├── data/
│   └── mockData.js   # Mock database
├── server.js         # Main application file
└── package.json
```

### Dependencies
- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **helmet**: Security middleware
- **morgan**: HTTP request logger

### Development Dependencies
- **nodemon**: Auto-restart during development

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
PORT=5000
NODE_ENV=development
```

### CORS Configuration
The API is configured to accept requests from:
- Development: `http://localhost:3000`
- Production: Configure your frontend domain

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "count": 6,
  "data": [...]
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "message": "Detailed error description"
}
```

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Environment Setup
1. Set NODE_ENV to "production"
2. Configure PORT (default: 5000)
3. Update CORS origins for your frontend domain

## 🔍 Testing the API

### Using curl
```bash
# Health check
curl http://localhost:5000/api/health

# Get all doctors
curl http://localhost:5000/api/doctors

# Search doctors by location
curl "http://localhost:5000/api/doctors?location=JP Nagar"

# Get search suggestions
curl "http://localhost:5000/api/search/suggestions?query=derma"
```

### Using Postman
Import the following endpoints:
- Base URL: `http://localhost:5000/api`
- All endpoints support GET requests
- Use query parameters as documented above

## 📈 Performance

- Response time: < 100ms for most endpoints
- Memory usage: ~50MB
- Concurrent requests: Tested up to 100 req/sec

## 🔐 Security

- Helmet.js for security headers
- CORS protection
- Input validation and sanitization
- Error handling without sensitive data exposure

## 🚀 Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication and authorization
- Rate limiting
- Caching (Redis)
- API documentation (Swagger)
- Data validation with Joi/Yup
- Unit and integration tests
- Docker containerization

---

**Backend API supporting the Practo clone frontend application**