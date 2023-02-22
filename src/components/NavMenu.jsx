import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'
import '../styles/NavMenu.css'

const NavMenu = ({ onClick, ...props }) => {
  return (
    <ul id="menu">
      <li>
        <NavLink to="projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClick}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="skills" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClick}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClick}>
          Contact
        </NavLink>
      </li>
      <li>
        <a href="https://github.com/leuri17/portfolio" target="_blank" rel="noreferrer" onClick={onClick}>
          <FaGithub title="GitHub logo" /> Source
        </a>
      </li>
    </ul>
  )
}

NavMenu.propTypes = {
  onClick: PropTypes.func
}

export default NavMenu
