// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Plants from './components/Plants';
import Aboutus from './components/Aboutus';
import Community from './components/Community';
import ShopCat from './components/ShopCat';
import Upload from './components/Upload';
import Shop from './components/Shop';
import Post from './components/Post';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Plants" element={<Plants />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/ShopCat" element={<ShopCat />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default App;