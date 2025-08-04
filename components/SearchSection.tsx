'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchSection() {
  const [location, setLocation] = useState('Bangalore')
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/doctors?location=${encodeURIComponent(location)}&search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const popularSearches = [
    'Dermatologist',
    'Pediatrician', 
    'Gynecologist/Obstetrician',
    'Orthopedist',
    'General Physician',
    'Dentist'
  ]

  const handlePopularSearch = (specialty: string) => {
    router.push(`/doctors?location=${encodeURIComponent(location)}&search=${encodeURIComponent(specialty)}`)
  }

  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 min-h-[70vh] flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/3 w-8 h-8 bg-pink-400 rounded-full opacity-50 animate-float" style={{animationDelay: '0.5s'}}></div>
          
          {/* Abstract shapes - Replace these comments with actual graphics */}
          {/* Image One: Add illustrated medical graphics here */}
          <div className="absolute bottom-0 left-0 w-full h-full opacity-20">
            <div className="absolute bottom-10 left-10 text-6xl">🏥</div>
            <div className="absolute bottom-20 right-32 text-4xl">👩‍⚕️</div>
            <div className="absolute top-32 left-1/3 text-5xl">🩺</div>
            <div className="absolute bottom-32 right-1/4 text-3xl">💊</div>
            <div className="absolute top-20 right-10 text-4xl">❤️</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeInUp">
              Your home for health
            </h1>
            
            <div className="max-w-4xl mx-auto mt-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                Find and Book
              </h2>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
                {/* Location Dropdown */}
                <div className="flex items-center border-r border-gray-200 px-4 py-3 min-w-[200px]">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent border-none outline-none text-gray-800 font-medium w-full cursor-pointer"
                  >
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>

                {/* Search Input */}
                <div className="flex-1 flex items-center px-4 py-3">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search doctors, clinics, hospitals, etc."
                    className="w-full border-none outline-none text-gray-800 placeholder-gray-500"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-practo-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-200"
                >
                  Search
                </button>
              </form>

              {/* Popular Searches */}
              <div className="mt-8">
                <p className="text-white text-sm mb-4">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearch(search)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-200 backdrop-blur-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}