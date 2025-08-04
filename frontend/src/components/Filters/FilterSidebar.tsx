import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterSection {
  title: string;
  key: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio';
}

interface FilterSidebarProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
  activeFilters: Record<string, string[]>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, activeFilters }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['gender', 'experience']);

  const filterSections: FilterSection[] = [
    {
      title: 'Gender',
      key: 'gender',
      type: 'checkbox',
      options: [
        { label: 'Male Doctor', value: 'male' },
        { label: 'Female Doctor', value: 'female' }
      ]
    },
    {
      title: 'Patient Stories',
      key: 'patientStories',
      type: 'checkbox',
      options: [
        { label: 'Patient Stories', value: 'true' }
      ]
    },
    {
      title: 'Experience',
      key: 'experience',
      type: 'checkbox',
      options: [
        { label: '0-5 years', value: '0-5' },
        { label: '5-10 years', value: '5-10' },
        { label: '10-15 years', value: '10-15' },
        { label: '15-20 years', value: '15-20' },
        { label: '20+ years', value: '20+' }
      ]
    },
    {
      title: 'All Filters',
      key: 'availability',
      type: 'checkbox',
      options: [
        { label: 'Available Today', value: 'today' },
        { label: 'Available Tomorrow', value: 'tomorrow' },
        { label: 'Next 7 Days', value: 'week' }
      ]
    }
  ];

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(key => key !== sectionKey)
        : [...prev, sectionKey]
    );
  };

  const handleFilterChange = (sectionKey: string, optionValue: string, checked: boolean) => {
    const currentFilters = { ...activeFilters };
    
    if (!currentFilters[sectionKey]) {
      currentFilters[sectionKey] = [];
    }

    if (checked) {
      if (!currentFilters[sectionKey].includes(optionValue)) {
        currentFilters[sectionKey] = [...currentFilters[sectionKey], optionValue];
      }
    } else {
      currentFilters[sectionKey] = currentFilters[sectionKey].filter(value => value !== optionValue);
    }

    onFilterChange(currentFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.values(activeFilters).some(values => values.length > 0);

  return (
    <div className="w-full lg:w-80 bg-white">
      {/* Filter Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-practo-blue hover:text-practo-darkBlue"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="divide-y divide-gray-200">
        {filterSections.map((section) => {
          const isExpanded = expandedSections.includes(section.key);
          const hasSelectedFilters = activeFilters[section.key]?.length > 0;

          return (
            <div key={section.key} className="p-4">
              <button
                onClick={() => toggleSection(section.key)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className={`font-medium ${hasSelectedFilters ? 'text-practo-blue' : 'text-gray-900'}`}>
                  {section.title}
                  {hasSelectedFilters && ` (${activeFilters[section.key].length})`}
                </span>
                {isExpanded ? (
                  <FiChevronUp className="text-gray-400" />
                ) : (
                  <FiChevronDown className="text-gray-400" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-3 space-y-3">
                  {section.options.map((option) => {
                    const isChecked = activeFilters[section.key]?.includes(option.value) || false;
                    
                    return (
                      <label
                        key={option.value}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => handleFilterChange(section.key, option.value, e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border-2 rounded mr-3 flex items-center justify-center ${
                          isChecked 
                            ? 'bg-practo-blue border-practo-blue' 
                            : 'border-gray-300'
                        }`}>
                          {isChecked && (
                            <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 20 20">
                              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700">
                          {option.label}
                          {option.count && (
                            <span className="text-gray-500 ml-1">({option.count})</span>
                          )}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Apply Button */}
      <div className="lg:hidden p-4 border-t border-gray-200">
        <button
          onClick={() => {/* Handle apply filters for mobile */}}
          className="btn-primary w-full py-3"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;