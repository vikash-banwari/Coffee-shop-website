import React from 'react';
import { FiStar, FiMapPin, FiClock, FiPhone, FiCheck } from 'react-icons/fi';

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

interface DoctorCardProps {
  doctor: Doctor;
  onBookVisit: (doctor: Doctor) => void;
  onContactClinic: (doctor: Doctor) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookVisit, onContactClinic }) => {
  return (
    <div className="card p-6 mb-6 border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Doctor Image and Info */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm text-center px-2">
                {doctor.image}
              </span>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
              {doctor.availableToday && (
                <span className="flex items-center text-green-600 text-sm font-medium">
                  <FiCheck className="mr-1" size={14} />
                  Available Today
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-1">{doctor.specialty}</p>
            <p className="text-sm text-gray-500 mb-2">{doctor.qualifications}</p>
            <p className="text-sm text-gray-600 mb-3">
              {doctor.experience} years experience overall
            </p>

            {/* Location */}
            <div className="flex items-center text-gray-600 mb-2">
              <FiMapPin className="mr-2" size={14} />
              <span className="text-sm">
                {doctor.location} • {doctor.clinicName}
                {doctor.additionalInfo && (
                  <span className="text-gray-500"> {doctor.additionalInfo}</span>
                )}
              </span>
            </div>

            {/* Consultation Fee */}
            <div className="text-sm text-gray-600 mb-3">
              ₹{doctor.consultationFee} Consultation fee at clinic
            </div>

            {/* Rating and Patient Stories */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-sm">
                  <FiStar className="mr-1" size={12} fill="currentColor" />
                  {doctor.rating * 20}%
                </div>
              </div>
              <button className="text-sm text-gray-600 hover:text-practo-blue underline">
                {doctor.patientStories} Patient Stories
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 min-w-[200px]">
          <button
            onClick={() => onBookVisit(doctor)}
            className="btn-primary w-full py-3 rounded-lg font-medium"
          >
            Book Clinic Visit
            <div className="text-xs text-blue-100 mt-1">No Booking Fee</div>
          </button>
          
          <button
            onClick={() => onContactClinic(doctor)}
            className="btn-secondary w-full py-3 rounded-lg font-medium flex items-center justify-center"
          >
            <FiPhone className="mr-2" size={16} />
            Contact Clinic
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;