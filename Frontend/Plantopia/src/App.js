// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth Context and ProtectedRoute
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// main
import MainPage from './components/Main';

// plants
import Plants from './components/plants/Plants';

// community
import Community from './components/community/Community';
import Upload from './components/community/Upload';
import Post from './components/community/Post';

// shop
import Shop from './components/shop/Shop';
import ShopCat from './components/shop/ShopCat';

// aboutus
import Aboutus from './components/Aboutus';

// account
import Login from './components/account/Login';
import Signup from './components/account/Signup';
import MyAccount from './components/account/MyAccount';
import VirtualGarden from './components/account/VirtualGarden';
import MyPostsAndComments from './components/account/MyPostsAndComments';
import MyShopping from './components/account/MyShopping';

// global
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* main */}
          <Route path="/" element={<MainPage />} />

          {/* plants */}
          <Route path="/Plants" element={<Plants />} />

          {/* community */}
          <Route path="/Community" element={<Community />} />
          <Route
            path="/Upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:postId" element={<Post />} />

          {/* shop */}
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShopCat" element={<ShopCat />} />

          {/* aboutus */}
          <Route path="/Aboutus" element={<Aboutus />} />

          {/* account */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/MyAccount"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/VirtualGarden"
            element={
              <ProtectedRoute>
                <VirtualGarden />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyPostsAndComments"
            element={
              <ProtectedRoute>
                <MyPostsAndComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyShopping"
            element={
              <ProtectedRoute>
                <MyShopping />
              </ProtectedRoute>
            }
          />

          {/* global */}
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
