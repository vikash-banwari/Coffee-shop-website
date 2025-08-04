# Practo Clone API Documentation

## Base URL
```
http://localhost:3001/api
```

## Health Check
```
GET /health
```
Returns the health status of the API server.

**Response:**
```json
{
  "status": "healthy",
  "message": "Practo Clone API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## Doctors Endpoints

### Get All Doctors
```
GET /api/doctors
```

Get a list of doctors with optional filtering and pagination.

**Query Parameters:**
- `location` (string, optional) - Filter by location (case-insensitive partial match)
- `specialty` (string, optional) - Filter by specialty (case-insensitive partial match)
- `gender` (string/array, optional) - Filter by gender ("Male", "Female")
- `experience` (string/array, optional) - Filter by experience range
  - "0-5 years"
  - "5-10 years" 
  - "10-15 years"
  - "15+ years"
- `availability` (string/array, optional) - Filter by availability
  - "Available Today"
- `sortBy` (string, optional) - Sort results by:
  - "relevance" (default)
  - "experience"
  - "fees-low-to-high"
  - "fees-high-to-low"
  - "rating"
- `page` (number, optional) - Page number for pagination (default: 1)
- `limit` (number, optional) - Number of results per page (default: 10)

**Example Request:**
```
GET /api/doctors?location=jp-nagar&specialty=dermatologist&sortBy=experience&page=1&limit=5
```

**Response:**
```json
{
  "success": true,
  "data": {
    "doctors": [
      {
        "id": "doc_001",
        "name": "Dr. Sheelavathi Natraj",
        "specialty": "Dermatologist",
        "experience": 21,
        "location": "JP Nagar,Bangalore",
        "clinicName": "Sapphire Skin And Aesthetics Clinic",
        "consultationFee": 800,
        "rating": 94,
        "patientStories": 1506,
        "availableToday": true,
        "gender": "Female",
        "qualifications": ["MBBS", "MD - Dermatology"],
        "languages": ["English", "Hindi", "Kannada"],
        "services": ["Acne Treatment", "Hair Loss Treatment"]
      }
    ],
    "pagination": {
      "current": 1,
      "total": 3,
      "count": 5,
      "totalDoctors": 15
    },
    "filters": {
      "location": "jp-nagar",
      "specialty": "dermatologist",
      "sortBy": "experience"
    }
  }
}
```

### Get Doctor by ID
```
GET /api/doctors/:id
```

Get detailed information about a specific doctor.

**Parameters:**
- `id` (string, required) - Doctor ID

**Example Request:**
```
GET /api/doctors/doc_001
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "doc_001",
    "name": "Dr. Sheelavathi Natraj",
    "specialty": "Dermatologist",
    "experience": 21,
    "location": "JP Nagar,Bangalore",
    "clinicName": "Sapphire Skin And Aesthetics Clinic",
    "consultationFee": 800,
    "rating": 94,
    "patientStories": 1506,
    "availableToday": true,
    "gender": "Female",
    "qualifications": ["MBBS", "MD - Dermatology"],
    "languages": ["English", "Hindi", "Kannada"],
    "services": ["Acne Treatment", "Hair Loss Treatment", "Skin Allergies"]
  }
}
```

### Get Doctors by Specialty
```
GET /api/doctors/specialty/:specialty
```

Get doctors filtered by a specific specialty.

**Parameters:**
- `specialty` (string, required) - Medical specialty

**Query Parameters:**
- `location` (string, optional) - Filter by location
- `sortBy` (string, optional) - Sort results

**Example Request:**
```
GET /api/doctors/specialty/dermatologist?location=bangalore
```

### Get Available Doctors
```
GET /api/doctors/available/today
```

Get doctors who are available today.

**Query Parameters:**
- `location` (string, optional) - Filter by location
- `specialty` (string, optional) - Filter by specialty

**Example Request:**
```
GET /api/doctors/available/today?location=bangalore&specialty=dermatologist
```

---

## Search Suggestions Endpoints

### Get Search Suggestions
```
GET /api/search-suggestions
```

Get search suggestions for autocomplete functionality.

**Query Parameters:**
- `query` (string, optional) - Search query for filtering suggestions
- `type` (string, optional) - Type of suggestions to return:
  - "all" (default) - All types
  - "specialties" - Medical specialties only
  - "locations" - Locations only

**Example Request:**
```
GET /api/search-suggestions?query=derm&type=specialties
```

**Response:**
```json
{
  "success": true,
  "data": {
    "suggestions": [
      {
        "id": "spec_001",
        "name": "Dermatologist",
        "type": "specialty",
        "description": "Treats skin, hair, and nail conditions"
      }
    ],
    "query": "derm",
    "type": "specialties",
    "count": 1,
    "total": 1
  }
}
```

### Get All Specialties
```
GET /api/search-suggestions/specialties
```

Get a complete list of all medical specialties.

**Response:**
```json
{
  "success": true,
  "data": {
    "specialties": [
      {
        "id": "spec_001",
        "name": "Dermatologist",
        "description": "Treats skin, hair, and nail conditions",
        "commonConditions": ["Acne", "Eczema", "Psoriasis"]
      }
    ],
    "count": 6
  }
}
```

### Get All Locations
```
GET /api/search-suggestions/locations
```

Get a complete list of all available locations.

**Query Parameters:**
- `city` (string, optional) - Filter locations by city

**Example Request:**
```
GET /api/search-suggestions/locations?city=bangalore
```

**Response:**
```json
{
  "success": true,
  "data": {
    "locations": [
      {
        "city": "Bangalore",
        "areas": ["JP Nagar", "Jayanagar", "Koramangala"]
      }
    ],
    "count": 1
  }
}
```

### Get Popular Searches
```
GET /api/search-suggestions/popular
```

Get a list of popular search terms.

**Response:**
```json
{
  "success": true,
  "data": {
    "popularSearches": [
      "Dermatologist",
      "Pediatrician",
      "Gynecologist",
      "Orthopedist"
    ],
    "count": 15
  }
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "success": false,
  "error": "Bad Request",
  "message": "Invalid request parameters"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not Found",
  "message": "The requested resource does not exist"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal Server Error", 
  "message": "Something went wrong on our end"
}
```

---

## Data Models

### Doctor Object
```json
{
  "id": "string",
  "name": "string",
  "specialty": "string",
  "experience": "number",
  "location": "string",
  "clinicName": "string",
  "additionalClinics": "number (optional)",
  "consultationFee": "number",
  "rating": "number",
  "patientStories": "number",
  "availableToday": "boolean",
  "gender": "string",
  "qualifications": ["string"],
  "languages": ["string"],
  "services": ["string"]
}
```

### Specialty Object
```json
{
  "id": "string",
  "name": "string",
  "searchTerms": ["string"],
  "description": "string",
  "commonConditions": ["string"]
}
```

### Location Object
```json
{
  "city": "string",
  "areas": ["string"]
}
```

---

## Rate Limiting

Currently, no rate limiting is implemented. In production, consider implementing:
- 100 requests per minute per IP
- 1000 requests per hour per IP

## Authentication

Currently, no authentication is required. For production use, implement:
- API key authentication
- JWT token authentication
- OAuth 2.0

## CORS

CORS is enabled for:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

For production, update the CORS configuration in `server.js`.

---

## Testing the API

### Using cURL

```bash
# Get all doctors
curl "http://localhost:3001/api/doctors"

# Get dermatologists in JP Nagar
curl "http://localhost:3001/api/doctors?location=jp-nagar&specialty=dermatologist"

# Get search suggestions
curl "http://localhost:3001/api/search-suggestions?query=derm"

# Health check
curl "http://localhost:3001/health"
```

### Using Postman

Import the following collection URL:
`http://localhost:3001/api/docs` (when implemented)

---

## Development Notes

- All data is currently mock data stored in `data/mockData.js`
- For production, replace with actual database integration
- Implement proper error handling and validation
- Add request logging and monitoring
- Consider caching for frequently accessed data
- Implement database migrations for structured data