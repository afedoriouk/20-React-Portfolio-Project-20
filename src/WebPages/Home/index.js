import React from 'react'

// import { Link } from 'react-dom'
// import Logo from '../../Assets/Images/A_F_logo.phg'
import './index.css'
// import LinkedInIcon from '../src/Assets/Images/LinkedIn.png'
import Logo from '../../../src/Assets/Images/A_F_logo.png'

import LinkedInIcon from '../../../src/Assets/Images/LinkedIn.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-container">
        <h1 className="title-name">
          Hi, <br /> I'm Alexander
          <img src={Logo} alt="Alexander" />
          <br />
          Web Developer
        </h1>

        <Link to="contact" className="flat-button">
          CONTACT ME
        </Link>
        <div className="skills">
          <h3>Skills</h3>
          <ol className="list">
            <li className="item">
              <h2> Front end Developer</h2>
            </li>

            <li className="item">
              <h2>Back end Developer</h2>
            </li>

            <li className="item">
              <h2>Video Production</h2>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>HTML, CSS, JavaScript</span>
            </li>
          </ol>
        </div>
        <img src={LinkedInIcon} alt="LinkedIn" />
      </div>
    </div>
  )
}

export default Home
