import '../styles/Navbar.css'
import BrandName from './BrandName'
import NavMenu from './NavMenu'
import SwitchThemeButton from './SwitchThemeButton'

const Navbar = () => {
  return (
    <header id="header" style={{ width: '100vw', height: '100%', display: 'grid' }}>
      <nav>
        <BrandName />
        <NavMenu />
        <div id='header-buttons'>
          <SwitchThemeButton />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
