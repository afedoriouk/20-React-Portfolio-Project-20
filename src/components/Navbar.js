import React from 'react'

import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
//Navbar is displayed on all of the pages the same way
function Navbar() {
  // const location = useLocation()

  return (
    <div className="navbar">
      <img
        src={require('../Assets/Images/A_F_logo.png')}
        className="Logo"
        style={{ width: '10%' }}
        alt="Logo"
      />
    
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
    </div>
  )
}

export default Navbar


