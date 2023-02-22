import '../styles/PresentationCard.css'
import { useContext } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import SocialMedia from './SocialMedia'
import myPhoto from '../assets/images/my_photo.jpg'
import { NavLink } from 'react-router-dom'

const PresentationCard = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="presentation-card" data-theme={theme === 'dark' ? 'light' : 'dark'}>
      <img id="my-photo" src={myPhoto} alt="Photo of Leuri Alonso Saturria" width="170px" />
      <h1>Leuri Alonso Saturria</h1>
      <h2>Full-Stack Developer & Networked Systems Administrator</h2>
      <hr />
      <SocialMedia />
      <button
        style={{
          margin: '20px auto',
          fontWeight: 'bold'
        }}>
        <NavLink to="contact">
          Contact &nbsp; <FaExternalLinkAlt />
        </NavLink>
      </button>
    </div>
  )
}

export default PresentationCard
