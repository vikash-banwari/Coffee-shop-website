// Mock data for doctors and medical specialties
const doctors = [
  {
    id: 1,
    name: "Dr. Sheelavathi Natraj",
    specialty: "Dermatologist",
    experience: 21,
    location: "JP Nagar, Bangalore",
    clinicName: "Sapphire Skin And Aesthetics Clinic",
    consultationFee: 800,
    rating: 4.9,
    patientStories: 1506,
    availableToday: true,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, MD (Dermatology)",
    additionalInfo: "+ 1 more clinic"
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialty: "Dermatologist",
    experience: 15,
    location: "Jayanagar, Bangalore",
    clinicName: "Aesthetic Heart Dermatology & Cardiology Clinic",
    consultationFee: 800,
    rating: 4.7,
    patientStories: 159,
    availableToday: false,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, MD (Dermatology), Fellowship in Cosmetic Dermatology"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    experience: 12,
    location: "Koramangala, Bangalore",
    clinicName: "Glow Skin Clinic",
    consultationFee: 600,
    rating: 4.8,
    patientStories: 892,
    availableToday: true,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, DVD, DNB (Dermatology)"
  },
  {
    id: 4,
    name: "Dr. Amit Patel",
    specialty: "Pediatrician",
    experience: 18,
    location: "Whitefield, Bangalore",
    clinicName: "Child Care Medical Center",
    consultationFee: 500,
    rating: 4.6,
    patientStories: 2341,
    availableToday: true,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, MD (Pediatrics)"
  },
  {
    id: 5,
    name: "Dr. Sunita Reddy",
    specialty: "Gynecologist/Obstetrician",
    experience: 20,
    location: "Indiranagar, Bangalore",
    clinicName: "Women's Health Clinic",
    consultationFee: 700,
    rating: 4.9,
    patientStories: 1876,
    availableToday: false,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, MD (Obstetrics & Gynecology)"
  },
  {
    id: 6,
    name: "Dr. Arun Singh",
    specialty: "Dermatologist",
    experience: 8,
    location: "Malleswaram, Bangalore",
    clinicName: "Skin Solutions Clinic",
    consultationFee: 450,
    rating: 4.5,
    patientStories: 567,
    availableToday: true,
    image: "Image Two - Doctor Profile Photo",
    qualifications: "MBBS, DVD"
  }
];

const specialties = [
  "Dermatologist",
  "Pediatrician", 
  "Gynecologist/Obstetrician",
  "Cardiologist",
  "Orthopedic",
  "ENT Specialist",
  "Neurologist",
  "Psychiatrist",
  "General Physician",
  "Dentist"
];

const locations = [
  "JP Nagar",
  "Jayanagar", 
  "Koramangala",
  "Whitefield",
  "Indiranagar",
  "Malleswaram",
  "Electronic City",
  "HSR Layout",
  "BTM Layout",
  "Marathahalli"
];

const popularSearches = [
  { name: "Dermatologist", icon: "🩺" },
  { name: "Pediatrician", icon: "👶" },
  { name: "Gynecologist/Obstetrician", icon: "🤱" },
  { name: "Orthopedic", icon: "🦴" },
  { name: "Cardiologist", icon: "❤️" },
  { name: "ENT Specialist", icon: "👂" }
];

module.exports = {
  doctors,
  specialties,
  locations,
  popularSearches
};