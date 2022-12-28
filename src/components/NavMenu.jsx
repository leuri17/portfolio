import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import '../styles/NavMenu.css'

const NavMenu = () => {
  return (
    <ul id="menu">
      <li>
        <NavLink to="projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </li>
      <li>
        <a href="https://github.com/leuri17/portfolio" target="_blank" rel="noreferrer">
          <FaGithub title="GitHub logo" /> Source
        </a>
      </li>
    </ul>
  )
}

export default NavMenu
