import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/components/Layout/Layout';
import DoctorCard from '@/components/Doctor/DoctorCard';
import FilterSidebar from '@/components/Filters/FilterSidebar';
import SearchBar from '@/components/Search/SearchBar';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  location: string;
  clinicName: string;
  consultationFee: number;
  rating: number;
  patientStories: number;
  availableToday: boolean;
  image: string;
  qualifications: string;
  additionalInfo?: string;
}

const DoctorsPage: React.FC = () => {
  const router = useRouter();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState('relevance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('');

  // Extract search params from URL
  useEffect(() => {
    const { location, specialty } = router.query;
    if (location) setSearchLocation(location as string);
    if (specialty) setSearchSpecialty(specialty as string);
  }, [router.query]);

  // Fetch doctors data
  useEffect(() => {
    fetchDoctors();
  }, [searchLocation, searchSpecialty, filters, sortBy]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (searchLocation) params.append('location', searchLocation);
      if (searchSpecialty) params.append('specialty', searchSpecialty);
      if (sortBy) params.append('sortBy', sortBy);
      
      // Add filter params
      Object.entries(filters).forEach(([key, values]) => {
        values.forEach(value => {
          if (key === 'availability' && value === 'today') {
            params.append('availableToday', 'true');
          } else if (key === 'experience') {
            // Convert experience range to minimum experience
            const minExp = value.split('-')[0];
            if (minExp !== '20+') {
              params.append('experience', minExp);
            } else {
              params.append('experience', '20');
            }
          }
        });
      });

      const response = await axios.get(`/api/doctors?${params.toString()}`);
      setDoctors(response.data.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch doctors. Please try again.');
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
  };

  const handleSearch = (location: string, specialty: string) => {
    setSearchLocation(location);
    setSearchSpecialty(specialty);
    // Update URL without page reload
    router.push(`/doctors?location=${encodeURIComponent(location)}&specialty=${encodeURIComponent(specialty)}`, undefined, { shallow: true });
  };

  const handleBookVisit = (doctor: Doctor) => {
    // TODO: Implement booking functionality
    alert(`Booking appointment with ${doctor.name}`);
  };

  const handleContactClinic = (doctor: Doctor) => {
    // TODO: Implement contact functionality
    alert(`Contacting ${doctor.clinicName}`);
  };

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Rating' },
    { value: 'experience', label: 'Experience' },
    { value: 'fee', label: 'Fee: Low to High' }
  ];

  return (
    <>
      <Head>
        <title>Find Doctors - Practo Clone</title>
        <meta name="description" content="Find and book appointments with qualified doctors in your area." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        {/* Search Bar Section */}
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar 
              onSearch={handleSearch}
              className="max-w-4xl"
            />
          </div>
        </section>

        {/* Results Header */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {doctors.length} {searchSpecialty || 'Doctors'} available in {searchLocation || 'Jp nagar, Bangalore'}
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  ✓ Book appointments with minimum wait-time & verified doctor details
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-practo-blue focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FiFilter size={16} />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filters Sidebar - Desktop */}
              <aside className="hidden lg:block lg:w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterSidebar
                    onFilterChange={handleFilterChange}
                    activeFilters={filters}
                  />
                </div>
              </aside>

              {/* Doctor Listings */}
              <main className="flex-1">
                {loading ? (
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="card p-6 animate-pulse">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <div className="text-red-500 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Doctors</h3>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                      onClick={fetchDoctors}
                      className="btn-primary"
                    >
                      Try Again
                    </button>
                  </div>
                ) : doctors.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Doctors Found</h3>
                    <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {doctors.map((doctor) => (
                      <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                        onBookVisit={handleBookVisit}
                        onContactClinic={handleContactClinic}
                      />
                    ))}
                  </div>
                )}
              </main>
            </div>
          </div>
        </section>

        {/* Mobile Filters Modal */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
            <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="overflow-y-auto h-full pb-20">
                <FilterSidebar
                  onFilterChange={handleFilterChange}
                  activeFilters={filters}
                />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default DoctorsPage;