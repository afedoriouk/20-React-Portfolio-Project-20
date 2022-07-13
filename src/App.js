import React from 'react'

import { Routes, Route } from 'react-router-dom'
// import Nav from './components/Nav'
// import Sidebar from './components/Sidebar'

import Home from './WebPages/Home'
import About from './WebPages/About'
import Contact from './WebPages/Contact/Contact'
import Portfolio from './WebPages/Portfolio/Portfolio'
// import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
// import Footer from './Footer'

// import Footer from './components/Footer'
// import Dashboard from './components/Dashboard'
import './App.css'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
