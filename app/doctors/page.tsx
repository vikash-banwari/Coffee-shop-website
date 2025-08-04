'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '../../components/Header'
import DoctorCard, { Doctor } from '../../components/DoctorCard'
import DoctorFilters, { FilterOptions } from '../../components/DoctorFilters'

export default function DoctorsPage() {
  const searchParams = useSearchParams()
  const location = searchParams.get('location') || 'Bangalore'
  const searchQuery = searchParams.get('search') || ''

  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)
  const [currentLocation, setCurrentLocation] = useState(location)
  const [currentSearch, setCurrentSearch] = useState(searchQuery)
  const [filters, setFilters] = useState<FilterOptions>({
    gender: [],
    experience: [],
    patientStories: [],
    availability: [],
    sortBy: 'relevance'
  })

  // Fetch doctors from API
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `http://localhost:3001/api/doctors?location=${encodeURIComponent(currentLocation)}&specialty=${encodeURIComponent(currentSearch)}`
        )
        if (response.ok) {
          const data = await response.json()
          const doctorsData = data.data?.doctors || data.doctors || []
          setDoctors(doctorsData)
          setFilteredDoctors(doctorsData)
        }
      } catch (error) {
        console.error('Failed to fetch doctors:', error)
        // Fallback to mock data if API is not available
        setDoctors(mockDoctors)
        setFilteredDoctors(mockDoctors)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [currentLocation, currentSearch])

  // Apply filters
  useEffect(() => {
    let filtered = [...doctors]

    // Apply search filter
    if (currentSearch) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(currentSearch.toLowerCase()) ||
        (doctor.clinicName && doctor.clinicName.toLowerCase().includes(currentSearch.toLowerCase()))
      )
    }

    // Apply other filters
    if (filters.availability.includes('Available Today')) {
      filtered = filtered.filter(doctor => doctor.availableToday)
    }

    if (filters.experience.length > 0) {
      filtered = filtered.filter(doctor => {
        const exp = doctor.experience
        return filters.experience.some(range => {
          switch (range) {
            case '0-5 years': return exp <= 5
            case '5-10 years': return exp > 5 && exp <= 10
            case '10-15 years': return exp > 10 && exp <= 15
            case '15+ years': return exp > 15
            default: return true
          }
        })
      })
    }

    if (filters.patientStories.length > 0) {
      filtered = filtered.filter(doctor => {
        const stories = doctor.patientStories
        return filters.patientStories.some(range => {
          const minStories = parseInt(range.replace('+', ''))
          return stories >= minStories
        })
      })
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'experience':
        filtered.sort((a, b) => b.experience - a.experience)
        break
      case 'fees-low-to-high':
        filtered.sort((a, b) => a.consultationFee - b.consultationFee)
        break
      case 'fees-high-to-low':
        filtered.sort((a, b) => b.consultationFee - a.consultationFee)
        break
      default: // relevance
        filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredDoctors(filtered)
  }, [doctors, filters, currentSearch])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newLocation = formData.get('location') as string
    const newSearch = formData.get('search') as string
    
    setCurrentLocation(newLocation)
    setCurrentSearch(newSearch)
  }

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 min-w-[200px]">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <select 
                name="location"
                defaultValue={currentLocation}
                className="bg-transparent border-none outline-none text-gray-800 font-medium w-full cursor-pointer"
              >
                <option value="Jp Nagar">Jp Nagar</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                name="search"
                type="text"
                defaultValue={currentSearch}
                placeholder="Dermatologist"
                className="w-full border-none outline-none text-gray-800 placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="bg-practo-blue hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-medium transition duration-200"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              {filteredDoctors.length} Dermatologists available in {currentLocation}
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Book appointments with minimum wait-time & verified doctor details
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <select 
              value={filters.sortBy}
              onChange={(e) => handleFiltersChange({ ...filters, sortBy: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700"
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="experience">Sort By: Experience</option>
              <option value="fees-low-to-high">Sort By: Fees (Low to High)</option>
              <option value="fees-high-to-low">Sort By: Fees (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <DoctorFilters onFiltersChange={handleFiltersChange} />
          </div>

          {/* Doctor List */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-practo-blue"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
                {filteredDoctors.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-2">No doctors found</div>
                    <div className="text-gray-400">Try adjusting your filters or search criteria</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock data for fallback
const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sheelavathi Natraj',
    specialty: 'Dermatologist',
    experience: 21,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Sapphire Skin And Aesthetics Clinic + 1 more',
    consultationFee: 800,
    rating: 94,
    patientStories: 1506,
    availableToday: true
  },
  {
    id: '2',
    name: 'Aesthetic Heart Dermatology & Cardiology Clinic',
    specialty: '1 Dermatologist',
    experience: 12,
    location: 'Jayanagar',
    consultationFee: 800,
    rating: 97,
    patientStories: 159,
    availableToday: false
  },
  {
    id: '3',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Dermatologist',
    experience: 15,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Skin Care Clinic',
    consultationFee: 600,
    rating: 92,
    patientStories: 890,
    availableToday: true
  },
  {
    id: '4',
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    experience: 8,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Clear Skin Center',
    consultationFee: 700,
    rating: 89,
    patientStories: 445,
    availableToday: false
  }
]