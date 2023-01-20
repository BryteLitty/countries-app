import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();
  const route = `/${data.name}`;

  const handleRoute = () => {
    navigate(route, { state: data });
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleRoute();
    }
  };

  return (
    <button type="button" tabIndex={0} onClick={handleRoute} onKeyPress={handleKeyPress} className="country-container">
      <div className="img-holder">
        <img className="flag" src={data.flag} alt={data.name} />
      </div>
      <div className="section-2">
        <h2>{data.name}</h2>
        <p>
          Population:
          <span className="dim">{data.population}</span>
        </p>

        <p>
          Capital:
          <span className="dim">{data.capital}</span>
        </p>
      </div>
    </button>

  );
};

Country.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
