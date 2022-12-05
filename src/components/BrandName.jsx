import { Link } from 'react-router-dom'
import { FaDev } from 'react-icons/fa'
import '../styles/BrandName.css'

const BrandName = () => {
  return (
    <Link to="/" id="brand-name">
      <FaDev size={36} color="var(--text-secondary)" />
      <h1>Leuri Alonso</h1>
    </Link>
  )
}

export default BrandName
