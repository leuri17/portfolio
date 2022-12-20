import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import '../styles/Navbar.css'
import BrandName from './BrandName'
import NavMenu from './NavMenu'
import SwitchThemeButton from './SwitchThemeButton'

const Navbar = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded)

    document.getElementById('menu').classList.toggle('show')
  }

  return (
    <header id="header">
      <nav>
        <BrandName />
        <NavMenu onClick={toggleMenu}/>
        <div id="header-buttons">
          <SwitchThemeButton />
          {!isMenuExpanded
            ? (
            <FaBars className="hamburger" onClick={toggleMenu} />
              )
            : (
            <FaTimes className="hamburger" onClick={toggleMenu} />
              )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
