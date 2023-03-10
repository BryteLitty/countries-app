import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsMicFill, BsGearFill, BsArrowLeft } from 'react-icons/bs';
import './Header.css';
import PropTypes from 'prop-types';

const DetailsHeader = ({ countryName }) => (
  <header>
    <NavLink to="/" className="nav-links">
      <h3 className="to-back">
        <BsArrowLeft />
        <small>back to countries</small>
      </h3>
    </NavLink>

    <h2>{countryName}</h2>

    <div className="nav-icons">
      <BsMicFill />
      <BsGearFill />
    </div>
  </header>
);

export default DetailsHeader;

DetailsHeader.propTypes = {
  countryName: PropTypes.string.isRequired,
};
