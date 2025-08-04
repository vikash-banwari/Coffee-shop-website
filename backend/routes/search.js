const express = require('express');
const router = express.Router();
const { specialties, locations, popularSearches } = require('../data/mockData');

// GET /api/search/suggestions - Get search suggestions
router.get('/suggestions', (req, res) => {
  try {
    const { query, type } = req.query;

    let suggestions = [];

    if (!query) {
      // Return popular searches if no query
      return res.json({
        success: true,
        data: {
          specialties: popularSearches,
          locations: locations.slice(0, 6),
          popular: popularSearches
        }
      });
    }

    const searchTerm = query.toLowerCase();

    // Filter specialties
    const matchingSpecialties = specialties.filter(specialty =>
      specialty.toLowerCase().includes(searchTerm)
    );

    // Filter locations
    const matchingLocations = locations.filter(location =>
      location.toLowerCase().includes(searchTerm)
    );

    // Combine and limit results
    if (type === 'specialty' || !type) {
      suggestions = [...matchingSpecialties.slice(0, 5)];
    }
    
    if (type === 'location' || !type) {
      suggestions = [...suggestions, ...matchingLocations.slice(0, 5)];
    }

    res.json({
      success: true,
      query: query,
      count: suggestions.length,
      data: {
        specialties: matchingSpecialties.slice(0, 5),
        locations: matchingLocations.slice(0, 5),
        combined: suggestions
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch search suggestions',
      message: error.message
    });
  }
});

// GET /api/search/popular - Get popular searches
router.get('/popular', (req, res) => {
  try {
    res.json({
      success: true,
      data: popularSearches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch popular searches',
      message: error.message
    });
  }
});

// GET /api/search/locations - Get all available locations
router.get('/locations', (req, res) => {
  try {
    res.json({
      success: true,
      count: locations.length,
      data: locations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch locations',
      message: error.message
    });
  }
});

// GET /api/search/specialties - Get all available specialties
router.get('/specialties', (req, res) => {
  try {
    res.json({
      success: true,
      count: specialties.length,
      data: specialties
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch specialties',
      message: error.message
    });
  }
});

module.exports = router;