import '../styles/Footer.css'
import { useLocation } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const Footer = () => {
  const location = useLocation().pathname

  return (
    <footer id='footer'>
      <p>&copy; 2022 Leuri Alonso Saturria</p>
      {location !== '/' && <SocialMedia />}
    </footer>
  )
}

export default Footer
