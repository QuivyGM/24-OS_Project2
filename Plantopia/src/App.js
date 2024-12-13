// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/Main';

import Plants from './components/Plants';

import Community from './components/community/Community';
import Upload from './components/community/Upload';
import Post from './components/community/Post';

import Shop from './components/shop/Shop';
import ShopCat from './components/shop/ShopCat';

import Aboutus from './components/Aboutus';

import Login from './components/account/Login';
import Signup from './components/account/Signup';
import MyAccount from './components/account/MyAccount';
import VirtualGarden from './components/account/VirtualGarden';
import MyPostsAndComments from './components/account/MyPostsAndComments';
import MyShopping from './components/account/MyShopping';

import Footer from './components/Footer';

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
        <Route path="/VirtualGarden" element={<VirtualGarden />} />
        <Route path="/MyPostsAndComments" element={<MyPostsAndComments />} />
        <Route path="/MyShopping" element={<MyShopping />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/ShopCat" element={<ShopCat />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;