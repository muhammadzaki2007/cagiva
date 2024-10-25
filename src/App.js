import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cv from './components/Home';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Overview from './components/Overview';
import SkillPengalaman from './components/SkillPengalaman';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="Overview" element={<Overview />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Skill" element={<SkillPengalaman/>} />
        <Route path="/" element={<Cv/>} />
        
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
