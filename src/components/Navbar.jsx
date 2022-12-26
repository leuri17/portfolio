import { useState } from 'react'
import '../styles/Navbar.css'
import BrandName from './BrandName'
import Hamburger from './Hamburger'
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
          <Hamburger onClick={toggleMenu} isMenuExpanded={isMenuExpanded}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
