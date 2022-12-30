import '../styles/AnimatedBorderContainer.css'
import PropTypes from 'prop-types'

const AnimatedBorderContainer = ({ firstBorder = '#3282b8', secondBorder = '#50d890', children, ...props }) => {
  return (
    <div className="container" style={{ '--first-border': firstBorder, '--second-border': secondBorder }}>
      <span></span>
      {children}
    </div>
  )
}

AnimatedBorderContainer.propTypes = {
  firstBorder: PropTypes.string,
  secondBorder: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default AnimatedBorderContainer
