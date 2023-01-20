import React from "react";
import Country from "./Country";


const CountryList = ({ countries }) => (
  <div className="countries-container">
    { countries.map((countryData) => <Country data={countryData} key={countryData.name} />) }
  </div>
);

export default CountryList;