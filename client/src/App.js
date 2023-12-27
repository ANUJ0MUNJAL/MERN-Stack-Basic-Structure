import React from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar';

import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/SignUp';
import "./App.css";

export const App = () => {
  return (
    <div>
      <NavBar />
     
      <Routes>
      <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
      </div>
  )
}
export default App;