import PropTypes from 'prop-types'

const Logo = ({ size, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="125 125 250 250" width={size} height={size}>
      <rect style={{ fill: '#202020' }} x="125" y="125" width="250" height="250" rx="50" ry="50" />
      <path
        d="M 264.2 197.467 C 264.2 197.467 246.2 194.467 246.2 210.467 L 246.2 220.467 L 221.2 254.467 L 221.2 210.467 C 221.224 194.467 203.2 197.467 203.2 197.467 L 201.2 194.467 L 266.2 194.467 L 264.2 197.467 Z"
        style={{ paintOrder: 'fill', fillRule: 'nonzero', fill: 'rgba(239, 183, 16, 0.81)' }}
      />
      <path
        d="M 321.554 312.949 L 213.2 312.945 L 214.974 310.463 C 214.974 310.463 221.554 310.949 221.591 301.467 L 221.591 289.467 L 246.591 255.467 L 246.554 297.949 C 246.554 307.949 261.554 310.949 281.554 310.949 C 301.554 310.949 319.554 307.949 319.554 277.949 L 321.554 277.949"
        style={{ paintOrder: 'fill', fillRule: 'nonzero', fill: 'rgba(239, 183, 16, 0.81)' }}
      />
      <path
        d="M 293.006 173.768 C 269.667 209.39 220.903 277.992 190.848 317.508 C 181.004 330.513 177.222 335.162 178.787 332.586 C 184.72 322.346 227.031 261.533 253.955 224.53 C 268.82 204.112 296.918 166.732 297.44 166.732 C 297.57 166.732 295.614 169.936 293.006 173.768 Z"
        style={{ paintOrder: 'fill', fillRule: 'nonzero', fill: 'rgba(239, 183, 16, 0.81)' }}
      />
    </svg>
  )
}

Logo.propTypes = {
  size: PropTypes.number.isRequired
}

export default Logo
