import { FaDev } from 'react-icons/fa'
import '../styles/BrandName.css'

const BrandName = () => {
  return (
    <a href="/" id="brand-name">
      <FaDev size={36} color="var(--text-primary)" />
      <h1>Leuri {window.screen.width >= 384 && 'Alonso'}</h1>
    </a>
  )
}

export default BrandName
