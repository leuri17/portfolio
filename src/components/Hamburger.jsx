import PropTypes from 'prop-types'
import '../styles/Hamburger.css'

const Hamburger = ({ onClick, isMenuExpanded, ...props }) => {
  return (
    <button id='hamburger' className={isMenuExpanded ? 'cross' : ''} onClick={() => {
      onClick()
    }} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuExpanded: PropTypes.bool.isRequired
}

export default Hamburger
