// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main';
import Login from './components/Login';
import Plants from './components/Plants';
import Aboutus from './components/Aboutus';
import Community from './components/Community';
import Shop from './components/Shop';
import VirtualGarden from './components/VirtualGarden';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Plants" element={<Plants />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/VirtualGarden" element={<VirtualGarden />} />
      </Routes>
    </Router>
  );
};

export default App;