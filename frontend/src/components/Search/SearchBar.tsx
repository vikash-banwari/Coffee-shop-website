import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiMapPin, FiSearch, FiChevronDown } from 'react-icons/fi';

interface SearchBarProps {
  onSearch?: (location: string, query: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [location, setLocation] = useState('Bangalore');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const router = useRouter();
  const locationRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const locations = [
    'Bangalore',
    'Delhi',
    'Mumbai',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Kolkata',
    'Ahmedabad',
    'Gurgaon',
    'Noida'
  ];

  const popularSearches = [
    'Dermatologist',
    'Pediatrician', 
    'Gynecologist/Obstetrician',
    'Cardiologist',
    'Orthopedic',
    'ENT Specialist',
    'Neurologist',
    'Psychiatrist',
    'General Physician',
    'Dentist'
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = popularSearches.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions(popularSearches.slice(0, 6));
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(location, searchQuery);
      } else {
        // Navigate to doctors page with search params
        router.push(`/doctors?location=${encodeURIComponent(location)}&specialty=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(location, suggestion);
    } else {
      router.push(`/doctors?location=${encodeURIComponent(location)}&specialty=${encodeURIComponent(suggestion)}`);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Location Dropdown */}
          <div className="relative" ref={locationRef}>
            <button
              type="button"
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex items-center px-4 py-4 bg-gray-50 border-r border-gray-200 hover:bg-gray-100 transition-colors duration-200 min-w-[160px]"
            >
              <FiMapPin className="text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium">{location}</span>
              <FiChevronDown className="ml-2 text-gray-400" />
            </button>
            
            {isLocationDropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex-1 relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search doctors, clinics, hospitals, etc."
              className="w-full px-4 py-4 outline-none text-gray-700 placeholder-gray-500"
            />
            
            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-40 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center"
                  >
                    <FiSearch className="text-gray-400 mr-3" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="px-8 py-4 bg-practo-blue hover:bg-practo-darkBlue text-white font-medium transition-colors duration-200 flex items-center"
          >
            <FiSearch className="mr-2" />
            Search
          </button>
        </div>
      </form>

      {/* Popular Searches - Only show when not focused on search */}
      {!showSuggestions && (
        <div className="mt-6">
          <p className="text-white/80 text-sm mb-3">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.slice(0, 6).map((search) => (
              <button
                key={search}
                onClick={() => handleSuggestionClick(search)}
                className="px-3 py-2 bg-white/20 text-white text-sm rounded-full hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;