import { Link } from 'react-router-dom'
import '../styles/BrandName.css'
import Logo from './Logo'

const BrandName = () => {
  return (
    <Link to="/" id="brand-name">
      <Logo size={36}/>
      <h1>Leuri Alonso</h1>
    </Link>
  )
}

export default BrandName
