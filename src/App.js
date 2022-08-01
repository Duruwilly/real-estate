import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from "./components/Dropdown";
import Home from './components/Home';
import Login from './components/Login';
import NigeriaHomes from './components/NigeriaHomes';
import SAHomes from './components/SAHomes';
import GhanaHomes from './components/GhanaHomes';
import KenyaHomes from './components/KenyaHomes';
import IvoryCoastHomes from './components/IvoryCoastHomes';
import Footer from './components/Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login-register' element={<Login />} />
           <Route path='/lagos-homes' element={<NigeriaHomes />} />
           <Route path='/SA-homes' element={<SAHomes />} />
           <Route path='/Ghana-homes' element={<GhanaHomes />} />
           <Route path='/Kenya-homes' element={<KenyaHomes />} />
           <Route path='/IvoryCoast-homes' element={<IvoryCoastHomes />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
