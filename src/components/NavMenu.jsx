import { FaGithub } from 'react-icons/fa'
import '../styles/NavMenu.css'

const NavMenu = ({ ...props }) => {
  return (
    <ul id="menu" {...props}>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/skills">Skills</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="https://github.com/leuri17/portfolio" target='_blank' rel='noreferrer'>
          <FaGithub title='Github logo'/> Source
        </a>
      </li>
    </ul>
  )
}

export default NavMenu
