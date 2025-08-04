const express = require('express');
const router = express.Router();
const { specialties, searchSuggestions, locations } = require('../data/mockData');

// GET /api/search-suggestions - Get search suggestions for autocomplete
router.get('/', (req, res) => {
  try {
    const { query, type = 'all' } = req.query;

    let suggestions = [];

    switch (type) {
      case 'specialties':
        suggestions = specialties.map(spec => ({
          id: spec.id,
          name: spec.name,
          type: 'specialty',
          description: spec.description
        }));
        break;

      case 'locations':
        suggestions = locations.flatMap(location =>
          location.areas.map(area => ({
            id: `${area}-${location.city}`,
            name: `${area}, ${location.city}`,
            type: 'location',
            city: location.city,
            area: area
          }))
        );
        break;

      default: // 'all'
        // Combine specialties and popular searches
        suggestions = [
          ...specialties.map(spec => ({
            id: spec.id,
            name: spec.name,
            type: 'specialty',
            description: spec.description
          })),
          ...searchSuggestions.map((term, index) => ({
            id: `search_${index}`,
            name: term,
            type: 'search',
            description: `Search for ${term}`
          }))
        ];
    }

    // Filter suggestions based on query
    if (query && query.length > 0) {
      const queryLower = query.toLowerCase();
      suggestions = suggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(queryLower) ||
        (suggestion.description && suggestion.description.toLowerCase().includes(queryLower))
      );

      // Also check specialty search terms for better matching
      if (type === 'all' || type === 'specialties') {
        const matchingSpecialties = specialties.filter(spec =>
          spec.searchTerms.some(term => term.toLowerCase().includes(queryLower))
        ).map(spec => ({
          id: spec.id,
          name: spec.name,
          type: 'specialty',
          description: spec.description,
          matched: true
        }));

        // Add matching specialties that weren't already included
        matchingSpecialties.forEach(matchedSpec => {
          if (!suggestions.find(s => s.id === matchedSpec.id)) {
            suggestions.unshift(matchedSpec); // Add to beginning for relevance
          }
        });
      }
    }

    // Limit results for performance
    const limitedSuggestions = suggestions.slice(0, 10);

    res.json({
      success: true,
      data: {
        suggestions: limitedSuggestions,
        query,
        type,
        count: limitedSuggestions.length,
        total: suggestions.length
      }
    });

  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch search suggestions'
    });
  }
});

// GET /api/search-suggestions/specialties - Get all specialties
router.get('/specialties', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        specialties: specialties.map(spec => ({
          id: spec.id,
          name: spec.name,
          description: spec.description,
          commonConditions: spec.commonConditions
        })),
        count: specialties.length
      }
    });
  } catch (error) {
    console.error('Error fetching specialties:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch specialties'
    });
  }
});

// GET /api/search-suggestions/locations - Get all locations
router.get('/locations', (req, res) => {
  try {
    const { city } = req.query;

    let locationData = locations;

    if (city) {
      locationData = locations.filter(loc =>
        loc.city.toLowerCase() === city.toLowerCase()
      );
    }

    res.json({
      success: true,
      data: {
        locations: locationData,
        count: locationData.length
      }
    });
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch locations'
    });
  }
});

// GET /api/search-suggestions/popular - Get popular searches
router.get('/popular', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        popularSearches: searchSuggestions,
        count: searchSuggestions.length
      }
    });
  } catch (error) {
    console.error('Error fetching popular searches:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch popular searches'
    });
  }
});

module.exports = router;