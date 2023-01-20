import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

const CountryList = ({ countries }) => (
  <div className="countries-container">
    { countries.map((countryData) => <Country data={countryData} key={countryData.name} />) }
  </div>
);

export default CountryList;

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
  })).isRequired,
};
