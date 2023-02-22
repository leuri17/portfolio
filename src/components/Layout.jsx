import '../styles/Layout.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import LanguageButton from './LanguageButton'

const Layout = () => {
  return (
    <>
      <Navbar />

      <div id="main">
        <Outlet />
        <LanguageButton />
      </div>

      <Footer />
    </>
  )
}

export default Layout
