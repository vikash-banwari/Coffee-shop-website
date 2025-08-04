'use client'

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: number
  location: string
  clinicName?: string
  consultationFee: number
  rating: number
  patientStories: number
  availableToday: boolean
  image?: string
  qualifications?: string[]
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const handleBookClinic = () => {
    // Handle booking logic here
    console.log('Book clinic visit for:', doctor.name)
  }

  const handleContactClinic = () => {
    // Handle contact logic here
    console.log('Contact clinic for:', doctor.name)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Section - Image and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {doctor.image ? (
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-2xl">👨‍⚕️</div>
              )}
            </div>
            {/* Image Two: Replace with actual doctor photo */}
            <div className="mt-2 text-center">
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full inline-block">
                AD
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="flex-1">
            {/* Clinic Name */}
            {doctor.clinicName && (
              <h3 className="text-lg font-semibold text-practo-lightBlue mb-1">
                {doctor.clinicName}
              </h3>
            )}
            
            {/* Doctor Name and Specialty */}
            <h4 className="text-lg font-medium text-gray-900 mb-1">
              {doctor.name}
            </h4>
            <p className="text-gray-600 text-sm mb-2">{doctor.specialty}</p>
            
            {/* Experience */}
            <p className="text-gray-600 text-sm mb-2">
              {doctor.experience} years experience overall
            </p>
            
            {/* Location */}
            <p className="text-gray-600 text-sm mb-2">
              {doctor.location} {doctor.clinicName && `• ${doctor.clinicName}`}
            </p>
            
            {/* Consultation Fee */}
            <p className="text-gray-800 font-medium text-sm mb-3">
              ₹{doctor.consultationFee} Consultation fee at clinic
            </p>
            
            {/* Rating and Reviews */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center">
                <div className="bg-practo-green text-white text-xs px-2 py-1 rounded flex items-center">
                  <span className="mr-1">👍</span>
                  <span>{doctor.rating}%</span>
                </div>
              </div>
              <button className="text-gray-600 hover:text-practo-blue text-sm underline">
                {doctor.patientStories} Patient Stories
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex flex-col justify-between lg:w-48">
          {/* Available Today Badge */}
          {doctor.availableToday && (
            <div className="flex items-center mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-600 text-sm font-medium">Available Today</span>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleBookClinic}
              className="w-full bg-practo-lightBlue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Book Clinic Visit
              <div className="text-xs text-blue-100 mt-1">No Booking Fee</div>
            </button>
            
            <button
              onClick={handleContactClinic}
              className="w-full border border-practo-lightBlue text-practo-lightBlue hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              📞 Contact Clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export type { Doctor }