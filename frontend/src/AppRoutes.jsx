import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ServicesPage from './pages/Services';
import About from './pages/About';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/platforms-cloud-and-devops/:pathId' element={<ServicesPage />} />
        <Route path='/about/:pathId' element={<About />} />
    </Routes>      
    <Footer />
    </BrowserRouter>
  )
}
