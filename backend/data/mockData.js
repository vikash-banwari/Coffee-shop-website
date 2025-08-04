// Mock data for doctors
const doctors = [
  {
    id: 'doc_001',
    name: 'Dr. Sheelavathi Natraj',
    specialty: 'Dermatologist',
    experience: 21,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Sapphire Skin And Aesthetics Clinic',
    additionalClinics: 1,
    consultationFee: 800,
    rating: 94,
    patientStories: 1506,
    availableToday: true,
    gender: 'Female',
    qualifications: ['MBBS', 'MD - Dermatology'],
    languages: ['English', 'Hindi', 'Kannada'],
    services: ['Acne Treatment', 'Hair Loss Treatment', 'Skin Allergies', 'Cosmetic Dermatology']
  },
  {
    id: 'doc_002',
    name: 'Dr. Aesthetic Heart',
    specialty: 'Dermatologist',
    experience: 13,
    location: 'Jayanagar,Bangalore',
    clinicName: 'Aesthetic Heart Dermatology & Cardiology Clinic',
    consultationFee: 800,
    rating: 97,
    patientStories: 159,
    availableToday: false,
    gender: 'Male',
    qualifications: ['MBBS', 'MD - Dermatology', 'Fellowship in Aesthetic Medicine'],
    languages: ['English', 'Hindi', 'Kannada'],
    services: ['Laser Treatment', 'Anti-aging Treatments', 'Skin Rejuvenation']
  },
  {
    id: 'doc_003',
    name: 'Dr. Rajesh Kumar Sharma',
    specialty: 'Dermatologist',
    experience: 15,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Advanced Skin Care Center',
    consultationFee: 600,
    rating: 92,
    patientStories: 890,
    availableToday: true,
    gender: 'Male',
    qualifications: ['MBBS', 'MD - Dermatology'],
    languages: ['English', 'Hindi'],
    services: ['Psoriasis Treatment', 'Eczema Care', 'Mole Removal']
  },
  {
    id: 'doc_004',
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    experience: 8,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Clear Skin Dermatology Clinic',
    consultationFee: 700,
    rating: 89,
    patientStories: 445,
    availableToday: false,
    gender: 'Female',
    qualifications: ['MBBS', 'MD - Dermatology'],
    languages: ['English', 'Hindi', 'Kannada'],
    services: ['Acne Scar Treatment', 'Chemical Peels', 'Botox']
  },
  {
    id: 'doc_005',
    name: 'Dr. Amit Patel',
    specialty: 'Dermatologist',
    experience: 19,
    location: 'Koramangala,Bangalore',
    clinicName: 'Skin Wellness Center',
    consultationFee: 900,
    rating: 96,
    patientStories: 2150,
    availableToday: true,
    gender: 'Male',
    qualifications: ['MBBS', 'MD - Dermatology', 'Fellowship in Dermatopathology'],
    languages: ['English', 'Hindi', 'Gujarati'],
    services: ['Vitiligo Treatment', 'Skin Cancer Screening', 'Pediatric Dermatology']
  },
  {
    id: 'doc_006',
    name: 'Dr. Sneha Reddy',
    specialty: 'Dermatologist',
    experience: 6,
    location: 'Indiranagar,Bangalore',
    clinicName: 'Glow Dermatology Clinic',
    consultationFee: 550,
    rating: 88,
    patientStories: 312,
    availableToday: true,
    gender: 'Female',
    qualifications: ['MBBS', 'MD - Dermatology'],
    languages: ['English', 'Telugu', 'Kannada'],
    services: ['Bridal Skin Treatments', 'Pigmentation Treatment', 'Hair Transplant']
  },
  {
    id: 'doc_007',
    name: 'Dr. Ravi Kumar',
    specialty: 'Pediatrician',
    experience: 12,
    location: 'JP Nagar,Bangalore',
    clinicName: 'Little Angels Pediatric Clinic',
    consultationFee: 400,
    rating: 93,
    patientStories: 1100,
    availableToday: true,
    gender: 'Male',
    qualifications: ['MBBS', 'MD - Pediatrics'],
    languages: ['English', 'Hindi', 'Kannada'],
    services: ['Child Vaccination', 'Growth Monitoring', 'Newborn Care']
  },
  {
    id: 'doc_008',
    name: 'Dr. Meera Iyer',
    specialty: 'Gynecologist',
    experience: 16,
    location: 'Jayanagar,Bangalore',
    clinicName: "Women's Health Center",
    consultationFee: 750,
    rating: 95,
    patientStories: 1820,
    availableToday: false,
    gender: 'Female',
    qualifications: ['MBBS', 'MS - Obstetrics & Gynecology'],
    languages: ['English', 'Hindi', 'Tamil'],
    services: ['Pregnancy Care', 'Fertility Consultation', 'Menstrual Disorders']
  },
  {
    id: 'doc_009',
    name: 'Dr. Suresh Babu',
    specialty: 'Orthopedist',
    experience: 20,
    location: 'Malleshwaram,Bangalore',
    clinicName: 'Bone & Joint Care Center',
    consultationFee: 800,
    rating: 91,
    patientStories: 1650,
    availableToday: true,
    gender: 'Male',
    qualifications: ['MBBS', 'MS - Orthopedics'],
    languages: ['English', 'Kannada', 'Telugu'],
    services: ['Joint Replacement', 'Sports Injuries', 'Spine Treatment']
  },
  {
    id: 'doc_010',
    name: 'Dr. Kavitha Nair',
    specialty: 'General Physician',
    experience: 11,
    location: 'BTM Layout,Bangalore',
    clinicName: 'Family Health Clinic',
    consultationFee: 350,
    rating: 90,
    patientStories: 950,
    availableToday: true,
    gender: 'Female',
    qualifications: ['MBBS', 'MD - Internal Medicine'],
    languages: ['English', 'Malayalam', 'Hindi'],
    services: ['Diabetes Management', 'Hypertension Care', 'Health Checkups']
  }
];

