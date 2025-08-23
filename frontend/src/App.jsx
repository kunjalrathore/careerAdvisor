import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Signup from './components/signup';
import Login from './components/login';
import Home from './page/home';
import Hero from './page/Hero';
import AdvisorSection from './page/AdviserSection';
import Navbar from './components/navbar';
import { Toaster } from 'react-hot-toast';

function App() {
const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  return (
    <>
      <Router>
      {/* Global components */}
      <Navbar />
      <Toaster />

      {/* Routes */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Hero />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {isLoggedIn && <Route path="/advisor-section" element={<AdvisorSection />} />}
      </Routes>
    </Router>
        </>
  )
}

export default App
