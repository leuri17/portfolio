import '../styles/Footer.css'
import { useLocation } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const Footer = () => {
  const location = useLocation().pathname

  return (
    <footer id='footer'>
      <p>Copyright &copy; | Coded by <span style={{ fontWeight: 'bold' }}>Leuri Alonso </span></p>
      {location !== '/' && <SocialMedia />}
    </footer>
  )
}

export default Footer
