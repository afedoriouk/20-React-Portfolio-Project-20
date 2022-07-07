import { Link } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/A-F-logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const NavLink = NavLink
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/" />
    <img src={Logo} alt="logo" />

    <Link />

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        {/* <FontAwesomeIcon icon={faHome} color="#4e4e4e" /> */}
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        {/* <FontAwesomeIcon icon={faHome} color="#4e4e4e" /> */}
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        {/* <FontAwesomeIcon icon={faHome} color="#4e4e4e" /> */}
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/">
        {/* <FontAwesomeIcon icon={faHome} color="#4e4e4e" /> */}
      </NavLink>
    </nav>

    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="linkedin.com">
          <FontAwesomeIcon icon={faGithub} color="#3e3e3e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="skype.com" />
        {/* <FontAwesomeIcon icon={faSkype} color="#3e3e3e" /> */}
      </li>
    </ul>
  </div>
)

export default Sidebar
