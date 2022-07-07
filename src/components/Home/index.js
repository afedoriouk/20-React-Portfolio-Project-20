import { Link } from 'react-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo'
import './index.scss'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="Alexander" />
          <br />
          web developer
        </h1>
        <h2> Frontend Developer/Video Production</h2>
        <link to="contsct" className="flat-button">
          CONTACT ME
        </link>
      </div>
    </div>
  )
}

export default Home
