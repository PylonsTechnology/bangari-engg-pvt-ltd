import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
// import Home from './pages/Home';
import HeroSection from './pages/Home';
import About from './pages/About';
import QualityProductRange from './pages/QualityProductRange';
import Slider from './pages/Clients';
import { NavbarSimple } from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/Contact';
// import { StickyNavbar } from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
     <NavbarSimple />
    
      <Routes>
        <Route 
          path="/" 
          element={
            <>
            
            
              <HeroSection />
             
            </>
          } 
        />
         <Route 
          path="/about" 
          element={
            <>
             <About />
            </>
          } 
        />
        <Route 
          path="/product" 
          element={
            <>
             <QualityProductRange />
            </>
          } 
        />
        <Route 
          path="/clients" 
          element={
            <>
             {/* <InfiniteMovingCardsDemo /> */}
             <Slider />
            </>
          } 
        />
         <Route 
          path="/contact" 
          element={
            <>
             {/* <InfiniteMovingCardsDemo /> */}
             <ContactUs />
            </>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App