import '../styles/LanguageButton.css'
import SPAIN_FLAG from '../assets/SVGs/Flags/spain.svg'
import UK_FLAG from '../assets/SVGs/Flags/united-kingdom.svg'
import { useState } from 'react'

const LanguageButton = () => {
  const [lang, setLang] = useState('en-UK')

  const toggleLang = () => {
    setLang(lang === 'en-UK' ? 'es-ES' : 'en-UK')
  }

  return (
      <img
        id='lang-btn'
        alt="United States"
        width={24}
        onClick={toggleLang}
        src={lang === 'es-ES' ? SPAIN_FLAG : UK_FLAG}
      />
  )
}

export default LanguageButton
