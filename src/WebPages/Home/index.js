import React from 'react'

// import { Link } from 'react-dom'
// import Logo from '../../Assets/Images/A_F_logo.phg'
import './index.css'
// import LinkedInIcon from '../src/Assets/Images/LinkedIn.png'
// import Logo from '../../../src/Assets/Images/A_F_logo.png'
// import Logo from '../src/Assets/Images/A_F_logo.png'
// import LinkedInIcon from '../../../src/Assets/Images/LinkedIn.png'
import { Link } from 'react-router-dom'
import './index.css'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-container">
        <h1 className="title-name">Hi, I'm Alexander Web Developer</h1>

        <div className="Skills">
          <h1>Skills</h1>
          <li>Front end Developer</li>
          <li>Back end Developer</li>
          <li>Video Production</li>
          Languages
          <li>HTML, CSS, JavaScript</li>
        </div>
      </div>
      <div>
        <Link to="contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <img
        src={require('../../../src/Assets/Images/LinkedIn.png')}
        className="LinkedInIcon"
        style={{ width: '4%' }}
        alt="LinkedInIcon"
      /> */}
    </div>
  )
}

export default Home
