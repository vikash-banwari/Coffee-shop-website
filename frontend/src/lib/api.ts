import axios from 'axios';

// Configure axios defaults
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-domain.com/api' 
    : 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized
      console.error('Unauthorized access');
    } else if (error.response?.status >= 500) {
      // Handle server errors
      console.error('Server error');
    }
    return Promise.reject(error);
  }
);

// API functions
export const doctorsAPI = {
  // Get all doctors with optional filters
  getDoctors: async (params?: Record<string, string>) => {
    const response = await api.get('/doctors', { params });
    return response.data;
  },

  // Get single doctor by ID
  getDoctor: async (id: number) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },
};

export const searchAPI = {
  // Get search suggestions
  getSuggestions: async (query?: string, type?: string) => {
    const response = await api.get('/search/suggestions', {
      params: { query, type }
    });
    return response.data;
  },

  // Get popular searches
  getPopularSearches: async () => {
    const response = await api.get('/search/popular');
    return response.data;
  },

  // Get all locations
  getLocations: async () => {
    const response = await api.get('/search/locations');
    return response.data;
  },

  // Get all specialties
  getSpecialties: async () => {
    const response = await api.get('/search/specialties');
    return response.data;
  },
};

export const healthAPI = {
  // Check API health
  checkHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};

export default api;