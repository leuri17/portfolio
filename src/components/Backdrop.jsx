import '../styles/Backdrop.css'
import PropTypes from 'prop-types'

const Backdrop = ({ children, ...props }) => {
  return <div id='backdrop' {...props}>{children}</div>
}

Backdrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Backdrop
