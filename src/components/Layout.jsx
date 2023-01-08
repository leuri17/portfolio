import '../styles/Layout.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Navbar />

      <div id="main">
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default Layout
