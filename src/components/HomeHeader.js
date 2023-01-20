import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsMicFill, BsGearFill } from 'react-icons/bs';
import './Header.css';

const HomeHeader = () => (
  <header>
    <NavLink to="/" className="nav-links" />

    <h2>List of Countries and Their Flags</h2>

    <div className="nav-icons">
      <BsMicFill />
      <BsGearFill />
    </div>
  </header>
);

export default HomeHeader;
