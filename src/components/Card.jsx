import '../styles/Card.css'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Card = ({ title, message, type, onClose, ...props }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div id="card" data-theme={theme === 'dark' ? 'light' : 'dark'}>
      <h1 id="card-title" style={{ backgroundColor: `var(--bg-${type})` }}>
        {title}
      </h1>
      <p id="card-message">{message}</p>
      <div id="card-button">
        <button style={{ backgroundColor: `var(--bg-${type})` }} onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func.isRequired
}

export default Card
