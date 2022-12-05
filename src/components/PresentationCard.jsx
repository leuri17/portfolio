import '../styles/PresentationCard.css'
import { useContext } from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContext'
import SocialMedia from './SocialMedia'
import myPhoto from '../assets/images/my_photo.jpg'

const PresentationCard = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="presentationCard" data-theme={theme === 'dark' ? 'light' : 'dark'}>
      <img id='myPhoto' src={myPhoto} alt="Photo of Leuri Alonso Saturria" width="170px" />
      <h1>Leuri Alonso Saturria</h1>
      <h2>Software Developer & Networked Systems Administrator</h2>
      <hr />
      <SocialMedia/>
      <button
        style={{
          display: 'flex',
          margin: '20px auto',
          fontWeight: 'bold'
        }}>
        <a
          href="/Leuri-Alonso-CV.pdf"
          download={`Leuri-Alonso-Resume-${new Date().toLocaleDateString()}.pdf`}>
          <FaCloudDownloadAlt /> &nbsp; CV
        </a>
      </button>
    </div>
  )
}

export default PresentationCard