// Specialties with their common search terms
const specialties = [
  {
    id: 'spec_001',
    name: 'Dermatologist',
    searchTerms: ['dermatologist', 'skin doctor', 'skin specialist', 'dermatology'],
    description: 'Treats skin, hair, and nail conditions',
    commonConditions: ['Acne', 'Eczema', 'Psoriasis', 'Hair Loss', 'Skin Allergies']
  },
  {
    id: 'spec_002',
    name: 'Pediatrician',
    searchTerms: ['pediatrician', 'child doctor', 'kids doctor', 'pediatrics'],
    description: 'Specializes in the medical care of children',
    commonConditions: ['Fever', 'Vaccination', 'Growth Issues', 'Allergies', 'Cold & Cough']
  },
  {
    id: 'spec_003',
    name: 'Gynecologist/Obstetrician',
    searchTerms: ['gynecologist', 'obstetrician', 'women doctor', 'pregnancy doctor'],
    description: 'Focuses on women\'s reproductive health',
    commonConditions: ['Pregnancy Care', 'Menstrual Problems', 'PCOS', 'Fertility Issues']
  },
  {
    id: 'spec_004',
    name: 'Orthopedist',
    searchTerms: ['orthopedist', 'bone doctor', 'joint doctor', 'orthopedics'],
    description: 'Treats musculoskeletal system disorders',
    commonConditions: ['Fractures', 'Joint Pain', 'Back Pain', 'Sports Injuries']
  },
  {
    id: 'spec_005',
    name: 'General Physician',
    searchTerms: ['general physician', 'family doctor', 'internal medicine', 'gp'],
    description: 'Provides primary healthcare for adults',
    commonConditions: ['Fever', 'Diabetes', 'Hypertension', 'General Health']
  },
  {
    id: 'spec_006',
    name: 'Dentist',
    searchTerms: ['dentist', 'dental doctor', 'oral care', 'teeth doctor'],
    description: 'Treats teeth and oral health issues',
    commonConditions: ['Tooth Pain', 'Cleaning', 'Root Canal', 'Braces']
  }
];

// Cities and their areas
const locations = [
  {
    city: 'Bangalore',
    areas: [
      'JP Nagar', 'Jayanagar', 'Koramangala', 'Indiranagar', 'Malleshwaram',
      'BTM Layout', 'Whitefield', 'Electronic City', 'Hebbal', 'Rajajinagar'
    ]
  },
  {
    city: 'Mumbai',
    areas: [
      'Andheri', 'Bandra', 'Juhu', 'Lower Parel', 'Powai',
      'Thane', 'Borivali', 'Malad', 'Worli', 'Dadar'
    ]
  },
  {
    city: 'Delhi',
    areas: [
      'Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Greater Kailash',
      'Dwarka', 'Rohini', 'Janakpuri', 'Saket', 'Vasant Kunj', 'Nehru Place'
    ]
  },
  {
    city: 'Chennai',
    areas: [
      'Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery', 'Tambaram',
      'Porur', 'OMR', 'Mylapore', 'Kilpauk', 'Nungambakkam'
    ]
  }
];

// Popular searches and suggestions
const searchSuggestions = [
  'Dermatologist',
  'Pediatrician',
  'Gynecologist',
  'Orthopedist',
  'General Physician',
  'Dentist',
  'Cardiologist',
  'Neurologist',
  'Psychiatrist',
  'ENT Specialist',
  'Eye Doctor',
  'Skin Specialist',
  'Child Doctor',
  'Women Doctor',
  'Bone Doctor'
];

module.exports = {
  doctors,
  specialties,
  locations,
  searchSuggestions
};