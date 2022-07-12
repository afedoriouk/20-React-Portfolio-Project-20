import React from 'react'

import { Link, useLocation } from 'react-router-dom'
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
      {/* <div className="toggleButton">
        <button></button>
      </div> */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
    </div>
  )
}

export default Navbar

// describe('Nav component', () => {
//   // baseline test
//   it('renders', () => {
//     render(<Nav />)
//   })

//   // snapshot test
//   it('matches snapshot', () => {
//     const { asFragment } = render(<Nav />)

//     // assert value comparison
//   })
// })
// describe('links are visible', () => {
//   it('inserts text into the links', () => {
//     // Arrange
//     // Assert
//   })
// })

// export Nav
