const express = require('express');
const router = express.Router();
const { doctors, specialties } = require('../data/mockData');

// GET /api/doctors - Get all doctors with filtering and search
router.get('/', (req, res) => {
  try {
    const {
      location,
      specialty,
      gender,
      experience,
      availability,
      sortBy = 'relevance',
      page = 1,
      limit = 10
    } = req.query;

    let filteredDoctors = [...doctors];

    // Filter by location (case-insensitive partial match)
    if (location) {
      filteredDoctors = filteredDoctors.filter(doctor =>
        doctor.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by specialty (case-insensitive partial match)
    if (specialty) {
      filteredDoctors = filteredDoctors.filter(doctor =>
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
        doctor.name.toLowerCase().includes(specialty.toLowerCase()) ||
        (doctor.clinicName && doctor.clinicName.toLowerCase().includes(specialty.toLowerCase()))
      );
    }

    // Filter by gender
    if (gender) {
      const genderArray = Array.isArray(gender) ? gender : [gender];
      filteredDoctors = filteredDoctors.filter(doctor =>
        genderArray.includes(doctor.gender)
      );
    }

    // Filter by experience range
    if (experience) {
      const expArray = Array.isArray(experience) ? experience : [experience];
      filteredDoctors = filteredDoctors.filter(doctor => {
        return expArray.some(range => {
          switch (range) {
            case '0-5 years': return doctor.experience <= 5;
            case '5-10 years': return doctor.experience > 5 && doctor.experience <= 10;
            case '10-15 years': return doctor.experience > 10 && doctor.experience <= 15;
            case '15+ years': return doctor.experience > 15;
            default: return true;
          }
        });
      });
    }

    // Filter by availability
    if (availability) {
      const availArray = Array.isArray(availability) ? availability : [availability];
      if (availArray.includes('Available Today')) {
        filteredDoctors = filteredDoctors.filter(doctor => doctor.availableToday);
      }
    }

    // Sort the results
    switch (sortBy) {
      case 'experience':
        filteredDoctors.sort((a, b) => b.experience - a.experience);
        break;
      case 'fees-low-to-high':
        filteredDoctors.sort((a, b) => a.consultationFee - b.consultationFee);
        break;
      case 'fees-high-to-low':
        filteredDoctors.sort((a, b) => b.consultationFee - a.consultationFee);
        break;
      case 'rating':
        filteredDoctors.sort((a, b) => b.rating - a.rating);
        break;
      default: // relevance
        filteredDoctors.sort((a, b) => {
          // Sort by rating first, then by patient stories
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.patientStories - a.patientStories;
        });
    }

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);

    // Response with metadata
    res.json({
      success: true,
      data: {
        doctors: paginatedDoctors,
        pagination: {
          current: pageNum,
          total: Math.ceil(filteredDoctors.length / limitNum),
          count: paginatedDoctors.length,
          totalDoctors: filteredDoctors.length
        },
        filters: {
          location,
          specialty,
          gender,
          experience,
          availability,
          sortBy
        }
      }
    });

  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch doctors'
    });
  }
});

// GET /api/doctors/:id - Get a specific doctor by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const doctor = doctors.find(doc => doc.id === id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: 'Doctor not found',
        message: `No doctor found with ID: ${id}`
      });
    }

    res.json({
      success: true,
      data: doctor
    });

  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch doctor details'
    });
  }
});

// GET /api/doctors/specialty/:specialty - Get doctors by specialty
router.get('/specialty/:specialty', (req, res) => {
  try {
    const { specialty } = req.params;
    const { location, sortBy = 'relevance' } = req.query;

    let filteredDoctors = doctors.filter(doctor =>
      doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
    );

    if (location) {
      filteredDoctors = filteredDoctors.filter(doctor =>
        doctor.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Sort by relevance (rating and patient stories)
    if (sortBy === 'relevance') {
      filteredDoctors.sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return b.patientStories - a.patientStories;
      });
    }

    res.json({
      success: true,
      data: {
        doctors: filteredDoctors,
        specialty,
        location,
        count: filteredDoctors.length
      }
    });

  } catch (error) {
    console.error('Error fetching doctors by specialty:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch doctors by specialty'
    });
  }
});

// GET /api/doctors/available/today - Get doctors available today
router.get('/available/today', (req, res) => {
  try {
    const { location, specialty } = req.query;

    let availableDoctors = doctors.filter(doctor => doctor.availableToday);

    if (location) {
      availableDoctors = availableDoctors.filter(doctor =>
        doctor.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (specialty) {
      availableDoctors = availableDoctors.filter(doctor =>
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
      );
    }

    res.json({
      success: true,
      data: {
        doctors: availableDoctors,
        count: availableDoctors.length,
        message: 'Doctors available today'
      }
    });

  } catch (error) {
    console.error('Error fetching available doctors:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch available doctors'
    });
  }
});

module.exports = router;