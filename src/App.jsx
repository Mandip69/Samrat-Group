import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
// import ShopPage from './pages/shop';
// import AboutPage from './pages/about';
import OnlineBooking from './pages/online/online';
import ContactPage from './pages/contact/contact';
import Tranning from './pages/services/tranning';
import Wedding from './pages/services/wedding';
import Footer from './components/footer';


function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/portfolio" element={<Portfolio/>} /> 
       {/* <Route path="/shop" element={<ShopPage/>} />
         <Route path="/about" element={<AboutPage/>} />
          */}
          <Route path="/online" element={<OnlineBooking />} />
          <Route path="/services/tranning" element={<Tranning />} />
          <Route path='/services/wedding' element={<Wedding />} />
             <Route path="/contact" element={<ContactPage />} /> 
    </Routes>
    <Footer />
  </Router>
  )
}

export default App
