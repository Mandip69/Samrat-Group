import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import OnlineBooking from './pages/online/online';
import ContactPage from './pages/contact/contact';
import Tranning from './pages/services/tranning';
import Wedding from './pages/services/wedding';
import Barta from './pages/services/barta';
import Event from './pages/services/event';
import Indoor from './pages/services/indoor';
import Pasni from './pages/services/pasni';

import Brand from './pages/services/brand';

// import Studio from './pages/services/studio';
import Camera from './pages/rental/camera';
import Projector from './pages/rental/projector';
import Drone from './pages/rental/drone';
import Website from './pages/service/web'
import Websitedev from './pages/service/webdev'
import Social from './pages/service/social'
import GraphicDesign from './pages/service/graphic';
import Footer from './components/footer';
import StudioRental from './pages/rental/studio';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import added

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>} /> 
        <Route path="/online" element={<OnlineBooking />} />
        <Route path="services/tranning" element={<Tranning />} />
        <Route path='/services/wedding' element={<Wedding />} />
        <Route path='/services/barta' element={<Barta />}/>
        <Route path='/services/event' element={<Event />}/>
        <Route path='/services/indoor' element={<Indoor />}/>
        <Route path='/services/pasni' element={ <Pasni/>}/>
        <Route path='/services/brand' element={ <Brand/>}/>
        {/* <Route path='/services/studio' element={<Studio />} /> */}
        <Route path="/rental/camera" element={<Camera />} />
        <Route path='/rental/projector' element={<Projector />} />
        <Route path="/rental/drone" element={<Drone />} />
        <Route path="/rental/studio" element={<StudioRental/>} />
        <Route path='/service/web' element={<Website />} />
        <Route path='/service/webdev' element={<Websitedev />} />
        <Route path="/service/social" element={<Social />} />
        <Route path='/service/graphic' element={<GraphicDesign />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
      <Footer />
      {/* 9841419740 */}
    </Router>
  )
}

export default App;
