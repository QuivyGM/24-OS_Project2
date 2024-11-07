// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main';
import Product from './components/Product';
import Aboutus from './components/Aboutus';
import Service from './components/Service';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;