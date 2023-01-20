import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ data }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/${data.name}`, { state: data });
  };

  return (
    <div onClick={handleRoute} className="country-container">
      <div className="img-holder">
        <img className="flag" src={data.flag} alt={data.name}/>
      </div>
      <div className="section-2">
        <h2>{data.name}</h2>
        <p>
          Population: 
            <span className="dim">{data.population}</span>
        </p>
        {/* <p>
          Continent: 
           <span className="dim">{data.region}</span>
        </p> */}
        <p>
          Capital: 
           <span className="dim">{data.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;