const express = require('express');
const router = express.Router();
const { doctors } = require('../data/mockData');

// GET /api/doctors - Get doctors with optional filtering
router.get('/', (req, res) => {
  try {
    const { location, specialty, experience, sortBy, availableToday } = req.query;
    
    let filteredDoctors = [...doctors];

    // Filter by location
    if (location) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Filter by specialty
    if (specialty) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
      );
    }

    // Filter by minimum experience
    if (experience) {
      const minExperience = parseInt(experience);
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.experience >= minExperience
      );
    }

    // Filter by availability today
    if (availableToday === 'true') {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.availableToday);
    }

    // Sort results
    if (sortBy) {
      switch (sortBy.toLowerCase()) {
        case 'rating':
          filteredDoctors.sort((a, b) => b.rating - a.rating);
          break;
        case 'experience':
          filteredDoctors.sort((a, b) => b.experience - a.experience);
          break;
        case 'fee':
          filteredDoctors.sort((a, b) => a.consultationFee - b.consultationFee);
          break;
        case 'relevance':
        default:
          // Keep default order
          break;
      }
    }

    res.json({
      success: true,
      count: filteredDoctors.length,
      totalDoctors: doctors.length,
      data: filteredDoctors,
      filters: {
        location,
        specialty,
        experience,
        sortBy,
        availableToday
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch doctors',
      message: error.message
    });
  }
});

// GET /api/doctors/:id - Get single doctor by ID
router.get('/:id', (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(d => d.id === doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        error: 'Doctor not found',
        message: `No doctor found with ID ${doctorId}`
      });
    }

    res.json({
      success: true,
      data: doctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch doctor',
      message: error.message
    });
  }
});

module.exports = router;