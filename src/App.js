import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountriesHome from './components/HomePage';
import CountryDetails from './components/DetailsPage';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<CountriesHome />} />
        <Route path="/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
