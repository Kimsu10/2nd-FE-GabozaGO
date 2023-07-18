import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Oauth from './pages/Login/Oauth';
import Signup from './pages/Login/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
