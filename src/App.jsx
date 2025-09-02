import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './page/home';
// import Portfolio from './pages/Portfolio';
// import ShopPage from './pages/shop';
// import AboutPage from './pages/about';
// import ContactPage from './pages/contact';
// import Footer from './components/footer';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/portfolio" element={<Portfolio/>} />
       <Route path="/shop" element={<ShopPage/>} />
         <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
    {/* <Footer /> */}
  </Router>
  )
}

export default App
