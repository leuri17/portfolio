import '../styles/SocialMedia.css'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/leuri17/',
    icon: <FaLinkedinIn />
  },
  {
    name: 'Github',
    link: 'https://github.com/leuri17',
    icon: <FaGithub />
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/leuri17/',
    icon: <FaInstagram />
  }
]

const SocialMedia = () => {
  return (
    <div id="social-media">
    {socialLinks.map((socialMedia) => {
      return (
        <a key={socialMedia.name} href={socialMedia.link} target="_blank" rel="noreferrer">
          {socialMedia.icon}
        </a>
      )
    })}
  </div>
  )
}

export default SocialMedia
