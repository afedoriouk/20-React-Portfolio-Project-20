import './index.scss'
import Logo from '../../assets/A-F-logo.png'

import { useRef } from 'react'

const Logo = () => {
  const byRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="S" />
    </div>
  )
}
export default Logo
