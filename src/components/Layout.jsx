import '../styles/Layout.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

/** Future Layout component for react-router.
 * Now is for testing the theme and create the firsts
 * components
 */
const Layout = () => {
  return (
    <>
      <Navbar />

      <section id="main">
        <Outlet />
      </section>

      <footer></footer>
    </>
  )
}

export default Layout
