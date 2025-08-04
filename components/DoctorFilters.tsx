'use client'

import { useState } from 'react'

interface FilterOptions {
  gender: string[]
  experience: string[]
  patientStories: string[]
  availability: string[]
  sortBy: string
}

interface DoctorFiltersProps {
  onFiltersChange: (filters: FilterOptions) => void
}

export default function DoctorFilters({ onFiltersChange }: DoctorFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<FilterOptions>({
    gender: [],
    experience: [],
    patientStories: [],
    availability: [],
    sortBy: 'relevance'
  })

  const filterCategories = [
    {
      title: 'Gender',
      key: 'gender' as keyof FilterOptions,
      options: ['Male', 'Female']
    },
    {
      title: 'Patient Stories',
      key: 'patientStories' as keyof FilterOptions,
      options: ['5+', '10+', '25+', '50+', '100+']
    },
    {
      title: 'Experience',
      key: 'experience' as keyof FilterOptions,
      options: ['0-5 years', '5-10 years', '10-15 years', '15+ years']
    },
    {
      title: 'Availability',
      key: 'availability' as keyof FilterOptions,
      options: ['Available Today', 'Available Tomorrow', 'Available in 3 days']
    }
  ]

  const handleFilterChange = (category: keyof FilterOptions, option: string, checked: boolean) => {
    const newFilters = { ...filters }
    const categoryFilters = newFilters[category] as string[]
    
    if (checked) {
      categoryFilters.push(option)
    } else {
      const index = categoryFilters.indexOf(option)
      if (index > -1) {
        categoryFilters.splice(index, 1)
      }
    }
    
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleSortChange = (sortBy: string) => {
    const newFilters = { ...filters, sortBy }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      gender: [],
      experience: [],
      patientStories: [],
      availability: [],
      sortBy: 'relevance'
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const activeFilterCount = Object.values(filters).flat().filter(Boolean).length - 1 // Subtract 1 for sortBy

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 border-b border-gray-200"
        >
          <div className="flex items-center">
            <span className="font-medium text-gray-900">All Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filters Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        {/* Sort By Section */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
          <div className="space-y-2">
            {['relevance', 'experience', 'fees-low-to-high', 'fees-high-to-low'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="sortBy"
                  value={option}
                  checked={filters.sortBy === option}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="text-practo-blue focus:ring-practo-blue"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {option.replace('-', ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        {filterCategories.map((category) => (
          <div key={category.title} className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3">{category.title}</h3>
            <div className="space-y-2">
              {category.options.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters[category.key] as string[]).includes(option)}
                    onChange={(e) => handleFilterChange(category.key, option, e.target.checked)}
                    className="text-practo-blue focus:ring-practo-blue rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Clear Filters */}
        {activeFilterCount > 0 && (
          <div className="p-4">
            <button
              onClick={clearAllFilters}
              className="text-practo-blue hover:text-blue-700 text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export type { FilterOptions }